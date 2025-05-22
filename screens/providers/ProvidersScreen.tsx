import { View, Text, StyleSheet } from "react-native"

const ProvidersScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Providers</Text>
      <Text>Manage your providers here.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
})

export default ProvidersScreen
