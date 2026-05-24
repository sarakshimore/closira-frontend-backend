import { Text, View } from "react-native";
import { Message } from "@/types/enquiry";
import { formatTime } from "@/utils/date";

interface MessageBubbleProps {
  message: Message;
}

export const MessageBubble = ({ message }: MessageBubbleProps) => {
  const inbound = message.direction === "inbound";
  return (
    <View className={`mb-3 ${inbound ? "items-start" : "items-end"}`}>
      <View className={`max-w-[82%] rounded-2xl px-4 py-3 ${inbound ? "bg-slate-200" : "bg-brand-600"}`}>
        <Text className={`text-sm leading-5 ${inbound ? "text-slate-900" : "text-white"}`}>{message.text}</Text>
      </View>
      <Text className="mt-1 text-[11px] text-slate-500">{formatTime(message.timestamp)}</Text>
    </View>
  );
};
