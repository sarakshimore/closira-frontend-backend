import { Text, View } from "react-native";
import { LeadStatus } from "@/types/enquiry";
import { STATUS_STYLES } from "@/utils/constants";

interface StatusBadgeProps {
  status: LeadStatus;
}

export const StatusBadge = ({ status }: StatusBadgeProps) => {
  const style = STATUS_STYLES[status];
  return (
    <View style={{ backgroundColor: style.bg }} className="rounded-full px-3 py-1">
      <Text style={{ color: style.text }} className="text-xs font-semibold">
        {style.label}
      </Text>
    </View>
  );
};
