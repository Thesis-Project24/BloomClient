import React, { useState } from "react";
import { RootSiblingParent } from "react-native-root-siblings";
import { Text, View, Image, StyleSheet } from "react-native";
import Nav from "./screens/Nav";
import Tracker from "./screens/Tracker";
import { StackNavigationProp, createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, ParamListBase, useNavigation } from "@react-navigation/native";
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
import ArticleDet from "./components/articles/ArticleDet";
import PageSpecialists from "./screens/Specialists/PageSpecialists";
import DoctorListing from "./screens/Specialists/DoctorListing";
import Articles from "./screens/Articles/Articles";
import AddArticle from "./components/articles/AddArticle";

import { DrawerNavigationOptions } from "@react-navigation/drawer";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import Community from "./screens/Community";
import Journal from "./screens/UserProfile/Journal";
import Notifications from "./screens/Notification/Notifications"
// import PostDetails from "./components/forum/PostDetails";
import NavBarEdit from "./components/DoctorProfile/NavBarEditDoctor";
import { getAuth } from "firebase/auth";
import { app } from "./firebase.config";

import { createDrawerNavigator } from "@react-navigation/drawer";
import SideBar from "./screens/SideBar.tsx/SideBar";




const queryClient = new QueryClient();
export default function App() {
  // const [initializing, setInitializing] = useState(true);
  const [hideSplashScreen, setHideSplashScreen] = useState(false);
  const [user, setUser] = useState({});

  function onAuthStateChanged(user:any) {
    setUser(user);
    // if (initializing) setInitializing(false);
   }
   
   useEffect(() => {
    const auth = getAuth(app)
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber; 
   }, []);
  // if (initializing) return null;


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
    "Manrope-Regular": require("./assets/fonts/Manrope-Regular.ttf"),
    "Manrope-Medium": require("./assets/fonts/Manrope-Medium.ttf"),
    "Manrope-SemiBold": require("./assets/fonts/Manrope-SemiBold.ttf"),
    "Manrope-Bold": require("./assets/fonts/Manrope-Bold.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Sora-Regular": require("./assets/fonts/Sora-Regular.ttf"),
    "Sora-SemiBold": require("./assets/fonts/Sora-SemiBold.ttf"),
    "Tajawal-Regular": require("./assets/fonts/Tajawal-Regular.ttf"),
    "Tajawal-Medium": require("./assets/fonts/Tajawal-Medium.ttf"),
    "Tajawal-Bold": require("./assets/fonts/Tajawal-Bold.ttf"),
    "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "Sora-Bold": require("./assets/fonts/Sora-Bold.ttf"),
    "Epilogue-SemiBold": require("./assets/fonts/Epilogue-SemiBold.ttf"),
    "Epilogue-Bold": require("./assets/fonts/Epilogue-Bold.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Tajawal-Light": require("./assets/fonts/Tajawal-Light.ttf"),
  });

  const Drawer = createDrawerNavigator();
  function Root() {
    return (
      <Drawer.Navigator
        initialRouteName="Back"
        screenOptions={({ route }) => {
          return {
            headerShown: false,
            drawerStyle: {
              backgroundColor: "#fff",
              // borderTopRightRadius: 100,
              // borderBottomRightRadius: 100,
            },
            drawerActiveBackgroundColor: "#f3f0ea",
            overlayColor: "transparent",
            drawerHideStatusBarOnOpen: true,
            sceneContainerStyle: {
              backgroundColor: "#fff",
            },
          };
        }}
        drawerContent={(props) => {
          return <SideBar {...props} />;
        }}
      >
        <Drawer.Screen name="Home" component={Home} />

        <Drawer.Screen
          name="User"
          component={User}
          options={{ headerShown: false }}
        />
        {/* <Drawer.Screen
          name="PageSpecialists"
          component={PageSpecialists}
          options={{ headerShown: false }}
        /> */}
        <Drawer.Screen
          name="Back"
          options={{
            headerShown: false,
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
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="EditUserProfile"
          component={EditUserProfile}
          options={{ headerShown: true }}
        />

        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateJournal"
          component={CreateJournal}
          options={{
            header: () => (
              <Image
                style={[styles.profileItem, styles.profilePosition]}
                // contentFit="cover"
                source={require("./assets/vector-1.png")}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Journal"
          component={Journal}
          options={{
            header: () => (
              <Image
                style={[styles.profileItem, styles.profilePosition]}
                // contentFit="cover"
                source={require("./assets/vector-1.png")}
              />
            ),
          }}
        />

        <Stack.Screen
          name="NavBarEdit"
          component={NavBarEdit}
          options={{
            // header: () => <NavBarEdit />,
            headerShown: false,
            headerTransparent: true,
            cardStyle: { backgroundColor: "transparent" },
          }}
        />
        <Stack.Screen
          name="AritcleDet"
          component={ArticleDet}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ConfirmAppointmentOnline"
          component={ConfirmAppointmentOnline}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DoctorListing"
          component={DoctorListing}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DoctorProfile"
          component={DoctorProfile}
          options={{
            headerLeft: () => null,
          }}
        />
        <Stack.Screen
          name="Articles"
          component={Articles}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddArticle"
          component={AddArticle}
          options={{
            header: () => (
              <Image
                style={[styles.profileItem, styles.profilePosition]}
                // contentFit="cover"
                source={require("./assets/vector-1.png")}
              />
            ),
          }}
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
          name="DiaryDetails"
          component={DiaryDetails}
          options={{
            headerShown: false,
          }}
        />
        {/* <Stack.Screen
          name="PageSpecialists"
          component={PageSpecialists}
          options={{
            headerShown: false,
          }}
        /> */}

        {/* <Stack.Screen
          name="PostDetails"
          component={PostDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreatePost"
          component={CreatePost}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="Community"
          component={Community}
          options={{ headerShown: true }}
        /> */}
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="Tracker"
          component={Tracker}
          options={{ headerShown: false }}
        />
      </Drawer.Navigator>
    );
  }

  const Stack = createStackNavigator();

  if (!fontsLoaded && !error) {
    return <MentalHealth />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        {user ? (
          <Stack.Navigator initialRouteName="Root">
            <Stack.Screen
              name="Root"
              component={Root}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MentalHealth"
              component={MentalHealth}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <>
            <Stack.Navigator initialRouteName="SignIn">
              <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }} />
              <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{ headerShown: false }} />
            </Stack.Navigator>

          </>

        )}
      </NavigationContainer>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  profilePosition: {
    left: 0,
    position: "relative",
  },
  profileItem: {
    height: 91,
    width: 390,
    top: 0,
    left: 0,
  },
});