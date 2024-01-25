import * as React from "react";
import { Avatar } from "react-native-elements";
import {
  Image,
  
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import {
  Border,
  Padding,
  FontSize,
  FontFamily,
  Color,
} from "../../GlobalStyles";
import ButtonUser from "../../components/UserProfile/ButtonUser";
import Ad from "../../components/UserProfile/Ad";
 import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Imageprofile from "../../components/EditUser/ImageProfile";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useQuery } from "react-query";
import Nav from "../Nav";
import { getAuth } from "firebase/auth";
import { app } from "../../firebase.config";
import axios from "axios";


const User =  () => {
 
  const [data,setData]= React.useState({})
  
    React.useEffect(()=>{
    const auth = getAuth(app)
    const id = auth.currentUser?.uid
    console.log(auth.currentUser?.uid,':id')
    axios.get(`http://${process.env.EXPO_PUBLIC_ipadress}:3000/users/${id}`)
    .then((response:any)=> {
      setData(response.data)
    })
    .catch((error:any)=> {
      console.log(error)
    })
  },[])
  const navigation:any = useNavigation();
  return (
    <>
    <Nav/>
    <ScrollView>
      <View style={[styles.Box, styles.user11WrapperFlexBox]}>
        <View style={[styles.frameParent, styles.parentFlexBox]}>
         {data &&  <View style={styles.frameGroup}>
            <View style={[styles.user11Wrapper, styles.user11WrapperFlexBox]}>
              <TouchableOpacity
                onPress={() => navigation.navigate("EditUserProfile",
                {userData:data}
                )}
              >
                <View  style={styles.user11}>
                  <Image
                    resizeMode="cover"
                    source={require("../../assets/user-1-1.png")}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <Avatar
              rounded
              size={"large"}
              source={{ uri: data?.profile_picture }}
            />
            <View style={[styles.myriamHermessiParent, styles.parentFlexBox]}>
              <Text
                style={[styles.myriamHermessi, styles.myriamHermessiFlexBox]}
              >
                {data?.username}
              </Text>
              <Text>{data?.email}</Text>
            </View>
          </View>}
        </View>

        <View style={[styles.howsYourMoodTodayParent, styles.parentFlexBoxx]}>
          <Text style={[styles.howsYourMood, styles.howsYourMoodFlexBox]}>
            How’s your mood today
          </Text>
          <View style={[styles.rectangleParent, styles.beHappyYoureSpaceBlock]}>
            <View style={styles.frameChildss}>
              <Entypo name="emoji-happy" size={34} color="#729384" />
            </View>
            <View style={styles.frameShadowBox}>
              <Entypo name="emoji-flirt" size={34} color="#729384" />
            </View>
            <View style={styles.frameShadowBox}>
              <Entypo name="emoji-neutral" size={34} color="#729384" />
            </View>
            <View style={styles.frameShadowBox}>
              <Entypo name="emoji-sad" size={34} color="#729384" />
            </View>
          </View>
          <Text
            style={[styles.beHappyYoure, styles.beHappyYoureSpaceBlock]}
          >{`Be happy you’re not a Tree `}</Text>
        </View>
        <ButtonUser />
        <Ad />
      </View>
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  user11WrapperFlexBox: {},
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    top: "3%",
  },
  myriamHermessiFlexBox: {
    textAlign: "center",
    fontWeight: "800",
    flex: 1,
    alignSelf: "stretch",
    // marginTop: 30,
  },
  user11: {
    borderRadius: Border.br_9xs,
    width: 25,
    height: 25,
    top: 40,
  },

  user11Wrapper: {
    width: 355,
    flexDirection: "row",
    padding: Padding.p_3xs,
    marginTop: -50,
    justifyContent: "flex-end",
  },
  myriamHermessi: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.tajawalMedium,
    color: Color.colorGray_200,
    // marginTop: -30,
  },
  myriamHermessiParent: {
    width: 247,
    height: 53,
    marginTop: 2,
  },
  frameGroup: {
    zIndex: 0,
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  frameChild: {
    width: 100,
    height: 100,
    zIndex: 1,
    position: "relative",
    top: "30%", 
    marginTop: -4, 
  },
  frameParent: {
    borderRadius: Border.br_lg,
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 360,
    height: 180,
    paddingHorizontal: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
    paddingBottom: Padding.p_base,
  },
  Box: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 80,
  },
  parentFlexBoxx: {
    justifyContent: "center",
    alignItems: "center",
  },
  howsYourMoodFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  beHappyYoureSpaceBlock: {
    marginTop: 10,
    alignSelf: "stretch",
  },
  howsYourMood: {
    fontSize: FontSize.size_6xll,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    alignSelf: "stretch",
    textAlign: "left",
    color: Color.colorBlack,
  },
  frameChildss: {
    height: 53,
    width: 68,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_lg,
  },
  frameShadowBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    height: 53,
    width: 68,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_lg,
  },
  frameShadowBox2: {
    top: -10,
    width: "100%",
    alignItems: "center",
    height: "100%",
  },
  rectangleParent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  beHappyYoure: {
    flex: 1,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.tajawalRegular,
    overflow: "hidden",
    maxHeight: 19,
    textAlign: "left",
    color: Color.colorBlack,
  },
  howsYourMoodTodayParent: {
    backgroundColor: Color.beige,
    width: 390,
    height: 159,
    marginHorizontal: "auto", // Center horizontally
    marginTop: 30,
    padding: Padding.p_3xs,
  },
});

export default User;
