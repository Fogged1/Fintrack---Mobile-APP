import { View, Text, StyleSheet } from "react-native"

const ProviderDetailScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Provider Detail</Text>
      <Text>View provider details here.</Text>
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

export default ProviderDetailScreen
