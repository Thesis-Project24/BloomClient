import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontSize, FontFamily, Color, Padding ,Border } from "../GlobalStyles";

import { useNavigation } from "@react-navigation/core";
// import { StackNavigationProp } from "@react-navigation/stack";


const GetStart = () => {
  const navigation = useNavigation();


  return (
    <View style={styles.GetStart}>
      <Image
        style={styles.GetStartChild}
        contentFit="cover"
        source={require("../assets/vector-12.png")}
      />
      <Image
        style={styles.GetStartItem}
        contentFit="cover"
        source={require("../assets/vector-2.png")}
      />
      <View style={styles.GetStartInner}>
        <View style={[styles.frameWrapper, styles.groupParentFlexBox]}>
          <View style={[styles.groupParent, styles.groupParentFlexBox]}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
             source={require("../assets/group-1231.png")}
            />
            <Text
              style={[styles.GetStart1, styles.GetStart1FlexBox]}
            >{`Mental Health `}</Text>
            <Text style={[styles.healthyLifeIs, styles.GetStart1FlexBox]}>
              Healthy life is having a healthy mind so build a healthy mind then
              the healthy body.
            </Text>
           
          </View>
          <TouchableOpacity 
        onPress={()=>{
          navigation.navigate("SignIn");

        }}
          style={[styles.backToLoginWrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.backToLogin, styles.backToLoginTypo]}>
              Get Start
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backToLoginTypo: {
    fontWeight: "500",
    textAlign: "center",
  },
  backToLogin: {
    fontSize: 19,
    // textTransform: "uppercase",
    fontFamily: FontFamily.robotoMedium,
    color: Color.lightGray10,
    width: 126,
    height: 19,
  },

  backToLoginWrapper: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.sageGreen,
    shadowColor: "rgba(0, 88, 0, 0.26)",
    shadowOffset: {
      width: 3,
      height: 9,
    },
    shadowRadius: 14,
    elevation: 14,
    shadowOpacity: 1,
    width: 286,
    height: 54,
    marginTop: 47,
    alignItems: "center",
  },
  wrapperFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
  },




  groupParentFlexBox: {
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  GetStart1FlexBox: {
    marginTop: 13,
    textAlign: "center",
    alignSelf: "stretch",
    flex: 1,
  },
  GetStartChild: {
    width: 391,
    height: 119,
    left: 0,
    top: 0,
    position: "absolute",
  },
  GetStartItem: {
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
  GetStart1: {
    fontSize: FontSize.size_18xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.black,
  },
  healthyLifeIs: {
    fontSize: FontSize.regular16_size,
    fontFamily: FontFamily.poppinsMedium,
    color: Color.brown,
  },
  groupParent: {
    maxHeight: 332,
  },
  frameWrapper: {
    justifyContent: "center",
  },
  GetStartInner: {
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
  GetStart: {
    backgroundColor: Color.beige,
    width: "100%",
    overflow: "hidden",
    height: "100%",
    flex: 1,
  },
});

export default GetStart;

