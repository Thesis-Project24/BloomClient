import React, { useState } from "react";
import { Image } from "react-native"; // Corrected import
import { View, Text, TextInput, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { Checkbox } from "react-native-paper";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import {
  FontFamily,
  FontSize,
  Color,
  Border,
  Padding,
} from "../../GlobalStyles";
import IconsSignIn from "../../components/auth/IconsSignIn";
import { login } from "../../api/auth/Users";
import { ScrollView } from "react-native-gesture-handler";

const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [first_name, setFirstName] = useState<string>("");
  const [last_name, setLastName] = useState<string>("");
  const [phone_number, setPhoneNumber] = useState<string>("");
  const [passwordHidden, setPasswordHidden] = useState(true);
  const [frameCheckboxchecked, setFrameCheckboxchecked] = useState(false);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const mutation = login();
  mutation.isSuccess && navigation.push("home");
  const togglePasswordVisibility = () => {
    setPasswordHidden(!passwordHidden);
  };
  return (
    <ScrollView>
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
        <View style={[styles.frameView, styles.frameViewPosition]}>
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
                      style={[styles.frameParent3, styles.frameParentFlexBox]}
                    >
                      <View style={styles.frameWrapper}>
                        <View style={styles.iconsParent}>
                          <Image
                            style={styles.icons}
                            resizeMode="cover"
                            source={require("../../assets/icons.png")}
                          />
                          <TextInput
                            style={[styles.eMail, styles.eMailTypo]}
                            placeholder="E-mail"
                            onChangeText={(text) => setEmail(text)}
                            keyboardType="email-address"
                            autoCapitalize="sentences"
                            secureTextEntry={false}
                            placeholderTextColor="#c7c7c7"
                          />
                        </View>
                      </View>
                      <View style={styles.frameWrapper}>
                        <View
                          style={[
                            styles.frameParent4,
                            styles.frameParentFlexBox,
                          ]}
                        >
                          <View style={styles.iconsParent}>
                            <Pressable onPress={togglePasswordVisibility}>
                              <Image
                                style={styles.vectorIcon}
                                resizeMode="cover"
                                source={require("../../assets/vector7.png")}
                              />
                            </Pressable>
                            <TextInput
                              style={[styles.eMail, styles.eMailTypo]}
                              placeholder="Password"
                              onChangeText={(text) => setPassword(text)}
                              multiline={false}
                              secureTextEntry={true}
                              placeholderTextColor="#c8c8c8"
                            />
                          </View>
                          <Image
                            style={styles.vectorIcon1}
                            resizeMode="cover"
                            source={require("../../assets/vector8.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <View
                      style={[styles.frameParent5, styles.frameParentFlexBox]}
                    >
                      <View style={styles.frameParent6}>
                        <View>
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
                      <Pressable
                        onPress={() => navigation.navigate("ForgotPassword")}
                      >
                        <Text
                          style={[
                            styles.forgotYourPassword,
                            styles.signIn1FlexBox,
                          ]}
                        >
                          Forgot your password?
                        </Text>
                      </Pressable>
                    </View>
                  </View>
                  <IconsSignIn />
                </View>
                <View style={styles.signInParent}>
                  <Text style={[styles.signIn1, styles.signIn1FlexBox]}>
                    Sign in
                  </Text>
                  <Pressable
                    style={styles.vectorWrapper}
                    onPress={() =>
                      mutation.mutate({ email: email, password: password })
                    }
                  >
                    <Image
                      style={styles.vectorIcon2}
                      resizeMode="cover"
                      source={require("../../assets/vector10.png")}
                    />
                  </Pressable>
                </View>
              </View>
              <Text style={[styles.dontHaveAnContainer, styles.eMailTypo]}>
                {`Don’t have an account? `}
                <Text onPress={() => navigation.navigate("SignUp")}>
                  Create
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  signInLayout: {
    height: 844,
    overflow: "hidden",
  },
  frameViewPosition: {
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
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
    width: 391,
    height: 129,
  },
  signInInner: {
    height: 129,
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
    top: 573,
    left: -275,
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
    alignItems: "center",
    flex: 1,
  },
  welcomeBackParent: {
    height: 87,
    alignSelf: "stretch",
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
  },
  iconsParent: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
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
    height: 18,
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
    maxHeight: 128,
  },
  rememberMe: {
    fontSize: 9,
    // fontFamily: FontFamily.mulishRegular,
    marginLeft: 5,
    color: Color.colorSilver_200,
    textAlign: "left",
  },
  frameParent6: {
    maxWidth: 78,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
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
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 56,
    height: 34,
    padding: Padding.p_3xs,
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
    maxWidth: 300,
    maxHeight: 635,
    alignItems: "center",
  },
  frameView: {
    paddingHorizontal: Padding.p_26xl,
    paddingTop: 193,
    paddingBottom: 48,
    justifyContent: "center",
    alignItems: "flex-end",
    flexDirection: "row",
    overflow: "hidden",
    height: 844,
  },
  signIn: {
    backgroundColor: Color.beige,
    width: "100%",
    overflow: "hidden",
    flex: 1,
  },
});

export default SignIn;
