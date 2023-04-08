import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View} from "react-native";
import InputScreen from "./screens/InputScreen";
import ListScreen from "./screens/ListScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <InputScreen />
      <ListScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
