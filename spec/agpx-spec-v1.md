# AGP-X Spec v1.0

## Function Identity

Format:

func://domain/action/variant/version

---

## Function Descriptor

Stored at:

.agp/functions/*.json

---

## Embedding

Hybrid embedding:

- semantic
- structural
- tags

---

## Matching

cosine similarity

Threshold:

- >0.92 reuse
- >0.8 suggest
- else ignore

---

## Storage

- Local JSON
- Future: vector DB
