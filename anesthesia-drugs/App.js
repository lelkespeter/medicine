import {StatusBar} from "expo-status-bar";
import {StyleSheet, Button, View, Pressable} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import InputScreen from "./screens/InputScreen";
import ListScreen from "./screens/ListScreen";
import {FontAwesome5} from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Läkemedel"
          component={InputScreen}
          options={({navigation, route}) => ({
            title: "Välj Läkemedel",
            headerRight: () => (
              <Pressable onPress={() => navigation.navigate("Lista")}>
                <FontAwesome5 name="clipboard-list" size={24} color="#fff" />
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="Lista"
          component={ListScreen}
          options={{title: "Dos per kg"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
