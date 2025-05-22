"use client"

import { useState } from "react"
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { FileText, Plus, Search, Upload } from "lucide-react-native"
import { useTheme } from "../../components/theme-provider"
import * as DocumentPicker from "expo-document-picker"

export default function LettersScreen() {
  const navigation = useNavigation()
  const { isDarkMode } = useTheme()
  const [searchQuery, setSearchQuery] = useState("")

  const textColor = isDarkMode ? "#F9FAFB" : "#111827"
  const backgroundColor = isDarkMode ? "#1F2937" : "#FFFFFF"
  const cardBgColor = isDarkMode ? "#374151" : "#F9FAFB"
  const borderColor = isDarkMode ? "#4B5563" : "#E5E7EB"
  const secondaryTextColor = isDarkMode ? "#D1D5DB" : "#6B7280"
  const inputBgColor = isDarkMode ? "#374151" : "#F3F4F6"

  const handleUpload = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ["image/*", "application/pdf"],
        copyToCacheDirectory: true,
      })

      if (result.canceled === false) {
        // Handle the uploaded file
        console.log("Document picked:", result.assets[0])
        // Here you would typically upload to Supabase storage
      }
    } catch (error) {
      console.error("Error picking document:", error)
    }
  }

  const letters = [
    {
      id: 1,
      title: "Chase Bank Statement",
      date: "May 15, 2023",
      creditor: "Chase Bank",
      amount: "$4,500",
      status: "Uploaded",
    },
    {
      id: 2,
      title: "Capital One Notice",
      date: "April 28, 2023",
      creditor: "Capital One",
      amount: "$3,200",
      status: "Processed",
    },
    {
      id: 3,
      title: "Amex Collection Notice",
      date: "March 10, 2023",
      creditor: "American Express",
      amount: "$4,800",
      status: "Disputed",
    },
    {
      id: 4,
      title: "Discover Card Statement",
      date: "February 22, 2023",
      creditor: "Discover",
      amount: "$2,100",
      status: "Resolved",
    },
  ]

  const filteredLetters = letters.filter(
    (letter) =>
      letter.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      letter.creditor.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: textColor }]}>Your Letters</Text>
        <TouchableOpacity style={styles.uploadButton} onPress={handleUpload}>
          <Upload color="#FFFFFF" size={20} />
          <Text style={styles.uploadButtonText}>Upload</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.searchContainer, { backgroundColor: inputBgColor }]}>
        <Search color={secondaryTextColor} size={20} />
        <TextInput
          style={[styles.searchInput, { color: textColor }]}
          placeholder="Search letters..."
          placeholderTextColor={secondaryTextColor}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <ScrollView style={styles.lettersList}>
        {filteredLetters.map((letter) => (
          <TouchableOpacity
            key={letter.id}
            style={[styles.letterCard, { backgroundColor: cardBgColor, borderColor }]}
            onPress={() => navigation.navigate("LetterDetail" as never, { id: letter.id } as never)}
          >
            <View style={styles.letterHeader}>
              <View style={styles.letterIcon}>
                <FileText color="#0EA5E9" size={24} />
              </View>
              <View style={styles.letterInfo}>
                <Text style={[styles.letterTitle, { color: textColor }]}>{letter.title}</Text>
                <Text style={[styles.letterDate, { color: secondaryTextColor }]}>{letter.date}</Text>
              </View>
            </View>

            <View style={[styles.divider, { backgroundColor: borderColor }]} />

            <View style={styles.letterDetails}>
              <View style={styles.detailItem}>
                <Text style={[styles.detailLabel, { color: secondaryTextColor }]}>Creditor</Text>
                <Text style={[styles.detailValue, { color: textColor }]}>{letter.creditor}</Text>
              </View>

              <View style={styles.detailItem}>
                <Text style={[styles.detailLabel, { color: secondaryTextColor }]}>Amount</Text>
                <Text style={[styles.detailValue, { color: textColor }]}>{letter.amount}</Text>
              </View>

              <View style={styles.detailItem}>
                <Text style={[styles.detailLabel, { color: secondaryTextColor }]}>Status</Text>
                <View style={[styles.statusBadge, { backgroundColor: getStatusColor(letter.status, 0.1) }]}>
                  <Text style={[styles.statusText, { color: getStatusColor(letter.status, 1) }]}>{letter.status}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.createButton} onPress={() => {}}>
        <Plus color="#FFFFFF" size={24} />
      </TouchableOpacity>
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
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  uploadButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0EA5E9",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    gap: 8,
  },
  uploadButtonText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 16,
    paddingHorizontal: 12,
    height: 44,
    borderRadius: 8,
  },
  searchInput: {
    flex: 1,
    height: "100%",
    marginLeft: 8,
    fontSize: 16,
  },
  lettersList: {
    flex: 1,
    paddingHorizontal: 16,
  },
  letterCard: {
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 16,
    overflow: "hidden",
  },
  letterHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
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
  divider: {
    height: 1,
    width: "100%",
  },
  letterDetails: {
    padding: 16,
  },
  detailItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  detailLabel: {
    fontSize: 14,
  },
  detailValue: {
    fontSize: 14,
    fontWeight: "500",
  },
  statusBadge: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  statusText: {
    fontSize: 12,
    fontWeight: "500",
  },
  createButton: {
    position: "absolute",
    right: 16,
    bottom: 16,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#0EA5E9",
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
})
