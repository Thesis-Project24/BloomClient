import * as React from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  ScrollView,
  SafeAreaView,
} from "react-native";
import {
  Border,
  Padding,
  FontSize,
  FontFamily,
  Color,
} from "../../GlobalStyles";
import ButtonUser from "../../components/UserProfile/ButtonUser";
import Ad from "../../components/UserProfile/Ad";

const User = () => {
  return (
    <ScrollView>
      <View style={[styles.Box, styles.user11WrapperFlexBox]}>
        <View style={[styles.frameParent, styles.parentFlexBox]}>
          <View style={styles.frameGroup}>
            <View style={[styles.user11Wrapper, styles.user11WrapperFlexBox]}>
              <Image
                style={styles.user11}
                resizeMode="cover"
                source={require("../assets/user-1-1.png")}
              />
            </View>
            <View style={[styles.myriamHermessiParent, styles.parentFlexBox]}>
              <Text
                style={[styles.myriamHermessi, styles.myriamHermessiFlexBox]}
              >
                Myriam Hermessi
              </Text>
              <Text>Mail</Text>
            </View>
          </View>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/ellipse-21.png")}
          />
        </View>

        {/* <View style={[styles.howsYourMoodTodayParent, styles.parentFlexBoxx]}>
            <Text style={[styles.howsYourMood, styles.howsYourMoodFlexBox]}>
              How’s your mood today
            </Text>
            <View
              style={[styles.rectangleParent, styles.beHappyYoureSpaceBlock]}
            >
              <View style={styles.frameChildss} />
              <View style={styles.frameShadowBox} />
              <View style={styles.frameShadowBox} />
              <View style={styles.frameShadowBox} />
            </View>
            <Text
              style={[styles.beHappyYoure, styles.beHappyYoureSpaceBlock]}
            >{`Be happy you’re not a Tree `}</Text>
          </View> */}
        <ButtonUser />
        <Ad />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  user11WrapperFlexBox: {},
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  myriamHermessiFlexBox: {
    textAlign: "center",
    fontWeight: "800",
    flex: 1,
    alignSelf: "stretch",
  },
  user11: {
    borderRadius: Border.br_9xs,
    width: 25,
    height: 25,
  },
  user11Wrapper: {
    width: 355,
    flexDirection: "row",
    padding: Padding.p_3xs,
    top: "30%",
    justifyContent: "flex-end",
  },
  myriamHermessi: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.tajawalMedium,
    color: Color.colorGray_200,
  },
  myriamHermessiParent: {
    width: 347,
    height: 53,
    marginTop: 160,
  },
  frameGroup: {
    zIndex: 0,
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  frameChild: {
    width: 100,
    height: 100,
    zIndex: 1,
    position: "relative",
    top: "-40%", // Center vertically
    marginTop: -5, // Adjust half of the
  },
  frameParent: {
    borderRadius: Border.br_lg,
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 360,
    height: 180,
    paddingHorizontal: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
    paddingBottom: Padding.p_base,
  },
  Box: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  parentFlexBoxx: {
    justifyContent: "center",
    alignItems: "center",
  },
  howsYourMoodFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  beHappyYoureSpaceBlock: {
    marginTop: 10,
    alignSelf: "stretch",
  },
  howsYourMood: {
    fontSize: FontSize.size_6xll,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    alignSelf: "stretch",
    textAlign: "left",
    color: Color.colorBlack,
  },
  frameChildss: {
    height: 53,
    width: 68,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_lg,
  },
  frameShadowBox: {
    marginLeft: 20,
    height: 53,
    width: 68,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_lg,
  },
  rectangleParent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  beHappyYoure: {
    flex: 1,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.tajawalRegular,
    overflow: "hidden",
    maxHeight: 19,
    textAlign: "left",
    color: Color.colorBlack,
  },
  howsYourMoodTodayParent: {
    backgroundColor: Color.beige,
    width: 390,
    height: 159,
    marginHorizontal: "auto", // Center horizontally
    marginTop: 40,
    padding: Padding.p_3xs,
  },
});

export default User;
