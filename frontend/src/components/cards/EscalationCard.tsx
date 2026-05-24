import { Pressable, Text, View } from "react-native";
import { Escalation } from "@/types/enquiry";
import { ChannelBadge } from "@/components/badges/ChannelBadge";
import { UrgencyBadge } from "@/components/badges/UrgencyBadge";
import { AppButton } from "@/components/common/AppButton";
import { formatDateTime } from "@/utils/date";

interface EscalationCardProps {
  escalation: Escalation;
  onPress: () => void;
  onResolve: () => void;
}

export const EscalationCard = ({ escalation, onPress, onResolve }: EscalationCardProps) => (
  <Pressable onPress={onPress} className="mb-3 rounded-2xl bg-white p-4 shadow-sm">
    <View className="flex-row items-center justify-between">
      <Text className="text-base font-semibold text-slate-900">{escalation.customer}</Text>
      <UrgencyBadge urgency={escalation.urgency} />
    </View>
    <View className="mt-2 flex-row items-center gap-2">
      <ChannelBadge channel={escalation.channel} />
      <Text className="text-xs text-slate-500">{formatDateTime(escalation.timestamp)}</Text>
    </View>
    <Text className="mt-3 text-sm text-slate-700">{escalation.reason}</Text>
    <View className="mt-4">
      <AppButton label="Resolve" onPress={onResolve} />
    </View>
  </Pressable>
);
