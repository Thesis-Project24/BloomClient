import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const Welcome = () => {
  return (
    <View style={styles.welcome}>
      <Image
        style={styles.welcomeChild}
        contentFit="cover"
        source={require("../assets/vector-2.png")}
      />
      <View style={[styles.welcomeInner, styles.frameViewPosition]}>
        <Image
          style={[styles.frameChild, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/vector-12.png")}
        />
      </View>
    
    
      <View style={[styles.frameView, styles.frameViewPosition]}>
        <View style={styles.welcomeToHomeParent}>
          <Text style={styles.welcomeToHome} numberOfLines={1}>
            Welcome To Home
          </Text>
          <Image
            style={[styles.frameItem, styles.frameItemFlexBox]}
            contentFit="cover"
            source={require("../assets/group-35.png")}
          />
          <Text
            style={[styles.currentlyTheNext, styles.frameItemFlexBox]}
          >{`Currently The Next Part of Home Activity & Fragementation is under development. The upcoming Part 2 is coming Soon........`}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameViewPosition: {
    width: "100%",
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  frameItemFlexBox: {
    marginTop: 62,
    alignSelf: "stretch",
    flex: 1,
  },
  welcomeChild: {
    // top: 590,
    bottom:-99,
    left: -278,
    width: 414,
    height: 362,
    position: "absolute",
  },
  frameChild: {
    alignSelf: "stretch",
    flex: 1,
  },
  welcomeInner: {
    height: 131,
    justifyContent: "center",
    // backgroundColor: "green",

  },
  welcomeToHome: {

    fontSize: 25,
    fontWeight: "800",
    fontFamily: FontFamily.mulishExtraBold,
    color: Color.black,
    height: "100%",
    // backgroundColor: "green",
    maxHeight: 36,
    textAlign: "left",
    alignSelf: "stretch",
    overflow: "hidden",
    width: "100%",

  },
  frameItem: {
    minWidth: 200,
    minHeight: 106,
    maxHeight: 250,
    maxWidth: 350,
    overflow: "hidden",
    width: "100%",
    height: "100%",
    // backgroundColor: "yellow",



  },
  currentlyTheNext: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.mulishRegular,
    color: Color.colorGray_600,
    textAlign: "left",
  },
  welcomeToHomeParent: {
    height: "100%",
    paddingHorizontal: Padding.p_6xl,
    paddingVertical: Padding.p_8xl,
    maxHeight: 452,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",

    flex: 1,
    // backgroundColor: "blue",

  },
  frameView: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: Padding.p_smi,
    paddingVertical: 137,
    alignItems: "center",
    overflow: "hidden",
    // backgroundColor: "red",
  },
  welcome: {
    backgroundColor: Color.beige,
    height: "100%",
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Welcome;
