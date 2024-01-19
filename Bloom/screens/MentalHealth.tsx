import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const MentalHealth = () => {
  return (
    <View style={styles.mentalHealth}>
      <Image
        style={styles.mentalHealthChild}
        contentFit="cover"
        source={require("../assets/vector-12.png")}
      />
      <Image
        style={styles.mentalHealthItem}
        contentFit="cover"
        source={require("../assets/vector-2.png")}
      />
      <View style={styles.mentalHealthInner}>
        <View style={[styles.frameWrapper, styles.groupParentFlexBox]}>
          <View style={[styles.groupParent, styles.groupParentFlexBox]}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
             source={require("../assets/group-1231.png")}
            />
            <Text
              style={[styles.mentalHealth1, styles.mentalHealth1FlexBox]}
            >{`Mental Health `}</Text>
            <Text style={[styles.healthyLifeIs, styles.mentalHealth1FlexBox]}>
              Healthy life is having a healthy mind so build a healthy mind then
              the healthy body.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupParentFlexBox: {
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  mentalHealth1FlexBox: {
    marginTop: 13,
    textAlign: "center",
    alignSelf: "stretch",
    flex: 1,
  },
  mentalHealthChild: {
    width: 391,
    height: 119,
    left: 0,
    top: 0,
    position: "absolute",
  },
  mentalHealthItem: {
    top: 636,
    left: -257,
    width: 414,
    height: 362,
    position: "absolute",
  },
  frameChild: {
    width: 137,
    height: 181,
  },
  mentalHealth1: {
    fontSize: FontSize.size_18xl,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.black,
  },
  healthyLifeIs: {
    fontSize: FontSize.regular16_size,
    fontFamily: FontFamily.dMSansRegular,
    color: Color.brown,
  },
  groupParent: {
    maxHeight: 332,
  },
  frameWrapper: {
    justifyContent: "center",
  },
  mentalHealthInner: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 38,
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    top: 0,
    position: "relative",
    overflow: "hidden",
    height: "100%",
  },
  mentalHealth: {
    backgroundColor: Color.beige,
    width: "100%",
    overflow: "hidden",
    height: "100%",
    flex: 1,
  },
});

export default MentalHealth;

