import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Nav from "./screens/Nav";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import { NavigationContainer } from "@react-navigation/native";
// import Footer from "./screens/Footer";
import User from "./screens/User";
import BottomTabNav from "./NavigationTab/BottomTabNav";


export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>

      <Stack.Navigator >
        <Stack.Screen
          name="Back"
          options={{ 
            headerTitle:()=>(<Nav/>) 
          }}
          component={BottomTabNav}
        />
        <Stack.Screen
          options={{ headerShown: false, headerTransparent: true }}
          name="Nav"
          component={Nav}
        />
        <Stack.Screen name="User" component={User} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}
