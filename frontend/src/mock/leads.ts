import { Lead } from "@/types/enquiry";

export const leads: Lead[] = [
  { id: "enq_001", customer: "Sarah M.", channel: "whatsapp", status: "escalated", receivedAt: "2026-05-24T09:14:00Z", summary: "Customer unhappy with quote and requested manager support." },
  { id: "enq_002", customer: "Nimbus Bakery", channel: "email", status: "new", receivedAt: "2026-05-24T08:28:00Z", summary: "Asked for trial access and monthly pricing details." },
  { id: "enq_003", customer: "Daniel P.", channel: "call", status: "qualified", receivedAt: "2026-05-24T07:55:00Z", summary: "Needs WhatsApp campaign setup for local stores." },
  { id: "enq_004", customer: "Aster Dental", channel: "email", status: "new", receivedAt: "2026-05-24T06:32:00Z", summary: "Requested integration with existing CRM workflow." },
  { id: "enq_005", customer: "Rina K.", channel: "whatsapp", status: "qualified", receivedAt: "2026-05-24T05:12:00Z", summary: "Interested in chatbot automation for appointment reminders." },
  { id: "enq_006", customer: "Brooklyn Bites", channel: "call", status: "escalated", receivedAt: "2026-05-24T04:47:00Z", summary: "Reported delayed response SLA and asked for urgent callback." },
  { id: "enq_007", customer: "Elliot S.", channel: "email", status: "new", receivedAt: "2026-05-23T18:16:00Z", summary: "Needs demo for multi-location customer inbox routing." },
  { id: "enq_008", customer: "Tara Wellness", channel: "whatsapp", status: "qualified", receivedAt: "2026-05-23T16:41:00Z", summary: "Asked about analytics dashboard and conversion tracking." },
  { id: "enq_009", customer: "Metro Mobility", channel: "call", status: "new", receivedAt: "2026-05-23T15:22:00Z", summary: "Wants migration plan from legacy ticketing setup." },
  { id: "enq_010", customer: "Nina & Co", channel: "email", status: "escalated", receivedAt: "2026-05-23T13:05:00Z", summary: "Escalated due to billing mismatch and renewal dispute." }
];
