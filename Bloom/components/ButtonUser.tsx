import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const ButtonUser = () => {
  return (
    <View style={styles.frameParent}>
      <View style={[styles.frameWrapper, styles.frameWrapperShadowBox]}>
        <View style={styles.vectorParent}>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
          <Text style={[styles.journal, styles.journalFlexBox]}>Journal</Text>
        </View>
      </View>
      <View style={[styles.frameContainer, styles.frameWrapperShadowBox]}>
        <View style={styles.vectorParent}>
          <Image
            style={styles.vectorIcon1}
            resizeMode="cover"
            source={require("../assets/vector1.png")}
          />
          <Text
            style={[styles.reservation, styles.journalFlexBox]}
            numberOfLines={1}
          >
            Reservation
          </Text>
        </View>
      </View>
      <View style={[styles.frameView, styles.frameWrapperShadowBox]}>
        <View style={styles.vectorParent}>
          <Image
            style={styles.vectorIcon2}
            resizeMode="cover"
            source={require("../assets/vector2.png")}
          />
          <Text style={[styles.journal, styles.journalFlexBox]}>Reminders</Text>
        </View>
      </View>
      <View style={[styles.frameWrapper1, styles.frameWrapperShadowBox]}>
        <View style={styles.vectorParent}>
          <Image
            style={styles.ppeSantizerAlt1Icon}
            resizeMode="cover"
            source={require("../assets/ppe-santizer-alt-1.png")}
          />
          <Text style={[styles.journal, styles.journalFlexBox]}>Reminders</Text>
        </View>
      </View>
      <Image
        style={[styles.frameChild, styles.framePosition]}
        resizeMode="cover"
        source={require("../assets/line-5.png")}
      />
      <Image
        style={[styles.frameItem, styles.framePosition]}
        resizeMode="cover"
        source={require("../assets/line-4.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameWrapperShadowBox: {
    padding: Padding.p_3xs,
    height: 100,
    width: 120,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.sageGreen,
    borderRadius: Border.br_3xs,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  journalFlexBox: {
    marginTop: 10,
    maxHeight: 20,
    display: "flex",
    textAlign: "center",
    color: Color.colorGray_200,
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
    overflow: "hidden",
    justifyContent: "center",
    flex: 1,
    alignSelf: "stretch",
    alignItems: "center",
  },
  framePosition: {
    
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  vectorIcon: {
    width: 31,
    height: 34,
  },
  journal: {
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: FontFamily.tajawalBold,
  },
  vectorParent: {
    justifyContent: "center",
    flex: 1,
    alignSelf: "stretch",
    alignItems: "center",
  },
  frameWrapper: {
    zIndex: 0,
  },
  vectorIcon1: {
    width: 37,
    height: 37,
  },
  reservation: {
    lineHeight: 16,
     fontWeight: "700",
    fontFamily: FontFamily.tajawalBold,
  },
  frameContainer: {
    zIndex: 1,
  },
  vectorIcon2: {
    borderRadius: Border.br_12xs,
    width: 39,
    height: 35,
  },
  frameView: {
    zIndex: 2,
  },
  ppeSantizerAlt1Icon: {
    width: 48,
    height: 48,
    overflow: "hidden",
  },
  frameWrapper1: {
    zIndex: 3,
  },
  frameChild: {
    marginTop: -1,
    marginLeft: -0.5,
    maxWidth: "100%",
    height: 320,
    zIndex: 4,
    overflow: "hidden",
  },
  frameItem: {
    marginTop: -0.5,
    marginLeft: -185,
    maxHeight: "100%",
    width: 370,
    zIndex: 5,
  },
  frameParent: {
    marginLeft: -195,
    top: 408,
    width: 390,
    height: 290,
    gap: 20,
    flexWrap: "wrap",
    paddingHorizontal: 44,
    paddingVertical: 5,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
});

export default ButtonUser