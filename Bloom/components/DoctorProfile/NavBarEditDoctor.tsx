import React, { useState, useEffect } from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View, StatusBar, SafeAreaView, ScrollView, TouchableOpacity, Alert } from "react-native";
import PersonalDetails from "../../components/DoctorProfile/PersonalDetails";
import DoctorDetails from "../../components/DoctorProfile/DoctorDetails";
import BusinessAddressDetails from "../../components/DoctorProfile/BusinessAddressDetails";
import { Padding, Color, FontFamily, FontSize, Border } from "../../GlobalStyles";
import Imageprofile from "../../components/DoctorProfile/ImageProfile";
import { useQuery, useQueryClient, QueryFunctionContext } from "react-query";
import SaveUpdateButton from "../../components/DoctorProfile/SaveUpdateButton";
import { Ionicons } from '@expo/vector-icons';
import { useFetchOneDoctor } from "../../api/doctors/Doctors";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from '@react-navigation/native';
import { useNavigation, ParamListBase } from "@react-navigation/native";


import { NavigationProp } from '@react-navigation/native';

type NavigationPropType = NavigationProp<
 Record<string, object>, // Replace this with your RootStackParamList
 'NavBarEdit' // Replace this with your route name
>;

const NavBarEdit = ({ page, goTo , data }: { page?: string; goTo?: string | undefined; data?:string }) => {
 const navigation = useNavigation<NavigationPropType>();
    StatusBar.setBarStyle("dark-content");
    StatusBar.setHidden(false);
   console.log(data,"id from navvvvvvvvvvvvvvvvvvvvvvvvvvv");
   console.log(goTo,"gotooooooooooooooooooooooo");
   
   
  //  else if(goTo = "DoctorProfile" || "EditDoctorProfile" ){
  //   navigation.navigate("DoctorProfile", {
  //     id: id,
  //   });
  // }


  return (
    <View style={[styles.profile,styles.header]}>
     
      <Image
        style={[styles.profileItem, styles.profilePosition]}
        contentFit="cover"
        source={require("../../assets/vector-1.png")}
      />

      <View style={styles.vectorParent}>
        <TouchableOpacity
          onPress={() => {
            if( goTo === "DoctorPersonalProfile" && data ){
              navigation.navigate("DoctorPersonalProfile", {
                doctor:data,
              });
              console.log(data,"from nav bar dddddddddddddddddddddd");
              
            }else if( goTo === "Availability" && data){
              navigation.navigate("Availability", {
                doctor:data,
              });
            } 
            
            else if (goTo) {
              navigation.navigate(goTo)
              
            }
            else{
              navigation.goBack()
            }
          }}
        >
          <Ionicons
            style={styles.frameChild}
            name="chevron-back"
            size={35}
            color={Color.black} />
        </TouchableOpacity>


        <Text style={[styles.yourProfile, styles.yourProfileFlexBox]}>
        {page}
        </Text>
      </View>



     
    </View>
  );
};

const styles = StyleSheet.create({
 

  profilePosition: {
    // left: 0,
    position: "relative",
  },
  yourProfileFlexBox: {
    height: "100%",
    textAlign: "center",
    alignSelf: "stretch",
  },
 
 
 
  
 
  profileItem: {
    height: 91,
    width: 390,
    top: 0,
    left: 0,
  },
  frameChild: {
    borderRadius: Border.br_10xs,
    width: 30,
    height: 50,
  },
  yourProfile: {
    fontSize: FontSize.size_lg,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.black,
    display: "flex",
    width: 277,
    marginLeft: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  vectorParent: {
    // top: 46,
    // height: 38,
    alignItems: "flex-end",
    paddingHorizontal: 26,
    paddingVertical: 0,
    flexDirection: "row",
    width: 390,
    // left: 0,
    // position: "absolute",
  },

  buttonSaveprofileSelf: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorPaleturquoise,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 10,
      height: 4,
    },

    // position: "absolute",

    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: "100%",
    height: 719,
    paddingHorizontal: 32,
    paddingVertical: 14,
    marginTop: 430,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },

  frameView: {
    height: "100%",
    minWidth: 600,
    marginTop: 60,
    alignItems: "center",
  },
  profule: {
    height: "100%",
    alignItems: "center",
    flex: 1,
  },

  // HEDHA TEAABA IMG
  profuleWrapper: {
    // marginTop: 40,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: 12,
    width: "100%",
    height: "100%",
    flexDirection: "row",
    overflow: "hidden",
    // backgroundColor: "red",
  },

  profile: {
    // minHeight:1000,
    width: "100%",
    // height: "100%",
    overflow: "hidden",
    flex: 1,
     backgroundColor: Color.beige,
    // backgroundColor: "transparent",
    maxHeight: 140,
  },
  header: {
    // width: 357,
    // justifyContent: "space-between",
    // paddingHorizontal: 10,
    // paddingVertical: 0,
    // marginTop: 25,
    flexDirection: "column",  
    alignItems: "flex-start",
  },
  groupParent: {
    // borderRadius: Border.br_3xl,
    // backgroundColor: Color.beige,
    // minWidth: 430,
    // width: "100%",
    // maxWidth: 450,
     height: "100%",
    // maxHeight: 300,
    // minHeight: 100,

     paddingHorizontal: 0,
    paddingVertical: 10,
    alignItems: "center",
  },
});

export default NavBarEdit;
