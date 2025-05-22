import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { StatusBar } from "react-native"
import { SupabaseProvider } from "./lib/supabase-provider"
import { ThemeProvider } from "./components/theme-provider"

// Onboarding screens
import OnboardingScreen1 from "./screens/onboarding/OnboardingScreen1"
import OnboardingScreen2 from "./screens/onboarding/OnboardingScreen2"
import OnboardingScreen3 from "./screens/onboarding/OnboardingScreen3"
import SignupScreen from "./screens/auth/SignupScreen"
import LoginScreen from "./screens/auth/LoginScreen"
import PaywallScreen from "./screens/auth/PaywallScreen"

// Main App
import MainTabNavigator from "./navigation/MainTabNavigator"
import DashboardScreen from "./screens/dashboard/DashboardScreen"
import DocumentsScreen from "./screens/documents/DocumentsScreen"
import ProfileScreen from "./screens/profile/ProfileScreen"
import SettingsScreen from "./screens/settings/SettingsScreen"
import UploadScreen from "./screens/upload/UploadScreen"
import ResolveScreen from "./screens/resolve/ResolveScreen"
import LetterDetailScreen from "./screens/letters/LetterDetailScreen"
import ProvidersScreen from "./screens/providers/ProvidersScreen"
import ProviderDetailScreen from "./screens/providers/ProviderDetailScreen"
import AlertsScreen from "./screens/alerts/AlertsScreen"

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <SupabaseProvider>
          <NavigationContainer>
            <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
            <Stack.Navigator initialRouteName="Onboarding1" screenOptions={{ headerShown: false }}>
              {/* Onboarding Flow */}
              <Stack.Screen name="Onboarding1" component={OnboardingScreen1} />
              <Stack.Screen name="Onboarding2" component={OnboardingScreen2} />
              <Stack.Screen name="Onboarding3" component={OnboardingScreen3} />
              <Stack.Screen name="Signup" component={SignupScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Paywall" component={PaywallScreen} />

              {/* Main App */}
              <Stack.Screen name="MainApp" component={MainTabNavigator} />
              <Stack.Screen name="Dashboard" component={DashboardScreen} />
              <Stack.Screen name="Documents" component={DocumentsScreen} />
              <Stack.Screen name="Profile" component={ProfileScreen} />
              <Stack.Screen name="Settings" component={SettingsScreen} />
              <Stack.Screen name="Upload" component={UploadScreen} />
              <Stack.Screen name="Resolve" component={ResolveScreen} />
              <Stack.Screen name="LetterDetail" component={LetterDetailScreen} />
              <Stack.Screen name="Providers" component={ProvidersScreen} />
              <Stack.Screen name="ProviderDetail" component={ProviderDetailScreen} />
              <Stack.Screen name="Alerts" component={AlertsScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </SupabaseProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  )
}
