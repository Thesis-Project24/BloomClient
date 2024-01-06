import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Home from "./screens/Home";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Bloom" component={Home} />
        </Stack.Navigator>
      </QueryClientProvider>
    </NavigationContainer>
  );
}




























// {bottomTabItemsNormal.map((item: any, index: any) => {
//   const isFocused = state.index === index;
//   return (
//     <Pressable
//       key={index}
//       onPress={() => {
//         navigation.navigate({
//           name: state.routes[index].name,
//           merge: true,
//         });
//       }}
//     >
//       {activeIndex === index
//         ? bottomTabItemsActive[index] || item
//         : item}
//     </Pressable>
//   );
// })}