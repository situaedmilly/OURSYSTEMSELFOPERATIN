# OSOS Production Trust Boundary for GENESIS

**Contract ID:** OSOS-GENESIS-TRUST-001  
**Version:** 0.1.0  
**State:** IMPLEMENTATION CONTRACT — production trust anchor and signatures NOT YET ESTABLISHED  
**Scope:** `ourself-genesisd` resident control plane only  
**Authority ceiling:** bounded bootstrap and continuity coordination; no ambient ecosystem authority

## 1. Purpose

Establish a verifiable OSOS trust boundary for the GENESIS resident control plane. GENESIS may verify its own narrowly scoped authority and may coordinate governed boot phases. It may not originate OSOS authority, widen its own scope, or transfer its authority to OSOS, DATASELF, SELFWITNESS, MODELSELF, AgentBridge, PORTAL, OURTUNNELSELF, the Pi, or an external-effect executor.

A running daemon, valid TLS connection, local receipt, Git commit, model output, or successful test is not an authority instrument.

## 2. Key hierarchy and custody

The production hierarchy MUST be:

1. **OSOS offline root key** — Ed25519 key generated and retained in an offline hardware-backed signing environment. It signs only trust-anchor changes and narrowly scoped GENESIS subordinate-key certificates. It MUST NOT be available to the GENESIS process.
2. **GENESIS authority key** — Ed25519 subordinate key whose certificate names exactly one audience: `ourself-genesisd`. Its private key is held in an OS-protected signing boundary and is not exported to logs, Git, environment dumps, or model context.
3. **Pinned independent witness key** — Ed25519 public key pinned by fingerprint through an out-of-band verification ceremony. The witness private key MUST be controlled outside the GENESIS host and outside the initiating operator's control domain. A second process, second key on the same host, repository mirror, or self-issued signature is not an independent witness.

The OSOS root public-key fingerprint MUST be verified out-of-band before pinning. Public keys and signed certificates may be source-custodied. Private keys, recovery seeds, passphrases, and hardware-token exports MUST NEVER be committed.

## 3. GENESIS-only authority envelope

Every positive authority decision MUST be signed and bind all of the following:

- `decision_id`, `schema_version`, `issuer_key_id`, `audience`;
- exact `genesis_service_id = "ourself-genesisd"`;
- exact host identity, boot ID, runtime instance ID, and OSOS policy digest;
- one operation ID, one action, one resource, one expected preimage digest where applicable;
- one nonce, issue time, not-before time, expiry time, and monotonic revocation epoch;
- explicit constraints and a non-delegation flag;
- decision value and signature algorithm.

The only permitted audience is `ourself-genesisd`. Wildcard audiences, wildcard resources, wildcard actions, indefinite validity, transferable authority, and bearer tokens without host/session binding are invalid.

An authority decision is not a general ecosystem grant. It cannot authorize arbitrary shell, arbitrary filesystem access, arbitrary network egress, data deletion, secret export, external communications, payments, or effectful actions by downstream participants. Those require separate authority and admission instruments.

## 4. Canonical signature profile

- Algorithm: Ed25519.
- Payload canonicalization: RFC 8785 JSON Canonicalization Scheme (JCS).
- Signature preimage: UTF-8 bytes of the domain separator `OURSELF-OSOS-GENESIS-AUTHORITY-V1\0` followed by the JCS bytes of the unsigned payload.
- Signature envelope: `alg`, `key_id`, `payload`, `signature_base64url`.
- Verification MUST reject duplicate JSON member names before canonicalization, unknown critical fields, invalid timestamps, expired decisions, stale revocation epochs, unknown keys, invalid signatures, and any mismatch in audience, service, host, boot ID, runtime instance, policy digest, action, resource, operation ID, nonce, or preimage.
- A nonce is single-use for one decision. Replay MUST be rejected and recorded without re-actuation.

The signature authenticates the signed bytes and signer. It does not prove the truth of claims inside the payload or the correctness of a resulting effect.

## 5. Pinned witness protocol

The witness independently receives the exact GENESIS observation/receipt and verifies:
- the OSOS trust chain and revocation state;
- the GENESIS service, host, boot, and runtime identities;
- the exact operation, authority decision, and resulting-state readback;
- the receipt digest and chronology;
- the witness's own jurisdiction and independence.

The witness emits a separately signed attestation referencing the exact receipt digest and decision ID. It cannot create or broaden authority. If witness independence, key custody, or recontact cannot be established, the observation remains unwitnessed and GENESIS readiness remains restricted.

## 6. Fail-closed evaluation

GENESIS MUST remain restricted when any of these are missing or invalid:
- pinned OSOS root fingerprint;
- valid root-signed GENESIS subordinate certificate;
- signed, unexpired, host/session-bound authority decision;
- current signed revocation state;
- independently pinned witness identity and valid witness attestation for operations that require witnessing;
- exact runtime and policy binding.

A valid OSOS signature does not imply DATASELF recovery, participant admission, or ecosystem readiness. Each plane retains its own verifier and evidence.

## 7. Bootstrap boundary

The initial production authority decision SHOULD authorize only:
- GENESIS boot-contract evaluation;
- read-only host and resident-service observation;
- DATASELF recovery discovery and read-only verification;
- participant discovery without admission;
- publication of read-only GENESIS status.

It MUST NOT authorize writes to canonical DATASELF objects, participant actuation, external effects, authority delegation, or promotion to `ECOSYSTEM_READY`. Each later write or admission requires a separate fresh decision scoped to its exact operation and preimage.

## 8. Required implementation and ceremony gates

1. Implement strict duplicate-key-rejecting parsing and JCS canonicalization.
2. Implement Ed25519 chain verification, audience/host/session binding, nonce replay rejection, expiry, and revocation.
3. Generate the OSOS root and GENESIS subordinate key in the designated hardware-backed environment.
4. Verify and pin the root fingerprint out-of-band.
5. Identify an independent witness custodian and establish a separate control domain.
6. Issue and verify a signed GENESIS-only authority decision.
7. Run negative tests for wrong audience, wrong host, wrong boot ID, wrong runtime, wrong policy digest, expired/revoked key, replayed nonce, widened scope, invalid signature, missing witness, and tampered receipt.
8. Reboot and recontact from a later runtime; verify that authority is not silently inherited.

## 9. Current disposition

```
CONTRACT_SOURCE: COMMITTED_ON_DEDICATED_BRANCH
OSOS_ROOT_KEY: NOT_GENERATED_OR_PINNED
GENESIS_SUBORDINATE_KEY: NOT_GENERATED_OR_CERTIFIED
GENESIS_AUTHORITY_DECISION: NOT_SIGNED
INDEPENDENT_WITNESS: NOT_PINNED
REVOCATION_STATE: NOT_BOUND
PRODUCTION_TRUST: NOT_ESTABLISHED
GENESIS_SCOPE: DEFINED; NO AMBIENT AUTHORITY
```

This contract deliberately does not manufacture keys, signatures, witness identity, or production status. Those require the controlled key ceremony and independent verification described above.
