import { Text, View } from "react-native";

interface SectionHeaderProps {
  title: string;
  actionText?: string;
}

export const SectionHeader = ({ title, actionText }: SectionHeaderProps) => (
  <View className="mb-3 flex-row items-center justify-between">
    <Text className="text-base font-semibold text-slate-900">{title}</Text>
    {actionText ? <Text className="text-xs font-semibold text-brand-600">{actionText}</Text> : null}
  </View>
);
