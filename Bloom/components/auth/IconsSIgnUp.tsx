import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../../GlobalStyles";

const IconsSignUp = () => {
  return (
    <View style={styles.frameParent}>
      <View style={styles.vectorParent}>
        <Image
          style={styles.frameLayout}
          contentFit="cover"
          source={require("../assets/rectangle-3.png")}
        />
        <Text style={styles.orContinueWith}>Or continue with</Text>
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-4.png")}
        />
      </View>
      <View style={styles.buttonsParent}>
        <Pressable style={styles.buttons}>
          <Image
            style={[styles.buttonsChild, styles.buttonsLayout]}
            contentFit="cover"
            source={require("../assets/frame-1434.png")}
          />
        </Pressable>
        <Pressable style={styles.buttonsShadowBox}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector5.png")}
          />
        </Pressable>
        <Pressable style={styles.buttonsShadowBox}>
          <Image
            style={[styles.buttonsItem, styles.buttonsLayout]}
            contentFit="cover"
            source={require("../assets/frame-2608626.png")}
          />
        </Pressable>
      </View>
    </View>
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
  buttonsLayout: {
    width: 19,
    height: 19,
  },
  orContinueWith: {
    fontSize: FontSize.size_xs_3,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorSilver_300,
    textAlign: "left",
    marginLeft: 7,
  },
  frameItem: {
    marginLeft: 7,
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
  vectorIcon: {
    width: 16,
    height: 19,
  },
  buttonsShadowBox: {
    marginLeft: 20,
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
  buttonsItem: {
    borderRadius: Border.br_3xs,
    height: 19,
  },
  buttonsParent: {
    minHeight: 45,
    maxHeight: 55,
    marginTop: 18,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    alignSelf: "stretch",
  },
  frameParent: {
    justifyContent: "flex-end",
    maxHeight: 94,
    alignItems: "center",
    flex: 1,
    alignSelf: "stretch",
  },
});

export default IconsSignUp;
