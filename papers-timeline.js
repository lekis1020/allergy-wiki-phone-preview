/* Paper timeline — stated snapshot + live today stats from lekis1020/my-allergy.
 * Do not invent papers or counts.
 */
(function (global) {
  "use strict";

  const TOPIC_LABELS = {
    asthma: "Asthma",
    rhinitis: "Rhinitis",
    urticaria: "Urticaria",
    angioedema: "Angioedema",
    anaphylaxis: "Anaphylaxis",
    atopic_dermatitis: "AtopicDermatitis",
    drug_allergy: "DrugAllergy",
    eosinophilic_disorders: "Eosinophilic",
    immunodeficiency: "Immunodeficiency",
    food_allergy: "FoodAllergy",
    allergen_immunotherapy: "AIT",
    others: "Others"
  };

  const TOPIC_ORDER = [
    "asthma",
    "rhinitis",
    "urticaria",
    "angioedema",
    "anaphylaxis",
    "atopic_dermatitis",
    "drug_allergy",
    "eosinophilic_disorders",
    "immunodeficiency",
    "food_allergy",
    "allergen_immunotherapy",
    "others"
  ];

  let cache = null;
  let loadPromise = null;
  let todayCache = null;
  let todayPromise = null;
  let feedMetaCache = null;
  let feedMetaPromise = null;

  function seoulTodayParts(now) {
    const fmt = new Intl.DateTimeFormat("en-CA", {
      timeZone: "Asia/Seoul",
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    });
    const iso = fmt.format(now || new Date()); // YYYY-MM-DD
    const pretty = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Seoul",
      year: "numeric",
      month: "short",
      day: "numeric"
    }).format(now || new Date());
    return { iso: iso, pretty: pretty, timeZone: "Asia/Seoul" };
  }

  function loadFeedMeta() {
    if (feedMetaCache) return Promise.resolve(feedMetaCache);
    if (feedMetaPromise) return feedMetaPromise;
    feedMetaPromise = fetch("/api/papers-feed-meta", { cache: "no-store" })
      .then((r) => {
        if (!r.ok) throw new Error("papers-feed-meta HTTP " + r.status);
        return r.json();
      })
      .then((payload) => {
        if (!payload || !payload.ok) {
          throw new Error((payload && payload.error) || "papers-feed-meta unavailable");
        }
        feedMetaCache = payload;
        return feedMetaCache;
      })
      .catch((err) => {
        feedMetaPromise = null;
        throw err;
      });
    return feedMetaPromise;
  }

  function loadPapers() {
    if (cache) return Promise.resolve(cache);
    if (loadPromise) return loadPromise;
    loadPromise = Promise.all([
      fetch("papers-timeline.json", { cache: "no-store" }).then((r) => {
        if (!r.ok) throw new Error("Failed to load papers-timeline.json");
        return r.json();
      }),
      loadFeedMeta().catch(() => null)
    ])
      .then((pair) => {
        const payload = pair[0];
        const meta = pair[1];
        const papers = payload && Array.isArray(payload.papers) ? payload.papers : [];
        cache = {
          papers: papers,
          total: payload && typeof payload.total === "number" ? payload.total : papers.length,
          source: payload && payload.source ? payload.source : "papers-timeline.json",
          updatedAt: meta && meta.updated_at ? meta.updated_at : null,
          updatedAtDisplay: meta && meta.updated_at_display ? meta.updated_at_display : null,
          updatedAtTimezone: meta && meta.timezone ? meta.timezone : "Asia/Seoul",
          updatedAtSource: meta && meta.source ? meta.source : null
        };
        return cache;
      })
      .catch((err) => {
        loadPromise = null;
        throw err;
      });
    return loadPromise;
  }

  function fetchTodayPage(dayIso, cursor) {
    const params = new URLSearchParams({
      from: dayIso,
      to: dayIso,
      limit: "100",
      sort: "date_desc"
    });
    if (cursor) params.set("cursor", cursor);
    return fetch("/api/my-allergy-papers?" + params.toString())
      .then((r) => r.json())
      .then((payload) => {
        if (!payload || !payload.ok || !payload.data) {
          throw new Error((payload && payload.error) || "Today papers fetch failed");
        }
        return payload.data;
      });
  }

  function loadTodayStats() {
    const day = seoulTodayParts();
    if (todayCache && todayCache.dayIso === day.iso) return Promise.resolve(todayCache);
    if (todayPromise) return todayPromise;
    todayPromise = (async () => {
      const papers = [];
      let cursor = null;
      let apiTotal = null;
      for (let page = 0; page < 50; page += 1) {
        const data = await fetchTodayPage(day.iso, cursor);
        apiTotal = typeof data.total === "number" ? data.total : apiTotal;
        const batch = Array.isArray(data.papers) ? data.papers : [];
        for (let i = 0; i < batch.length; i += 1) papers.push(batch[i]);
        if (!data.hasMore || !data.nextCursor) break;
        cursor = data.nextCursor;
      }
      const byTopic = {};
      for (let i = 0; i < papers.length; i += 1) {
        const tags = Array.isArray(papers[i].topic_tags) ? papers[i].topic_tags : [];
        if (!tags.length) {
          byTopic.others = (byTopic.others || 0) + 1;
          continue;
        }
        for (let t = 0; t < tags.length; t += 1) {
          const key = tags[t] || "others";
          byTopic[key] = (byTopic[key] || 0) + 1;
        }
      }
      todayCache = {
        dayIso: day.iso,
        dayPretty: day.pretty,
        timeZone: day.timeZone,
        total: typeof apiTotal === "number" ? apiTotal : papers.length,
        fetched: papers.length,
        byTopic: byTopic,
        source: "my-allergy /api/papers from=to=" + day.iso
      };
      return todayCache;
    })().catch((err) => {
      todayPromise = null;
      throw err;
    });
    return todayPromise;
  }

  /* Stated NLM/ISO-style short titles for known full journal names in feed data.
   * Do not invent journals — only map names that appear with a conventional abbr.
   */
  const KNOWN_JOURNAL_ABBR = {
    "international archives of allergy and immunology": "Int Arch Allergy Immunol",
    "pediatric allergy and immunology": "Pediatr Allergy Immunol",
    "journal of human immunity": "J Hum Immun",
    "clinical and translational allergy": "Clin Transl Allergy",
    "journal of investigational allergology and clinical immunology": "J Investig Allergol Clin Immunol",
    "journal of allergy and clinical immunology: in practice": "J Allergy Clin Immunol Pract",
    "journal of allergy and clinical immunology in practice": "J Allergy Clin Immunol Pract",
    "allergy": "Allergy",
    "expert review of clinical immunology": "Expert Rev Clin Immunol"
  };

  const JOURNAL_AVATAR_MAX = 28;

  function truncateJournalShortTitle(title, maxLen) {
    const limit = typeof maxLen === "number" ? maxLen : JOURNAL_AVATAR_MAX;
    const s = String(title || "").replace(/\s+/g, " ").trim();
    if (!s) return "?";
    if (s.length <= limit) return s;
    const cut = s.slice(0, limit);
    const sp = cut.lastIndexOf(" ");
    const base = (sp >= 6 ? cut.slice(0, sp) : cut).replace(/[.,;:]+$/g, "").trim();
    return (base || cut.trim()) + "…";
  }

  function resolveJournalShortTitle(paperOrAbbr) {
    if (paperOrAbbr == null) return "";
    if (typeof paperOrAbbr === "string") {
      return String(paperOrAbbr).replace(/\s+/g, " ").trim();
    }
    const paper = paperOrAbbr;
    const stated = String(paper.journal_abbreviation || "").replace(/\s+/g, " ").trim();
    if (stated) return stated;
    const full = String(paper.journal_name || paper.journal || "").replace(/\s+/g, " ").trim();
    if (!full) return "";
    const mapped = KNOWN_JOURNAL_ABBR[full.toLowerCase()];
    if (mapped) return mapped;
    return full;
  }

  /** Avatar label: traditional journal short title (NLM/ISO-style), truncated wisely — not 2-letter initials. */
  function journalAvatarLabel(paperOrAbbr) {
    return truncateJournalShortTitle(resolveJournalShortTitle(paperOrAbbr));
  }

  /** @deprecated Prefer journalAvatarLabel — kept as alias for callers that still pass an abbr string. */
  function journalInitials(abbr) {
    return journalAvatarLabel(abbr);
  }

  function formatRelativeDate(iso) {
    const raw = String(iso || "").trim();
    if (!raw) return "";
    const d = new Date(raw + (raw.length <= 10 ? "T12:00:00" : ""));
    if (Number.isNaN(d.getTime())) return raw;
    const now = new Date();
    const diffMs = now.getTime() - d.getTime();
    const day = 24 * 60 * 60 * 1000;
    if (diffMs < day && diffMs > -day) return "today";
    if (diffMs < 2 * day && diffMs >= day) return "1 day ago";
    if (diffMs < 14 * day) return Math.floor(diffMs / day) + " days ago";
    if (diffMs < 60 * day) return Math.floor(diffMs / (7 * day)) + " weeks ago";
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
  }

  function authorLine(paper) {
    const authors = Array.isArray(paper.authors) ? paper.authors : [];
    if (!authors.length) return "";
    const first = authors[0];
    const name = [first.last_name, first.initials || first.first_name].filter(Boolean).join(" ");
    const n = typeof paper.author_count === "number" ? paper.author_count : authors.length;
    if (n <= 1) return name;
    return name + " et al. · " + n + " authors";
  }

  function topicLabel(tag) {
    return TOPIC_LABELS[tag] || String(tag || "").replace(/_/g, "");
  }

  function topicHashtag(tag) {
    return "#" + topicLabel(tag);
  }

  function todayFeedUpdatedText(feedMeta) {
    const updatedDisplay = feedMeta && feedMeta.updatedAtDisplay
      ? feedMeta.updatedAtDisplay
      : (feedMeta && feedMeta.updated_at_display ? feedMeta.updated_at_display : null);
    if (!updatedDisplay) return "";
    const tz = (feedMeta && (feedMeta.updatedAtTimezone || feedMeta.timezone)) || "Asia/Seoul";
    return "feed updated " + updatedDisplay + " (" + tz + ")";
  }

  /* Two-item home strip: paper count | feed updated (topic bits stay optional). */
  function formatTodayCountParts(stats, feedMeta) {
    if (!stats) return { count: "", feedUpdated: "", topics: [] };
    const total = typeof stats.total === "number" ? stats.total : 0;
    const count = total.toLocaleString("en-US") + " papers updated today";
    const topics = [];
    const byTopic = stats.byTopic || {};
    for (let i = 0; i < TOPIC_ORDER.length; i += 1) {
      const key = TOPIC_ORDER[i];
      const n = byTopic[key];
      if (!n) continue;
      topics.push(topicHashtag(key) + " " + n);
    }
    const leftovers = Object.keys(byTopic).filter((k) => TOPIC_ORDER.indexOf(k) < 0 && byTopic[k]);
    for (let i = 0; i < leftovers.length; i += 1) {
      const key = leftovers[i];
      topics.push(topicHashtag(key) + " " + byTopic[key]);
    }
    return {
      count: count,
      feedUpdated: todayFeedUpdatedText(feedMeta),
      topics: topics
    };
  }

  function formatTodayCountLine(stats, feedMeta) {
    const parts = formatTodayCountParts(stats, feedMeta);
    if (!parts.count) return "";
    const bits = [parts.count].concat(parts.topics);
    if (parts.feedUpdated) bits.push(parts.feedUpdated);
    return bits.join(" · ");
  }

  /* Honest chip counts from stated topic_tags + same filterPapersByTopic logic. */
  function countPapersByTopicFilter(papers, filterId) {
    return filterPapersByTopic(papers, filterId).length;
  }


  /* Home filter chips — Korean groups mapped to my-allergy TopicTag values
   * (src/types/filters.ts TopicTag / classifyPaperTopics).
   * `others` = papers matching none of the named group tags (honest residual).
   */
  /* Chip face: custom sheet PNGs where mapped; simple SVG for 전체/Others.
   * Combined chips use the clearest single sheet icon (not forced Unicode). */
  const TOPIC_ICON_SVG = {
    all:
      '<svg class="paper-topic-chip-svg" viewBox="0 0 16 16" width="18" height="18" aria-hidden="true" focusable="false">' +
      '<path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" d="M3 4.5h10M3 8h10M3 11.5h7"/></svg>',
    others:
      '<svg class="paper-topic-chip-svg" viewBox="0 0 16 16" width="18" height="18" aria-hidden="true" focusable="false">' +
      '<circle cx="4" cy="8" r="1.15" fill="currentColor"/><circle cx="8" cy="8" r="1.15" fill="currentColor"/><circle cx="12" cy="8" r="1.15" fill="currentColor"/></svg>'
  };

  /* Sliced from assets/topic-icons/SOURCE-sheet.png (user sheet maa-86-topic-icon-sheet). */
  const TOPIC_ICON_ASSET = {
    asthma_rhinitis: {
      src: "assets/topic-icons/asthma-lungs.png",
      src2x: "assets/topic-icons/asthma-lungs@2x.png",
      alt: "lungs"
    },
    urticaria_angio_anaphylaxis: {
      src: "assets/topic-icons/urticaria-hives.png",
      src2x: "assets/topic-icons/urticaria-hives@2x.png",
      alt: "hives"
    },
    atopic_dermatitis: {
      src: "assets/topic-icons/atopic-hand.png",
      src2x: "assets/topic-icons/atopic-hand@2x.png",
      alt: "hand scratching skin"
    },
    food_allergy: {
      src: "assets/topic-icons/food-allergy.png",
      src2x: "assets/topic-icons/food-allergy@2x.png",
      alt: "egg and peanut"
    },
    drug: {
      src: "assets/topic-icons/drug-pills.png",
      src2x: "assets/topic-icons/drug-pills@2x.png",
      alt: "pills"
    },
    eos_immuno: {
      src: "assets/topic-icons/eos-cell.png",
      src2x: "assets/topic-icons/eos-cell@2x.png",
      alt: "eosinophil"
    }
  };

  const TOPIC_FILTERS = [
    { id: "all", label: "전체", icon: "all", tags: null },
    { id: "asthma_rhinitis", label: "천식&비염", icon: "asthma_rhinitis", tags: ["asthma", "rhinitis"] },
    { id: "urticaria_angio_anaphylaxis", label: "두드러기&혈관부종&아나필락시스", icon: "urticaria_angio_anaphylaxis", tags: ["urticaria", "angioedema", "anaphylaxis"] },
    { id: "atopic_dermatitis", label: "아토피피부염", icon: "atopic_dermatitis", tags: ["atopic_dermatitis"] },
    { id: "food_allergy", label: "식품알레르기", icon: "food_allergy", tags: ["food_allergy"] },
    { id: "drug", label: "약물", icon: "drug", tags: ["drug_allergy"] },
    { id: "eos_immuno", label: "호산구&면역질환", icon: "eos_immuno", tags: ["eosinophilic_disorders", "immunodeficiency"] },
    { id: "others", label: "Others", icon: "others", tags: [], mode: "uncategorized" }
  ];

  function topicFilterIconHtml(filterOrId) {
    const id = typeof filterOrId === "string"
      ? filterOrId
      : (filterOrId && (filterOrId.icon || filterOrId.id));
    const asset = TOPIC_ICON_ASSET[id];
    if (asset && asset.src) {
      return '<img class="paper-topic-chip-img" src="' + asset.src +
        '" srcset="' + asset.src + " 1x, " + asset.src2x + ' 2x" alt="" width="23" height="23" decoding="async">';
    }
    return TOPIC_ICON_SVG[id] || TOPIC_ICON_SVG.others;
  }

  function namedGroupTagSet() {
    const want = {};
    for (let i = 0; i < TOPIC_FILTERS.length; i += 1) {
      const tags = TOPIC_FILTERS[i].tags;
      if (!tags || !tags.length) continue;
      for (let t = 0; t < tags.length; t += 1) want[tags[t]] = true;
    }
    return want;
  }

  function paperMatchesAnyTag(paper, want) {
    const tags = Array.isArray(paper.topic_tags) ? paper.topic_tags : [];
    for (let t = 0; t < tags.length; t += 1) {
      if (want[tags[t]]) return true;
    }
    return false;
  }

  function filterPapersByTopic(papers, filterId) {
    const list = Array.isArray(papers) ? papers : [];
    const filter = TOPIC_FILTERS.find((row) => row.id === filterId) || TOPIC_FILTERS[0];
    if (filter.mode === "uncategorized" || filter.id === "others") {
      const named = namedGroupTagSet();
      const out = [];
      for (let i = 0; i < list.length; i += 1) {
        if (!paperMatchesAnyTag(list[i], named)) out.push(list[i]);
      }
      return out;
    }
    if (!filter.tags) return list.slice();
    const want = {};
    for (let i = 0; i < filter.tags.length; i += 1) want[filter.tags[i]] = true;
    const out = [];
    for (let i = 0; i < list.length; i += 1) {
      if (paperMatchesAnyTag(list[i], want)) out.push(list[i]);
    }
    return out;
  }

  /* ---- Study meta badges (population + country) — stated fields only ---- */

  const ADULT_MESH = {
    adult: true,
    aged: true,
    "aged, 80 and over": true,
    "middle aged": true,
    "young adult": true
  };
  const PEDIATRIC_MESH = {
    infant: true,
    "infant, newborn": true,
    child: true,
    "child, preschool": true,
    adolescent: true,
    pediatrics: true
  };
  const ADULT_TOKEN = {
    adult: true,
    adults: true,
    "adult-only": true,
    "adult only": true,
    aged: true,
    "middle aged": true,
    "young adult": true
  };
  const PEDIATRIC_TOKEN = {
    child: true,
    children: true,
    pediatric: true,
    paediatric: true,
    "pediatric age": true,
    "paediatric age": true,
    infant: true,
    infants: true,
    adolescent: true,
    adolescents: true,
    neonate: true,
    neonates: true,
    neonatal: true,
    preschool: true
  };

  /* Stated animal-only markers (MeSH / keywords / population). Do not invent. */
  const ANIMAL_TOKEN = {
    animals: true,
    animal: true,
    mice: true,
    mouse: true,
    rats: true,
    rat: true,
    murine: true,
    "animal model": true,
    "animal models": true,
    "disease models, animal": true,
    "models, animal": true
  };
  const HUMAN_TOKEN = {
    humans: true,
    human: true
  };

  function normalizeMetaToken(value) {
    return String(value || "")
      .toLowerCase()
      .replace(/[_/]+/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function pushUnique(list, value) {
    if (!value) return;
    if (list.indexOf(value) >= 0) return;
    list.push(value);
  }

  function isAnimalToken(t) {
    if (!t) return false;
    if (ANIMAL_TOKEN[t]) return true;
    if (t.indexOf("mice") === 0 || t.indexOf("rats") === 0) return true;
    return false;
  }

  function collectStatedAgeTokens(paper) {
    const tokens = [];
    const scalarKeys = [
      "age_group",
      "ageGroup",
      "population",
      "study_population",
      "studyPopulation",
      "population_type",
      "populationType"
    ];
    for (let i = 0; i < scalarKeys.length; i += 1) {
      const raw = paper && paper[scalarKeys[i]];
      if (raw == null || raw === "") continue;
      if (Array.isArray(raw)) {
        for (let j = 0; j < raw.length; j += 1) pushUnique(tokens, normalizeMetaToken(raw[j]));
      } else {
        pushUnique(tokens, normalizeMetaToken(raw));
      }
    }
    const mesh = paper && Array.isArray(paper.mesh_terms) ? paper.mesh_terms : [];
    for (let i = 0; i < mesh.length; i += 1) pushUnique(tokens, normalizeMetaToken(mesh[i]));
    const keywords = paper && Array.isArray(paper.keywords) ? paper.keywords : [];
    for (let i = 0; i < keywords.length; i += 1) pushUnique(tokens, normalizeMetaToken(keywords[i]));
    const tags = paper && Array.isArray(paper.topic_tags) ? paper.topic_tags : [];
    for (let i = 0; i < tags.length; i += 1) {
      const t = normalizeMetaToken(tags[i]);
      if (
        ADULT_TOKEN[t] ||
        PEDIATRIC_TOKEN[t] ||
        ANIMAL_TOKEN[t] ||
        HUMAN_TOKEN[t] ||
        t === "mixed" ||
        t === "adult pediatric"
      ) {
        pushUnique(tokens, t);
      }
    }
    return tokens;
  }

  /**
   * Animal-only 🐭 when MeSH/keywords/population state Animals/Mice/Rats/etc.
   * and do not also state Humans. Omit if unclear or mixed human+animal.
   */
  function studyAnimalBadge(paper) {
    const tokens = collectStatedAgeTokens(paper);
    if (!tokens.length) return null;
    let animal = false;
    let human = false;
    const sources = [];
    for (let i = 0; i < tokens.length; i += 1) {
      const t = tokens[i];
      if (HUMAN_TOKEN[t]) {
        human = true;
        continue;
      }
      if (isAnimalToken(t)) {
        animal = true;
        sources.push(t);
      }
    }
    if (!animal || human) return null;
    return { emoji: "🐭", label: "animal-only", sources: sources };
  }

  /**
   * Population emoji from stated age/population fields, MeSH age check tags,
   * or age keywords only. Never inferred from title/journal.
   * Returns { emoji, label, sources } or null when unknown.
   * Skipped when study is stated animal-only (mouse badge covers that).
   */
  function studyPopulationBadge(paper) {
    if (studyAnimalBadge(paper)) return null;
    const tokens = collectStatedAgeTokens(paper);
    if (!tokens.length) return null;
    let adult = false;
    let pediatric = false;
    const sources = [];
    for (let i = 0; i < tokens.length; i += 1) {
      const t = tokens[i];
      if (
        t === "mixed" ||
        t === "adult+pediatric" ||
        t === "adult pediatric" ||
        t === "pediatric+adult" ||
        t === "all ages" ||
        t === "all-ages"
      ) {
        adult = true;
        pediatric = true;
        sources.push(t);
        continue;
      }
      if (ADULT_MESH[t] || ADULT_TOKEN[t]) {
        adult = true;
        sources.push(t);
      }
      if (PEDIATRIC_MESH[t] || PEDIATRIC_TOKEN[t]) {
        pediatric = true;
        sources.push(t);
      }
    }
    if (adult && pediatric) {
      return { emoji: "👨‍👩‍👧", label: "mixed adult+pediatric", sources: sources };
    }
    if (adult) return { emoji: "🧑", label: "adult", sources: sources };
    if (pediatric) return { emoji: "🧒", label: "pediatric", sources: sources };
    return null;
  }

  /* Country name (as written in affiliation / stated country fields) → flag.
   * Only matches when the country string is literally present — never invent.
   */
  const COUNTRY_FLAGS = [
    { re: /\b(republic of korea|south korea|korea)\b/i, name: "South Korea", flag: "🇰🇷" },
    { re: /\bjapan\b/i, name: "Japan", flag: "🇯🇵" },
    { re: /\bchina\b/i, name: "China", flag: "🇨🇳" },
    { re: /\btaiwan\b/i, name: "Taiwan", flag: "🇹🇼" },
    { re: /\bhong kong\b/i, name: "Hong Kong", flag: "🇭🇰" },
    { re: /\bsingapore\b/i, name: "Singapore", flag: "🇸🇬" },
    { re: /\bindia\b/i, name: "India", flag: "🇮🇳" },
    { re: /\baustralia\b/i, name: "Australia", flag: "🇦🇺" },
    { re: /\bnew zealand\b/i, name: "New Zealand", flag: "🇳🇿" },
    { re: /\bcanada\b/i, name: "Canada", flag: "🇨🇦" },
    { re: /\b(united states|usa|u\.s\.a\.|u\.s\.)\b/i, name: "United States", flag: "🇺🇸" },
    { re: /\b(united kingdom|uk|u\.k\.|england|scotland|wales)\b/i, name: "United Kingdom", flag: "🇬🇧" },
    { re: /\bgermany\b/i, name: "Germany", flag: "🇩🇪" },
    { re: /\bfrance\b/i, name: "France", flag: "🇫🇷" },
    { re: /\bitaly\b/i, name: "Italy", flag: "🇮🇹" },
    { re: /\bspain\b/i, name: "Spain", flag: "🇪🇸" },
    { re: /\bnetherlands\b/i, name: "Netherlands", flag: "🇳🇱" },
    { re: /\bsweden\b/i, name: "Sweden", flag: "🇸🇪" },
    { re: /\bnorway\b/i, name: "Norway", flag: "🇳🇴" },
    { re: /\bdenmark\b/i, name: "Denmark", flag: "🇩🇰" },
    { re: /\bfinland\b/i, name: "Finland", flag: "🇫🇮" },
    { re: /\bbrazil\b/i, name: "Brazil", flag: "🇧🇷" },
    { re: /\b(turkey|türkiye|turkiye)\b/i, name: "Turkey", flag: "🇹🇷" },
    { re: /\bswitzerland\b/i, name: "Switzerland", flag: "🇨🇭" },
    { re: /\baustria\b/i, name: "Austria", flag: "🇦🇹" },
    { re: /\bbelgium\b/i, name: "Belgium", flag: "🇧🇪" },
    { re: /\bportugal\b/i, name: "Portugal", flag: "🇵🇹" },
    { re: /\bpoland\b/i, name: "Poland", flag: "🇵🇱" },
    { re: /\bireland\b/i, name: "Ireland", flag: "🇮🇪" },
    { re: /\bisrael\b/i, name: "Israel", flag: "🇮🇱" },
    { re: /\bmexico\b/i, name: "Mexico", flag: "🇲🇽" },
    { re: /\bargentina\b/i, name: "Argentina", flag: "🇦🇷" },
    { re: /\bchile\b/i, name: "Chile", flag: "🇨🇱" },
    { re: /\bthailand\b/i, name: "Thailand", flag: "🇹🇭" },
    { re: /\bvietnam\b/i, name: "Vietnam", flag: "🇻🇳" },
    { re: /\bphilippines\b/i, name: "Philippines", flag: "🇵🇭" },
    { re: /\bmalaysia\b/i, name: "Malaysia", flag: "🇲🇾" },
    { re: /\bindonesia\b/i, name: "Indonesia", flag: "🇮🇩" },
    { re: /\bsouth africa\b/i, name: "South Africa", flag: "🇿🇦" },
    { re: /\bgreece\b/i, name: "Greece", flag: "🇬🇷" },
    { re: /\bczech\b/i, name: "Czechia", flag: "🇨🇿" },
    { re: /\bhungary\b/i, name: "Hungary", flag: "🇭🇺" },
    { re: /\bromania\b/i, name: "Romania", flag: "🇷🇴" },
    { re: /\brussia\b/i, name: "Russia", flag: "🇷🇺" },
    { re: /\bsaudi arabia\b/i, name: "Saudi Arabia", flag: "🇸🇦" },
    { re: /\bunited arab emirates\b|\buae\b/i, name: "United Arab Emirates", flag: "🇦🇪" }
  ];

  function matchCountryFromText(text) {
    const s = String(text || "").trim();
    if (!s) return null;
    for (let i = 0; i < COUNTRY_FLAGS.length; i += 1) {
      const row = COUNTRY_FLAGS[i];
      if (row.re.test(s)) return { name: row.name, flag: row.flag };
    }
    return null;
  }

  function collectStatedCountryTexts(paper) {
    const texts = [];
    const keys = ["country", "countries", "nation", "nationality", "study_country", "studyCountry"];
    for (let i = 0; i < keys.length; i += 1) {
      const raw = paper && paper[keys[i]];
      if (raw == null || raw === "") continue;
      if (Array.isArray(raw)) {
        for (let j = 0; j < raw.length; j += 1) {
          if (raw[j]) texts.push(String(raw[j]));
        }
      } else {
        texts.push(String(raw));
      }
    }
    const authors = paper && Array.isArray(paper.authors) ? paper.authors : [];
    for (let i = 0; i < authors.length; i += 1) {
      const aff = authors[i] && authors[i].affiliation;
      if (aff) texts.push(String(aff));
    }
    return texts;
  }

  /**
   * Country flags from stated country fields or author affiliation nationality.
   * Multi-country → flag emojis only (no "다국가" text). Returns null when unknown.
   */
  function studyCountryBadges(paper) {
    const texts = collectStatedCountryTexts(paper);
    if (!texts.length) return null;
    const found = [];
    const seen = {};
    for (let i = 0; i < texts.length; i += 1) {
      const hit = matchCountryFromText(texts[i]);
      if (!hit || seen[hit.name]) continue;
      seen[hit.name] = true;
      found.push(hit);
    }
    if (!found.length) return null;
    const label = found.map((c) => c.name).join(", ");
    return {
      emoji: found.map((c) => c.flag).join(""),
      label: label,
      countries: found,
      multi: found.length > 1
    };
  }

  /**
   * Compact meta strip under journal avatar. Empty → "Source pending"
   * (no fabricated age/country/animal).
   */
  function studyMetaStrip(paper) {
    const animal = studyAnimalBadge(paper);
    const population = studyPopulationBadge(paper);
    const country = studyCountryBadges(paper);
    const bits = [];
    if (animal) {
      bits.push({
        kind: "animal",
        emoji: animal.emoji,
        label: animal.label,
        title: "Population: animal-only (" + animal.sources.join(", ") + ")"
      });
    } else if (population) {
      bits.push({
        kind: "population",
        emoji: population.emoji,
        label: population.label,
        title: "Population: " + population.label + " (" + population.sources.join(", ") + ")"
      });
    }
    if (country) {
      bits.push({
        kind: "country",
        emoji: country.emoji,
        mark: country.mark || null,
        label: country.label,
        title: "Country: " + country.label
      });
    }
    return {
      bits: bits,
      pending: bits.length === 0
    };
  }

  global.PAPER_TIMELINE = {
    loadPapers: loadPapers,
    loadTodayStats: loadTodayStats,
    loadFeedMeta: loadFeedMeta,
    seoulTodayParts: seoulTodayParts,
    journalAvatarLabel: journalAvatarLabel,
    journalInitials: journalInitials,
    resolveJournalShortTitle: resolveJournalShortTitle,
    formatRelativeDate: formatRelativeDate,
    authorLine: authorLine,
    topicLabel: topicLabel,
    topicHashtag: topicHashtag,
    formatTodayCountLine: formatTodayCountLine,
    formatTodayCountParts: formatTodayCountParts,
    todayFeedUpdatedText: todayFeedUpdatedText,
    TOPIC_FILTERS: TOPIC_FILTERS,
    topicFilterIconHtml: topicFilterIconHtml,
    filterPapersByTopic: filterPapersByTopic,
    countPapersByTopicFilter: countPapersByTopicFilter,
    studyPopulationBadge: studyPopulationBadge,
    studyAnimalBadge: studyAnimalBadge,
    studyCountryBadges: studyCountryBadges,
    studyMetaStrip: studyMetaStrip
  };
})(typeof window !== "undefined" ? window : globalThis);
