import { View, Text, StyleSheet } from "react-native"

const AlertsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alerts</Text>
      <Text>View your alerts here.</Text>
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

export default AlertsScreen
