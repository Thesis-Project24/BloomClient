// import Ionicons from "react-native-vector-icons/Ionicons";
import Chat from "../screens/Chat";
import Journal from "../screens/UserProfile/Journal";
import DoctorProfile from "../screens/Doctor/DoctorProfile";
import Community from "../screens/Community";
import Home from "../screens/Home";
import Nav from "../screens/Nav";
import User from "../screens/UserProfile/User";
 import { Ionicons } from "@expo/vector-icons";
// import { View, Platform } from "react-native";
import React from "react";

// import { Image, StyleSheet, Text, Button, Pressable } from "react-native";
// import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../screens/Doctor/EditDoctorProfile";

const Tab = createBottomTabNavigator();

export const BottomTabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "User") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Chat") {
            iconName = focused ? "chatbubbles" : "chatbubbles-outline";
          } else if (route.name === "Journal") {
            iconName = focused ? "journal" : "journal-outline";
          } else if (route.name === "DoctorProfile") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "community") {
            iconName = focused ? "home" : "home-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName || "home"} size={35} color={color} />;
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
        name="Chat"
        options={{ headerShown: false }}
        component={Chat}
      />
      <Tab.Screen
        name="DoctorProfile"
        options={{ headerShown: false }}
        component={DoctorProfile}
      />
      <Tab.Screen
        name="User"
        component={User}
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
  );
};

export default BottomTabNav;
