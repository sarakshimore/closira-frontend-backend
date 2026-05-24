import { Text, View } from "react-native";

interface ScreenHeaderProps {
  title: string;
  subtitle: string;
}

export const ScreenHeader = ({ title, subtitle }: ScreenHeaderProps) => (
  <View className="mb-5">
    <Text className="text-2xl font-bold text-slate-900">{title}</Text>
    <Text className="mt-1 text-sm text-slate-500">{subtitle}</Text>
  </View>
);
