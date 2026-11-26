# allergy-wiki phone-preview (static)

Public static deploy of `phone-preview/preview/layout` from [allergy-wiki](https://github.com/lekis1020/allergy-wiki) PR #5 tip `27a82b923764ccd36b386810323b8cbc9a3d13ea`.

Live: https://lekis1020.github.io/allergy-wiki-phone-preview/

## Static (works)
- UI tabs, scoring tools, hospitals map JSON, additives name search (`additives/drugs.json`)
- Additives **detail** (주성분/첨가제): client falls back to Cloudflare Worker
  `https://allergy-mfds-detail.lekis1020.workers.dev/?code=` which relays stated MFDS HTML (same fields as local `/api/mfds-detail`; nothing invented)
- Papers snapshot (`papers-timeline.json`)

## API-limited (404 without serve-preview.py)
- `/api/korea-env-today`
- `/api/my-allergy-papers`
- `/api/papers-feed-meta`
- `/api/mfds-detail` (local-only path; Pages uses the Worker fallback above)
