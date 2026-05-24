import { Text, View } from "react-native";
import { TimelineEvent } from "@/types/enquiry";
import { formatDateTime } from "@/utils/date";

interface TimelineItemProps {
  event: TimelineEvent;
  isLast: boolean;
}

export const TimelineItem = ({ event, isLast }: TimelineItemProps) => (
  <View className="flex-row">
    <View className="items-center">
      <View className="h-2.5 w-2.5 rounded-full bg-brand-600" />
      {!isLast ? <View className="h-10 w-[2px] bg-slate-200" /> : null}
    </View>
    <View className="ml-3 pb-4">
      <Text className="text-sm font-semibold text-slate-800">{event.label}</Text>
      <Text className="mt-1 text-xs text-slate-500">{formatDateTime(event.timestamp)}</Text>
    </View>
  </View>
);
