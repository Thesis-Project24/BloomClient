import * as React from "react";
import { Image } from "expo-image";
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Color, FontSize, Padding, FontFamily, Border } from "../../GlobalStyles";
import { NavigationProp } from '@react-navigation/native';

type MentalHealthHomeNavigationProp = NavigationProp<Record<string, object>>;



const MentalHealthHome = ({navigation}: {navigation: MentalHealthHomeNavigationProp}) => {
  return (
    <View style={[styles.frameWrapper1, styles.bgParentSpaceBlock]}>
      <View style={[styles.bgGroup, styles.bgGroupLayout]}>
        <ImageBackground
        style={styles.bgMentalHelath}
        source={require("../../assets/bg2.png")}
         resizeMode="cover"
        >
          <ImageBackground
            resizeMode="cover"
            style={styles.bgStar}
            source={require("../../assets/artboard-178-11.png")}
          >
             <ImageBackground
            resizeMode="cover"
            style={styles.bgGirl}
              source={require("../../assets/artboard-179-1.png")}
          >



        <View style={[styles.coteandButtonParent, styles.bgGroupLayout]}>
          <View style={styles.coteandButton}>
            <View style={styles.mentalHealthWrapper}>
              <Text style={styles.mentalHealth} numberOfLines={1}>
                Mental health
              </Text>
            </View>
            <Text
              style={[styles.isNotAContainer, styles.notContainerText]}
              numberOfLines={2}
            >
              <Text style={styles.isNotA}>{`Is Not A Destination,
`}</Text>
              <Text style={styles.itsAJourney}>It’s A Journey!</Text>
            </Text>
            <View style={styles.coteandButtonInner}>
              <TouchableOpacity
                style={[
                  styles.playArrowParent,
                  styles.playArrowParentShadowBox,
                ]}
              >
                  <Image
                  style={styles.playArrowIcon}
                  contentFit="cover"
                  source={require("../../assets/play-arrow1.png")}
                />
                <View
                  style={[styles.joinToParent, styles.joinToParentLayout]}
                >
                  <Text
                    style={[styles.joinTo, styles.habitClr]}
                  > Join To</Text>
                  <Text style={styles.communety}>COMMUNETY</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          {/* <View style={styles.imageBg}>
            <Image
              style={styles.bgStar}
              contentFit="cover"
              source={require("../../assets/artboard-178-11.png")}
            />
            <Image
              style={styles.bgGirl}
              contentFit="cover"
              source={require("../../assets/artboard-179-1.png")}
            />
          </View> */}
          <View style={styles.frameParent3}>
            <View
              style={[
                styles.mentalHealthContainer,
                styles.playArrowParentShadowBox,
              ]}
            >
              <Text style={styles.mentalHealth1} numberOfLines={1}>
                Mental health
              </Text>
            </View>
            <Text
              style={[styles.isNotAContainer1, styles.notContainerText]}
              numberOfLines={2}
            >
              <Text style={styles.isNotA}>{`Is Not A Destination,`}</Text>
              <Text style={styles.itsAJourney}>It’s A Journey!</Text>
            </Text>
          </View>
        </View>



        </ImageBackground>
        </ImageBackground>
        </ImageBackground>
      </View>
      
    </View>

  );
};

const styles = StyleSheet.create({
  bgMentalHelath: {
    alignSelf: "stretch",
    flex: 1,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: 350,
    width: "100%",
    minHeight: 430,
    // maxHeight: 430,
    height: "100%",
    // width: "100%",
    // flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
   
    // backgroundColor: "blue",
    paddingBottom: 10,
  },
  bgParentSpaceBlock: {
    marginTop: 32,
    alignSelf: "stretch",
  },
  habitClr: {
    color: Color.generalLightText,
    lineHeight: 17,
  },
  joinToParentLayout: {
    maxWidth: 130,
    height: "100%",
    flex: 1,
  },
  bgGroupLayout: {
    maxWidth: 414,
    width: "100%",
  },
  notContainerText: {
    textShadowRadius: 1.1,
    color: Color.generalText,
    textShadowOffset: {
      width: 1,
      height: 2,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  playArrowParentShadowBox: {
    shadowColor: "#729384",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    flexDirection: "row",
  },
  bgParent: {
    height: 262,
  },
  mentalHealth: {
    width: "100%",
    fontSize: FontSize.size_xl,
    textShadowColor: "#729384",
    height: 22,
    textShadowRadius: 4,
    lineHeight: 22,
    color: Color.green,
    textShadowOffset: {
      width: 1,
      height: 2,
    },
    fontFamily: FontFamily.soraSemiBold,
    textTransform: "uppercase",
    fontWeight: "600",
    display: "flex",
    textAlign: "left",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
  mentalHealthWrapper: {
    width: "100%",
    height: 22,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  isNotA: {
    fontWeight: "500",
    fontFamily: FontFamily.epilogueMedium,
  },
  itsAJourney: {
    fontFamily: FontFamily.epilogueBold,
    fontWeight: "700",
  },
  isNotAContainer: {
    fontSize: 32,
    lineHeight: 34,
    height: 85,
  },
  playArrowIcon: {
    width: 14,
    height: 18,
  },
  joinTo: {
    fontFamily: FontFamily.soraRegular,
    fontSize: FontSize.size_2xs,
    display: "flex",
    color: Color.generalLightText,
    textAlign: "left",
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  communety: {
    height: "100%",
    color: Color.generalText,
    fontFamily: FontFamily.soraBold,
    fontWeight: "700",
    lineHeight: 18,
    display: "flex",
    fontSize: FontSize.tinyNoneRegular_size,
    textAlign: "left",
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
    // backgroundColor:"red",
  },
  joinToParent: {
    paddingLeft: Padding.p_7xs,
    paddingTop: 4,
    paddingBottom: Padding.p_7xs,
    minHeight: 30,
    maxHeight: 54,
    minWidth: 100,
  },
  playArrowParent: {
    borderRadius: Border.br_80xl,
    shadowRadius: 3,
    elevation: 3,
    borderWidth: 2.5,
    width: 155,
    height: 44,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 0,
    minWidth: 150,
    minHeight: 40,
    maxWidth: 187,
    maxHeight: 53,
    borderColor: Color.green,
    borderStyle: "solid",
    shadowColor: "#729384",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.colorWhite,
  },
  coteandButtonInner: {
    paddingVertical: Padding.p_7xs,
    minWidth: 195,
    maxHeight: 60,
    justifyContent: "center",
    paddingHorizontal: Padding.p_xl,
    alignItems: "flex-end",
    alignSelf: "stretch",
    flex: 1,
  },
  coteandButton: {
    width: "100%",
    maxWidth: 395,
    maxHeight: 200,
    height: "100%",
    alignItems: "flex-end",
  }, 
  bgStar: {
    maxWidth: 455,
    maxHeight: 434,
    height: "100%",
    width: "100%",
    flex: 1,
    // backgroundColor:"green",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom:30,
  },
  bgGirl: {
    maxWidth: 413,
    maxHeight: 248,
    height: "100%",
    width: "100%",
    // marginTop: -273,
    justifyContent:"center",
    alignContent: "flex-end",
    // backgroundColor: "red",

  },
  imageBg: {
    // marginTop: -190,
  },
  mentalHealth1: {
    height: 22,
    lineHeight: 22,
    color: Color.green,
    fontFamily: FontFamily.soraSemiBold,
    textTransform: "uppercase",
    fontWeight: "600",
    display: "flex",
    fontSize: FontSize.smallOneLinerRegular_size,
    textAlign: "left",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
  mentalHealthContainer: {
    shadowRadius: 2.8,
    elevation: 2.8,
    height: 22,
    alignSelf: "stretch",
  },
  isNotAContainer1: {
    fontSize: FontSize.size_lg,
    height: 52,
    lineHeight: 22,
  },
  frameParent3: {
    width: 197,
    height: 265,
    marginTop: -190,
    display: "none",
  },
  coteandButtonParent: {
    paddingHorizontal:20,
    height: "100%",
    minHeight: 417,
    maxHeight: 420,
    // marginTop: -382,
    alignItems: "center",
    // backgroundColor:"red",
    flex: 1,
    justifyContent: "flex-start",
  },

  bgGroup: {
    height:"100%",
    minHeight: 450,
    maxHeight: 455,
    flex: 1,
    alignItems: "center",
  },











  frameWrapper1: {
    maxHeight: 455,
    minHeight: 420,
    alignItems: "center",
    width: "100%",
    height:"100%",
    // backgroundColor:"red",
    justifyContent:"center",
    // marginBottom:200,
  },
 
});

export default MentalHealthHome;
