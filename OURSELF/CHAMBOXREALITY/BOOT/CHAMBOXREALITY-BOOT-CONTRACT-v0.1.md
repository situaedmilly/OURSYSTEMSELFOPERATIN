# CHAMBOXREALITY · Fresh Reality Boot Contract v0.1

**Status:** PROPOSED IMPLEMENTATION CONTRACT · OBSERVATION-ONLY BOOT PERMITTED  
**Purpose:** Establish a bounded reality before any state-changing operation is considered.

## 1. Boot identity

Every boot creates distinct identifiers for reality, instance, boot, and session. These identifiers are not interchangeable. A new boot never silently reuses an earlier session graph, admission decision, execution state, or receipt.

Required identities:
- reality_id — the bounded reality definition;
- instance_id — the concrete host/runtime instance;
- boot_id — this boot occurrence;
- session_id — this execution/reasoning session;
- topology_id + topology_revision — the approved canonical topology reference;
- graph_id + graph_revision — the immutable session-specific SELFGRAPH.

## 2. Boot modes

- OBSERVATION_ONLY: discovery, hashing, schema validation, local read-only probes, and cognition probes with no external state mutation.
- BOUNDED_EXECUTION: available only after all five implementation gates pass and the exact transition has delegated authority and admission.
- RECOVERY: recontact and reconcile prior state; never restores expired or revoked authority by inheritance.

Default mode is OBSERVATION_ONLY. Default decision is DENY.

## 3. Boot lifecycle

B00 GENESIS — create new reality, instance, boot, and session identities.

B01 CONSTITUTIONAL BINDING — reference the OSOS root and record its actual governance status. A candidate repository is not a ratified constitution.

B02 MATTER DISCOVERY — inspect actual host, platform, repositories, processes, endpoints, models, and available tools. Record source, time, claim class, and digest.

B03 REALITY BOUNDARIES — define jurisdiction, filesystem, network, execution, and cross-reality boundaries.

B04 THIRDEYE SELFTELLIGENCE — distinguish observed facts, declarations, inferences, unknowns, errors, unsupported capabilities, and uncollected evidence.

B05 CANONICAL TOPOLOGY — reference an approved, versioned, evidence-backed topology. A topology reference is not an executable session.

B06 SESSION COMPILATION — derive a new SELFGRAPH snapshot with its own identity, evidence, capability references, authority reference, admission decision, transition plan, receipts, witness, and recontact state.

B07 SELFMOATS — evaluate all applicable boundary policies for every proposed crossing.

B08 AUTHORITY + ADMISSION — independently evaluate owner-bound authority, scope, validity, revocation, capability, target, graph revision, and policy. Missing or unresolved proof blocks the transition.

B09 ACTIMANIRUN — execute only the exact admitted transition through a resident, bounded actuator. No model-generated shell command or arbitrary tool invocation is permitted.

B10 WITNESS + REALISELF — observe the resulting state and compare it with explicit effect predicates. The executor cannot serve as its own independent witness.

B11 RECONTACT — re-read current state, verify evidence lineage, revocation, and recovery conditions. Do not resume from stale session state.

## 4. Fail-closed rules

- Missing identity, jurisdiction, topology provenance, authority, admission, capability binding, or effect predicate blocks the relevant gate.
- UNKNOWN, NOT_COLLECTED, UNSUPPORTED, and ERROR remain distinct states; none is silently converted to PASS.
- A model response can establish a cognition event only. It cannot establish authority, admission, actuation, effect, or independent witness coverage.
- A health endpoint proves only the response observed from that endpoint at that time.
- A receipt proves only the claims supported by its retained evidence.
- A session graph is immutable after sealing. Any change creates a new graph revision and digest.

## 5. Launch definition

OBSERVATION_BOOTED means the reality identity, host recontact, evidence inventory, and session graph are compiled and validated in observation-only mode.

LAUNCH_READY means all five gates in CONFORMANCE/CHAMBOXREALITY-BOOT-GATES-v0.1.md pass for the exact reality, instance, graph revision, and transition.

LAUNCHED means a specifically admitted transition has been executed, its effects independently observed, its receipt retained, and recontact completed. A model loading or website health response is not a launch.
