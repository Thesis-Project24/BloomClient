import { Text, View } from "react-native";
import Nav from "./screens/Nav";
import Tracker from "./screens/Tracker";
import { createStackNavigator } from "@react-navigation/stack";
// import Login from "./screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import User from "./screens/UserProfile/User";
import BottomTabNav from "./NavigationTab/BottomTabNav";
import { useFonts } from "expo-font";
import { QueryClient, QueryClientProvider } from "react-query";
import SignIn from "./screens/Auth/SignIn";
import SignUp from "./screens/Auth/SignUp";
import Appi from "./screens/ChatApp/Appi";
import EditDoctorProfile from "./screens/Doctor/EditDoctorProfile";
import DoctorProfile from "./screens/Doctor/DoctorProfile";
import MentalHealth from "./screens/MentalHealth";
import Availability from "./screens/Booking/Availablity";
import AvailabilityW from "./screens/Booking/AvailabilityW";
import { Title } from "react-native-paper";
import Home from "./screens/Home";
import CreateJournal from "./components/Journal/CreateJournal";
import DiaryDetails from "./components/Journal/DiaryDetails";
// import EmailVerificationConfirm from "./components/auth/EmailVerificationConfirm";
import ConfirmAppointmentOnline from "./screens/Confirm Appointment/ConfirmAppointment";
import EditUserProfile from "./screens/UserProfile/EditUserProfile";

import PageSpecialists from "./screens/Specialists/PageSpecialists";
import DoctorListing from "./screens/Specialists/DoctorListing";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SideBar from "./screens/SideBar.tsx/SideBar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState } from "react";
const queryClient = new QueryClient();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function DrawerRoot({ navigation }: any) {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false, drawerStyle: { 
        // width: 265,
        borderTopRightRadius: 100,
        borderBottomRightRadius: 100, } }}
      drawerContent={(props) => <SideBar {...props} />}
    >
       <Drawer.Screen name="BottomTabsRoot" component={BottomTabsRoot} />
         {/* <Drawer.Screen
            name="EditDoctorProfile"
            component={EditDoctorProfile}
            options={{
              header:()=><Text>helhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhlo</Text>
             }}
          /> */}
         
           <Drawer.Screen
            name="EditUserProfile"
            component={EditUserProfile}
            options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="Availability"
            component={Availability}
            options={{ headerShown: true }}
          />
          <Drawer.Screen
            name="AvailabilityW"
            component={AvailabilityW}
            options={{ headerShown: true }}
          />
          <Drawer.Screen
            name="Back"
            options={{
              headerTitle: () => <Nav />,
            }}
            component={BottomTabNav}
          />
          <Drawer.Screen
            name="Nav"
            component={Nav}
            options={{
              headerShown: false,
              headerTransparent: true,
              cardStyle: { backgroundColor: "transparent" },
            }}
          />
          <Drawer.Screen
            name="Appi"
            component={Appi}
            options={{ headerShown: true }}
          />
          <Drawer.Screen
            name="Tracker"
            component={Tracker}
            options={{ headerShown: true }}
          />
          <Drawer.Screen
            name="CreateJournal"
            component={CreateJournal}
            options={{ headerShown: true }}
          />
          <Drawer.Screen
            name="DiaryDetails"
            component={DiaryDetails}
            options={{ headerShown: true }}
          />
          <Drawer.Screen
            name="EditDoctorProfile"
            component={EditDoctorProfile}
            options={{
              header:()=><Text>helhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhlo</Text>
             }}
          />
          <Drawer.Screen
            name="DoctorProfile"
            component={DoctorProfile}
            options={{ headerShown: true }}
          />
          <Drawer.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
          />

          <Drawer.Screen
            name="User"
            component={User}
            options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="ConfirmAppointmentOnline"
            component={ConfirmAppointmentOnline}
            options={{ headerShown: true }}
          />
          <Drawer.Screen
            name="PageSpecialists"
            component={PageSpecialists}
            options={{ headerShown: true }}
          />
          <Drawer.Screen
            name="DoctorListing"
            component={DoctorListing}
            options={{ headerShown: true }}
          />
    </Drawer.Navigator>
  )
}
function BottomTabsRoot({ navigation }: any) {
  // const [bottomTabItemsNormal] = useState([<Frame />]);
  // const [bottomTabItemsActive] = useState([<Frame />]);
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      // tabBar={({ state, descriptors, navigation }: any) => {
      //   const activeIndex = state.index;
      //   return (
      //     <View
      //       style={{
      //         width: 390,
      //         height: 157,
      //         flexDirection: "column",
      //         alignItems: "center",
      //         justifyContent: "flex-end",
      //       }}
      //     >
      //       {bottomTabItemsNormal.map((item: any, index: any) => {
      //         const isFocused = state.index === index;
      //         return (
      //           <Pressable
      //             key={index}
      //             onPress={() => {
      //               navigation.navigate({
      //                 name: state.routes[index].name,
      //                 merge: true,
      //               });
      //             }}
      //           >
      //             {activeIndex === index
      //               ? bottomTabItemsActive[index] || item
      //               : item}
      //           </Pressable>
      //         );
      //       })}
      //     </View>
      //   );
      // }}
    >
      <Tab.Screen
            name="EditUserProfile"
            component={EditUserProfile}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Availability"
            component={Availability}
            options={{ headerShown: true }}
          />
          <Tab.Screen
            name="AvailabilityW"
            component={AvailabilityW}
            options={{ headerShown: true }}
          />
          <Tab.Screen
            name="Back"
            options={{
              headerTitle: () => <Nav />,
            }}
            component={BottomTabNav}
          />
          <Tab.Screen
            name="Nav"
            component={Nav}
            options={{
              headerShown: false,
              headerTransparent: true,
              cardStyle: { backgroundColor: "transparent" },
            }}
          />
          <Tab.Screen
            name="Appi"
            component={Appi}
            options={{ headerShown: true }}
          />
          <Tab.Screen
            name="Tracker"
            component={Tracker}
            options={{ headerShown: true }}
          />
          <Tab.Screen
            name="CreateJournal"
            component={CreateJournal}
            options={{ headerShown: true }}
          />
          <Tab.Screen
            name="DiaryDetails"
            component={DiaryDetails}
            options={{ headerShown: true }}
          />
          <Tab.Screen
            name="EditDoctorProfile"
            component={EditDoctorProfile}
            options={{
              header:()=><Text>helhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhlo</Text>
             }}
          />
          <Tab.Screen
            name="DoctorProfile"
            component={DoctorProfile}
            options={{ headerShown: true }}
          />
          <Tab.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
          />

          <Tab.Screen
            name="User"
            component={User}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="ConfirmAppointmentOnline"
            component={ConfirmAppointmentOnline}
            options={{ headerShown: true }}
          />
          <Tab.Screen
            name="PageSpecialists"
            component={PageSpecialists}
            options={{ headerShown: true }}
          />
          <Tab.Screen
            name="DoctorListing"
            component={DoctorListing}
            options={{ headerShown: true }}
          />
    </Tab.Navigator>
  );
}
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
        <Stack.Navigator initialRouteName="Back">
        <Stack.Screen name="DrawerRoot" component={DrawerRoot} />
          <Stack.Screen
            name="EditUserProfile"
            component={EditUserProfile}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Availability"
            component={Availability}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="AvailabilityW"
            component={AvailabilityW}
            options={{ headerShown: true }}
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
          <Stack.Screen
            name="Appi"
            component={Appi}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="Tracker"
            component={Tracker}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="CreateJournal"
            component={CreateJournal}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="DiaryDetails"
            component={DiaryDetails}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="EditDoctorProfile"
            component={EditDoctorProfile}
            options={{
              header:()=><Text>helhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhlo</Text>
             }}
          />
          <Stack.Screen
            name="DoctorProfile"
            component={DoctorProfile}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="User"
            component={User}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ConfirmAppointmentOnline"
            component={ConfirmAppointmentOnline}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="PageSpecialists"
            component={PageSpecialists}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="DoctorListing"
            component={DoctorListing}
            options={{ headerShown: true }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
