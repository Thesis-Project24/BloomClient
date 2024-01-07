import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Home from "./screens/Home";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from 'react-query';
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
// import GetStart from "./screens/GetStart";
import Login from "./screens/Login";

const queryClient = new QueryClient();
export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Stack.Navigator initialRouteName="test">
        <Stack.Screen
          options={{ headerShown: false}}
          name="SignIn"
          component={Login}
        />
          <Stack.Screen name="Bloom" component={Home} />
          <Stack.Screen name="singUp" component={SignUp} options={{ headerShown: false, headerTransparent: true }} />
        </Stack.Navigator>
      </QueryClientProvider>
    </NavigationContainer>
  );
}
