import { Pressable, Text, View } from "react-native";
import { Lead } from "@/types/enquiry";
import { ChannelBadge } from "@/components/badges/ChannelBadge";
import { StatusBadge } from "@/components/badges/StatusBadge";
import { formatDateTime } from "@/utils/date";

interface LeadCardProps {
  lead: Lead;
  onPress: () => void;
}

export const LeadCard = ({ lead, onPress }: LeadCardProps) => (
  <Pressable onPress={onPress} className="mb-3 rounded-2xl bg-white p-4 shadow-sm">
    <View className="flex-row items-center justify-between">
      <Text className="text-base font-semibold text-slate-900">{lead.customer}</Text>
      <StatusBadge status={lead.status} />
    </View>
    <View className="mt-2 flex-row items-center gap-2">
      <ChannelBadge channel={lead.channel} />
      <Text className="text-xs text-slate-500">{formatDateTime(lead.receivedAt)}</Text>
    </View>
    <Text className="mt-3 text-sm leading-5 text-slate-700">{lead.summary}</Text>
  </Pressable>
);
