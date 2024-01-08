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
import Home from "./screens/Home";


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
        <Stack.Navigator initialRouteName="SignIn">
          <Stack.Screen name="Availability" component={Availability} />
          <Stack.Screen name="AvailabilityW" component={AvailabilityW} />
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
            name="Profile"
            component={Profile}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="DoctorProfile"
            component={DoctorProfile}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: true }}
          />

          <Stack.Screen name="User" component={User} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}


