export function validateSessionSelfGraph(graph) {
  const errors = [];
  const required = [
    "reality_id", "instance_id", "session_id", "graph_id", "graph_revision",
    "topology_id", "topology_revision", "topology_digest", "created_at",
    "session_status", "evidence_refs", "capability_refs", "authority_ref",
    "admission_ref", "transition_plan", "cognition_events", "execution_receipts",
    "observed_effect_refs", "witness_ref", "recontact_ref", "isolation"
  ];
  if (!graph || typeof graph !== "object" || Array.isArray(graph)) {
    return { valid: false, errors: ["GRAPH_MUST_BE_OBJECT"] };
  }
  for (const key of required) {
    if (!(key in graph)) errors.push("MISSING_FIELD:" + key);
  }
  if (errors.length) return { valid: false, errors };
  if (graph.isolation.inherits_authority !== false) errors.push("AUTHORITY_INHERITANCE_FORBIDDEN");
  if (graph.isolation.inherits_execution_state !== false) errors.push("EXECUTION_STATE_INHERITANCE_FORBIDDEN");
  if (graph.isolation.topology_reference_only !== true) errors.push("TOPOLOGY_MUST_BE_REFERENCE_ONLY");
  if (!/^sha256:[0-9a-f]{64}$/.test(graph.topology_digest)) errors.push("INVALID_TOPOLOGY_DIGEST");
  if (graph.authority_ref.status === "NONE" && ["ADMITTED", "EXECUTING"].includes(graph.session_status)) {
    errors.push("SESSION_STATE_EXCEEDS_AUTHORITY");
  }
  if (graph.admission_ref.status !== "ADMITTED" && ["ADMITTED", "EXECUTING"].includes(graph.session_status)) {
    errors.push("SESSION_STATE_EXCEEDS_ADMISSION");
  }
  if (graph.admission_ref.status === "ADMITTED") {
    if (graph.authority_ref.status !== "DELEGATED") errors.push("ADMISSION_REQUIRES_DELEGATED_AUTHORITY");
    if (!graph.admission_ref.decision_id || !graph.admission_ref.graph_digest || !graph.admission_ref.authority_ref_digest) {
      errors.push("ADMISSION_DECISION_BINDING_INCOMPLETE");
    }
  }
  for (const transition of graph.transition_plan) {
    if (["ADMITTED", "EXECUTING", "OBSERVED", "RECEIPTED"].includes(transition.status)) {
      if (graph.authority_ref.status !== "DELEGATED") errors.push("TRANSITION_WITHOUT_DELEGATED_AUTHORITY:" + transition.transition_id);
      if (graph.admission_ref.status !== "ADMITTED") errors.push("TRANSITION_WITHOUT_ADMISSION:" + transition.transition_id);
    }
  }
  for (const receipt of graph.execution_receipts) {
    const transition = graph.transition_plan.find(item => item.transition_id === receipt.transition_id);
    if (!transition) errors.push("RECEIPT_WITHOUT_SESSION_TRANSITION:" + receipt.receipt_id);
    else if (transition.status !== "RECEIPTED") errors.push("RECEIPT_TRANSITION_NOT_RECEIPTED:" + receipt.receipt_id);
  }
  if (graph.witness_ref.status === "EVALUATED" && (!graph.witness_ref.witness_id || !graph.witness_ref.independence_basis || !graph.witness_ref.evaluation_ref)) {
    errors.push("WITNESS_EVALUATION_BINDING_INCOMPLETE");
  }
  if (graph.session_status === "EXECUTING" && graph.transition_plan.length === 0) {
    errors.push("EXECUTING_SESSION_HAS_NO_TRANSITIONS");
  }
  return { valid: errors.length === 0, errors };
}
