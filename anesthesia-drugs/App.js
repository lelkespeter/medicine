import {StatusBar} from "expo-status-bar";
import {StyleSheet, Button, View, Pressable} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import KategoriScreeen from "./screens/KategoriScreen";
import ListScreen from "./screens/ListScreen";
import {FontAwesome5} from "@expo/vector-icons";
import {GlobalStyles} from "./constants/appColors";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: GlobalStyles.colors.darkgreen,
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen
            name="Kategori"
            component={KategoriScreeen}
            options={({navigation, route}) => ({
              title: "Läkemedel vi använder",
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
    </>
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
