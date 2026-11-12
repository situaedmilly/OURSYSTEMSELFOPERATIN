# SELFGRAPH ↔ ACTIMANIRUN · Executable Interface Contract v0.1

**Status:** PROPOSED INTERFACE · CONFORMANCE REQUIRED BEFORE EXECUTION  
**Purpose:** Bind every transition to one immutable session graph, one authority decision, and one admission decision.

## 1. Session graph contract

Each ACTIMANIRUN session receives its own SELFGRAPH snapshot. The snapshot may reference an approved canonical topology by topology_id, topology_revision, and topology_digest. It must independently bind:

- reality_id, instance_id, session_id;
- graph_id and immutable graph_revision;
- evidence_refs and provenance digests;
- capability_refs and their declaration/admission states;
- authority_ref;
- admission_ref;
- transition_plan;
- cognition_events;
- execution_receipts;
- observed_effect_refs;
- witness_ref;
- recontact_ref;
- isolation and parent_session_ref.

No session inherits authority, admission, execution state, nonce, receipt, or witness evaluation from another session. Parent topology references are allowed; parent permission inheritance is forbidden.

## 2. ACTIMANIRUN request envelope

Every transition request binds:
- request_id and idempotency_key;
- reality_id, instance_id, session_id;
- graph_id, graph_revision, and graph digest;
- transition_id, action, target, and arguments digest;
- capability references;
- authority reference and exact requested scope;
- admission reference;
- precondition evidence references;
- expected effect predicates;
- deadline and cancellation policy.

The actuator must reject a request if any identity or digest differs from the sealed session graph.

## 3. Evaluation order

1. Resolve the exact reality, instance, session, graph, and target.
2. Verify graph integrity and topology revision.
3. Verify actor identity and jurisdiction.
4. Verify owner-bound authority, exact action/target scope, validity, and revocation.
5. Verify capability declaration and platform enforcement binding.
6. Evaluate all applicable SELFMOATS crossing policies.
7. Create an admission decision bound to the exact graph digest and authority reference.
8. Dispatch only the admitted transition to the resident actuator.
9. Observe the effect against explicit predicates.
10. Retain a receipt and independent witness evaluation.
11. Recontact the resulting state before closing the session.

Any failed, missing, expired, contradictory, or unresolved prerequisite blocks dispatch.

## 4. Receipt semantics

An execution receipt records the transition and the evidence actually observed. It is not itself an authority grant, admission decision, proof of effectiveness, or independent witness.

Receipt fields include receipt_id, transition_id, reality_id, instance_id, session_id, graph_id, graph_revision, authority_ref, admission_ref, actuator identity, start/end timestamps, outcome classification, observation references, evidence digests, and integrity digest.

## 5. Independent witness

The witness must have a distinct trust boundary from the executor and must evaluate domain-specific effect predicates. If independent coverage is unavailable, classify the result as SELF_REPORTED or WITNESS_PENDING; do not claim independently verified effect.

## 6. Recontact and continuity

Recontact verifies current process/host state, graph and evidence digests, authority validity, revocation, and session status. Recovery may restore only state and authority explicitly re-established by the governing authority mechanism.

## 7. Prohibited shortcuts

- Model output → shell execution.
- Capability declaration → admission.
- Admission → automatic execution.
- Receipt → effect.
- Executor log → independent witness.
- Parent session → child authority.
- Historical graph → current process status.
- Repository commit → runtime launch.
