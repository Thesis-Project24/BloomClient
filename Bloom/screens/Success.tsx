import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Color, Border, Padding, FontSize, FontFamily } from "../GlobalStyles";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { ParamListBase, useNavigation } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
const Success = () => {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.success1, styles.successLayout]}>
      <Image
        style={styles.successChild}
        contentFit="cover"
        source={require("../assets/vector-2.png")}
      />
      <View style={[styles.successInner, styles.successPosition]}>
        
        <Image
          style={[styles.frameChild, styles.successFlexBox]}
          contentFit="cover"
          source={require("../assets/vector-13.png")}
        />
      </View>


      <View style={[styles.successWrapper, styles.successSpaceBlock]}>
        <View style={[styles.success, styles.successSpaceBlock]}>
         
          <View style={[styles.frameView, styles.wrapperFlexBox]}>
           
            <View style={[styles.rectangleParent, styles.wrapperFlexBox]}>
            <AntDesign name="check" size={50} color={Color.green} />
            {/* <Entypo name="check" size={50} color={Color.green} /> */}
              {/* <View style={[styles.frameItem, styles.frameTransform]} /> */}
              {/* <View style={[styles.frameInner, styles.frameTransform]} /> */}
            </View>
          </View>
          
          <View style={styles.successParent}>
            <Text style={styles.success2}>Check Your Email !</Text>
            <Text
              style={[styles.congratulationsYouHave, styles.backToLoginTypo]}
            >
              Congratulations! You have been successfully authenticated
            </Text>
          </View>
          <TouchableOpacity 
        //   SignIn
        onPress={()=>{
            navigation.navigate("SignIn");
        }}
          style={[styles.backToLoginWrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.backToLogin, styles.backToLoginTypo]}>
              Back to Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  successLayout: {
    overflow: "hidden",
    width: "100%",
  },
  successPosition: {
    width: "100%",
    left: 0,
    top: 0,
    position: "absolute",
  },
  successFlexBox: {
    alignSelf: "stretch",
    flex: 1,
  },
  successSpaceBlock: {
    paddingHorizontal: 10,
    overflow: "hidden",
  },
  wrapperFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
  },
  frameTransform: {
    transform: [
      {
        rotate: "-45deg",
      },
    ],
    height: 5,
    backgroundColor: Color.green,
    position: "absolute",
  },
  backToLoginTypo: {
    fontWeight: "500",
    textAlign: "center",
  },
  successChild: {
    // top: 665,
    bottom: -110,
    left: -252,
    width: 414,
    height: 362,
    position: "absolute",
  },
  frameChild: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    width: "100%",
  },
  successInner: {
    height: 141,
  },
  frameItem: {
    top: 23,
    left: 7,
    borderRadius: 3,
    width: 32,
    zIndex: 0,
  },
  frameInner: {
    top: 12,
    left: 3,
    borderRadius: Border.br_10xs,
    width: 14,
    zIndex: 1,
  },
  rectangleParent: {
    width: "100%",
    height: "100%",
    padding: Padding.p_3xs,
    alignItems: "center",
    // backgroundColor:"red",
  },
  frameView: {
    borderRadius: Border.br_61xl,
    borderStyle: "solid",
    borderColor: Color.green,
    borderWidth: 3,
    width: 106,
    height: 106,
    alignItems: "center",
  },
  success2: {
    fontSize: 27,
    fontWeight: "700",
    fontFamily: FontFamily.mulishExtraBold,
    color: Color.black,
    textAlign: "center",
    alignSelf: "stretch",
  },
  congratulationsYouHave: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsMedium,
    color: Color.brown,
    width: "100%",
    height:"100%",

    marginTop: 30,
    flex: 1,
  },
  successParent: {
    maxHeight: 138,
    height:"100%",
    flex:1,
    display: "flex",
    flexDirection: "column",
    width:"100%",
    justifyContent:"space-between",
    // marginTop: 47,
    alignItems: "center",
    // backgroundColor:"blue"
  },
  backToLogin: {
    fontSize: 16,
    textTransform: "uppercase",
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
  success: {
    borderRadius: Border.br_41xl,
    paddingVertical: Padding.p_3xs,
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",

    // flexDirection: "row",
    width: "100%",
    // left: 0,
    // top: 0,
    position: "relative",
    height: "100%",
    // backgroundColor:"red",
    gap:30
  },
  successWrapper: {
    paddingVertical: 200,
    justifyContent: "center",
    alignItems: "center",

    flexDirection: "row",
    width: "100%",
    // left: 0,
    // top: 0,
    position: "relative",
    height: "100%",
    flex:1
  },
  success1: {
    backgroundColor: Color.beige,
    height: "100%",
    flex: 1,
  },
});

export default Success;
