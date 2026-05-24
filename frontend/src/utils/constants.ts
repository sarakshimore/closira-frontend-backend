import { Channel, LeadStatus, Urgency } from "@/types/enquiry";
import { colors } from "@/theme/colors";

export const CHANNEL_STYLES: Record<Channel, { bg: string; text: string; label: string }> = {
  whatsapp: { bg: colors.channel.whatsappBg, text: colors.channel.whatsappText, label: "WhatsApp" },
  email: { bg: colors.channel.emailBg, text: colors.channel.emailText, label: "Email" },
  call: { bg: colors.channel.callBg, text: colors.channel.callText, label: "Call" }
};

export const STATUS_STYLES: Record<LeadStatus, { bg: string; text: string; label: string }> = {
  new: { bg: colors.status.newBg, text: colors.status.newText, label: "New" },
  qualified: { bg: colors.status.qualifiedBg, text: colors.status.qualifiedText, label: "Qualified" },
  escalated: { bg: colors.status.escalatedBg, text: colors.status.escalatedText, label: "Escalated" }
};

export const URGENCY_STYLES: Record<Urgency, { bg: string; text: string; label: string }> = {
  high: { bg: colors.urgency.highBg, text: colors.urgency.highText, label: "High" },
  medium: { bg: colors.urgency.mediumBg, text: colors.urgency.mediumText, label: "Medium" }
};
