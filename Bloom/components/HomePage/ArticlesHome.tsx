import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border, Padding } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/core";
import { NavigationProp } from '@react-navigation/native';

type ArticlesHomeNavigationProp = NavigationProp<Record<string, object>>;


const ArticlesHome = ({navigation}: {navigation: ArticlesHomeNavigationProp}) => {
    // const navigation = useNavigation();

  return (
    <View style={[styles.frameParent, styles.frameSpaceBlock]}>
      <View
        style={[styles.wellLearnAboutSelfCareParent, styles.frameParentLayout]}
      >
        <Text
          style={styles.wellLearnAbout}
          numberOfLines={2}
        >{`We’ll Learn About
Self-Care!`}</Text>
        <View style={[styles.policy, styles.policyLayout]}>
          <View style={[styles.frameGroup, styles.policyLayout]}>
            <View style={[styles.softStarParent, styles.softLayout]}>
              <Image
                style={styles.softStarIcon}
                contentFit="cover"
                source={require("../../assets/soft-star.png")}
              />
              <Text style={[styles.noCommitment, styles.noCommitmentLayout]}>
                No commitment
              </Text>
            </View>
            <View style={[styles.softStarGroup, styles.softLayout]}>
              <Image
                style={styles.softStarIcon}
                contentFit="cover"
                source={require("../../assets/soft-star.png")}
              />
              <Text
                style={[styles.cancelAnyTime, styles.noCommitmentLayout]}
                numberOfLines={1}
              >
                Cancel any time
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.frameContainer, styles.frameSpaceBlock]}>
        <View style={[styles.frameView, styles.frameLayout]}>
          <View
            style={[
              styles.whatIsSelfCareStartWithParent,
              styles.frameParentLayout,
            ]}
          >
            <Text style={[styles.whatIsSelfCareContainer, styles.articalsTypo]}>
              {`What is Self-Care
Start with `}
              <Text style={styles.text}>{` `}</Text>
            </Text>
            <View style={styles.articalsWrapper}>
              <Text style={[styles.articals, styles.articalsTypo]}>
              Articles
              </Text>
            </View>
          </View>
          <View style={[styles.frameParent1, styles.frameLayout]}>
            <View style={styles.imageParent}>
              <Image
                style={styles.imageIcon}
                contentFit="cover"
                source={require("../../assets/image1.png")}
              />
              <View style={styles.line} />
            </View>
            <View style={styles.drHybaZoghlamiParent}>
              <Text style={styles.drHybaZoghlami} numberOfLines={1}>
                Dr. Hyba Zoghlami
              </Text>
              <Text style={styles.selfCareIs} numberOfLines={4}>
                Self care is simply the time we take to look after our mind and
                body. But how do we practice it regularly? Let’s explore the
                science of self-care in this course.
              </Text>
            </View>
          </View>
        </View>
        <View
          style={[styles.first7DaysFreeThen499Parent, styles.frameParentLayout]}
        >
          <Text style={styles.first7Days}>
            First 7 days free, then 4,99€/month
          </Text>
          <View style={[styles.frameParent2, styles.frameParentLayout]}>
            <View style={styles.frameWrapper}>
              <TouchableOpacity 
               onPress={() => {
                navigation.navigate("Articles")
             
              }}
              style={styles.seeMoreWrapper}>
                <Text style={styles.seeMore} numberOfLines={1}>
                  See More
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.frameParent3}>
              <View style={styles.termsAndConditionsParent}>
                <Text
                  style={[
                    styles.termsAndConditions,
                    styles.restorePurchaseTypo,
                  ]}
                >
                  Terms and conditions
                </Text>
                <Image
                  style={styles.vectorIcon}
                  contentFit="cover"
                  source={require("../../assets/vector2.png")}
                />
              </View>
              <Text
                style={[styles.restorePurchase, styles.restorePurchaseTypo]}
              >
                Restore purchase
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
 















  frameSpaceBlock: {
    marginTop: 32,
    alignSelf: "stretch",
  },
  frameParentLayout: {
    maxWidth: 414,
    width: "100%",
  },
  policyLayout: {
    height: 22,
    width: 413,
  },
  softLayout: {
    maxHeight: 23,
    minHeight: 22,
    minWidth: 153,
    height: "100%",
    flexDirection: "row",
    flex: 1,
  },
  noCommitmentLayout: {
    marginLeft: 6,
    maxWidth: 126,
    minWidth: 120,
    lineHeight: 20,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.soraRegular,
    color: Color.generalText,
  },
  frameLayout: {
    maxHeight: 300,
    flex: 1,
  },
  articalsTypo: {
    lineHeight: 29,
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    fontFamily: FontFamily.soraSemiBold,
    fontWeight: "600",
  },
  restorePurchaseTypo: {
    fontSize: FontSize.smallOneLinerRegular_size,
    display: "flex",
    lineHeight: 22,
    color: Color.generalLightText,
    fontFamily: FontFamily.soraRegular,
    height: 22,
    alignItems: "center",
  },
  wellLearnAbout: {
    fontSize: FontSize.size_9xl,
    lineHeight: 35,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    minHeight: 70,
    maxHeight: 80,
    color: Color.generalText,
    fontFamily: FontFamily.soraSemiBold,
    fontWeight: "600",
    overflow: "hidden",
    textAlign: "center",
    flex: 1,
    alignSelf: "stretch",
  },
  softStarIcon: {
    width: 21,
    height: 21,
  },
  noCommitment: {
    flex: 1,
    alignSelf: "stretch",
  },
  softStarParent: {
    justifyContent: "flex-end",
  },
  cancelAnyTime: {
    minHeight: 20,
    maxHeight: 20,
    overflow: "hidden",
    marginLeft: 6,
    maxWidth: 126,
    minWidth: 120,
    lineHeight: 20,
    fontSize: FontSize.size_mini,
  },
  softStarGroup: {
    marginLeft: 25,
  },
  frameGroup: {
    position: "absolute",
    top: 0,
    left: 0,
    flexDirection: "row",
  },
  policy: {
    marginTop: 15,
  },
  wellLearnAboutSelfCareParent: {
    minWidth: 360,
    maxHeight: 130,
    minHeight: 90,
    maxWidth: 414,
    alignItems: "center",
    flex: 1,
    width: "100%",
  },
  text: {
    letterSpacing: 6,
  },
  whatIsSelfCareContainer: {
    color: Color.generalBlack,
    width: 252,
    minWidth: 159,
    maxWidth: 252,
    height: 58,
  },
  articals: {
    color: Color.beige,
  },
  articalsWrapper: {
    borderRadius: Border.br_6xs,
    backgroundColor: Color.green,
    width: 108,
    height: 33,
    marginLeft: -137,
    justifyContent: "center",
    alignItems: "center",
  },
  whatIsSelfCareStartWithParent: {
    alignItems: "flex-end",
    paddingHorizontal: Padding.p_2xs,
    minWidth: 270,
    maxHeight: 60,
    height: 58,
    paddingVertical: 0,
    flexDirection: "row",
    width: "100%",
    maxWidth: 414,
  },
  imageIcon: {
    width: 65,
    height: 69,
  },
  line: {
    borderBottomRightRadius: Border.br_80xl,
    borderBottomLeftRadius: Border.br_80xl,
    backgroundColor: Color.appGreen,
    width: 5,
    marginTop: -10,
    flex: 1,
  },
  imageParent: {
    minWidth: 60,
    maxWidth: 65,
    alignItems: "center",
    flex: 1,
    alignSelf: "stretch",
  },
  drHybaZoghlami: {
    fontSize: FontSize.size_lg,
    minWidth: 100,
    minHeight: 32,
    maxWidth: 287,
    maxHeight: 32,
    lineHeight: 32,
    textAlign: "left",
    overflow: "hidden",
    color: Color.generalText,
    fontFamily: FontFamily.soraSemiBold,
    fontWeight: "600",
    flex: 1,
    width: "100%",
  },
  selfCareIs: {
    fontSize: FontSize.size_smi,
    lineHeight: 17,
    maxWidth: 288,
    textAlign: "left",
    fontFamily: FontFamily.soraRegular,
    maxHeight: 80,
    overflow: "hidden",
    color: Color.generalText,
    flex: 1,
    width: "100%",
  },
  drHybaZoghlamiParent: {
    paddingRight: Padding.p_3xl,
    minHeight: 72,
    maxWidth: 337,
    maxHeight: 200,
    marginLeft: 12,
    height: "100%",
    flex: 1,
  },
  frameParent1: {
    paddingLeft: Padding.p_mid,
    paddingRight: Padding.p_6xs,
    minHeight: 80,
    marginTop: 6,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameView: {
    paddingHorizontal: Padding.p_10xs,
    minWidth: 370,
    minHeight: 142,
    paddingVertical: 0,
    maxWidth: 414,
    width: "100%",
    alignItems: "center",
  },
  first7Days: {
    fontSize: FontSize.regularNormalRegular_size,
    height: 31,
    color: Color.generalLightText,
    lineHeight: 32,
    fontFamily: FontFamily.soraRegular,
    textAlign: "center",
    alignSelf: "stretch",
  },
  seeMore: {
    fontSize: FontSize.size_lgi,
    color: Color.black,
    maxHeight: 30,
    display: "flex",
    lineHeight: 22,
    justifyContent: "center",
    overflow: "hidden",
    textAlign: "center",
    fontFamily: FontFamily.soraSemiBold,
    fontWeight: "600",
    alignItems: "center",
    flex: 1,
    alignSelf: "stretch",
  },
  seeMoreWrapper: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.beige,
    shadowColor: "rgba(0, 0, 0, 0.8)",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    minWidth: 140,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    alignSelf: "stretch",
  },
  frameWrapper: {
    height: 59,
    paddingHorizontal: Padding.p_8xl,
    minWidth: 200,
    paddingVertical: 0,
    alignItems: "center",
    alignSelf: "stretch",
  },
  termsAndConditions: {
    width: 162,
    justifyContent: "center",
    textAlign: "center",
    fontSize: FontSize.smallOneLinerRegular_size,
  },
  vectorIcon: {
    width: 9,
    height: 4,
    marginLeft: 5,
  },
  termsAndConditionsParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  restorePurchase: {
    textDecoration: "underline",
    textAlign: "right",
    width: 133,
  },
  frameParent3: {
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_xl,
    marginTop: 16,
    paddingVertical: 0,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  frameParent2: {
    minWidth: 330,
    maxHeight: 105,
    marginTop: 4,
    minHeight: 90,
    maxWidth: 414,
    alignItems: "center",
    flex: 1,
    width: "100%",
  },
  first7DaysFreeThen499Parent: {
    minHeight: 140,
    maxHeight: 145,
    marginTop: 14,
    alignItems: "center",
    flex: 1,
    width: "100%",
    maxWidth: 414,
  },
  frameContainer: {
    flex: 1,
  },
  frameParent: {
    height: 506,
  },
});

export default ArticlesHome;
