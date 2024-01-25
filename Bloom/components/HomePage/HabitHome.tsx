import * as React from "react";
import { Image } from "expo-image";
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Color, FontSize, Padding, FontFamily, Border } from "../../GlobalStyles";
// import { useNavigation } from "@react-navigation/core";

const HabitHome = ({navigation}:any) => {
    // const navigation = useNavigation();

  return (
    <View style={[styles.bgParent, styles.bgParentSpaceBlock]}>
      <ImageBackground
        resizeMode="cover"
        source={require("../../assets/bg1.png")}
        style={styles.bgIcon}>
        {/* <Image
      style={styles.bgIcon}
      contentFit="cover"
      source={require("../../assets/bg1.png")}
      /> */}

        <View style={styles.artboard1741Parent}>
          <Image
            style={[styles.artboard1741, styles.artboard1741Position]}
            contentFit="cover"
            source={require("../../assets/artboard-174-1.png")}
          />
          <ScrollView
            style={styles.frameContainer}
            horizontal={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.frameScrollViewContent}
          >
            <TouchableOpacity 
             onPress={() => {
                navigation.navigate("Tracker")
             
              }}
            style={styles.frameWrapper}>
              <View style={[styles.frameView, styles.frameLayout]}>
                <View style={styles.dateFilterParent}>
                  <Image
                    style={[styles.artboard1781, styles.bgIconLayout]}
                    contentFit="cover"
                    source={require("../../assets/artboard-178-1.png")}
                  />
                </View>
                <View
                  style={[styles.logYourHabitParent, styles.cardFlexBox]}
                >
                  <Text style={[styles.logYour, styles.logYourHabitContainer]}>LOG YOUR</Text>
                  <Text style={[styles.habit, styles.habitClr, styles.logYourHabitContainer]}>
                    {" "}
                    HABIT
                  </Text>
                  <Image
                    style={styles.artboard341}
                    contentFit="cover"
                    source={require("../../assets/artboard-34-1.png")}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
             onPress={() => {
                navigation.navigate("Tracker")
             
              }}
              style={[styles.framePressable, styles.joinToParentLayout]}
            >
              <View
                style={[styles.rectangleWrapper, styles.rectangleLayout]}
              >
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../../assets/artboard-186.png")}
                />
              </View>
              <Text
                style={[styles.sleeping, styles.smokingTypo]}
                numberOfLines={1}
              >
                Sleeping
              </Text>
            </TouchableOpacity>
            <View
              style={[styles.framePressable, styles.joinToParentLayout]}
            >
              <TouchableOpacity 
               onPress={() => {
                navigation.navigate("Tracker")
             
              }}
              style={styles.rectangleLayout}>
                <Image
                  style={[styles.frameItem, styles.frameLayout]}
                  contentFit="cover"
                  source={require("../../assets/artboard-184.png")}
                />
              </TouchableOpacity>
              <Text
                style={[styles.smoking, styles.smokingTypo]}
                numberOfLines={1}
              >
                Smoking
              </Text>
            </View>
            <View
              style={[styles.framePressable, styles.joinToParentLayout]}
            >
              <TouchableOpacity
               onPress={() => {
                navigation.navigate("Tracker")
             
              }}
                style={[styles.rectangleFrame, styles.rectangleLayout]}
              >
                <Image
                  style={[styles.frameItem, styles.frameLayout]}
                  contentFit="cover"
                  source={require("../../assets/artboard-185.png")}
                />
              </TouchableOpacity>
              <Text
                style={[styles.alcohol, styles.smokingTypo]}
                numberOfLines={1}
              >
                Alcohol
              </Text>
            </View>
          </ScrollView>
        </View>


      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  bgIcon: {
    width: "100%",
    // paddingHorizontal:-60,
    flex: 1,
    overflow: "hidden",
    minWidth: 370,
    maxHeight: 330,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",

    // borderRadius:0,
    // backgroundColor: "blue",
    // paddingBottom: 10,



  },
  bgIconLayout: {
    maxWidth: "100%",
    alignSelf: "stretch",
    overflow: "hidden",
    width: "100%",
  },
  frameWrapper: {
    width: 109,
    flexDirection: "row",
  },

  habitClr: {
    color: Color.generalLightText,
    lineHeight: 22,
  },

  joinToParentLayout: {
    maxWidth: 130,
    height: "100%",
    flex: 1,
  },



  bgParent: {
    height: 262,
  },


  bgParentSpaceBlock: {
    marginTop: 32,
    alignSelf: "stretch",
  },









  frameScrollViewContent: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  artboard1741Position: {
    // width: 414,
    // top: 0,
    // position: "absolute",
  },

  july2023FlexBox: {
    textAlign: "left",
    color: Color.black,
    lineHeight: 24,
    fontSize: FontSize.regularNormalRegular_size,
    height: "100%",
    overflow: "hidden",
    flex: 1,
  },
  cardSpaceBlock: {
    paddingHorizontal: Padding.p_base,
    width: "100%",
  },
  sTypo: {
    textAlign: "center",
    color: Color.colorDimgray,
    lineHeight: 12,
    fontSize: FontSize.tinyNoneRegular_size,
    fontFamily: FontFamily.smallOneLinerRegular,
  },
  dayLayout: {
    maxWidth: 45,
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_11xs,
    minWidth: 40,
    justifyContent: "center",
    maxHeight: 40,
    minHeight: 35,
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  dateFlexBox: {
    marginTop: 8,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  partialsLayout2: {
    borderRadius: Border.br_61xl,
    height: 40,
    flex: 1,
  },
  numberTypo: {
    width: 40,
    lineHeight: 14,
    fontSize: FontSize.smallOneLinerRegular_size,
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    fontFamily: FontFamily.smallOneLinerRegular,
    alignItems: "center",
  },
  partialsLayout1: {
    backgroundColor: Color.colorLavender_200,
    height: 40,
    borderRadius: Border.br_61xl,
    flex: 1,
  },
  partialsLayout: {
    backgroundColor: Color.colorLavender_100,
    height: 40,
    borderRadius: Border.br_61xl,
    flex: 1,
  },
  partialsBorder: {
    borderColor: Color.colorCrimson,
    borderStyle: "dashed",
    borderWidth: 1,
    height: 40,
    borderRadius: Border.br_61xl,
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  cardFlexBox: {
    minHeight: 100,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  frameLayout: {
    height: 109,
    width: 109,
  },

  rectangleLayout: {
    maxHeight: 109,
    maxWidth: 109,
    minHeight: 109,
    borderRadius: Border.br_16xl,
    minWidth: 109,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.beige,
    flexDirection: "row",
    width: "100%",
    flex: 1,
  },
  smokingTypo: {
    marginTop: 6,
    color: Color.black,
    fontFamily: FontFamily.soraBold,
    fontSize: FontSize.size_mini_2,
    textShadowRadius: 4,
    fontWeight: "700",
    maxWidth: 109,
    lineHeight: 22,
    textShadowOffset: {
      width: 1,
      height: 2,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },


  july2023: {
    minHeight: 24,
    marginLeft: 9,
    maxHeight: 25,
    minWidth: 100,
    fontFamily: FontFamily.smallOneLinerRegular,
  },
  dateFilter: {
    paddingVertical: Padding.p_5xs,
    maxHeight: 40,
    minHeight: 35,
    paddingHorizontal: Padding.p_xl,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  mon: {
    width: 39,
  },
  s: {
    alignSelf: "stretch",
    flex: 1,
  },
  day2: {
    marginLeft: 12,
  },
  day: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  number: {
    color: Color.generalBlack,
    width: 40,
    lineHeight: 14,
    fontSize: FontSize.smallOneLinerRegular_size,
    top: "50%",
    marginLeft: -20.15,
    marginTop: -7,
    left: "50%",
    position: "absolute",
  },
  partialsDate: {
    opacity: 0.3,
    height: 40,
    backgroundColor: Color.colorWhite,
  },
  partialsDate1: {
    opacity: 0.3,
    marginLeft: 12,
  },
  number2: {
    color: Color.colorCrimson,
    width: 40,
    lineHeight: 14,
    fontSize: FontSize.smallOneLinerRegular_size,
    top: "50%",
    marginLeft: -20.15,
    marginTop: -7,
    left: "50%",
    position: "absolute",
  },
  partialsDate2: {
    backgroundColor: Color.colorMistyrose,
    opacity: 0.3,
    height: 40,
    marginLeft: 12,
  },
  partialsDate6: {
    marginLeft: 12,
  },
  date: {
    display: "none",
  },
  partialsDate11: {
    height: 40,
    marginLeft: 12,
  },
  partialsDate12: {
    height: 40,
    marginLeft: 12,
    backgroundColor: Color.colorWhite,
  },
  number14: {
    minHeight: 14,
    maxWidth: 43,
    maxHeight: 15,
    color: Color.generalBlack,
    width: 40,
    lineHeight: 14,
    fontSize: FontSize.smallOneLinerRegular_size,
    minWidth: 40,
    height: "100%",
    overflow: "hidden",
  },
  partialsDate14: {
    paddingVertical: Padding.p_smi,
    borderRadius: Border.br_61xl,
    maxWidth: 45,
    minWidth: 40,
    paddingHorizontal: Padding.p_11xs,
    justifyContent: "center",
    maxHeight: 40,
    minHeight: 35,
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  partialsDate15: {
    backgroundColor: Color.sageGreen,
    borderWidth: 1,
    borderColor: Color.green,
    borderStyle: "solid",
    paddingVertical: Padding.p_smi,
    borderRadius: Border.br_61xl,
    marginLeft: 12,
    maxWidth: 45,
    minWidth: 40,
    paddingHorizontal: Padding.p_11xs,
    justifyContent: "center",
    maxHeight: 40,
    minHeight: 35,
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  date2: {
    height: 40,
  },
  partialsDate22: {
    marginLeft: 12,
  },
  partialsDate28: {
    height: 40,
    backgroundColor: Color.colorWhite,
  },
  partialsDate34: {
    marginLeft: 12,
  },
  partialsDate37: {
    opacity: 0.3,
    height: 40,
    marginLeft: 12,
    backgroundColor: Color.colorWhite,
  },
  partialsDate39: {
    opacity: 0.3,
    height: 40,
    marginLeft: 12,
  },
  dayDateGroup: {
    alignSelf: "stretch",
  },
  dayDate: {
    borderRadius: 16,
    paddingVertical: Padding.p_11xs,
    minWidth: 380,
    minHeight: 88,
    maxWidth: 420,
    maxHeight: 180,
    alignItems: "center",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  dateFilterParent: {
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  yourSeasseIs: {
    fontFamily: FontFamily.smallOneLinerRegular,
  },
  july29: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  yourSeasseIsContainer: {
    minHeight: 48,
    maxHeight: 50,
  },
  card1: {
    borderRadius: Border.br_xs,
    backgroundColor: "rgba(173, 216, 196, 0.2)",
    width: 361,
    height: 80,
    padding: Padding.p_base,
    minHeight: 8,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  card: {
    paddingVertical: 24,
    minWidth: 370,
    maxWidth: 413,
    maxHeight: 118,
    paddingHorizontal: Padding.p_base,
    width: "100%",
  },

  artboard1741: {
    // left: 0,
    height: 106,
    width: "100%",
    marginRight: 10,
    // backgroundColor:"blue",


    // top: 0,
    // position: "absolute",
  },
  artboard1781: {
    height: 92,
    borderRadius: Border.br_17xl,
  },
  logYour: {
    lineHeight: 18,
    color: Color.green,
    fontSize: FontSize.size_2xs,
  },
  habit: {
    fontSize: FontSize.size_mini,
  },
  logYourHabitContainer1: {
    width: "100%",
  },
  logYourHabitContainer: {
    // backgroundColor:"red",
    maxHeight: 20,
    width: "100%",
    height: "100%",
    textShadowRadius: 0.7,
    textShadowOffset: {
      width: 1,
      height: 2,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    fontFamily: FontFamily.soraSemiBold,
    textTransform: "uppercase",
    fontWeight: "600",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
  artboard341: {
    borderRadius: 21,
    width: 52,
    height: 55,
  },
  logYourHabitParent: {
    minWidth: 89,
    alignSelf: "stretch",
  },
  frameView: {
    borderRadius: 47,
    paddingLeft: Padding.p_11xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.beige,
    height: 109,
    alignItems: "center",
  },

  frameChild: {
    borderRadius: 26,
    width: 103,
    height: 103,
  },
  rectangleWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  sleeping: {
    maxHeight: 23,
  },
  framePressable: {
    maxHeight: 150,
    marginLeft: 22,
    minWidth: 109,
    maxWidth: 130,
    minHeight: 138,
    alignItems: "center",
  },
  frameItem: {
    borderRadius: Border.br_17xl,
  },
  smoking: {
    maxHeight: 25,
  },
  rectangleFrame: {
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
  },
  alcohol: {
    maxHeight: 25,
  },
  frameContainer: {
    // top: 45,
    // left: 15,
    height: 138,
    minWidth: 350,
    maxWidth: 385,
    maxHeight: 138,
    minHeight: 138,
    // position: "absolute",
    width: "100%",


  },
  artboard1741Parent: {
    maxHeight: 232,
    width: "100%",
    height: "100%",
    alignSelf: "stretch",
    // backgroundColor:"red",
    paddingHorizontal: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: -30,
  },


  artboard17811: {
    width: 415,
    height: 334,
  },
  artboard1791: {
    width: 413,
    height: 248,
    marginTop: -273,
  },


  containerHomeParent: {
    // marginLeft: -207,
    alignItems: "center",
    // left: "50%",
    width: "100%",
    height: "100%",
    // top: 0,
    flex: 1,
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
  },
  homePage: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});
export default HabitHome;
