/* Scoring calculators — only instruments whose item stems/points are stated
 * in scoring-tools.json whatItMeasures (or equivalent cited prose in that file).
 * Do not invent stems, points, or bands.
 *
 * MAA-89: PENDING_GAPS lists what each citation-only tool still lacks in-repo
 * before a calculator may ship (stems / options / points / rule / bands).
 */
(function (global) {
  "use strict";

  const CALCULATORS = {
    "pen-fast": {
      id: "pen-fast",
      source: "scoring-tools.json whatItMeasures (PEN-FAST)",
      rule: "sum",
      items: [
        {
          id: "five-years",
          label: "Reaction 5 or fewer years ago",
          type: "yesno",
          yesPoints: 2,
          noPoints: 0
        },
        {
          id: "severe",
          label: "Anaphylaxis/angioedema or severe cutaneous adverse reaction",
          type: "yesno",
          yesPoints: 2,
          noPoints: 0
        },
        {
          id: "treatment",
          label: "Treatment required for the episode",
          type: "yesno",
          yesPoints: 1,
          noPoints: 0
        }
      ],
      bands: [
        { maxExclusive: 3, label: "Low risk (score under 3; NPV 96.3% for a positive allergy test, as stated)" },
        { maxExclusive: null, label: "Not low risk by the stated under-3 cut-point" }
      ]
    },
    scorten: {
      id: "scorten",
      source: "scoring-tools.json whatItMeasures (SCORTEN)",
      rule: "sum",
      items: [
        { id: "age40", label: "Age above 40 years", type: "yesno", yesPoints: 1, noPoints: 0 },
        { id: "malignancy", label: "Malignancy", type: "yesno", yesPoints: 1, noPoints: 0 },
        { id: "hr120", label: "Heart rate above 120/min", type: "yesno", yesPoints: 1, noPoints: 0 },
        { id: "detach10", label: "Initial epidermal detachment above 10%", type: "yesno", yesPoints: 1, noPoints: 0 },
        { id: "urea10", label: "Serum urea above 10 mmol/L", type: "yesno", yesPoints: 1, noPoints: 0 },
        { id: "glucose14", label: "Serum glucose above 14 mmol/L", type: "yesno", yesPoints: 1, noPoints: 0 },
        { id: "bicarb20", label: "Bicarbonate below 20 mmol/L", type: "yesno", yesPoints: 1, noPoints: 0 }
      ],
      note: "Each score point carried an odds ratio for death of 3.45 (stated). Mortality band table not stated in source abstract — not shown."
    },
    "brown-grading": {
      id: "brown-grading",
      source: "scoring-tools.json whatItMeasures (Brown grading)",
      rule: "choice",
      items: [
        {
          id: "grade",
          label: "Reaction grade",
          type: "choice",
          options: [
            { value: "mild", label: "Mild: skin only (urticaria, erythema, angioedema)", points: 1 },
            { value: "moderate", label: "Moderate: diaphoresis, nausea, vomiting, abdominal pain, presyncope, dyspnea, stridor, wheeze or chest/throat tightness", points: 2 },
            { value: "severe", label: "Severe: confusion, collapse, unconsciousness or incontinence", points: 3 }
          ]
        }
      ],
      note: "The moderate and severe grades define anaphylaxis (stated)."
    },
    "rhinitis-vas": {
      id: "rhinitis-vas",
      source: "scoring-tools.json whatItMeasures (VAS)",
      rule: "number",
      items: [
        {
          id: "vas",
          label: "Global rhinitis symptoms (cm)",
          type: "number",
          min: 0,
          max: 10,
          step: 0.1,
          unit: "cm"
        }
      ],
      bands: [
        { maxExclusive: 5, label: "Mild (under 5 cm by ARIA grading, as stated)" },
        { minInclusive: 5, maxExclusive: 6, label: "Between stated mild (<5 cm) and moderate/severe (>6 cm) cut-points" },
        { minInclusive: 6, maxExclusive: null, label: "Moderate/severe (over 6 cm by ARIA grading, as stated)" }
      ]
    }
  };

  /* Gaps vs scoring-tools.json whatItMeasures — not clinical content. */
  const PENDING_GAPS = {
    act: [
      "Five item stems (wording)",
      "Per-item response options and point values (typically 1–5)",
      "Licensed full-instrument citation in repo (abstract alone is not enough)"
    ],
    "c-act": [
      "Seven item stems (child + caregiver wording)",
      "Per-item response options and point values (sum 0–27 stated, options not)",
      "Licensed full-instrument citation in repo"
    ],
    track: [
      "Five item stems (caregiver wording)",
      "Per-item response options and point values",
      "Control cut-point / band table from the instrument source"
    ],
    acq: [
      "Seven item stems (five symptoms, β2-agonist use, airway calibre)",
      "7-point response labels for each item",
      "Whether FEV1 item is included in this preview build"
    ],
    aqlq: [
      "Item stems and domain structure",
      "Response scale and scoring rule",
      "Any interpretive bands the source states"
    ],
    scorad: [
      "Exact extent / intensity / subjective scoring formula (weights are approximate in prose)",
      "Intensity grade descriptors (0–3) per sign",
      "Subjective symptom scales"
    ],
    easi: ["Region × intensity point table", "Area extent bands", "Total score formula"],
    poem: ["Seven symptom stems", "5-point frequency option labels", "Any severity bands if stated"],
    "viga-ad": ["Five morphologic grade descriptors", "How the single grade is chosen"],
    adct: ["Six item stems", "Response options and points", "How total ≥7 maps to items"],
    uas: ["Wheal-number bands", "Pruritus intensity scale", "Daily → UAS7 aggregation rule"],
    uct: ["Four item stems", "Response options and points", "Control cut-off (excluded from source sheet)"],
    "cu-q2ol": ["23 item stems", "Five-step Likert labels", "Domain scoring rule"],
    aas: ["Five item stems", "Response options and points"],
    aect: ["Four item stems", "Response options and points", "4-week vs 3-month form choice"],
    "ae-qol": ["17 item stems", "Domain scoring rule"],
    csms: ["Symptom and medication component formulas", "Equal-weight combination rule details"],
    rqlq: ["28 item stems", "Domain scoring rule"],
    carat10: ["10 item stems", "Response options and points"],
    rcat: [
      "Six item stems (domains only named in prose: congestion, sneezing, watery eyes, sleep, activity, control)",
      "Response options and points",
      "Control cut-point if stated"
    ],
    "snot-22": ["22 item stems", "0–5 (or stated) response scale", "MID is stated (8.9); item table is not"],
    "wao-scit-grading": ["Grade definitions and criteria table"],
    "acute-reaction-grading": ["Continuum grade definitions from the Delphi instrument"],
    fass: ["oFASS 3/5 grade criteria", "nFASS numerical mapping"],
    alden: ["Algorithm criteria and category thresholds"],
    "regiscar-dress": ["RegiSCAR validation score items and probable/definite cut-points"],
    naranjo: ["Questionnaire items and Yes/No/Do not know points (explicitly deferred to full paper)"],
    rema: ["Score components and cut-points for bone-marrow selection"],
    "eoe-endoscopy": ["EREFS feature grade definitions and total score rule"],
    "eoe-histology": [
      "Per-feature 0–3 severity and extent descriptors (eight features named; scale stated)",
      "How grade and stage totals are computed for clinical use"
    ],
    eesai: ["Seven item stems", "Response options and points"]
  };

  function get(id) {
    return CALCULATORS[id] || null;
  }

  function pendingGaps(id) {
    if (CALCULATORS[id]) return null;
    return PENDING_GAPS[id] || [
      "Item stems",
      "Response options / point values",
      "Scoring rule and any bands cited from the full instrument"
    ];
  }

  function itemPoints(item, answer) {
    if (answer == null || answer === "") return null;
    if (item.type === "yesno") {
      if (answer === "yes") return item.yesPoints;
      if (answer === "no") return item.noPoints;
      return null;
    }
    if (item.type === "choice") {
      const opt = (item.options || []).find((o) => o.value === answer);
      return opt ? opt.points : null;
    }
    if (item.type === "number") {
      const n = Number(answer);
      return Number.isFinite(n) ? n : null;
    }
    return null;
  }

  function compute(id, answers) {
    const calc = get(id);
    if (!calc) return { status: "pending" };
    const ans = answers || {};
    const parts = [];
    let answered = 0;
    for (let i = 0; i < calc.items.length; i += 1) {
      const item = calc.items[i];
      const pts = itemPoints(item, ans[item.id]);
      if (pts == null) {
        parts.push({ id: item.id, points: null });
      } else {
        answered += 1;
        parts.push({ id: item.id, points: pts });
      }
    }
    const totalItems = calc.items.length;
    if (answered < totalItems) {
      return {
        status: "incomplete",
        answered: answered,
        total: totalItems,
        score: null,
        band: null,
        note: calc.note || null
      };
    }
    let score = 0;
    if (calc.rule === "sum" || calc.rule === "number" || calc.rule === "choice") {
      for (let i = 0; i < parts.length; i += 1) score += parts[i].points;
    }
    let band = null;
    if (Array.isArray(calc.bands)) {
      for (let b = 0; b < calc.bands.length; b += 1) {
        const row = calc.bands[b];
        const minOk = row.minInclusive == null || score >= row.minInclusive;
        const maxOk = row.maxExclusive == null || score < row.maxExclusive;
        if (minOk && maxOk) {
          band = row.label;
          break;
        }
      }
    }
    return {
      status: "ready",
      answered: answered,
      total: totalItems,
      score: score,
      band: band,
      note: calc.note || null
    };
  }

  global.SCORE_CALCULATORS = {
    get: get,
    compute: compute,
    pendingGaps: pendingGaps,
    ids: Object.keys(CALCULATORS)
  };
})(typeof window !== "undefined" ? window : globalThis);
