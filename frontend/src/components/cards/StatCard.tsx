import { Text, View } from "react-native";

interface StatCardProps {
  label: string;
  value: number;
}

export const StatCard = ({ label, value }: StatCardProps) => (
  <View className="w-[48%] rounded-2xl bg-white p-4 shadow-sm">
    <Text className="text-xs font-medium text-slate-500">{label}</Text>
    <Text className="mt-2 text-2xl font-bold text-slate-900">{value}</Text>
  </View>
);
