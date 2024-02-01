import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { FontSize, Color, FontFamily, Padding, Border } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/core";
import { getAuth } from "firebase/auth";
import { app } from "../../firebase.config";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeBG = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState("")
  
  const checkRoleUser = async () => {

    const userNameString = await AsyncStorage.getItem("userName");
    if (userNameString) {
      setUserName(userNameString);
      try {
        const user: string = JSON.parse(userNameString);
        setUserName(user);
      } catch (error) {
        console.log(error);
        // setUserName("");
      }
    }
  }
  useEffect(() => {
    checkRoleUser();
   }, []);
  //  console.log(userName,"userrrrname");
   
  return (

    <View style={styles.containerHome}>

      <ImageBackground
        style={styles.backgroundhome}
        resizeMode="cover"
        source={require("../../assets/bg22.png")} >


        <View style={styles.contenuhomeWrapper}>
          <View style={[styles.contenuhome, styles.contenuhomeFlexBox]}>
            <View style={styles.frameParent}>
              <View style={[styles.frameWrapper, styles.imageParentLayout]}>
                <TouchableOpacity style={[styles.imageParent, styles.parentFlexBox]}>
                  <Image
                    style={styles.imageIcon}
                    contentFit="cover"
                    source={require("../../assets/image.png")}
                  />
                  <Text style={styles.selfCare}>Self-care</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.frameGroup}>
                <View style={styles.keepWatchingParent}>
                  <Text
                    style={[styles.keepWatching, styles.course35Layout]}
                    numberOfLines={1}
                  >
                    Keep Watching
                  </Text>
                  <Text
                    style={[
                      styles.goodAfternoonMyriamContainer,
                      styles.course35FlexBox,
                    ]}
                    numberOfLines={2}
                  >
                    <Text>
                      <Text style={styles.goodAfternoon}>Good Afternoon</Text>
                      <Text style={styles.text}>{`,
`}</Text>
                      <Text style={styles.myriam}>{userName} !</Text>
                    </Text>
                  </Text>
                </View>
                <View style={[styles.vectorParent, styles.course35Layout]}>
                  <Image
                    style={styles.vectorIcon}
                    contentFit="cover"
                    source={require("../../assets/vector.png")}
                  />
                  <Text
                    style={[styles.course35, styles.course35FlexBox]}
                    numberOfLines={1}
                  >
                    Course · 35 min
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.contenuhomeInner, styles.playArrowParentLayout]}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Community")

                }}
                style={[styles.playArrowParent, styles.playArrowParentLayout]}
              >
                <Image
                  style={styles.playArrowIcon}
                  contentFit="cover"
                  source={require("../../assets/play-arrow.png")}
                />
                <View style={styles.joinToParent}>
                  <Text style={styles.joinTo}>{`Join To `}</Text>
                  <Text style={styles.communety}>COMMUNETY</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>






        <View style={styles.artboard1761Wrapper}>
          <ImageBackground
            style={styles.artboard1761}
            resizeMode="cover"
            source={require("../../assets/artboard-176-1.png")}></ImageBackground>
        </View>

        {/* <View style={styles.backgroundhome}>
      <View style={styles.bgWrapper}>
        <Image
          style={[styles.bgIcon, styles.bgIconLayout]}
          contentFit="cover"
          source={require("../../assets/bg.png")}
        />
      </View>
      <View style={styles.artboard1761Wrapper}>
        <Image
          style={styles.artboard1761}
          contentFit="cover"
          source={require("../../assets/artboard-176-1.png")}
        />
      </View>
    </View> */}




      </ImageBackground>
    </View>

  );
};

const styles = StyleSheet.create({
  artboard1761: {
    width: "100%",
    height: 304,
    // backgroundColor: "black",
  },
  artboard1761Wrapper: {
    height: "100%",
    width: "100%",

    // paddingLeft: 196,

    // paddingBottom: 29,
    marginLeft: -53,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    // flexDirection: "row",
    alignSelf: "stretch",
    flex: 1,
    // ❤
    // backgroundColor: "red",
  },
  bgIconLayout: {
    maxWidth: "100%",
    alignSelf: "stretch",
    overflow: "hidden",
    width: "100%",
  },
  bgIcon: {
    maxHeight: "100%",
    height: "100%",
    width: "100%",
    flex: 1,
  },
  bgWrapper: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    height: "100%",
    width: "100%",
    // backgroundColor: "green",
    paddingRight: 20,
  },
  backgroundhome: {
    minHeight: 200,
    maxHeight: 350,
    height: "100%",
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    backgroundColor: Color.beige,
    paddingBottom: 0,
  },
  containerHome: {
    height: "100%",
    maxHeight: 400,
    paddingBottom: 10,
    width: "100%",
    // backgroundColor: "red",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flex: 1,
  },





  contenuhomeFlexBox: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    // backgroundColor: "green",

  },
  imageParentLayout: {
    maxHeight: 30,
    minHeight: 30,
  },
  parentFlexBox: {
    justifyContent: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
  },
  course35Layout: {
    maxHeight: 22,
    minHeight: 22,
  },
  course35FlexBox: {
    display: "flex",
    overflow: "hidden",
    textAlign: "left",
    alignItems: "center",
    flex: 1,
  },
  playArrowParentLayout: {
    minHeight: 53,
    flex: 1,
  },
  imageIcon: {
    width: 14,
    height: 15,
  },
  selfCare: {
    fontSize: FontSize.size_smi_9,
    lineHeight: 24,
    color: Color.categoriesBrownLabel,
    marginLeft: 5,
    textAlign: "center",
    fontFamily: FontFamily.soraRegular,
  },
  imageParent: {
    borderRadius: 1076,
    backgroundColor: Color.colorGray_3000,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    minWidth: 90,
    maxWidth: 100,
    maxHeight: 30,
    minHeight: 30,
    flex: 1,
  },
  frameWrapper: {
    height: 30,
    paddingHorizontal: Padding.p_3xl,
    paddingVertical: 0,
    alignSelf: "stretch",
  },
  keepWatching: {
    fontSize: FontSize.size_mini,
    textTransform: "uppercase",
    fontFamily: FontFamily.soraSemiBold,
    overflow: "hidden",
    minHeight: 22,
    textAlign: "left",
    color: Color.generalLightText,
    fontWeight: "600",
    lineHeight: 22,
    alignSelf: "stretch",
  },
  goodAfternoon: {
    fontWeight: "500",
    fontFamily: FontFamily.epilogueMedium,
  },
  text: {
    fontFamily: FontFamily.epilogueSemiBold,
    fontWeight: "600",
  },
  myriam: {
    fontFamily: FontFamily.epilogueBold,
    fontWeight: "700",
  },
  goodAfternoonMyriamContainer: {
    fontSize: FontSize.size_7xl,
    lineHeight: 32,
    minHeight: 64,
    maxHeight: 64,
    marginTop: 9,
    color: Color.generalText,
    alignSelf: "stretch",
  },
  keepWatchingParent: {
    height: 95,
    maxWidth: 250,
    width: 250,
  },
  vectorIcon: {
    width: 12,
    height: 10,
  },
  course35: {
    height: "100%",
    fontSize: FontSize.size_smi,
    minWidth: 102,
    maxWidth: 102,
    marginLeft: 7,
    maxHeight: 22,
    minHeight: 22,
    color: Color.generalLightText,
    display: "flex",
    lineHeight: 22,
    fontFamily: FontFamily.soraRegular,
  },
  vectorParent: {
    marginTop: 6,
    minHeight: 22,
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
    alignSelf: "stretch",
  },
  frameGroup: {
    height: 123,
    marginTop: 17,
    width: 250,
  },
  frameParent: {
    minHeight: 100,
    maxHeight: 180,
    flex: 1,
    alignSelf: "stretch",
  },
  playArrowIcon: {
    width: 15,
    height: 18,
  },
  joinTo: {
    fontSize: FontSize.size_smi_2,
    textAlign: "left",
    color: Color.generalLightText,
    lineHeight: 22,
    fontFamily: FontFamily.soraRegular,
  },
  communety: {
    fontSize: FontSize.size_mini_2,
    fontFamily: FontFamily.soraBold,
    fontWeight: "700",
    color: Color.generalText,
    lineHeight: 22,
    textAlign: "center",
  },
  joinToParent: {
    width: 130,
    height: 46,
    minWidth: 130,
    minHeight: 46,
    maxWidth: 130,
    maxHeight: 46,
    marginLeft: 8,
  },
  playArrowParent: {
    borderRadius: Border.br_80xl,
    backgroundColor: Color.colorWhite,
    shadowColor: "#729384",
    shadowRadius: 3,
    elevation: 3,
    borderStyle: "solid",
    borderColor: Color.green,
    borderWidth: 2.5,
    minWidth: 180,
    maxWidth: 187,
    maxHeight: 53,
    justifyContent: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
  },
  contenuhomeInner: {
    maxHeight: 63,
    marginTop: 5,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    alignSelf: "stretch",
  },
  contenuhome: {
    // position: "absolute",
    // top: 130,
    // left: 19,
    width: "100%",
    height: "100%",

  },
  contenuhomeWrapper: {
    // marginLeft: -460,
    flex: 1,
    alignSelf: "stretch",
    width: "100%",
    height: "100%",
    // backgroundColor: Color.colorWhite,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 60,
    paddingLeft: 15,


  },
});

export default HomeBG;
