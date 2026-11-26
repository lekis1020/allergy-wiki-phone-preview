# Drug additives data source

Copied from `lekis1020/drug_additives` (`drug_additives/drugs.json`) for local name/company/code search only.

- Upstream commit: `d96683ec16d3b52e0c13e4bd5cfb8158a59a2433` (sibling clone `/Users/napler/projects/my-allergy-app/drug_additives`)
- Detail ingredients/additives are not stored here; the phone preview fetches MFDS item detail at runtime
  (`https://nedrug.mfds.go.kr/pbp/CCBBB01/getItemDetailCache?cacheSeq={code}`), same as NetworkManager.swift.
- Local preview: `serve-preview.py` proxies `GET /api/mfds-detail?code=` → MFDS HTML.
- GitHub Pages (static): client calls Cloudflare Worker **first**
  `https://allergy-mfds-detail.lekis1020.workers.dev/?code=` (CORS-safe JSON `{ok, html}`).
  Absolute `/api/mfds-detail` is **not** used on `github.io` (it 404s at site root, outside
  `/allergy-wiki-phone-preview/`). `drugs.json` is resolved from the `additives.js` script URL.
  No additives/ingredients are invented; the Worker only relays stated MFDS HTML.
- Public-data notice: https://www.data.go.kr/data/15095677/openapi.do
- Do not invent additives, ingredients, or clinical claims.
