import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"

const OnboardingScreen3 = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Organize Your Debts</Text>
      <Text style={styles.subtitle}>Keep track of all your debts in one place.</Text>
      <Image source={{ uri: "https://via.placeholder.com/300x200" }} style={styles.image} />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Signup")}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d0d0d0",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#dc3545",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
})

export default OnboardingScreen3
