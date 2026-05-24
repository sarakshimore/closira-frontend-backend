import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScreenHeader } from "@/components/common/ScreenHeader";
import { SectionHeader } from "@/components/common/SectionHeader";
import { StatCard } from "@/components/cards/StatCard";
import { AppButton } from "@/components/common/AppButton";
import { LeadCard } from "@/components/cards/LeadCard";
import { dashboardStats } from "@/mock/dashboard";
import { leads } from "@/mock/leads";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/types/navigation";
import { useNavigation } from "@react-navigation/native";
import { sortByTimestampDesc } from "@/utils/helpers";

type NavProp = NativeStackNavigationProp<RootStackParamList, "Tabs">;

export const HomeScreen = () => {
  const navigation = useNavigation<NavProp>();
  const activity = sortByTimestampDesc(leads).slice(0, 4);

  return (
    <SafeAreaView className="flex-1 bg-slate-100" edges={["top"]}>
      <ScrollView className="flex-1 bg-slate-100 px-4 pt-5">
        <ScreenHeader title="Closira Dashboard" subtitle="Monitor customer conversations and next actions." />

        <View className="mb-6 flex-row flex-wrap justify-between gap-y-3">
          <StatCard label="Total Leads Today" value={dashboardStats.totalLeadsToday} />
          <StatCard label="Missed Enquiries" value={dashboardStats.missedEnquiries} />
          <StatCard label="Open Escalations" value={dashboardStats.openEscalations} />
          <StatCard label="Follow-ups Due" value={dashboardStats.followUpsDue} />
        </View>

        <SectionHeader title="Quick Actions" />
        <View className="mb-6 gap-2">
          <AppButton label="New Follow-up" onPress={() => navigation.navigate("Tabs")} />
          <AppButton label="Resolve Escalations" onPress={() => navigation.navigate("Tabs")} variant="secondary" />
          <AppButton label="Review Leads" onPress={() => navigation.navigate("Tabs")} variant="secondary" />
        </View>

        <SectionHeader title="Recent Activity" actionText="View all" />
        <View className="pb-8">
          {activity.map((lead) => (
            <View key={lead.id}>
              <LeadCard lead={lead} onPress={() => navigation.navigate("ConversationDetail", { leadId: lead.id })} />
              <Text className="mb-3 mt-[-8] px-1 text-xs text-slate-500">Status: {lead.status}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
