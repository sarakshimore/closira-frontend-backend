import { useMemo, useState } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FollowUpCard } from "@/components/cards/FollowUpCard";
import { EmptyState } from "@/components/common/EmptyState";
import { ScreenHeader } from "@/components/common/ScreenHeader";
import { followUps as mockFollowUps } from "@/mock/followups";
import { FollowUp } from "@/types/enquiry";
import { pendingFollowUps } from "@/utils/helpers";

export const FollowUpsScreen = () => {
  const [followUps, setFollowUps] = useState<FollowUp[]>(mockFollowUps);
  const pending = useMemo(() => pendingFollowUps(followUps), [followUps]);

  const handleMarkDone = (id: string) => {
    setFollowUps((current) => current.map((item) => (item.id === id ? { ...item, completed: true } : item)));
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-100" edges={["top"]}>
      <ScrollView className="flex-1 bg-slate-100 px-4 pt-5">
        <ScreenHeader title="Follow-ups" subtitle="Scheduled customer follow-ups and outreach tasks." />
        <View className="pb-8">
          {followUps.length === 0 ? (
            <EmptyState title="No follow-up tasks" description="New follow-up tasks will appear here when they are scheduled." />
          ) : (
            <>
              {pending.length === 0 ? (
                <EmptyState title="No pending follow-ups" description="All customer follow-ups are complete. Completed history is shown below." />
              ) : null}
              {followUps.map((item) => <FollowUpCard key={item.id} item={item} onMarkDone={() => handleMarkDone(item.id)} />)}
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
