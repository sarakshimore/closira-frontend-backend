import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LeadCard } from "@/components/cards/LeadCard";
import { EmptyState } from "@/components/common/EmptyState";
import { ScreenHeader } from "@/components/common/ScreenHeader";
import { leads } from "@/mock/leads";
import { RootStackParamList } from "@/types/navigation";

type NavProp = NativeStackNavigationProp<RootStackParamList>;

export const LeadsScreen = () => {
  const navigation = useNavigation<NavProp>();

  return (
    <SafeAreaView className="flex-1 bg-slate-100" edges={["top"]}>
      <ScrollView className="flex-1 bg-slate-100 px-4 pt-5">
        <ScreenHeader title="Inbound Leads" subtitle="Latest customer enquiries across channels." />
        <View className="pb-8">
          {leads.length === 0 ? (
            <EmptyState title="No leads yet" description="New customer enquiries will show up here as they arrive." />
          ) : (
            leads.map((lead) => (
              <LeadCard key={lead.id} lead={lead} onPress={() => navigation.navigate("ConversationDetail", { leadId: lead.id })} />
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
