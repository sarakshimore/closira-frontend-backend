import { Conversation, Escalation, FollowUp, Lead } from "@/types/enquiry";

export const findConversationByLeadId = (conversations: Conversation[], leadId: string) =>
  conversations.find((item) => item.leadId === leadId);

export const sortByTimestampDesc = <T extends { receivedAt?: string; timestamp?: string; dueAt?: string }>(
  items: T[]
) => {
  return [...items].sort((a, b) => {
    const first = new Date(a.receivedAt || a.timestamp || a.dueAt || "").getTime();
    const second = new Date(b.receivedAt || b.timestamp || b.dueAt || "").getTime();
    return second - first;
  });
};

export const unresolvedEscalations = (items: Escalation[]) => items.filter((item) => !item.resolved);
export const pendingFollowUps = (items: FollowUp[]) => items.filter((item) => !item.completed);
export const escalatedLeads = (items: Lead[]) => items.filter((item) => item.status === "escalated");
