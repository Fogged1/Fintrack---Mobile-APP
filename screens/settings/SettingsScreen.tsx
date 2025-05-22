"use client"
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from "react-native"
import { Bell, Globe, Lock, Shield, User } from "lucide-react-native"
import { useTheme } from "../../components/theme-provider"

const SettingsScreen = () => {
  const { isDarkMode } = useTheme()

  const textColor = isDarkMode ? "#F9FAFB" : "#111827"
  const backgroundColor = isDarkMode ? "#1F2937" : "#FFFFFF"
  const cardBgColor = isDarkMode ? "#374151" : "#F9FAFB"
  const borderColor = isDarkMode ? "#4B5563" : "#E5E7EB"
  const secondaryTextColor = isDarkMode ? "#D1D5DB" : "#6B7280"

  return (
    <ScrollView style={[styles.container, { backgroundColor }]} contentContainerStyle={styles.content}>
      <Text style={[styles.title, { color: textColor }]}>Settings</Text>
      <Text style={{ color: textColor }}>Configure your app settings.</Text>

      <View style={styles.sectionTitle}>
        <Text style={[styles.sectionTitleText, { color: textColor }]}>Account</Text>
      </View>

      <View style={[styles.menuCard, { backgroundColor: cardBgColor, borderColor }]}>
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <View style={[styles.menuItemIcon, { backgroundColor: "rgba(14, 165, 233, 0.1)" }]}>
              <User color="#0EA5E9" size={20} />
            </View>
            <View>
              <Text style={[styles.menuItemText, { color: textColor }]}>Profile Information</Text>
              <Text style={[styles.menuItemDescription, { color: secondaryTextColor }]}>
                Update your personal details
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <View style={[styles.divider, { backgroundColor: borderColor }]} />

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <View style={[styles.menuItemIcon, { backgroundColor: "rgba(139, 92, 246, 0.1)" }]}>
              <Lock color="#8B5CF6" size={20} />
            </View>
            <View>
              <Text style={[styles.menuItemText, { color: textColor }]}>Password & Security</Text>
              <Text style={[styles.menuItemDescription, { color: secondaryTextColor }]}>
                Manage your password and security settings
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionTitle}>
        <Text style={[styles.sectionTitleText, { color: textColor }]}>Notifications</Text>
      </View>

      <View style={[styles.menuCard, { backgroundColor: cardBgColor, borderColor }]}>
        <View style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <View style={[styles.menuItemIcon, { backgroundColor: "rgba(245, 158, 11, 0.1)" }]}>
              <Bell color="#F59E0B" size={20} />
            </View>
            <View>
              <Text style={[styles.menuItemText, { color: textColor }]}>Push Notifications</Text>
              <Text style={[styles.menuItemDescription, { color: secondaryTextColor }]}>
                Receive alerts on your device
              </Text>
            </View>
          </View>
          <Switch value={true} trackColor={{ false: borderColor, true: "#0EA5E9" }} thumbColor="#FFFFFF" />
        </View>

        <View style={[styles.divider, { backgroundColor: borderColor }]} />

        <View style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <View style={[styles.menuItemIcon, { backgroundColor: "rgba(245, 158, 11, 0.1)" }]}>
              <Bell color="#F59E0B" size={20} />
            </View>
            <View>
              <Text style={[styles.menuItemText, { color: textColor }]}>Email Notifications</Text>
              <Text style={[styles.menuItemDescription, { color: secondaryTextColor }]}>Receive updates via email</Text>
            </View>
          </View>
          <Switch value={true} trackColor={{ false: borderColor, true: "#0EA5E9" }} thumbColor="#FFFFFF" />
        </View>
      </View>

      <View style={styles.sectionTitle}>
        <Text style={[styles.sectionTitleText, { color: textColor }]}>Privacy</Text>
      </View>

      <View style={[styles.menuCard, { backgroundColor: cardBgColor, borderColor }]}>
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <View style={[styles.menuItemIcon, { backgroundColor: "rgba(16, 185, 129, 0.1)" }]}>
              <Shield color="#10B981" size={20} />
            </View>
            <View>
              <Text style={[styles.menuItemText, { color: textColor }]}>Privacy Settings</Text>
              <Text style={[styles.menuItemDescription, { color: secondaryTextColor }]}>
                Manage your data and privacy preferences
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <View style={[styles.divider, { backgroundColor: borderColor }]} />

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <View style={[styles.menuItemIcon, { backgroundColor: "rgba(16, 185, 129, 0.1)" }]}>
              <Globe color="#10B981" size={20} />
            </View>
            <View>
              <Text style={[styles.menuItemText, { color: textColor }]}>Data Sharing</Text>
              <Text style={[styles.menuItemDescription, { color: secondaryTextColor }]}>
                Control how your data is shared
              </Text>
            </View>
          </View>
          <Switch value={false} trackColor={{ false: borderColor, true: "#0EA5E9" }} thumbColor="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.sectionTitle}>
        <Text style={[styles.sectionTitleText, { color: textColor }]}>About</Text>
      </View>

      <View style={[styles.menuCard, { backgroundColor: cardBgColor, borderColor }]}>
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <Text style={[styles.menuItemText, { color: textColor }]}>Terms of Service</Text>
          </View>
        </TouchableOpacity>

        <View style={[styles.divider, { backgroundColor: borderColor }]} />

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <Text style={[styles.menuItemText, { color: textColor }]}>Privacy Policy</Text>
          </View>
        </TouchableOpacity>

        <View style={[styles.divider, { backgroundColor: borderColor }]} />

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <Text style={[styles.menuItemText, { color: textColor }]}>Contact Support</Text>
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>Delete Account</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
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
    flex: 1,
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
  menuItemDescription: {
    fontSize: 12,
    marginTop: 2,
  },
  divider: {
    height: 1,
    width: "100%",
  },
  deleteButton: {
    backgroundColor: "#EF4444",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 24,
  },
  deleteButtonText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 16,
  },
})

export default SettingsScreen
