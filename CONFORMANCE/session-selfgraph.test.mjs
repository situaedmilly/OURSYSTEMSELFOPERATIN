import test from "node:test";
import assert from "node:assert/strict";
import { validateSessionSelfGraph } from "../OURSELF/SELFGRAPH/validate-session-selfgraph.mjs";
import fixture from "./fixtures/session-selfgraph-observation-only.v0.1.json" with { type: "json" };

test("accepts an isolated observation-only session graph", () => {
  const result = validateSessionSelfGraph(fixture);
  assert.deepEqual(result, { valid: true, errors: [] });
});

test("rejects inherited authority", () => {
  const graph = structuredClone(fixture);
  graph.isolation.inherits_authority = true;
  assert.ok(validateSessionSelfGraph(graph).errors.includes("AUTHORITY_INHERITANCE_FORBIDDEN"));
});

test("rejects inherited execution state", () => {
  const graph = structuredClone(fixture);
  graph.isolation.inherits_execution_state = true;
  assert.ok(validateSessionSelfGraph(graph).errors.includes("EXECUTION_STATE_INHERITANCE_FORBIDDEN"));
});

test("rejects an executing session without authority and admission", () => {
  const graph = structuredClone(fixture);
  graph.session_status = "EXECUTING";
  const result = validateSessionSelfGraph(graph);
  assert.ok(result.errors.includes("SESSION_STATE_EXCEEDS_AUTHORITY"));
  assert.ok(result.errors.includes("SESSION_STATE_EXCEEDS_ADMISSION"));
  assert.ok(result.errors.includes("EXECUTING_SESSION_HAS_NO_TRANSITIONS"));
});

test("rejects an admitted transition without delegated authority", () => {
  const graph = structuredClone(fixture);
  graph.transition_plan.push({
    transition_id:"T-1",action:"WRITE",target:"target",
    capability_refs:["filesystem.write"],required_authority_scope:["write"],
    status:"EXECUTING",preconditions:[],expected_effect_predicates:[]
  });
  assert.ok(validateSessionSelfGraph(graph).errors.includes("TRANSITION_WITHOUT_DELEGATED_AUTHORITY:T-1"));
  assert.ok(validateSessionSelfGraph(graph).errors.includes("TRANSITION_WITHOUT_ADMISSION:T-1"));
});

test("rejects admission without exact decision bindings", () => {
  const graph = structuredClone(fixture);
  graph.authority_ref.status = "DELEGATED";
  graph.admission_ref.status = "ADMITTED";
  const result = validateSessionSelfGraph(graph);
  assert.ok(result.errors.includes("ADMISSION_DECISION_BINDING_INCOMPLETE"));
});

test("cognition evidence does not confer execution authority", () => {
  const graph = structuredClone(fixture);
  assert.equal(graph.cognition_events.length, 1);
  assert.equal(graph.authority_ref.status, "NONE");
  assert.equal(graph.admission_ref.status, "NOT_REQUESTED");
  assert.deepEqual(validateSessionSelfGraph(graph), { valid: true, errors: [] });
});

test("rejects a receipt without a corresponding receipted transition", () => {
  const graph = structuredClone(fixture);
  graph.execution_receipts.push({
    receipt_id:"R-1",transition_id:"T-MISSING",
    receipt_digest:"sha256:" + "c".repeat(64),
    created_at:"2026-11-12T18:55:20Z",evidence_refs:[]
  });
  assert.ok(validateSessionSelfGraph(graph).errors.includes("RECEIPT_WITHOUT_SESSION_TRANSITION:R-1"));
});
