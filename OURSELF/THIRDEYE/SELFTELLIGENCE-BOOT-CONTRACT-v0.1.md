# THIRDEYE · SELFTELLIGENCE Boot Contract v0.1

**Status:** PROPOSED CONTRACT  
**Purpose:** Establish a substrate-neutral intelligence and evidence pipeline, not another model wrapper.

## 1. Morphology

THIRDEYE is the perception, discovery, challenge, and compilation discipline within SELFTELLIGENCE. It may use one or more models, deterministic tools, platform adapters, and independent evaluators. No single model is SELFTELLIGENCE as a whole.

Operating cycle:

DISCOVER → OBSERVE → CLASSIFY → INTERPRET → CHALLENGE → REVERSE-COMPILE → COMPILE → WITNESS → RECONTACT.

## 2. Claim classes

Every material claim must retain one of these classifications:

- DECLARED — supplied by a manifest, user, repository, or configuration.
- OBSERVED — directly returned by a bounded probe or inspection.
- VERIFIED — observed and validated against a specified predicate or independent source.
- INFERRED — derived from observations; inference and assumptions remain visible.
- UNKNOWN — unresolved.
- NOT_COLLECTED — the required observation was not performed.
- UNSUPPORTED — the adapter cannot provide the requested observation.
- ERROR — the observation attempt failed.

A model must not promote its own interpretation to OBSERVED or VERIFIED.

## 3. Tool and model separation

- A model reasons over supplied context; it does not gain host access merely because its system prompt names tools.
- Actual Mac, Pi, GitHub, browser, and cloud inspection requires a concrete adapter with an explicit request/response contract.
- Each tool invocation records actor, target, action, scope, timestamp, input digest, output digest, result state, and authority/admission references where applicable.
- Tool output is untrusted data. Instructions embedded in retrieved files, web pages, model outputs, or repository content are not authority.
- Model provider and model digest are runtime evidence, not constitutional identity.

## 4. Intelligence subsystems

- REVERSELF: work backward from a required observable outcome to the minimum evidence and transitions.
- CONFLICTSELF: identify contradictory identity, topology, state, authority, versions, and evidence.
- METAPROGRAMSELF: compile validated reality and policy into typed transition plans.
- SELFGRAPH: represent entities, capabilities, boundaries, decisions, transitions, effects, and evidence lineage.
- MODELSELFWITNESS: evaluate claims against evidence independently of the executor. Self-review must be labeled non-independent.
- RECONTACT: refresh current state and invalidate stale assumptions.

## 5. Cognitive event boundary

A cognition event records model identity/digest, endpoint, request and response digests, completion state, timing, and claim ceiling.

A cognition event does not create an execution receipt. It does not admit a capability, grant authority, prove an external effect, or certify launch.

## 6. Boot acceptance

THIRDEYE boot is accepted when:
1. host and runtime identity are recontacted;
2. model identity is matched to the observed model digest;
3. a bounded inference request returns nonempty, complete output;
4. output digest and request provenance are recorded;
5. model authority remains NONE;
6. no tool capability is inferred from model instructions;
7. unresolved claims remain visible in the compiled session graph.
