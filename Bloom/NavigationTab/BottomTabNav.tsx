// import Ionicons from "react-native-vector-icons/Ionicons";
import { StyleSheet, Text, View } from "react-native";
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
import { AntDesign, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
// import { BlurView } from 'expo-blur';

const Tab = createBottomTabNavigator();

export const BottomTabNav = () => {

  return (
    <DrawerScreen>
      <Tab.Navigator
       initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              return (
                <>
                  {focused ? (
                    <>
                      <View style={styles.container}>
                        <AntDesign 
                        style={styles.icone}
                        name="home" size={32} color="#f3f0ea" />
                      </View>
                      <View style={styles.line} />
                    </>
                  ) : (
                    // <View style={styles.container2}>
                    <AntDesign 
                    style={styles.icone}
                    name="home" size={32} color="#242424" />
                    //  </View>
                  )}
                </>
              );
            } else if (route.name === "Appi") {
              return (
                <>
                  {focused ? (
                    <>
                      {/* <View style={styles.container}> */}
                        <Ionicons 
                        style={styles.icone}
                        name="chatbubbles-outline" size={29} color="#729384" />
                        {/* <AntDesign name="message1" size={29} color="#f3f0ea" /> */}
                      {/* </View> */}

                      <View style={styles.line} />
                    </>
                  ) : (
                    <Ionicons 
                    style={styles.icone}
                    name="chatbubbles-outline" size={29} color="#242424" />
                    // <AntDesign name="message1" size={29} color="#242424" />
                  )}
                </>
              );
              // iconName = focused ? "chatbubbles" : "chatbubbles-outline";
            } else if (route.name === "Journal") {
              return (
                <>
                  {focused ? (
                    <>
                      {/* <View style={styles.container}> */}
                        <AntDesign style={styles.icone} 
                        name="book" size={29} color="#729384" />
                      {/* </View> */}
                      <View style={styles.line} />
                    </>
                  ) : (
                    <AntDesign 
                    style={styles.icone}
                    name="book" size={29} color="#242424" />
                  )}
                </>
              );
              // iconName = focused ? "journal" : "journal-outline";
            } else if (route.name === "PageSpecialists") {
              return (
                <>
                  {focused ? (
                    <>
                      {/* <View style={styles.container}> */}
                        <FontAwesome
                          style={styles.icone}
                          name="stethoscope" size={29} color="#729384" />

                      {/* </View> */}
                      <View style={styles.line} />
                    </>
                  ) : (
                    <FontAwesome
                      style={styles.icone}
                      name="stethoscope" size={29} color="#242424" />

                  )}
                </>
              );
              // iconName = focused ? "person" : "person-outline";
            } else if (route.name === "Community") {
              return (
                <>
                  {focused ? (
                    <>
                      {/* <View style={styles.container}> */}
                        <MaterialCommunityIcons 
                        style={styles.icone}
                        name="account-group-outline" size={29} color="#729384" />
                        {/* <AntDesign name="message1" size={29} color="#f3f0ea" /> */}
                      {/* </View> */}

                      <View style={styles.line} />
                    </>
                  ) : (
                    <MaterialCommunityIcons 
                    style={styles.icone}
                    name="account-group-outline" size={29} color="#242424" />

                  )}
                </>
              );
              // iconName = focused ? "people" : "people-outline";
            }
            // return (
            //   <Ionicons name={iconName || "people"} size={35} color={color} />
            // );
          },

          tabBarActiveTintColor: "#729384",
          tabBarInactiveTintColor: "#242424",
          tabBarBackgroundColor: "black",
          tabBarHideOnKeyboard: true,
          // tabBarShowLabel:"hh",


          // tabBarBackground:"transparent",
          // tabBarBackground:"none",
          // tabba
          // tabBarLabel: "null",
          tabBarShowLabel: true,


          tabBarStyle: {
            backgroundColor: "transparent",
            // backgroundColor: "#f3f0ea",
            position: 'absolute',
            gap: -10,
            bottom: 10,
            margin: 10,
            marginTop:10,
            marginHorizontal: 25,
            borderRadius: 30,
            // borderTopRightRadius:290,
            // borderTopLeftRadius:290,
            padding: 10,
            height: 90,
            // width: '95%',
            // backgroundColor: 'green',
            // flexDirection: 'row',
            alignItems: "center",
            justifyContent: "center",
            shadowColor: 'gray',
            shadowOffset: {
              width: 2,
              height: 4
            },
            shadowOpacity: 1,
            elevation: 15,

          },
        })}
      >
        {/* <Tab.Screen
        name="Nav"
        options={{ headerShown: false, headerTransparent: true }}
        component={Nav}
      /> */}

        <Tab.Screen
          name="Appi"
          options={{
            tabBarLabel: "Messages",
            headerShown: false
          }}
          component={Appi}
        />
        <Tab.Screen
          name="PageSpecialists"
          options={{
            tabBarLabel: "Specialists",
            headerShown: false
          }}
          component={PageSpecialists}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            headerShown: false
          }}
        />
        <Tab.Screen
          name="Journal"
          options={{
            tabBarLabel: "Journal",
            headerShown: false
          }}
          component={Journal}
        />
        <Tab.Screen
          name="Community"
          options={{
            // tabBarShowLabel:"Comm",
            tabBarLabel: "Community",
            headerShown: false
          }}
          component={Community}

        />
      </Tab.Navigator>
    </DrawerScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    // left: '13%',
    top: -35,
    width: 80,
    height: 80,
    backgroundColor: '#add8c4',
    padding: 8,
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: 'gray',
    shadowOffset: {
      width: 1,
      height: 2
    },
    shadowOpacity: 0,
    elevation: 5,
    // flex:1,
  },
  container2: {
    // position: 'absolute',
    // left: '13%',
    top: -35,
    width: 80,
    height: 80,
    backgroundColor: '#add8c4',
    padding: 8,
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: 'gray',
    shadowOffset: {
      width: 1,
      height: 2
    },
    shadowOpacity: 0,
    elevation: 5,
    // flex:1,
  },
  line: {
    position: "absolute",
    bottom: -30,
    width: '100%',
    height: 2,
    backgroundColor: '#729384',
    shadowColor: 'gray',
    shadowOffset: {
      width: 4,
      height: 3
    },
    shadowOpacity: 0,
    elevation: 5,
  },
  icone:{
    shadowColor: 'gray',
    shadowOffset: {
      width: 1,
      height: 2
    },
    shadowOpacity: 0.5,
    elevation: 5,
  }
})




export default BottomTabNav;
