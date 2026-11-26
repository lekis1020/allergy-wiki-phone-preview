/* Sourced from lekis1020/Beta-lactam-crossreactivity data/reference/drug_class.csv
 * (same catalog referenced by phone-preview/docs/cross-reactivity/beta-lactam.md).
 * Do not invent class or generation assignments here.
 */
const DRUG_CLASS_BY_NAME = {
  "Amoxicillin": {
    "classKey": "penicillin",
    "displayClass": "페니실린",
    "generation": null,
    "notes": "aminopenicillin"
  },
  "Ampicillin": {
    "classKey": "penicillin",
    "displayClass": "페니실린",
    "generation": null,
    "notes": "aminopenicillin"
  },
  "Dicloxacillin": {
    "classKey": "penicillin",
    "displayClass": "페니실린",
    "generation": null,
    "notes": "isoxazolyl/anti-staphylococcal"
  },
  "Feneticillin": {
    "classKey": "penicillin",
    "displayClass": "페니실린",
    "generation": null,
    "notes": "phenoxypenicillin (phenethicillin)"
  },
  "Flucloxacillin": {
    "classKey": "penicillin",
    "displayClass": "페니실린",
    "generation": null,
    "notes": "isoxazolyl/anti-staphylococcal"
  },
  "Nafcillin": {
    "classKey": "penicillin",
    "displayClass": "페니실린",
    "generation": null,
    "notes": "anti-staphylococcal"
  },
  "Oxacillin": {
    "classKey": "penicillin",
    "displayClass": "페니실린",
    "generation": null,
    "notes": "isoxazolyl/anti-staphylococcal"
  },
  "Penicillin G": {
    "classKey": "penicillin",
    "displayClass": "페니실린",
    "generation": null,
    "notes": "natural penicillin (benzylpenicillin)"
  },
  "Penicillin V": {
    "classKey": "penicillin",
    "displayClass": "페니실린",
    "generation": null,
    "notes": "natural penicillin (phenoxymethylpenicillin)"
  },
  "Penicillin G / V": {
    "classKey": "penicillin",
    "displayClass": "페니실린",
    "generation": null,
    "notes": "browse/alias label spanning Penicillin G and Penicillin V"
  },
  "Piperacillin": {
    "classKey": "penicillin",
    "displayClass": "페니실린",
    "generation": null,
    "notes": "ureidopenicillin"
  },
  "Pivmecillinam": {
    "classKey": "penicillin",
    "displayClass": "페니실린",
    "generation": null,
    "notes": "amidinopenicillin (mecillinam prodrug)"
  },
  "Cefadroxil": {
    "classKey": "cephalosporin_1",
    "displayClass": "세팔로스포린 1세대",
    "generation": "1",
    "notes": ""
  },
  "Cefazolin": {
    "classKey": "cephalosporin_1",
    "displayClass": "세팔로스포린 1세대",
    "generation": "1",
    "notes": ""
  },
  "Cefradine": {
    "classKey": "cephalosporin_1",
    "displayClass": "세팔로스포린 1세대",
    "generation": "1",
    "notes": "(cephradine)"
  },
  "Ceftezole": {
    "classKey": "cephalosporin_1",
    "displayClass": "세팔로스포린 1세대",
    "generation": "1",
    "notes": ""
  },
  "Cephalexin": {
    "classKey": "cephalosporin_1",
    "displayClass": "세팔로스포린 1세대",
    "generation": "1",
    "notes": ""
  },
  "Cephalothin": {
    "classKey": "cephalosporin_1",
    "displayClass": "세팔로스포린 1세대",
    "generation": "1",
    "notes": ""
  },
  "Cephapirin": {
    "classKey": "cephalosporin_1",
    "displayClass": "세팔로스포린 1세대",
    "generation": "1",
    "notes": ""
  },
  "Cefaclor": {
    "classKey": "cephalosporin_2",
    "displayClass": "세팔로스포린 2세대",
    "generation": "2",
    "notes": ""
  },
  "Cefamandole": {
    "classKey": "cephalosporin_2",
    "displayClass": "세팔로스포린 2세대",
    "generation": "2",
    "notes": ""
  },
  "Cefatrizine": {
    "classKey": "cephalosporin_2",
    "displayClass": "세팔로스포린 2세대",
    "generation": "2",
    "notes": ""
  },
  "Cefonicid": {
    "classKey": "cephalosporin_2",
    "displayClass": "세팔로스포린 2세대",
    "generation": "2",
    "notes": ""
  },
  "Cefotetan": {
    "classKey": "cephalosporin_2",
    "displayClass": "세팔로스포린 2세대",
    "generation": "2",
    "notes": "cephamycin"
  },
  "Cefoxitin": {
    "classKey": "cephalosporin_2",
    "displayClass": "세팔로스포린 2세대",
    "generation": "2",
    "notes": "cephamycin"
  },
  "Cefprozil": {
    "classKey": "cephalosporin_2",
    "displayClass": "세팔로스포린 2세대",
    "generation": "2",
    "notes": ""
  },
  "Cefuroxime": {
    "classKey": "cephalosporin_2",
    "displayClass": "세팔로스포린 2세대",
    "generation": "2",
    "notes": ""
  },
  "Loracarbef": {
    "classKey": "cephalosporin_2",
    "displayClass": "세팔로스포린 2세대",
    "generation": "2",
    "notes": "carbacephem (gen 2 analogue)"
  },
  "Ceforamide": {
    "classKey": "cephalosporin_2",
    "displayClass": "세팔로스포린 2세대",
    "generation": "2",
    "notes": "rare; classified as gen 2"
  },
  "Cefamet": {
    "classKey": "cephalosporin_2",
    "displayClass": "세팔로스포린 2세대",
    "generation": "2",
    "notes": "assumed cefmetazole (cephamycin) — verify name"
  },
  "Cefdinir": {
    "classKey": "cephalosporin_3",
    "displayClass": "세팔로스포린 3세대",
    "generation": "3",
    "notes": ""
  },
  "Cefditoren": {
    "classKey": "cephalosporin_3",
    "displayClass": "세팔로스포린 3세대",
    "generation": "3",
    "notes": ""
  },
  "Cefixime": {
    "classKey": "cephalosporin_3",
    "displayClass": "세팔로스포린 3세대",
    "generation": "3",
    "notes": ""
  },
  "Cefodizime": {
    "classKey": "cephalosporin_3",
    "displayClass": "세팔로스포린 3세대",
    "generation": "3",
    "notes": ""
  },
  "Cefoperazone": {
    "classKey": "cephalosporin_3",
    "displayClass": "세팔로스포린 3세대",
    "generation": "3",
    "notes": ""
  },
  "Cefotaxime": {
    "classKey": "cephalosporin_3",
    "displayClass": "세팔로스포린 3세대",
    "generation": "3",
    "notes": ""
  },
  "Cefotiam": {
    "classKey": "cephalosporin_3",
    "displayClass": "세팔로스포린 3세대",
    "generation": "3",
    "notes": "sometimes classified as gen 2"
  },
  "Cefpodoxime": {
    "classKey": "cephalosporin_3",
    "displayClass": "세팔로스포린 3세대",
    "generation": "3",
    "notes": ""
  },
  "Ceftazidime": {
    "classKey": "cephalosporin_3",
    "displayClass": "세팔로스포린 3세대",
    "generation": "3",
    "notes": ""
  },
  "Ceftibuten": {
    "classKey": "cephalosporin_3",
    "displayClass": "세팔로스포린 3세대",
    "generation": "3",
    "notes": ""
  },
  "Ceftizoxime": {
    "classKey": "cephalosporin_3",
    "displayClass": "세팔로스포린 3세대",
    "generation": "3",
    "notes": ""
  },
  "Ceftriaxone": {
    "classKey": "cephalosporin_3",
    "displayClass": "세팔로스포린 3세대",
    "generation": "3",
    "notes": ""
  },
  "Cefetamet": {
    "classKey": "cephalosporin_3",
    "displayClass": "세팔로스포린 3세대",
    "generation": "3",
    "notes": "distinct from Cefamet (gen 2)"
  },
  "Cefepime": {
    "classKey": "cephalosporin_4",
    "displayClass": "세팔로스포린 4세대",
    "generation": "4",
    "notes": ""
  },
  "Cefpirome": {
    "classKey": "cephalosporin_4",
    "displayClass": "세팔로스포린 4세대",
    "generation": "4",
    "notes": ""
  },
  "Ceftaroline": {
    "classKey": "cephalosporin_5",
    "displayClass": "세팔로스포린 5세대",
    "generation": "5",
    "notes": "anti-MRSA"
  },
  "Ceftaroline fosamil": {
    "classKey": "cephalosporin_5",
    "displayClass": "세팔로스포린 5세대",
    "generation": "5",
    "notes": "prodrug form of Ceftaroline (gen 5)"
  },
  "Ceftobiprole": {
    "classKey": "cephalosporin_5",
    "displayClass": "세팔로스포린 5세대",
    "generation": "5",
    "notes": "anti-MRSA"
  },
  "Ceftolozane": {
    "classKey": "cephalosporin_5",
    "displayClass": "세팔로스포린 5세대",
    "generation": "5",
    "notes": "often combined with tazobactam"
  },
  "Cefiderocol": {
    "classKey": "cephalosporin_5",
    "displayClass": "세팔로스포린 5세대",
    "generation": "5",
    "notes": "siderophore cephalosporin"
  },
  "Ertapenem": {
    "classKey": "carbapenem",
    "displayClass": "카바페넴",
    "generation": null,
    "notes": ""
  },
  "Imipenem": {
    "classKey": "carbapenem",
    "displayClass": "카바페넴",
    "generation": null,
    "notes": ""
  },
  "Meropenem": {
    "classKey": "carbapenem",
    "displayClass": "카바페넴",
    "generation": null,
    "notes": ""
  },
  "Aztreonam": {
    "classKey": "monobactam",
    "displayClass": "모노박탐",
    "generation": null,
    "notes": ""
  }
};
const DRUG_CLASS_ORDER = [
  {
    "classKey": "penicillin",
    "displayClass": "페니실린"
  },
  {
    "classKey": "cephalosporin_1",
    "displayClass": "세팔로스포린 1세대"
  },
  {
    "classKey": "cephalosporin_2",
    "displayClass": "세팔로스포린 2세대"
  },
  {
    "classKey": "cephalosporin_3",
    "displayClass": "세팔로스포린 3세대"
  },
  {
    "classKey": "cephalosporin_4",
    "displayClass": "세팔로스포린 4세대"
  },
  {
    "classKey": "cephalosporin_5",
    "displayClass": "세팔로스포린 5세대"
  },
  {
    "classKey": "carbapenem",
    "displayClass": "카바페넴"
  },
  {
    "classKey": "monobactam",
    "displayClass": "모노박탐"
  }
];

/* Contrast carbamoyl groups from data/contrast-media.ts (ICM_AGENTS / ICM_GROUP_DESCRIPTIONS).
 * Quadrant A–D = nonionic carbamoyl taxonomy (classic / N-methyl / mixed / non-carbamoyl).
 * Diatrizoate + Ioxaglate: other-drugs.md ionic high-osmolar with Ioxitalamate -> OTHER_IONIC.
 * Do not invent carbamoyl assignments beyond those sources.
 */
const CONTRAST_CLASS_BY_NAME = {
  "Iohexol": { "classKey": "icm_a", "displayClass": "A · 고전적 Carbamoyl" },
  "Iomeprol": { "classKey": "icm_a", "displayClass": "A · 고전적 Carbamoyl" },
  "Ioversol": { "classKey": "icm_a", "displayClass": "A · 고전적 Carbamoyl" },
  "Iodixanol": { "classKey": "icm_a", "displayClass": "A · 고전적 Carbamoyl" },
  "Iobitridol": { "classKey": "icm_b", "displayClass": "B · N-methyl Carbamoyl" },
  "Iopromide": { "classKey": "icm_c", "displayClass": "C · 혼합 Carbamoyl" },
  "Iopamidol": { "classKey": "icm_d", "displayClass": "D · 비-Carbamoyl" },
  "Ioxitalamate": { "classKey": "icm_ionic", "displayClass": "이온성" },
  "Diatrizoate": { "classKey": "icm_ionic", "displayClass": "이온성" },
  "Ioxaglate": { "classKey": "icm_ionic", "displayClass": "이온성" }
};
const CONTRAST_QUADRANT_KEYS = ["icm_a", "icm_b", "icm_c", "icm_d"];
const CONTRAST_CLASS_ORDER = [
  { "classKey": "icm_a", "displayClass": "A · 고전적 Carbamoyl" },
  { "classKey": "icm_b", "displayClass": "B · N-methyl Carbamoyl" },
  { "classKey": "icm_c", "displayClass": "C · 혼합 Carbamoyl" },
  { "classKey": "icm_d", "displayClass": "D · 비-Carbamoyl" },
  { "classKey": "icm_ionic", "displayClass": "이온성" }
];

/* Oncology subclasses from phone-preview/docs/cross-reactivity/other-drugs.md
 * (Platinum compounds / Taxanes / Asparaginase products / Anthracyclines).
 */
const ONCOLOGY_CLASS_BY_NAME = {
  "Carboplatin": { "classKey": "platinum", "displayClass": "Platinum" },
  "Cisplatin": { "classKey": "platinum", "displayClass": "Platinum" },
  "Oxaliplatin": { "classKey": "platinum", "displayClass": "Platinum" },
  "Paclitaxel": { "classKey": "taxane", "displayClass": "Taxanes" },
  "Docetaxel": { "classKey": "taxane", "displayClass": "Taxanes" },
  "Nab-paclitaxel": { "classKey": "taxane", "displayClass": "Taxanes" },
  "Cabazitaxel": { "classKey": "taxane", "displayClass": "Taxanes" },
  "Pegaspargase": { "classKey": "asparaginase", "displayClass": "Asparaginase" },
  "Asparaginase Erwinia": { "classKey": "asparaginase", "displayClass": "Asparaginase" },
  "Calaspargase pegol": { "classKey": "asparaginase", "displayClass": "Asparaginase" },
  "Doxorubicin": { "classKey": "anthracycline", "displayClass": "Anthracyclines" },
  "Pegylated liposomal doxorubicin": { "classKey": "anthracycline", "displayClass": "Anthracyclines" },
  "Daunorubicin": { "classKey": "anthracycline", "displayClass": "Anthracyclines" }
};
const ONCOLOGY_CLASS_ORDER = [
  { "classKey": "platinum", "displayClass": "Platinum" },
  { "classKey": "taxane", "displayClass": "Taxanes" },
  { "classKey": "asparaginase", "displayClass": "Asparaginase" },
  { "classKey": "anthracycline", "displayClass": "Anthracyclines" }
];

/* Aromatic antiseizure medications (ASMs) confirmed for 항경련제 browse (MAA-84).
 * Class membership from aromatic ASM / HLA hypersensitivity literature cited in
 * internal/maa-84-anticonvulsant-cr.md (PMC13304249, PMC13785728, PMC8602035, etc.).
 * Single aromatic class — no invented subclasses or pair rates.
 */
const ANTICONVULSANT_CLASS_BY_NAME = {
  "Carbamazepine": { "classKey": "aromatic_asm", "displayClass": "Aromatic ASM" },
  "Oxcarbazepine": { "classKey": "aromatic_asm", "displayClass": "Aromatic ASM" },
  "Eslicarbazepine": { "classKey": "aromatic_asm", "displayClass": "Aromatic ASM" },
  "Phenytoin": { "classKey": "aromatic_asm", "displayClass": "Aromatic ASM" },
  "Fosphenytoin": { "classKey": "aromatic_asm", "displayClass": "Aromatic ASM" },
  "Lamotrigine": { "classKey": "aromatic_asm", "displayClass": "Aromatic ASM" },
  "Phenobarbital": { "classKey": "aromatic_asm", "displayClass": "Aromatic ASM" },
  "Primidone": { "classKey": "aromatic_asm", "displayClass": "Aromatic ASM" },
  "Zonisamide": { "classKey": "aromatic_asm", "displayClass": "Aromatic ASM" }
};
const ANTICONVULSANT_CLASS_ORDER = [
  { "classKey": "aromatic_asm", "displayClass": "Aromatic ASM" }
];
