/* Scoring calculators — only instruments whose item stems/points are stated
 * in scoring-tools.json whatItMeasures (or equivalent cited prose in that file).
 * Do not invent stems, points, or bands.
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

  function get(id) {
    return CALCULATORS[id] || null;
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
    ids: Object.keys(CALCULATORS)
  };
})(typeof window !== "undefined" ? window : globalThis);
