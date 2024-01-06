
import { Text, View } from "react-native";
import Nav from "./screens/Nav";
import Tracker from "./screens/Tracker";
import { createStackNavigator } from "@react-navigation/stack";
// import Login from "./screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import User from "./screens/User";
import BottomTabNav from "./NavigationTab/BottomTabNav";
import { useFonts } from "expo-font";
import { QueryClient, QueryClientProvider } from 'react-query';
import Profile from "./screens/Profile";

const queryClient = new QueryClient();
export default function App() {

  const [fontsLoaded, error] = useFonts({
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "PlusJakartaSans-SemiBold": require("./assets/fonts/PlusJakartaSans-SemiBold.ttf"),
    "PlusJakartaSans-Bold": require("./assets/fonts/PlusJakartaSans-Bold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Mulish-Regular": require("./assets/fonts/Mulish-Regular.ttf"),
    "Mulish-ExtraBold": require("./assets/fonts/Mulish-ExtraBold.ttf"),
    "DMSans-Regular": require("./assets/fonts/DMSans-Regular.ttf"),
    "DMSans-Bold": require("./assets/fonts/DMSans-Bold.ttf"),
    "Epilogue-Medium": require("./assets/fonts/Epilogue-Medium.ttf"),
  });
  const Stack = createStackNavigator();

  return (
       <QueryClientProvider client={queryClient}>
    <NavigationContainer>
        <Stack.Navigator  >
          <Stack.Screen
            name="Back"
            options={{
              headerTitle: () => <Nav />,
            }}
            component={BottomTabNav}
          />
          <Stack.Screen
            name="Nav"
            component={Nav}
            options={{
              headerShown: false,
              headerTransparent: true,
              cardStyle: { backgroundColor: "transparent" },
            }}
          />
           <Stack.Screen
            name="Tracker"
            component={Tracker}
            options={{ headerShown: true }}
          /> 
            <Stack.Screen
            name="Edit Profile"
            component={Profile}
            options={{ headerShown: true }}
          /> 

          <Stack.Screen name="User" component={User} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}


// // {bottomTabItemsNormal.map((item: any, index: any) => {
// //   const isFocused = state.index === index;
// //   return (
// //     <Pressable
// //       key={index}
// //       onPress={() => {
// //         navigation.navigate({
// //           name: state.routes[index].name,
// //           merge: true,
// //         });
// //       }}
// //     >
// //       {activeIndex === index
// //         ? bottomTabItemsActive[index] || item
// //         : item}
// //     </Pressable>
// //   );
// // })}



// import * as React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { useFonts } from "expo-font";
// import Profile from "./screens/Profile";
// // import Home from "./components/home";
// import { createStackNavigator } from "@react-navigation/stack";
// import { View, Text, Pressable, TouchableOpacity } from "react-native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { QueryClient, QueryClientProvider } from 'react-query';




// const queryClient = new QueryClient();
// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();
// function BottomTabsRoot({ navigation }: any) {
//   // const [bottomTabItemsNormal] = React.useState([<Frame />]);
//   // const [bottomTabItemsActive] = React.useState([<Frame />]);
//   return (
//     <Tab.Navigator
//       screenOptions={{ headerShown: false }}
//       tabBar={({ state, descriptors, navigation }: any) => {
//         const activeIndex = state.index;
//         return (
//           <View
//             style={{
//               width: 390,
//               height: 157,
//               flexDirection: "column",
//               alignItems: "center",
//               justifyContent: "flex-end",
//               display: 'none'
//             }}
//           >

//           </View>
//         );
//       }}
//     >
//       <Tab.Screen
//         name="Profile"
//         component={Profile}
//         options={{ headerShown: false, tabBarStyle: { display: "none" } }}
//       />
//     </Tab.Navigator>
//   );
// }

// const App = () => {
//   const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

//   const [fontsLoaded, error] = useFonts({
//     "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
//     "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
//     "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
//     "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
//     "PlusJakartaSans-SemiBold": require("./assets/fonts/PlusJakartaSans-SemiBold.ttf"),
//     "PlusJakartaSans-Bold": require("./assets/fonts/PlusJakartaSans-Bold.ttf"),
//     "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
//     "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
//     "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
//     "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
//     "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
//     "Mulish-Regular": require("./assets/fonts/Mulish-Regular.ttf"),
//     "Mulish-ExtraBold": require("./assets/fonts/Mulish-ExtraBold.ttf"),
//     "DMSans-Regular": require("./assets/fonts/DMSans-Regular.ttf"),
//     "DMSans-Bold": require("./assets/fonts/DMSans-Bold.ttf"),
//     "Epilogue-Medium": require("./assets/fonts/Epilogue-Medium.ttf"),
//   });

//   if (!fontsLoaded && !error) {
//     return null;
//   }

//   return (
//     <>
//       <NavigationContainer>
//       <QueryClientProvider client={queryClient}>
//         {hideSplashScreen ? (
//           <Stack.Navigator screenOptions={{ headerShown: false }}>
//             <Stack.Screen name="BottomTabsRoot" component={BottomTabsRoot} />
            
//             {/*  */}
//           </Stack.Navigator>
//         ) : null}
//         </QueryClientProvider>
//       </NavigationContainer>
//     </>
//   );
// };
// export default App;

