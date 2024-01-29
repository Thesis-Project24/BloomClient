import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Image } from "react-native"; // Corrected import
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";

import { Checkbox } from "react-native-paper";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/core";

import {
  FontFamily, FontSize, Color, Border, Padding,
} from "../../GlobalStyles";
import IconsSignIn from "../../components/auth/IconsSignIn";
import { login } from "../../api/auth/Users";
import { ScrollView } from "react-native-gesture-handler";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { app } from "../../firebase.config";
import { Feather } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import ForgotPassword from "../Password/PassWord";
// import BottomSeheet, { BottomSheetBackdrop, BottomSheetTextInput, BottomSheetFooter } from "@gorhom/bottom-sheet"
// import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
// import { BottomSheetBackdropMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { AntDesign } from '@expo/vector-icons';
import Welcome from "../Welcome";


const SignIn = () => {
  console.log('reached')
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [passwordHidden, setPasswordHidden] = useState(true);
  const [frameCheckboxchecked, setFrameCheckboxchecked] = useState(false);
  const [emailCheck, setEmailCheck] = useState(true);
  const [isEmailEmpty, setIsEmailEmpty] = useState<boolean>(false);
  const [handelErrorEmail, setHandelErrorEmail] = useState<boolean>(false);
  const [isEmailEmptyP, setIsEmailEmptyP] = useState<boolean>(false);
  const [success,setSuccess] = useState<boolean>(false);
  
  const [handelError, setHandelError] = useState<boolean>(false);


  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const handelWelcomePage = ()=>{
    // navigation.navigate('Home')
    console.log("testtttt");
    
    setTimeout(() => {
    console.log(" mpreee testtttt");

      return(<Welcome/>)
    }, 7000);
   }
  
  const mutation = login(setHandelErrorEmail , handelWelcomePage);
  const togglePasswordVisibility = () => {
    setPasswordHidden(!passwordHidden);
    console.log(passwordHidden, "passssssssssssssssssssss");

  };
  const handlePasswordReset = async (email: string) => {
    if (email) {
      try {
       
        setHandelError(false)
        const auth = getAuth(app);
        if (!email) {
          throw new Error("No email provided");
        setSuccess(false)

        }
        await sendPasswordResetEmail(auth, email);
        setSuccess(true)
        console.log("Password reset email sent successfully");
      } catch (error) {
        console.error("Error sending password reset email:", error);
        setHandelError(true)
        setSuccess(false)
        // setIsEmailEmpty(true)
      }
    }else {
      setHandelError(true)
    }
   

  };
  const bottomSheetRef = useRef<BottomSheetMethods>(null)
  console.log(success,"ssssssssssssssssssssssssssssssssssssss");

  const handelOpen = (index: number) => {
    // console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");

    bottomSheetRef.current?.snapToIndex(index)
  }

  const handelClose = () => {
    console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");

    bottomSheetRef.current?.close()

  }

  // useEffect(() => {
  //    handelClose()
  //   // bottomSheetRef.current?.close()
  //   }, [])    
  bottomSheetRef.current?.close()

  const handleEmailChange = (text: string) => {
    if (text) {
      setHandelError(false)
      setEmail(text);
    }
    setIsEmailEmpty(text.trim() === '');
    // console.log(text.trim() === '', "testttttttttttt");

  };
  const handlePassWordChange = (text: string) => {
    if (text) {
      setHandelError(false)
      setPassword(text);
    }
    setIsEmailEmptyP(text.trim() === '');
    // console.log(text.trim() === '', "testttttttttttt");

  };


  return (
    // <ScrollView>
    
    <>
    <View style={[styles.signIn, styles.signInLayout]}>
      <View style={[styles.signInInner, styles.frameViewPosition]}>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../../assets/vector-13.png")}
        />
      </View>
      <Image
        style={styles.signInChild}
        resizeMode="cover"
        source={require("../../assets/vector-23.png")}
      />
      <View style={[styles.frameView, styles.frameViewPositionn]}>
        <View style={[styles.frameParent, styles.eMailLayout]}>
          <View style={styles.welcomeBackParent}>
            <Text
              style={[styles.welcomeBack, styles.textTypo]}
              numberOfLines={1}
            >
              Welcome Back
            </Text>
            <Text style={styles.signInTo}>{`Sign In to a Healthier, 
  Happier You`}</Text>
          </View>
          <View style={styles.frameGroup}>
            <View style={styles.frameContainer}>
              <View style={styles.frameParent1}>
                <View
                  style={[styles.frameParent2, styles.frameParentFlexBox]}
                >
                  <View
                    style={[styles.frameParent3, styles.frameParentFlexBox]} >

                    <View style={[styles.Email]} >

                      <View style={[styles.frameWrapper,
                      isEmailEmpty ? {
                        borderColor: 'red',
                        borderWidth: 1,
                        borderStyle: "solid",
                      } : null,]}>
                        <View style={styles.iconsParent}>
                          <MaterialIcons name="email" size={24} color="#9A9A9A" />

                          <TextInput
                            style={[styles.eMail, styles.eMailTypo]}
                            placeholder="E-mail"
                            onChangeText={handleEmailChange}
                            keyboardType="email-address"
                            autoCapitalize="sentences"
                            secureTextEntry={false}
                            placeholderTextColor="#c7c7c7"
                          />
                        </View>
                      </View>
                      <Text
                        style={[styles.enterYourEmailL, styles.enterYourEmailFlexBox]}
                      >
                        {handelErrorEmail ? `Please Enter a Valid Email Address` : null}
                      </Text>
                    </View>



                    <View style={[styles.frameWrapper,
                    isEmailEmptyP ? {
                      borderColor: 'red',
                      borderWidth: 1,
                      borderStyle: "solid",
                    } : null,
                    ]}>

                      <View
                        style={[
                          styles.frameParent4,
                          styles.frameParentFlexBox,
                        ]}
                      >
                        <View style={styles.iconsParent}>
                          <Fontisto name="locked" size={20} color="#9A9A9A" />
                          <TextInput
                            style={[styles.eMail, styles.eMailTypo]}
                            placeholder="Password"
                            onChangeText={handlePassWordChange}
                            multiline={false}
                            secureTextEntry={passwordHidden}
                            placeholderTextColor="#c8c8c8"
                          />
                        </View>
                        <TouchableOpacity onPress={togglePasswordVisibility}>
                          {passwordHidden ? <Feather name="eye-off" size={23} color="#9A9A9A" /> : <Feather name="eye" size={23} color="#9A9A9A" />}
                        </TouchableOpacity>


                      </View>
                      
                    </View>
                    <Text
                        style={[styles.enterYourEmailL, styles.enterYourEmailFlexBox]}
                      >
                        {handelErrorEmail ? `The Email or Password You Entered is Incorrect.` : null}
                      </Text>
                  </View>

                  <View
                    style={[styles.frameParent5, styles.frameParentFlexBox]}
                  >
                    <View style={styles.frameParent6}>
                      <View
                        style={{
                          marginLeft: 16,
                          width: 27,
                          height: 27,
                          paddingRight: 1,
                          paddingBottom:6,
                          justifyContent: "center",
                          alignItems: "center",
                          borderColor: '#a78a6e',
                          borderWidth: 2,
                          borderStyle:"solid" ,
                          borderRadius: 11,
                        }}
                      >
                        <View style={{ 
                          width: 35,
                          height: 30,
                         }}>
                          <Checkbox
                            status={
                              frameCheckboxchecked ? "checked" : "unchecked"
                            }
                            onPress={() =>
                              setFrameCheckboxchecked(!frameCheckboxchecked)
                            }
                            color="#a78a6e"
                          />
                        </View>
                      </View>
                    </View>
                    <TouchableOpacity

                    >
                      <Text
                        style={[
                          styles.forgotYourPassword,
                          styles.signIn1FlexBox,
                        ]}
                        // onPress={() => handlePasswordReset()}
                        onPress={() => handelOpen(1)}


                      >
                        Forgot your password?
                      </Text>

                    </TouchableOpacity>
                  </View>
                </View>
                <IconsSignIn />
              </View>
              <View style={styles.signInParent}>
                <Text style={[styles.signIn1, styles.signIn1FlexBox]}>
                  Sign in
                </Text>
                <TouchableOpacity
                  style={styles.vectorWrapper}
                  onPress={() => {
                    mutation.mutate({ email: email, password: password, role: "doctor" })
                    if(handelErrorEmail)setIsEmailEmpty(true)
                    // if()
                    navigation.navigate("User");
                  }}
                >
                  <AntDesign name="arrowright" size={29} color="white" />
                  {/* <Image
                    style={styles.vectorIcon2}
                    resizeMode="cover"
                    source={require("../../assets/vector10.png")}
                  /> */}
                </TouchableOpacity>
              </View>
            </View>
            <Text style={[styles.dontHaveAnContainer, styles.eMailTypo]}>
              {`Don't have an account? `}
              <Text onPress={() => navigation.navigate("SignUp")}>
                Create
              </Text>
            </Text>
          </View>


        </View>

      </View>
      <ForgotPassword ref={bottomSheetRef} handlePasswordReset={handlePasswordReset} handelError={handelError} success={success}  />
    </View>
    {/* {handelWelcomePage()  } */}
    </>
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  enterYourEmailL: {
    fontSize: FontSize.regular12_size,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color:"red",
    // marginTop: 9,
    // backgroundColor:"red",
    maxHeight: 20,
  },
  enterYourEmailFlexBox: {
    textAlign: "left",
    alignSelf: "stretch",
    flex: 1,
  },

  iconsParent: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 2,
  },

  Email: {
    justifyContent: "flex-start",
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
    // gap:1,
    // backgroundColor:"yellow",
  },







  signInLayout: {
    height: "100%",
    overflow: "hidden",
  },
  frameViewPosition: {
    width: "100%",
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameViewPositionn: {

    position: "relative",
    // backgroundColor:"blue"
  },
  textTypo: {
    // fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  phoneIconLayout: {
    height: 14,
    top: 3,
    width: 14,
    position: "absolute",
  },
  eMailLayout: {
    height: "100%",
    flex: 1,
  },
  frameParentFlexBox: {
    justifyContent: "space-between",
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
    width:"100%",
    // backgroundColor: "blue",
    // minHeight: "100%",
    height:"100%",
    // gap:0

  },
  eMailTypo: {
    fontSize: FontSize.size_mini,
    // fontFamily: FontFamily.latoRegular,
  },
  signIn1FlexBox: {
    textAlign: "right",
    alignSelf: "stretch",
    flex: 1,
  },
  frameChild: {
    width: "100%",
    height: 149,
  },
  signInInner: {
    height: 159,
    // backgroundColor:"red"
  },
  text: {
    fontSize: FontSize.size_sm,
    color: Color.colorGray_200,
    textAlign: "center",
    left: 0,
    // fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: 0,
    position: "absolute",
  },
  iconLocation: {
    height: "53.33%",
    width: "4.05%",
    top: "4.76%",
    right: "84.39%",
    bottom: "41.9%",
    left: "11.56%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  phoneIcon: {
    left: 284,
  },
  icons8BatteryLevel904: {
    left: 326,
    width: 20,
    height: 20,
    top: 0,
    position: "absolute",
  },
  icons8WiFi504: {
    left: 305,
  },
  parent: {
    top: 7,
    left: 22,
    width: 346,
    height: 21,
    position: "absolute",
  },
  signInChild: {
    // top: 573,
    bottom:-60,
    left: -255,
    width: 369,
    height: 305,
    position: "absolute",
  },
  welcomeBack: {
    fontSize: 26,
    maxHeight: 40,
    textAlign: "left",
    color: Color.bleck,
    alignSelf: "stretch",
    overflow: "hidden",
    flex: 1,
  },
  signInTo: {
    fontSize: FontSize.size_base,
    lineHeight: 22,
    // fontFamily: FontFamily.poppinsRegular,
    display: "flex",
    marginTop: 4,
    textAlign: "left",
    color: Color.bleck,
    alignSelf: "stretch",
    alignItems: "flex-start",
    flex: 1,
    // backgroundColor:"yellow"
  },
  welcomeBackParent: {
    maxHeight: 100,
    height: "100%",
    alignSelf: "stretch",
    // backgroundColor:"red"
  },
  icons: {
    width: 15,
    height: 11,
  },
  eMail: {
    maxHeight: 20,
    marginLeft: 13,
    height: "100%",
    flex: 1,
    width: "10%",
    // backgroundColor:"red"

  },

  frameWrapper: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorWhite,
    paddingLeft: Padding.p_lgi,
    paddingTop: Padding.p_3xs,
    paddingRight: Padding.p_base,
    paddingBottom: Padding.p_3xs,
    maxHeight: 50,
    alignSelf: "stretch",
    justifyContent: "center",
    flex: 1,
  },
  vectorIcon: {
    height: 111,
    width: 14,
  },
  vectorIcon1: {
    width: 18,
    height: 11,
  },
  frameParent4: {
    flexDirection: "row",
  },
  frameParent3: {
    maxHeight: 190,
    // backgroundColor: "yellow",
    height: "100%",
    minHeight:120,

  },
  rememberMe: {
    fontSize: 9,
    // fontFamily: FontFamily.mulishRegular,
    marginLeft: 5,
    color: Color.colorSilver_200,
    textAlign: "left",
  },
  frameParent6: {
    // maxWidth: 78,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    flex: 1,
  },
  forgotYourPassword: {
    color: Color.colorSilver_200,
    fontSize: FontSize.size_mini,
    // fontFamily: FontFamily.latoRegular,
  },
  frameParent5: {
    maxHeight: 30,
    flexDirection: "row",
  },
  frameParent2: {
    minWidth: 244,
    maxHeight: 195,
  },
  frameParent1: {
    minHeight: 300,
    marginTop: 50,
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  signIn1: {
    height: 31,
    fontSize: FontSize.size_6xl,
    fontWeight: "700",
    // fontFamily: FontFamily.latoBold,
    color: Color.bleck,
  },
  vectorIcon2: {
    width: 18,
    height: 18,
  },
  vectorWrapper: {
    borderRadius: Border.br_mid,
    backgroundColor: Color.colorCadetblue,
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 56,
    height: 35,
    // padding: Padding.p_3xs,
    marginLeft: 13,
    alignItems: "center",
    justifyContent: "center",
  },
  signInParent: {
    marginTop: 25,
    alignSelf: "stretch",
    justifyContent: "center",
    flexDirection: "row",
    flex: 1,
  },
  frameContainer: {
    height: 388,
    alignSelf: "stretch",
    alignItems: "flex-end",
  },

  dontHaveAnContainer: {
    color: Color.colorGray_100,
    marginTop: 55,
    alignSelf: "stretch",
    textAlign: "center",
    flex: 1,
  },
  frameGroup: {
    marginTop: 40,
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  frameParent: {
    justifyContent: "center",

    width: "100%",
    // maxWidth: 300,
    // maxHeight: 635,
    alignItems: "center",
    // backgroundColor: "green",
  },
  frameView: {
    paddingHorizontal: Padding.p_26xl,
    paddingTop: 193,
    paddingBottom: 48,
    justifyContent: "center",
    alignItems: "flex-end",
    flexDirection: "row",
    overflow: "hidden",
    height: "100%",
    width: "100%",

  },
  signIn: {
    backgroundColor: Color.beige,
    width: "100%",
    overflow: "hidden",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SignIn;
