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
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
// import GetStart from "./screens/GetStart";
import Profile from "./screens/Profile";
import DoctorProfile from "./screens/DoctorProfile";
import MentalHealth from "./screens/MentalHealth";
import Availability from "./screens/Availablity";
import AvailabilityW from "./screens/AvailabilityW";
import { Title } from "react-native-paper";


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
        <Stack.Navigator   >
        <Stack.Screen
            name="DoctorProfile"
            component={DoctorProfile}
            
          /> 
          <Stack.Screen 
          name="AvailabilityW" 
          component={AvailabilityW} 
          />

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
           {/* <Stack.Screen
            name="Tracker"
            component={Tracker}
            options={{ headerShown: true }}
          />  */}
            <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ headerShown: true }}
          /> 
            {/* <Stack.Screen
            name="DoctorProfile"
            component={DoctorProfile}
            options={{ headerShown: true }}
          />  */}
                <Stack.Screen
            name="Availability"
            component={Availability}
            options={{ headerShown: true }}
          /> 

          <Stack.Screen name="User" component={User} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}












// const Stack = createNativeStackNavigator();
// import * as React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { useFonts } from "expo-font";
// // import IPhone13145 from "./screens/IPhone13145";
// // import Frame from "./components/Frame81611";
// import Profile from "./screens/Profile";
// // import Availability from "./screens/Availability";
// // import SideBar from "./components/SideBar";
// // import Welcome from "./screens/Welcome";
// // import Success from "./screens/Success";
// // import FeedbackAfterSession from "./screens/FeedbackAfterSession";
// // import FeedbackAfterSession1 from "./screens/FeedbackAfterSession1";
// // import SlelectPaymentMethod from "./screens/SlelectPaymentMethod";
// // import ConfirmAppointmentOnlineSt from "./screens/ConfirmAppointmentOnlineSt";
// import MentalHealth from "./screens/MentalHealth";
// // import ProfileDoctorRaja from "./screens/ProfileDoctorRaja";
// // import IPhone13149 from "./screens/IPhone13149";
// // import SignIn from "./screens/SignIn";
// // import IPhone13142 from "./screens/IPhone13142";
// // import ProfileDoctorRaja1 from "./screens/ProfileDoctorRaja";
// // import IPhone13146 from "./screens/IPhone13146";
// // import ForgotPassword from "./screens/ForgotPassword";
// // import Success1 from "./screens/Success";

// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { View, Text, TouchableOpacity } from "react-native";

// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// // import DoctorProfile from "./screens/DoctorProfile";
// import { QueryClient, QueryClientProvider } from 'react-query';
// import * as Font from 'expo-font';
// // import AppLoading from 'expo-app-loading';

// const Drawer = createDrawerNavigator();

// const Tab = createBottomTabNavigator();
// const queryClient = new QueryClient();
// function DrawerRoot({ navigation }: any) {
//   return (
//     <Drawer.Navigator
//       screenOptions={{ headerShown: false, drawerStyle: { width: 265 } }}
//       // drawerContent={(props) => <SideBar {...props} />}
//     >
//       <Drawer.Screen name="BottomTabsRoot" component={BottomTabsRoot} />
//       {/* <Drawer.Screen
//         name="ProfileDoctorRaja"
//         component={ProfileDoctorRaja}
//         options={{ headerShown: false }}
//       />
//       <Drawer.Screen
//         name="ConfirmAppointmentOnlineSt"
//         component={ConfirmAppointmentOnlineSt}
//         options={{ headerShown: false }}
//       /> */}
//     </Drawer.Navigator>
//   );
// }
// function BottomTabsRoot({ navigation }: any) {
//   const [bottomTabItemsNormal] = React.useState([]);
//   const [bottomTabItemsActive] = React.useState([]);
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
//             }}
//           >
//             {bottomTabItemsNormal.map((item: any, index: any) => {
//               const isFocused = state.index === index;
//               return (
//                 <TouchableOpacity
//                   key={index}
//                   onPress={() => {
//                     navigation.navigate({
//                       name: state.routes[index].name,
//                       merge: true,
//                     });
//                   }}
//                 >
//                   {activeIndex === index
//                     ? bottomTabItemsActive[index] || item
//                     : item}
//                 </TouchableOpacity>
//               );
//             })}
//           </View>
//         );
//       }}
//     >
//       <Tab.Screen
//         name="Profile"
//         component={Profile}
//         options={{ headerShown: false , tabBarStyle: { display: "none" }  }}
//       />
//     </Tab.Navigator>
//   );
// }

// const App = () => {
//   const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

//   const [fontsLoaded, error] = useFonts({
//     "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
//         "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
//         "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
//         "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
//         "PlusJakartaSans-SemiBold": require("./assets/fonts/PlusJakartaSans-SemiBold.ttf"),
//         "PlusJakartaSans-Bold": require("./assets/fonts/PlusJakartaSans-Bold.ttf"),
//         "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
//         "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
//         "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
//         "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
//         "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
//         "Mulish-Regular": require("./assets/fonts/Mulish-Regular.ttf"),
//         "Mulish-ExtraBold": require("./assets/fonts/Mulish-ExtraBold.ttf"),
//         "DMSans-Regular": require("./assets/fonts/DMSans-Regular.ttf"),
//         "DMSans-Bold": require("./assets/fonts/DMSans-Bold.ttf"),
//         "Epilogue-Medium": require("./assets/fonts/Epilogue-Medium.ttf"),



    
//     //  "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    
//     // // "Manrope-Regular": require("./assets/fonts/Manrope-Regular.ttf"),
//     // "Manrope-Medium": require("./assets/fonts/Manrope-Medium.ttf"),
//     // "Manrope-SemiBold": require("./assets/fonts/Manrope-SemiBold.ttf"),
//     // "Manrope-Bold": require("./assets/fonts/Manrope-Bold.ttf"),
//     // "Tajawal-Medium": require("./assets/fonts/Tajawal-Medium.ttf"),
//     // "Tajawal-Bold": require("./assets/fonts/Tajawal-Bold.ttf"),
   
//     // "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
  
//     // "Sora-Regular": require("./assets/fonts/Sora-Regular.ttf"),
//     // "Sora-SemiBold": require("./assets/fonts/Sora-SemiBold.ttf"),
   
//   });

//   React.useEffect(() => {
//     setTimeout(() => {
//       setHideSplashScreen(true);
//     }, 1000);
//   }, []);

//   if (!fontsLoaded && !error) {
//     return null;
//   }

//   return (
//     <>
//       <NavigationContainer>
//       <QueryClientProvider client={queryClient}>
//         {hideSplashScreen ? (
//           <Stack.Navigator
//             initialRouteName="ProfileDoctorRaja1"
//             screenOptions={{ headerShown: false }}
//           >
//             <Stack.Screen name="DrawerRoot" component={DrawerRoot} />

//             {/* <Stack.Screen
//               name="IPhone13145"
//               component={IPhone13145}
//               options={{ headerShown: false }}
//             /> */}
//             {/* <Stack.Screen
//               name="Availability"
//               component={Availability}
//               options={{ headerShown: false }}
//             />
//             <Stack.Screen
//               name="Welcome"
//               component={Welcome}
//               options={{ headerShown: false }}
//             />
//             <Stack.Screen
//               name="Success"
//               component={Success}
//               options={{ headerShown: false }}
//             />
//             <Stack.Screen
//               name="FeedbackAfterSession"
//               component={FeedbackAfterSession}
//               options={{ headerShown: false }}
//             />
//             <Stack.Screen
//               name="FeedbackAfterSession1"
//               component={FeedbackAfterSession1}
//               options={{ headerShown: false }}
//             />
//             <Stack.Screen
//               name="SlelectPaymentMethod"
//               component={SlelectPaymentMethod}
//               options={{ headerShown: false }}
//             /> */}
//             <Stack.Screen
//               name="MentalHealth"
//               component={MentalHealth}
//               options={{ headerShown: false }}
//             />
//             {/* <Stack.Screen
//               name="IPhone13149"
//               component={IPhone13149}
//               options={{ headerShown: false }}
//             /> */}
//             {/* <Stack.Screen
//               name="SignIn"
//               component={SignIn}
//               options={{ headerShown: false }}
//             /> */}
//             {/* <Stack.Screen
//               name="IPhone13142"
//               component={IPhone13142}
//               options={{ headerShown: false }}
//             /> */}
//             {/* <Stack.Screen
//               name="ProfileDoctorRaja1"
//               component={ProfileDoctorRaja1}
//               options={{ headerShown: false }}
//             /> */}
//             {/* <Stack.Screen
//               name="IPhone13146"
//               component={IPhone13146}
//               options={{ headerShown: false }}
//             /> */}
//             {/* <Stack.Screen
//               name="ForgotPassword"
//               component={ForgotPassword}
//               options={{ headerShown: false }}
//             /> */}
//             {/* <Stack.Screen
//               name="Success1"
//               component={Success1}
//               options={{ headerShown: false }}
//             /> */}
//           </Stack.Navigator>
//         ) : (
//           <MentalHealth />
//         )}
//         </QueryClientProvider>
//       </NavigationContainer>
//     </>
//   );
// };
// export default App;
