import { Escalation } from "@/types/enquiry";

export const escalations: Escalation[] = [
  { id: "esc_001", leadId: "enq_001", customer: "Sarah M.", channel: "whatsapp", reason: "Pricing complaint", timestamp: "2026-05-24T10:04:00Z", urgency: "high", resolved: false },
  { id: "esc_002", leadId: "enq_006", customer: "Brooklyn Bites", channel: "call", reason: "SLA breach concern", timestamp: "2026-05-24T08:13:00Z", urgency: "high", resolved: false },
  { id: "esc_003", leadId: "enq_010", customer: "Nina & Co", channel: "email", reason: "Billing discrepancy", timestamp: "2026-05-23T13:37:00Z", urgency: "medium", resolved: false },
  { id: "esc_004", leadId: "enq_003", customer: "Daniel P.", channel: "call", reason: "Contract clause clarification", timestamp: "2026-05-23T09:55:00Z", urgency: "medium", resolved: false },
  { id: "esc_005", leadId: "enq_007", customer: "Elliot S.", channel: "email", reason: "Delayed demo scheduling", timestamp: "2026-05-22T16:45:00Z", urgency: "medium", resolved: false }
];
