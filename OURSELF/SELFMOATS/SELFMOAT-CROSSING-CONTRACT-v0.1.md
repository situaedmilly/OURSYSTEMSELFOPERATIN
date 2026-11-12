# SELFMOATS · Cross-Reality Boundary and Crossing Contract v0.1

**Status:** PROPOSED CONTRACT  
**Purpose:** Protect reality identity, authority, capabilities, execution, evidence, and continuity across heterogeneous substrates.

## 1. SELFMOAT is a crossing protocol

A moat is not merely a firewall or network segment. It is an independently governed policy boundary. A crossing is a typed, scoped request from one bounded reality to another. Open discovery does not imply open trust.

Every crossing records source reality, destination reality, actor identity, target, requested capability, exact action, authority reference, admission decision, validity interval, nonce/idempotency key, applicable moat decisions, and evidence receipt.

No successful crossing creates general or transitive trust.

## 2. Seven moat domains

1. IDENTITYMOAT — binds actor, instance, and jurisdiction to verified identity evidence.
2. AUTHORITYMOAT — validates owner-bound delegated authority, scope, validity, threshold, and revocation.
3. REALITYMOAT — isolates reality and session state; topology references do not transfer state.
4. CAPABILITYMOAT — maps declared capability to an enforceable platform control and explicit admission.
5. EXECUTIONMOAT — restricts ACTIMANIRUN to the exact admitted transition and resident actuator.
6. EVIDENCEMOAT — protects provenance, integrity, retention, witness independence, and receipt lineage.
7. CONTINUITYMOAT — controls recontact, recovery, expiry, replay protection, and session termination.

## 3. Crossing decision

A crossing is denied unless all applicable moat policies return PASS for the same request digest, source/destination identities, target, action, authority reference, and validity interval.

The decision vocabulary is PASS, DENY, UNKNOWN, NOT_COLLECTED, UNSUPPORTED, and ERROR. Only PASS authorizes the next evaluation stage. UNKNOWN is not a permissive state.

## 4. Isolation invariants

- No implicit authority inheritance.
- No implicit execution-state inheritance.
- No implicit capability inheritance.
- No transitive trust from a successful prior crossing.
- No replay of expired or consumed crossing requests.
- No mutation of canonical topology from a session graph.
- No external input may directly invoke an actuator.
- A model cannot approve its own crossing.

## 5. Platform neutrality

macOS, Raspberry Pi/Linux, cloud, agent, browser, and mobile are execution or interaction realities, not separate constitutional systems. Each adapter declares its actual controls and evidence. A platform is not certified by the existence of an adapter profile.

Siri, Android, browser UI, model endpoint, and cloud service are interfaces or substrates. None becomes the source of OSOS authority.

## 6. Failure and recovery

On denial, timeout, invalid identity, digest mismatch, revoked authority, replay, or witness failure: stop the crossing, preserve the observation, record the reason, and require fresh evaluation. Recovery re-establishes identity and authority; it does not resurrect expired grants.
