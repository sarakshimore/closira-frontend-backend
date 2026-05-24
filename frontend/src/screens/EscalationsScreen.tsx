import { useMemo, useState } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { EscalationCard } from "@/components/cards/EscalationCard";
import { EmptyState } from "@/components/common/EmptyState";
import { ScreenHeader } from "@/components/common/ScreenHeader";
import { escalations as mockEscalations } from "@/mock/escalations";
import { Escalation } from "@/types/enquiry";
import { RootStackParamList } from "@/types/navigation";
import { unresolvedEscalations } from "@/utils/helpers";

type NavProp = NativeStackNavigationProp<RootStackParamList>;

export const EscalationsScreen = () => {
  const [escalations, setEscalations] = useState<Escalation[]>(mockEscalations);
  const navigation = useNavigation<NavProp>();

  const activeItems = useMemo(() => unresolvedEscalations(escalations), [escalations]);

  const handleResolve = (id: string) => {
    setEscalations((current) => current.map((item) => (item.id === id ? { ...item, resolved: true } : item)));
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-100" edges={["top"]}>
      <ScrollView className="flex-1 bg-slate-100 px-4 pt-5">
        <ScreenHeader title="Escalations" subtitle="Urgent customer conversations that need attention." />
        <View className="pb-8">
          {activeItems.length === 0 ? (
            <EmptyState title="No active escalations" description="Great job. All escalations are currently resolved." />
          ) : (
            activeItems.map((item) => (
              <EscalationCard
                key={item.id}
                escalation={item}
                onResolve={() => handleResolve(item.id)}
                onPress={() => navigation.navigate("ConversationDetail", { leadId: item.leadId })}
              />
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
