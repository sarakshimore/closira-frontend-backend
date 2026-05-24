import { RouteProp, useRoute } from "@react-navigation/native";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MessageBubble } from "@/components/cards/MessageBubble";
import { SummaryCard } from "@/components/cards/SummaryCard";
import { EmptyState } from "@/components/common/EmptyState";
import { SectionHeader } from "@/components/common/SectionHeader";
import { TimelineItem } from "@/components/timeline/TimelineItem";
import { conversations } from "@/mock/conversations";
import { leads } from "@/mock/leads";
import { RootStackParamList } from "@/types/navigation";

type DetailRoute = RouteProp<RootStackParamList, "ConversationDetail">;

export const ConversationDetailScreen = () => {
  const { params } = useRoute<DetailRoute>();
  const conversation = conversations.find((item) => item.leadId === params.leadId);
  const lead = leads.find((item) => item.id === params.leadId);

  if (!conversation || !lead) {
    return (
      <SafeAreaView className="flex-1 bg-slate-100" edges={["top"]}>
        <View className="flex-1 bg-slate-100 px-4 pt-5">
          <EmptyState title="Conversation not found" description="The selected conversation could not be loaded." />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-slate-100" edges={["top"]}>
      <ScrollView className="flex-1 bg-slate-100 px-4 pt-5">
        <Text className="text-xl font-bold text-slate-900">{lead.customer}</Text>
        <Text className="mt-1 text-sm text-slate-500">
          {lead.channel.toUpperCase()} conversation - {lead.status.toUpperCase()}
        </Text>

        <View className="mt-4">
          <SummaryCard sopMatch={conversation.sopMatch} summary={conversation.aiSummary} />
        </View>

        <SectionHeader title="Message Thread" />
        <View className="mb-5 rounded-2xl bg-white p-4 shadow-sm">
          {conversation.messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
        </View>

        <SectionHeader title="Status Timeline" />
        <View className="mb-8 rounded-2xl bg-white p-4 shadow-sm">
          {conversation.timeline.map((event, index) => (
            <TimelineItem key={event.id} event={event} isLast={index === conversation.timeline.length - 1} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

