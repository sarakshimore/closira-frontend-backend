import { Text, View } from "react-native";
import { FollowUp } from "@/types/enquiry";
import { AppButton } from "@/components/common/AppButton";
import { formatDateTime } from "@/utils/date";

interface FollowUpCardProps {
  item: FollowUp;
  onMarkDone: () => void;
}

export const FollowUpCard = ({ item, onMarkDone }: FollowUpCardProps) => (
  <View className="mb-3 rounded-2xl bg-white p-4 shadow-sm">
    <View className="flex-row items-center justify-between">
      <Text className="text-base font-semibold text-slate-900">{item.customer}</Text>
      <Text className={`text-xs font-semibold ${item.completed ? "text-green-600" : "text-amber-600"}`}>
        {item.completed ? "Completed" : "Pending"}
      </Text>
    </View>
    <Text className="mt-2 text-xs text-slate-500">Due: {formatDateTime(item.dueAt)}</Text>
    <Text className="mt-3 text-sm text-slate-700">{item.messagePreview}</Text>
    {!item.completed ? (
      <View className="mt-4">
        <AppButton label="Mark As Done" onPress={onMarkDone} variant="secondary" />
      </View>
    ) : null}
  </View>
);
