"use client"
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native"
import { ArrowLeft, Download, FileText, Share2, Trash2 } from "lucide-react-native"
import { useTheme } from "../../components/theme-provider"

const LetterDetailScreen = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const { isDarkMode } = useTheme()

  // In a real app, you would fetch the letter details based on the ID
  const letterId = (route.params as any)?.id || 1

  // Mock data for the letter
  const letter = {
    id: letterId,
    title: "Chase Bank Statement",
    date: "May 15, 2023",
    creditor: "Chase Bank",
    amount: "$4,500",
    accountNumber: "XXXX-XXXX-XXXX-1234",
    status: "Uploaded",
    description:
      "This is a credit card statement from Chase Bank showing an outstanding balance of $4,500. The minimum payment due is $150 and the due date is June 5, 2023.",
    actions: [
      { date: "May 16, 2023", action: "Letter uploaded to system" },
      { date: "May 16, 2023", action: "Automatic analysis completed" },
      { date: "May 17, 2023", action: "Dispute letter generated" },
    ],
  }

  const textColor = isDarkMode ? "#F9FAFB" : "#111827"
  const backgroundColor = isDarkMode ? "#1F2937" : "#FFFFFF"
  const cardBgColor = isDarkMode ? "#374151" : "#F9FAFB"
  const borderColor = isDarkMode ? "#4B5563" : "#E5E7EB"
  const secondaryTextColor = isDarkMode ? "#D1D5DB" : "#6B7280"

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={[styles.header, { borderBottomColor: borderColor }]}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <ArrowLeft color={textColor} size={24} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: textColor }]}>Letter Details</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.letterHeader}>
          <View style={styles.letterIcon}>
            <FileText color="#0EA5E9" size={32} />
          </View>
          <View style={styles.letterInfo}>
            <Text style={[styles.letterTitle, { color: textColor }]}>{letter.title}</Text>
            <Text style={[styles.letterDate, { color: secondaryTextColor }]}>{letter.date}</Text>
            <View style={[styles.statusBadge, { backgroundColor: getStatusColor(letter.status, 0.1) }]}>
              <Text style={[styles.statusText, { color: getStatusColor(letter.status, 1) }]}>{letter.status}</Text>
            </View>
          </View>
        </View>

        <View style={[styles.section, { backgroundColor: cardBgColor, borderColor }]}>
          <Text style={[styles.sectionTitle, { color: textColor }]}>Letter Information</Text>

          <View style={styles.infoItem}>
            <Text style={[styles.infoLabel, { color: secondaryTextColor }]}>Creditor</Text>
            <Text style={[styles.infoValue, { color: textColor }]}>{letter.creditor}</Text>
          </View>

          <View style={styles.infoItem}>
            <Text style={[styles.infoLabel, { color: secondaryTextColor }]}>Amount</Text>
            <Text style={[styles.infoValue, { color: textColor }]}>{letter.amount}</Text>
          </View>

          <View style={styles.infoItem}>
            <Text style={[styles.infoLabel, { color: secondaryTextColor }]}>Account Number</Text>
            <Text style={[styles.infoValue, { color: textColor }]}>{letter.accountNumber}</Text>
          </View>
        </View>

        <View style={[styles.section, { backgroundColor: cardBgColor, borderColor }]}>
          <Text style={[styles.sectionTitle, { color: textColor }]}>Description</Text>
          <Text style={[styles.description, { color: textColor }]}>{letter.description}</Text>
        </View>

        <View style={[styles.section, { backgroundColor: cardBgColor, borderColor }]}>
          <Text style={[styles.sectionTitle, { color: textColor }]}>Letter Preview</Text>
          <Image source={require("../../assets/letter-preview.png")} style={styles.previewImage} resizeMode="contain" />
        </View>

        <View style={[styles.section, { backgroundColor: cardBgColor, borderColor }]}>
          <Text style={[styles.sectionTitle, { color: textColor }]}>Activity Timeline</Text>

          {letter.actions.map((action, index) => (
            <View key={index} style={styles.timelineItem}>
              <View style={styles.timelineDot} />
              {index < letter.actions.length - 1 && <View style={styles.timelineLine} />}
              <View style={styles.timelineContent}>
                <Text style={[styles.timelineDate, { color: secondaryTextColor }]}>{action.date}</Text>
                <Text style={[styles.timelineAction, { color: textColor }]}>{action.action}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.actionsContainer}>
          <TouchableOpacity style={[styles.actionButton, { backgroundColor: "#0EA5E9" }]}>
            <Download color="#FFFFFF" size={20} />
            <Text style={styles.actionButtonText}>Download</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.actionButton, { backgroundColor: "#8B5CF6" }]}>
            <Share2 color="#FFFFFF" size={20} />
            <Text style={styles.actionButtonText}>Share</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.actionButton, { backgroundColor: "#EF4444" }]}>
            <Trash2 color="#FFFFFF" size={20} />
            <Text style={styles.actionButtonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

function getStatusColor(status, opacity = 1) {
  switch (status) {
    case "Uploaded":
      return `rgba(14, 165, 233, ${opacity})`
    case "Processed":
      return `rgba(139, 92, 246, ${opacity})`
    case "Disputed":
      return `rgba(245, 158, 11, ${opacity})`
    case "Resolved":
      return `rgba(16, 185, 129, ${opacity})`
    default:
      return `rgba(107, 114, 128, ${opacity})`
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  content: {
    flex: 1,
    padding: 16,
  },
  letterHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  letterIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "rgba(14, 165, 233, 0.1)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  letterInfo: {
    flex: 1,
  },
  letterTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  letterDate: {
    fontSize: 14,
    marginBottom: 8,
  },
  statusBadge: {
    alignSelf: "flex-start",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  statusText: {
    fontSize: 12,
    fontWeight: "500",
  },
  section: {
    borderRadius: 12,
    borderWidth: 1,
    padding: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
  },
  infoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  infoLabel: {
    fontSize: 14,
  },
  infoValue: {
    fontSize: 14,
    fontWeight: "500",
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
  },
  previewImage: {
    width: "100%",
    height: 300,
    borderRadius: 8,
    backgroundColor: "#E5E7EB",
  },
  timelineItem: {
    flexDirection: "row",
    marginBottom: 16,
  },
  timelineDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#0EA5E9",
    marginTop: 4,
  },
  timelineLine: {
    position: "absolute",
    left: 5,
    top: 16,
    width: 2,
    height: "100%",
    backgroundColor: "#0EA5E9",
  },
  timelineContent: {
    marginLeft: 12,
    flex: 1,
  },
  timelineDate: {
    fontSize: 12,
    marginBottom: 4,
  },
  timelineAction: {
    fontSize: 14,
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
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 4,
    gap: 8,
  },
  actionButtonText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
})

export default LetterDetailScreen
