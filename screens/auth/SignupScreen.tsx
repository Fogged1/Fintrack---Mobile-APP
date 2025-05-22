"use client"

import { useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native"
import { useNavigation } from "@react-navigation/native"
import { ArrowLeft, Eye, EyeOff } from "lucide-react-native"
import { useSupabase } from "../../lib/supabase-provider"
import { useTheme } from "../../components/theme-provider"

export default function SignupScreen() {
  const navigation = useNavigation()
  const { signUp } = useSupabase()
  const { isDarkMode } = useTheme()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    setLoading(true)
    setError("")

    try {
      const data = await signUp(email, password)
      if (data) {
        navigation.navigate("Paywall" as never)
      }
    } catch (error: any) {
      setError(error.message || "An error occurred during sign up")
    } finally {
      setLoading(false)
    }
  }

  const textColor = isDarkMode ? "#F9FAFB" : "#111827"
  const backgroundColor = isDarkMode ? "#1F2937" : "#FFFFFF"
  const inputBgColor = isDarkMode ? "#374151" : "#F3F4F6"
  const placeholderColor = isDarkMode ? "#9CA3AF" : "#6B7280"

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <ArrowLeft color={textColor} size={24} />
            </TouchableOpacity>
            <Text style={[styles.headerTitle, { color: textColor }]}>Create Account</Text>
            <View style={{ width: 24 }} />
          </View>

          <View style={styles.content}>
            <Text style={[styles.title, { color: textColor }]}>Sign Up</Text>
            <Text style={[styles.subtitle, { color: isDarkMode ? "#D1D5DB" : "#4B5563" }]}>
              Create an account to get started with FinTrack
            </Text>

            {error ? (
              <View style={styles.errorContainer}>
                <Text style={styles.errorText}>{error}</Text>
              </View>
            ) : null}

            <View style={styles.form}>
              <View style={styles.inputContainer}>
                <Text style={[styles.inputLabel, { color: textColor }]}>Email</Text>
                <TextInput
                  style={[styles.input, { backgroundColor: inputBgColor, color: textColor }]}
                  placeholder="Enter your email"
                  placeholderTextColor={placeholderColor}
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={[styles.inputLabel, { color: textColor }]}>Password</Text>
                <View style={[styles.passwordContainer, { backgroundColor: inputBgColor }]}>
                  <TextInput
                    style={[styles.passwordInput, { color: textColor }]}
                    placeholder="Enter your password"
                    placeholderTextColor={placeholderColor}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                    autoCapitalize="none"
                  />
                  <TouchableOpacity style={styles.eyeButton} onPress={() => setShowPassword(!showPassword)}>
                    {showPassword ? (
                      <EyeOff color={placeholderColor} size={20} />
                    ) : (
                      <Eye color={placeholderColor} size={20} />
                    )}
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.inputContainer}>
                <Text style={[styles.inputLabel, { color: textColor }]}>Confirm Password</Text>
                <TextInput
                  style={[styles.input, { backgroundColor: inputBgColor, color: textColor }]}
                  placeholder="Confirm your password"
                  placeholderTextColor={placeholderColor}
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                />
              </View>

              <TouchableOpacity
                style={[styles.signupButton, { opacity: loading ? 0.7 : 1 }]}
                onPress={handleSignUp}
                disabled={loading}
              >
                {loading ? (
                  <ActivityIndicator color="#FFFFFF" />
                ) : (
                  <Text style={styles.signupButtonText}>Create Account</Text>
                )}
              </TouchableOpacity>
            </View>

            <View style={styles.loginContainer}>
              <Text style={[styles.loginText, { color: isDarkMode ? "#D1D5DB" : "#4B5563" }]}>
                Already have an account?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login" as never)}>
                <Text style={styles.loginLink}>Log In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
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
    padding: 24,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 32,
  },
  errorContainer: {
    backgroundColor: "#FEE2E2",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  errorText: {
    color: "#B91C1C",
    fontSize: 14,
  },
  form: {
    gap: 20,
  },
  inputContainer: {
    gap: 8,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "500",
  },
  input: {
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  passwordInput: {
    flex: 1,
    fontSize: 16,
  },
  eyeButton: {
    padding: 4,
  },
  signupButton: {
    backgroundColor: "#0EA5E9",
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  signupButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
    gap: 4,
  },
  loginText: {
    fontSize: 14,
  },
  loginLink: {
    fontSize: 14,
    fontWeight: "600",
    color: "#0EA5E9",
  },
})
