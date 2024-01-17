import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import IconsSignUp from "../../components/auth/IconsSIgnUp";
import {
  Color,
  FontFamily,
  FontSize,
  Padding,
  Border,
} from "../../GlobalStyles";
import { signup } from "../../api/auth/Users";
import { useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { getAuth } from "firebase/auth";
import { app } from "../../firebase.config";


const SignUp = () => {
  const [email, setEmail] = useState<string>("");
  const [passwordHidden, setPasswordHidden] = useState(true);
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [fullName, setFullName] = useState<string>("");
 
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const mutation = signup();

  // const handlePress = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await mutation.mutateAsync({
  //       email: email,
  //       password: password,
  //       username: username,
  //       fullName: fullName,
  //     });
  //     navigation.navigate('SignIn')
  //   } catch (error) {
  //     console.error("Signup Error:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // }; 
  return (
    <ScrollView>
      <View style={[styles.SignUp, styles.SignUpLayout]}>
        <Image
          style={[styles.SignUpChild, styles.SignUpChildPosition]}
          contentFit="cover"
          source={require("../../assets/vector-12.png")}
        />

        <Image
          style={styles.SignUpItem}
          contentFit="cover"
          source={require("../../assets/vector-23.png")}
        />
        <View style={[styles.SignUpInner, styles.textPosition]}>
          <View style={styles.frameParent}>
            <View style={[styles.createAccountParent, styles.frameFlexBox]}>
              <Text
                style={[styles.createAccount, styles.createTypo]}
                numberOfLines={1}
              >
                Create account
              </Text>
              <View style={[styles.frameGroup, styles.frameFlexBox]}>
                <View style={styles.usernameParent}>
                  <View style={[styles.username, styles.usernameLayout]}>
                    <View style={styles.userParent}>
                      <Image
                        style={styles.userIcon}
                        contentFit="cover"
                        source={require("../../assets/group.png")}
                      />
                      <TextInput
                        style={[styles.username1, styles.eMailLayout]}
                        placeholder="Username"
                        keyboardType="email-address"
                        onChangeText={(text) => setUsername(text)}
                        autoCapitalize="sentences"
                        secureTextEntry={false}
                        placeholderTextColor="#c7c7c7"
                      />
                    </View>
                  </View>

                  <View style={[styles.email, styles.emailSpaceBlock]}>
                    <View style={styles.userParent}>
                      <Image
                        style={styles.icons}
                        contentFit="cover"
                        source={require("../../assets/icons1.png")}
                      />
                      <TextInput
                        style={[styles.eMail, styles.eMailLayout]}
                        onChangeText={(text) => setEmail(text)}
                        placeholder="E-mail"
                        multiline={true}
                        placeholderTextColor="#c8c8c8"
                      />
                    </View>
                  </View>
                  <View style={[styles.password, styles.emailSpaceBlock]}>
                    <View style={[styles.frameContainer, styles.frameFlexBox]}>
                      <View style={styles.userParent}>
                        <Image
                          style={styles.userIcon}
                          contentFit="cover"
                          source={require("../../assets/vector3.png")}
                        />
                        <TextInput
                          style={[styles.eMail, styles.eMailLayout]}
                          placeholder="Password"
                          onChangeText={(text) => setPassword(text)}
                          multiline={false}
                          secureTextEntry={true}
                          placeholderTextColor="#c8c8c8"
                        />
                      </View>
                      <Pressable
                        onPress={() => {
                          setPasswordHidden(!passwordHidden);
                        }}
                      >
                        <Image
                          style={styles.vectorIcon1}
                          contentFit="cover"
                          source={require("../../assets/vector4.png")}
                        />
                      </Pressable>
                    </View>
                  </View>

                  <View style={[styles.password, styles.emailSpaceBlock]}>
                    <View style={[styles.frameContainer, styles.frameFlexBox]}>
                      <View style={styles.userParent}>
                        <TextInput
                          style={[styles.eMail, styles.eMailLayout]}
                          placeholder="Full-Name"
                          onChangeText={(text) => setFullName(text)}
                          placeholderTextColor="#c7c7c7"
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <IconsSignUp />
              </View>
            </View>
            <View style={styles.createParent}>
              <Text style={[styles.create, styles.createTypo]}>{`Create`}</Text>
              <Pressable
                style={styles.vectorWrapper}
                onPress={ () => {
                  // await handlePress();
mutation.mutate({
  email: email,
  password: password,
  username: username,
  fullName: fullName,
})
                  // alert("Verification email sent. Please check your inbox.");
                }}
              >
                <Image
                  style={styles.vectorIcon4}
                  contentFit="cover"
                  source={require("../../assets/vector6.png")}
                />
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    maxHeight: 1,
    overflow: "hidden",
    maxWidth: "100%",
    height: "100%",
    flex: 1,
  },
  orContinueWith: {
    fontSize: FontSize.size_xs_3,
    fontWeight: "500",
    // fontFamily: FontFamily.poppinsMedium,
    color: Color.colorSilver_300,
    textAlign: "left",
    marginLeft: 7,
  },
  buttonsLayout: {
    width: 19,
    height: 19,
  },

  SignUpLayout: {
    height: 844,
    overflow: "hidden",
  },
  SignUpChildPosition: {
    top: 0,
    position: "absolute",
  },
  textPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameItem: {
    marginLeft: 7,
  },
  phoneIconLayout: {
    height: 14,
    top: 3,
    width: 14,
    position: "absolute",
  },
  frameFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  createTypo: {
    color: "#729384",
    // fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    flex: 1,
  },
  usernameLayout: {
    maxHeight: 50,
    flex: 1,
  },
  eMailLayout: {
    maxHeight: 20,
    fontSize: FontSize.size_mini,
    // fontFamily: FontFamily.latoRegular,
    height: "100%",
    flex: 1,
  },
  emailSpaceBlock: {
    marginTop: 15,
    paddingBottom: Padding.p_3xs,
    paddingRight: Padding.p_base,
    paddingTop: Padding.p_3xs,
    paddingLeft: Padding.p_lgi,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_21xl,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  SignUpChild: {
    left: -1,
    width: 391,
    height: 119,
  },
  text: {
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    // fontFamily: FontFamily.poppinsMedium,
    color: Color.colorGray_200,
    textAlign: "center",
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
  vectorParent: {
    height: 17,
    maxHeight: 19,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  buttonsChild: {
    height: 19,
  },
  buttons: {
    height: 44,
    width: 59,
    borderWidth: 0.5,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_4xs,
    justifyContent: "center",
    alignItems: "center",
  },

  parent: {
    top: 7,
    left: 22,
    width: 346,
    height: 21,
    position: "absolute",
  },
  SignUpItem: {
    top: 573,
    left: -275,
    width: 369,
    height: 305,
    position: "absolute",
  },
  createAccount: {
    fontSize: 30,
    maxHeight: 45,
    alignSelf: "stretch",
    textAlign: "center",
    overflow: "hidden",
  },
  userIcon: {
    height: 18,
    width: 14,
  },
  username1: {
    marginLeft: 8,
  },
  userParent: {
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
    flex: 1,
  },
  username: {
    paddingBottom: Padding.p_3xs,
    paddingRight: Padding.p_base,
    paddingTop: Padding.p_3xs,
    paddingLeft: Padding.p_lgi,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_21xl,
    maxHeight: 50,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  icons: {
    height: 11,
    width: 14,
  },
  eMail: {
    marginLeft: 13,
  },
  email: {
    height: 50,
  },
  vectorIcon1: {
    width: 18,
    height: 11,
  },
  frameContainer: {
    alignSelf: "stretch",
    flexDirection: "row",
    flex: 1,
  },
  password: {
    maxHeight: 50,
    flex: 1,
  },
  usernameParent: {
    minHeight: 250,
    maxHeight: 272,
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
  },
  frameGroup: {
    width: 300,
    height: 386,
  },
  createAccountParent: {
    height: 476,
  },
  create: {
    fontSize: FontSize.size_6xl,
    textAlign: "right",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    height: 34,
  },
  vectorIcon4: {
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
    padding: Padding.p_3xs,
    height: 34,
    marginLeft: 13,
    alignItems: "center",
    justifyContent: "center",
  },
  createParent: {
    justifyContent: "flex-end",
    maxHeight: 40,
    marginTop: 41,
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
    flex: 1,
  },
  frameParent: {
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "center",
    flex: 1,
  },
  SignUpInner: {
    width: 390,
    paddingHorizontal: Padding.p_26xl,
    paddingTop: 132,
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
    height: 844,
  },
  SignUp: {
    backgroundColor: Color.beige,
    width: "100%",
    overflow: "hidden",
    flex: 1,
  },
});

export default SignUp;
