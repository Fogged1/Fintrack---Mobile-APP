"use client"
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { Bell, CreditCard, HelpCircle, LogOut, Settings, User } from "lucide-react-native"
import { useSupabase } from "../../lib/supabase-provider"
import { useTheme } from "../../components/theme-provider"

export default function ProfileScreen() {
  const navigation = useNavigation()
  const { user, signOut } = useSupabase()
  const { isDarkMode, theme, setTheme } = useTheme()

  const textColor = isDarkMode ? "#F9FAFB" : "#111827"
  const backgroundColor = isDarkMode ? "#1F2937" : "#FFFFFF"
  const cardBgColor = isDarkMode ? "#374151" : "#F9FAFB"
  const borderColor = isDarkMode ? "#4B5563" : "#E5E7EB"
  const secondaryTextColor = isDarkMode ? "#D1D5DB" : "#6B7280"

  const handleSignOut = async () => {
    await signOut()
    navigation.reset({
      index: 0,
      routes: [{ name: "Onboarding1" as never }],
    })
  }

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark")
  }

  return (
    <ScrollView style={[styles.container, { backgroundColor }]} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <View style={styles.profileImageContainer}>
          <Image source={require("../../assets/profile-placeholder.png")} style={styles.profileImage} />
          <TouchableOpacity style={styles.editImageButton}>
            <Text style={styles.editImageText}>Edit</Text>
          </TouchableOpacity>
        </View>

        <Text style={[styles.userName, { color: textColor }]}>{user?.email?.split("@")[0] || "User"}</Text>
        <Text style={[styles.userEmail, { color: secondaryTextColor }]}>{user?.email || "user@example.com"}</Text>

        <TouchableOpacity style={styles.editProfileButton}>
          <Text style={styles.editProfileText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionTitle}>
        <Text style={[styles.sectionTitleText, { color: textColor }]}>Account</Text>
      </View>

      <View style={[styles.menuCard, { backgroundColor: cardBgColor, borderColor }]}>
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <View style={[styles.menuItemIcon, { backgroundColor: "rgba(14, 165, 233, 0.1)" }]}>
              <User color="#0EA5E9" size={20} />
            </View>
            <Text style={[styles.menuItemText, { color: textColor }]}>Personal Information</Text>
          </View>
        </TouchableOpacity>

        <View style={[styles.divider, { backgroundColor: borderColor }]} />

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <View style={[styles.menuItemIcon, { backgroundColor: "rgba(139, 92, 246, 0.1)" }]}>
              <CreditCard color="#8B5CF6" size={20} />
            </View>
            <Text style={[styles.menuItemText, { color: textColor }]}>Payment Methods</Text>
          </View>
        </TouchableOpacity>

        <View style={[styles.divider, { backgroundColor: borderColor }]} />

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <View style={[styles.menuItemIcon, { backgroundColor: "rgba(245, 158, 11, 0.1)" }]}>
              <Bell color="#F59E0B" size={20} />
            </View>
            <Text style={[styles.menuItemText, { color: textColor }]}>Notifications</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionTitle}>
        <Text style={[styles.sectionTitleText, { color: textColor }]}>Preferences</Text>
      </View>

      <View style={[styles.menuCard, { backgroundColor: cardBgColor, borderColor }]}>
        <TouchableOpacity style={styles.menuItem} onPress={toggleTheme}>
          <View style={styles.menuItemLeft}>
            <View style={[styles.menuItemIcon, { backgroundColor: "rgba(16, 185, 129, 0.1)" }]}>
              <Settings color="#10B981" size={20} />
            </View>
            <Text style={[styles.menuItemText, { color: textColor }]}>Dark Mode</Text>
          </View>
          <View style={[styles.toggle, { backgroundColor: isDarkMode ? "#10B981" : borderColor }]}>
            <View style={[styles.toggleCircle, { transform: [{ translateX: isDarkMode ? 16 : 0 }] }]} />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionTitle}>
        <Text style={[styles.sectionTitleText, { color: textColor }]}>Support</Text>
      </View>

      <View style={[styles.menuCard, { backgroundColor: cardBgColor, borderColor }]}>
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <View style={[styles.menuItemIcon, { backgroundColor: "rgba(14, 165, 233, 0.1)" }]}>
              <HelpCircle color="#0EA5E9" size={20} />
            </View>
            <Text style={[styles.menuItemText, { color: textColor }]}>Help Center</Text>
          </View>
        </TouchableOpacity>

        <View style={[styles.divider, { backgroundColor: borderColor }]} />

        <TouchableOpacity style={styles.menuItem} onPress={handleSignOut}>
          <View style={styles.menuItemLeft}>
            <View style={[styles.menuItemIcon, { backgroundColor: "rgba(239, 68, 68, 0.1)" }]}>
              <LogOut color="#EF4444" size={20} />
            </View>
            <Text style={[styles.menuItemText, { color: "#EF4444" }]}>Log Out</Text>
          </View>
        </TouchableOpacity>
      </View>

      <Text style={[styles.versionText, { color: secondaryTextColor }]}>Version 1.0.0</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 16,
  },
  header: {
    alignItems: "center",
    marginBottom: 24,
  },
  profileImageContainer: {
    position: "relative",
    marginBottom: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editImageButton: {
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "#0EA5E9",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  editImageText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "500",
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    marginBottom: 16,
  },
  editProfileButton: {
    backgroundColor: "#0EA5E9",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  editProfileText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
  sectionTitle: {
    marginBottom: 8,
  },
  sectionTitleText: {
    fontSize: 16,
    fontWeight: "600",
  },
  menuCard: {
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 24,
    overflow: "hidden",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  menuItemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuItemIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  menuItemText: {
    fontSize: 16,
    fontWeight: "500",
  },
  divider: {
    height: 1,
    width: "100%",
  },
  toggle: {
    width: 40,
    height: 24,
    borderRadius: 12,
    padding: 2,
  },
  toggleCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
  },
  versionText: {
    textAlign: "center",
    fontSize: 12,
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
})
