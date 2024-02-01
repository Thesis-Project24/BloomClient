import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {
  Color,
  FontSize,
  FontFamily,
  Padding,
  Border,
} from "../../GlobalStyles";

const Ad = () => {
  return (
    <View style={styles.advertisingbanner03}>
      <View style={styles.image15Parent}>
        <Image
          style={styles.image15Icon}
          resizeMode="cover"
          source={require("../../assets/image-15.png")}
        />
        <View style={styles.frameParent}>
          <View>
            <Text style={styles.beTwiceAs}>
              Be twice as productive | Duet Display
            </Text>
            <Text style={[styles.exAppleEngineersTurn, styles.textTypo]}>
              Ex-Apple engineers turn your iPad, Mac, PC or Android into a
              blazing fasst monitor
            </Text>
          </View>
          <View style={styles.frameGroup}>
            <View style={[styles.adsWrapper, styles.adsWrapperFlexBox]}>
              <Text style={styles.ads}>Ads</Text>
            </View>
            <View style={styles.parent}>
              <Text style={[styles.text, styles.textTypo]}>4,3</Text>
              <View style={[styles.starParent, styles.adsWrapperFlexBox]}>
                <Image
                  style={styles.starIconLayout}
                  resizeMode="cover"
                  source={require("../../assets/star1.png")}
                />
                <Image
                  style={[styles.starIcon1, styles.starIconLayout]}
                  resizeMode="cover"
                  source={require("../../assets/star1.png")}
                />
                <Image
                  style={[styles.starIcon1, styles.starIconLayout]}
                  resizeMode="cover"
                  source={require("../../assets/star1.png")}
                />
                <Image
                  style={[styles.starIcon1, styles.starIconLayout]}
                  resizeMode="cover"
                  source={require("../../assets/star-half.png")}
                />
                <Image
                  style={[styles.starIcon1, styles.starIconLayout]}
                  resizeMode="cover"
                  source={require("../../assets/star-border.png")}
                />
              </View>
            </View>
            <Text style={[styles.text1, styles.textTypo]}>329.000$</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    color: Color.colorDimgrayred,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.sFProDisplay,
  },
  adsWrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  starIconLayout: {
    overflow: "hidden",
    height: 16,
    width: 16,
  },
  image15Icon: {
    width: 40,
    height: 40,
  },
  beTwiceAs: {
    fontSize: FontSize.size_sm,
    lineHeight: 26,
    color: Color.colorMediumblue,
    display: "flex",
    height: 20,
    width: 272,
    alignItems: "center",
    textAlign: "left",
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "500",
  },
  exAppleEngineersTurn: {
    marginTop: 4,
    width: 272,
  },
  ads: {
    color: Color.colorWhite,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "500",
  },
  adsWrapper: {
    backgroundColor: Color.colorOrange,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: 0,
  },
  text: {
    fontWeight: "500",
    color: Color.colorDimgrayred,
  },
  starIcon1: {
    marginLeft: 2,
  },
  starParent: {
    marginLeft: 4,
  },
  parent: {
    marginLeft: 8,
    flexDirection: "row",
  },
  text1: {
    marginLeft: 8,
    fontWeight: "500",
    color: Color.colorDimgrayred,
  },
  frameGroup: {
    marginTop: 8,
    flexDirection: "row",
  },
  frameParent: {
    marginLeft: 9,
  },
  image15Parent: {
    flexDirection: "row",
  },
  advertisingbanner03: {
    position: "absolute",
    // marginLeft: -195,
    bottom: 0,
    // top: 620,
    // left: "50%",
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorWhite,
    width: 390,
    height: 104,
    padding: Padding.p_3xs,
  },
});

export default Ad;
