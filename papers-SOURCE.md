# Paper timeline data source

Snapshot for Home paper feed in phone-preview.

- Upstream app: `https://github.com/lekis1020/my-allergy`
- API: `https://my-allergy.vercel.app/api/papers?limit=30&sort=date_desc`
- Local file: `papers-timeline.json` (stated rows only; do not invent papers)
- UI patterns ported from `src/components/papers/paper-card.tsx` / home timeline (journal abbr, relative date, title, authors, AI summary, abstract toggle, topic tags, PubMed/DOI links)
- Study-meta strip (under `div.paper-avatar`): population emoji from stated `age_group` / `population` / `study_population` / `population_type` or MeSH age check tags / age keywords only; animal-only 🐭 when MeSH/keywords/population state Animals/Mice/Rats/animal models **without** Humans; country flags from stated `country`/`countries` or author `affiliation` nationality (flags only — no “다국가” text). Unknown → empty / “Source pending” — never invent.
