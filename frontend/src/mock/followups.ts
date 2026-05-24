import { FollowUp } from "@/types/enquiry";

export const followUps: FollowUp[] = [
  { id: "fol_001", leadId: "enq_002", customer: "Nimbus Bakery", dueAt: "2026-05-24T12:30:00Z", messagePreview: "Share onboarding timeline and trial activation steps.", completed: false },
  { id: "fol_002", leadId: "enq_003", customer: "Daniel P.", dueAt: "2026-05-24T14:00:00Z", messagePreview: "Send proposal with campaign onboarding package.", completed: false },
  { id: "fol_003", leadId: "enq_004", customer: "Aster Dental", dueAt: "2026-05-24T15:20:00Z", messagePreview: "Confirm CRM webhook support and setup checklist.", completed: false },
  { id: "fol_004", leadId: "enq_005", customer: "Rina K.", dueAt: "2026-05-24T16:15:00Z", messagePreview: "Provide sample reminder automation templates.", completed: true },
  { id: "fol_005", leadId: "enq_007", customer: "Elliot S.", dueAt: "2026-05-25T08:30:00Z", messagePreview: "Lock demo slot and share meeting agenda.", completed: false },
  { id: "fol_006", leadId: "enq_008", customer: "Tara Wellness", dueAt: "2026-05-25T10:00:00Z", messagePreview: "Walk through analytics metrics and dashboards.", completed: false },
  { id: "fol_007", leadId: "enq_009", customer: "Metro Mobility", dueAt: "2026-05-25T11:10:00Z", messagePreview: "Send migration prerequisites and timeline.", completed: true },
  { id: "fol_008", leadId: "enq_010", customer: "Nina & Co", dueAt: "2026-05-25T13:45:00Z", messagePreview: "Arrange finance call for billing resolution.", completed: false }
];
