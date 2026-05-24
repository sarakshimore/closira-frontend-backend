import { Text, View } from "react-native";

interface SummaryCardProps {
  sopMatch: string;
  summary: string;
}

export const SummaryCard = ({ sopMatch, summary }: SummaryCardProps) => (
  <View className="mb-4 rounded-2xl bg-white p-4 shadow-sm">
    <View className="self-start rounded-full bg-brand-100 px-3 py-1">
      <Text className="text-xs font-semibold text-brand-700">SOP Match: {sopMatch}</Text>
    </View>
    <Text className="mt-3 text-sm leading-5 text-slate-700">{summary}</Text>
  </View>
);
