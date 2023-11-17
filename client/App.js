import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { Store } from "./redux/store";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/pages/Home";
import Details from "./components/pages/Details";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="NotePad+" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // minWidth: "100%",
  },
});

// TODO:
// finish redux set up
// finish backend set up
//
