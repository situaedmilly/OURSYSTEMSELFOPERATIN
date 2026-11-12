# CHAMBOXREALITY · Five Launch Gates v0.1

**Status:** PROPOSED CONFORMANCE SPECIFICATION

A boot may establish an observation-only reality without execution authority. A launch that performs state-changing operations requires all five gates to pass for the exact reality, instance, graph revision, and transition.

## Gate 1 — Constitutional

Required: identified constitutional root; applicable doctrine version; verified owner identity and decision rights; amendment/approval mechanism; independent trust-root custody; effective authority evidence.

Fail closed when root status, owner binding, approval threshold, or trust custody is unresolved. A candidate repository or conversational declaration is not ratification.

## Gate 2 — Reality

Required: unique reality/instance/session identities; current host and platform recontact; jurisdiction; explicit filesystem/network/execution boundaries; source-backed evidence inventory; conflict classification.

Fail closed when target identity, jurisdiction, or required source evidence is unknown or contradictory.

## Gate 3 — Compilation

Required: approved canonical topology reference and digest; valid session graph schema; unique session identity; immutable graph snapshot; explicit capability, authority, and admission references; no inherited permission or execution state.

Fail closed on invalid schema, dangling topology edges, digest mismatch, implicit inheritance, or missing provenance.

## Gate 4 — Execution

Required: exact owner-bound authority grant; action/target/scope match; validity and revocation check; admitted capability; SELFMOATS crossing PASS; idempotency/replay control; resident actuator identity; bounded execution and rollback/cancellation plan.

Fail closed on any missing or unresolved precondition. No model, graph, or receipt may mint authority.

## Gate 5 — Reconciliation

Required: independently observable effect predicate; witness distinct from executor; evidence integrity and custody; receipt bound to exact graph and admission; recontact of resulting state; continuity and revocation check.

Fail closed when the effect cannot be independently evaluated or evidence custody is not established.

## Gate states

Use PASS, BLOCKED, UNKNOWN, NOT_COLLECTED, UNSUPPORTED, and ERROR. Only PASS satisfies a required gate. Preserve the distinction among unknown, unsupported, not collected, and error.

## Launch states

- DRAFT — contracts or inputs incomplete.
- OBSERVATION_BOOTED — reality and session graph established; execution remains disabled.
- BLOCKED — one or more required launch gates are not PASS.
- READY_FOR_BOUNDED_EXECUTION — all required gates pass; no transition is implied until a specific request is admitted.
- LAUNCHED — an admitted transition was executed, its effect independently evaluated, receipt retained, and recontact completed.

A successful test suite validates only the tested predicates. It does not certify constitutional ratification, production readiness, or untested platforms.
