import { Pressable, Text } from "react-native";

interface AppButtonProps {
  label: string;
  onPress: () => void;
  variant?: "primary" | "secondary";
}

export const AppButton = ({ label, onPress, variant = "primary" }: AppButtonProps) => (
  <Pressable
    onPress={onPress}
    className={`rounded-xl px-4 py-3 ${variant === "primary" ? "bg-brand-600" : "bg-slate-200"}`}
  >
    <Text className={`text-center text-sm font-semibold ${variant === "primary" ? "text-white" : "text-slate-700"}`}>
      {label}
    </Text>
  </Pressable>
);
