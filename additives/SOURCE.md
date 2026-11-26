# Drug additives data source

Copied from `lekis1020/drug_additives` (`drug_additives/drugs.json`) for local name/company/code search only.

- Upstream commit: `d96683ec16d3b52e0c13e4bd5cfb8158a59a2433` (sibling clone `/Users/napler/projects/my-allergy-app/drug_additives`)
- Detail ingredients/additives are not stored here; the phone preview fetches MFDS item detail at runtime
  (`https://nedrug.mfds.go.kr/pbp/CCBBB01/getItemDetailCache?cacheSeq={code}`), same as NetworkManager.swift.
- Public-data notice: https://www.data.go.kr/data/15095677/openapi.do
- Do not invent additives, ingredients, or clinical claims.
