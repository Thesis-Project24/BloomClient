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
// import Test from "./screens/Notification/Test"


import DrawerRoot from "./DrawerNavigation";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Community from "./screens/Community";
import Journal from "./screens/UserProfile/Journal";
import Notifications from "./screens/Notification/Notifications";

import PostDetails from "./components/forum/PostDetails";
import CreatePost from "./components/forum/CreatePost";

const queryClient = new QueryClient();
export default function App() {
  // const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  // useEffect(() => {
  //   const checkLogin = async () => {
  //     const user = await AsyncStorage.getItem('user');
  //     if (user) {
  //       navigation.navigate('Journal')
  //     } else {
  //       navigation.navigate('SignIn')
  //     }
  //   };

  //   checkLogin();
  // }, []);




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

  if (!fontsLoaded && !error) {
    return (
      <MentalHealth />
    );
  }

  return (
    <RootSiblingParent>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="DrawerRoot">
            <Stack.Screen
              name="DrawerRoot"
              component={DrawerRoot}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditUserProfile"
              component={EditUserProfile}
              options={{ headerShown: true }}
            />
            {/* <Stack.Screen
              name="Test"
              component={Test}
              options={{ headerShown: true }}
            /> */}

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
              name="PostDetails"
              component={PostDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreatePost"
              component={CreatePost}
              options={{ headerShown: false }}
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
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Tracker"
              component={Tracker}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="Notifications"
              component={Notifications}
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
              name="DiaryDetails"
              component={DiaryDetails}
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
              name="EditDoctorProfile"
              component={EditDoctorProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DoctorProfile"
              component={DoctorProfile}
              options={{ headerShown: false }}
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
              name="AritcleDet"
              component={ArticleDet}
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
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PageSpecialists"
              component={PageSpecialists}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="DoctorListing"
              component={DoctorListing}
              options={{ headerShown: false }}
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
              name="Community"
              component={Community}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: true }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </RootSiblingParent>
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
