import * as React from "react";
import { Text, StyleSheet, Image, View,Pressable } from "react-native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
const Nav = () => {
  const navigation = useNavigation();
  return (
    <View style={[styles.groupParent, styles.textPosition]}>
      <View style={styles.parent}></View>
      <View style={styles.header}>
        <View style={[styles.more, styles.wrapperGroupFlexBox]}>
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/path-16.png")}
          />
          <Image
            style={[styles.path17Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/path-16.png")}
          />
          <Image
            style={[styles.path17Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/path-16.png")}
          />
        </View>
        <View style={[styles.frameParent, styles.wrapperGroupFlexBox]}>
          <View style={[styles.vectorWrapper, styles.wrapperGroupFlexBox]}>
            <Pressable onPress={() => navigation.navigate("User")}>
              <Image
                style={styles.frameChild}
                resizeMode="cover"
                source={require("../assets/ellipse-2.png")}
              />
            </Pressable>
          </View>
          <View style={[styles.groupGroup, styles.wrapperGroupFlexBox]}>
            <Image
              style={styles.groupIcon}
              resizeMode="cover"
              source={require("../assets/group.png")}
            />
            <View style={[styles.wrapper, styles.wrapperGroupFlexBox]}>
              <Text style={[styles.text1, styles.textTypo]}>3</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textPosition: {
    left: 0,
    top: 0,
  
  },
  textTypo: {
    textAlign: "center",
    fontWeight: "500",
  },
  phoneIconLayout: {
    height: 14,
    width: 14,
    top: 3,
  
  },
  wrapperGroupFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconLayout: {
    height: 3,
    width: 29,
  },
  text: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorGray_200,
    left: 0,
    top: 0,
  
  },
  iconLocation: {
    height: "66.67%",
    width: "4.05%",
    top: "14.29%",
    right: "84.39%",
    bottom: "19.05%",
    left: "11.56%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    
  },
  phoneIcon: {
    left: 284,
  },
  icons8BatteryLevel904: {
    left: 326,
    height: 20,
    width: 20,
    top: 0,
   
  },
  icons8WiFi504: {
    left: 305,
  },
  parent: {
    width: 346,
    height: 21,
  },
  path17Icon: {
    marginTop: 7,
  },
  more: {
    height: 27,
    width: 37,
  },
  frameChild: {
    height: 37,
    width: 37,
  },
  vectorWrapper: {
    flexDirection: "row",
    padding: Padding.p_3xs,
  },
  groupIcon: {
    height: 25,
    width: 20,
  },
  text1: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.epilogueMedium,
    color: Color.colorGray_100,
  },
  wrapper: {
    borderRadius: Border.br_2xs,
    backgroundColor: Color.colorChocolate,
    width: 22,
    height: 22,
    marginLeft: -7,
    flexDirection: "row",
  },
  groupGroup: {
    width: 40,
    height: 28,
    marginLeft: 9,
    flexDirection: "row",
  },
  frameParent: {
    flexDirection: "row",
  },
  header: {
    width: 357,
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: 0,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  groupParent: {
    borderRadius: Border.br_3xl,
    backgroundColor: Color.beige,
    width: 390,
    height: 97,
    padding: Padding.p_3xs,
    alignItems: "center",
  },
});

export default Nav;
