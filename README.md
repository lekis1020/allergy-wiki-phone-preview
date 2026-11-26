# allergy-wiki phone-preview (static)

Public static deploy of `phone-preview/preview/layout` from [allergy-wiki](https://github.com/lekis1020/allergy-wiki) PR #5 tip `ca5115df7298f2a98c19b298d220a6f8d78dfcfa`.

Live: https://lekis1020.github.io/allergy-wiki-phone-preview/

## Static (works)
- UI tabs, scoring tools, hospitals map JSON, additives name search (`additives/drugs.json` via script-base URL)
- Additives **detail**: on `github.io`, client calls Cloudflare Worker
  `https://allergy-mfds-detail.lekis1020.workers.dev/?code=` first (CORS JSON `{ok,html}`).
  Does **not** call absolute `/api/mfds-detail` on Pages (that 404s at site root outside `/allergy-wiki-phone-preview/`).
- Papers snapshot (`papers-timeline.json`)

## API-limited (404 without serve-preview.py)
- `/api/korea-env-today`
- `/api/my-allergy-papers`
- `/api/papers-feed-meta`
- `/api/mfds-detail` (local-only; Pages uses Worker above)
