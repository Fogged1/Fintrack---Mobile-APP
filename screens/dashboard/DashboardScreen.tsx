"use client"
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { ArrowUpRight, FileText, Upload } from "lucide-react-native"
import { useSupabase } from "../../lib/supabase-provider"
import { useTheme } from "../../components/theme-provider"

export default function DashboardScreen() {
  const navigation = useNavigation()
  const { user } = useSupabase()
  const { isDarkMode } = useTheme()

  const textColor = isDarkMode ? "#F9FAFB" : "#111827"
  const backgroundColor = isDarkMode ? "#1F2937" : "#FFFFFF"
  const cardBgColor = isDarkMode ? "#374151" : "#F9FAFB"
  const borderColor = isDarkMode ? "#4B5563" : "#E5E7EB"
  const secondaryTextColor = isDarkMode ? "#D1D5DB" : "#6B7280"

  return (
    <ScrollView style={[styles.container, { backgroundColor }]} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <View>
          <Text style={[styles.greeting, { color: textColor }]}>Hello, {user?.email?.split("@")[0] || "User"}</Text>
          <Text style={[styles.subtitle, { color: secondaryTextColor }]}>Welcome to your financial dashboard</Text>
        </View>
      </View>

      <View style={styles.statsContainer}>
        <View style={[styles.statCard, { backgroundColor: cardBgColor, borderColor }]}>
          <Text style={[styles.statValue, { color: textColor }]}>3</Text>
          <Text style={[styles.statLabel, { color: secondaryTextColor }]}>Letters Uploaded</Text>
        </View>

        <View style={[styles.statCard, { backgroundColor: cardBgColor, borderColor }]}>
          <Text style={[styles.statValue, { color: textColor }]}>$12,500</Text>
          <Text style={[styles.statLabel, { color: secondaryTextColor }]}>Total Debt</Text>
        </View>

        <View style={[styles.statCard, { backgroundColor: cardBgColor, borderColor }]}>
          <Text style={[styles.statValue, { color: textColor }]}>2</Text>
          <Text style={[styles.statLabel, { color: secondaryTextColor }]}>Creditors</Text>
        </View>
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity
          style={[styles.actionButton, { backgroundColor: "#0EA5E9" }]}
          onPress={() => navigation.navigate("Letters" as never)}
        >
          <Upload color="#FFFFFF" size={24} />
          <Text style={styles.actionButtonText}>Upload Letter</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.actionButton, { backgroundColor: "#8B5CF6" }]} onPress={() => {}}>
          <FileText color="#FFFFFF" size={24} />
          <Text style={styles.actionButtonText}>Create Letter</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={[styles.sectionTitle, { color: textColor }]}>Recent Letters</Text>
        <TouchableOpacity style={styles.viewAllButton} onPress={() => navigation.navigate("Letters" as never)}>
          <Text style={styles.viewAllText}>View All</Text>
          <ArrowUpRight color="#0EA5E9" size={16} />
        </TouchableOpacity>
      </View>

      <View style={styles.lettersContainer}>
        <TouchableOpacity
          style={[styles.letterCard, { backgroundColor: cardBgColor, borderColor }]}
          onPress={() => navigation.navigate("LetterDetail" as never, { id: 1 } as never)}
        >
          <View style={styles.letterIcon}>
            <FileText color="#0EA5E9" size={24} />
          </View>
          <View style={styles.letterInfo}>
            <Text style={[styles.letterTitle, { color: textColor }]}>Chase Bank Statement</Text>
            <Text style={[styles.letterDate, { color: secondaryTextColor }]}>May 15, 2023</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.letterCard, { backgroundColor: cardBgColor, borderColor }]}
          onPress={() => navigation.navigate("LetterDetail" as never, { id: 2 } as never)}
        >
          <View style={styles.letterIcon}>
            <FileText color="#0EA5E9" size={24} />
          </View>
          <View style={styles.letterInfo}>
            <Text style={[styles.letterTitle, { color: textColor }]}>Capital One Notice</Text>
            <Text style={[styles.letterDate, { color: secondaryTextColor }]}>April 28, 2023</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.letterCard, { backgroundColor: cardBgColor, borderColor }]}
          onPress={() => navigation.navigate("LetterDetail" as never, { id: 3 } as never)}
        >
          <View style={styles.letterIcon}>
            <FileText color="#0EA5E9" size={24} />
          </View>
          <View style={styles.letterInfo}>
            <Text style={[styles.letterTitle, { color: textColor }]}>Amex Collection Notice</Text>
            <Text style={[styles.letterDate, { color: secondaryTextColor }]}>March 10, 2023</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={[styles.sectionTitle, { color: textColor }]}>Financial Summary</Text>
      </View>

      <View style={[styles.summaryCard, { backgroundColor: cardBgColor, borderColor }]}>
        <View style={styles.summaryItem}>
          <Text style={[styles.summaryLabel, { color: secondaryTextColor }]}>Total Debt</Text>
          <Text style={[styles.summaryValue, { color: textColor }]}>$12,500</Text>
        </View>

        <View style={[styles.divider, { backgroundColor: borderColor }]} />

        <View style={styles.summaryItem}>
          <Text style={[styles.summaryLabel, { color: secondaryTextColor }]}>Disputed Amount</Text>
          <Text style={[styles.summaryValue, { color: textColor }]}>$5,200</Text>
        </View>

        <View style={[styles.divider, { backgroundColor: borderColor }]} />

        <View style={styles.summaryItem}>
          <Text style={[styles.summaryLabel, { color: secondaryTextColor }]}>Potential Savings</Text>
          <Text style={[styles.summaryValue, { color: "#10B981" }]}>$3,750</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.helpButton}>
        <Text style={styles.helpButtonText}>Need Help? Talk to an Expert</Text>
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    borderWidth: 1,
    marginHorizontal: 4,
  },
  statValue: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    textAlign: "center",
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  actionButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 4,
    gap: 8,
  },
  actionButtonText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  viewAllButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  viewAllText: {
    fontSize: 14,
    color: "#0EA5E9",
    fontWeight: "500",
  },
  lettersContainer: {
    marginBottom: 24,
    gap: 12,
  },
  letterCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
  },
  letterIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(14, 165, 233, 0.1)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  letterInfo: {
    flex: 1,
  },
  letterTitle: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 4,
  },
  letterDate: {
    fontSize: 12,
  },
  summaryCard: {
    borderRadius: 12,
    borderWidth: 1,
    padding: 16,
    marginBottom: 24,
  },
  summaryItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
  },
  summaryLabel: {
    fontSize: 14,
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: "600",
  },
  divider: {
    height: 1,
    width: "100%",
  },
  helpButton: {
    backgroundColor: "#8B5CF6",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 24,
  },
  helpButtonText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
})
