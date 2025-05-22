import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"

const PaywallScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Your Plan</Text>
      <Image source={{ uri: "https://via.placeholder.com/300x200" }} style={styles.image} />
      <Text style={styles.subtitle}>Unlimited Access - $4.99</Text>
      <Text style={styles.description}>Enjoy unlimited uploads and all features.</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("MainApp")}>
        <Text style={styles.buttonText}>Subscribe</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("MainApp")}>
        <Text style={styles.freeOption}>Start for Free (10 uploads max)</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  freeOption: {
    color: "#007bff",
    fontSize: 16,
    textDecorationLine: "underline",
  },
})

export default PaywallScreen
