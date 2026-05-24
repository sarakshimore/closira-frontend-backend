import { Text, View } from "react-native";

interface EmptyStateProps {
  title: string;
  description: string;
}

export const EmptyState = ({ title, description }: EmptyStateProps) => (
  <View className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5">
    <Text className="text-base font-semibold text-slate-800">{title}</Text>
    <Text className="mt-2 text-sm text-slate-500">{description}</Text>
  </View>
);
