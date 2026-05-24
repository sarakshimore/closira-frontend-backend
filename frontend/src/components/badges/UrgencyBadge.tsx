import { Text, View } from "react-native";
import { Urgency } from "@/types/enquiry";
import { URGENCY_STYLES } from "@/utils/constants";

interface UrgencyBadgeProps {
  urgency: Urgency;
}

export const UrgencyBadge = ({ urgency }: UrgencyBadgeProps) => {
  const style = URGENCY_STYLES[urgency];
  return (
    <View style={{ backgroundColor: style.bg }} className="rounded-full px-3 py-1">
      <Text style={{ color: style.text }} className="text-xs font-semibold">
        {style.label}
      </Text>
    </View>
  );
};
