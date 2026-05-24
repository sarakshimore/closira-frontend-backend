import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, AlertTriangle, Inbox, CalendarCheck2 } from "lucide-react-native";
import { HomeScreen } from "@/screens/HomeScreen";
import { LeadsScreen } from "@/screens/LeadsScreen";
import { EscalationsScreen } from "@/screens/EscalationsScreen";
import { FollowUpsScreen } from "@/screens/FollowUpsScreen";
import { TabParamList } from "@/types/navigation";

const Tab = createBottomTabNavigator<TabParamList>();

export const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarActiveTintColor: "#304adb",
      tabBarInactiveTintColor: "#90a0b7",
      tabBarStyle: {
        height: 64,
        paddingBottom: 8,
        paddingTop: 8,
        borderTopColor: "#e4eaf3"
      },
      tabBarIcon: ({ color, size }) => {
        if (route.name === "Home") return <Home size={size} color={color} />;
        if (route.name === "Leads") return <Inbox size={size} color={color} />;
        if (route.name === "Escalations") return <AlertTriangle size={size} color={color} />;
        return <CalendarCheck2 size={size} color={color} />;
      }
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Leads" component={LeadsScreen} />
    <Tab.Screen name="Escalations" component={EscalationsScreen} />
    <Tab.Screen name="FollowUps" component={FollowUpsScreen} options={{ title: "Follow-ups" }} />
  </Tab.Navigator>
);
