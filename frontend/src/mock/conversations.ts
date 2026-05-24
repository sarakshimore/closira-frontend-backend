import { Conversation } from "@/types/enquiry";

export const conversations: Conversation[] = [
  {
    id: "conv_001",
    leadId: "enq_001",
    sopMatch: "Pricing objections playbook",
    aiSummary: "Customer is price sensitive, comparing vendors. Recommends manager outreach with revised package options.",
    messages: [
      { id: "m1", direction: "inbound", text: "Your quote is much higher than others. Can someone senior review this?", timestamp: "2026-05-24T09:15:00Z" },
      { id: "m2", direction: "outbound", text: "Thanks for raising this. I am escalating it to our account manager right away.", timestamp: "2026-05-24T09:18:00Z" },
      { id: "m3", direction: "inbound", text: "Please call me today. I need to decide before evening.", timestamp: "2026-05-24T09:25:00Z" }
    ],
    timeline: [
      { id: "t1", label: "Enquiry created", timestamp: "2026-05-24T09:14:00Z" },
      { id: "t2", label: "SOP matched", timestamp: "2026-05-24T09:16:00Z" },
      { id: "t3", label: "Follow-up scheduled", timestamp: "2026-05-24T09:20:00Z" },
      { id: "t4", label: "Escalated", timestamp: "2026-05-24T10:04:00Z" }
    ]
  },
  {
    id: "conv_002",
    leadId: "enq_003",
    sopMatch: "Inbound call qualification SOP",
    aiSummary: "High-intent lead from a regional chain. Needs implementation plan and sample campaign within 48 hours.",
    messages: [
      { id: "m4", direction: "inbound", text: "We run five stores and need centralized WhatsApp handling.", timestamp: "2026-05-24T07:56:00Z" },
      { id: "m5", direction: "outbound", text: "Great fit. I can share a rollout plan tailored for multi-store operations.", timestamp: "2026-05-24T08:00:00Z" }
    ],
    timeline: [
      { id: "t5", label: "Enquiry created", timestamp: "2026-05-24T07:55:00Z" },
      { id: "t6", label: "SOP matched", timestamp: "2026-05-24T07:57:00Z" },
      { id: "t7", label: "Follow-up scheduled", timestamp: "2026-05-24T08:05:00Z" }
    ]
  },
  {
    id: "conv_003",
    leadId: "enq_006",
    sopMatch: "Service recovery and escalation SOP",
    aiSummary: "Lead flagged missed callback expectations. Recovery path suggests urgent call and SLA assurance.",
    messages: [
      { id: "m6", direction: "inbound", text: "No one called us back yesterday. This is urgent.", timestamp: "2026-05-24T04:49:00Z" },
      { id: "m7", direction: "outbound", text: "Apologies for the delay. A senior specialist will call within 15 minutes.", timestamp: "2026-05-24T04:53:00Z" }
    ],
    timeline: [
      { id: "t8", label: "Enquiry created", timestamp: "2026-05-24T04:47:00Z" },
      { id: "t9", label: "SOP matched", timestamp: "2026-05-24T04:50:00Z" },
      { id: "t10", label: "Escalated", timestamp: "2026-05-24T08:13:00Z" }
    ]
  },
  {
    id: "conv_004",
    leadId: "enq_008",
    sopMatch: "Analytics discovery SOP",
    aiSummary: "Qualified lead evaluating reporting depth. Suggested personalized walkthrough with metrics examples.",
    messages: [
      { id: "m8", direction: "inbound", text: "Can you track conversion from WhatsApp chats?", timestamp: "2026-05-23T16:43:00Z" },
      { id: "m9", direction: "outbound", text: "Yes, we can track lead-to-conversion with campaign attribution dashboards.", timestamp: "2026-05-23T16:47:00Z" }
    ],
    timeline: [
      { id: "t11", label: "Enquiry created", timestamp: "2026-05-23T16:41:00Z" },
      { id: "t12", label: "SOP matched", timestamp: "2026-05-23T16:44:00Z" },
      { id: "t13", label: "Follow-up scheduled", timestamp: "2026-05-23T16:55:00Z" }
    ]
  },
  {
    id: "conv_005",
    leadId: "enq_010",
    sopMatch: "Billing dispute SOP",
    aiSummary: "Customer disputes renewal amount and asks for invoice line-item clarification before continuing.",
    messages: [
      { id: "m10", direction: "inbound", text: "The renewal invoice amount does not match the previous commitment.", timestamp: "2026-05-23T13:07:00Z" },
      { id: "m11", direction: "outbound", text: "I understand. I have escalated this to our finance team for review.", timestamp: "2026-05-23T13:10:00Z" }
    ],
    timeline: [
      { id: "t14", label: "Enquiry created", timestamp: "2026-05-23T13:05:00Z" },
      { id: "t15", label: "SOP matched", timestamp: "2026-05-23T13:07:00Z" },
      { id: "t16", label: "Escalated", timestamp: "2026-05-23T13:37:00Z" }
    ]
  }
];
