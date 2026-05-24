import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabNavigator } from "@/navigation/TabNavigator";
import { ConversationDetailScreen } from "@/screens/ConversationDetailScreen";
import { RootStackParamList } from "@/types/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
    <Stack.Screen
      name="ConversationDetail"
      component={ConversationDetailScreen}
      options={{ title: "Conversation Detail", headerBackTitle: "Back" }}
    />
  </Stack.Navigator>
);
