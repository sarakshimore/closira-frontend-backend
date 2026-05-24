import { Text, View } from "react-native";
import { Channel } from "@/types/enquiry";
import { CHANNEL_STYLES } from "@/utils/constants";

interface ChannelBadgeProps {
  channel: Channel;
}

export const ChannelBadge = ({ channel }: ChannelBadgeProps) => {
  const style = CHANNEL_STYLES[channel];
  return (
    <View style={{ backgroundColor: style.bg }} className="rounded-full px-3 py-1">
      <Text style={{ color: style.text }} className="text-xs font-semibold">
        {style.label}
      </Text>
    </View>
  );
};
