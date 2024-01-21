// import Ionicons from "react-native-vector-icons/Ionicons";
import {  StyleSheet, Text, View } from "react-native";
import Appi from "../screens/ChatApp/Appi"
import Journal from "../screens/UserProfile/Journal";
import DoctorProfile from "../screens/Doctor/DoctorProfile";
import Community from "../screens/Community";
import Home from "../screens/Home";
import Nav from "../screens/Nav";
import User from "../screens/UserProfile/User";
 import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../screens/Doctor/EditDoctorProfile";
import PageSpecialists from "../screens/Specialists/PageSpecialists";
import DrawerScreen from "../screens/SideBar.tsx/DrawerScreen";
const Tab = createBottomTabNavigator();

export const BottomTabNav = () => {

  return (
    <DrawerScreen>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Appi") {
            iconName = focused ? "chatbubbles" : "chatbubbles-outline";
          } else if (route.name === "Journal") {
            iconName = focused ? "journal" : "journal-outline";
          } else if (route.name === "PageSpecialists") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "Community") {
            iconName = focused ? "people" : "people-outline";
          }
          return (
            <Ionicons name={iconName || "people"} size={35} color={color} />
          );
        },

        tabBarActiveTintColor: "#729384",
        tabBarInactiveTintColor: "#729384",

        tabBarStyle: { backgroundColor: "#F3F0EA" },
      })}
    >
      {/* <Tab.Screen
        name="Nav"
        options={{ headerShown: false, headerTransparent: true }}
        component={Nav}
      /> */}
     
      <Tab.Screen
        name="Appi"
        options={{ headerShown: false }}
        component={Appi}
      />
      <Tab.Screen
        name="PageSpecialists"
        options={{ headerShown: false }}
        component={PageSpecialists}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Journal"
        options={{ headerShown: false }}
        component={Journal}
      />
      <Tab.Screen
        name="Community"
        options={{ headerShown: false }}
        component={Community}
      />
    </Tab.Navigator>
    </DrawerScreen>
  );
};

export default BottomTabNav;
