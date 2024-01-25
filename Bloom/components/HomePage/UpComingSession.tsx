import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from 'react'
import { Image } from "expo-image";
import { Color, FontSize, Padding, FontFamily, Border } from "../../GlobalStyles";

const UpComingSession = () => {
  return (
    <View>
      <View style={styles.frameGroup}>
            <View style={styles.dateFilterParent}>
              <View style={styles.dateFilter}>
                <Image
                  style={styles.vectorIcon}
                  contentFit="cover"
                  source={require("../../assets/vector1.png")}
                />
                <Text
                  style={[styles.july2023, styles.july2023FlexBox]}
                  numberOfLines={1}
                >
                  July 2023
                </Text>
              </View>
              <View style={[styles.dayDate, styles.cardSpaceBlock]}>
                <View style={styles.dayDateGroup}>
                  <View style={styles.day}>
                    <View style={styles.dayLayout}>
                      <Text style={[styles.mon, styles.sTypo]}>S</Text>
                    </View>
                    <View style={[styles.day2, styles.dayLayout]}>
                      <Text style={[styles.s, styles.sTypo]}>M</Text>
                    </View>
                    <View style={[styles.day2, styles.dayLayout]}>
                      <Text style={[styles.s, styles.sTypo]}>T</Text>
                    </View>
                    <View style={[styles.day2, styles.dayLayout]}>
                      <Text style={[styles.s, styles.sTypo]}>W</Text>
                    </View>
                    <View style={[styles.day2, styles.dayLayout]}>
                      <Text style={[styles.s, styles.sTypo]}>T</Text>
                    </View>
                    <View style={[styles.day2, styles.dayLayout]}>
                      <Text style={[styles.s, styles.sTypo]}>F</Text>
                    </View>
                    <View style={[styles.day2, styles.dayLayout]}>
                      <Text style={[styles.s, styles.sTypo]}>S</Text>
                    </View>
                  </View>
                  <View style={[styles.date, styles.dateFlexBox]}>
                    <View style={[styles.partialsDate, styles.partialsLayout2]}>
                      <Text style={[styles.number, styles.numberTypo]}>25</Text>
                    </View>
                    <View
                      style={[styles.partialsDate1, styles.partialsLayout1]}
                    >
                      <Text style={[styles.number, styles.numberTypo]}>26</Text>
                    </View>
                    <View
                      style={[styles.partialsDate2, styles.partialsLayout2]}
                    >
                      <Text style={[styles.number2, styles.numberTypo]}>
                        27
                      </Text>
                    </View>
                    <View
                      style={[styles.partialsDate2, styles.partialsLayout2]}
                    >
                      <Text style={[styles.number2, styles.numberTypo]}>
                        28
                      </Text>
                    </View>
                    <View
                      style={[styles.partialsDate2, styles.partialsLayout2]}
                    >
                      <Text style={[styles.number2, styles.numberTypo]}>
                        29
                      </Text>
                    </View>
                    <View
                      style={[styles.partialsDate2, styles.partialsLayout2]}
                    >
                      <Text style={[styles.number2, styles.numberTypo]}>
                        30
                      </Text>
                    </View>
                    <View
                      style={[styles.partialsDate6, styles.partialsLayout1]}
                    >
                      <Text style={[styles.number, styles.numberTypo]}>1</Text>
                    </View>
                  </View>
                  <View style={[styles.date, styles.dateFlexBox]}>
                    <View style={styles.partialsLayout1}>
                      <Text style={[styles.number, styles.numberTypo]}>2</Text>
                    </View>
                    <View
                      style={[styles.partialsDate6, styles.partialsLayout1]}
                    >
                      <Text style={[styles.number, styles.numberTypo]}>3</Text>
                    </View>
                    <View
                      style={[styles.partialsDate6, styles.partialsLayout1]}
                    >
                      <Text style={[styles.number, styles.numberTypo]}>4</Text>
                    </View>
                    <View
                      style={[styles.partialsDate6, styles.partialsLayout1]}
                    >
                      <Text style={[styles.number, styles.numberTypo]}>5</Text>
                    </View>
                    <View
                      style={[styles.partialsDate11, styles.partialsLayout2]}
                    >
                      <Text style={[styles.number, styles.numberTypo]}>6</Text>
                    </View>
                    <View
                      style={[styles.partialsDate12, styles.partialsLayout2]}
                    >
                      <Text style={[styles.number, styles.numberTypo]}>7</Text>
                    </View>
                    <View
                      style={[styles.partialsDate12, styles.partialsLayout2]}
                    >
                      <Text style={[styles.number, styles.numberTypo]}>8</Text>
                    </View>
                  </View>
                  <View style={[styles.date2, styles.dateFlexBox]}>
                    <TouchableOpacity style={styles.partialsDate14}>
                      <Text
                        style={[styles.number14, styles.numberTypo]}
                        numberOfLines={1}
                      >
                        9
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.partialsDate15}>
                      <Text
                        style={[styles.number14, styles.numberTypo]}
                        numberOfLines={1}
                      >
                        10
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.partialsDate15}>
                      <Text
                        style={[styles.number14, styles.numberTypo]}
                        numberOfLines={1}
                      >
                        11
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.partialsDate15}>
                      <Text
                        style={[styles.number14, styles.numberTypo]}
                        numberOfLines={1}
                      >
                        12
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.partialsDate15}>
                      <Text
                        style={[styles.number14, styles.numberTypo]}
                        numberOfLines={1}
                      >
                        13
                      </Text>
                    </TouchableOpacity>
                    <View style={styles.partialsDate15}>
                      <Text
                        style={[styles.number14, styles.numberTypo]}
                        numberOfLines={1}
                      >
                        14
                      </Text>
                    </View>
                    <TouchableOpacity style={styles.partialsDate15}>
                      <Text
                        style={[styles.number14, styles.numberTypo]}
                        numberOfLines={1}
                      >
                        15
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={[styles.date, styles.dateFlexBox]}>
                    <View style={styles.partialsLayout}>
                      <Text style={[styles.number, styles.numberTypo]}>16</Text>
                    </View>
                    <View
                      style={[styles.partialsDate22, styles.partialsLayout]}
                    >
                      <Text style={[styles.number, styles.numberTypo]}>17</Text>
                    </View>
                    <View
                      style={[styles.partialsDate22, styles.partialsLayout]}
                    >
                      <Text style={[styles.number, styles.numberTypo]}>18</Text>
                    </View>
                    <View
                      style={[styles.partialsDate22, styles.partialsLayout]}
                    >
                      <Text style={[styles.number, styles.numberTypo]}>19</Text>
                    </View>
                    <View
                      style={[styles.partialsDate11, styles.partialsLayout2]}
                    >
                      <Text style={[styles.number, styles.numberTypo]}>20</Text>
                    </View>
                    <View
                      style={[styles.partialsDate12, styles.partialsLayout2]}
                    >
                      <Text style={[styles.number, styles.numberTypo]}>21</Text>
                    </View>
                    <View
                      style={[styles.partialsDate12, styles.partialsLayout2]}
                    >
                      <Text style={[styles.number, styles.numberTypo]}>22</Text>
                    </View>
                  </View>
                  <View style={[styles.date, styles.dateFlexBox]}>
                    <View
                      style={[styles.partialsDate28, styles.partialsLayout2]}
                    >
                      <Text style={[styles.number, styles.numberTypo]}>23</Text>
                    </View>
                    <View
                      style={[styles.partialsDate12, styles.partialsLayout2]}
                    >
                      <Text style={[styles.number, styles.numberTypo]}>24</Text>
                    </View>
                    <View
                      style={[styles.partialsDate12, styles.partialsLayout2]}
                    >
                      <Text style={[styles.number, styles.numberTypo]}>25</Text>
                    </View>
                    <View
                      style={[styles.partialsDate12, styles.partialsLayout2]}
                    >
                      <Text style={[styles.number, styles.numberTypo]}>26</Text>
                    </View>
                    <View
                      style={[styles.partialsDate11, styles.partialsLayout2]}
                    >
                      <Text style={[styles.number, styles.numberTypo]}>27</Text>
                    </View>
                    <View
                      style={[styles.partialsDate12, styles.partialsLayout2]}
                    >
                      <Text style={[styles.number, styles.numberTypo]}>28</Text>
                    </View>
                    <View
                      style={[styles.partialsDate34, styles.partialsBorder]}
                    >
                      <Text style={[styles.number, styles.numberTypo]}>29</Text>
                    </View>
                  </View>
                  <View style={[styles.date, styles.dateFlexBox]}>
                    <View style={styles.partialsBorder}>
                      <Text style={[styles.number, styles.numberTypo]}>30</Text>
                    </View>
                    <View
                      style={[styles.partialsDate34, styles.partialsBorder]}
                    >
                      <Text style={[styles.number, styles.numberTypo]}>31</Text>
                    </View>
                    <View
                      style={[styles.partialsDate37, styles.partialsLayout2]}
                    >
                      <Text style={[styles.number, styles.numberTypo]}>1</Text>
                    </View>
                    <View
                      style={[styles.partialsDate37, styles.partialsLayout2]}
                    >
                      <Text style={[styles.number, styles.numberTypo]}>2</Text>
                    </View>
                    <View
                      style={[styles.partialsDate39, styles.partialsLayout2]}
                    >
                      <Text style={[styles.number, styles.numberTypo]}>3</Text>
                    </View>
                    <View
                      style={[styles.partialsDate37, styles.partialsLayout2]}
                    >
                      <Text style={[styles.number, styles.numberTypo]}>4</Text>
                    </View>
                    <View
                      style={[styles.partialsDate37, styles.partialsLayout2]}
                    >
                      <Text style={[styles.number, styles.numberTypo]}>5</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.card, styles.cardFlexBox]}>
              <View style={styles.card1}>
                <Text
                  style={[styles.yourSeasseIsContainer, styles.july2023FlexBox]}
                  numberOfLines={2}
                >
                  <Text
                    style={styles.yourSeasseIs}
                  >{`Your Seasse is likely to start on or around `}</Text>
                  <Text style={styles.july29}>July 29</Text>
                </Text>
              </View>
            </View>
          </View>
    </View>
  )
}
const styles = StyleSheet.create({
  
    
   
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
    bgParentSpaceBlock: {
      marginTop: 32,
      alignSelf: "stretch",
    },
    frameLayout: {
      height: 109,
      width: 109,
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
    bgIcon: {
      maxHeight: "100%",
      height: "100%",
      width:"100%",
      flex: 1,
    },
    bgWrapper: {
      alignSelf: "stretch",
      flex: 1,
      height: "100%",
      width:"100%",
      // backgroundColor: "green",
    },
    artboard1761: {
      width: 307,
      height: 309,
    },
    artboard1761Wrapper: {
      height: "100%",
      width:"100%",
     
                                                paddingLeft: 196,
  
      // paddingBottom: 29,
      marginLeft: -373,
  
      alignItems: "flex-end",
      flexDirection: "row",
      alignSelf: "stretch",
      flex: 1,
  // ❤
      // backgroundColor: "black",
    },
    backgroundhome: {
      minHeight: 407,
      maxHeight: 410,
      height: "100%",
      width:"100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent:"center",
      flex: 1,
      // backgroundColor: "blue",
    },
    containerHome: {
      height: 407,
      width:"100%",
      // backgroundColor: "red",
      flexDirection: "row",
      alignSelf: "stretch",
    },
    vectorIcon: {
      width: 15,
      height: 16,
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

    frameGroup: {
      height: 260,
      alignSelf: "stretch",
      alignItems: "center",
    },
  
   
 
  });
export default UpComingSession