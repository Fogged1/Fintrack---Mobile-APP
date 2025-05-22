import { View, Text, StyleSheet } from "react-native"

const UploadScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload</Text>
      <Text>Upload your financial documents.</Text>
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

export default UploadScreen
