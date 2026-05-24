export type Channel = "whatsapp" | "email" | "call";
export type LeadStatus = "new" | "qualified" | "escalated";
export type Urgency = "high" | "medium";
export type MessageDirection = "inbound" | "outbound";

export interface Lead {
  id: string;
  customer: string;
  channel: Channel;
  status: LeadStatus;
  receivedAt: string;
  summary: string;
}

export interface Escalation {
  id: string;
  leadId: string;
  customer: string;
  channel: Channel;
  reason: string;
  timestamp: string;
  urgency: Urgency;
  resolved: boolean;
}

export interface FollowUp {
  id: string;
  leadId: string;
  customer: string;
  dueAt: string;
  messagePreview: string;
  completed: boolean;
}

export interface Message {
  id: string;
  direction: MessageDirection;
  text: string;
  timestamp: string;
}

export interface TimelineEvent {
  id: string;
  label: string;
  timestamp: string;
}

export interface Conversation {
  id: string;
  leadId: string;
  sopMatch: string;
  aiSummary: string;
  messages: Message[];
  timeline: TimelineEvent[];
}

export interface DashboardStats {
  totalLeadsToday: number;
  missedEnquiries: number;
  openEscalations: number;
  followUpsDue: number;
}
