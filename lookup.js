const LOOKUP = {
  "beta:Amoxicillin": {
    "id": "beta:Amoxicillin",
    "name": "Amoxicillin",
    "pool": "beta",
    "pending": false,
    "high": [
      {
        "name": "Ampicillin",
        "noteId": "beta:Ampicillin",
        "reason": "identical R1; partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefaclor",
        "noteId": "beta:Cefaclor",
        "reason": "identical R1; partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefadroxil",
        "noteId": "beta:Cefadroxil",
        "reason": "identical R1; almost-identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefamandole",
        "noteId": "beta:Cefamandole",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Cefatrizine",
        "noteId": "beta:Cefatrizine",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefonicid",
        "noteId": "beta:Cefonicid",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefoperazone",
        "noteId": "beta:Cefoperazone",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Ceforamide",
        "noteId": "beta:Ceforamide",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefprozil",
        "noteId": "beta:Cefprozil",
        "reason": "identical R1; almost-identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefradine",
        "noteId": "beta:Cefradine",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cephalexin",
        "noteId": "beta:Cephalexin",
        "reason": "identical R1; partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Dicloxacillin",
        "noteId": "beta:Dicloxacillin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Flucloxacillin",
        "noteId": "beta:Flucloxacillin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Loracarbef",
        "noteId": "beta:Loracarbef",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Nafcillin",
        "noteId": "beta:Nafcillin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Oxacillin",
        "noteId": "beta:Oxacillin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Penicillin G",
        "noteId": "beta:Penicillin G",
        "reason": "partial R1; shared R2 or class ring; verdict unsafe",
        "pendingRow": false
      },
      {
        "name": "Penicillin G / V",
        "noteId": "beta:Penicillin G / V",
        "reason": "similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Penicillin V",
        "noteId": "beta:Penicillin V",
        "reason": "partial R1; shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Piperacillin",
        "noteId": "beta:Piperacillin",
        "reason": "partial R1; similar R1 or R2; shared R2 or class ring",
        "pendingRow": false
      }
    ],
    "safer": [
      {
        "name": "Aztreonam",
        "noteId": "beta:Aztreonam",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefazolin",
        "noteId": "beta:Cefazolin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefdinir",
        "noteId": "beta:Cefdinir",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefditoren",
        "noteId": "beta:Cefditoren",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefepime",
        "noteId": "beta:Cefepime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefetamet",
        "noteId": "beta:Cefetamet",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefiderocol",
        "noteId": "beta:Cefiderocol",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefixime",
        "noteId": "beta:Cefixime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefodizime",
        "noteId": "beta:Cefodizime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefotaxime",
        "noteId": "beta:Cefotaxime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefotetan",
        "noteId": "beta:Cefotetan",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefotiam",
        "noteId": "beta:Cefotiam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefoxitin",
        "noteId": "beta:Cefoxitin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefpirome",
        "noteId": "beta:Cefpirome",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefpodoxime",
        "noteId": "beta:Cefpodoxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline",
        "noteId": "beta:Ceftaroline",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline fosamil",
        "noteId": "beta:Ceftaroline fosamil",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftazidime",
        "noteId": "beta:Ceftazidime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftezole",
        "noteId": "beta:Ceftezole",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftibuten",
        "noteId": "beta:Ceftibuten",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftizoxime",
        "noteId": "beta:Ceftizoxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftobiprole",
        "noteId": "beta:Ceftobiprole",
        "reason": "no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftolozane",
        "noteId": "beta:Ceftolozane",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftriaxone",
        "noteId": "beta:Ceftriaxone",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefuroxime",
        "noteId": "beta:Cefuroxime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cephalothin",
        "noteId": "beta:Cephalothin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cephapirin",
        "noteId": "beta:Cephapirin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ertapenem",
        "noteId": "beta:Ertapenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Imipenem",
        "noteId": "beta:Imipenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Meropenem",
        "noteId": "beta:Meropenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Pivmecillinam",
        "noteId": "beta:Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      }
    ],
    "highFrom": [
      {
        "name": "Ampicillin",
        "reason": "identical R1; partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3; manual transcription"
      },
      {
        "name": "Cefaclor",
        "reason": "identical R1; partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11; Hutten sample; manual transcription"
      },
      {
        "name": "Cefadroxil",
        "reason": "identical R1; almost-identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; manual transcription"
      },
      {
        "name": "Cefamandole",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11; Hutten sample"
      },
      {
        "name": "Cefatrizine",
        "reason": "identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefonicid",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefoperazone",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ceforamide",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefprozil",
        "reason": "identical R1; almost-identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; manual transcription"
      },
      {
        "name": "Cefradine",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cephalexin",
        "reason": "identical R1; partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11; Hutten sample; manual transcription"
      },
      {
        "name": "Dicloxacillin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Flucloxacillin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Loracarbef",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Nafcillin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Oxacillin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Penicillin G",
        "reason": "partial R1; shared R2 or class ring; verdict unsafe",
        "via": "Romano Fig 1; Trubiano Fig C3; verdict line"
      },
      {
        "name": "Penicillin G / V",
        "reason": "similar R1 or R2",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Penicillin V",
        "reason": "partial R1; shared R2 or class ring",
        "via": "Romano Fig 1; Trubiano Fig C3"
      },
      {
        "name": "Piperacillin",
        "reason": "partial R1; similar R1 or R2; shared R2 or class ring",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3"
      }
    ],
    "saferFrom": [
      {
        "name": "Aztreonam",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cefazolin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cefdinir",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefditoren",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefepime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cefetamet",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefiderocol",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      },
      {
        "name": "Cefixime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefodizime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefotaxime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cefotetan",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefotiam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefoxitin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefpirome",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefpodoxime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ceftaroline",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Ceftaroline fosamil",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftazidime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Ceftezole",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftibuten",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      },
      {
        "name": "Ceftizoxime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftobiprole",
        "reason": "no shared cross-reactivity",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftolozane",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Ceftriaxone",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cefuroxime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cephalothin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cephapirin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ertapenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Imipenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Meropenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      }
    ]
  },
  "beta:Ampicillin": {
    "id": "beta:Ampicillin",
    "name": "Ampicillin",
    "pool": "beta",
    "pending": false,
    "high": [
      {
        "name": "Amoxicillin",
        "noteId": "beta:Amoxicillin",
        "reason": "identical R1; partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefaclor",
        "noteId": "beta:Cefaclor",
        "reason": "identical R1; partial R1; almost-identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefadroxil",
        "noteId": "beta:Cefadroxil",
        "reason": "identical R1; partial R1; almost-identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefamandole",
        "noteId": "beta:Cefamandole",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefatrizine",
        "noteId": "beta:Cefatrizine",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefonicid",
        "noteId": "beta:Cefonicid",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefoperazone",
        "noteId": "beta:Cefoperazone",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Ceforamide",
        "noteId": "beta:Ceforamide",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefprozil",
        "noteId": "beta:Cefprozil",
        "reason": "identical R1; partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefradine",
        "noteId": "beta:Cefradine",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cephalexin",
        "noteId": "beta:Cephalexin",
        "reason": "identical R1; almost-identical R1",
        "pendingRow": false
      },
      {
        "name": "Dicloxacillin",
        "noteId": "beta:Dicloxacillin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Flucloxacillin",
        "noteId": "beta:Flucloxacillin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Loracarbef",
        "noteId": "beta:Loracarbef",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Nafcillin",
        "noteId": "beta:Nafcillin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Oxacillin",
        "noteId": "beta:Oxacillin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Penicillin G",
        "noteId": "beta:Penicillin G",
        "reason": "partial R1; shared R2 or class ring; verdict unsafe",
        "pendingRow": false
      },
      {
        "name": "Penicillin G / V",
        "noteId": "beta:Penicillin G / V",
        "reason": "similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Penicillin V",
        "noteId": "beta:Penicillin V",
        "reason": "partial R1; shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Piperacillin",
        "noteId": "beta:Piperacillin",
        "reason": "partial R1; shared R2 or class ring",
        "pendingRow": false
      }
    ],
    "safer": [
      {
        "name": "Aztreonam",
        "noteId": "beta:Aztreonam",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefdinir",
        "noteId": "beta:Cefdinir",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefditoren",
        "noteId": "beta:Cefditoren",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefepime",
        "noteId": "beta:Cefepime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefetamet",
        "noteId": "beta:Cefetamet",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefiderocol",
        "noteId": "beta:Cefiderocol",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefixime",
        "noteId": "beta:Cefixime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefodizime",
        "noteId": "beta:Cefodizime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefotaxime",
        "noteId": "beta:Cefotaxime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefotetan",
        "noteId": "beta:Cefotetan",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefotiam",
        "noteId": "beta:Cefotiam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefoxitin",
        "noteId": "beta:Cefoxitin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefpirome",
        "noteId": "beta:Cefpirome",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefpodoxime",
        "noteId": "beta:Cefpodoxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline",
        "noteId": "beta:Ceftaroline",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline fosamil",
        "noteId": "beta:Ceftaroline fosamil",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftazidime",
        "noteId": "beta:Ceftazidime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftezole",
        "noteId": "beta:Ceftezole",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftibuten",
        "noteId": "beta:Ceftibuten",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftizoxime",
        "noteId": "beta:Ceftizoxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftobiprole",
        "noteId": "beta:Ceftobiprole",
        "reason": "no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftolozane",
        "noteId": "beta:Ceftolozane",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftriaxone",
        "noteId": "beta:Ceftriaxone",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefuroxime",
        "noteId": "beta:Cefuroxime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cephalothin",
        "noteId": "beta:Cephalothin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cephapirin",
        "noteId": "beta:Cephapirin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Pivmecillinam",
        "noteId": "beta:Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      }
    ],
    "highFrom": [
      {
        "name": "Amoxicillin",
        "reason": "identical R1; partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3; manual transcription"
      },
      {
        "name": "Cefaclor",
        "reason": "identical R1; partial R1; almost-identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; Hutten sample; manual transcription"
      },
      {
        "name": "Cefadroxil",
        "reason": "identical R1; partial R1; almost-identical R1",
        "via": "Romano Fig 1; Trubiano Fig C3; manual transcription"
      },
      {
        "name": "Cefamandole",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefatrizine",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefonicid",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefoperazone",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ceforamide",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefprozil",
        "reason": "identical R1; partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3; manual transcription"
      },
      {
        "name": "Cefradine",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cephalexin",
        "reason": "identical R1; almost-identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; manual transcription"
      },
      {
        "name": "Dicloxacillin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Flucloxacillin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Loracarbef",
        "reason": "identical R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Nafcillin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Oxacillin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Penicillin G",
        "reason": "partial R1; shared R2 or class ring; verdict unsafe",
        "via": "Romano Fig 1; Trubiano Fig C3; verdict line"
      },
      {
        "name": "Penicillin G / V",
        "reason": "similar R1 or R2",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Penicillin V",
        "reason": "partial R1; shared R2 or class ring",
        "via": "Romano Fig 1; Trubiano Fig C3"
      },
      {
        "name": "Piperacillin",
        "reason": "partial R1; shared R2 or class ring",
        "via": "Romano Fig 1; Trubiano Fig C3"
      }
    ],
    "saferFrom": [
      {
        "name": "Aztreonam",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefdinir",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefditoren",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefepime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefetamet",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefiderocol",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefixime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefodizime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefotaxime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefotetan",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefotiam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefoxitin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefpirome",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefpodoxime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ceftaroline",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Romano Fig 1; Trubiano Fig C3"
      },
      {
        "name": "Ceftaroline fosamil",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftazidime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Ceftezole",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftibuten",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ceftizoxime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftobiprole",
        "reason": "no shared cross-reactivity",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftolozane",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Ceftriaxone",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefuroxime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cephalothin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cephapirin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      }
    ]
  },
  "beta:Dicloxacillin": {
    "id": "beta:Dicloxacillin",
    "name": "Dicloxacillin",
    "pool": "beta",
    "pending": false,
    "high": [
      {
        "name": "Amoxicillin",
        "noteId": "beta:Amoxicillin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ampicillin",
        "noteId": "beta:Ampicillin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Flucloxacillin",
        "noteId": "beta:Flucloxacillin",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Nafcillin",
        "noteId": "beta:Nafcillin",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Oxacillin",
        "noteId": "beta:Oxacillin",
        "reason": "identical R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Penicillin G",
        "noteId": "beta:Penicillin G",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Penicillin V",
        "noteId": "beta:Penicillin V",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Piperacillin",
        "noteId": "beta:Piperacillin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      }
    ],
    "safer": [
      {
        "name": "Aztreonam",
        "noteId": "beta:Aztreonam",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefaclor",
        "noteId": "beta:Cefaclor",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefadroxil",
        "noteId": "beta:Cefadroxil",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefamandole",
        "noteId": "beta:Cefamandole",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefatrizine",
        "noteId": "beta:Cefatrizine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefazolin",
        "noteId": "beta:Cefazolin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefdinir",
        "noteId": "beta:Cefdinir",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefditoren",
        "noteId": "beta:Cefditoren",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefepime",
        "noteId": "beta:Cefepime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefiderocol",
        "noteId": "beta:Cefiderocol",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefixime",
        "noteId": "beta:Cefixime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefodizime",
        "noteId": "beta:Cefodizime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefonicid",
        "noteId": "beta:Cefonicid",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefoperazone",
        "noteId": "beta:Cefoperazone",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefotaxime",
        "noteId": "beta:Cefotaxime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefotetan",
        "noteId": "beta:Cefotetan",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefoxitin",
        "noteId": "beta:Cefoxitin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefpirome",
        "noteId": "beta:Cefpirome",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefpodoxime",
        "noteId": "beta:Cefpodoxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefprozil",
        "noteId": "beta:Cefprozil",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline",
        "noteId": "beta:Ceftaroline",
        "reason": "no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline fosamil",
        "noteId": "beta:Ceftaroline fosamil",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftazidime",
        "noteId": "beta:Ceftazidime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftezole",
        "noteId": "beta:Ceftezole",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftibuten",
        "noteId": "beta:Ceftibuten",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftobiprole",
        "noteId": "beta:Ceftobiprole",
        "reason": "no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftolozane",
        "noteId": "beta:Ceftolozane",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftriaxone",
        "noteId": "beta:Ceftriaxone",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefuroxime",
        "noteId": "beta:Cefuroxime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cephalexin",
        "noteId": "beta:Cephalexin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cephalothin",
        "noteId": "beta:Cephalothin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cephapirin",
        "noteId": "beta:Cephapirin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Penicillin G / V",
        "noteId": "beta:Penicillin G / V",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      }
    ],
    "highFrom": [
      {
        "name": "Amoxicillin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ampicillin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Flucloxacillin",
        "reason": "identical R1",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Nafcillin",
        "reason": "identical R1",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Oxacillin",
        "reason": "identical R1; similar R1 or R2",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Penicillin G",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Penicillin V",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Piperacillin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      }
    ],
    "saferFrom": [
      {
        "name": "Aztreonam",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefaclor",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefadroxil",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefamandole",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefatrizine",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefazolin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefdinir",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefditoren",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefepime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefiderocol",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefixime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefodizime",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefonicid",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefoperazone",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefotaxime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefotetan",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefoxitin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefpirome",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefpodoxime",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefprozil",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Ceftaroline",
        "reason": "no shared cross-reactivity",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftaroline fosamil",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftazidime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Ceftezole",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftibuten",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftobiprole",
        "reason": "no shared cross-reactivity",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftolozane",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Ceftriaxone",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefuroxime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cephalexin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cephalothin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cephapirin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Penicillin G / V",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      }
    ]
  },
  "beta:Feneticillin": {
    "id": "beta:Feneticillin",
    "name": "Feneticillin",
    "pool": "beta",
    "pending": false,
    "high": [],
    "safer": [
      {
        "name": "Aztreonam",
        "noteId": "beta:Aztreonam",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefaclor",
        "noteId": "beta:Cefaclor",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefamandole",
        "noteId": "beta:Cefamandole",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefazolin",
        "noteId": "beta:Cefazolin",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefepime",
        "noteId": "beta:Cefepime",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefiderocol",
        "noteId": "beta:Cefiderocol",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefotaxime",
        "noteId": "beta:Cefotaxime",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline",
        "noteId": "beta:Ceftaroline",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftazidime",
        "noteId": "beta:Ceftazidime",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftibuten",
        "noteId": "beta:Ceftibuten",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftolozane",
        "noteId": "beta:Ceftolozane",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftriaxone",
        "noteId": "beta:Ceftriaxone",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefuroxime",
        "noteId": "beta:Cefuroxime",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cephalexin",
        "noteId": "beta:Cephalexin",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cephalothin",
        "noteId": "beta:Cephalothin",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ertapenem",
        "noteId": "beta:Ertapenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Imipenem",
        "noteId": "beta:Imipenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Meropenem",
        "noteId": "beta:Meropenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      }
    ],
    "highFrom": [],
    "saferFrom": [
      {
        "name": "Aztreonam",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Cefaclor",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Cefamandole",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Cefazolin",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Cefepime",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Cefiderocol",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Cefotaxime",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Ceftaroline",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Ceftazidime",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Ceftibuten",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Ceftolozane",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Ceftriaxone",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Cefuroxime",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Cephalexin",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Cephalothin",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Ertapenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Imipenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Meropenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      }
    ]
  },
  "beta:Flucloxacillin": {
    "id": "beta:Flucloxacillin",
    "name": "Flucloxacillin",
    "pool": "beta",
    "pending": false,
    "high": [
      {
        "name": "Amoxicillin",
        "noteId": "beta:Amoxicillin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ampicillin",
        "noteId": "beta:Ampicillin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Dicloxacillin",
        "noteId": "beta:Dicloxacillin",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Nafcillin",
        "noteId": "beta:Nafcillin",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Oxacillin",
        "noteId": "beta:Oxacillin",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Penicillin G",
        "noteId": "beta:Penicillin G",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Penicillin V",
        "noteId": "beta:Penicillin V",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Piperacillin",
        "noteId": "beta:Piperacillin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      }
    ],
    "safer": [
      {
        "name": "Aztreonam",
        "noteId": "beta:Aztreonam",
        "reason": "no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefaclor",
        "noteId": "beta:Cefaclor",
        "reason": "no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefadroxil",
        "noteId": "beta:Cefadroxil",
        "reason": "no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefamandole",
        "noteId": "beta:Cefamandole",
        "reason": "no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefazolin",
        "noteId": "beta:Cefazolin",
        "reason": "no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefdinir",
        "noteId": "beta:Cefdinir",
        "reason": "no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefepime",
        "noteId": "beta:Cefepime",
        "reason": "no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefiderocol",
        "noteId": "beta:Cefiderocol",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefixime",
        "noteId": "beta:Cefixime",
        "reason": "no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefotaxime",
        "noteId": "beta:Cefotaxime",
        "reason": "no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefotetan",
        "noteId": "beta:Cefotetan",
        "reason": "no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefoxitin",
        "noteId": "beta:Cefoxitin",
        "reason": "no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefprozil",
        "noteId": "beta:Cefprozil",
        "reason": "no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline",
        "noteId": "beta:Ceftaroline",
        "reason": "no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftazidime",
        "noteId": "beta:Ceftazidime",
        "reason": "no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftibuten",
        "noteId": "beta:Ceftibuten",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftobiprole",
        "noteId": "beta:Ceftobiprole",
        "reason": "no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftolozane",
        "noteId": "beta:Ceftolozane",
        "reason": "no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftriaxone",
        "noteId": "beta:Ceftriaxone",
        "reason": "no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefuroxime",
        "noteId": "beta:Cefuroxime",
        "reason": "no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cephalexin",
        "noteId": "beta:Cephalexin",
        "reason": "no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cephalothin",
        "noteId": "beta:Cephalothin",
        "reason": "no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ertapenem",
        "noteId": "beta:Ertapenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Imipenem",
        "noteId": "beta:Imipenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Meropenem",
        "noteId": "beta:Meropenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      }
    ],
    "highFrom": [
      {
        "name": "Amoxicillin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ampicillin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Dicloxacillin",
        "reason": "identical R1",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Nafcillin",
        "reason": "identical R1",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Oxacillin",
        "reason": "identical R1",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Penicillin G",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Penicillin V",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Piperacillin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      }
    ],
    "saferFrom": [
      {
        "name": "Aztreonam",
        "reason": "no shared cross-reactivity; no cross-reactivity",
        "via": "Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cefaclor",
        "reason": "no shared cross-reactivity; no cross-reactivity",
        "via": "Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cefadroxil",
        "reason": "no shared cross-reactivity",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefamandole",
        "reason": "no shared cross-reactivity; no cross-reactivity",
        "via": "Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cefazolin",
        "reason": "no shared cross-reactivity; no cross-reactivity",
        "via": "Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cefdinir",
        "reason": "no shared cross-reactivity",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefepime",
        "reason": "no shared cross-reactivity; no cross-reactivity",
        "via": "Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cefiderocol",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Cefixime",
        "reason": "no shared cross-reactivity",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefotaxime",
        "reason": "no shared cross-reactivity; no cross-reactivity",
        "via": "Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cefotetan",
        "reason": "no shared cross-reactivity",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefoxitin",
        "reason": "no shared cross-reactivity",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefprozil",
        "reason": "no shared cross-reactivity",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftaroline",
        "reason": "no shared cross-reactivity; no cross-reactivity",
        "via": "Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Ceftazidime",
        "reason": "no shared cross-reactivity; no cross-reactivity",
        "via": "Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Ceftibuten",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Ceftobiprole",
        "reason": "no shared cross-reactivity",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftolozane",
        "reason": "no shared cross-reactivity; no cross-reactivity",
        "via": "Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Ceftriaxone",
        "reason": "no shared cross-reactivity; no cross-reactivity",
        "via": "Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cefuroxime",
        "reason": "no shared cross-reactivity; no cross-reactivity",
        "via": "Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cephalexin",
        "reason": "no shared cross-reactivity; no cross-reactivity",
        "via": "Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cephalothin",
        "reason": "no shared cross-reactivity; no cross-reactivity",
        "via": "Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Ertapenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Imipenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Meropenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      }
    ]
  },
  "beta:Nafcillin": {
    "id": "beta:Nafcillin",
    "name": "Nafcillin",
    "pool": "beta",
    "pending": false,
    "high": [
      {
        "name": "Amoxicillin",
        "noteId": "beta:Amoxicillin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ampicillin",
        "noteId": "beta:Ampicillin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Dicloxacillin",
        "noteId": "beta:Dicloxacillin",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Flucloxacillin",
        "noteId": "beta:Flucloxacillin",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Oxacillin",
        "noteId": "beta:Oxacillin",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Penicillin G",
        "noteId": "beta:Penicillin G",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Penicillin V",
        "noteId": "beta:Penicillin V",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Piperacillin",
        "noteId": "beta:Piperacillin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      }
    ],
    "safer": [
      {
        "name": "Aztreonam",
        "noteId": "beta:Aztreonam",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefaclor",
        "noteId": "beta:Cefaclor",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefadroxil",
        "noteId": "beta:Cefadroxil",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefamandole",
        "noteId": "beta:Cefamandole",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefatrizine",
        "noteId": "beta:Cefatrizine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefazolin",
        "noteId": "beta:Cefazolin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefdinir",
        "noteId": "beta:Cefdinir",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefditoren",
        "noteId": "beta:Cefditoren",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefepime",
        "noteId": "beta:Cefepime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefiderocol",
        "noteId": "beta:Cefiderocol",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefixime",
        "noteId": "beta:Cefixime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefodizime",
        "noteId": "beta:Cefodizime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefonicid",
        "noteId": "beta:Cefonicid",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefoperazone",
        "noteId": "beta:Cefoperazone",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefotaxime",
        "noteId": "beta:Cefotaxime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefotetan",
        "noteId": "beta:Cefotetan",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefoxitin",
        "noteId": "beta:Cefoxitin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefpirome",
        "noteId": "beta:Cefpirome",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefpodoxime",
        "noteId": "beta:Cefpodoxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefprozil",
        "noteId": "beta:Cefprozil",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline",
        "noteId": "beta:Ceftaroline",
        "reason": "no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline fosamil",
        "noteId": "beta:Ceftaroline fosamil",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftazidime",
        "noteId": "beta:Ceftazidime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftezole",
        "noteId": "beta:Ceftezole",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftibuten",
        "noteId": "beta:Ceftibuten",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftobiprole",
        "noteId": "beta:Ceftobiprole",
        "reason": "no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftolozane",
        "noteId": "beta:Ceftolozane",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftriaxone",
        "noteId": "beta:Ceftriaxone",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefuroxime",
        "noteId": "beta:Cefuroxime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cephalexin",
        "noteId": "beta:Cephalexin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cephalothin",
        "noteId": "beta:Cephalothin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cephapirin",
        "noteId": "beta:Cephapirin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Penicillin G / V",
        "noteId": "beta:Penicillin G / V",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      }
    ],
    "highFrom": [
      {
        "name": "Amoxicillin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ampicillin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Dicloxacillin",
        "reason": "identical R1",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Flucloxacillin",
        "reason": "identical R1",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Oxacillin",
        "reason": "identical R1",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Penicillin G",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Penicillin V",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Piperacillin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      }
    ],
    "saferFrom": [
      {
        "name": "Aztreonam",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefaclor",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefadroxil",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefamandole",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefatrizine",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefazolin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefdinir",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefditoren",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefepime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefiderocol",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefixime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefodizime",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefonicid",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefoperazone",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefotaxime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefotetan",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefoxitin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefpirome",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefpodoxime",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefprozil",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Ceftaroline",
        "reason": "no shared cross-reactivity",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftaroline fosamil",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftazidime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Ceftezole",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftibuten",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftobiprole",
        "reason": "no shared cross-reactivity",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftolozane",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Ceftriaxone",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefuroxime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cephalexin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cephalothin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cephapirin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Penicillin G / V",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      }
    ]
  },
  "beta:Oxacillin": {
    "id": "beta:Oxacillin",
    "name": "Oxacillin",
    "pool": "beta",
    "pending": false,
    "high": [
      {
        "name": "Amoxicillin",
        "noteId": "beta:Amoxicillin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ampicillin",
        "noteId": "beta:Ampicillin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Dicloxacillin",
        "noteId": "beta:Dicloxacillin",
        "reason": "identical R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Flucloxacillin",
        "noteId": "beta:Flucloxacillin",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Nafcillin",
        "noteId": "beta:Nafcillin",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Penicillin G",
        "noteId": "beta:Penicillin G",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Penicillin V",
        "noteId": "beta:Penicillin V",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Piperacillin",
        "noteId": "beta:Piperacillin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      }
    ],
    "safer": [
      {
        "name": "Aztreonam",
        "noteId": "beta:Aztreonam",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefaclor",
        "noteId": "beta:Cefaclor",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefadroxil",
        "noteId": "beta:Cefadroxil",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefamandole",
        "noteId": "beta:Cefamandole",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefatrizine",
        "noteId": "beta:Cefatrizine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefazolin",
        "noteId": "beta:Cefazolin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefdinir",
        "noteId": "beta:Cefdinir",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefditoren",
        "noteId": "beta:Cefditoren",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefepime",
        "noteId": "beta:Cefepime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefiderocol",
        "noteId": "beta:Cefiderocol",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefixime",
        "noteId": "beta:Cefixime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefodizime",
        "noteId": "beta:Cefodizime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefonicid",
        "noteId": "beta:Cefonicid",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefoperazone",
        "noteId": "beta:Cefoperazone",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefotaxime",
        "noteId": "beta:Cefotaxime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefotetan",
        "noteId": "beta:Cefotetan",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefoxitin",
        "noteId": "beta:Cefoxitin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefpirome",
        "noteId": "beta:Cefpirome",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefpodoxime",
        "noteId": "beta:Cefpodoxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefprozil",
        "noteId": "beta:Cefprozil",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline",
        "noteId": "beta:Ceftaroline",
        "reason": "no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline fosamil",
        "noteId": "beta:Ceftaroline fosamil",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftazidime",
        "noteId": "beta:Ceftazidime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftezole",
        "noteId": "beta:Ceftezole",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftibuten",
        "noteId": "beta:Ceftibuten",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftobiprole",
        "noteId": "beta:Ceftobiprole",
        "reason": "no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftolozane",
        "noteId": "beta:Ceftolozane",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftriaxone",
        "noteId": "beta:Ceftriaxone",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefuroxime",
        "noteId": "beta:Cefuroxime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cephalexin",
        "noteId": "beta:Cephalexin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cephalothin",
        "noteId": "beta:Cephalothin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cephapirin",
        "noteId": "beta:Cephapirin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Penicillin G / V",
        "noteId": "beta:Penicillin G / V",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      }
    ],
    "highFrom": [
      {
        "name": "Amoxicillin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ampicillin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Dicloxacillin",
        "reason": "identical R1; similar R1 or R2",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Flucloxacillin",
        "reason": "identical R1",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Nafcillin",
        "reason": "identical R1",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Penicillin G",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Penicillin V",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Piperacillin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      }
    ],
    "saferFrom": [
      {
        "name": "Aztreonam",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefaclor",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefadroxil",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefamandole",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefatrizine",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefazolin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefdinir",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefditoren",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefepime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefiderocol",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefixime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefodizime",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefonicid",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefoperazone",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefotaxime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefotetan",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefoxitin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefpirome",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefpodoxime",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefprozil",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Ceftaroline",
        "reason": "no shared cross-reactivity",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftaroline fosamil",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftazidime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Ceftezole",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftibuten",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftobiprole",
        "reason": "no shared cross-reactivity",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftolozane",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Ceftriaxone",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefuroxime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cephalexin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cephalothin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cephapirin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Penicillin G / V",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      }
    ]
  },
  "beta:Penicillin G": {
    "id": "beta:Penicillin G",
    "name": "Penicillin G",
    "pool": "beta",
    "pending": false,
    "high": [
      {
        "name": "Amoxicillin",
        "noteId": "beta:Amoxicillin",
        "reason": "partial R1; shared R2 or class ring; verdict unsafe",
        "pendingRow": false
      },
      {
        "name": "Ampicillin",
        "noteId": "beta:Ampicillin",
        "reason": "partial R1; shared R2 or class ring; verdict unsafe",
        "pendingRow": false
      },
      {
        "name": "Cefaclor",
        "noteId": "beta:Cefaclor",
        "reason": "partial R1; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Cefadroxil",
        "noteId": "beta:Cefadroxil",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefamandole",
        "noteId": "beta:Cefamandole",
        "reason": "partial R1; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Cefatrizine",
        "noteId": "beta:Cefatrizine",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefonicid",
        "noteId": "beta:Cefonicid",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefoperazone",
        "noteId": "beta:Cefoperazone",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Ceforamide",
        "noteId": "beta:Ceforamide",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefprozil",
        "noteId": "beta:Cefprozil",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cephalexin",
        "noteId": "beta:Cephalexin",
        "reason": "partial R1; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Dicloxacillin",
        "noteId": "beta:Dicloxacillin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Flucloxacillin",
        "noteId": "beta:Flucloxacillin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Loracarbef",
        "noteId": "beta:Loracarbef",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Nafcillin",
        "noteId": "beta:Nafcillin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Oxacillin",
        "noteId": "beta:Oxacillin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Penicillin V",
        "noteId": "beta:Penicillin V",
        "reason": "identical R1; partial R1; almost-identical R1",
        "pendingRow": false
      },
      {
        "name": "Piperacillin",
        "noteId": "beta:Piperacillin",
        "reason": "partial R1; shared R2 or class ring",
        "pendingRow": false
      }
    ],
    "safer": [
      {
        "name": "Aztreonam",
        "noteId": "beta:Aztreonam",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefazolin",
        "noteId": "beta:Cefazolin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefdinir",
        "noteId": "beta:Cefdinir",
        "reason": "no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefditoren",
        "noteId": "beta:Cefditoren",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefepime",
        "noteId": "beta:Cefepime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefetamet",
        "noteId": "beta:Cefetamet",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefiderocol",
        "noteId": "beta:Cefiderocol",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefixime",
        "noteId": "beta:Cefixime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefodizime",
        "noteId": "beta:Cefodizime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefotaxime",
        "noteId": "beta:Cefotaxime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefotetan",
        "noteId": "beta:Cefotetan",
        "reason": "no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefotiam",
        "noteId": "beta:Cefotiam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefoxitin",
        "noteId": "beta:Cefoxitin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefpirome",
        "noteId": "beta:Cefpirome",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefpodoxime",
        "noteId": "beta:Cefpodoxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefradine",
        "noteId": "beta:Cefradine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline",
        "noteId": "beta:Ceftaroline",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftazidime",
        "noteId": "beta:Ceftazidime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftibuten",
        "noteId": "beta:Ceftibuten",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftizoxime",
        "noteId": "beta:Ceftizoxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftobiprole",
        "noteId": "beta:Ceftobiprole",
        "reason": "no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftolozane",
        "noteId": "beta:Ceftolozane",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftriaxone",
        "noteId": "beta:Ceftriaxone",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefuroxime",
        "noteId": "beta:Cefuroxime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cephalothin",
        "noteId": "beta:Cephalothin",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ertapenem",
        "noteId": "beta:Ertapenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Imipenem",
        "noteId": "beta:Imipenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Meropenem",
        "noteId": "beta:Meropenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Pivmecillinam",
        "noteId": "beta:Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      }
    ],
    "highFrom": [
      {
        "name": "Amoxicillin",
        "reason": "partial R1; shared R2 or class ring; verdict unsafe",
        "via": "Romano Fig 1; Trubiano Fig C3; verdict line"
      },
      {
        "name": "Ampicillin",
        "reason": "partial R1; shared R2 or class ring; verdict unsafe",
        "via": "Romano Fig 1; Trubiano Fig C3; verdict line"
      },
      {
        "name": "Cefaclor",
        "reason": "partial R1; clinical cross-react",
        "via": "Romano Fig 1; SWAB Table 11"
      },
      {
        "name": "Cefadroxil",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefamandole",
        "reason": "partial R1; clinical cross-react",
        "via": "Romano Fig 1; SWAB Table 11"
      },
      {
        "name": "Cefatrizine",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefonicid",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefoperazone",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceforamide",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefprozil",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cephalexin",
        "reason": "partial R1; clinical cross-react",
        "via": "Romano Fig 1; SWAB Table 11"
      },
      {
        "name": "Dicloxacillin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Flucloxacillin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Loracarbef",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Nafcillin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Oxacillin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Penicillin V",
        "reason": "identical R1; partial R1; almost-identical R1",
        "via": "Romano Fig 1; Trubiano Fig C3; manual transcription"
      },
      {
        "name": "Piperacillin",
        "reason": "partial R1; shared R2 or class ring",
        "via": "Romano Fig 1; Trubiano Fig C3"
      }
    ],
    "saferFrom": [
      {
        "name": "Aztreonam",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cefazolin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cefdinir",
        "reason": "no shared cross-reactivity",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefditoren",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefepime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cefetamet",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefiderocol",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "via": "Romano Fig 1; SWAB Table 11"
      },
      {
        "name": "Cefixime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Romano Fig 1; Trubiano Fig C3"
      },
      {
        "name": "Cefodizime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefotaxime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cefotetan",
        "reason": "no shared cross-reactivity",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefotiam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefoxitin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefpirome",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefpodoxime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefradine",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftaroline",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Ceftazidime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Ceftibuten",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "via": "Romano Fig 1; SWAB Table 11"
      },
      {
        "name": "Ceftizoxime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftobiprole",
        "reason": "no shared cross-reactivity",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftolozane",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Ceftriaxone",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cefuroxime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cephalothin",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "via": "Romano Fig 1; SWAB Table 11"
      },
      {
        "name": "Ertapenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Imipenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Meropenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      }
    ]
  },
  "beta:Penicillin V": {
    "id": "beta:Penicillin V",
    "name": "Penicillin V",
    "pool": "beta",
    "pending": false,
    "high": [
      {
        "name": "Amoxicillin",
        "noteId": "beta:Amoxicillin",
        "reason": "partial R1; shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ampicillin",
        "noteId": "beta:Ampicillin",
        "reason": "partial R1; shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefaclor",
        "noteId": "beta:Cefaclor",
        "reason": "partial R1; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Cefadroxil",
        "noteId": "beta:Cefadroxil",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefamandole",
        "noteId": "beta:Cefamandole",
        "reason": "partial R1; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Cefatrizine",
        "noteId": "beta:Cefatrizine",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefonicid",
        "noteId": "beta:Cefonicid",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefoperazone",
        "noteId": "beta:Cefoperazone",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Ceforamide",
        "noteId": "beta:Ceforamide",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefprozil",
        "noteId": "beta:Cefprozil",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cephalexin",
        "noteId": "beta:Cephalexin",
        "reason": "partial R1; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Dicloxacillin",
        "noteId": "beta:Dicloxacillin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Flucloxacillin",
        "noteId": "beta:Flucloxacillin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Loracarbef",
        "noteId": "beta:Loracarbef",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Nafcillin",
        "noteId": "beta:Nafcillin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Oxacillin",
        "noteId": "beta:Oxacillin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Penicillin G",
        "noteId": "beta:Penicillin G",
        "reason": "identical R1; partial R1; almost-identical R1",
        "pendingRow": false
      },
      {
        "name": "Piperacillin",
        "noteId": "beta:Piperacillin",
        "reason": "partial R1; shared R2 or class ring",
        "pendingRow": false
      }
    ],
    "safer": [
      {
        "name": "Aztreonam",
        "noteId": "beta:Aztreonam",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefazolin",
        "noteId": "beta:Cefazolin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefdinir",
        "noteId": "beta:Cefdinir",
        "reason": "no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefditoren",
        "noteId": "beta:Cefditoren",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefepime",
        "noteId": "beta:Cefepime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefetamet",
        "noteId": "beta:Cefetamet",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefiderocol",
        "noteId": "beta:Cefiderocol",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefixime",
        "noteId": "beta:Cefixime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefodizime",
        "noteId": "beta:Cefodizime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefotaxime",
        "noteId": "beta:Cefotaxime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefotetan",
        "noteId": "beta:Cefotetan",
        "reason": "no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefotiam",
        "noteId": "beta:Cefotiam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefoxitin",
        "noteId": "beta:Cefoxitin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefpirome",
        "noteId": "beta:Cefpirome",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefpodoxime",
        "noteId": "beta:Cefpodoxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefradine",
        "noteId": "beta:Cefradine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline",
        "noteId": "beta:Ceftaroline",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftazidime",
        "noteId": "beta:Ceftazidime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftibuten",
        "noteId": "beta:Ceftibuten",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftizoxime",
        "noteId": "beta:Ceftizoxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftobiprole",
        "noteId": "beta:Ceftobiprole",
        "reason": "no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftolozane",
        "noteId": "beta:Ceftolozane",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftriaxone",
        "noteId": "beta:Ceftriaxone",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefuroxime",
        "noteId": "beta:Cefuroxime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cephalothin",
        "noteId": "beta:Cephalothin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ertapenem",
        "noteId": "beta:Ertapenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Imipenem",
        "noteId": "beta:Imipenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Meropenem",
        "noteId": "beta:Meropenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Pivmecillinam",
        "noteId": "beta:Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      }
    ],
    "highFrom": [
      {
        "name": "Amoxicillin",
        "reason": "partial R1; shared R2 or class ring",
        "via": "Romano Fig 1; Trubiano Fig C3"
      },
      {
        "name": "Ampicillin",
        "reason": "partial R1; shared R2 or class ring",
        "via": "Romano Fig 1; Trubiano Fig C3"
      },
      {
        "name": "Cefaclor",
        "reason": "partial R1; clinical cross-react",
        "via": "Romano Fig 1; SWAB Table 11"
      },
      {
        "name": "Cefadroxil",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefamandole",
        "reason": "partial R1; clinical cross-react",
        "via": "Romano Fig 1; SWAB Table 11"
      },
      {
        "name": "Cefatrizine",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefonicid",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefoperazone",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceforamide",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefprozil",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cephalexin",
        "reason": "partial R1; clinical cross-react",
        "via": "Romano Fig 1; SWAB Table 11"
      },
      {
        "name": "Dicloxacillin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Flucloxacillin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Loracarbef",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Nafcillin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Oxacillin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Penicillin G",
        "reason": "identical R1; partial R1; almost-identical R1",
        "via": "Romano Fig 1; Trubiano Fig C3; manual transcription"
      },
      {
        "name": "Piperacillin",
        "reason": "partial R1; shared R2 or class ring",
        "via": "Romano Fig 1; Trubiano Fig C3"
      }
    ],
    "saferFrom": [
      {
        "name": "Aztreonam",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cefazolin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cefdinir",
        "reason": "no shared cross-reactivity",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefditoren",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefepime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cefetamet",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefiderocol",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "via": "Romano Fig 1; SWAB Table 11"
      },
      {
        "name": "Cefixime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Romano Fig 1; Trubiano Fig C3"
      },
      {
        "name": "Cefodizime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefotaxime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cefotetan",
        "reason": "no shared cross-reactivity",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefotiam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefoxitin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Romano Fig 1; Trubiano Fig C3"
      },
      {
        "name": "Cefpirome",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefpodoxime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefradine",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftaroline",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Ceftazidime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Ceftibuten",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "via": "Romano Fig 1; SWAB Table 11"
      },
      {
        "name": "Ceftizoxime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftobiprole",
        "reason": "no shared cross-reactivity",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftolozane",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Ceftriaxone",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cefuroxime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cephalothin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Ertapenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Imipenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Meropenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      }
    ]
  },
  "beta:Piperacillin": {
    "id": "beta:Piperacillin",
    "name": "Piperacillin",
    "pool": "beta",
    "pending": false,
    "high": [
      {
        "name": "Amoxicillin",
        "noteId": "beta:Amoxicillin",
        "reason": "partial R1; similar R1 or R2; shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ampicillin",
        "noteId": "beta:Ampicillin",
        "reason": "partial R1; shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefaclor",
        "noteId": "beta:Cefaclor",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Cefamandole",
        "noteId": "beta:Cefamandole",
        "reason": "partial R1; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Cefatrizine",
        "noteId": "beta:Cefatrizine",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefonicid",
        "noteId": "beta:Cefonicid",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefoperazone",
        "noteId": "beta:Cefoperazone",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Ceforamide",
        "noteId": "beta:Ceforamide",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefprozil",
        "noteId": "beta:Cefprozil",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cephalexin",
        "noteId": "beta:Cephalexin",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Dicloxacillin",
        "noteId": "beta:Dicloxacillin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Flucloxacillin",
        "noteId": "beta:Flucloxacillin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Loracarbef",
        "noteId": "beta:Loracarbef",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Nafcillin",
        "noteId": "beta:Nafcillin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Oxacillin",
        "noteId": "beta:Oxacillin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Penicillin G",
        "noteId": "beta:Penicillin G",
        "reason": "partial R1; shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Penicillin G / V",
        "noteId": "beta:Penicillin G / V",
        "reason": "similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Penicillin V",
        "noteId": "beta:Penicillin V",
        "reason": "partial R1; shared R2 or class ring",
        "pendingRow": false
      }
    ],
    "safer": [
      {
        "name": "Aztreonam",
        "noteId": "beta:Aztreonam",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefadroxil",
        "noteId": "beta:Cefadroxil",
        "reason": "no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefazolin",
        "noteId": "beta:Cefazolin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefdinir",
        "noteId": "beta:Cefdinir",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefditoren",
        "noteId": "beta:Cefditoren",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefepime",
        "noteId": "beta:Cefepime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefetamet",
        "noteId": "beta:Cefetamet",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefiderocol",
        "noteId": "beta:Cefiderocol",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefixime",
        "noteId": "beta:Cefixime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefodizime",
        "noteId": "beta:Cefodizime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefotaxime",
        "noteId": "beta:Cefotaxime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefotetan",
        "noteId": "beta:Cefotetan",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefotiam",
        "noteId": "beta:Cefotiam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefoxitin",
        "noteId": "beta:Cefoxitin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefpirome",
        "noteId": "beta:Cefpirome",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefpodoxime",
        "noteId": "beta:Cefpodoxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefradine",
        "noteId": "beta:Cefradine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline",
        "noteId": "beta:Ceftaroline",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline fosamil",
        "noteId": "beta:Ceftaroline fosamil",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftazidime",
        "noteId": "beta:Ceftazidime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftezole",
        "noteId": "beta:Ceftezole",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftibuten",
        "noteId": "beta:Ceftibuten",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftizoxime",
        "noteId": "beta:Ceftizoxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftobiprole",
        "noteId": "beta:Ceftobiprole",
        "reason": "no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftolozane",
        "noteId": "beta:Ceftolozane",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftriaxone",
        "noteId": "beta:Ceftriaxone",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefuroxime",
        "noteId": "beta:Cefuroxime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cephalothin",
        "noteId": "beta:Cephalothin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cephapirin",
        "noteId": "beta:Cephapirin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ertapenem",
        "noteId": "beta:Ertapenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Imipenem",
        "noteId": "beta:Imipenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Meropenem",
        "noteId": "beta:Meropenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Pivmecillinam",
        "noteId": "beta:Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      }
    ],
    "highFrom": [
      {
        "name": "Amoxicillin",
        "reason": "partial R1; similar R1 or R2; shared R2 or class ring",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Ampicillin",
        "reason": "partial R1; shared R2 or class ring",
        "via": "Romano Fig 1; Trubiano Fig C3"
      },
      {
        "name": "Cefaclor",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      },
      {
        "name": "Cefamandole",
        "reason": "partial R1; clinical cross-react",
        "via": "Romano Fig 1; SWAB Table 11"
      },
      {
        "name": "Cefatrizine",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefonicid",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefoperazone",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ceforamide",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefprozil",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cephalexin",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      },
      {
        "name": "Dicloxacillin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Flucloxacillin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Loracarbef",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Nafcillin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Oxacillin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Penicillin G",
        "reason": "partial R1; shared R2 or class ring",
        "via": "Romano Fig 1; Trubiano Fig C3"
      },
      {
        "name": "Penicillin G / V",
        "reason": "similar R1 or R2",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Penicillin V",
        "reason": "partial R1; shared R2 or class ring",
        "via": "Romano Fig 1; Trubiano Fig C3"
      }
    ],
    "saferFrom": [
      {
        "name": "Aztreonam",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cefadroxil",
        "reason": "no shared cross-reactivity",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefazolin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cefdinir",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefditoren",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefepime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cefetamet",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefiderocol",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      },
      {
        "name": "Cefixime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefodizime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefotaxime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cefotetan",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefotiam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefoxitin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefpirome",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefpodoxime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefradine",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftaroline",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Ceftaroline fosamil",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftazidime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Ceftezole",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftibuten",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      },
      {
        "name": "Ceftizoxime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftobiprole",
        "reason": "no shared cross-reactivity",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftolozane",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Ceftriaxone",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cefuroxime",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cephalothin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cephapirin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ertapenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Imipenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Meropenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      }
    ]
  },
  "beta:Pivmecillinam": {
    "id": "beta:Pivmecillinam",
    "name": "Pivmecillinam",
    "pool": "beta",
    "pending": false,
    "high": [],
    "safer": [
      {
        "name": "Amoxicillin",
        "noteId": "beta:Amoxicillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ampicillin",
        "noteId": "beta:Ampicillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Aztreonam",
        "noteId": "beta:Aztreonam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefaclor",
        "noteId": "beta:Cefaclor",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefadroxil",
        "noteId": "beta:Cefadroxil",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefamandole",
        "noteId": "beta:Cefamandole",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefatrizine",
        "noteId": "beta:Cefatrizine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefazolin",
        "noteId": "beta:Cefazolin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefditoren",
        "noteId": "beta:Cefditoren",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefepime",
        "noteId": "beta:Cefepime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefetamet",
        "noteId": "beta:Cefetamet",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefiderocol",
        "noteId": "beta:Cefiderocol",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefixime",
        "noteId": "beta:Cefixime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefodizime",
        "noteId": "beta:Cefodizime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefonicid",
        "noteId": "beta:Cefonicid",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefoperazone",
        "noteId": "beta:Cefoperazone",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceforamide",
        "noteId": "beta:Ceforamide",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefotaxime",
        "noteId": "beta:Cefotaxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefotiam",
        "noteId": "beta:Cefotiam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefoxitin",
        "noteId": "beta:Cefoxitin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefpirome",
        "noteId": "beta:Cefpirome",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefpodoxime",
        "noteId": "beta:Cefpodoxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefprozil",
        "noteId": "beta:Cefprozil",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefradine",
        "noteId": "beta:Cefradine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline",
        "noteId": "beta:Ceftaroline",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftazidime",
        "noteId": "beta:Ceftazidime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftibuten",
        "noteId": "beta:Ceftibuten",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftizoxime",
        "noteId": "beta:Ceftizoxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftolozane",
        "noteId": "beta:Ceftolozane",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftriaxone",
        "noteId": "beta:Ceftriaxone",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefuroxime",
        "noteId": "beta:Cefuroxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cephalexin",
        "noteId": "beta:Cephalexin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cephalothin",
        "noteId": "beta:Cephalothin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Loracarbef",
        "noteId": "beta:Loracarbef",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Penicillin G",
        "noteId": "beta:Penicillin G",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Penicillin V",
        "noteId": "beta:Penicillin V",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Piperacillin",
        "noteId": "beta:Piperacillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      }
    ],
    "highFrom": [],
    "saferFrom": [
      {
        "name": "Amoxicillin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ampicillin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Aztreonam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefaclor",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefadroxil",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefamandole",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefatrizine",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefazolin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefditoren",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefepime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefetamet",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefiderocol",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefixime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefodizime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefonicid",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefoperazone",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceforamide",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefotaxime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefotiam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefoxitin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefpirome",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefpodoxime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefprozil",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefradine",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftaroline",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftazidime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftibuten",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftizoxime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftolozane",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftriaxone",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefuroxime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cephalexin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cephalothin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Loracarbef",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Penicillin G",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Penicillin V",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Piperacillin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      }
    ]
  },
  "beta:Cefadroxil": {
    "id": "beta:Cefadroxil",
    "name": "Cefadroxil",
    "pool": "beta",
    "pending": false,
    "high": [
      {
        "name": "Amoxicillin",
        "noteId": "beta:Amoxicillin",
        "reason": "identical R1; almost-identical R1",
        "pendingRow": false
      },
      {
        "name": "Ampicillin",
        "noteId": "beta:Ampicillin",
        "reason": "identical R1; partial R1; almost-identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefaclor",
        "noteId": "beta:Cefaclor",
        "reason": "identical R1; partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefamandole",
        "noteId": "beta:Cefamandole",
        "reason": "partial R1; similar R1 or R2; almost-identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefatrizine",
        "noteId": "beta:Cefatrizine",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefazolin",
        "noteId": "beta:Cefazolin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefdinir",
        "noteId": "beta:Cefdinir",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefepime",
        "noteId": "beta:Cefepime",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefixime",
        "noteId": "beta:Cefixime",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefonicid",
        "noteId": "beta:Cefonicid",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefoperazone",
        "noteId": "beta:Cefoperazone",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Ceforamide",
        "noteId": "beta:Ceforamide",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefotaxime",
        "noteId": "beta:Cefotaxime",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefotetan",
        "noteId": "beta:Cefotetan",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefoxitin",
        "noteId": "beta:Cefoxitin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefprozil",
        "noteId": "beta:Cefprozil",
        "reason": "identical R1; almost-identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefradine",
        "noteId": "beta:Cefradine",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline",
        "noteId": "beta:Ceftaroline",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftazidime",
        "noteId": "beta:Ceftazidime",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftobiprole",
        "noteId": "beta:Ceftobiprole",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftolozane",
        "noteId": "beta:Ceftolozane",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftriaxone",
        "noteId": "beta:Ceftriaxone",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefuroxime",
        "noteId": "beta:Cefuroxime",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cephalexin",
        "noteId": "beta:Cephalexin",
        "reason": "identical R1; partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cephalothin",
        "noteId": "beta:Cephalothin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Loracarbef",
        "noteId": "beta:Loracarbef",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Penicillin G",
        "noteId": "beta:Penicillin G",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Penicillin V",
        "noteId": "beta:Penicillin V",
        "reason": "partial R1",
        "pendingRow": false
      }
    ],
    "safer": [
      {
        "name": "Aztreonam",
        "noteId": "beta:Aztreonam",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefditoren",
        "noteId": "beta:Cefditoren",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefetamet",
        "noteId": "beta:Cefetamet",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefiderocol",
        "noteId": "beta:Cefiderocol",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefodizime",
        "noteId": "beta:Cefodizime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefotiam",
        "noteId": "beta:Cefotiam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefpirome",
        "noteId": "beta:Cefpirome",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefpodoxime",
        "noteId": "beta:Cefpodoxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline fosamil",
        "noteId": "beta:Ceftaroline fosamil",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftezole",
        "noteId": "beta:Ceftezole",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftibuten",
        "noteId": "beta:Ceftibuten",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftizoxime",
        "noteId": "beta:Ceftizoxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cephapirin",
        "noteId": "beta:Cephapirin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Dicloxacillin",
        "noteId": "beta:Dicloxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Flucloxacillin",
        "noteId": "beta:Flucloxacillin",
        "reason": "no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Nafcillin",
        "noteId": "beta:Nafcillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Oxacillin",
        "noteId": "beta:Oxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Piperacillin",
        "noteId": "beta:Piperacillin",
        "reason": "no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Pivmecillinam",
        "noteId": "beta:Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      }
    ],
    "highFrom": [
      {
        "name": "Amoxicillin",
        "reason": "identical R1; almost-identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; manual transcription"
      },
      {
        "name": "Ampicillin",
        "reason": "identical R1; partial R1; almost-identical R1",
        "via": "Romano Fig 1; Trubiano Fig C3; manual transcription"
      },
      {
        "name": "Cefaclor",
        "reason": "identical R1; partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3; manual transcription"
      },
      {
        "name": "Cefamandole",
        "reason": "partial R1; similar R1 or R2; almost-identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefatrizine",
        "reason": "identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefazolin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefdinir",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefepime",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefixime",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefonicid",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefoperazone",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ceforamide",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefotaxime",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefotetan",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefoxitin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefprozil",
        "reason": "identical R1; almost-identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; manual transcription"
      },
      {
        "name": "Cefradine",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftaroline",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftazidime",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftobiprole",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftolozane",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftriaxone",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefuroxime",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cephalexin",
        "reason": "identical R1; partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3; manual transcription"
      },
      {
        "name": "Cephalothin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Loracarbef",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Penicillin G",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Penicillin V",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      }
    ],
    "saferFrom": [
      {
        "name": "Aztreonam",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefditoren",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefetamet",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefiderocol",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefodizime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefotiam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefpirome",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefpodoxime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ceftaroline fosamil",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftezole",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftibuten",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ceftizoxime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cephapirin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Dicloxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Flucloxacillin",
        "reason": "no shared cross-reactivity",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Nafcillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Oxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Piperacillin",
        "reason": "no shared cross-reactivity",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      }
    ]
  },
  "beta:Cefazolin": {
    "id": "beta:Cefazolin",
    "name": "Cefazolin",
    "pool": "beta",
    "pending": false,
    "high": [
      {
        "name": "Cefaclor",
        "noteId": "beta:Cefaclor",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefadroxil",
        "noteId": "beta:Cefadroxil",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefamandole",
        "noteId": "beta:Cefamandole",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefdinir",
        "noteId": "beta:Cefdinir",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefepime",
        "noteId": "beta:Cefepime",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefixime",
        "noteId": "beta:Cefixime",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefotaxime",
        "noteId": "beta:Cefotaxime",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefotetan",
        "noteId": "beta:Cefotetan",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefoxitin",
        "noteId": "beta:Cefoxitin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefprozil",
        "noteId": "beta:Cefprozil",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline",
        "noteId": "beta:Ceftaroline",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftazidime",
        "noteId": "beta:Ceftazidime",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftezole",
        "noteId": "beta:Ceftezole",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Ceftobiprole",
        "noteId": "beta:Ceftobiprole",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftolozane",
        "noteId": "beta:Ceftolozane",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftriaxone",
        "noteId": "beta:Ceftriaxone",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefuroxime",
        "noteId": "beta:Cefuroxime",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cephalexin",
        "noteId": "beta:Cephalexin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cephalothin",
        "noteId": "beta:Cephalothin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      }
    ],
    "safer": [
      {
        "name": "Amoxicillin",
        "noteId": "beta:Amoxicillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Aztreonam",
        "noteId": "beta:Aztreonam",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefatrizine",
        "noteId": "beta:Cefatrizine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefditoren",
        "noteId": "beta:Cefditoren",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefetamet",
        "noteId": "beta:Cefetamet",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefiderocol",
        "noteId": "beta:Cefiderocol",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefodizime",
        "noteId": "beta:Cefodizime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefonicid",
        "noteId": "beta:Cefonicid",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefoperazone",
        "noteId": "beta:Cefoperazone",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceforamide",
        "noteId": "beta:Ceforamide",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefotiam",
        "noteId": "beta:Cefotiam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefpirome",
        "noteId": "beta:Cefpirome",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefpodoxime",
        "noteId": "beta:Cefpodoxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefradine",
        "noteId": "beta:Cefradine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline fosamil",
        "noteId": "beta:Ceftaroline fosamil",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftibuten",
        "noteId": "beta:Ceftibuten",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftizoxime",
        "noteId": "beta:Ceftizoxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cephapirin",
        "noteId": "beta:Cephapirin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Dicloxacillin",
        "noteId": "beta:Dicloxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ertapenem",
        "noteId": "beta:Ertapenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Feneticillin",
        "noteId": "beta:Feneticillin",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Flucloxacillin",
        "noteId": "beta:Flucloxacillin",
        "reason": "no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Imipenem",
        "noteId": "beta:Imipenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Loracarbef",
        "noteId": "beta:Loracarbef",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Meropenem",
        "noteId": "beta:Meropenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Nafcillin",
        "noteId": "beta:Nafcillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Oxacillin",
        "noteId": "beta:Oxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Penicillin G",
        "noteId": "beta:Penicillin G",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Penicillin G / V",
        "noteId": "beta:Penicillin G / V",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Penicillin V",
        "noteId": "beta:Penicillin V",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Piperacillin",
        "noteId": "beta:Piperacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Pivmecillinam",
        "noteId": "beta:Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      }
    ],
    "highFrom": [
      {
        "name": "Cefaclor",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefadroxil",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefamandole",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefdinir",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefepime",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefixime",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefotaxime",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefotetan",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefoxitin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefprozil",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftaroline",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftazidime",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftezole",
        "reason": "identical R1",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftobiprole",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftolozane",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftriaxone",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefuroxime",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cephalexin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cephalothin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      }
    ],
    "saferFrom": [
      {
        "name": "Amoxicillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Aztreonam",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cefatrizine",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefditoren",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefetamet",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefiderocol",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      },
      {
        "name": "Cefodizime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefonicid",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefoperazone",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ceforamide",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefotiam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefpirome",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefpodoxime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefradine",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftaroline fosamil",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftibuten",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      },
      {
        "name": "Ceftizoxime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cephapirin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Dicloxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Ertapenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Feneticillin",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Flucloxacillin",
        "reason": "no shared cross-reactivity; no cross-reactivity",
        "via": "Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Imipenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Loracarbef",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Meropenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Nafcillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Oxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Penicillin G",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Penicillin G / V",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Penicillin V",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Piperacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      }
    ]
  },
  "beta:Cefradine": {
    "id": "beta:Cefradine",
    "name": "Cefradine",
    "pool": "beta",
    "pending": false,
    "high": [
      {
        "name": "Amoxicillin",
        "noteId": "beta:Amoxicillin",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Ampicillin",
        "noteId": "beta:Ampicillin",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefaclor",
        "noteId": "beta:Cefaclor",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefadroxil",
        "noteId": "beta:Cefadroxil",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefatrizine",
        "noteId": "beta:Cefatrizine",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefprozil",
        "noteId": "beta:Cefprozil",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cephalexin",
        "noteId": "beta:Cephalexin",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Loracarbef",
        "noteId": "beta:Loracarbef",
        "reason": "partial R1",
        "pendingRow": false
      }
    ],
    "safer": [
      {
        "name": "Aztreonam",
        "noteId": "beta:Aztreonam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefamandole",
        "noteId": "beta:Cefamandole",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefazolin",
        "noteId": "beta:Cefazolin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefditoren",
        "noteId": "beta:Cefditoren",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefepime",
        "noteId": "beta:Cefepime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefetamet",
        "noteId": "beta:Cefetamet",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefiderocol",
        "noteId": "beta:Cefiderocol",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefixime",
        "noteId": "beta:Cefixime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefodizime",
        "noteId": "beta:Cefodizime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefonicid",
        "noteId": "beta:Cefonicid",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefoperazone",
        "noteId": "beta:Cefoperazone",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceforamide",
        "noteId": "beta:Ceforamide",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefotaxime",
        "noteId": "beta:Cefotaxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefotiam",
        "noteId": "beta:Cefotiam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefoxitin",
        "noteId": "beta:Cefoxitin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefpirome",
        "noteId": "beta:Cefpirome",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefpodoxime",
        "noteId": "beta:Cefpodoxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline",
        "noteId": "beta:Ceftaroline",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftazidime",
        "noteId": "beta:Ceftazidime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftibuten",
        "noteId": "beta:Ceftibuten",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftizoxime",
        "noteId": "beta:Ceftizoxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftolozane",
        "noteId": "beta:Ceftolozane",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftriaxone",
        "noteId": "beta:Ceftriaxone",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefuroxime",
        "noteId": "beta:Cefuroxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cephalothin",
        "noteId": "beta:Cephalothin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Penicillin G",
        "noteId": "beta:Penicillin G",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Penicillin V",
        "noteId": "beta:Penicillin V",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Piperacillin",
        "noteId": "beta:Piperacillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Pivmecillinam",
        "noteId": "beta:Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      }
    ],
    "highFrom": [
      {
        "name": "Amoxicillin",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ampicillin",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefaclor",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefadroxil",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefatrizine",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefprozil",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cephalexin",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Loracarbef",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      }
    ],
    "saferFrom": [
      {
        "name": "Aztreonam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefamandole",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefazolin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefditoren",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefepime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefetamet",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefiderocol",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefixime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefodizime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefonicid",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefoperazone",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceforamide",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefotaxime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefotiam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefoxitin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefpirome",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefpodoxime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftaroline",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftazidime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftibuten",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftizoxime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftolozane",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftriaxone",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefuroxime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cephalothin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Penicillin G",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Penicillin V",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Piperacillin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      }
    ]
  },
  "beta:Ceftezole": {
    "id": "beta:Ceftezole",
    "name": "Ceftezole",
    "pool": "beta",
    "pending": false,
    "high": [
      {
        "name": "Cefazolin",
        "noteId": "beta:Cefazolin",
        "reason": "identical R1",
        "pendingRow": false
      }
    ],
    "safer": [
      {
        "name": "Amoxicillin",
        "noteId": "beta:Amoxicillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ampicillin",
        "noteId": "beta:Ampicillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Aztreonam",
        "noteId": "beta:Aztreonam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefaclor",
        "noteId": "beta:Cefaclor",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefadroxil",
        "noteId": "beta:Cefadroxil",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefamandole",
        "noteId": "beta:Cefamandole",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefatrizine",
        "noteId": "beta:Cefatrizine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefdinir",
        "noteId": "beta:Cefdinir",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefditoren",
        "noteId": "beta:Cefditoren",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefepime",
        "noteId": "beta:Cefepime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefiderocol",
        "noteId": "beta:Cefiderocol",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefixime",
        "noteId": "beta:Cefixime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefodizime",
        "noteId": "beta:Cefodizime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefonicid",
        "noteId": "beta:Cefonicid",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefoperazone",
        "noteId": "beta:Cefoperazone",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefotaxime",
        "noteId": "beta:Cefotaxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefotetan",
        "noteId": "beta:Cefotetan",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefoxitin",
        "noteId": "beta:Cefoxitin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefpirome",
        "noteId": "beta:Cefpirome",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefpodoxime",
        "noteId": "beta:Cefpodoxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefprozil",
        "noteId": "beta:Cefprozil",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline fosamil",
        "noteId": "beta:Ceftaroline fosamil",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftazidime",
        "noteId": "beta:Ceftazidime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftibuten",
        "noteId": "beta:Ceftibuten",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftolozane",
        "noteId": "beta:Ceftolozane",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftriaxone",
        "noteId": "beta:Ceftriaxone",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefuroxime",
        "noteId": "beta:Cefuroxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cephalexin",
        "noteId": "beta:Cephalexin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cephalothin",
        "noteId": "beta:Cephalothin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cephapirin",
        "noteId": "beta:Cephapirin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Dicloxacillin",
        "noteId": "beta:Dicloxacillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Nafcillin",
        "noteId": "beta:Nafcillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Oxacillin",
        "noteId": "beta:Oxacillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Penicillin G / V",
        "noteId": "beta:Penicillin G / V",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Piperacillin",
        "noteId": "beta:Piperacillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      }
    ],
    "highFrom": [
      {
        "name": "Cefazolin",
        "reason": "identical R1",
        "via": "Zagursky Fig 3"
      }
    ],
    "saferFrom": [
      {
        "name": "Amoxicillin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ampicillin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Aztreonam",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefaclor",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefadroxil",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefamandole",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefatrizine",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefdinir",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefditoren",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefepime",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefiderocol",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefixime",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefodizime",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefonicid",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefoperazone",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefotaxime",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefotetan",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefoxitin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefpirome",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefpodoxime",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefprozil",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftaroline fosamil",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftazidime",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftibuten",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftolozane",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftriaxone",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefuroxime",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cephalexin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cephalothin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cephapirin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Dicloxacillin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Nafcillin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Oxacillin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Penicillin G / V",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Piperacillin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      }
    ]
  },
  "beta:Cephalexin": {
    "id": "beta:Cephalexin",
    "name": "Cephalexin",
    "pool": "beta",
    "pending": false,
    "high": [
      {
        "name": "Amoxicillin",
        "noteId": "beta:Amoxicillin",
        "reason": "identical R1; partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Ampicillin",
        "noteId": "beta:Ampicillin",
        "reason": "identical R1; almost-identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefaclor",
        "noteId": "beta:Cefaclor",
        "reason": "identical R1; almost-identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefadroxil",
        "noteId": "beta:Cefadroxil",
        "reason": "identical R1; partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefamandole",
        "noteId": "beta:Cefamandole",
        "reason": "partial R1; similar R1 or R2; shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefatrizine",
        "noteId": "beta:Cefatrizine",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefazolin",
        "noteId": "beta:Cefazolin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefdinir",
        "noteId": "beta:Cefdinir",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefepime",
        "noteId": "beta:Cefepime",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefixime",
        "noteId": "beta:Cefixime",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefonicid",
        "noteId": "beta:Cefonicid",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefoperazone",
        "noteId": "beta:Cefoperazone",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Ceforamide",
        "noteId": "beta:Ceforamide",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefotaxime",
        "noteId": "beta:Cefotaxime",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefotetan",
        "noteId": "beta:Cefotetan",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefoxitin",
        "noteId": "beta:Cefoxitin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefprozil",
        "noteId": "beta:Cefprozil",
        "reason": "identical R1; partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefradine",
        "noteId": "beta:Cefradine",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline",
        "noteId": "beta:Ceftaroline",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftazidime",
        "noteId": "beta:Ceftazidime",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftobiprole",
        "noteId": "beta:Ceftobiprole",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftolozane",
        "noteId": "beta:Ceftolozane",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftriaxone",
        "noteId": "beta:Ceftriaxone",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefuroxime",
        "noteId": "beta:Cefuroxime",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cephalothin",
        "noteId": "beta:Cephalothin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Loracarbef",
        "noteId": "beta:Loracarbef",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Penicillin G",
        "noteId": "beta:Penicillin G",
        "reason": "partial R1; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Penicillin G / V",
        "noteId": "beta:Penicillin G / V",
        "reason": "similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Penicillin V",
        "noteId": "beta:Penicillin V",
        "reason": "partial R1; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Piperacillin",
        "noteId": "beta:Piperacillin",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "pendingRow": false
      }
    ],
    "safer": [
      {
        "name": "Aztreonam",
        "noteId": "beta:Aztreonam",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefditoren",
        "noteId": "beta:Cefditoren",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefetamet",
        "noteId": "beta:Cefetamet",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefiderocol",
        "noteId": "beta:Cefiderocol",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefodizime",
        "noteId": "beta:Cefodizime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefotiam",
        "noteId": "beta:Cefotiam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefpirome",
        "noteId": "beta:Cefpirome",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefpodoxime",
        "noteId": "beta:Cefpodoxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline fosamil",
        "noteId": "beta:Ceftaroline fosamil",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftezole",
        "noteId": "beta:Ceftezole",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftibuten",
        "noteId": "beta:Ceftibuten",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftizoxime",
        "noteId": "beta:Ceftizoxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cephapirin",
        "noteId": "beta:Cephapirin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Dicloxacillin",
        "noteId": "beta:Dicloxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ertapenem",
        "noteId": "beta:Ertapenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Feneticillin",
        "noteId": "beta:Feneticillin",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Flucloxacillin",
        "noteId": "beta:Flucloxacillin",
        "reason": "no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Imipenem",
        "noteId": "beta:Imipenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Meropenem",
        "noteId": "beta:Meropenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Nafcillin",
        "noteId": "beta:Nafcillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Oxacillin",
        "noteId": "beta:Oxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Pivmecillinam",
        "noteId": "beta:Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      }
    ],
    "highFrom": [
      {
        "name": "Amoxicillin",
        "reason": "identical R1; partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11; Hutten sample; manual transcription"
      },
      {
        "name": "Ampicillin",
        "reason": "identical R1; almost-identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; manual transcription"
      },
      {
        "name": "Cefaclor",
        "reason": "identical R1; almost-identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11; manual transcription"
      },
      {
        "name": "Cefadroxil",
        "reason": "identical R1; partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3; manual transcription"
      },
      {
        "name": "Cefamandole",
        "reason": "partial R1; similar R1 or R2; shared R2 or class ring",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cefatrizine",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefazolin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefdinir",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefepime",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefixime",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefonicid",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefoperazone",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceforamide",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefotaxime",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefotetan",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefoxitin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefprozil",
        "reason": "identical R1; partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3; manual transcription"
      },
      {
        "name": "Cefradine",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftaroline",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftazidime",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftobiprole",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftolozane",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftriaxone",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefuroxime",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cephalothin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Loracarbef",
        "reason": "identical R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Penicillin G",
        "reason": "partial R1; clinical cross-react",
        "via": "Romano Fig 1; SWAB Table 11"
      },
      {
        "name": "Penicillin G / V",
        "reason": "similar R1 or R2",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Penicillin V",
        "reason": "partial R1; clinical cross-react",
        "via": "Romano Fig 1; SWAB Table 11"
      },
      {
        "name": "Piperacillin",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      }
    ],
    "saferFrom": [
      {
        "name": "Aztreonam",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cefditoren",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefetamet",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefiderocol",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      },
      {
        "name": "Cefodizime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefotiam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefpirome",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefpodoxime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ceftaroline fosamil",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftezole",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftibuten",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      },
      {
        "name": "Ceftizoxime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cephapirin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Dicloxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Ertapenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Feneticillin",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Flucloxacillin",
        "reason": "no shared cross-reactivity; no cross-reactivity",
        "via": "Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Imipenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Meropenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Nafcillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Oxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      }
    ]
  },
  "beta:Cephalothin": {
    "id": "beta:Cephalothin",
    "name": "Cephalothin",
    "pool": "beta",
    "pending": false,
    "high": [
      {
        "name": "Cefaclor",
        "noteId": "beta:Cefaclor",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefadroxil",
        "noteId": "beta:Cefadroxil",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefamandole",
        "noteId": "beta:Cefamandole",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefazolin",
        "noteId": "beta:Cefazolin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefdinir",
        "noteId": "beta:Cefdinir",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefepime",
        "noteId": "beta:Cefepime",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefixime",
        "noteId": "beta:Cefixime",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefotaxime",
        "noteId": "beta:Cefotaxime",
        "reason": "partial R1; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Cefotetan",
        "noteId": "beta:Cefotetan",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefoxitin",
        "noteId": "beta:Cefoxitin",
        "reason": "identical R1; almost-identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefprozil",
        "noteId": "beta:Cefprozil",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline",
        "noteId": "beta:Ceftaroline",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftazidime",
        "noteId": "beta:Ceftazidime",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftobiprole",
        "noteId": "beta:Ceftobiprole",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftolozane",
        "noteId": "beta:Ceftolozane",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftriaxone",
        "noteId": "beta:Ceftriaxone",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefuroxime",
        "noteId": "beta:Cefuroxime",
        "reason": "partial R1; shared R2 or class ring; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Cephalexin",
        "noteId": "beta:Cephalexin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      }
    ],
    "safer": [
      {
        "name": "Amoxicillin",
        "noteId": "beta:Amoxicillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ampicillin",
        "noteId": "beta:Ampicillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Aztreonam",
        "noteId": "beta:Aztreonam",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefatrizine",
        "noteId": "beta:Cefatrizine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefditoren",
        "noteId": "beta:Cefditoren",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefetamet",
        "noteId": "beta:Cefetamet",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefiderocol",
        "noteId": "beta:Cefiderocol",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefodizime",
        "noteId": "beta:Cefodizime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefonicid",
        "noteId": "beta:Cefonicid",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefoperazone",
        "noteId": "beta:Cefoperazone",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceforamide",
        "noteId": "beta:Ceforamide",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefotiam",
        "noteId": "beta:Cefotiam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefpirome",
        "noteId": "beta:Cefpirome",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefpodoxime",
        "noteId": "beta:Cefpodoxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefradine",
        "noteId": "beta:Cefradine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline fosamil",
        "noteId": "beta:Ceftaroline fosamil",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftezole",
        "noteId": "beta:Ceftezole",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftibuten",
        "noteId": "beta:Ceftibuten",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftizoxime",
        "noteId": "beta:Ceftizoxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Dicloxacillin",
        "noteId": "beta:Dicloxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ertapenem",
        "noteId": "beta:Ertapenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Feneticillin",
        "noteId": "beta:Feneticillin",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Flucloxacillin",
        "noteId": "beta:Flucloxacillin",
        "reason": "no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Imipenem",
        "noteId": "beta:Imipenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Loracarbef",
        "noteId": "beta:Loracarbef",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Meropenem",
        "noteId": "beta:Meropenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Nafcillin",
        "noteId": "beta:Nafcillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Oxacillin",
        "noteId": "beta:Oxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Penicillin G",
        "noteId": "beta:Penicillin G",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Penicillin G / V",
        "noteId": "beta:Penicillin G / V",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Penicillin V",
        "noteId": "beta:Penicillin V",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Piperacillin",
        "noteId": "beta:Piperacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Pivmecillinam",
        "noteId": "beta:Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      }
    ],
    "highFrom": [
      {
        "name": "Cefaclor",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefadroxil",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefamandole",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefazolin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefdinir",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefepime",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefixime",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefotaxime",
        "reason": "partial R1; clinical cross-react",
        "via": "SWAB Table 11"
      },
      {
        "name": "Cefotetan",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefoxitin",
        "reason": "identical R1; almost-identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefprozil",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftaroline",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftazidime",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftobiprole",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftolozane",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftriaxone",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefuroxime",
        "reason": "partial R1; shared R2 or class ring; clinical cross-react",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cephalexin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      }
    ],
    "saferFrom": [
      {
        "name": "Amoxicillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Ampicillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Aztreonam",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cefatrizine",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefditoren",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefetamet",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefiderocol",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      },
      {
        "name": "Cefodizime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefonicid",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefoperazone",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ceforamide",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefotiam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefpirome",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefpodoxime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefradine",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftaroline fosamil",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftezole",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftibuten",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      },
      {
        "name": "Ceftizoxime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Dicloxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Ertapenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Feneticillin",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Flucloxacillin",
        "reason": "no shared cross-reactivity; no cross-reactivity",
        "via": "Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Imipenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Loracarbef",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Meropenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Nafcillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Oxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Penicillin G",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "via": "Romano Fig 1; SWAB Table 11"
      },
      {
        "name": "Penicillin G / V",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Penicillin V",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Piperacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      }
    ]
  },
  "beta:Cephapirin": {
    "id": "beta:Cephapirin",
    "name": "Cephapirin",
    "pool": "beta",
    "pending": false,
    "high": [
      {
        "name": "Cefuroxime",
        "noteId": "beta:Cefuroxime",
        "reason": "similar R1 or R2",
        "pendingRow": false
      }
    ],
    "safer": [
      {
        "name": "Amoxicillin",
        "noteId": "beta:Amoxicillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ampicillin",
        "noteId": "beta:Ampicillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Aztreonam",
        "noteId": "beta:Aztreonam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefaclor",
        "noteId": "beta:Cefaclor",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefadroxil",
        "noteId": "beta:Cefadroxil",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefamandole",
        "noteId": "beta:Cefamandole",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefatrizine",
        "noteId": "beta:Cefatrizine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefazolin",
        "noteId": "beta:Cefazolin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefdinir",
        "noteId": "beta:Cefdinir",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefditoren",
        "noteId": "beta:Cefditoren",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefepime",
        "noteId": "beta:Cefepime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefiderocol",
        "noteId": "beta:Cefiderocol",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefixime",
        "noteId": "beta:Cefixime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefodizime",
        "noteId": "beta:Cefodizime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefonicid",
        "noteId": "beta:Cefonicid",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefoperazone",
        "noteId": "beta:Cefoperazone",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefotetan",
        "noteId": "beta:Cefotetan",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefpirome",
        "noteId": "beta:Cefpirome",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefpodoxime",
        "noteId": "beta:Cefpodoxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefprozil",
        "noteId": "beta:Cefprozil",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline fosamil",
        "noteId": "beta:Ceftaroline fosamil",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftazidime",
        "noteId": "beta:Ceftazidime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftezole",
        "noteId": "beta:Ceftezole",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftibuten",
        "noteId": "beta:Ceftibuten",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftolozane",
        "noteId": "beta:Ceftolozane",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftriaxone",
        "noteId": "beta:Ceftriaxone",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cephalexin",
        "noteId": "beta:Cephalexin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Dicloxacillin",
        "noteId": "beta:Dicloxacillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Nafcillin",
        "noteId": "beta:Nafcillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Oxacillin",
        "noteId": "beta:Oxacillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Penicillin G / V",
        "noteId": "beta:Penicillin G / V",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Piperacillin",
        "noteId": "beta:Piperacillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      }
    ],
    "highFrom": [
      {
        "name": "Cefuroxime",
        "reason": "similar R1 or R2",
        "via": "Zagursky Fig 3"
      }
    ],
    "saferFrom": [
      {
        "name": "Amoxicillin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ampicillin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Aztreonam",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefaclor",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefadroxil",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefamandole",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefatrizine",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefazolin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefdinir",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefditoren",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefepime",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefiderocol",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefixime",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefodizime",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefonicid",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefoperazone",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefotetan",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefpirome",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefpodoxime",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefprozil",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftaroline fosamil",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftazidime",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftezole",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftibuten",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftolozane",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftriaxone",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cephalexin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Dicloxacillin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Nafcillin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Oxacillin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Penicillin G / V",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Piperacillin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      }
    ]
  },
  "beta:Cefaclor": {
    "id": "beta:Cefaclor",
    "name": "Cefaclor",
    "pool": "beta",
    "pending": false,
    "high": [
      {
        "name": "Amoxicillin",
        "noteId": "beta:Amoxicillin",
        "reason": "identical R1; partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Ampicillin",
        "noteId": "beta:Ampicillin",
        "reason": "identical R1; partial R1; almost-identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefadroxil",
        "noteId": "beta:Cefadroxil",
        "reason": "identical R1; partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefamandole",
        "noteId": "beta:Cefamandole",
        "reason": "partial R1; similar R1 or R2; shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefatrizine",
        "noteId": "beta:Cefatrizine",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefazolin",
        "noteId": "beta:Cefazolin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefdinir",
        "noteId": "beta:Cefdinir",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefepime",
        "noteId": "beta:Cefepime",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefixime",
        "noteId": "beta:Cefixime",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefonicid",
        "noteId": "beta:Cefonicid",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefoperazone",
        "noteId": "beta:Cefoperazone",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Ceforamide",
        "noteId": "beta:Ceforamide",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefotaxime",
        "noteId": "beta:Cefotaxime",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefotetan",
        "noteId": "beta:Cefotetan",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefoxitin",
        "noteId": "beta:Cefoxitin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefprozil",
        "noteId": "beta:Cefprozil",
        "reason": "identical R1; partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefradine",
        "noteId": "beta:Cefradine",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline",
        "noteId": "beta:Ceftaroline",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftazidime",
        "noteId": "beta:Ceftazidime",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftobiprole",
        "noteId": "beta:Ceftobiprole",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftolozane",
        "noteId": "beta:Ceftolozane",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftriaxone",
        "noteId": "beta:Ceftriaxone",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefuroxime",
        "noteId": "beta:Cefuroxime",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cephalexin",
        "noteId": "beta:Cephalexin",
        "reason": "identical R1; almost-identical R1",
        "pendingRow": false
      },
      {
        "name": "Cephalothin",
        "noteId": "beta:Cephalothin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Loracarbef",
        "noteId": "beta:Loracarbef",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Penicillin G",
        "noteId": "beta:Penicillin G",
        "reason": "partial R1; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Penicillin G / V",
        "noteId": "beta:Penicillin G / V",
        "reason": "similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Penicillin V",
        "noteId": "beta:Penicillin V",
        "reason": "partial R1; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Piperacillin",
        "noteId": "beta:Piperacillin",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "pendingRow": false
      }
    ],
    "safer": [
      {
        "name": "Aztreonam",
        "noteId": "beta:Aztreonam",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefditoren",
        "noteId": "beta:Cefditoren",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefetamet",
        "noteId": "beta:Cefetamet",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefiderocol",
        "noteId": "beta:Cefiderocol",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefodizime",
        "noteId": "beta:Cefodizime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefotiam",
        "noteId": "beta:Cefotiam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefpirome",
        "noteId": "beta:Cefpirome",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefpodoxime",
        "noteId": "beta:Cefpodoxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline fosamil",
        "noteId": "beta:Ceftaroline fosamil",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftezole",
        "noteId": "beta:Ceftezole",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftibuten",
        "noteId": "beta:Ceftibuten",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftizoxime",
        "noteId": "beta:Ceftizoxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cephapirin",
        "noteId": "beta:Cephapirin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Dicloxacillin",
        "noteId": "beta:Dicloxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ertapenem",
        "noteId": "beta:Ertapenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Feneticillin",
        "noteId": "beta:Feneticillin",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Flucloxacillin",
        "noteId": "beta:Flucloxacillin",
        "reason": "no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Imipenem",
        "noteId": "beta:Imipenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Meropenem",
        "noteId": "beta:Meropenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Nafcillin",
        "noteId": "beta:Nafcillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Oxacillin",
        "noteId": "beta:Oxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Pivmecillinam",
        "noteId": "beta:Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      }
    ],
    "highFrom": [
      {
        "name": "Amoxicillin",
        "reason": "identical R1; partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11; Hutten sample; manual transcription"
      },
      {
        "name": "Ampicillin",
        "reason": "identical R1; partial R1; almost-identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; Hutten sample; manual transcription"
      },
      {
        "name": "Cefadroxil",
        "reason": "identical R1; partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3; manual transcription"
      },
      {
        "name": "Cefamandole",
        "reason": "partial R1; similar R1 or R2; shared R2 or class ring",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cefatrizine",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefazolin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefdinir",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefepime",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefixime",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefonicid",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefoperazone",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceforamide",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefotaxime",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefotetan",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefoxitin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefprozil",
        "reason": "identical R1; partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3; manual transcription"
      },
      {
        "name": "Cefradine",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftaroline",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftazidime",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftobiprole",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftolozane",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftriaxone",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefuroxime",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cephalexin",
        "reason": "identical R1; almost-identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11; manual transcription"
      },
      {
        "name": "Cephalothin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Loracarbef",
        "reason": "identical R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Penicillin G",
        "reason": "partial R1; clinical cross-react",
        "via": "Romano Fig 1; SWAB Table 11"
      },
      {
        "name": "Penicillin G / V",
        "reason": "similar R1 or R2",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Penicillin V",
        "reason": "partial R1; clinical cross-react",
        "via": "Romano Fig 1; SWAB Table 11"
      },
      {
        "name": "Piperacillin",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      }
    ],
    "saferFrom": [
      {
        "name": "Aztreonam",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cefditoren",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefetamet",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefiderocol",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      },
      {
        "name": "Cefodizime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefotiam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefpirome",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefpodoxime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ceftaroline fosamil",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftezole",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftibuten",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      },
      {
        "name": "Ceftizoxime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cephapirin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Dicloxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Ertapenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Feneticillin",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Flucloxacillin",
        "reason": "no shared cross-reactivity; no cross-reactivity",
        "via": "Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Imipenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Meropenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Nafcillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Oxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      }
    ]
  },
  "beta:Cefamandole": {
    "id": "beta:Cefamandole",
    "name": "Cefamandole",
    "pool": "beta",
    "pending": false,
    "high": [
      {
        "name": "Amoxicillin",
        "noteId": "beta:Amoxicillin",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Ampicillin",
        "noteId": "beta:Ampicillin",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefaclor",
        "noteId": "beta:Cefaclor",
        "reason": "partial R1; similar R1 or R2; shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefadroxil",
        "noteId": "beta:Cefadroxil",
        "reason": "partial R1; similar R1 or R2; almost-identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefatrizine",
        "noteId": "beta:Cefatrizine",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefazolin",
        "noteId": "beta:Cefazolin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefdinir",
        "noteId": "beta:Cefdinir",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefepime",
        "noteId": "beta:Cefepime",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefixime",
        "noteId": "beta:Cefixime",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefonicid",
        "noteId": "beta:Cefonicid",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Ceforamide",
        "noteId": "beta:Ceforamide",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefotaxime",
        "noteId": "beta:Cefotaxime",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefotetan",
        "noteId": "beta:Cefotetan",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefotiam",
        "noteId": "beta:Cefotiam",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefoxitin",
        "noteId": "beta:Cefoxitin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefprozil",
        "noteId": "beta:Cefprozil",
        "reason": "partial R1; similar R1 or R2; shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline",
        "noteId": "beta:Ceftaroline",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftazidime",
        "noteId": "beta:Ceftazidime",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftobiprole",
        "noteId": "beta:Ceftobiprole",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftolozane",
        "noteId": "beta:Ceftolozane",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftriaxone",
        "noteId": "beta:Ceftriaxone",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefuroxime",
        "noteId": "beta:Cefuroxime",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cephalexin",
        "noteId": "beta:Cephalexin",
        "reason": "partial R1; similar R1 or R2; shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cephalothin",
        "noteId": "beta:Cephalothin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Loracarbef",
        "noteId": "beta:Loracarbef",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Penicillin G",
        "noteId": "beta:Penicillin G",
        "reason": "partial R1; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Penicillin G / V",
        "noteId": "beta:Penicillin G / V",
        "reason": "similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Penicillin V",
        "noteId": "beta:Penicillin V",
        "reason": "partial R1; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Piperacillin",
        "noteId": "beta:Piperacillin",
        "reason": "partial R1; clinical cross-react",
        "pendingRow": false
      }
    ],
    "safer": [
      {
        "name": "Aztreonam",
        "noteId": "beta:Aztreonam",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefditoren",
        "noteId": "beta:Cefditoren",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefetamet",
        "noteId": "beta:Cefetamet",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefiderocol",
        "noteId": "beta:Cefiderocol",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefodizime",
        "noteId": "beta:Cefodizime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefpirome",
        "noteId": "beta:Cefpirome",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefpodoxime",
        "noteId": "beta:Cefpodoxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefradine",
        "noteId": "beta:Cefradine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline fosamil",
        "noteId": "beta:Ceftaroline fosamil",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftezole",
        "noteId": "beta:Ceftezole",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftibuten",
        "noteId": "beta:Ceftibuten",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftizoxime",
        "noteId": "beta:Ceftizoxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cephapirin",
        "noteId": "beta:Cephapirin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Dicloxacillin",
        "noteId": "beta:Dicloxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ertapenem",
        "noteId": "beta:Ertapenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Feneticillin",
        "noteId": "beta:Feneticillin",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Flucloxacillin",
        "noteId": "beta:Flucloxacillin",
        "reason": "no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Imipenem",
        "noteId": "beta:Imipenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Meropenem",
        "noteId": "beta:Meropenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Nafcillin",
        "noteId": "beta:Nafcillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Oxacillin",
        "noteId": "beta:Oxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Pivmecillinam",
        "noteId": "beta:Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      }
    ],
    "highFrom": [
      {
        "name": "Amoxicillin",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11; Hutten sample"
      },
      {
        "name": "Ampicillin",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefaclor",
        "reason": "partial R1; similar R1 or R2; shared R2 or class ring",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cefadroxil",
        "reason": "partial R1; similar R1 or R2; almost-identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefatrizine",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefazolin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefdinir",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefepime",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefixime",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefonicid",
        "reason": "identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ceforamide",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefotaxime",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefotetan",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefotiam",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefoxitin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefprozil",
        "reason": "partial R1; similar R1 or R2; shared R2 or class ring",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Ceftaroline",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftazidime",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftobiprole",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftolozane",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftriaxone",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefuroxime",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cephalexin",
        "reason": "partial R1; similar R1 or R2; shared R2 or class ring",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cephalothin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Loracarbef",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Penicillin G",
        "reason": "partial R1; clinical cross-react",
        "via": "Romano Fig 1; SWAB Table 11"
      },
      {
        "name": "Penicillin G / V",
        "reason": "similar R1 or R2",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Penicillin V",
        "reason": "partial R1; clinical cross-react",
        "via": "Romano Fig 1; SWAB Table 11"
      },
      {
        "name": "Piperacillin",
        "reason": "partial R1; clinical cross-react",
        "via": "Romano Fig 1; SWAB Table 11"
      }
    ],
    "saferFrom": [
      {
        "name": "Aztreonam",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cefditoren",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefetamet",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefiderocol",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      },
      {
        "name": "Cefodizime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefpirome",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefpodoxime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefradine",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftaroline fosamil",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftezole",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftibuten",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      },
      {
        "name": "Ceftizoxime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cephapirin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Dicloxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Ertapenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Feneticillin",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Flucloxacillin",
        "reason": "no shared cross-reactivity; no cross-reactivity",
        "via": "Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Imipenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Meropenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Nafcillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Oxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      }
    ]
  },
  "beta:Cefatrizine": {
    "id": "beta:Cefatrizine",
    "name": "Cefatrizine",
    "pool": "beta",
    "pending": false,
    "high": [
      {
        "name": "Amoxicillin",
        "noteId": "beta:Amoxicillin",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Ampicillin",
        "noteId": "beta:Ampicillin",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefaclor",
        "noteId": "beta:Cefaclor",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefadroxil",
        "noteId": "beta:Cefadroxil",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefamandole",
        "noteId": "beta:Cefamandole",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefonicid",
        "noteId": "beta:Cefonicid",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefoperazone",
        "noteId": "beta:Cefoperazone",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Ceforamide",
        "noteId": "beta:Ceforamide",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefotiam",
        "noteId": "beta:Cefotiam",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefprozil",
        "noteId": "beta:Cefprozil",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefradine",
        "noteId": "beta:Cefradine",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cephalexin",
        "noteId": "beta:Cephalexin",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Loracarbef",
        "noteId": "beta:Loracarbef",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Penicillin G",
        "noteId": "beta:Penicillin G",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Penicillin G / V",
        "noteId": "beta:Penicillin G / V",
        "reason": "similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Penicillin V",
        "noteId": "beta:Penicillin V",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Piperacillin",
        "noteId": "beta:Piperacillin",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      }
    ],
    "safer": [
      {
        "name": "Aztreonam",
        "noteId": "beta:Aztreonam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefazolin",
        "noteId": "beta:Cefazolin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefdinir",
        "noteId": "beta:Cefdinir",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefditoren",
        "noteId": "beta:Cefditoren",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefepime",
        "noteId": "beta:Cefepime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefetamet",
        "noteId": "beta:Cefetamet",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefiderocol",
        "noteId": "beta:Cefiderocol",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefixime",
        "noteId": "beta:Cefixime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefodizime",
        "noteId": "beta:Cefodizime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefotaxime",
        "noteId": "beta:Cefotaxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefotetan",
        "noteId": "beta:Cefotetan",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefoxitin",
        "noteId": "beta:Cefoxitin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefpirome",
        "noteId": "beta:Cefpirome",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefpodoxime",
        "noteId": "beta:Cefpodoxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline",
        "noteId": "beta:Ceftaroline",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline fosamil",
        "noteId": "beta:Ceftaroline fosamil",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftazidime",
        "noteId": "beta:Ceftazidime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftezole",
        "noteId": "beta:Ceftezole",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftibuten",
        "noteId": "beta:Ceftibuten",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftizoxime",
        "noteId": "beta:Ceftizoxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftolozane",
        "noteId": "beta:Ceftolozane",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftriaxone",
        "noteId": "beta:Ceftriaxone",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefuroxime",
        "noteId": "beta:Cefuroxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cephalothin",
        "noteId": "beta:Cephalothin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cephapirin",
        "noteId": "beta:Cephapirin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Dicloxacillin",
        "noteId": "beta:Dicloxacillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Nafcillin",
        "noteId": "beta:Nafcillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Oxacillin",
        "noteId": "beta:Oxacillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Pivmecillinam",
        "noteId": "beta:Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      }
    ],
    "highFrom": [
      {
        "name": "Amoxicillin",
        "reason": "identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ampicillin",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefaclor",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefadroxil",
        "reason": "identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefamandole",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefonicid",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefoperazone",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ceforamide",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefotiam",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefprozil",
        "reason": "identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefradine",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cephalexin",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Loracarbef",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Penicillin G",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Penicillin G / V",
        "reason": "similar R1 or R2",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Penicillin V",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Piperacillin",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      }
    ],
    "saferFrom": [
      {
        "name": "Aztreonam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefazolin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefdinir",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefditoren",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefepime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefetamet",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefiderocol",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefixime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefodizime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefotaxime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefotetan",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefoxitin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefpirome",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefpodoxime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ceftaroline",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftaroline fosamil",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftazidime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ceftezole",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftibuten",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ceftizoxime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftolozane",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ceftriaxone",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefuroxime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cephalothin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cephapirin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Dicloxacillin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Nafcillin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Oxacillin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      }
    ]
  },
  "beta:Cefonicid": {
    "id": "beta:Cefonicid",
    "name": "Cefonicid",
    "pool": "beta",
    "pending": false,
    "high": [
      {
        "name": "Amoxicillin",
        "noteId": "beta:Amoxicillin",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Ampicillin",
        "noteId": "beta:Ampicillin",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefaclor",
        "noteId": "beta:Cefaclor",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefadroxil",
        "noteId": "beta:Cefadroxil",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefamandole",
        "noteId": "beta:Cefamandole",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefatrizine",
        "noteId": "beta:Cefatrizine",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefoperazone",
        "noteId": "beta:Cefoperazone",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Ceforamide",
        "noteId": "beta:Ceforamide",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefotetan",
        "noteId": "beta:Cefotetan",
        "reason": "similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefotiam",
        "noteId": "beta:Cefotiam",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefprozil",
        "noteId": "beta:Cefprozil",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cephalexin",
        "noteId": "beta:Cephalexin",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Loracarbef",
        "noteId": "beta:Loracarbef",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Penicillin G",
        "noteId": "beta:Penicillin G",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Penicillin G / V",
        "noteId": "beta:Penicillin G / V",
        "reason": "similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Penicillin V",
        "noteId": "beta:Penicillin V",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Piperacillin",
        "noteId": "beta:Piperacillin",
        "reason": "partial R1",
        "pendingRow": false
      }
    ],
    "safer": [
      {
        "name": "Aztreonam",
        "noteId": "beta:Aztreonam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefazolin",
        "noteId": "beta:Cefazolin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefdinir",
        "noteId": "beta:Cefdinir",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefditoren",
        "noteId": "beta:Cefditoren",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefepime",
        "noteId": "beta:Cefepime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefetamet",
        "noteId": "beta:Cefetamet",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefiderocol",
        "noteId": "beta:Cefiderocol",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefixime",
        "noteId": "beta:Cefixime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefodizime",
        "noteId": "beta:Cefodizime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefotaxime",
        "noteId": "beta:Cefotaxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefoxitin",
        "noteId": "beta:Cefoxitin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefpirome",
        "noteId": "beta:Cefpirome",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefpodoxime",
        "noteId": "beta:Cefpodoxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefradine",
        "noteId": "beta:Cefradine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline",
        "noteId": "beta:Ceftaroline",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline fosamil",
        "noteId": "beta:Ceftaroline fosamil",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftazidime",
        "noteId": "beta:Ceftazidime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftezole",
        "noteId": "beta:Ceftezole",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftibuten",
        "noteId": "beta:Ceftibuten",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftizoxime",
        "noteId": "beta:Ceftizoxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftolozane",
        "noteId": "beta:Ceftolozane",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftriaxone",
        "noteId": "beta:Ceftriaxone",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefuroxime",
        "noteId": "beta:Cefuroxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cephalothin",
        "noteId": "beta:Cephalothin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cephapirin",
        "noteId": "beta:Cephapirin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Dicloxacillin",
        "noteId": "beta:Dicloxacillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Nafcillin",
        "noteId": "beta:Nafcillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Oxacillin",
        "noteId": "beta:Oxacillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Pivmecillinam",
        "noteId": "beta:Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      }
    ],
    "highFrom": [
      {
        "name": "Amoxicillin",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ampicillin",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefaclor",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefadroxil",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefamandole",
        "reason": "identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefatrizine",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefoperazone",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceforamide",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefotetan",
        "reason": "similar R1 or R2",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefotiam",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefprozil",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cephalexin",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Loracarbef",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Penicillin G",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Penicillin G / V",
        "reason": "similar R1 or R2",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Penicillin V",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Piperacillin",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      }
    ],
    "saferFrom": [
      {
        "name": "Aztreonam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefazolin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefdinir",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefditoren",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefepime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefetamet",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefiderocol",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefixime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefodizime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefotaxime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefoxitin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefpirome",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefpodoxime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefradine",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftaroline",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftaroline fosamil",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftazidime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ceftezole",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftibuten",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ceftizoxime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftolozane",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ceftriaxone",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefuroxime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cephalothin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cephapirin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Dicloxacillin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Nafcillin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Oxacillin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      }
    ]
  },
  "beta:Cefotetan": {
    "id": "beta:Cefotetan",
    "name": "Cefotetan",
    "pool": "beta",
    "pending": false,
    "high": [
      {
        "name": "Cefaclor",
        "noteId": "beta:Cefaclor",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefadroxil",
        "noteId": "beta:Cefadroxil",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefamandole",
        "noteId": "beta:Cefamandole",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefazolin",
        "noteId": "beta:Cefazolin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefdinir",
        "noteId": "beta:Cefdinir",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefepime",
        "noteId": "beta:Cefepime",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefixime",
        "noteId": "beta:Cefixime",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefonicid",
        "noteId": "beta:Cefonicid",
        "reason": "similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefotaxime",
        "noteId": "beta:Cefotaxime",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefoxitin",
        "noteId": "beta:Cefoxitin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefprozil",
        "noteId": "beta:Cefprozil",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline",
        "noteId": "beta:Ceftaroline",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftazidime",
        "noteId": "beta:Ceftazidime",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftobiprole",
        "noteId": "beta:Ceftobiprole",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftolozane",
        "noteId": "beta:Ceftolozane",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftriaxone",
        "noteId": "beta:Ceftriaxone",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefuroxime",
        "noteId": "beta:Cefuroxime",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cephalexin",
        "noteId": "beta:Cephalexin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cephalothin",
        "noteId": "beta:Cephalothin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      }
    ],
    "safer": [
      {
        "name": "Amoxicillin",
        "noteId": "beta:Amoxicillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ampicillin",
        "noteId": "beta:Ampicillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Aztreonam",
        "noteId": "beta:Aztreonam",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefatrizine",
        "noteId": "beta:Cefatrizine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefditoren",
        "noteId": "beta:Cefditoren",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefiderocol",
        "noteId": "beta:Cefiderocol",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefodizime",
        "noteId": "beta:Cefodizime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefpirome",
        "noteId": "beta:Cefpirome",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefpodoxime",
        "noteId": "beta:Cefpodoxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline fosamil",
        "noteId": "beta:Ceftaroline fosamil",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftezole",
        "noteId": "beta:Ceftezole",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftibuten",
        "noteId": "beta:Ceftibuten",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cephapirin",
        "noteId": "beta:Cephapirin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Dicloxacillin",
        "noteId": "beta:Dicloxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Flucloxacillin",
        "noteId": "beta:Flucloxacillin",
        "reason": "no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Nafcillin",
        "noteId": "beta:Nafcillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Oxacillin",
        "noteId": "beta:Oxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Penicillin G",
        "noteId": "beta:Penicillin G",
        "reason": "no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Penicillin G / V",
        "noteId": "beta:Penicillin G / V",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Penicillin V",
        "noteId": "beta:Penicillin V",
        "reason": "no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Piperacillin",
        "noteId": "beta:Piperacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      }
    ],
    "highFrom": [
      {
        "name": "Cefaclor",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefadroxil",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefamandole",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefazolin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefdinir",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefepime",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefixime",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefonicid",
        "reason": "similar R1 or R2",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefotaxime",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefoxitin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefprozil",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftaroline",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftazidime",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftobiprole",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftolozane",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftriaxone",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefuroxime",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cephalexin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cephalothin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      }
    ],
    "saferFrom": [
      {
        "name": "Amoxicillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Ampicillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Aztreonam",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefatrizine",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefditoren",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefiderocol",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefodizime",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefpirome",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefpodoxime",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftaroline fosamil",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftezole",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftibuten",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cephapirin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Dicloxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Flucloxacillin",
        "reason": "no shared cross-reactivity",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Nafcillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Oxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Penicillin G",
        "reason": "no shared cross-reactivity",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Penicillin G / V",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Penicillin V",
        "reason": "no shared cross-reactivity",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Piperacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      }
    ]
  },
  "beta:Cefoxitin": {
    "id": "beta:Cefoxitin",
    "name": "Cefoxitin",
    "pool": "beta",
    "pending": false,
    "high": [
      {
        "name": "Cefaclor",
        "noteId": "beta:Cefaclor",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefadroxil",
        "noteId": "beta:Cefadroxil",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefamandole",
        "noteId": "beta:Cefamandole",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefazolin",
        "noteId": "beta:Cefazolin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefdinir",
        "noteId": "beta:Cefdinir",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefepime",
        "noteId": "beta:Cefepime",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefixime",
        "noteId": "beta:Cefixime",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefotaxime",
        "noteId": "beta:Cefotaxime",
        "reason": "partial R1; shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefotetan",
        "noteId": "beta:Cefotetan",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefprozil",
        "noteId": "beta:Cefprozil",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline",
        "noteId": "beta:Ceftaroline",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftazidime",
        "noteId": "beta:Ceftazidime",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftobiprole",
        "noteId": "beta:Ceftobiprole",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftolozane",
        "noteId": "beta:Ceftolozane",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftriaxone",
        "noteId": "beta:Ceftriaxone",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefuroxime",
        "noteId": "beta:Cefuroxime",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cephalexin",
        "noteId": "beta:Cephalexin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cephalothin",
        "noteId": "beta:Cephalothin",
        "reason": "identical R1; almost-identical R1",
        "pendingRow": false
      }
    ],
    "safer": [
      {
        "name": "Amoxicillin",
        "noteId": "beta:Amoxicillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ampicillin",
        "noteId": "beta:Ampicillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Aztreonam",
        "noteId": "beta:Aztreonam",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefatrizine",
        "noteId": "beta:Cefatrizine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefditoren",
        "noteId": "beta:Cefditoren",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefetamet",
        "noteId": "beta:Cefetamet",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefiderocol",
        "noteId": "beta:Cefiderocol",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefodizime",
        "noteId": "beta:Cefodizime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefonicid",
        "noteId": "beta:Cefonicid",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefoperazone",
        "noteId": "beta:Cefoperazone",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceforamide",
        "noteId": "beta:Ceforamide",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefotiam",
        "noteId": "beta:Cefotiam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefpirome",
        "noteId": "beta:Cefpirome",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefpodoxime",
        "noteId": "beta:Cefpodoxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefradine",
        "noteId": "beta:Cefradine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline fosamil",
        "noteId": "beta:Ceftaroline fosamil",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftezole",
        "noteId": "beta:Ceftezole",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftibuten",
        "noteId": "beta:Ceftibuten",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftizoxime",
        "noteId": "beta:Ceftizoxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Dicloxacillin",
        "noteId": "beta:Dicloxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Flucloxacillin",
        "noteId": "beta:Flucloxacillin",
        "reason": "no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Loracarbef",
        "noteId": "beta:Loracarbef",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Nafcillin",
        "noteId": "beta:Nafcillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Oxacillin",
        "noteId": "beta:Oxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Penicillin G",
        "noteId": "beta:Penicillin G",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Penicillin G / V",
        "noteId": "beta:Penicillin G / V",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Penicillin V",
        "noteId": "beta:Penicillin V",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Piperacillin",
        "noteId": "beta:Piperacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Pivmecillinam",
        "noteId": "beta:Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      }
    ],
    "highFrom": [
      {
        "name": "Cefaclor",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefadroxil",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefamandole",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefazolin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefdinir",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefepime",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefixime",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefotaxime",
        "reason": "partial R1; shared R2 or class ring",
        "via": "Romano Fig 1; Trubiano Fig C3"
      },
      {
        "name": "Cefotetan",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefprozil",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftaroline",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftazidime",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftobiprole",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftolozane",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftriaxone",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefuroxime",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cephalexin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cephalothin",
        "reason": "identical R1; almost-identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3"
      }
    ],
    "saferFrom": [
      {
        "name": "Amoxicillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Ampicillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Aztreonam",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefatrizine",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefditoren",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefetamet",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefiderocol",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefodizime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefonicid",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefoperazone",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ceforamide",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefotiam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefpirome",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefpodoxime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefradine",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftaroline fosamil",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftezole",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftibuten",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ceftizoxime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Dicloxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Flucloxacillin",
        "reason": "no shared cross-reactivity",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Loracarbef",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Nafcillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Oxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Penicillin G",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Penicillin G / V",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Penicillin V",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Romano Fig 1; Trubiano Fig C3"
      },
      {
        "name": "Piperacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      }
    ]
  },
  "beta:Cefprozil": {
    "id": "beta:Cefprozil",
    "name": "Cefprozil",
    "pool": "beta",
    "pending": false,
    "high": [
      {
        "name": "Amoxicillin",
        "noteId": "beta:Amoxicillin",
        "reason": "identical R1; almost-identical R1",
        "pendingRow": false
      },
      {
        "name": "Ampicillin",
        "noteId": "beta:Ampicillin",
        "reason": "identical R1; partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefaclor",
        "noteId": "beta:Cefaclor",
        "reason": "identical R1; partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefadroxil",
        "noteId": "beta:Cefadroxil",
        "reason": "identical R1; almost-identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefamandole",
        "noteId": "beta:Cefamandole",
        "reason": "partial R1; similar R1 or R2; shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefatrizine",
        "noteId": "beta:Cefatrizine",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefazolin",
        "noteId": "beta:Cefazolin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefdinir",
        "noteId": "beta:Cefdinir",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefepime",
        "noteId": "beta:Cefepime",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefixime",
        "noteId": "beta:Cefixime",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefonicid",
        "noteId": "beta:Cefonicid",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefoperazone",
        "noteId": "beta:Cefoperazone",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Ceforamide",
        "noteId": "beta:Ceforamide",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefotaxime",
        "noteId": "beta:Cefotaxime",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefotetan",
        "noteId": "beta:Cefotetan",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefoxitin",
        "noteId": "beta:Cefoxitin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefradine",
        "noteId": "beta:Cefradine",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline",
        "noteId": "beta:Ceftaroline",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftazidime",
        "noteId": "beta:Ceftazidime",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftobiprole",
        "noteId": "beta:Ceftobiprole",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftolozane",
        "noteId": "beta:Ceftolozane",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftriaxone",
        "noteId": "beta:Ceftriaxone",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefuroxime",
        "noteId": "beta:Cefuroxime",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cephalexin",
        "noteId": "beta:Cephalexin",
        "reason": "identical R1; partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cephalothin",
        "noteId": "beta:Cephalothin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Loracarbef",
        "noteId": "beta:Loracarbef",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Penicillin G",
        "noteId": "beta:Penicillin G",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Penicillin G / V",
        "noteId": "beta:Penicillin G / V",
        "reason": "similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Penicillin V",
        "noteId": "beta:Penicillin V",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Piperacillin",
        "noteId": "beta:Piperacillin",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      }
    ],
    "safer": [
      {
        "name": "Aztreonam",
        "noteId": "beta:Aztreonam",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefditoren",
        "noteId": "beta:Cefditoren",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefetamet",
        "noteId": "beta:Cefetamet",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefiderocol",
        "noteId": "beta:Cefiderocol",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefodizime",
        "noteId": "beta:Cefodizime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefotiam",
        "noteId": "beta:Cefotiam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefpirome",
        "noteId": "beta:Cefpirome",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefpodoxime",
        "noteId": "beta:Cefpodoxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline fosamil",
        "noteId": "beta:Ceftaroline fosamil",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftezole",
        "noteId": "beta:Ceftezole",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftibuten",
        "noteId": "beta:Ceftibuten",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftizoxime",
        "noteId": "beta:Ceftizoxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cephapirin",
        "noteId": "beta:Cephapirin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Dicloxacillin",
        "noteId": "beta:Dicloxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Flucloxacillin",
        "noteId": "beta:Flucloxacillin",
        "reason": "no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Nafcillin",
        "noteId": "beta:Nafcillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Oxacillin",
        "noteId": "beta:Oxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Pivmecillinam",
        "noteId": "beta:Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      }
    ],
    "highFrom": [
      {
        "name": "Amoxicillin",
        "reason": "identical R1; almost-identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; manual transcription"
      },
      {
        "name": "Ampicillin",
        "reason": "identical R1; partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3; manual transcription"
      },
      {
        "name": "Cefaclor",
        "reason": "identical R1; partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3; manual transcription"
      },
      {
        "name": "Cefadroxil",
        "reason": "identical R1; almost-identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; manual transcription"
      },
      {
        "name": "Cefamandole",
        "reason": "partial R1; similar R1 or R2; shared R2 or class ring",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefatrizine",
        "reason": "identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefazolin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefdinir",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefepime",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefixime",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefonicid",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefoperazone",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ceforamide",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefotaxime",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefotetan",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefoxitin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefradine",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftaroline",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftazidime",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftobiprole",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftolozane",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftriaxone",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefuroxime",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cephalexin",
        "reason": "identical R1; partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3; manual transcription"
      },
      {
        "name": "Cephalothin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Loracarbef",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Penicillin G",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Penicillin G / V",
        "reason": "similar R1 or R2",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Penicillin V",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Piperacillin",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      }
    ],
    "saferFrom": [
      {
        "name": "Aztreonam",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefditoren",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefetamet",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefiderocol",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefodizime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefotiam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefpirome",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefpodoxime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ceftaroline fosamil",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftezole",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftibuten",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ceftizoxime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cephapirin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Dicloxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Flucloxacillin",
        "reason": "no shared cross-reactivity",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Nafcillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Oxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      }
    ]
  },
  "beta:Cefuroxime": {
    "id": "beta:Cefuroxime",
    "name": "Cefuroxime",
    "pool": "beta",
    "pending": false,
    "high": [
      {
        "name": "Aztreonam",
        "noteId": "beta:Aztreonam",
        "reason": "partial R1; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Cefaclor",
        "noteId": "beta:Cefaclor",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefadroxil",
        "noteId": "beta:Cefadroxil",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefamandole",
        "noteId": "beta:Cefamandole",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefazolin",
        "noteId": "beta:Cefazolin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefdinir",
        "noteId": "beta:Cefdinir",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefditoren",
        "noteId": "beta:Cefditoren",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefepime",
        "noteId": "beta:Cefepime",
        "reason": "partial R1; similar R1 or R2; shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefetamet",
        "noteId": "beta:Cefetamet",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefiderocol",
        "noteId": "beta:Cefiderocol",
        "reason": "partial R1; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Cefixime",
        "noteId": "beta:Cefixime",
        "reason": "similar R1 or R2; shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefodizime",
        "noteId": "beta:Cefodizime",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefotaxime",
        "noteId": "beta:Cefotaxime",
        "reason": "partial R1; shared R2 or class ring; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Cefotetan",
        "noteId": "beta:Cefotetan",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefoxitin",
        "noteId": "beta:Cefoxitin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefpirome",
        "noteId": "beta:Cefpirome",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefpodoxime",
        "noteId": "beta:Cefpodoxime",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefprozil",
        "noteId": "beta:Cefprozil",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline",
        "noteId": "beta:Ceftaroline",
        "reason": "partial R1; shared R2 or class ring; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline fosamil",
        "noteId": "beta:Ceftaroline fosamil",
        "reason": "similar R1 or R2; almost-identical R1",
        "pendingRow": false
      },
      {
        "name": "Ceftazidime",
        "noteId": "beta:Ceftazidime",
        "reason": "partial R1; shared R2 or class ring; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Ceftizoxime",
        "noteId": "beta:Ceftizoxime",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Ceftobiprole",
        "noteId": "beta:Ceftobiprole",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftolozane",
        "noteId": "beta:Ceftolozane",
        "reason": "partial R1; shared R2 or class ring; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Ceftriaxone",
        "noteId": "beta:Ceftriaxone",
        "reason": "partial R1; similar R1 or R2; shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cephalexin",
        "noteId": "beta:Cephalexin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cephalothin",
        "noteId": "beta:Cephalothin",
        "reason": "partial R1; shared R2 or class ring; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Cephapirin",
        "noteId": "beta:Cephapirin",
        "reason": "similar R1 or R2",
        "pendingRow": false
      }
    ],
    "safer": [
      {
        "name": "Amoxicillin",
        "noteId": "beta:Amoxicillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ampicillin",
        "noteId": "beta:Ampicillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefatrizine",
        "noteId": "beta:Cefatrizine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefonicid",
        "noteId": "beta:Cefonicid",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefoperazone",
        "noteId": "beta:Cefoperazone",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceforamide",
        "noteId": "beta:Ceforamide",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefotiam",
        "noteId": "beta:Cefotiam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefradine",
        "noteId": "beta:Cefradine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftezole",
        "noteId": "beta:Ceftezole",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftibuten",
        "noteId": "beta:Ceftibuten",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Dicloxacillin",
        "noteId": "beta:Dicloxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ertapenem",
        "noteId": "beta:Ertapenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Feneticillin",
        "noteId": "beta:Feneticillin",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Flucloxacillin",
        "noteId": "beta:Flucloxacillin",
        "reason": "no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Imipenem",
        "noteId": "beta:Imipenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Loracarbef",
        "noteId": "beta:Loracarbef",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Meropenem",
        "noteId": "beta:Meropenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Nafcillin",
        "noteId": "beta:Nafcillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Oxacillin",
        "noteId": "beta:Oxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Penicillin G",
        "noteId": "beta:Penicillin G",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Penicillin G / V",
        "noteId": "beta:Penicillin G / V",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Penicillin V",
        "noteId": "beta:Penicillin V",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Piperacillin",
        "noteId": "beta:Piperacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Pivmecillinam",
        "noteId": "beta:Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      }
    ],
    "highFrom": [
      {
        "name": "Aztreonam",
        "reason": "partial R1; clinical cross-react",
        "via": "Romano Fig 1; SWAB Table 11"
      },
      {
        "name": "Cefaclor",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefadroxil",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefamandole",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefazolin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefdinir",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefditoren",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefepime",
        "reason": "partial R1; similar R1 or R2; shared R2 or class ring",
        "via": "Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cefetamet",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefiderocol",
        "reason": "partial R1; clinical cross-react",
        "via": "SWAB Table 11"
      },
      {
        "name": "Cefixime",
        "reason": "similar R1 or R2; shared R2 or class ring",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefodizime",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefotaxime",
        "reason": "partial R1; shared R2 or class ring; clinical cross-react",
        "via": "Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cefotetan",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefoxitin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefpirome",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefpodoxime",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefprozil",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftaroline",
        "reason": "partial R1; shared R2 or class ring; clinical cross-react",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Ceftaroline fosamil",
        "reason": "similar R1 or R2; almost-identical R1",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftazidime",
        "reason": "partial R1; shared R2 or class ring; clinical cross-react",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Ceftizoxime",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftobiprole",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftolozane",
        "reason": "partial R1; shared R2 or class ring; clinical cross-react",
        "via": "Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Ceftriaxone",
        "reason": "partial R1; similar R1 or R2; shared R2 or class ring",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cephalexin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cephalothin",
        "reason": "partial R1; shared R2 or class ring; clinical cross-react",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cephapirin",
        "reason": "similar R1 or R2",
        "via": "Zagursky Fig 3"
      }
    ],
    "saferFrom": [
      {
        "name": "Amoxicillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Ampicillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefatrizine",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefonicid",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefoperazone",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ceforamide",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefotiam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefradine",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftezole",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftibuten",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      },
      {
        "name": "Dicloxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Ertapenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Feneticillin",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Flucloxacillin",
        "reason": "no shared cross-reactivity; no cross-reactivity",
        "via": "Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Imipenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Loracarbef",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Meropenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Nafcillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Oxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Penicillin G",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Penicillin G / V",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Penicillin V",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Piperacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      }
    ]
  },
  "beta:Loracarbef": {
    "id": "beta:Loracarbef",
    "name": "Loracarbef",
    "pool": "beta",
    "pending": false,
    "high": [
      {
        "name": "Amoxicillin",
        "noteId": "beta:Amoxicillin",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Ampicillin",
        "noteId": "beta:Ampicillin",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefaclor",
        "noteId": "beta:Cefaclor",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefadroxil",
        "noteId": "beta:Cefadroxil",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefamandole",
        "noteId": "beta:Cefamandole",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefatrizine",
        "noteId": "beta:Cefatrizine",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefonicid",
        "noteId": "beta:Cefonicid",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefoperazone",
        "noteId": "beta:Cefoperazone",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Ceforamide",
        "noteId": "beta:Ceforamide",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefprozil",
        "noteId": "beta:Cefprozil",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefradine",
        "noteId": "beta:Cefradine",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cephalexin",
        "noteId": "beta:Cephalexin",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Penicillin G",
        "noteId": "beta:Penicillin G",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Penicillin V",
        "noteId": "beta:Penicillin V",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Piperacillin",
        "noteId": "beta:Piperacillin",
        "reason": "partial R1",
        "pendingRow": false
      }
    ],
    "safer": [
      {
        "name": "Aztreonam",
        "noteId": "beta:Aztreonam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefazolin",
        "noteId": "beta:Cefazolin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefditoren",
        "noteId": "beta:Cefditoren",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefepime",
        "noteId": "beta:Cefepime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefetamet",
        "noteId": "beta:Cefetamet",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefiderocol",
        "noteId": "beta:Cefiderocol",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefixime",
        "noteId": "beta:Cefixime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefodizime",
        "noteId": "beta:Cefodizime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefotaxime",
        "noteId": "beta:Cefotaxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefotiam",
        "noteId": "beta:Cefotiam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefoxitin",
        "noteId": "beta:Cefoxitin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefpirome",
        "noteId": "beta:Cefpirome",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefpodoxime",
        "noteId": "beta:Cefpodoxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline",
        "noteId": "beta:Ceftaroline",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftazidime",
        "noteId": "beta:Ceftazidime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftibuten",
        "noteId": "beta:Ceftibuten",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftizoxime",
        "noteId": "beta:Ceftizoxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftolozane",
        "noteId": "beta:Ceftolozane",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftriaxone",
        "noteId": "beta:Ceftriaxone",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefuroxime",
        "noteId": "beta:Cefuroxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cephalothin",
        "noteId": "beta:Cephalothin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Pivmecillinam",
        "noteId": "beta:Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      }
    ],
    "highFrom": [
      {
        "name": "Amoxicillin",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ampicillin",
        "reason": "identical R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefaclor",
        "reason": "identical R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefadroxil",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefamandole",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefatrizine",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefonicid",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefoperazone",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceforamide",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefprozil",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefradine",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cephalexin",
        "reason": "identical R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Penicillin G",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Penicillin V",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Piperacillin",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      }
    ],
    "saferFrom": [
      {
        "name": "Aztreonam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefazolin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefditoren",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefepime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefetamet",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefiderocol",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefixime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefodizime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefotaxime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefotiam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefoxitin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefpirome",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefpodoxime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftaroline",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftazidime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftibuten",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftizoxime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftolozane",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftriaxone",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefuroxime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cephalothin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      }
    ]
  },
  "beta:Ceforamide": {
    "id": "beta:Ceforamide",
    "name": "Ceforamide",
    "pool": "beta",
    "pending": false,
    "high": [
      {
        "name": "Amoxicillin",
        "noteId": "beta:Amoxicillin",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Ampicillin",
        "noteId": "beta:Ampicillin",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefaclor",
        "noteId": "beta:Cefaclor",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefadroxil",
        "noteId": "beta:Cefadroxil",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefamandole",
        "noteId": "beta:Cefamandole",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefatrizine",
        "noteId": "beta:Cefatrizine",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefonicid",
        "noteId": "beta:Cefonicid",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefotiam",
        "noteId": "beta:Cefotiam",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefprozil",
        "noteId": "beta:Cefprozil",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cephalexin",
        "noteId": "beta:Cephalexin",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Loracarbef",
        "noteId": "beta:Loracarbef",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Penicillin G",
        "noteId": "beta:Penicillin G",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Penicillin V",
        "noteId": "beta:Penicillin V",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Piperacillin",
        "noteId": "beta:Piperacillin",
        "reason": "partial R1",
        "pendingRow": false
      }
    ],
    "safer": [
      {
        "name": "Aztreonam",
        "noteId": "beta:Aztreonam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefazolin",
        "noteId": "beta:Cefazolin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefditoren",
        "noteId": "beta:Cefditoren",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefepime",
        "noteId": "beta:Cefepime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefetamet",
        "noteId": "beta:Cefetamet",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefiderocol",
        "noteId": "beta:Cefiderocol",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefixime",
        "noteId": "beta:Cefixime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefodizime",
        "noteId": "beta:Cefodizime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefotaxime",
        "noteId": "beta:Cefotaxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefoxitin",
        "noteId": "beta:Cefoxitin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefpirome",
        "noteId": "beta:Cefpirome",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefpodoxime",
        "noteId": "beta:Cefpodoxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefradine",
        "noteId": "beta:Cefradine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline",
        "noteId": "beta:Ceftaroline",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftazidime",
        "noteId": "beta:Ceftazidime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftibuten",
        "noteId": "beta:Ceftibuten",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftizoxime",
        "noteId": "beta:Ceftizoxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftolozane",
        "noteId": "beta:Ceftolozane",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftriaxone",
        "noteId": "beta:Ceftriaxone",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefuroxime",
        "noteId": "beta:Cefuroxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cephalothin",
        "noteId": "beta:Cephalothin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Pivmecillinam",
        "noteId": "beta:Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      }
    ],
    "highFrom": [
      {
        "name": "Amoxicillin",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ampicillin",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefaclor",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefadroxil",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefamandole",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefatrizine",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefonicid",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefotiam",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefprozil",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cephalexin",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Loracarbef",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Penicillin G",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Penicillin V",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Piperacillin",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      }
    ],
    "saferFrom": [
      {
        "name": "Aztreonam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefazolin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefditoren",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefepime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefetamet",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefiderocol",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefixime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefodizime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefotaxime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefoxitin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefpirome",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefpodoxime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefradine",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftaroline",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftazidime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftibuten",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftizoxime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftolozane",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftriaxone",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefuroxime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cephalothin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      }
    ]
  },
  "beta:Cefamet": {
    "id": "beta:Cefamet",
    "name": "Cefamet",
    "pool": "beta",
    "pending": false,
    "high": [],
    "safer": [],
    "highFrom": [],
    "saferFrom": []
  },
  "beta:Cefdinir": {
    "id": "beta:Cefdinir",
    "name": "Cefdinir",
    "pool": "beta",
    "pending": false,
    "high": [
      {
        "name": "Aztreonam",
        "noteId": "beta:Aztreonam",
        "reason": "similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefaclor",
        "noteId": "beta:Cefaclor",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefadroxil",
        "noteId": "beta:Cefadroxil",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefamandole",
        "noteId": "beta:Cefamandole",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefazolin",
        "noteId": "beta:Cefazolin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefditoren",
        "noteId": "beta:Cefditoren",
        "reason": "similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefepime",
        "noteId": "beta:Cefepime",
        "reason": "similar R1 or R2; shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefixime",
        "noteId": "beta:Cefixime",
        "reason": "almost-identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefotaxime",
        "noteId": "beta:Cefotaxime",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefotetan",
        "noteId": "beta:Cefotetan",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefoxitin",
        "noteId": "beta:Cefoxitin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefpirome",
        "noteId": "beta:Cefpirome",
        "reason": "similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefpodoxime",
        "noteId": "beta:Cefpodoxime",
        "reason": "similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefprozil",
        "noteId": "beta:Cefprozil",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline",
        "noteId": "beta:Ceftaroline",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftazidime",
        "noteId": "beta:Ceftazidime",
        "reason": "similar R1 or R2; shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftibuten",
        "noteId": "beta:Ceftibuten",
        "reason": "similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Ceftobiprole",
        "noteId": "beta:Ceftobiprole",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftolozane",
        "noteId": "beta:Ceftolozane",
        "reason": "similar R1 or R2; shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftriaxone",
        "noteId": "beta:Ceftriaxone",
        "reason": "similar R1 or R2; shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefuroxime",
        "noteId": "beta:Cefuroxime",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cephalexin",
        "noteId": "beta:Cephalexin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cephalothin",
        "noteId": "beta:Cephalothin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      }
    ],
    "safer": [
      {
        "name": "Amoxicillin",
        "noteId": "beta:Amoxicillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ampicillin",
        "noteId": "beta:Ampicillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefatrizine",
        "noteId": "beta:Cefatrizine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefonicid",
        "noteId": "beta:Cefonicid",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefoperazone",
        "noteId": "beta:Cefoperazone",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftezole",
        "noteId": "beta:Ceftezole",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cephapirin",
        "noteId": "beta:Cephapirin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Dicloxacillin",
        "noteId": "beta:Dicloxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Flucloxacillin",
        "noteId": "beta:Flucloxacillin",
        "reason": "no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Nafcillin",
        "noteId": "beta:Nafcillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Oxacillin",
        "noteId": "beta:Oxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Penicillin G",
        "noteId": "beta:Penicillin G",
        "reason": "no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Penicillin G / V",
        "noteId": "beta:Penicillin G / V",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Penicillin V",
        "noteId": "beta:Penicillin V",
        "reason": "no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Piperacillin",
        "noteId": "beta:Piperacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      }
    ],
    "highFrom": [
      {
        "name": "Aztreonam",
        "reason": "similar R1 or R2",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefaclor",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefadroxil",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefamandole",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefazolin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefditoren",
        "reason": "similar R1 or R2",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefepime",
        "reason": "similar R1 or R2; shared R2 or class ring",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefixime",
        "reason": "almost-identical R1",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefotaxime",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefotetan",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefoxitin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefpirome",
        "reason": "similar R1 or R2",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefpodoxime",
        "reason": "similar R1 or R2",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefprozil",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftaroline",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftazidime",
        "reason": "similar R1 or R2; shared R2 or class ring",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Ceftibuten",
        "reason": "similar R1 or R2",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftobiprole",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftolozane",
        "reason": "similar R1 or R2; shared R2 or class ring",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Ceftriaxone",
        "reason": "similar R1 or R2; shared R2 or class ring",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefuroxime",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cephalexin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cephalothin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      }
    ],
    "saferFrom": [
      {
        "name": "Amoxicillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Ampicillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefatrizine",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefonicid",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefoperazone",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftezole",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cephapirin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Dicloxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Flucloxacillin",
        "reason": "no shared cross-reactivity",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Nafcillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Oxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Penicillin G",
        "reason": "no shared cross-reactivity",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Penicillin G / V",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Penicillin V",
        "reason": "no shared cross-reactivity",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Piperacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      }
    ]
  },
  "beta:Cefditoren": {
    "id": "beta:Cefditoren",
    "name": "Cefditoren",
    "pool": "beta",
    "pending": false,
    "high": [
      {
        "name": "Aztreonam",
        "noteId": "beta:Aztreonam",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefdinir",
        "noteId": "beta:Cefdinir",
        "reason": "similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefepime",
        "noteId": "beta:Cefepime",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefetamet",
        "noteId": "beta:Cefetamet",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefiderocol",
        "noteId": "beta:Cefiderocol",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefixime",
        "noteId": "beta:Cefixime",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefodizime",
        "noteId": "beta:Cefodizime",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefotaxime",
        "noteId": "beta:Cefotaxime",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefotiam",
        "noteId": "beta:Cefotiam",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefpirome",
        "noteId": "beta:Cefpirome",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefpodoxime",
        "noteId": "beta:Cefpodoxime",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Ceftazidime",
        "noteId": "beta:Ceftazidime",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Ceftibuten",
        "noteId": "beta:Ceftibuten",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Ceftizoxime",
        "noteId": "beta:Ceftizoxime",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Ceftolozane",
        "noteId": "beta:Ceftolozane",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Ceftriaxone",
        "noteId": "beta:Ceftriaxone",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefuroxime",
        "noteId": "beta:Cefuroxime",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      }
    ],
    "safer": [
      {
        "name": "Amoxicillin",
        "noteId": "beta:Amoxicillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ampicillin",
        "noteId": "beta:Ampicillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefaclor",
        "noteId": "beta:Cefaclor",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefadroxil",
        "noteId": "beta:Cefadroxil",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefamandole",
        "noteId": "beta:Cefamandole",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefatrizine",
        "noteId": "beta:Cefatrizine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefazolin",
        "noteId": "beta:Cefazolin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefonicid",
        "noteId": "beta:Cefonicid",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefoperazone",
        "noteId": "beta:Cefoperazone",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceforamide",
        "noteId": "beta:Ceforamide",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefotetan",
        "noteId": "beta:Cefotetan",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefoxitin",
        "noteId": "beta:Cefoxitin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefprozil",
        "noteId": "beta:Cefprozil",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefradine",
        "noteId": "beta:Cefradine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftezole",
        "noteId": "beta:Ceftezole",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cephalexin",
        "noteId": "beta:Cephalexin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cephalothin",
        "noteId": "beta:Cephalothin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cephapirin",
        "noteId": "beta:Cephapirin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Dicloxacillin",
        "noteId": "beta:Dicloxacillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Loracarbef",
        "noteId": "beta:Loracarbef",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Nafcillin",
        "noteId": "beta:Nafcillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Oxacillin",
        "noteId": "beta:Oxacillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Penicillin G",
        "noteId": "beta:Penicillin G",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Penicillin G / V",
        "noteId": "beta:Penicillin G / V",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Penicillin V",
        "noteId": "beta:Penicillin V",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Piperacillin",
        "noteId": "beta:Piperacillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Pivmecillinam",
        "noteId": "beta:Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      }
    ],
    "highFrom": [
      {
        "name": "Aztreonam",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefdinir",
        "reason": "similar R1 or R2",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefepime",
        "reason": "identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefetamet",
        "reason": "identical R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefiderocol",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefixime",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefodizime",
        "reason": "identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefotaxime",
        "reason": "identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefotiam",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefpirome",
        "reason": "identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefpodoxime",
        "reason": "identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ceftazidime",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ceftibuten",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ceftizoxime",
        "reason": "identical R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftolozane",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftriaxone",
        "reason": "identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefuroxime",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      }
    ],
    "saferFrom": [
      {
        "name": "Amoxicillin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ampicillin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefaclor",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefadroxil",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefamandole",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefatrizine",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefazolin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefonicid",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefoperazone",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ceforamide",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefotetan",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefoxitin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefprozil",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefradine",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftezole",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cephalexin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cephalothin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cephapirin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Dicloxacillin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Loracarbef",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Nafcillin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Oxacillin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Penicillin G",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Penicillin G / V",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Penicillin V",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Piperacillin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      }
    ]
  },
  "beta:Cefixime": {
    "id": "beta:Cefixime",
    "name": "Cefixime",
    "pool": "beta",
    "pending": false,
    "high": [
      {
        "name": "Aztreonam",
        "noteId": "beta:Aztreonam",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefaclor",
        "noteId": "beta:Cefaclor",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefadroxil",
        "noteId": "beta:Cefadroxil",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefamandole",
        "noteId": "beta:Cefamandole",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefazolin",
        "noteId": "beta:Cefazolin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefdinir",
        "noteId": "beta:Cefdinir",
        "reason": "almost-identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefditoren",
        "noteId": "beta:Cefditoren",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefepime",
        "noteId": "beta:Cefepime",
        "reason": "partial R1; similar R1 or R2; shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefetamet",
        "noteId": "beta:Cefetamet",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefiderocol",
        "noteId": "beta:Cefiderocol",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefodizime",
        "noteId": "beta:Cefodizime",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefotaxime",
        "noteId": "beta:Cefotaxime",
        "reason": "partial R1; shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefotetan",
        "noteId": "beta:Cefotetan",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefotiam",
        "noteId": "beta:Cefotiam",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefoxitin",
        "noteId": "beta:Cefoxitin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefpirome",
        "noteId": "beta:Cefpirome",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefpodoxime",
        "noteId": "beta:Cefpodoxime",
        "reason": "similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefprozil",
        "noteId": "beta:Cefprozil",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline",
        "noteId": "beta:Ceftaroline",
        "reason": "partial R1; shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftazidime",
        "noteId": "beta:Ceftazidime",
        "reason": "partial R1; similar R1 or R2; shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftibuten",
        "noteId": "beta:Ceftibuten",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Ceftizoxime",
        "noteId": "beta:Ceftizoxime",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Ceftobiprole",
        "noteId": "beta:Ceftobiprole",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftolozane",
        "noteId": "beta:Ceftolozane",
        "reason": "partial R1; similar R1 or R2; shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftriaxone",
        "noteId": "beta:Ceftriaxone",
        "reason": "partial R1; similar R1 or R2; shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefuroxime",
        "noteId": "beta:Cefuroxime",
        "reason": "similar R1 or R2; shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cephalexin",
        "noteId": "beta:Cephalexin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cephalothin",
        "noteId": "beta:Cephalothin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      }
    ],
    "safer": [
      {
        "name": "Amoxicillin",
        "noteId": "beta:Amoxicillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ampicillin",
        "noteId": "beta:Ampicillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefatrizine",
        "noteId": "beta:Cefatrizine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefonicid",
        "noteId": "beta:Cefonicid",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefoperazone",
        "noteId": "beta:Cefoperazone",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceforamide",
        "noteId": "beta:Ceforamide",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefradine",
        "noteId": "beta:Cefradine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftezole",
        "noteId": "beta:Ceftezole",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cephapirin",
        "noteId": "beta:Cephapirin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Dicloxacillin",
        "noteId": "beta:Dicloxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Flucloxacillin",
        "noteId": "beta:Flucloxacillin",
        "reason": "no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Loracarbef",
        "noteId": "beta:Loracarbef",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Nafcillin",
        "noteId": "beta:Nafcillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Oxacillin",
        "noteId": "beta:Oxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Penicillin G",
        "noteId": "beta:Penicillin G",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Penicillin G / V",
        "noteId": "beta:Penicillin G / V",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Penicillin V",
        "noteId": "beta:Penicillin V",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Piperacillin",
        "noteId": "beta:Piperacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Pivmecillinam",
        "noteId": "beta:Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      }
    ],
    "highFrom": [
      {
        "name": "Aztreonam",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefaclor",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefadroxil",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefamandole",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefazolin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefdinir",
        "reason": "almost-identical R1",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefditoren",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefepime",
        "reason": "partial R1; similar R1 or R2; shared R2 or class ring",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefetamet",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefiderocol",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefodizime",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefotaxime",
        "reason": "partial R1; shared R2 or class ring",
        "via": "Romano Fig 1; Trubiano Fig C3"
      },
      {
        "name": "Cefotetan",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefotiam",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefoxitin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefpirome",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefpodoxime",
        "reason": "similar R1 or R2",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefprozil",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftaroline",
        "reason": "partial R1; shared R2 or class ring",
        "via": "Romano Fig 1; Trubiano Fig C3"
      },
      {
        "name": "Ceftazidime",
        "reason": "partial R1; similar R1 or R2; shared R2 or class ring",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Ceftibuten",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ceftizoxime",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftobiprole",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftolozane",
        "reason": "partial R1; similar R1 or R2; shared R2 or class ring",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Ceftriaxone",
        "reason": "partial R1; similar R1 or R2; shared R2 or class ring",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefuroxime",
        "reason": "similar R1 or R2; shared R2 or class ring",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cephalexin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cephalothin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      }
    ],
    "saferFrom": [
      {
        "name": "Amoxicillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Ampicillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefatrizine",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefonicid",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefoperazone",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ceforamide",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefradine",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftezole",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cephapirin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Dicloxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Flucloxacillin",
        "reason": "no shared cross-reactivity",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Loracarbef",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Nafcillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Oxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Penicillin G",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Romano Fig 1; Trubiano Fig C3"
      },
      {
        "name": "Penicillin G / V",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Penicillin V",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Romano Fig 1; Trubiano Fig C3"
      },
      {
        "name": "Piperacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      }
    ]
  },
  "beta:Cefodizime": {
    "id": "beta:Cefodizime",
    "name": "Cefodizime",
    "pool": "beta",
    "pending": false,
    "high": [
      {
        "name": "Aztreonam",
        "noteId": "beta:Aztreonam",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefditoren",
        "noteId": "beta:Cefditoren",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefepime",
        "noteId": "beta:Cefepime",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefetamet",
        "noteId": "beta:Cefetamet",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefiderocol",
        "noteId": "beta:Cefiderocol",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefixime",
        "noteId": "beta:Cefixime",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefotaxime",
        "noteId": "beta:Cefotaxime",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefotiam",
        "noteId": "beta:Cefotiam",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefpirome",
        "noteId": "beta:Cefpirome",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefpodoxime",
        "noteId": "beta:Cefpodoxime",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline",
        "noteId": "beta:Ceftaroline",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Ceftazidime",
        "noteId": "beta:Ceftazidime",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Ceftibuten",
        "noteId": "beta:Ceftibuten",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Ceftizoxime",
        "noteId": "beta:Ceftizoxime",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Ceftolozane",
        "noteId": "beta:Ceftolozane",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Ceftriaxone",
        "noteId": "beta:Ceftriaxone",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefuroxime",
        "noteId": "beta:Cefuroxime",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      }
    ],
    "safer": [
      {
        "name": "Amoxicillin",
        "noteId": "beta:Amoxicillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ampicillin",
        "noteId": "beta:Ampicillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefaclor",
        "noteId": "beta:Cefaclor",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefadroxil",
        "noteId": "beta:Cefadroxil",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefamandole",
        "noteId": "beta:Cefamandole",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefatrizine",
        "noteId": "beta:Cefatrizine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefazolin",
        "noteId": "beta:Cefazolin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefonicid",
        "noteId": "beta:Cefonicid",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefoperazone",
        "noteId": "beta:Cefoperazone",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceforamide",
        "noteId": "beta:Ceforamide",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefotetan",
        "noteId": "beta:Cefotetan",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefoxitin",
        "noteId": "beta:Cefoxitin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefprozil",
        "noteId": "beta:Cefprozil",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefradine",
        "noteId": "beta:Cefradine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftezole",
        "noteId": "beta:Ceftezole",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cephalexin",
        "noteId": "beta:Cephalexin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cephalothin",
        "noteId": "beta:Cephalothin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cephapirin",
        "noteId": "beta:Cephapirin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Dicloxacillin",
        "noteId": "beta:Dicloxacillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Loracarbef",
        "noteId": "beta:Loracarbef",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Nafcillin",
        "noteId": "beta:Nafcillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Oxacillin",
        "noteId": "beta:Oxacillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Penicillin G",
        "noteId": "beta:Penicillin G",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Penicillin G / V",
        "noteId": "beta:Penicillin G / V",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Penicillin V",
        "noteId": "beta:Penicillin V",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Piperacillin",
        "noteId": "beta:Piperacillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Pivmecillinam",
        "noteId": "beta:Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      }
    ],
    "highFrom": [
      {
        "name": "Aztreonam",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefditoren",
        "reason": "identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefepime",
        "reason": "identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefetamet",
        "reason": "identical R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefiderocol",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefixime",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefotaxime",
        "reason": "identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefotiam",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefpirome",
        "reason": "identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefpodoxime",
        "reason": "identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ceftaroline",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftazidime",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftibuten",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftizoxime",
        "reason": "identical R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftolozane",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ceftriaxone",
        "reason": "identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefuroxime",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      }
    ],
    "saferFrom": [
      {
        "name": "Amoxicillin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ampicillin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefaclor",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefadroxil",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefamandole",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefatrizine",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefazolin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefonicid",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefoperazone",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ceforamide",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefotetan",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefoxitin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefprozil",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefradine",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftezole",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cephalexin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cephalothin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cephapirin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Dicloxacillin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Loracarbef",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Nafcillin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Oxacillin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Penicillin G",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Penicillin G / V",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Penicillin V",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Piperacillin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      }
    ]
  },
  "beta:Cefoperazone": {
    "id": "beta:Cefoperazone",
    "name": "Cefoperazone",
    "pool": "beta",
    "pending": false,
    "high": [
      {
        "name": "Amoxicillin",
        "noteId": "beta:Amoxicillin",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Ampicillin",
        "noteId": "beta:Ampicillin",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefaclor",
        "noteId": "beta:Cefaclor",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefadroxil",
        "noteId": "beta:Cefadroxil",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefatrizine",
        "noteId": "beta:Cefatrizine",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefonicid",
        "noteId": "beta:Cefonicid",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefotiam",
        "noteId": "beta:Cefotiam",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefprozil",
        "noteId": "beta:Cefprozil",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cephalexin",
        "noteId": "beta:Cephalexin",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Loracarbef",
        "noteId": "beta:Loracarbef",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Penicillin G",
        "noteId": "beta:Penicillin G",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Penicillin V",
        "noteId": "beta:Penicillin V",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Piperacillin",
        "noteId": "beta:Piperacillin",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      }
    ],
    "safer": [
      {
        "name": "Aztreonam",
        "noteId": "beta:Aztreonam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefazolin",
        "noteId": "beta:Cefazolin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefdinir",
        "noteId": "beta:Cefdinir",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefditoren",
        "noteId": "beta:Cefditoren",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefepime",
        "noteId": "beta:Cefepime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefetamet",
        "noteId": "beta:Cefetamet",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefiderocol",
        "noteId": "beta:Cefiderocol",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefixime",
        "noteId": "beta:Cefixime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefodizime",
        "noteId": "beta:Cefodizime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefotaxime",
        "noteId": "beta:Cefotaxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefoxitin",
        "noteId": "beta:Cefoxitin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefpirome",
        "noteId": "beta:Cefpirome",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefpodoxime",
        "noteId": "beta:Cefpodoxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefradine",
        "noteId": "beta:Cefradine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline",
        "noteId": "beta:Ceftaroline",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline fosamil",
        "noteId": "beta:Ceftaroline fosamil",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftazidime",
        "noteId": "beta:Ceftazidime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftezole",
        "noteId": "beta:Ceftezole",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftibuten",
        "noteId": "beta:Ceftibuten",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftizoxime",
        "noteId": "beta:Ceftizoxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftolozane",
        "noteId": "beta:Ceftolozane",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftriaxone",
        "noteId": "beta:Ceftriaxone",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefuroxime",
        "noteId": "beta:Cefuroxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cephalothin",
        "noteId": "beta:Cephalothin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cephapirin",
        "noteId": "beta:Cephapirin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Dicloxacillin",
        "noteId": "beta:Dicloxacillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Nafcillin",
        "noteId": "beta:Nafcillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Oxacillin",
        "noteId": "beta:Oxacillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Pivmecillinam",
        "noteId": "beta:Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      }
    ],
    "highFrom": [
      {
        "name": "Amoxicillin",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ampicillin",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefaclor",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefadroxil",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefatrizine",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefonicid",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefotiam",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefprozil",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cephalexin",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Loracarbef",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Penicillin G",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Penicillin V",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Piperacillin",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      }
    ],
    "saferFrom": [
      {
        "name": "Aztreonam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefazolin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefdinir",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefditoren",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefepime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefetamet",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefiderocol",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefixime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefodizime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefotaxime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefoxitin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefpirome",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefpodoxime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefradine",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftaroline",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftaroline fosamil",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftazidime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ceftezole",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftibuten",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ceftizoxime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftolozane",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ceftriaxone",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefuroxime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cephalothin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cephapirin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Dicloxacillin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Nafcillin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Oxacillin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      }
    ]
  },
  "beta:Cefotaxime": {
    "id": "beta:Cefotaxime",
    "name": "Cefotaxime",
    "pool": "beta",
    "pending": false,
    "high": [
      {
        "name": "Aztreonam",
        "noteId": "beta:Aztreonam",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Cefaclor",
        "noteId": "beta:Cefaclor",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefadroxil",
        "noteId": "beta:Cefadroxil",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefamandole",
        "noteId": "beta:Cefamandole",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefazolin",
        "noteId": "beta:Cefazolin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefdinir",
        "noteId": "beta:Cefdinir",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefditoren",
        "noteId": "beta:Cefditoren",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefepime",
        "noteId": "beta:Cefepime",
        "reason": "identical R1; almost-identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefetamet",
        "noteId": "beta:Cefetamet",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefiderocol",
        "noteId": "beta:Cefiderocol",
        "reason": "partial R1; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Cefixime",
        "noteId": "beta:Cefixime",
        "reason": "partial R1; shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefodizime",
        "noteId": "beta:Cefodizime",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefotetan",
        "noteId": "beta:Cefotetan",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefotiam",
        "noteId": "beta:Cefotiam",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefoxitin",
        "noteId": "beta:Cefoxitin",
        "reason": "partial R1; shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefpirome",
        "noteId": "beta:Cefpirome",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefpodoxime",
        "noteId": "beta:Cefpodoxime",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefprozil",
        "noteId": "beta:Cefprozil",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline",
        "noteId": "beta:Ceftaroline",
        "reason": "partial R1; shared R2 or class ring; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Ceftazidime",
        "noteId": "beta:Ceftazidime",
        "reason": "identical R1; partial R1; shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftibuten",
        "noteId": "beta:Ceftibuten",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Ceftizoxime",
        "noteId": "beta:Ceftizoxime",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Ceftobiprole",
        "noteId": "beta:Ceftobiprole",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftolozane",
        "noteId": "beta:Ceftolozane",
        "reason": "partial R1; shared R2 or class ring; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Ceftriaxone",
        "noteId": "beta:Ceftriaxone",
        "reason": "identical R1; almost-identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefuroxime",
        "noteId": "beta:Cefuroxime",
        "reason": "partial R1; shared R2 or class ring; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Cephalexin",
        "noteId": "beta:Cephalexin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cephalothin",
        "noteId": "beta:Cephalothin",
        "reason": "partial R1; clinical cross-react",
        "pendingRow": false
      }
    ],
    "safer": [
      {
        "name": "Amoxicillin",
        "noteId": "beta:Amoxicillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ampicillin",
        "noteId": "beta:Ampicillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefatrizine",
        "noteId": "beta:Cefatrizine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefonicid",
        "noteId": "beta:Cefonicid",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefoperazone",
        "noteId": "beta:Cefoperazone",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceforamide",
        "noteId": "beta:Ceforamide",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefradine",
        "noteId": "beta:Cefradine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftezole",
        "noteId": "beta:Ceftezole",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Dicloxacillin",
        "noteId": "beta:Dicloxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ertapenem",
        "noteId": "beta:Ertapenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Feneticillin",
        "noteId": "beta:Feneticillin",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Flucloxacillin",
        "noteId": "beta:Flucloxacillin",
        "reason": "no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Imipenem",
        "noteId": "beta:Imipenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Loracarbef",
        "noteId": "beta:Loracarbef",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Meropenem",
        "noteId": "beta:Meropenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Nafcillin",
        "noteId": "beta:Nafcillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Oxacillin",
        "noteId": "beta:Oxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Penicillin G",
        "noteId": "beta:Penicillin G",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Penicillin G / V",
        "noteId": "beta:Penicillin G / V",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Penicillin V",
        "noteId": "beta:Penicillin V",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Piperacillin",
        "noteId": "beta:Piperacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Pivmecillinam",
        "noteId": "beta:Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      }
    ],
    "highFrom": [
      {
        "name": "Aztreonam",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      },
      {
        "name": "Cefaclor",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefadroxil",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefamandole",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefazolin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefdinir",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefditoren",
        "reason": "identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefepime",
        "reason": "identical R1; almost-identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11; manual transcription"
      },
      {
        "name": "Cefetamet",
        "reason": "identical R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefiderocol",
        "reason": "partial R1; clinical cross-react",
        "via": "Romano Fig 1; SWAB Table 11"
      },
      {
        "name": "Cefixime",
        "reason": "partial R1; shared R2 or class ring",
        "via": "Romano Fig 1; Trubiano Fig C3"
      },
      {
        "name": "Cefodizime",
        "reason": "identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefotetan",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefotiam",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefoxitin",
        "reason": "partial R1; shared R2 or class ring",
        "via": "Romano Fig 1; Trubiano Fig C3"
      },
      {
        "name": "Cefpirome",
        "reason": "identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefpodoxime",
        "reason": "identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefprozil",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftaroline",
        "reason": "partial R1; shared R2 or class ring; clinical cross-react",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Ceftazidime",
        "reason": "identical R1; partial R1; shared R2 or class ring",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11; manual transcription"
      },
      {
        "name": "Ceftibuten",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      },
      {
        "name": "Ceftizoxime",
        "reason": "identical R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftobiprole",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftolozane",
        "reason": "partial R1; shared R2 or class ring; clinical cross-react",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Ceftriaxone",
        "reason": "identical R1; almost-identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11; manual transcription"
      },
      {
        "name": "Cefuroxime",
        "reason": "partial R1; shared R2 or class ring; clinical cross-react",
        "via": "Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cephalexin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cephalothin",
        "reason": "partial R1; clinical cross-react",
        "via": "SWAB Table 11"
      }
    ],
    "saferFrom": [
      {
        "name": "Amoxicillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Ampicillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefatrizine",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefonicid",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefoperazone",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ceforamide",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefradine",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftezole",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Dicloxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Ertapenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Feneticillin",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Flucloxacillin",
        "reason": "no shared cross-reactivity; no cross-reactivity",
        "via": "Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Imipenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Loracarbef",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Meropenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Nafcillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Oxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Penicillin G",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Penicillin G / V",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Penicillin V",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Piperacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      }
    ]
  },
  "beta:Cefotiam": {
    "id": "beta:Cefotiam",
    "name": "Cefotiam",
    "pool": "beta",
    "pending": false,
    "high": [
      {
        "name": "Aztreonam",
        "noteId": "beta:Aztreonam",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefamandole",
        "noteId": "beta:Cefamandole",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefatrizine",
        "noteId": "beta:Cefatrizine",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefditoren",
        "noteId": "beta:Cefditoren",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefepime",
        "noteId": "beta:Cefepime",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefetamet",
        "noteId": "beta:Cefetamet",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefiderocol",
        "noteId": "beta:Cefiderocol",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefixime",
        "noteId": "beta:Cefixime",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefodizime",
        "noteId": "beta:Cefodizime",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefonicid",
        "noteId": "beta:Cefonicid",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefoperazone",
        "noteId": "beta:Cefoperazone",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Ceforamide",
        "noteId": "beta:Ceforamide",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefotaxime",
        "noteId": "beta:Cefotaxime",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefpirome",
        "noteId": "beta:Cefpirome",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefpodoxime",
        "noteId": "beta:Cefpodoxime",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline",
        "noteId": "beta:Ceftaroline",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Ceftazidime",
        "noteId": "beta:Ceftazidime",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Ceftibuten",
        "noteId": "beta:Ceftibuten",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Ceftizoxime",
        "noteId": "beta:Ceftizoxime",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Ceftolozane",
        "noteId": "beta:Ceftolozane",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Ceftriaxone",
        "noteId": "beta:Ceftriaxone",
        "reason": "partial R1",
        "pendingRow": false
      }
    ],
    "safer": [
      {
        "name": "Amoxicillin",
        "noteId": "beta:Amoxicillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ampicillin",
        "noteId": "beta:Ampicillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefaclor",
        "noteId": "beta:Cefaclor",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefadroxil",
        "noteId": "beta:Cefadroxil",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefazolin",
        "noteId": "beta:Cefazolin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefoxitin",
        "noteId": "beta:Cefoxitin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefprozil",
        "noteId": "beta:Cefprozil",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefradine",
        "noteId": "beta:Cefradine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefuroxime",
        "noteId": "beta:Cefuroxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cephalexin",
        "noteId": "beta:Cephalexin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cephalothin",
        "noteId": "beta:Cephalothin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Loracarbef",
        "noteId": "beta:Loracarbef",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Penicillin G",
        "noteId": "beta:Penicillin G",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Penicillin V",
        "noteId": "beta:Penicillin V",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Piperacillin",
        "noteId": "beta:Piperacillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Pivmecillinam",
        "noteId": "beta:Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      }
    ],
    "highFrom": [
      {
        "name": "Aztreonam",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefamandole",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefatrizine",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefditoren",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefepime",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefetamet",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefiderocol",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefixime",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefodizime",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefonicid",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefoperazone",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceforamide",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefotaxime",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefpirome",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefpodoxime",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftaroline",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftazidime",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftibuten",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftizoxime",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftolozane",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftriaxone",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      }
    ],
    "saferFrom": [
      {
        "name": "Amoxicillin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ampicillin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefaclor",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefadroxil",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefazolin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefoxitin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefprozil",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefradine",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefuroxime",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cephalexin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cephalothin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Loracarbef",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Penicillin G",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Penicillin V",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Piperacillin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      }
    ]
  },
  "beta:Cefpodoxime": {
    "id": "beta:Cefpodoxime",
    "name": "Cefpodoxime",
    "pool": "beta",
    "pending": false,
    "high": [
      {
        "name": "Aztreonam",
        "noteId": "beta:Aztreonam",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefdinir",
        "noteId": "beta:Cefdinir",
        "reason": "similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefditoren",
        "noteId": "beta:Cefditoren",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefepime",
        "noteId": "beta:Cefepime",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefetamet",
        "noteId": "beta:Cefetamet",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefiderocol",
        "noteId": "beta:Cefiderocol",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefixime",
        "noteId": "beta:Cefixime",
        "reason": "similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefodizime",
        "noteId": "beta:Cefodizime",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefotaxime",
        "noteId": "beta:Cefotaxime",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefotiam",
        "noteId": "beta:Cefotiam",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefpirome",
        "noteId": "beta:Cefpirome",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline",
        "noteId": "beta:Ceftaroline",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Ceftazidime",
        "noteId": "beta:Ceftazidime",
        "reason": "similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Ceftibuten",
        "noteId": "beta:Ceftibuten",
        "reason": "similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Ceftizoxime",
        "noteId": "beta:Ceftizoxime",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Ceftolozane",
        "noteId": "beta:Ceftolozane",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Ceftriaxone",
        "noteId": "beta:Ceftriaxone",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefuroxime",
        "noteId": "beta:Cefuroxime",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      }
    ],
    "safer": [
      {
        "name": "Amoxicillin",
        "noteId": "beta:Amoxicillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ampicillin",
        "noteId": "beta:Ampicillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefaclor",
        "noteId": "beta:Cefaclor",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefadroxil",
        "noteId": "beta:Cefadroxil",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefamandole",
        "noteId": "beta:Cefamandole",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefatrizine",
        "noteId": "beta:Cefatrizine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefazolin",
        "noteId": "beta:Cefazolin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefonicid",
        "noteId": "beta:Cefonicid",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefoperazone",
        "noteId": "beta:Cefoperazone",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceforamide",
        "noteId": "beta:Ceforamide",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefotetan",
        "noteId": "beta:Cefotetan",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefoxitin",
        "noteId": "beta:Cefoxitin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefprozil",
        "noteId": "beta:Cefprozil",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefradine",
        "noteId": "beta:Cefradine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftezole",
        "noteId": "beta:Ceftezole",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cephalexin",
        "noteId": "beta:Cephalexin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cephalothin",
        "noteId": "beta:Cephalothin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cephapirin",
        "noteId": "beta:Cephapirin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Dicloxacillin",
        "noteId": "beta:Dicloxacillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Loracarbef",
        "noteId": "beta:Loracarbef",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Nafcillin",
        "noteId": "beta:Nafcillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Oxacillin",
        "noteId": "beta:Oxacillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Penicillin G",
        "noteId": "beta:Penicillin G",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Penicillin G / V",
        "noteId": "beta:Penicillin G / V",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Penicillin V",
        "noteId": "beta:Penicillin V",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Piperacillin",
        "noteId": "beta:Piperacillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Pivmecillinam",
        "noteId": "beta:Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      }
    ],
    "highFrom": [
      {
        "name": "Aztreonam",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefdinir",
        "reason": "similar R1 or R2",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefditoren",
        "reason": "identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefepime",
        "reason": "identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefetamet",
        "reason": "identical R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefiderocol",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefixime",
        "reason": "similar R1 or R2",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefodizime",
        "reason": "identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefotaxime",
        "reason": "identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefotiam",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefpirome",
        "reason": "identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ceftaroline",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftazidime",
        "reason": "similar R1 or R2",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftibuten",
        "reason": "similar R1 or R2",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftizoxime",
        "reason": "identical R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftolozane",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftriaxone",
        "reason": "identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefuroxime",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      }
    ],
    "saferFrom": [
      {
        "name": "Amoxicillin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ampicillin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefaclor",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefadroxil",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefamandole",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefatrizine",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefazolin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefonicid",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefoperazone",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ceforamide",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefotetan",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefoxitin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefprozil",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefradine",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftezole",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cephalexin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cephalothin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cephapirin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Dicloxacillin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Loracarbef",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Nafcillin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Oxacillin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Penicillin G",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Penicillin G / V",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Penicillin V",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Piperacillin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      }
    ]
  },
  "beta:Ceftazidime": {
    "id": "beta:Ceftazidime",
    "name": "Ceftazidime",
    "pool": "beta",
    "pending": false,
    "high": [
      {
        "name": "Aztreonam",
        "noteId": "beta:Aztreonam",
        "reason": "identical R1; almost-identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefaclor",
        "noteId": "beta:Cefaclor",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefadroxil",
        "noteId": "beta:Cefadroxil",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefamandole",
        "noteId": "beta:Cefamandole",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefazolin",
        "noteId": "beta:Cefazolin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefdinir",
        "noteId": "beta:Cefdinir",
        "reason": "similar R1 or R2; shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefditoren",
        "noteId": "beta:Cefditoren",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefepime",
        "noteId": "beta:Cefepime",
        "reason": "identical R1; partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefetamet",
        "noteId": "beta:Cefetamet",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefiderocol",
        "noteId": "beta:Cefiderocol",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefixime",
        "noteId": "beta:Cefixime",
        "reason": "partial R1; similar R1 or R2; shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefodizime",
        "noteId": "beta:Cefodizime",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefotaxime",
        "noteId": "beta:Cefotaxime",
        "reason": "identical R1; partial R1; shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefotetan",
        "noteId": "beta:Cefotetan",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefotiam",
        "noteId": "beta:Cefotiam",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefoxitin",
        "noteId": "beta:Cefoxitin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefpirome",
        "noteId": "beta:Cefpirome",
        "reason": "similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefpodoxime",
        "noteId": "beta:Cefpodoxime",
        "reason": "similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefprozil",
        "noteId": "beta:Cefprozil",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline",
        "noteId": "beta:Ceftaroline",
        "reason": "partial R1; shared R2 or class ring; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Ceftibuten",
        "noteId": "beta:Ceftibuten",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Ceftizoxime",
        "noteId": "beta:Ceftizoxime",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Ceftobiprole",
        "noteId": "beta:Ceftobiprole",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftolozane",
        "noteId": "beta:Ceftolozane",
        "reason": "partial R1; shared R2 or class ring; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Ceftriaxone",
        "noteId": "beta:Ceftriaxone",
        "reason": "identical R1; partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefuroxime",
        "noteId": "beta:Cefuroxime",
        "reason": "partial R1; shared R2 or class ring; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Cephalexin",
        "noteId": "beta:Cephalexin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cephalothin",
        "noteId": "beta:Cephalothin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      }
    ],
    "safer": [
      {
        "name": "Amoxicillin",
        "noteId": "beta:Amoxicillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ampicillin",
        "noteId": "beta:Ampicillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefatrizine",
        "noteId": "beta:Cefatrizine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefonicid",
        "noteId": "beta:Cefonicid",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefoperazone",
        "noteId": "beta:Cefoperazone",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceforamide",
        "noteId": "beta:Ceforamide",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefradine",
        "noteId": "beta:Cefradine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftezole",
        "noteId": "beta:Ceftezole",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cephapirin",
        "noteId": "beta:Cephapirin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Dicloxacillin",
        "noteId": "beta:Dicloxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ertapenem",
        "noteId": "beta:Ertapenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Feneticillin",
        "noteId": "beta:Feneticillin",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Flucloxacillin",
        "noteId": "beta:Flucloxacillin",
        "reason": "no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Imipenem",
        "noteId": "beta:Imipenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Loracarbef",
        "noteId": "beta:Loracarbef",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Meropenem",
        "noteId": "beta:Meropenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Nafcillin",
        "noteId": "beta:Nafcillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Oxacillin",
        "noteId": "beta:Oxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Penicillin G",
        "noteId": "beta:Penicillin G",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Penicillin G / V",
        "noteId": "beta:Penicillin G / V",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Penicillin V",
        "noteId": "beta:Penicillin V",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Piperacillin",
        "noteId": "beta:Piperacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Pivmecillinam",
        "noteId": "beta:Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      }
    ],
    "highFrom": [
      {
        "name": "Aztreonam",
        "reason": "identical R1; almost-identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11; manual transcription"
      },
      {
        "name": "Cefaclor",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefadroxil",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefamandole",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefazolin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefdinir",
        "reason": "similar R1 or R2; shared R2 or class ring",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefditoren",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefepime",
        "reason": "identical R1; partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11; manual transcription"
      },
      {
        "name": "Cefetamet",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefiderocol",
        "reason": "identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11; manual transcription"
      },
      {
        "name": "Cefixime",
        "reason": "partial R1; similar R1 or R2; shared R2 or class ring",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefodizime",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefotaxime",
        "reason": "identical R1; partial R1; shared R2 or class ring",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11; manual transcription"
      },
      {
        "name": "Cefotetan",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefotiam",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefoxitin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefpirome",
        "reason": "similar R1 or R2",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefpodoxime",
        "reason": "similar R1 or R2",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefprozil",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftaroline",
        "reason": "partial R1; shared R2 or class ring; clinical cross-react",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Ceftibuten",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      },
      {
        "name": "Ceftizoxime",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftobiprole",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftolozane",
        "reason": "partial R1; shared R2 or class ring; clinical cross-react",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Ceftriaxone",
        "reason": "identical R1; partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11; manual transcription"
      },
      {
        "name": "Cefuroxime",
        "reason": "partial R1; shared R2 or class ring; clinical cross-react",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cephalexin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cephalothin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      }
    ],
    "saferFrom": [
      {
        "name": "Amoxicillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Ampicillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefatrizine",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefonicid",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefoperazone",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ceforamide",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefradine",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftezole",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cephapirin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Dicloxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Ertapenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Feneticillin",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Flucloxacillin",
        "reason": "no shared cross-reactivity; no cross-reactivity",
        "via": "Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Imipenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Loracarbef",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Meropenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Nafcillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Oxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Penicillin G",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Penicillin G / V",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Penicillin V",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Piperacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      }
    ]
  },
  "beta:Ceftibuten": {
    "id": "beta:Ceftibuten",
    "name": "Ceftibuten",
    "pool": "beta",
    "pending": false,
    "high": [
      {
        "name": "Aztreonam",
        "noteId": "beta:Aztreonam",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Cefdinir",
        "noteId": "beta:Cefdinir",
        "reason": "similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefditoren",
        "noteId": "beta:Cefditoren",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefepime",
        "noteId": "beta:Cefepime",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Cefetamet",
        "noteId": "beta:Cefetamet",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefiderocol",
        "noteId": "beta:Cefiderocol",
        "reason": "partial R1; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Cefixime",
        "noteId": "beta:Cefixime",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefodizime",
        "noteId": "beta:Cefodizime",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefotaxime",
        "noteId": "beta:Cefotaxime",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Cefotiam",
        "noteId": "beta:Cefotiam",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefpirome",
        "noteId": "beta:Cefpirome",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefpodoxime",
        "noteId": "beta:Cefpodoxime",
        "reason": "similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline",
        "noteId": "beta:Ceftaroline",
        "reason": "partial R1; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Ceftazidime",
        "noteId": "beta:Ceftazidime",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Ceftizoxime",
        "noteId": "beta:Ceftizoxime",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Ceftolozane",
        "noteId": "beta:Ceftolozane",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Ceftriaxone",
        "noteId": "beta:Ceftriaxone",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "pendingRow": false
      }
    ],
    "safer": [
      {
        "name": "Amoxicillin",
        "noteId": "beta:Amoxicillin",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ampicillin",
        "noteId": "beta:Ampicillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefaclor",
        "noteId": "beta:Cefaclor",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefadroxil",
        "noteId": "beta:Cefadroxil",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefamandole",
        "noteId": "beta:Cefamandole",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefatrizine",
        "noteId": "beta:Cefatrizine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefazolin",
        "noteId": "beta:Cefazolin",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefonicid",
        "noteId": "beta:Cefonicid",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefoperazone",
        "noteId": "beta:Cefoperazone",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceforamide",
        "noteId": "beta:Ceforamide",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefotetan",
        "noteId": "beta:Cefotetan",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefoxitin",
        "noteId": "beta:Cefoxitin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefprozil",
        "noteId": "beta:Cefprozil",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefradine",
        "noteId": "beta:Cefradine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftezole",
        "noteId": "beta:Ceftezole",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefuroxime",
        "noteId": "beta:Cefuroxime",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cephalexin",
        "noteId": "beta:Cephalexin",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cephalothin",
        "noteId": "beta:Cephalothin",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cephapirin",
        "noteId": "beta:Cephapirin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Dicloxacillin",
        "noteId": "beta:Dicloxacillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ertapenem",
        "noteId": "beta:Ertapenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Feneticillin",
        "noteId": "beta:Feneticillin",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Flucloxacillin",
        "noteId": "beta:Flucloxacillin",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Imipenem",
        "noteId": "beta:Imipenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Loracarbef",
        "noteId": "beta:Loracarbef",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Meropenem",
        "noteId": "beta:Meropenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Nafcillin",
        "noteId": "beta:Nafcillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Oxacillin",
        "noteId": "beta:Oxacillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Penicillin G",
        "noteId": "beta:Penicillin G",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Penicillin G / V",
        "noteId": "beta:Penicillin G / V",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Penicillin V",
        "noteId": "beta:Penicillin V",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Piperacillin",
        "noteId": "beta:Piperacillin",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Pivmecillinam",
        "noteId": "beta:Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      }
    ],
    "highFrom": [
      {
        "name": "Aztreonam",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      },
      {
        "name": "Cefdinir",
        "reason": "similar R1 or R2",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefditoren",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefepime",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      },
      {
        "name": "Cefetamet",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefiderocol",
        "reason": "partial R1; clinical cross-react",
        "via": "Romano Fig 1; SWAB Table 11"
      },
      {
        "name": "Cefixime",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefodizime",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefotaxime",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      },
      {
        "name": "Cefotiam",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefpirome",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefpodoxime",
        "reason": "similar R1 or R2",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftaroline",
        "reason": "partial R1; clinical cross-react",
        "via": "Romano Fig 1; SWAB Table 11"
      },
      {
        "name": "Ceftazidime",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      },
      {
        "name": "Ceftizoxime",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftolozane",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      },
      {
        "name": "Ceftriaxone",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      }
    ],
    "saferFrom": [
      {
        "name": "Amoxicillin",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      },
      {
        "name": "Ampicillin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefaclor",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      },
      {
        "name": "Cefadroxil",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefamandole",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      },
      {
        "name": "Cefatrizine",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefazolin",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      },
      {
        "name": "Cefonicid",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefoperazone",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ceforamide",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefotetan",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefoxitin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefprozil",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefradine",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftezole",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefuroxime",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      },
      {
        "name": "Cephalexin",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      },
      {
        "name": "Cephalothin",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      },
      {
        "name": "Cephapirin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Dicloxacillin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ertapenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Feneticillin",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Flucloxacillin",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Imipenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Loracarbef",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Meropenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Nafcillin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Oxacillin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Penicillin G",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "via": "Romano Fig 1; SWAB Table 11"
      },
      {
        "name": "Penicillin G / V",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Penicillin V",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "via": "Romano Fig 1; SWAB Table 11"
      },
      {
        "name": "Piperacillin",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      },
      {
        "name": "Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      }
    ]
  },
  "beta:Ceftizoxime": {
    "id": "beta:Ceftizoxime",
    "name": "Ceftizoxime",
    "pool": "beta",
    "pending": false,
    "high": [
      {
        "name": "Aztreonam",
        "noteId": "beta:Aztreonam",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefditoren",
        "noteId": "beta:Cefditoren",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefepime",
        "noteId": "beta:Cefepime",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefetamet",
        "noteId": "beta:Cefetamet",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefiderocol",
        "noteId": "beta:Cefiderocol",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefixime",
        "noteId": "beta:Cefixime",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefodizime",
        "noteId": "beta:Cefodizime",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefotaxime",
        "noteId": "beta:Cefotaxime",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefotiam",
        "noteId": "beta:Cefotiam",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefpirome",
        "noteId": "beta:Cefpirome",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefpodoxime",
        "noteId": "beta:Cefpodoxime",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline",
        "noteId": "beta:Ceftaroline",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Ceftazidime",
        "noteId": "beta:Ceftazidime",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Ceftibuten",
        "noteId": "beta:Ceftibuten",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Ceftolozane",
        "noteId": "beta:Ceftolozane",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Ceftriaxone",
        "noteId": "beta:Ceftriaxone",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefuroxime",
        "noteId": "beta:Cefuroxime",
        "reason": "partial R1",
        "pendingRow": false
      }
    ],
    "safer": [
      {
        "name": "Amoxicillin",
        "noteId": "beta:Amoxicillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ampicillin",
        "noteId": "beta:Ampicillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefaclor",
        "noteId": "beta:Cefaclor",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefadroxil",
        "noteId": "beta:Cefadroxil",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefamandole",
        "noteId": "beta:Cefamandole",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefatrizine",
        "noteId": "beta:Cefatrizine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefazolin",
        "noteId": "beta:Cefazolin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefonicid",
        "noteId": "beta:Cefonicid",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefoperazone",
        "noteId": "beta:Cefoperazone",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceforamide",
        "noteId": "beta:Ceforamide",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefoxitin",
        "noteId": "beta:Cefoxitin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefprozil",
        "noteId": "beta:Cefprozil",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefradine",
        "noteId": "beta:Cefradine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cephalexin",
        "noteId": "beta:Cephalexin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cephalothin",
        "noteId": "beta:Cephalothin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Loracarbef",
        "noteId": "beta:Loracarbef",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Penicillin G",
        "noteId": "beta:Penicillin G",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Penicillin V",
        "noteId": "beta:Penicillin V",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Piperacillin",
        "noteId": "beta:Piperacillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Pivmecillinam",
        "noteId": "beta:Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      }
    ],
    "highFrom": [
      {
        "name": "Aztreonam",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefditoren",
        "reason": "identical R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefepime",
        "reason": "identical R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefetamet",
        "reason": "identical R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefiderocol",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefixime",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefodizime",
        "reason": "identical R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefotaxime",
        "reason": "identical R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefotiam",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefpirome",
        "reason": "identical R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefpodoxime",
        "reason": "identical R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftaroline",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftazidime",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftibuten",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftolozane",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftriaxone",
        "reason": "identical R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefuroxime",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      }
    ],
    "saferFrom": [
      {
        "name": "Amoxicillin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ampicillin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefaclor",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefadroxil",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefamandole",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefatrizine",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefazolin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefonicid",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefoperazone",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceforamide",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefoxitin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefprozil",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefradine",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cephalexin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cephalothin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Loracarbef",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Penicillin G",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Penicillin V",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Piperacillin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      }
    ]
  },
  "beta:Ceftriaxone": {
    "id": "beta:Ceftriaxone",
    "name": "Ceftriaxone",
    "pool": "beta",
    "pending": false,
    "high": [
      {
        "name": "Aztreonam",
        "noteId": "beta:Aztreonam",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Cefaclor",
        "noteId": "beta:Cefaclor",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefadroxil",
        "noteId": "beta:Cefadroxil",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefamandole",
        "noteId": "beta:Cefamandole",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefazolin",
        "noteId": "beta:Cefazolin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefdinir",
        "noteId": "beta:Cefdinir",
        "reason": "similar R1 or R2; shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefditoren",
        "noteId": "beta:Cefditoren",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefepime",
        "noteId": "beta:Cefepime",
        "reason": "identical R1; partial R1; almost-identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefetamet",
        "noteId": "beta:Cefetamet",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefiderocol",
        "noteId": "beta:Cefiderocol",
        "reason": "partial R1; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Cefixime",
        "noteId": "beta:Cefixime",
        "reason": "partial R1; similar R1 or R2; shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefodizime",
        "noteId": "beta:Cefodizime",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefotaxime",
        "noteId": "beta:Cefotaxime",
        "reason": "identical R1; almost-identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefotetan",
        "noteId": "beta:Cefotetan",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefotiam",
        "noteId": "beta:Cefotiam",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefoxitin",
        "noteId": "beta:Cefoxitin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefpirome",
        "noteId": "beta:Cefpirome",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefpodoxime",
        "noteId": "beta:Cefpodoxime",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefprozil",
        "noteId": "beta:Cefprozil",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline",
        "noteId": "beta:Ceftaroline",
        "reason": "partial R1; shared R2 or class ring; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Ceftazidime",
        "noteId": "beta:Ceftazidime",
        "reason": "identical R1; partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Ceftibuten",
        "noteId": "beta:Ceftibuten",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Ceftizoxime",
        "noteId": "beta:Ceftizoxime",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Ceftobiprole",
        "noteId": "beta:Ceftobiprole",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftolozane",
        "noteId": "beta:Ceftolozane",
        "reason": "partial R1; similar R1 or R2; shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefuroxime",
        "noteId": "beta:Cefuroxime",
        "reason": "partial R1; similar R1 or R2; shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cephalexin",
        "noteId": "beta:Cephalexin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cephalothin",
        "noteId": "beta:Cephalothin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      }
    ],
    "safer": [
      {
        "name": "Amoxicillin",
        "noteId": "beta:Amoxicillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ampicillin",
        "noteId": "beta:Ampicillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefatrizine",
        "noteId": "beta:Cefatrizine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefonicid",
        "noteId": "beta:Cefonicid",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefoperazone",
        "noteId": "beta:Cefoperazone",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceforamide",
        "noteId": "beta:Ceforamide",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefradine",
        "noteId": "beta:Cefradine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftezole",
        "noteId": "beta:Ceftezole",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cephapirin",
        "noteId": "beta:Cephapirin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Dicloxacillin",
        "noteId": "beta:Dicloxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ertapenem",
        "noteId": "beta:Ertapenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Feneticillin",
        "noteId": "beta:Feneticillin",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Flucloxacillin",
        "noteId": "beta:Flucloxacillin",
        "reason": "no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Imipenem",
        "noteId": "beta:Imipenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Loracarbef",
        "noteId": "beta:Loracarbef",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Meropenem",
        "noteId": "beta:Meropenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Nafcillin",
        "noteId": "beta:Nafcillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Oxacillin",
        "noteId": "beta:Oxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Penicillin G",
        "noteId": "beta:Penicillin G",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Penicillin G / V",
        "noteId": "beta:Penicillin G / V",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Penicillin V",
        "noteId": "beta:Penicillin V",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Piperacillin",
        "noteId": "beta:Piperacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Pivmecillinam",
        "noteId": "beta:Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      }
    ],
    "highFrom": [
      {
        "name": "Aztreonam",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      },
      {
        "name": "Cefaclor",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefadroxil",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefamandole",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefazolin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefdinir",
        "reason": "similar R1 or R2; shared R2 or class ring",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefditoren",
        "reason": "identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefepime",
        "reason": "identical R1; partial R1; almost-identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11; manual transcription"
      },
      {
        "name": "Cefetamet",
        "reason": "identical R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefiderocol",
        "reason": "partial R1; clinical cross-react",
        "via": "Romano Fig 1; SWAB Table 11"
      },
      {
        "name": "Cefixime",
        "reason": "partial R1; similar R1 or R2; shared R2 or class ring",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefodizime",
        "reason": "identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefotaxime",
        "reason": "identical R1; almost-identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11; manual transcription"
      },
      {
        "name": "Cefotetan",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefotiam",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefoxitin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefpirome",
        "reason": "identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefpodoxime",
        "reason": "identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefprozil",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftaroline",
        "reason": "partial R1; shared R2 or class ring; clinical cross-react",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Ceftazidime",
        "reason": "identical R1; partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11; manual transcription"
      },
      {
        "name": "Ceftibuten",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      },
      {
        "name": "Ceftizoxime",
        "reason": "identical R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftobiprole",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftolozane",
        "reason": "partial R1; similar R1 or R2; shared R2 or class ring",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cefuroxime",
        "reason": "partial R1; similar R1 or R2; shared R2 or class ring",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cephalexin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cephalothin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      }
    ],
    "saferFrom": [
      {
        "name": "Amoxicillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Ampicillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefatrizine",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefonicid",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefoperazone",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ceforamide",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefradine",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftezole",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cephapirin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Dicloxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Ertapenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Feneticillin",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Flucloxacillin",
        "reason": "no shared cross-reactivity; no cross-reactivity",
        "via": "Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Imipenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Loracarbef",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Meropenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Nafcillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Oxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Penicillin G",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Penicillin G / V",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Penicillin V",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Piperacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      }
    ]
  },
  "beta:Cefepime": {
    "id": "beta:Cefepime",
    "name": "Cefepime",
    "pool": "beta",
    "pending": false,
    "high": [
      {
        "name": "Aztreonam",
        "noteId": "beta:Aztreonam",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Cefaclor",
        "noteId": "beta:Cefaclor",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefadroxil",
        "noteId": "beta:Cefadroxil",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefamandole",
        "noteId": "beta:Cefamandole",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefazolin",
        "noteId": "beta:Cefazolin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefdinir",
        "noteId": "beta:Cefdinir",
        "reason": "similar R1 or R2; shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefditoren",
        "noteId": "beta:Cefditoren",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefetamet",
        "noteId": "beta:Cefetamet",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefiderocol",
        "noteId": "beta:Cefiderocol",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Cefixime",
        "noteId": "beta:Cefixime",
        "reason": "partial R1; similar R1 or R2; shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefodizime",
        "noteId": "beta:Cefodizime",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefotaxime",
        "noteId": "beta:Cefotaxime",
        "reason": "identical R1; almost-identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefotetan",
        "noteId": "beta:Cefotetan",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefotiam",
        "noteId": "beta:Cefotiam",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefoxitin",
        "noteId": "beta:Cefoxitin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefpirome",
        "noteId": "beta:Cefpirome",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefpodoxime",
        "noteId": "beta:Cefpodoxime",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefprozil",
        "noteId": "beta:Cefprozil",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline",
        "noteId": "beta:Ceftaroline",
        "reason": "partial R1; shared R2 or class ring; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline fosamil",
        "noteId": "beta:Ceftaroline fosamil",
        "reason": "similar R1 or R2; almost-identical R1",
        "pendingRow": false
      },
      {
        "name": "Ceftazidime",
        "noteId": "beta:Ceftazidime",
        "reason": "identical R1; partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Ceftibuten",
        "noteId": "beta:Ceftibuten",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Ceftizoxime",
        "noteId": "beta:Ceftizoxime",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Ceftobiprole",
        "noteId": "beta:Ceftobiprole",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftolozane",
        "noteId": "beta:Ceftolozane",
        "reason": "partial R1; similar R1 or R2; shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftriaxone",
        "noteId": "beta:Ceftriaxone",
        "reason": "identical R1; partial R1; almost-identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefuroxime",
        "noteId": "beta:Cefuroxime",
        "reason": "partial R1; similar R1 or R2; shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cephalexin",
        "noteId": "beta:Cephalexin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cephalothin",
        "noteId": "beta:Cephalothin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      }
    ],
    "safer": [
      {
        "name": "Amoxicillin",
        "noteId": "beta:Amoxicillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ampicillin",
        "noteId": "beta:Ampicillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefatrizine",
        "noteId": "beta:Cefatrizine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefonicid",
        "noteId": "beta:Cefonicid",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefoperazone",
        "noteId": "beta:Cefoperazone",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceforamide",
        "noteId": "beta:Ceforamide",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefradine",
        "noteId": "beta:Cefradine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftezole",
        "noteId": "beta:Ceftezole",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cephapirin",
        "noteId": "beta:Cephapirin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Dicloxacillin",
        "noteId": "beta:Dicloxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ertapenem",
        "noteId": "beta:Ertapenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Feneticillin",
        "noteId": "beta:Feneticillin",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Flucloxacillin",
        "noteId": "beta:Flucloxacillin",
        "reason": "no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Imipenem",
        "noteId": "beta:Imipenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Loracarbef",
        "noteId": "beta:Loracarbef",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Meropenem",
        "noteId": "beta:Meropenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Nafcillin",
        "noteId": "beta:Nafcillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Oxacillin",
        "noteId": "beta:Oxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Penicillin G",
        "noteId": "beta:Penicillin G",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Penicillin G / V",
        "noteId": "beta:Penicillin G / V",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Penicillin V",
        "noteId": "beta:Penicillin V",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Piperacillin",
        "noteId": "beta:Piperacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Pivmecillinam",
        "noteId": "beta:Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      }
    ],
    "highFrom": [
      {
        "name": "Aztreonam",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      },
      {
        "name": "Cefaclor",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefadroxil",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefamandole",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefazolin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefdinir",
        "reason": "similar R1 or R2; shared R2 or class ring",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefditoren",
        "reason": "identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefetamet",
        "reason": "identical R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefiderocol",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      },
      {
        "name": "Cefixime",
        "reason": "partial R1; similar R1 or R2; shared R2 or class ring",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefodizime",
        "reason": "identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefotaxime",
        "reason": "identical R1; almost-identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11; manual transcription"
      },
      {
        "name": "Cefotetan",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefotiam",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefoxitin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefpirome",
        "reason": "identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefpodoxime",
        "reason": "identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefprozil",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftaroline",
        "reason": "partial R1; shared R2 or class ring; clinical cross-react",
        "via": "Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Ceftaroline fosamil",
        "reason": "similar R1 or R2; almost-identical R1",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftazidime",
        "reason": "identical R1; partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11; manual transcription"
      },
      {
        "name": "Ceftibuten",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      },
      {
        "name": "Ceftizoxime",
        "reason": "identical R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftobiprole",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftolozane",
        "reason": "partial R1; similar R1 or R2; shared R2 or class ring",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Ceftriaxone",
        "reason": "identical R1; partial R1; almost-identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11; manual transcription"
      },
      {
        "name": "Cefuroxime",
        "reason": "partial R1; similar R1 or R2; shared R2 or class ring",
        "via": "Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cephalexin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cephalothin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      }
    ],
    "saferFrom": [
      {
        "name": "Amoxicillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Ampicillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefatrizine",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefonicid",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefoperazone",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ceforamide",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefradine",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftezole",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cephapirin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Dicloxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Ertapenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Feneticillin",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Flucloxacillin",
        "reason": "no shared cross-reactivity; no cross-reactivity",
        "via": "Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Imipenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Loracarbef",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Meropenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Nafcillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Oxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Penicillin G",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Penicillin G / V",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Penicillin V",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Piperacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      }
    ]
  },
  "beta:Cefpirome": {
    "id": "beta:Cefpirome",
    "name": "Cefpirome",
    "pool": "beta",
    "pending": false,
    "high": [
      {
        "name": "Aztreonam",
        "noteId": "beta:Aztreonam",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefdinir",
        "noteId": "beta:Cefdinir",
        "reason": "similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefditoren",
        "noteId": "beta:Cefditoren",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefepime",
        "noteId": "beta:Cefepime",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefetamet",
        "noteId": "beta:Cefetamet",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefiderocol",
        "noteId": "beta:Cefiderocol",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefixime",
        "noteId": "beta:Cefixime",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefodizime",
        "noteId": "beta:Cefodizime",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefotaxime",
        "noteId": "beta:Cefotaxime",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefotiam",
        "noteId": "beta:Cefotiam",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefpodoxime",
        "noteId": "beta:Cefpodoxime",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline",
        "noteId": "beta:Ceftaroline",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Ceftazidime",
        "noteId": "beta:Ceftazidime",
        "reason": "similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Ceftibuten",
        "noteId": "beta:Ceftibuten",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Ceftizoxime",
        "noteId": "beta:Ceftizoxime",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Ceftolozane",
        "noteId": "beta:Ceftolozane",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Ceftriaxone",
        "noteId": "beta:Ceftriaxone",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefuroxime",
        "noteId": "beta:Cefuroxime",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      }
    ],
    "safer": [
      {
        "name": "Amoxicillin",
        "noteId": "beta:Amoxicillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ampicillin",
        "noteId": "beta:Ampicillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefaclor",
        "noteId": "beta:Cefaclor",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefadroxil",
        "noteId": "beta:Cefadroxil",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefamandole",
        "noteId": "beta:Cefamandole",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefatrizine",
        "noteId": "beta:Cefatrizine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefazolin",
        "noteId": "beta:Cefazolin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefonicid",
        "noteId": "beta:Cefonicid",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefoperazone",
        "noteId": "beta:Cefoperazone",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceforamide",
        "noteId": "beta:Ceforamide",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefotetan",
        "noteId": "beta:Cefotetan",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefoxitin",
        "noteId": "beta:Cefoxitin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefprozil",
        "noteId": "beta:Cefprozil",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefradine",
        "noteId": "beta:Cefradine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftezole",
        "noteId": "beta:Ceftezole",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cephalexin",
        "noteId": "beta:Cephalexin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cephalothin",
        "noteId": "beta:Cephalothin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cephapirin",
        "noteId": "beta:Cephapirin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Dicloxacillin",
        "noteId": "beta:Dicloxacillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Loracarbef",
        "noteId": "beta:Loracarbef",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Nafcillin",
        "noteId": "beta:Nafcillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Oxacillin",
        "noteId": "beta:Oxacillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Penicillin G",
        "noteId": "beta:Penicillin G",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Penicillin G / V",
        "noteId": "beta:Penicillin G / V",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Penicillin V",
        "noteId": "beta:Penicillin V",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Piperacillin",
        "noteId": "beta:Piperacillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Pivmecillinam",
        "noteId": "beta:Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      }
    ],
    "highFrom": [
      {
        "name": "Aztreonam",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefdinir",
        "reason": "similar R1 or R2",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefditoren",
        "reason": "identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefepime",
        "reason": "identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefetamet",
        "reason": "identical R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefiderocol",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefixime",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefodizime",
        "reason": "identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefotaxime",
        "reason": "identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefotiam",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefpodoxime",
        "reason": "identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ceftaroline",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftazidime",
        "reason": "similar R1 or R2",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftibuten",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ceftizoxime",
        "reason": "identical R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftolozane",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ceftriaxone",
        "reason": "identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefuroxime",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      }
    ],
    "saferFrom": [
      {
        "name": "Amoxicillin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ampicillin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefaclor",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefadroxil",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefamandole",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefatrizine",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefazolin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefonicid",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefoperazone",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ceforamide",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefotetan",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefoxitin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefprozil",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefradine",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftezole",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cephalexin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cephalothin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cephapirin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Dicloxacillin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Loracarbef",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Nafcillin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Oxacillin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Penicillin G",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Penicillin G / V",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Penicillin V",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Piperacillin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      }
    ]
  },
  "beta:Ceftaroline": {
    "id": "beta:Ceftaroline",
    "name": "Ceftaroline",
    "pool": "beta",
    "pending": false,
    "high": [
      {
        "name": "Aztreonam",
        "noteId": "beta:Aztreonam",
        "reason": "partial R1; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Cefaclor",
        "noteId": "beta:Cefaclor",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefadroxil",
        "noteId": "beta:Cefadroxil",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefamandole",
        "noteId": "beta:Cefamandole",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefazolin",
        "noteId": "beta:Cefazolin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefdinir",
        "noteId": "beta:Cefdinir",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefepime",
        "noteId": "beta:Cefepime",
        "reason": "partial R1; shared R2 or class ring; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Cefetamet",
        "noteId": "beta:Cefetamet",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefiderocol",
        "noteId": "beta:Cefiderocol",
        "reason": "partial R1; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Cefixime",
        "noteId": "beta:Cefixime",
        "reason": "partial R1; shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefodizime",
        "noteId": "beta:Cefodizime",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefotaxime",
        "noteId": "beta:Cefotaxime",
        "reason": "partial R1; shared R2 or class ring; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Cefotetan",
        "noteId": "beta:Cefotetan",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefotiam",
        "noteId": "beta:Cefotiam",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefoxitin",
        "noteId": "beta:Cefoxitin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefpirome",
        "noteId": "beta:Cefpirome",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefpodoxime",
        "noteId": "beta:Cefpodoxime",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefprozil",
        "noteId": "beta:Cefprozil",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftazidime",
        "noteId": "beta:Ceftazidime",
        "reason": "partial R1; shared R2 or class ring; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Ceftibuten",
        "noteId": "beta:Ceftibuten",
        "reason": "partial R1; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Ceftizoxime",
        "noteId": "beta:Ceftizoxime",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Ceftobiprole",
        "noteId": "beta:Ceftobiprole",
        "reason": "identical R1; almost-identical R1",
        "pendingRow": false
      },
      {
        "name": "Ceftolozane",
        "noteId": "beta:Ceftolozane",
        "reason": "identical R1; partial R1; almost-identical R1",
        "pendingRow": false
      },
      {
        "name": "Ceftriaxone",
        "noteId": "beta:Ceftriaxone",
        "reason": "partial R1; shared R2 or class ring; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Cefuroxime",
        "noteId": "beta:Cefuroxime",
        "reason": "partial R1; shared R2 or class ring; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Cephalexin",
        "noteId": "beta:Cephalexin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cephalothin",
        "noteId": "beta:Cephalothin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      }
    ],
    "safer": [
      {
        "name": "Amoxicillin",
        "noteId": "beta:Amoxicillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ampicillin",
        "noteId": "beta:Ampicillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefatrizine",
        "noteId": "beta:Cefatrizine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefonicid",
        "noteId": "beta:Cefonicid",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefoperazone",
        "noteId": "beta:Cefoperazone",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceforamide",
        "noteId": "beta:Ceforamide",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefradine",
        "noteId": "beta:Cefradine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Dicloxacillin",
        "noteId": "beta:Dicloxacillin",
        "reason": "no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ertapenem",
        "noteId": "beta:Ertapenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Feneticillin",
        "noteId": "beta:Feneticillin",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Flucloxacillin",
        "noteId": "beta:Flucloxacillin",
        "reason": "no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Imipenem",
        "noteId": "beta:Imipenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Loracarbef",
        "noteId": "beta:Loracarbef",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Meropenem",
        "noteId": "beta:Meropenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Nafcillin",
        "noteId": "beta:Nafcillin",
        "reason": "no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Oxacillin",
        "noteId": "beta:Oxacillin",
        "reason": "no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Penicillin G",
        "noteId": "beta:Penicillin G",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Penicillin V",
        "noteId": "beta:Penicillin V",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Piperacillin",
        "noteId": "beta:Piperacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Pivmecillinam",
        "noteId": "beta:Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      }
    ],
    "highFrom": [
      {
        "name": "Aztreonam",
        "reason": "partial R1; clinical cross-react",
        "via": "Romano Fig 1; SWAB Table 11"
      },
      {
        "name": "Cefaclor",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefadroxil",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefamandole",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefazolin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefdinir",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefepime",
        "reason": "partial R1; shared R2 or class ring; clinical cross-react",
        "via": "Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cefetamet",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefiderocol",
        "reason": "partial R1; clinical cross-react",
        "via": "Romano Fig 1; SWAB Table 11"
      },
      {
        "name": "Cefixime",
        "reason": "partial R1; shared R2 or class ring",
        "via": "Romano Fig 1; Trubiano Fig C3"
      },
      {
        "name": "Cefodizime",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefotaxime",
        "reason": "partial R1; shared R2 or class ring; clinical cross-react",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cefotetan",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefotiam",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefoxitin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefpirome",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefpodoxime",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefprozil",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftazidime",
        "reason": "partial R1; shared R2 or class ring; clinical cross-react",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Ceftibuten",
        "reason": "partial R1; clinical cross-react",
        "via": "Romano Fig 1; SWAB Table 11"
      },
      {
        "name": "Ceftizoxime",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftobiprole",
        "reason": "identical R1; almost-identical R1",
        "via": "Trubiano Fig C3; manual transcription"
      },
      {
        "name": "Ceftolozane",
        "reason": "identical R1; partial R1; almost-identical R1",
        "via": "Trubiano Fig C3; SWAB Table 11; manual transcription"
      },
      {
        "name": "Ceftriaxone",
        "reason": "partial R1; shared R2 or class ring; clinical cross-react",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cefuroxime",
        "reason": "partial R1; shared R2 or class ring; clinical cross-react",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cephalexin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cephalothin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      }
    ],
    "saferFrom": [
      {
        "name": "Amoxicillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Ampicillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Romano Fig 1; Trubiano Fig C3"
      },
      {
        "name": "Cefatrizine",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefonicid",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefoperazone",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceforamide",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefradine",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Dicloxacillin",
        "reason": "no shared cross-reactivity",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ertapenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Feneticillin",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Flucloxacillin",
        "reason": "no shared cross-reactivity; no cross-reactivity",
        "via": "Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Imipenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Loracarbef",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Meropenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Nafcillin",
        "reason": "no shared cross-reactivity",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Oxacillin",
        "reason": "no shared cross-reactivity",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Penicillin G",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Penicillin V",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Piperacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      }
    ]
  },
  "beta:Ceftobiprole": {
    "id": "beta:Ceftobiprole",
    "name": "Ceftobiprole",
    "pool": "beta",
    "pending": false,
    "high": [
      {
        "name": "Cefaclor",
        "noteId": "beta:Cefaclor",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefadroxil",
        "noteId": "beta:Cefadroxil",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefamandole",
        "noteId": "beta:Cefamandole",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefazolin",
        "noteId": "beta:Cefazolin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefdinir",
        "noteId": "beta:Cefdinir",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefepime",
        "noteId": "beta:Cefepime",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefixime",
        "noteId": "beta:Cefixime",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefotaxime",
        "noteId": "beta:Cefotaxime",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefotetan",
        "noteId": "beta:Cefotetan",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefoxitin",
        "noteId": "beta:Cefoxitin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefprozil",
        "noteId": "beta:Cefprozil",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline",
        "noteId": "beta:Ceftaroline",
        "reason": "identical R1; almost-identical R1",
        "pendingRow": false
      },
      {
        "name": "Ceftazidime",
        "noteId": "beta:Ceftazidime",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftolozane",
        "noteId": "beta:Ceftolozane",
        "reason": "identical R1; almost-identical R1",
        "pendingRow": false
      },
      {
        "name": "Ceftriaxone",
        "noteId": "beta:Ceftriaxone",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefuroxime",
        "noteId": "beta:Cefuroxime",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cephalexin",
        "noteId": "beta:Cephalexin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cephalothin",
        "noteId": "beta:Cephalothin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      }
    ],
    "safer": [
      {
        "name": "Amoxicillin",
        "noteId": "beta:Amoxicillin",
        "reason": "no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ampicillin",
        "noteId": "beta:Ampicillin",
        "reason": "no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Aztreonam",
        "noteId": "beta:Aztreonam",
        "reason": "no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Dicloxacillin",
        "noteId": "beta:Dicloxacillin",
        "reason": "no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Flucloxacillin",
        "noteId": "beta:Flucloxacillin",
        "reason": "no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Nafcillin",
        "noteId": "beta:Nafcillin",
        "reason": "no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Oxacillin",
        "noteId": "beta:Oxacillin",
        "reason": "no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Penicillin G",
        "noteId": "beta:Penicillin G",
        "reason": "no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Penicillin V",
        "noteId": "beta:Penicillin V",
        "reason": "no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Piperacillin",
        "noteId": "beta:Piperacillin",
        "reason": "no shared cross-reactivity",
        "pendingRow": false
      }
    ],
    "highFrom": [
      {
        "name": "Cefaclor",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefadroxil",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefamandole",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefazolin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefdinir",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefepime",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefixime",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefotaxime",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefotetan",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefoxitin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefprozil",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftaroline",
        "reason": "identical R1; almost-identical R1",
        "via": "Trubiano Fig C3; manual transcription"
      },
      {
        "name": "Ceftazidime",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftolozane",
        "reason": "identical R1; almost-identical R1",
        "via": "Trubiano Fig C3; manual transcription"
      },
      {
        "name": "Ceftriaxone",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefuroxime",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cephalexin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cephalothin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      }
    ],
    "saferFrom": [
      {
        "name": "Amoxicillin",
        "reason": "no shared cross-reactivity",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ampicillin",
        "reason": "no shared cross-reactivity",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Aztreonam",
        "reason": "no shared cross-reactivity",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Dicloxacillin",
        "reason": "no shared cross-reactivity",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Flucloxacillin",
        "reason": "no shared cross-reactivity",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Nafcillin",
        "reason": "no shared cross-reactivity",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Oxacillin",
        "reason": "no shared cross-reactivity",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Penicillin G",
        "reason": "no shared cross-reactivity",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Penicillin V",
        "reason": "no shared cross-reactivity",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Piperacillin",
        "reason": "no shared cross-reactivity",
        "via": "Trubiano Fig C3"
      }
    ]
  },
  "beta:Ceftolozane": {
    "id": "beta:Ceftolozane",
    "name": "Ceftolozane",
    "pool": "beta",
    "pending": false,
    "high": [
      {
        "name": "Aztreonam",
        "noteId": "beta:Aztreonam",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Cefaclor",
        "noteId": "beta:Cefaclor",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefadroxil",
        "noteId": "beta:Cefadroxil",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefamandole",
        "noteId": "beta:Cefamandole",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefazolin",
        "noteId": "beta:Cefazolin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefdinir",
        "noteId": "beta:Cefdinir",
        "reason": "similar R1 or R2; shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefditoren",
        "noteId": "beta:Cefditoren",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefepime",
        "noteId": "beta:Cefepime",
        "reason": "partial R1; similar R1 or R2; shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefetamet",
        "noteId": "beta:Cefetamet",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefiderocol",
        "noteId": "beta:Cefiderocol",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Cefixime",
        "noteId": "beta:Cefixime",
        "reason": "partial R1; similar R1 or R2; shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefodizime",
        "noteId": "beta:Cefodizime",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefotaxime",
        "noteId": "beta:Cefotaxime",
        "reason": "partial R1; shared R2 or class ring; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Cefotetan",
        "noteId": "beta:Cefotetan",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefotiam",
        "noteId": "beta:Cefotiam",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefoxitin",
        "noteId": "beta:Cefoxitin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefpirome",
        "noteId": "beta:Cefpirome",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefpodoxime",
        "noteId": "beta:Cefpodoxime",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefprozil",
        "noteId": "beta:Cefprozil",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline",
        "noteId": "beta:Ceftaroline",
        "reason": "identical R1; partial R1; almost-identical R1",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline fosamil",
        "noteId": "beta:Ceftaroline fosamil",
        "reason": "similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Ceftazidime",
        "noteId": "beta:Ceftazidime",
        "reason": "partial R1; shared R2 or class ring; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Ceftibuten",
        "noteId": "beta:Ceftibuten",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Ceftizoxime",
        "noteId": "beta:Ceftizoxime",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Ceftobiprole",
        "noteId": "beta:Ceftobiprole",
        "reason": "identical R1; almost-identical R1",
        "pendingRow": false
      },
      {
        "name": "Ceftriaxone",
        "noteId": "beta:Ceftriaxone",
        "reason": "partial R1; similar R1 or R2; shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cefuroxime",
        "noteId": "beta:Cefuroxime",
        "reason": "partial R1; shared R2 or class ring; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Cephalexin",
        "noteId": "beta:Cephalexin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      },
      {
        "name": "Cephalothin",
        "noteId": "beta:Cephalothin",
        "reason": "shared R2 or class ring",
        "pendingRow": false
      }
    ],
    "safer": [
      {
        "name": "Amoxicillin",
        "noteId": "beta:Amoxicillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ampicillin",
        "noteId": "beta:Ampicillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefatrizine",
        "noteId": "beta:Cefatrizine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefonicid",
        "noteId": "beta:Cefonicid",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefoperazone",
        "noteId": "beta:Cefoperazone",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceforamide",
        "noteId": "beta:Ceforamide",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefradine",
        "noteId": "beta:Cefradine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftezole",
        "noteId": "beta:Ceftezole",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cephapirin",
        "noteId": "beta:Cephapirin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Dicloxacillin",
        "noteId": "beta:Dicloxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ertapenem",
        "noteId": "beta:Ertapenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Feneticillin",
        "noteId": "beta:Feneticillin",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Flucloxacillin",
        "noteId": "beta:Flucloxacillin",
        "reason": "no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Imipenem",
        "noteId": "beta:Imipenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Loracarbef",
        "noteId": "beta:Loracarbef",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Meropenem",
        "noteId": "beta:Meropenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Nafcillin",
        "noteId": "beta:Nafcillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Oxacillin",
        "noteId": "beta:Oxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Penicillin G",
        "noteId": "beta:Penicillin G",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Penicillin G / V",
        "noteId": "beta:Penicillin G / V",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Penicillin V",
        "noteId": "beta:Penicillin V",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Piperacillin",
        "noteId": "beta:Piperacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Pivmecillinam",
        "noteId": "beta:Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      }
    ],
    "highFrom": [
      {
        "name": "Aztreonam",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      },
      {
        "name": "Cefaclor",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefadroxil",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefamandole",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefazolin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefdinir",
        "reason": "similar R1 or R2; shared R2 or class ring",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefditoren",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefepime",
        "reason": "partial R1; similar R1 or R2; shared R2 or class ring",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cefetamet",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefiderocol",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      },
      {
        "name": "Cefixime",
        "reason": "partial R1; similar R1 or R2; shared R2 or class ring",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefodizime",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefotaxime",
        "reason": "partial R1; shared R2 or class ring; clinical cross-react",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cefotetan",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefotiam",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefoxitin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cefpirome",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefpodoxime",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefprozil",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Ceftaroline",
        "reason": "identical R1; partial R1; almost-identical R1",
        "via": "Trubiano Fig C3; SWAB Table 11; manual transcription"
      },
      {
        "name": "Ceftaroline fosamil",
        "reason": "similar R1 or R2",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftazidime",
        "reason": "partial R1; shared R2 or class ring; clinical cross-react",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Ceftibuten",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      },
      {
        "name": "Ceftizoxime",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftobiprole",
        "reason": "identical R1; almost-identical R1",
        "via": "Trubiano Fig C3; manual transcription"
      },
      {
        "name": "Ceftriaxone",
        "reason": "partial R1; similar R1 or R2; shared R2 or class ring",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cefuroxime",
        "reason": "partial R1; shared R2 or class ring; clinical cross-react",
        "via": "Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cephalexin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cephalothin",
        "reason": "shared R2 or class ring",
        "via": "Trubiano Fig C3"
      }
    ],
    "saferFrom": [
      {
        "name": "Amoxicillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Ampicillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefatrizine",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefonicid",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefoperazone",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ceforamide",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefradine",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftezole",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cephapirin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Dicloxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Ertapenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Feneticillin",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Flucloxacillin",
        "reason": "no shared cross-reactivity; no cross-reactivity",
        "via": "Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Imipenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Loracarbef",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Meropenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Nafcillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Oxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Penicillin G",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Penicillin G / V",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Penicillin V",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Piperacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      }
    ]
  },
  "beta:Cefiderocol": {
    "id": "beta:Cefiderocol",
    "name": "Cefiderocol",
    "pool": "beta",
    "pending": false,
    "high": [
      {
        "name": "Aztreonam",
        "noteId": "beta:Aztreonam",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefditoren",
        "noteId": "beta:Cefditoren",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefepime",
        "noteId": "beta:Cefepime",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Cefetamet",
        "noteId": "beta:Cefetamet",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefixime",
        "noteId": "beta:Cefixime",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefodizime",
        "noteId": "beta:Cefodizime",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefotaxime",
        "noteId": "beta:Cefotaxime",
        "reason": "partial R1; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Cefotiam",
        "noteId": "beta:Cefotiam",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefpirome",
        "noteId": "beta:Cefpirome",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefpodoxime",
        "noteId": "beta:Cefpodoxime",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline",
        "noteId": "beta:Ceftaroline",
        "reason": "partial R1; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Ceftazidime",
        "noteId": "beta:Ceftazidime",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Ceftibuten",
        "noteId": "beta:Ceftibuten",
        "reason": "partial R1; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Ceftizoxime",
        "noteId": "beta:Ceftizoxime",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Ceftolozane",
        "noteId": "beta:Ceftolozane",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Ceftriaxone",
        "noteId": "beta:Ceftriaxone",
        "reason": "partial R1; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Cefuroxime",
        "noteId": "beta:Cefuroxime",
        "reason": "partial R1; clinical cross-react",
        "pendingRow": false
      }
    ],
    "safer": [
      {
        "name": "Amoxicillin",
        "noteId": "beta:Amoxicillin",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ampicillin",
        "noteId": "beta:Ampicillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefaclor",
        "noteId": "beta:Cefaclor",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefadroxil",
        "noteId": "beta:Cefadroxil",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefamandole",
        "noteId": "beta:Cefamandole",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefatrizine",
        "noteId": "beta:Cefatrizine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefazolin",
        "noteId": "beta:Cefazolin",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefonicid",
        "noteId": "beta:Cefonicid",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefoperazone",
        "noteId": "beta:Cefoperazone",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceforamide",
        "noteId": "beta:Ceforamide",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefotetan",
        "noteId": "beta:Cefotetan",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefoxitin",
        "noteId": "beta:Cefoxitin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefprozil",
        "noteId": "beta:Cefprozil",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefradine",
        "noteId": "beta:Cefradine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftezole",
        "noteId": "beta:Ceftezole",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cephalexin",
        "noteId": "beta:Cephalexin",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cephalothin",
        "noteId": "beta:Cephalothin",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cephapirin",
        "noteId": "beta:Cephapirin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Dicloxacillin",
        "noteId": "beta:Dicloxacillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ertapenem",
        "noteId": "beta:Ertapenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Feneticillin",
        "noteId": "beta:Feneticillin",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Flucloxacillin",
        "noteId": "beta:Flucloxacillin",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Imipenem",
        "noteId": "beta:Imipenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Loracarbef",
        "noteId": "beta:Loracarbef",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Meropenem",
        "noteId": "beta:Meropenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Nafcillin",
        "noteId": "beta:Nafcillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Oxacillin",
        "noteId": "beta:Oxacillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Penicillin G",
        "noteId": "beta:Penicillin G",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Penicillin G / V",
        "noteId": "beta:Penicillin G / V",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Penicillin V",
        "noteId": "beta:Penicillin V",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Piperacillin",
        "noteId": "beta:Piperacillin",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Pivmecillinam",
        "noteId": "beta:Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      }
    ],
    "highFrom": [
      {
        "name": "Aztreonam",
        "reason": "identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11; manual transcription"
      },
      {
        "name": "Cefditoren",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefepime",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      },
      {
        "name": "Cefetamet",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefixime",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefodizime",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefotaxime",
        "reason": "partial R1; clinical cross-react",
        "via": "Romano Fig 1; SWAB Table 11"
      },
      {
        "name": "Cefotiam",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefpirome",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefpodoxime",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftaroline",
        "reason": "partial R1; clinical cross-react",
        "via": "Romano Fig 1; SWAB Table 11"
      },
      {
        "name": "Ceftazidime",
        "reason": "identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11; manual transcription"
      },
      {
        "name": "Ceftibuten",
        "reason": "partial R1; clinical cross-react",
        "via": "Romano Fig 1; SWAB Table 11"
      },
      {
        "name": "Ceftizoxime",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftolozane",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      },
      {
        "name": "Ceftriaxone",
        "reason": "partial R1; clinical cross-react",
        "via": "Romano Fig 1; SWAB Table 11"
      },
      {
        "name": "Cefuroxime",
        "reason": "partial R1; clinical cross-react",
        "via": "SWAB Table 11"
      }
    ],
    "saferFrom": [
      {
        "name": "Amoxicillin",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      },
      {
        "name": "Ampicillin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefaclor",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      },
      {
        "name": "Cefadroxil",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefamandole",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      },
      {
        "name": "Cefatrizine",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefazolin",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      },
      {
        "name": "Cefonicid",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefoperazone",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ceforamide",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefotetan",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefoxitin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefprozil",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefradine",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftezole",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cephalexin",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      },
      {
        "name": "Cephalothin",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      },
      {
        "name": "Cephapirin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Dicloxacillin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ertapenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Feneticillin",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Flucloxacillin",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Imipenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Loracarbef",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Meropenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Nafcillin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Oxacillin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Penicillin G",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "via": "Romano Fig 1; SWAB Table 11"
      },
      {
        "name": "Penicillin G / V",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Penicillin V",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "via": "Romano Fig 1; SWAB Table 11"
      },
      {
        "name": "Piperacillin",
        "reason": "no R1/R2 similarity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      },
      {
        "name": "Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      }
    ]
  },
  "beta:Ertapenem": {
    "id": "beta:Ertapenem",
    "name": "Ertapenem",
    "pool": "beta",
    "pending": false,
    "high": [
      {
        "name": "Imipenem",
        "noteId": "beta:Imipenem",
        "reason": "partial R1; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Meropenem",
        "noteId": "beta:Meropenem",
        "reason": "partial R1; clinical cross-react",
        "pendingRow": false
      }
    ],
    "safer": [
      {
        "name": "Amoxicillin",
        "noteId": "beta:Amoxicillin",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Aztreonam",
        "noteId": "beta:Aztreonam",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefaclor",
        "noteId": "beta:Cefaclor",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefamandole",
        "noteId": "beta:Cefamandole",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefazolin",
        "noteId": "beta:Cefazolin",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefepime",
        "noteId": "beta:Cefepime",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefiderocol",
        "noteId": "beta:Cefiderocol",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefotaxime",
        "noteId": "beta:Cefotaxime",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline",
        "noteId": "beta:Ceftaroline",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftazidime",
        "noteId": "beta:Ceftazidime",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftibuten",
        "noteId": "beta:Ceftibuten",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftolozane",
        "noteId": "beta:Ceftolozane",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftriaxone",
        "noteId": "beta:Ceftriaxone",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefuroxime",
        "noteId": "beta:Cefuroxime",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cephalexin",
        "noteId": "beta:Cephalexin",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cephalothin",
        "noteId": "beta:Cephalothin",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Feneticillin",
        "noteId": "beta:Feneticillin",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Flucloxacillin",
        "noteId": "beta:Flucloxacillin",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Penicillin G",
        "noteId": "beta:Penicillin G",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Penicillin V",
        "noteId": "beta:Penicillin V",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Piperacillin",
        "noteId": "beta:Piperacillin",
        "reason": "no cross-reactivity",
        "pendingRow": false
      }
    ],
    "highFrom": [
      {
        "name": "Imipenem",
        "reason": "partial R1; clinical cross-react",
        "via": "SWAB Table 11"
      },
      {
        "name": "Meropenem",
        "reason": "partial R1; clinical cross-react",
        "via": "SWAB Table 11"
      }
    ],
    "saferFrom": [
      {
        "name": "Amoxicillin",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Aztreonam",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Cefaclor",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Cefamandole",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Cefazolin",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Cefepime",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Cefiderocol",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Cefotaxime",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Ceftaroline",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Ceftazidime",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Ceftibuten",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Ceftolozane",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Ceftriaxone",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Cefuroxime",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Cephalexin",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Cephalothin",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Feneticillin",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Flucloxacillin",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Penicillin G",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Penicillin V",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Piperacillin",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      }
    ]
  },
  "beta:Imipenem": {
    "id": "beta:Imipenem",
    "name": "Imipenem",
    "pool": "beta",
    "pending": false,
    "high": [
      {
        "name": "Ertapenem",
        "noteId": "beta:Ertapenem",
        "reason": "partial R1; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Meropenem",
        "noteId": "beta:Meropenem",
        "reason": "partial R1; clinical cross-react",
        "pendingRow": false
      }
    ],
    "safer": [
      {
        "name": "Amoxicillin",
        "noteId": "beta:Amoxicillin",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Aztreonam",
        "noteId": "beta:Aztreonam",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefaclor",
        "noteId": "beta:Cefaclor",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefamandole",
        "noteId": "beta:Cefamandole",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefazolin",
        "noteId": "beta:Cefazolin",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefepime",
        "noteId": "beta:Cefepime",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefiderocol",
        "noteId": "beta:Cefiderocol",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefotaxime",
        "noteId": "beta:Cefotaxime",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline",
        "noteId": "beta:Ceftaroline",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftazidime",
        "noteId": "beta:Ceftazidime",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftibuten",
        "noteId": "beta:Ceftibuten",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftolozane",
        "noteId": "beta:Ceftolozane",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftriaxone",
        "noteId": "beta:Ceftriaxone",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefuroxime",
        "noteId": "beta:Cefuroxime",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cephalexin",
        "noteId": "beta:Cephalexin",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cephalothin",
        "noteId": "beta:Cephalothin",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Feneticillin",
        "noteId": "beta:Feneticillin",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Flucloxacillin",
        "noteId": "beta:Flucloxacillin",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Penicillin G",
        "noteId": "beta:Penicillin G",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Penicillin V",
        "noteId": "beta:Penicillin V",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Piperacillin",
        "noteId": "beta:Piperacillin",
        "reason": "no cross-reactivity",
        "pendingRow": false
      }
    ],
    "highFrom": [
      {
        "name": "Ertapenem",
        "reason": "partial R1; clinical cross-react",
        "via": "SWAB Table 11"
      },
      {
        "name": "Meropenem",
        "reason": "partial R1; clinical cross-react",
        "via": "SWAB Table 11"
      }
    ],
    "saferFrom": [
      {
        "name": "Amoxicillin",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Aztreonam",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Cefaclor",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Cefamandole",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Cefazolin",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Cefepime",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Cefiderocol",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Cefotaxime",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Ceftaroline",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Ceftazidime",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Ceftibuten",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Ceftolozane",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Ceftriaxone",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Cefuroxime",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Cephalexin",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Cephalothin",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Feneticillin",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Flucloxacillin",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Penicillin G",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Penicillin V",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Piperacillin",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      }
    ]
  },
  "beta:Meropenem": {
    "id": "beta:Meropenem",
    "name": "Meropenem",
    "pool": "beta",
    "pending": false,
    "high": [
      {
        "name": "Ertapenem",
        "noteId": "beta:Ertapenem",
        "reason": "partial R1; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Imipenem",
        "noteId": "beta:Imipenem",
        "reason": "partial R1; clinical cross-react",
        "pendingRow": false
      }
    ],
    "safer": [
      {
        "name": "Amoxicillin",
        "noteId": "beta:Amoxicillin",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Aztreonam",
        "noteId": "beta:Aztreonam",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefaclor",
        "noteId": "beta:Cefaclor",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefamandole",
        "noteId": "beta:Cefamandole",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefazolin",
        "noteId": "beta:Cefazolin",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefepime",
        "noteId": "beta:Cefepime",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefiderocol",
        "noteId": "beta:Cefiderocol",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefotaxime",
        "noteId": "beta:Cefotaxime",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline",
        "noteId": "beta:Ceftaroline",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftazidime",
        "noteId": "beta:Ceftazidime",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftibuten",
        "noteId": "beta:Ceftibuten",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftolozane",
        "noteId": "beta:Ceftolozane",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ceftriaxone",
        "noteId": "beta:Ceftriaxone",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefuroxime",
        "noteId": "beta:Cefuroxime",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cephalexin",
        "noteId": "beta:Cephalexin",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cephalothin",
        "noteId": "beta:Cephalothin",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Feneticillin",
        "noteId": "beta:Feneticillin",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Flucloxacillin",
        "noteId": "beta:Flucloxacillin",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Penicillin G",
        "noteId": "beta:Penicillin G",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Penicillin V",
        "noteId": "beta:Penicillin V",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Piperacillin",
        "noteId": "beta:Piperacillin",
        "reason": "no cross-reactivity",
        "pendingRow": false
      }
    ],
    "highFrom": [
      {
        "name": "Ertapenem",
        "reason": "partial R1; clinical cross-react",
        "via": "SWAB Table 11"
      },
      {
        "name": "Imipenem",
        "reason": "partial R1; clinical cross-react",
        "via": "SWAB Table 11"
      }
    ],
    "saferFrom": [
      {
        "name": "Amoxicillin",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Aztreonam",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Cefaclor",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Cefamandole",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Cefazolin",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Cefepime",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Cefiderocol",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Cefotaxime",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Ceftaroline",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Ceftazidime",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Ceftibuten",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Ceftolozane",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Ceftriaxone",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Cefuroxime",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Cephalexin",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Cephalothin",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Feneticillin",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Flucloxacillin",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Penicillin G",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Penicillin V",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Piperacillin",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      }
    ]
  },
  "beta:Aztreonam": {
    "id": "beta:Aztreonam",
    "name": "Aztreonam",
    "pool": "beta",
    "pending": false,
    "high": [
      {
        "name": "Cefdinir",
        "noteId": "beta:Cefdinir",
        "reason": "similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefditoren",
        "noteId": "beta:Cefditoren",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefepime",
        "noteId": "beta:Cefepime",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Cefetamet",
        "noteId": "beta:Cefetamet",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefiderocol",
        "noteId": "beta:Cefiderocol",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefixime",
        "noteId": "beta:Cefixime",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefodizime",
        "noteId": "beta:Cefodizime",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefotaxime",
        "noteId": "beta:Cefotaxime",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Cefotiam",
        "noteId": "beta:Cefotiam",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefpirome",
        "noteId": "beta:Cefpirome",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefpodoxime",
        "noteId": "beta:Cefpodoxime",
        "reason": "partial R1; similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline",
        "noteId": "beta:Ceftaroline",
        "reason": "partial R1; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Ceftazidime",
        "noteId": "beta:Ceftazidime",
        "reason": "identical R1; almost-identical R1",
        "pendingRow": false
      },
      {
        "name": "Ceftibuten",
        "noteId": "beta:Ceftibuten",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Ceftizoxime",
        "noteId": "beta:Ceftizoxime",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Ceftolozane",
        "noteId": "beta:Ceftolozane",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Ceftriaxone",
        "noteId": "beta:Ceftriaxone",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "pendingRow": false
      },
      {
        "name": "Cefuroxime",
        "noteId": "beta:Cefuroxime",
        "reason": "partial R1; clinical cross-react",
        "pendingRow": false
      }
    ],
    "safer": [
      {
        "name": "Amoxicillin",
        "noteId": "beta:Amoxicillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ampicillin",
        "noteId": "beta:Ampicillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefaclor",
        "noteId": "beta:Cefaclor",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefadroxil",
        "noteId": "beta:Cefadroxil",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefamandole",
        "noteId": "beta:Cefamandole",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefatrizine",
        "noteId": "beta:Cefatrizine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefazolin",
        "noteId": "beta:Cefazolin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefonicid",
        "noteId": "beta:Cefonicid",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefoperazone",
        "noteId": "beta:Cefoperazone",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceforamide",
        "noteId": "beta:Ceforamide",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefotetan",
        "noteId": "beta:Cefotetan",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefoxitin",
        "noteId": "beta:Cefoxitin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefprozil",
        "noteId": "beta:Cefprozil",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cefradine",
        "noteId": "beta:Cefradine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftezole",
        "noteId": "beta:Ceftezole",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftobiprole",
        "noteId": "beta:Ceftobiprole",
        "reason": "no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cephalexin",
        "noteId": "beta:Cephalexin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cephalothin",
        "noteId": "beta:Cephalothin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Cephapirin",
        "noteId": "beta:Cephapirin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Dicloxacillin",
        "noteId": "beta:Dicloxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Ertapenem",
        "noteId": "beta:Ertapenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Feneticillin",
        "noteId": "beta:Feneticillin",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Flucloxacillin",
        "noteId": "beta:Flucloxacillin",
        "reason": "no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Imipenem",
        "noteId": "beta:Imipenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Loracarbef",
        "noteId": "beta:Loracarbef",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Meropenem",
        "noteId": "beta:Meropenem",
        "reason": "no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Nafcillin",
        "noteId": "beta:Nafcillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Oxacillin",
        "noteId": "beta:Oxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Penicillin G",
        "noteId": "beta:Penicillin G",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Penicillin G / V",
        "noteId": "beta:Penicillin G / V",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Penicillin V",
        "noteId": "beta:Penicillin V",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Piperacillin",
        "noteId": "beta:Piperacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "pendingRow": false
      },
      {
        "name": "Pivmecillinam",
        "noteId": "beta:Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      }
    ],
    "highFrom": [
      {
        "name": "Cefdinir",
        "reason": "similar R1 or R2",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefditoren",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefepime",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      },
      {
        "name": "Cefetamet",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefiderocol",
        "reason": "identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11; manual transcription"
      },
      {
        "name": "Cefixime",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefodizime",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefotaxime",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      },
      {
        "name": "Cefotiam",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefpirome",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefpodoxime",
        "reason": "partial R1; similar R1 or R2",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ceftaroline",
        "reason": "partial R1; clinical cross-react",
        "via": "Romano Fig 1; SWAB Table 11"
      },
      {
        "name": "Ceftazidime",
        "reason": "identical R1; almost-identical R1",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11; manual transcription"
      },
      {
        "name": "Ceftibuten",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      },
      {
        "name": "Ceftizoxime",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftolozane",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      },
      {
        "name": "Ceftriaxone",
        "reason": "partial R1; similar R1 or R2; clinical cross-react",
        "via": "Romano Fig 1; Zagursky Fig 3; SWAB Table 11"
      },
      {
        "name": "Cefuroxime",
        "reason": "partial R1; clinical cross-react",
        "via": "Romano Fig 1; SWAB Table 11"
      }
    ],
    "saferFrom": [
      {
        "name": "Amoxicillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Ampicillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefaclor",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cefadroxil",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefamandole",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cefatrizine",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefazolin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cefonicid",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Cefoperazone",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1; Zagursky Fig 3"
      },
      {
        "name": "Ceforamide",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefotetan",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefoxitin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefprozil",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Cefradine",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftezole",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftobiprole",
        "reason": "no shared cross-reactivity",
        "via": "Trubiano Fig C3"
      },
      {
        "name": "Cephalexin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cephalothin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Cephapirin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Dicloxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Ertapenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Feneticillin",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Flucloxacillin",
        "reason": "no shared cross-reactivity; no cross-reactivity",
        "via": "Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Imipenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Loracarbef",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Meropenem",
        "reason": "no cross-reactivity",
        "via": "SWAB Table 11"
      },
      {
        "name": "Nafcillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Oxacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity",
        "via": "Zagursky Fig 3; Trubiano Fig C3"
      },
      {
        "name": "Penicillin G",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Penicillin G / V",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Penicillin V",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Piperacillin",
        "reason": "no R1/R2 similarity; no shared cross-reactivity; no cross-reactivity",
        "via": "Romano Fig 1; Zagursky Fig 3; Trubiano Fig C3; SWAB Table 11"
      },
      {
        "name": "Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      }
    ]
  },
  "beta:Cefetamet": {
    "id": "beta:Cefetamet",
    "name": "Cefetamet",
    "pool": "beta",
    "pending": false,
    "high": [
      {
        "name": "Aztreonam",
        "noteId": "beta:Aztreonam",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefditoren",
        "noteId": "beta:Cefditoren",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefepime",
        "noteId": "beta:Cefepime",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefiderocol",
        "noteId": "beta:Cefiderocol",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefixime",
        "noteId": "beta:Cefixime",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefodizime",
        "noteId": "beta:Cefodizime",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefotaxime",
        "noteId": "beta:Cefotaxime",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefotiam",
        "noteId": "beta:Cefotiam",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Cefpirome",
        "noteId": "beta:Cefpirome",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefpodoxime",
        "noteId": "beta:Cefpodoxime",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline",
        "noteId": "beta:Ceftaroline",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Ceftazidime",
        "noteId": "beta:Ceftazidime",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Ceftibuten",
        "noteId": "beta:Ceftibuten",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Ceftizoxime",
        "noteId": "beta:Ceftizoxime",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Ceftolozane",
        "noteId": "beta:Ceftolozane",
        "reason": "partial R1",
        "pendingRow": false
      },
      {
        "name": "Ceftriaxone",
        "noteId": "beta:Ceftriaxone",
        "reason": "identical R1",
        "pendingRow": false
      },
      {
        "name": "Cefuroxime",
        "noteId": "beta:Cefuroxime",
        "reason": "partial R1",
        "pendingRow": false
      }
    ],
    "safer": [
      {
        "name": "Amoxicillin",
        "noteId": "beta:Amoxicillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ampicillin",
        "noteId": "beta:Ampicillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefaclor",
        "noteId": "beta:Cefaclor",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefadroxil",
        "noteId": "beta:Cefadroxil",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefamandole",
        "noteId": "beta:Cefamandole",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefatrizine",
        "noteId": "beta:Cefatrizine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefazolin",
        "noteId": "beta:Cefazolin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefonicid",
        "noteId": "beta:Cefonicid",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefoperazone",
        "noteId": "beta:Cefoperazone",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceforamide",
        "noteId": "beta:Ceforamide",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefoxitin",
        "noteId": "beta:Cefoxitin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefprozil",
        "noteId": "beta:Cefprozil",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefradine",
        "noteId": "beta:Cefradine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cephalexin",
        "noteId": "beta:Cephalexin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cephalothin",
        "noteId": "beta:Cephalothin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Loracarbef",
        "noteId": "beta:Loracarbef",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Penicillin G",
        "noteId": "beta:Penicillin G",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Penicillin V",
        "noteId": "beta:Penicillin V",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Piperacillin",
        "noteId": "beta:Piperacillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Pivmecillinam",
        "noteId": "beta:Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      }
    ],
    "highFrom": [
      {
        "name": "Aztreonam",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefditoren",
        "reason": "identical R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefepime",
        "reason": "identical R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefiderocol",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefixime",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefodizime",
        "reason": "identical R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefotaxime",
        "reason": "identical R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefotiam",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefpirome",
        "reason": "identical R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefpodoxime",
        "reason": "identical R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftaroline",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftazidime",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftibuten",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftizoxime",
        "reason": "identical R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftolozane",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceftriaxone",
        "reason": "identical R1",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefuroxime",
        "reason": "partial R1",
        "via": "Romano Fig 1"
      }
    ],
    "saferFrom": [
      {
        "name": "Amoxicillin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ampicillin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefaclor",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefadroxil",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefamandole",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefatrizine",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefazolin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefonicid",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefoperazone",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Ceforamide",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefoxitin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefprozil",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cefradine",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cephalexin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Cephalothin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Loracarbef",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Penicillin G",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Penicillin V",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Piperacillin",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      },
      {
        "name": "Pivmecillinam",
        "reason": "no R1/R2 similarity",
        "via": "Romano Fig 1"
      }
    ]
  },
  "beta:Ceftaroline fosamil": {
    "id": "beta:Ceftaroline fosamil",
    "name": "Ceftaroline fosamil",
    "pool": "beta",
    "pending": false,
    "high": [
      {
        "name": "Cefepime",
        "noteId": "beta:Cefepime",
        "reason": "similar R1 or R2; almost-identical R1",
        "pendingRow": false
      },
      {
        "name": "Ceftolozane",
        "noteId": "beta:Ceftolozane",
        "reason": "similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefuroxime",
        "noteId": "beta:Cefuroxime",
        "reason": "similar R1 or R2; almost-identical R1",
        "pendingRow": false
      }
    ],
    "safer": [
      {
        "name": "Amoxicillin",
        "noteId": "beta:Amoxicillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ampicillin",
        "noteId": "beta:Ampicillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefaclor",
        "noteId": "beta:Cefaclor",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefadroxil",
        "noteId": "beta:Cefadroxil",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefamandole",
        "noteId": "beta:Cefamandole",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefatrizine",
        "noteId": "beta:Cefatrizine",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefazolin",
        "noteId": "beta:Cefazolin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefonicid",
        "noteId": "beta:Cefonicid",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefoperazone",
        "noteId": "beta:Cefoperazone",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefotetan",
        "noteId": "beta:Cefotetan",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefoxitin",
        "noteId": "beta:Cefoxitin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefprozil",
        "noteId": "beta:Cefprozil",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftezole",
        "noteId": "beta:Ceftezole",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cephalexin",
        "noteId": "beta:Cephalexin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cephalothin",
        "noteId": "beta:Cephalothin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cephapirin",
        "noteId": "beta:Cephapirin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Dicloxacillin",
        "noteId": "beta:Dicloxacillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Nafcillin",
        "noteId": "beta:Nafcillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Oxacillin",
        "noteId": "beta:Oxacillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Penicillin G / V",
        "noteId": "beta:Penicillin G / V",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Piperacillin",
        "noteId": "beta:Piperacillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      }
    ],
    "highFrom": [
      {
        "name": "Cefepime",
        "reason": "similar R1 or R2; almost-identical R1",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftolozane",
        "reason": "similar R1 or R2",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefuroxime",
        "reason": "similar R1 or R2; almost-identical R1",
        "via": "Zagursky Fig 3"
      }
    ],
    "saferFrom": [
      {
        "name": "Amoxicillin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ampicillin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefaclor",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefadroxil",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefamandole",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefatrizine",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefazolin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefonicid",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefoperazone",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefotetan",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefoxitin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefprozil",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftezole",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cephalexin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cephalothin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cephapirin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Dicloxacillin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Nafcillin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Oxacillin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Penicillin G / V",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Piperacillin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      }
    ]
  },
  "beta:Penicillin G / V": {
    "id": "beta:Penicillin G / V",
    "name": "Penicillin G / V",
    "pool": "beta",
    "pending": false,
    "high": [
      {
        "name": "Amoxicillin",
        "noteId": "beta:Amoxicillin",
        "reason": "similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Ampicillin",
        "noteId": "beta:Ampicillin",
        "reason": "similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefaclor",
        "noteId": "beta:Cefaclor",
        "reason": "similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefamandole",
        "noteId": "beta:Cefamandole",
        "reason": "similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefatrizine",
        "noteId": "beta:Cefatrizine",
        "reason": "similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefonicid",
        "noteId": "beta:Cefonicid",
        "reason": "similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cefprozil",
        "noteId": "beta:Cefprozil",
        "reason": "similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Cephalexin",
        "noteId": "beta:Cephalexin",
        "reason": "similar R1 or R2",
        "pendingRow": false
      },
      {
        "name": "Piperacillin",
        "noteId": "beta:Piperacillin",
        "reason": "similar R1 or R2",
        "pendingRow": false
      }
    ],
    "safer": [
      {
        "name": "Aztreonam",
        "noteId": "beta:Aztreonam",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefazolin",
        "noteId": "beta:Cefazolin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefdinir",
        "noteId": "beta:Cefdinir",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefditoren",
        "noteId": "beta:Cefditoren",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefepime",
        "noteId": "beta:Cefepime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefiderocol",
        "noteId": "beta:Cefiderocol",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefixime",
        "noteId": "beta:Cefixime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefodizime",
        "noteId": "beta:Cefodizime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefotaxime",
        "noteId": "beta:Cefotaxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefotetan",
        "noteId": "beta:Cefotetan",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefoxitin",
        "noteId": "beta:Cefoxitin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefpirome",
        "noteId": "beta:Cefpirome",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefpodoxime",
        "noteId": "beta:Cefpodoxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftaroline fosamil",
        "noteId": "beta:Ceftaroline fosamil",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftazidime",
        "noteId": "beta:Ceftazidime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftezole",
        "noteId": "beta:Ceftezole",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftibuten",
        "noteId": "beta:Ceftibuten",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftolozane",
        "noteId": "beta:Ceftolozane",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Ceftriaxone",
        "noteId": "beta:Ceftriaxone",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cefuroxime",
        "noteId": "beta:Cefuroxime",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cephalothin",
        "noteId": "beta:Cephalothin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Cephapirin",
        "noteId": "beta:Cephapirin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Dicloxacillin",
        "noteId": "beta:Dicloxacillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Nafcillin",
        "noteId": "beta:Nafcillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      },
      {
        "name": "Oxacillin",
        "noteId": "beta:Oxacillin",
        "reason": "no R1/R2 similarity",
        "pendingRow": false
      }
    ],
    "highFrom": [
      {
        "name": "Amoxicillin",
        "reason": "similar R1 or R2",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ampicillin",
        "reason": "similar R1 or R2",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefaclor",
        "reason": "similar R1 or R2",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefamandole",
        "reason": "similar R1 or R2",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefatrizine",
        "reason": "similar R1 or R2",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefonicid",
        "reason": "similar R1 or R2",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefprozil",
        "reason": "similar R1 or R2",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cephalexin",
        "reason": "similar R1 or R2",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Piperacillin",
        "reason": "similar R1 or R2",
        "via": "Zagursky Fig 3"
      }
    ],
    "saferFrom": [
      {
        "name": "Aztreonam",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefazolin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefdinir",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefditoren",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefepime",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefiderocol",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefixime",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefodizime",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefotaxime",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefotetan",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefoxitin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefpirome",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefpodoxime",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftaroline fosamil",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftazidime",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftezole",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftibuten",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftolozane",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Ceftriaxone",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cefuroxime",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cephalothin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Cephapirin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Dicloxacillin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Nafcillin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      },
      {
        "name": "Oxacillin",
        "reason": "no R1/R2 similarity",
        "via": "Zagursky Fig 3"
      }
    ]
  },
  "other:Iohexol": {
    "id": "other:Iohexol",
    "name": "Iohexol",
    "pool": "other",
    "pending": true,
    "high": [
      {
        "name": "Iobitridol",
        "noteId": "other:Iobitridol",
        "reason": "predicted cross-reactivity moderate",
        "pendingRow": true
      },
      {
        "name": "Iomeprol",
        "noteId": "other:Iomeprol",
        "reason": "predicted cross-reactivity moderate",
        "pendingRow": true
      },
      {
        "name": "Iopamidol",
        "noteId": "other:Iopamidol",
        "reason": "predicted cross-reactivity moderate",
        "pendingRow": true
      },
      {
        "name": "Iopromide",
        "noteId": "other:Iopromide",
        "reason": "predicted cross-reactivity moderate",
        "pendingRow": true
      },
      {
        "name": "Ioversol",
        "noteId": "other:Ioversol",
        "reason": "predicted cross-reactivity moderate",
        "pendingRow": true
      }
    ],
    "safer": [
      {
        "name": "Diatrizoate",
        "noteId": "other:Diatrizoate",
        "reason": "no-known-signal",
        "pendingRow": true
      },
      {
        "name": "Iodixanol",
        "noteId": "other:Iodixanol",
        "reason": "no-known-signal",
        "pendingRow": true
      },
      {
        "name": "Ioxaglate",
        "noteId": "other:Ioxaglate",
        "reason": "no-known-signal",
        "pendingRow": true
      },
      {
        "name": "Ioxitalamate",
        "noteId": "other:Ioxitalamate",
        "reason": "no-known-signal",
        "pendingRow": true
      }
    ],
    "highFrom": [
      {
        "name": "Iobitridol",
        "reason": "predicted cross-reactivity moderate",
        "via": "class edge"
      },
      {
        "name": "Iomeprol",
        "reason": "predicted cross-reactivity moderate",
        "via": "class edge"
      },
      {
        "name": "Iopamidol",
        "reason": "predicted cross-reactivity moderate",
        "via": "class edge"
      },
      {
        "name": "Iopromide",
        "reason": "predicted cross-reactivity moderate",
        "via": "class edge"
      },
      {
        "name": "Ioversol",
        "reason": "predicted cross-reactivity moderate",
        "via": "class edge"
      }
    ],
    "saferFrom": [
      {
        "name": "Diatrizoate",
        "reason": "no-known-signal",
        "via": "no-known-signal"
      },
      {
        "name": "Iodixanol",
        "reason": "no-known-signal",
        "via": "no-known-signal"
      },
      {
        "name": "Ioxaglate",
        "reason": "no-known-signal",
        "via": "no-known-signal"
      },
      {
        "name": "Ioxitalamate",
        "reason": "no-known-signal",
        "via": "no-known-signal"
      }
    ]
  },
  "other:Iopromide": {
    "id": "other:Iopromide",
    "name": "Iopromide",
    "pool": "other",
    "pending": true,
    "high": [
      {
        "name": "Iobitridol",
        "noteId": "other:Iobitridol",
        "reason": "predicted cross-reactivity moderate",
        "pendingRow": true
      },
      {
        "name": "Iohexol",
        "noteId": "other:Iohexol",
        "reason": "predicted cross-reactivity moderate",
        "pendingRow": true
      },
      {
        "name": "Iomeprol",
        "noteId": "other:Iomeprol",
        "reason": "predicted cross-reactivity moderate",
        "pendingRow": true
      },
      {
        "name": "Iopamidol",
        "noteId": "other:Iopamidol",
        "reason": "predicted cross-reactivity moderate",
        "pendingRow": true
      },
      {
        "name": "Ioversol",
        "noteId": "other:Ioversol",
        "reason": "predicted cross-reactivity moderate",
        "pendingRow": true
      }
    ],
    "safer": [
      {
        "name": "Diatrizoate",
        "noteId": "other:Diatrizoate",
        "reason": "no-known-signal",
        "pendingRow": true
      },
      {
        "name": "Iodixanol",
        "noteId": "other:Iodixanol",
        "reason": "no-known-signal",
        "pendingRow": true
      },
      {
        "name": "Ioxaglate",
        "noteId": "other:Ioxaglate",
        "reason": "no-known-signal",
        "pendingRow": true
      },
      {
        "name": "Ioxitalamate",
        "noteId": "other:Ioxitalamate",
        "reason": "no-known-signal",
        "pendingRow": true
      }
    ],
    "highFrom": [
      {
        "name": "Iobitridol",
        "reason": "predicted cross-reactivity moderate",
        "via": "class edge"
      },
      {
        "name": "Iohexol",
        "reason": "predicted cross-reactivity moderate",
        "via": "class edge"
      },
      {
        "name": "Iomeprol",
        "reason": "predicted cross-reactivity moderate",
        "via": "class edge"
      },
      {
        "name": "Iopamidol",
        "reason": "predicted cross-reactivity moderate",
        "via": "class edge"
      },
      {
        "name": "Ioversol",
        "reason": "predicted cross-reactivity moderate",
        "via": "class edge"
      }
    ],
    "saferFrom": [
      {
        "name": "Diatrizoate",
        "reason": "no-known-signal",
        "via": "no-known-signal"
      },
      {
        "name": "Iodixanol",
        "reason": "no-known-signal",
        "via": "no-known-signal"
      },
      {
        "name": "Ioxaglate",
        "reason": "no-known-signal",
        "via": "no-known-signal"
      },
      {
        "name": "Ioxitalamate",
        "reason": "no-known-signal",
        "via": "no-known-signal"
      }
    ]
  },
  "other:Iopamidol": {
    "id": "other:Iopamidol",
    "name": "Iopamidol",
    "pool": "other",
    "pending": true,
    "high": [
      {
        "name": "Iobitridol",
        "noteId": "other:Iobitridol",
        "reason": "predicted cross-reactivity moderate",
        "pendingRow": true
      },
      {
        "name": "Iohexol",
        "noteId": "other:Iohexol",
        "reason": "predicted cross-reactivity moderate",
        "pendingRow": true
      },
      {
        "name": "Iomeprol",
        "noteId": "other:Iomeprol",
        "reason": "predicted cross-reactivity moderate",
        "pendingRow": true
      },
      {
        "name": "Iopromide",
        "noteId": "other:Iopromide",
        "reason": "predicted cross-reactivity moderate",
        "pendingRow": true
      },
      {
        "name": "Ioversol",
        "noteId": "other:Ioversol",
        "reason": "predicted cross-reactivity moderate",
        "pendingRow": true
      }
    ],
    "safer": [
      {
        "name": "Diatrizoate",
        "noteId": "other:Diatrizoate",
        "reason": "no-known-signal",
        "pendingRow": true
      },
      {
        "name": "Iodixanol",
        "noteId": "other:Iodixanol",
        "reason": "no-known-signal",
        "pendingRow": true
      },
      {
        "name": "Ioxaglate",
        "noteId": "other:Ioxaglate",
        "reason": "no-known-signal",
        "pendingRow": true
      },
      {
        "name": "Ioxitalamate",
        "noteId": "other:Ioxitalamate",
        "reason": "no-known-signal",
        "pendingRow": true
      }
    ],
    "highFrom": [
      {
        "name": "Iobitridol",
        "reason": "predicted cross-reactivity moderate",
        "via": "class edge"
      },
      {
        "name": "Iohexol",
        "reason": "predicted cross-reactivity moderate",
        "via": "class edge"
      },
      {
        "name": "Iomeprol",
        "reason": "predicted cross-reactivity moderate",
        "via": "class edge"
      },
      {
        "name": "Iopromide",
        "reason": "predicted cross-reactivity moderate",
        "via": "class edge"
      },
      {
        "name": "Ioversol",
        "reason": "predicted cross-reactivity moderate",
        "via": "class edge"
      }
    ],
    "saferFrom": [
      {
        "name": "Diatrizoate",
        "reason": "no-known-signal",
        "via": "no-known-signal"
      },
      {
        "name": "Iodixanol",
        "reason": "no-known-signal",
        "via": "no-known-signal"
      },
      {
        "name": "Ioxaglate",
        "reason": "no-known-signal",
        "via": "no-known-signal"
      },
      {
        "name": "Ioxitalamate",
        "reason": "no-known-signal",
        "via": "no-known-signal"
      }
    ]
  },
  "other:Ioversol": {
    "id": "other:Ioversol",
    "name": "Ioversol",
    "pool": "other",
    "pending": true,
    "high": [
      {
        "name": "Iobitridol",
        "noteId": "other:Iobitridol",
        "reason": "predicted cross-reactivity moderate",
        "pendingRow": true
      },
      {
        "name": "Iohexol",
        "noteId": "other:Iohexol",
        "reason": "predicted cross-reactivity moderate",
        "pendingRow": true
      },
      {
        "name": "Iomeprol",
        "noteId": "other:Iomeprol",
        "reason": "predicted cross-reactivity moderate",
        "pendingRow": true
      },
      {
        "name": "Iopamidol",
        "noteId": "other:Iopamidol",
        "reason": "predicted cross-reactivity moderate",
        "pendingRow": true
      },
      {
        "name": "Iopromide",
        "noteId": "other:Iopromide",
        "reason": "predicted cross-reactivity moderate",
        "pendingRow": true
      }
    ],
    "safer": [
      {
        "name": "Diatrizoate",
        "noteId": "other:Diatrizoate",
        "reason": "no-known-signal",
        "pendingRow": true
      },
      {
        "name": "Iodixanol",
        "noteId": "other:Iodixanol",
        "reason": "no-known-signal",
        "pendingRow": true
      },
      {
        "name": "Ioxaglate",
        "noteId": "other:Ioxaglate",
        "reason": "no-known-signal",
        "pendingRow": true
      },
      {
        "name": "Ioxitalamate",
        "noteId": "other:Ioxitalamate",
        "reason": "no-known-signal",
        "pendingRow": true
      }
    ],
    "highFrom": [
      {
        "name": "Iobitridol",
        "reason": "predicted cross-reactivity moderate",
        "via": "class edge"
      },
      {
        "name": "Iohexol",
        "reason": "predicted cross-reactivity moderate",
        "via": "class edge"
      },
      {
        "name": "Iomeprol",
        "reason": "predicted cross-reactivity moderate",
        "via": "class edge"
      },
      {
        "name": "Iopamidol",
        "reason": "predicted cross-reactivity moderate",
        "via": "class edge"
      },
      {
        "name": "Iopromide",
        "reason": "predicted cross-reactivity moderate",
        "via": "class edge"
      }
    ],
    "saferFrom": [
      {
        "name": "Diatrizoate",
        "reason": "no-known-signal",
        "via": "no-known-signal"
      },
      {
        "name": "Iodixanol",
        "reason": "no-known-signal",
        "via": "no-known-signal"
      },
      {
        "name": "Ioxaglate",
        "reason": "no-known-signal",
        "via": "no-known-signal"
      },
      {
        "name": "Ioxitalamate",
        "reason": "no-known-signal",
        "via": "no-known-signal"
      }
    ]
  },
  "other:Iomeprol": {
    "id": "other:Iomeprol",
    "name": "Iomeprol",
    "pool": "other",
    "pending": true,
    "high": [
      {
        "name": "Iobitridol",
        "noteId": "other:Iobitridol",
        "reason": "predicted cross-reactivity moderate",
        "pendingRow": true
      },
      {
        "name": "Iohexol",
        "noteId": "other:Iohexol",
        "reason": "predicted cross-reactivity moderate",
        "pendingRow": true
      },
      {
        "name": "Iopamidol",
        "noteId": "other:Iopamidol",
        "reason": "predicted cross-reactivity moderate",
        "pendingRow": true
      },
      {
        "name": "Iopromide",
        "noteId": "other:Iopromide",
        "reason": "predicted cross-reactivity moderate",
        "pendingRow": true
      },
      {
        "name": "Ioversol",
        "noteId": "other:Ioversol",
        "reason": "predicted cross-reactivity moderate",
        "pendingRow": true
      }
    ],
    "safer": [
      {
        "name": "Diatrizoate",
        "noteId": "other:Diatrizoate",
        "reason": "no-known-signal",
        "pendingRow": true
      },
      {
        "name": "Iodixanol",
        "noteId": "other:Iodixanol",
        "reason": "no-known-signal",
        "pendingRow": true
      },
      {
        "name": "Ioxaglate",
        "noteId": "other:Ioxaglate",
        "reason": "no-known-signal",
        "pendingRow": true
      },
      {
        "name": "Ioxitalamate",
        "noteId": "other:Ioxitalamate",
        "reason": "no-known-signal",
        "pendingRow": true
      }
    ],
    "highFrom": [
      {
        "name": "Iobitridol",
        "reason": "predicted cross-reactivity moderate",
        "via": "class edge"
      },
      {
        "name": "Iohexol",
        "reason": "predicted cross-reactivity moderate",
        "via": "class edge"
      },
      {
        "name": "Iopamidol",
        "reason": "predicted cross-reactivity moderate",
        "via": "class edge"
      },
      {
        "name": "Iopromide",
        "reason": "predicted cross-reactivity moderate",
        "via": "class edge"
      },
      {
        "name": "Ioversol",
        "reason": "predicted cross-reactivity moderate",
        "via": "class edge"
      }
    ],
    "saferFrom": [
      {
        "name": "Diatrizoate",
        "reason": "no-known-signal",
        "via": "no-known-signal"
      },
      {
        "name": "Iodixanol",
        "reason": "no-known-signal",
        "via": "no-known-signal"
      },
      {
        "name": "Ioxaglate",
        "reason": "no-known-signal",
        "via": "no-known-signal"
      },
      {
        "name": "Ioxitalamate",
        "reason": "no-known-signal",
        "via": "no-known-signal"
      }
    ]
  },
  "other:Iobitridol": {
    "id": "other:Iobitridol",
    "name": "Iobitridol",
    "pool": "other",
    "pending": true,
    "high": [
      {
        "name": "Iohexol",
        "noteId": "other:Iohexol",
        "reason": "predicted cross-reactivity moderate",
        "pendingRow": true
      },
      {
        "name": "Iomeprol",
        "noteId": "other:Iomeprol",
        "reason": "predicted cross-reactivity moderate",
        "pendingRow": true
      },
      {
        "name": "Iopamidol",
        "noteId": "other:Iopamidol",
        "reason": "predicted cross-reactivity moderate",
        "pendingRow": true
      },
      {
        "name": "Iopromide",
        "noteId": "other:Iopromide",
        "reason": "predicted cross-reactivity moderate",
        "pendingRow": true
      },
      {
        "name": "Ioversol",
        "noteId": "other:Ioversol",
        "reason": "predicted cross-reactivity moderate",
        "pendingRow": true
      }
    ],
    "safer": [
      {
        "name": "Diatrizoate",
        "noteId": "other:Diatrizoate",
        "reason": "no-known-signal",
        "pendingRow": true
      },
      {
        "name": "Iodixanol",
        "noteId": "other:Iodixanol",
        "reason": "no-known-signal",
        "pendingRow": true
      },
      {
        "name": "Ioxaglate",
        "noteId": "other:Ioxaglate",
        "reason": "no-known-signal",
        "pendingRow": true
      },
      {
        "name": "Ioxitalamate",
        "noteId": "other:Ioxitalamate",
        "reason": "no-known-signal",
        "pendingRow": true
      }
    ],
    "highFrom": [
      {
        "name": "Iohexol",
        "reason": "predicted cross-reactivity moderate",
        "via": "class edge"
      },
      {
        "name": "Iomeprol",
        "reason": "predicted cross-reactivity moderate",
        "via": "class edge"
      },
      {
        "name": "Iopamidol",
        "reason": "predicted cross-reactivity moderate",
        "via": "class edge"
      },
      {
        "name": "Iopromide",
        "reason": "predicted cross-reactivity moderate",
        "via": "class edge"
      },
      {
        "name": "Ioversol",
        "reason": "predicted cross-reactivity moderate",
        "via": "class edge"
      }
    ],
    "saferFrom": [
      {
        "name": "Diatrizoate",
        "reason": "no-known-signal",
        "via": "no-known-signal"
      },
      {
        "name": "Iodixanol",
        "reason": "no-known-signal",
        "via": "no-known-signal"
      },
      {
        "name": "Ioxaglate",
        "reason": "no-known-signal",
        "via": "no-known-signal"
      },
      {
        "name": "Ioxitalamate",
        "reason": "no-known-signal",
        "via": "no-known-signal"
      }
    ]
  },
  "other:Iodixanol": {
    "id": "other:Iodixanol",
    "name": "Iodixanol",
    "pool": "other",
    "pending": true,
    "high": [],
    "safer": [
      {
        "name": "Diatrizoate",
        "noteId": "other:Diatrizoate",
        "reason": "no-known-signal",
        "pendingRow": true
      },
      {
        "name": "Iobitridol",
        "noteId": "other:Iobitridol",
        "reason": "no-known-signal",
        "pendingRow": true
      },
      {
        "name": "Iohexol",
        "noteId": "other:Iohexol",
        "reason": "no-known-signal",
        "pendingRow": true
      },
      {
        "name": "Iomeprol",
        "noteId": "other:Iomeprol",
        "reason": "no-known-signal",
        "pendingRow": true
      },
      {
        "name": "Iopamidol",
        "noteId": "other:Iopamidol",
        "reason": "no-known-signal",
        "pendingRow": true
      },
      {
        "name": "Iopromide",
        "noteId": "other:Iopromide",
        "reason": "no-known-signal",
        "pendingRow": true
      },
      {
        "name": "Ioversol",
        "noteId": "other:Ioversol",
        "reason": "no-known-signal",
        "pendingRow": true
      },
      {
        "name": "Ioxaglate",
        "noteId": "other:Ioxaglate",
        "reason": "no-known-signal",
        "pendingRow": true
      },
      {
        "name": "Ioxitalamate",
        "noteId": "other:Ioxitalamate",
        "reason": "no-known-signal",
        "pendingRow": true
      }
    ],
    "highFrom": [],
    "saferFrom": [
      {
        "name": "Diatrizoate",
        "reason": "no-known-signal",
        "via": "no-known-signal"
      },
      {
        "name": "Iobitridol",
        "reason": "no-known-signal",
        "via": "no-known-signal"
      },
      {
        "name": "Iohexol",
        "reason": "no-known-signal",
        "via": "no-known-signal"
      },
      {
        "name": "Iomeprol",
        "reason": "no-known-signal",
        "via": "no-known-signal"
      },
      {
        "name": "Iopamidol",
        "reason": "no-known-signal",
        "via": "no-known-signal"
      },
      {
        "name": "Iopromide",
        "reason": "no-known-signal",
        "via": "no-known-signal"
      },
      {
        "name": "Ioversol",
        "reason": "no-known-signal",
        "via": "no-known-signal"
      },
      {
        "name": "Ioxaglate",
        "reason": "no-known-signal",
        "via": "no-known-signal"
      },
      {
        "name": "Ioxitalamate",
        "reason": "no-known-signal",
        "via": "no-known-signal"
      }
    ]
  },
  "other:Ioxitalamate": {
    "id": "other:Ioxitalamate",
    "name": "Ioxitalamate",
    "pool": "other",
    "pending": true,
    "high": [
      {
        "name": "Diatrizoate",
        "noteId": "other:Diatrizoate",
        "reason": "predicted cross-reactivity moderate",
        "pendingRow": true
      },
      {
        "name": "Ioxaglate",
        "noteId": "other:Ioxaglate",
        "reason": "predicted cross-reactivity moderate",
        "pendingRow": true
      }
    ],
    "safer": [
      {
        "name": "Iobitridol",
        "noteId": "other:Iobitridol",
        "reason": "no-known-signal",
        "pendingRow": true
      },
      {
        "name": "Iodixanol",
        "noteId": "other:Iodixanol",
        "reason": "no-known-signal",
        "pendingRow": true
      },
      {
        "name": "Iohexol",
        "noteId": "other:Iohexol",
        "reason": "no-known-signal",
        "pendingRow": true
      },
      {
        "name": "Iomeprol",
        "noteId": "other:Iomeprol",
        "reason": "no-known-signal",
        "pendingRow": true
      },
      {
        "name": "Iopamidol",
        "noteId": "other:Iopamidol",
        "reason": "no-known-signal",
        "pendingRow": true
      },
      {
        "name": "Iopromide",
        "noteId": "other:Iopromide",
        "reason": "no-known-signal",
        "pendingRow": true
      },
      {
        "name": "Ioversol",
        "noteId": "other:Ioversol",
        "reason": "no-known-signal",
        "pendingRow": true
      }
    ],
    "highFrom": [
      {
        "name": "Diatrizoate",
        "reason": "predicted cross-reactivity moderate",
        "via": "class edge"
      },
      {
        "name": "Ioxaglate",
        "reason": "predicted cross-reactivity moderate",
        "via": "class edge"
      }
    ],
    "saferFrom": [
      {
        "name": "Iobitridol",
        "reason": "no-known-signal",
        "via": "no-known-signal"
      },
      {
        "name": "Iodixanol",
        "reason": "no-known-signal",
        "via": "no-known-signal"
      },
      {
        "name": "Iohexol",
        "reason": "no-known-signal",
        "via": "no-known-signal"
      },
      {
        "name": "Iomeprol",
        "reason": "no-known-signal",
        "via": "no-known-signal"
      },
      {
        "name": "Iopamidol",
        "reason": "no-known-signal",
        "via": "no-known-signal"
      },
      {
        "name": "Iopromide",
        "reason": "no-known-signal",
        "via": "no-known-signal"
      },
      {
        "name": "Ioversol",
        "reason": "no-known-signal",
        "via": "no-known-signal"
      }
    ]
  },
  "other:Diatrizoate": {
    "id": "other:Diatrizoate",
    "name": "Diatrizoate",
    "pool": "other",
    "pending": true,
    "high": [
      {
        "name": "Ioxaglate",
        "noteId": "other:Ioxaglate",
        "reason": "predicted cross-reactivity moderate",
        "pendingRow": true
      },
      {
        "name": "Ioxitalamate",
        "noteId": "other:Ioxitalamate",
        "reason": "predicted cross-reactivity moderate",
        "pendingRow": true
      }
    ],
    "safer": [
      {
        "name": "Iobitridol",
        "noteId": "other:Iobitridol",
        "reason": "no-known-signal",
        "pendingRow": true
      },
      {
        "name": "Iodixanol",
        "noteId": "other:Iodixanol",
        "reason": "no-known-signal",
        "pendingRow": true
      },
      {
        "name": "Iohexol",
        "noteId": "other:Iohexol",
        "reason": "no-known-signal",
        "pendingRow": true
      },
      {
        "name": "Iomeprol",
        "noteId": "other:Iomeprol",
        "reason": "no-known-signal",
        "pendingRow": true
      },
      {
        "name": "Iopamidol",
        "noteId": "other:Iopamidol",
        "reason": "no-known-signal",
        "pendingRow": true
      },
      {
        "name": "Iopromide",
        "noteId": "other:Iopromide",
        "reason": "no-known-signal",
        "pendingRow": true
      },
      {
        "name": "Ioversol",
        "noteId": "other:Ioversol",
        "reason": "no-known-signal",
        "pendingRow": true
      }
    ],
    "highFrom": [
      {
        "name": "Ioxaglate",
        "reason": "predicted cross-reactivity moderate",
        "via": "class edge"
      },
      {
        "name": "Ioxitalamate",
        "reason": "predicted cross-reactivity moderate",
        "via": "class edge"
      }
    ],
    "saferFrom": [
      {
        "name": "Iobitridol",
        "reason": "no-known-signal",
        "via": "no-known-signal"
      },
      {
        "name": "Iodixanol",
        "reason": "no-known-signal",
        "via": "no-known-signal"
      },
      {
        "name": "Iohexol",
        "reason": "no-known-signal",
        "via": "no-known-signal"
      },
      {
        "name": "Iomeprol",
        "reason": "no-known-signal",
        "via": "no-known-signal"
      },
      {
        "name": "Iopamidol",
        "reason": "no-known-signal",
        "via": "no-known-signal"
      },
      {
        "name": "Iopromide",
        "reason": "no-known-signal",
        "via": "no-known-signal"
      },
      {
        "name": "Ioversol",
        "reason": "no-known-signal",
        "via": "no-known-signal"
      }
    ]
  },
  "other:Ioxaglate": {
    "id": "other:Ioxaglate",
    "name": "Ioxaglate",
    "pool": "other",
    "pending": true,
    "high": [
      {
        "name": "Diatrizoate",
        "noteId": "other:Diatrizoate",
        "reason": "predicted cross-reactivity moderate",
        "pendingRow": true
      },
      {
        "name": "Ioxitalamate",
        "noteId": "other:Ioxitalamate",
        "reason": "predicted cross-reactivity moderate",
        "pendingRow": true
      }
    ],
    "safer": [
      {
        "name": "Iobitridol",
        "noteId": "other:Iobitridol",
        "reason": "no-known-signal",
        "pendingRow": true
      },
      {
        "name": "Iodixanol",
        "noteId": "other:Iodixanol",
        "reason": "no-known-signal",
        "pendingRow": true
      },
      {
        "name": "Iohexol",
        "noteId": "other:Iohexol",
        "reason": "no-known-signal",
        "pendingRow": true
      },
      {
        "name": "Iomeprol",
        "noteId": "other:Iomeprol",
        "reason": "no-known-signal",
        "pendingRow": true
      },
      {
        "name": "Iopamidol",
        "noteId": "other:Iopamidol",
        "reason": "no-known-signal",
        "pendingRow": true
      },
      {
        "name": "Iopromide",
        "noteId": "other:Iopromide",
        "reason": "no-known-signal",
        "pendingRow": true
      },
      {
        "name": "Ioversol",
        "noteId": "other:Ioversol",
        "reason": "no-known-signal",
        "pendingRow": true
      }
    ],
    "highFrom": [
      {
        "name": "Diatrizoate",
        "reason": "predicted cross-reactivity moderate",
        "via": "class edge"
      },
      {
        "name": "Ioxitalamate",
        "reason": "predicted cross-reactivity moderate",
        "via": "class edge"
      }
    ],
    "saferFrom": [
      {
        "name": "Iobitridol",
        "reason": "no-known-signal",
        "via": "no-known-signal"
      },
      {
        "name": "Iodixanol",
        "reason": "no-known-signal",
        "via": "no-known-signal"
      },
      {
        "name": "Iohexol",
        "reason": "no-known-signal",
        "via": "no-known-signal"
      },
      {
        "name": "Iomeprol",
        "reason": "no-known-signal",
        "via": "no-known-signal"
      },
      {
        "name": "Iopamidol",
        "reason": "no-known-signal",
        "via": "no-known-signal"
      },
      {
        "name": "Iopromide",
        "reason": "no-known-signal",
        "via": "no-known-signal"
      },
      {
        "name": "Ioversol",
        "reason": "no-known-signal",
        "via": "no-known-signal"
      }
    ]
  },
  "other:Carboplatin": {
    "id": "other:Carboplatin",
    "name": "Carboplatin",
    "pool": "other",
    "pending": false,
    "high": [
      {
        "name": "Cisplatin",
        "noteId": "other:Cisplatin",
        "reason": "cross-reactivity moderate",
        "pendingRow": false
      },
      {
        "name": "Oxaliplatin",
        "noteId": "other:Oxaliplatin",
        "reason": "cross-reactivity disputed",
        "pendingRow": false
      }
    ],
    "safer": [],
    "highFrom": [
      {
        "name": "Cisplatin",
        "reason": "cross-reactivity moderate",
        "via": "reviewed pair"
      },
      {
        "name": "Oxaliplatin",
        "reason": "cross-reactivity disputed",
        "via": "reviewed pair; class edge"
      }
    ],
    "saferFrom": []
  },
  "other:Cisplatin": {
    "id": "other:Cisplatin",
    "name": "Cisplatin",
    "pool": "other",
    "pending": false,
    "high": [
      {
        "name": "Carboplatin",
        "noteId": "other:Carboplatin",
        "reason": "cross-reactivity moderate",
        "pendingRow": false
      },
      {
        "name": "Oxaliplatin",
        "noteId": "other:Oxaliplatin",
        "reason": "cross-reactivity moderate",
        "pendingRow": false
      }
    ],
    "safer": [],
    "highFrom": [
      {
        "name": "Carboplatin",
        "reason": "cross-reactivity moderate",
        "via": "reviewed pair; class edge"
      },
      {
        "name": "Oxaliplatin",
        "reason": "cross-reactivity moderate",
        "via": "class edge"
      }
    ],
    "saferFrom": []
  },
  "other:Oxaliplatin": {
    "id": "other:Oxaliplatin",
    "name": "Oxaliplatin",
    "pool": "other",
    "pending": false,
    "high": [
      {
        "name": "Carboplatin",
        "noteId": "other:Carboplatin",
        "reason": "cross-reactivity disputed",
        "pendingRow": false
      },
      {
        "name": "Cisplatin",
        "noteId": "other:Cisplatin",
        "reason": "cross-reactivity moderate",
        "pendingRow": false
      }
    ],
    "safer": [],
    "highFrom": [
      {
        "name": "Carboplatin",
        "reason": "cross-reactivity disputed",
        "via": "reviewed pair; class edge"
      },
      {
        "name": "Cisplatin",
        "reason": "cross-reactivity moderate",
        "via": "class edge"
      }
    ],
    "saferFrom": []
  },
  "other:Paclitaxel": {
    "id": "other:Paclitaxel",
    "name": "Paclitaxel",
    "pool": "other",
    "pending": false,
    "high": [
      {
        "name": "Cabazitaxel",
        "noteId": "other:Cabazitaxel",
        "reason": "cross-reactivity moderate",
        "pendingRow": false
      },
      {
        "name": "Docetaxel",
        "noteId": "other:Docetaxel",
        "reason": "cross-reactivity high",
        "pendingRow": false
      },
      {
        "name": "Nab-paclitaxel",
        "noteId": "other:Nab-paclitaxel",
        "reason": "cross-reactivity moderate",
        "pendingRow": false
      }
    ],
    "safer": [],
    "highFrom": [
      {
        "name": "Cabazitaxel",
        "reason": "cross-reactivity moderate",
        "via": "class edge"
      },
      {
        "name": "Docetaxel",
        "reason": "cross-reactivity high",
        "via": "reviewed pair; class edge"
      },
      {
        "name": "Nab-paclitaxel",
        "reason": "cross-reactivity moderate",
        "via": "class edge"
      }
    ],
    "saferFrom": []
  },
  "other:Docetaxel": {
    "id": "other:Docetaxel",
    "name": "Docetaxel",
    "pool": "other",
    "pending": false,
    "high": [
      {
        "name": "Cabazitaxel",
        "noteId": "other:Cabazitaxel",
        "reason": "cross-reactivity moderate",
        "pendingRow": false
      },
      {
        "name": "Nab-paclitaxel",
        "noteId": "other:Nab-paclitaxel",
        "reason": "cross-reactivity moderate",
        "pendingRow": false
      },
      {
        "name": "Paclitaxel",
        "noteId": "other:Paclitaxel",
        "reason": "cross-reactivity high",
        "pendingRow": false
      }
    ],
    "safer": [],
    "highFrom": [
      {
        "name": "Cabazitaxel",
        "reason": "cross-reactivity moderate",
        "via": "class edge"
      },
      {
        "name": "Nab-paclitaxel",
        "reason": "cross-reactivity moderate",
        "via": "class edge"
      },
      {
        "name": "Paclitaxel",
        "reason": "cross-reactivity high",
        "via": "reviewed pair; class edge"
      }
    ],
    "saferFrom": []
  },
  "other:Nab-paclitaxel": {
    "id": "other:Nab-paclitaxel",
    "name": "Nab-paclitaxel",
    "pool": "other",
    "pending": false,
    "high": [
      {
        "name": "Cabazitaxel",
        "noteId": "other:Cabazitaxel",
        "reason": "cross-reactivity moderate",
        "pendingRow": false
      },
      {
        "name": "Docetaxel",
        "noteId": "other:Docetaxel",
        "reason": "cross-reactivity moderate",
        "pendingRow": false
      },
      {
        "name": "Paclitaxel",
        "noteId": "other:Paclitaxel",
        "reason": "cross-reactivity moderate",
        "pendingRow": false
      }
    ],
    "safer": [],
    "highFrom": [
      {
        "name": "Cabazitaxel",
        "reason": "cross-reactivity moderate",
        "via": "class edge"
      },
      {
        "name": "Docetaxel",
        "reason": "cross-reactivity moderate",
        "via": "class edge"
      },
      {
        "name": "Paclitaxel",
        "reason": "cross-reactivity moderate",
        "via": "class edge"
      }
    ],
    "saferFrom": []
  },
  "other:Cabazitaxel": {
    "id": "other:Cabazitaxel",
    "name": "Cabazitaxel",
    "pool": "other",
    "pending": false,
    "high": [
      {
        "name": "Docetaxel",
        "noteId": "other:Docetaxel",
        "reason": "cross-reactivity moderate",
        "pendingRow": false
      },
      {
        "name": "Nab-paclitaxel",
        "noteId": "other:Nab-paclitaxel",
        "reason": "cross-reactivity moderate",
        "pendingRow": false
      },
      {
        "name": "Paclitaxel",
        "noteId": "other:Paclitaxel",
        "reason": "cross-reactivity moderate",
        "pendingRow": false
      }
    ],
    "safer": [],
    "highFrom": [
      {
        "name": "Docetaxel",
        "reason": "cross-reactivity moderate",
        "via": "class edge"
      },
      {
        "name": "Nab-paclitaxel",
        "reason": "cross-reactivity moderate",
        "via": "class edge"
      },
      {
        "name": "Paclitaxel",
        "reason": "cross-reactivity moderate",
        "via": "class edge"
      }
    ],
    "saferFrom": []
  },
  "other:Pegaspargase": {
    "id": "other:Pegaspargase",
    "name": "Pegaspargase",
    "pool": "other",
    "pending": false,
    "high": [
      {
        "name": "Asparaginase Erwinia",
        "noteId": "other:Asparaginase Erwinia",
        "reason": "cross-reactivity moderate",
        "pendingRow": false
      },
      {
        "name": "Calaspargase pegol",
        "noteId": "other:Calaspargase pegol",
        "reason": "cross-reactivity moderate",
        "pendingRow": false
      }
    ],
    "safer": [],
    "highFrom": [
      {
        "name": "Asparaginase Erwinia",
        "reason": "cross-reactivity moderate",
        "via": "class edge"
      },
      {
        "name": "Calaspargase pegol",
        "reason": "cross-reactivity moderate",
        "via": "reviewed pair"
      }
    ],
    "saferFrom": []
  },
  "other:Asparaginase Erwinia": {
    "id": "other:Asparaginase Erwinia",
    "name": "Asparaginase Erwinia",
    "pool": "other",
    "pending": false,
    "high": [
      {
        "name": "Calaspargase pegol",
        "noteId": "other:Calaspargase pegol",
        "reason": "cross-reactivity moderate",
        "pendingRow": false
      },
      {
        "name": "Pegaspargase",
        "noteId": "other:Pegaspargase",
        "reason": "cross-reactivity moderate",
        "pendingRow": false
      }
    ],
    "safer": [],
    "highFrom": [
      {
        "name": "Calaspargase pegol",
        "reason": "cross-reactivity moderate",
        "via": "class edge"
      },
      {
        "name": "Pegaspargase",
        "reason": "cross-reactivity moderate",
        "via": "class edge"
      }
    ],
    "saferFrom": []
  },
  "other:Calaspargase pegol": {
    "id": "other:Calaspargase pegol",
    "name": "Calaspargase pegol",
    "pool": "other",
    "pending": false,
    "high": [
      {
        "name": "Asparaginase Erwinia",
        "noteId": "other:Asparaginase Erwinia",
        "reason": "cross-reactivity moderate",
        "pendingRow": false
      },
      {
        "name": "Pegaspargase",
        "noteId": "other:Pegaspargase",
        "reason": "cross-reactivity moderate",
        "pendingRow": false
      }
    ],
    "safer": [],
    "highFrom": [
      {
        "name": "Asparaginase Erwinia",
        "reason": "cross-reactivity moderate",
        "via": "class edge"
      },
      {
        "name": "Pegaspargase",
        "reason": "cross-reactivity moderate",
        "via": "reviewed pair"
      }
    ],
    "saferFrom": []
  },
  "other:Doxorubicin": {
    "id": "other:Doxorubicin",
    "name": "Doxorubicin",
    "pool": "other",
    "pending": false,
    "high": [
      {
        "name": "Daunorubicin",
        "noteId": "other:Daunorubicin",
        "reason": "cross-reactivity moderate",
        "pendingRow": false
      },
      {
        "name": "Pegylated liposomal doxorubicin",
        "noteId": "other:Pegylated liposomal doxorubicin",
        "reason": "cross-reactivity moderate",
        "pendingRow": false
      }
    ],
    "safer": [],
    "highFrom": [
      {
        "name": "Daunorubicin",
        "reason": "cross-reactivity moderate",
        "via": "class edge"
      },
      {
        "name": "Pegylated liposomal doxorubicin",
        "reason": "cross-reactivity moderate",
        "via": "class edge"
      }
    ],
    "saferFrom": []
  },
  "other:Pegylated liposomal doxorubicin": {
    "id": "other:Pegylated liposomal doxorubicin",
    "name": "Pegylated liposomal doxorubicin",
    "pool": "other",
    "pending": false,
    "high": [
      {
        "name": "Daunorubicin",
        "noteId": "other:Daunorubicin",
        "reason": "cross-reactivity moderate",
        "pendingRow": false
      },
      {
        "name": "Doxorubicin",
        "noteId": "other:Doxorubicin",
        "reason": "cross-reactivity moderate",
        "pendingRow": false
      }
    ],
    "safer": [],
    "highFrom": [
      {
        "name": "Daunorubicin",
        "reason": "cross-reactivity moderate",
        "via": "class edge"
      },
      {
        "name": "Doxorubicin",
        "reason": "cross-reactivity moderate",
        "via": "class edge"
      }
    ],
    "saferFrom": []
  },
  "other:Daunorubicin": {
    "id": "other:Daunorubicin",
    "name": "Daunorubicin",
    "pool": "other",
    "pending": false,
    "high": [
      {
        "name": "Doxorubicin",
        "noteId": "other:Doxorubicin",
        "reason": "cross-reactivity moderate",
        "pendingRow": false
      },
      {
        "name": "Pegylated liposomal doxorubicin",
        "noteId": "other:Pegylated liposomal doxorubicin",
        "reason": "cross-reactivity moderate",
        "pendingRow": false
      }
    ],
    "safer": [],
    "highFrom": [
      {
        "name": "Doxorubicin",
        "reason": "cross-reactivity moderate",
        "via": "class edge"
      },
      {
        "name": "Pegylated liposomal doxorubicin",
        "reason": "cross-reactivity moderate",
        "via": "class edge"
      }
    ],
    "saferFrom": []
  },
  "other:Enoxaparin": {
    "id": "other:Enoxaparin",
    "name": "Enoxaparin",
    "pool": "other",
    "pending": false,
    "high": [
      {
        "name": "Neomycin",
        "noteId": "other:Neomycin",
        "reason": "IgE cross-reactivity low",
        "pendingRow": false
      },
      {
        "name": "Tinzaparin",
        "noteId": "other:Tinzaparin",
        "reason": "positive patch tests",
        "pendingRow": false
      }
    ],
    "safer": [],
    "highFrom": [
      {
        "name": "Neomycin",
        "reason": "IgE cross-reactivity low",
        "via": "clinical note"
      },
      {
        "name": "Tinzaparin",
        "reason": "positive patch tests",
        "via": "clinical note"
      }
    ],
    "saferFrom": []
  },
  "other:Tinzaparin": {
    "id": "other:Tinzaparin",
    "name": "Tinzaparin",
    "pool": "other",
    "pending": false,
    "high": [
      {
        "name": "Enoxaparin",
        "noteId": "other:Enoxaparin",
        "reason": "positive patch tests",
        "pendingRow": false
      },
      {
        "name": "Neomycin",
        "noteId": "other:Neomycin",
        "reason": "positive patch tests",
        "pendingRow": false
      }
    ],
    "safer": [],
    "highFrom": [
      {
        "name": "Enoxaparin",
        "reason": "positive patch tests",
        "via": "clinical note"
      },
      {
        "name": "Neomycin",
        "reason": "positive patch tests",
        "via": "clinical note"
      }
    ],
    "saferFrom": []
  },
  "other:Neomycin": {
    "id": "other:Neomycin",
    "name": "Neomycin",
    "pool": "other",
    "pending": false,
    "high": [
      {
        "name": "Enoxaparin",
        "noteId": "other:Enoxaparin",
        "reason": "IgE cross-reactivity low",
        "pendingRow": false
      },
      {
        "name": "Tinzaparin",
        "noteId": "other:Tinzaparin",
        "reason": "positive patch tests",
        "pendingRow": false
      }
    ],
    "safer": [],
    "highFrom": [
      {
        "name": "Enoxaparin",
        "reason": "IgE cross-reactivity low",
        "via": "clinical note"
      },
      {
        "name": "Tinzaparin",
        "reason": "positive patch tests",
        "via": "clinical note"
      }
    ],
    "saferFrom": []
  },
  "other:Sulfasalazine": {
    "id": "other:Sulfasalazine",
    "name": "Sulfasalazine",
    "pool": "other",
    "pending": true,
    "high": [
      {
        "name": "Sulfamethoxazole",
        "noteId": null,
        "reason": "cross-reactivity moderate",
        "pendingRow": true
      },
      {
        "name": "TMP-SMX",
        "noteId": null,
        "reason": "cross-reactivity moderate",
        "pendingRow": true
      }
    ],
    "safer": [],
    "highFrom": [],
    "saferFrom": []
  },
  "other:Non-antibiotic sulfonamides": {
    "id": "other:Non-antibiotic sulfonamides",
    "name": "Non-antibiotic sulfonamides",
    "pool": "other",
    "pending": false,
    "high": [],
    "safer": [],
    "highFrom": [],
    "saferFrom": []
  },
  "other:Carbamazepine": {
    "id": "other:Carbamazepine",
    "name": "Carbamazepine",
    "pool": "other",
    "pending": true,
    "high": [],
    "safer": [],
    "highFrom": [],
    "saferFrom": []
  },
  "other:Oxcarbazepine": {
    "id": "other:Oxcarbazepine",
    "name": "Oxcarbazepine",
    "pool": "other",
    "pending": true,
    "high": [],
    "safer": [],
    "highFrom": [],
    "saferFrom": []
  },
  "other:Eslicarbazepine": {
    "id": "other:Eslicarbazepine",
    "name": "Eslicarbazepine",
    "pool": "other",
    "pending": true,
    "high": [],
    "safer": [],
    "highFrom": [],
    "saferFrom": []
  },
  "other:Phenytoin": {
    "id": "other:Phenytoin",
    "name": "Phenytoin",
    "pool": "other",
    "pending": true,
    "high": [],
    "safer": [],
    "highFrom": [],
    "saferFrom": []
  },
  "other:Fosphenytoin": {
    "id": "other:Fosphenytoin",
    "name": "Fosphenytoin",
    "pool": "other",
    "pending": true,
    "high": [],
    "safer": [],
    "highFrom": [],
    "saferFrom": []
  },
  "other:Lamotrigine": {
    "id": "other:Lamotrigine",
    "name": "Lamotrigine",
    "pool": "other",
    "pending": true,
    "high": [],
    "safer": [],
    "highFrom": [],
    "saferFrom": []
  },
  "other:Phenobarbital": {
    "id": "other:Phenobarbital",
    "name": "Phenobarbital",
    "pool": "other",
    "pending": true,
    "high": [],
    "safer": [],
    "highFrom": [],
    "saferFrom": []
  },
  "other:Primidone": {
    "id": "other:Primidone",
    "name": "Primidone",
    "pool": "other",
    "pending": true,
    "high": [],
    "safer": [],
    "highFrom": [],
    "saferFrom": []
  },
  "other:Zonisamide": {
    "id": "other:Zonisamide",
    "name": "Zonisamide",
    "pool": "other",
    "pending": true,
    "high": [],
    "safer": [],
    "highFrom": [],
    "saferFrom": []
  }
};
