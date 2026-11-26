/* Drug additives lookup — ported from lekis1020/drug_additives.
 * Search index: additives/drugs.json (name, company, code only).
 * Detail: MFDS HTML via local /api/mfds-detail (serve-preview.py) or the
 * CORS-safe Cloudflare Worker used on static GitHub Pages.
 * Do not invent additives or ingredients.
 */
(function (global) {
  "use strict";

  const PAGE_SIZE = 20;
  /* Static-host detail proxy (Workers). Same MFDS HTML as NetworkManager.swift. */
  const MFDS_PAGES_PROXY = "https://allergy-mfds-detail.lekis1020.workers.dev/";
  const MFDS_ITEM_URL =
    "https://nedrug.mfds.go.kr/pbp/CCBBB01/getItemDetailCache?cacheSeq=";
  let drugs = null;
  let loadPromise = null;
  let cachedQuery = "";
  let cachedTail = [];

  /* Directory that contains additives.js — stable under /allergy-wiki-phone-preview/. */
  function additivesDir() {
    try {
      const scripts = document.getElementsByTagName("script");
      for (let i = scripts.length - 1; i >= 0; i -= 1) {
        const src = scripts[i].src || "";
        const idx = src.indexOf("/additives/additives.js");
        if (idx !== -1) return src.slice(0, idx + "/additives/".length);
      }
    } catch (_err) {
      /* ignore */
    }
    try {
      return new URL("additives/", document.baseURI).href;
    } catch (_err2) {
      return "additives/";
    }
  }

  function drugsJsonUrl() {
    return additivesDir() + "drugs.json";
  }

  function isStaticPagesHost() {
    try {
      const host = String(location.hostname || "");
      if (!host) return false;
      if (host === "127.0.0.1" || host === "localhost") return false;
      return host.indexOf("github.io") !== -1 || host.indexOf("pages.dev") !== -1;
    } catch (_err) {
      return false;
    }
  }

  function loadDrugs() {
    if (drugs) return Promise.resolve(drugs);
    if (loadPromise) return loadPromise;
    loadPromise = fetch(drugsJsonUrl(), { cache: "default" })
      .then((r) => {
        if (!r.ok) throw new Error("Failed to load drugs.json (" + r.status + ")");
        return r.json();
      })
      .then((rows) => {
        drugs = Array.isArray(rows) ? rows : [];
        return drugs;
      })
      .catch((err) => {
        loadPromise = null;
        throw err;
      });
    return loadPromise;
  }

  function scoreName(name, query) {
    const n = String(name || "").toLowerCase();
    const q = String(query || "").toLowerCase().trim();
    if (!q || !n) return 0;
    if (n === q) return 1000;
    if (n.indexOf(q) === 0) return 800 - Math.min(n.length, 200);
    const idx = n.indexOf(q);
    if (idx > 0) return 500 - idx;
    return 0;
  }

  function search(query) {
    const q = String(query || "").trim();
    if (!q || !drugs) {
      cachedQuery = "";
      cachedTail = [];
      return [];
    }
    const scored = [];
    for (let i = 0; i < drugs.length; i += 1) {
      const drug = drugs[i];
      const s = scoreName(drug && drug.name, q);
      if (!s) continue;
      scored.push({ drug: drug, score: s });
    }
    scored.sort((a, b) => b.score - a.score || String(a.drug.name).localeCompare(String(b.drug.name), "ko"));
    cachedQuery = q;
    if (scored.length > PAGE_SIZE) cachedTail = scored.slice(PAGE_SIZE);
    else cachedTail = [];
    return scored.slice(0, PAGE_SIZE).map((row) => row.drug);
  }

  function loadMore() {
    if (!cachedTail.length) return [];
    const next = cachedTail.slice(0, PAGE_SIZE).map((row) => row.drug);
    cachedTail = cachedTail.slice(PAGE_SIZE);
    return next;
  }

  function hasMore() {
    return cachedTail.length > 0;
  }

  function cleanText(text) {
    return String(text || "")
      .replace(/<[^>]+>/g, "")
      .replace(/&nbsp;/g, " ")
      .replace(/&#39;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&amp;/g, "&")
      .replace(/\\u([0-9a-fA-F]{4})/g, (_, h) => String.fromCharCode(parseInt(h, 16)))
      .trim();
  }

  function firstMatch(html, pattern) {
    const m = html.match(pattern);
    return m && m[1] ? cleanText(m[1]) : "";
  }

  function allMatches(html, pattern) {
    const out = [];
    const re = new RegExp(pattern, "g");
    let m;
    while ((m = re.exec(html))) {
      if (m[1]) out.push(cleanText(m[1]));
    }
    return out;
  }

  /* Same field extraction as NetworkManager.parseHTML */
  function parseMfdsHtml(html) {
    const raw = String(html || "");
    const name = firstMatch(raw, /<th scope="row">제품명<\/th>[\s\S]*?<td[^>]*>([\s\S]*?)<\/td>/i);
    const company = firstMatch(raw, /<th scope="row">업체명<\/th>[\s\S]*?<td[^>]*>([\s\S]*?)<\/td>/i);
    const ingredients = allMatches(raw, /"ingrName":"([\s\S]*?)"/).join(", ");
    const additives = firstMatch(raw, /<h3 class="cont_title4[^"]*">첨가제\s*:\s*([\s\S]*?)<\/h3>/i);
    if (!name) return null;
    return {
      name: name,
      company: company,
      ingredients: ingredients || "Source pending",
      additives: additives || "Source pending"
    };
  }

  function officialMfdsUrl(code) {
    const safe = String(code || "").trim();
    if (!/^[0-9A-Za-z]+$/.test(safe)) return "";
    return MFDS_ITEM_URL + encodeURIComponent(safe);
  }

  function detailEndpoints(code) {
    const q = "code=" + encodeURIComponent(code);
    const worker = MFDS_PAGES_PROXY + "?" + q;
    /* GitHub Pages has no /api/mfds-detail — skip doomed 404s and hit Worker first. */
    if (isStaticPagesHost()) return [worker];
    const urls = [];
    urls.push("/api/mfds-detail?" + q);
    try {
      if (typeof document !== "undefined" && document.baseURI) {
        const rel = new URL("api/mfds-detail?" + q, document.baseURI).href;
        if (urls.indexOf(rel) === -1) urls.push(rel);
      }
    } catch (_err) {
      /* ignore */
    }
    urls.push(worker);
    return urls;
  }

  function fetchJsonDetail(url) {
    return fetch(url, { method: "GET", mode: "cors", credentials: "omit", cache: "no-cache" }).then(
      (r) => {
        if (!r.ok) throw new Error("HTTP " + r.status + " @ " + url);
        return r.text().then((text) => {
          let payload;
          try {
            payload = JSON.parse(text);
          } catch (_err) {
            throw new Error("Non-JSON detail response @ " + url);
          }
          return payload;
        });
      }
    );
  }

  function fetchDetail(code) {
    const safe = String(code || "").trim();
    if (!/^[0-9A-Za-z]+$/.test(safe)) {
      return Promise.reject(new Error("Invalid code"));
    }
    const endpoints = detailEndpoints(safe);
    let idx = 0;
    let lastErr = null;
    function tryNext() {
      if (idx >= endpoints.length) {
        return Promise.reject(lastErr || new Error("MFDS detail unavailable"));
      }
      const url = endpoints[idx];
      idx += 1;
      return fetchJsonDetail(url)
        .then((payload) => {
          if (!payload || !payload.ok || !payload.html) {
            throw new Error((payload && payload.error) || "MFDS fetch failed");
          }
          const detail = parseMfdsHtml(payload.html);
          if (!detail) throw new Error("Could not parse MFDS detail");
          detail.officialUrl = officialMfdsUrl(safe);
          return detail;
        })
        .catch((err) => {
          lastErr = err;
          return tryNext();
        });
    }
    return tryNext();
  }

  global.ADDITIVES = {
    loadDrugs: loadDrugs,
    search: search,
    loadMore: loadMore,
    hasMore: hasMore,
    fetchDetail: fetchDetail,
    parseMfdsHtml: parseMfdsHtml,
    officialMfdsUrl: officialMfdsUrl,
    mfdsPagesProxy: MFDS_PAGES_PROXY,
    drugsJsonUrl: drugsJsonUrl,
    sourceNotice:
      "본 정보는 식품의약품안전처가 공공데이터포털을 통해 제공하는 정보를 바탕으로 합니다. (https://www.data.go.kr/data/15095677/openapi.do)"
  };
})(typeof window !== "undefined" ? window : globalThis);
