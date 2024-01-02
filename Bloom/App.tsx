import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Home from "./screens/Home";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Bloom" component={Home} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
