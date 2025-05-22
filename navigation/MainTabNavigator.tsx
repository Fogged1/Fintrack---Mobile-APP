import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home, FileText, User, Settings, Upload, AlertCircle, Gavel } from "lucide-react-native"

// Import screens
import DashboardScreen from "../screens/dashboard/DashboardScreen"
import DocumentsScreen from "../screens/documents/DocumentsScreen"
import ProfileScreen from "../screens/profile/ProfileScreen"
import SettingsScreen from "../screens/settings/SettingsScreen"
import UploadScreen from "../screens/upload/UploadScreen"
import ResolveScreen from "../screens/resolve/ResolveScreen"
import AlertsScreen from "../screens/alerts/AlertsScreen"

const Tab = createBottomTabNavigator()

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let IconComponent = Home // Default icon

          switch (route.name) {
            case "Dashboard":
              IconComponent = Home
              break
            case "Documents":
              IconComponent = FileText
              break
            case "Upload":
              IconComponent = Upload
              break
            case "Alerts":
              IconComponent = AlertCircle
              break
            case "Resolve":
              IconComponent = Gavel
              break
            case "Profile":
              IconComponent = User
              break
            case "Settings":
              IconComponent = Settings
              break
            default:
              break
          }

          return <IconComponent color={color} size={size} />
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Documents" component={DocumentsScreen} />
      <Tab.Screen name="Upload" component={UploadScreen} />
      <Tab.Screen name="Alerts" component={AlertsScreen} />
      <Tab.Screen name="Resolve" component={ResolveScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  )
}

export default MainTabNavigator
