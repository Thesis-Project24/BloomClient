import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Padding, Color, Border, FontSize, FontFamily } from "../../GlobalStyles";
import { NavigationProp } from '@react-navigation/native';

type JournalHomeNavigationProp = NavigationProp<Record<string, object>>;

const JournalHome = ({navigation}: {navigation: JournalHomeNavigationProp}) => {
    // const navigation = useNavigation();

  return (
    <View style={[styles.frame2Parent, styles.frameGroupSpaceBlock]}>
      <View style={styles.frame2}>
        <View style={[styles.frame2Inner, styles.frame2InnerFlexBox]}>
          <View style={[styles.frameWrapper, styles.frameWrapperBorder]}>
            <Image
              style={[styles.frameChild, styles.artboardLayout]}
              contentFit="cover"
              source={require("../../assets/frame-237496.png")}
            />
          </View>
        </View>
        <View style={[styles.frame2Child, styles.frame2ChildSpaceBlock]}>
          <View style={styles.frameShadowBox}>
            <Image
              style={[styles.frameChild, styles.artboardLayout]}
              contentFit="cover"
              source={require("../../assets/frame-2374961.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.frame1TheInatel}>
        <View style={[styles.frameParent, styles.frameFlexBox]}>
          
          <TouchableOpacity style={[styles.framePressable, styles.frame2InnerFlexBox]}>
            <View style={[styles.frameView]}>
              <View style={styles.artboard1773Wrapper}>
                <Image
                  style={[styles.artboard1773, styles.artboardLayout]}
                  contentFit="cover"
                  source={require("../../assets/artboard-177-3.png")}
                />
              </View>
            </View>
          </TouchableOpacity>
         
         
          <View style={[styles.frameWrapper1, styles.frameFlexBox]}>
            <View style={[styles.frameWrapper2, styles.shadow]}>
              <View style={styles.artboard1773Container}>
                <Image
                  style={[styles.artboard17731, styles.artboardLayout]}
                  contentFit="cover"
                  source={require("../../assets/artboard-177-31.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity 
         onPress={() => {
            navigation.navigate("Journal")
         
          }}
        style={styles.iniitielOne}>
          <View style={[styles.frameGroup, styles.shadow]}>
            <View
              style={[styles.artboard1773Frame, styles.getStartedParentLayout1]}
            >
              <Image
                style={[styles.artboard17732, styles.artboardLayout]}
                contentFit="cover"
                source={require("../../assets/artboard-177-32.png")}
              />
            </View>
            <View
              style={[styles.getStartedParent, styles.getStartedParentLayout]}
            >
              <Text style={[styles.getStarted, styles.getStartedText]}>
                Get Started
              </Text>
              <Text
                style={[styles.creatYourJournal, styles.getStartedText]}
                numberOfLines={2}
              >{`Creat Your Journal
And Be Creative`}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameGroupSpaceBlock: {
    paddingVertical: 0,
    alignItems: "center",
  },
  frame2InnerFlexBox: {
    paddingVertical: Padding.p_mid,
    paddingHorizontal: 0,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameWrapperBorder: {
    borderWidth: 2,
    borderColor: Color.black,
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.8)",
    borderRadius: Border.br_sm,
    flex: 1,
  },
  shadow:{
    borderWidth: 2,
    borderColor: Color.black,
    borderStyle: "solid",
    borderRadius: Border.br_sm,
    flex: 1,
shadowOpacity: 1,
    shadowOffset: {
      width: -5,
      height: -5,
    },
    shadowColor: "rgba(0, 0, 0, 0.8)",
    
  },
  artboardLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    width: "100%",
    flex: 1,
    alignSelf: "stretch",
  },
  frame2ChildSpaceBlock: {
    marginLeft: -224,
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: 0,
  },
  frameFlexBox: {
    height: 210,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  frameShadowBox: {
    elevation: 1,
    shadowRadius: 1,
    backgroundColor: Color.green,
    borderWidth: 2,
    borderColor: Color.black,
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.8)",
    borderRadius: Border.br_sm,
    flex: 1,
    alignSelf: "stretch",
  },
  getStartedParentLayout1: {
    maxWidth: 252,
    flex: 1,
  },
  getStartedParentLayout: {
    minWidth: 191,
    width: "100%",
  },
  getStartedText: {
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "center",
    transform: [
      {
        rotate: "180deg",
      },
    ],
    overflow: "hidden",
    flex: 1,
  },
  frameChild: {
    width: "100%",
  },
  frameWrapper: {
    backgroundColor: Color.colorTan_200,
    shadowRadius: 2.1,
    elevation: 2.1,
    justifyContent: "flex-end",
    alignSelf: "stretch",
  },
  frame2Inner: {
    width: 254,
  },
  frame2Child: {
    width: 263,
    height: 207,
    alignItems: "center",
    flexDirection: "row",
  },
  frame2: {
    width:"100%",
    height: 213,
    minWidth: 280,
    maxWidth: 293,
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  artboard1773: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    width: "100%",
  },
  artboard1773Wrapper: {
    paddingRight: Padding.p_101xl,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
    alignSelf: "stretch",
  },
  frameView: {
    justifyContent: "center",
    alignItems: "center",
    elevation: 1,
    shadowRadius: 1,
    backgroundColor: Color.green,
    borderWidth: 2,
    borderColor: Color.black,
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowOffset: {
      width: -5,
      height: -5,
    },
    shadowColor: "rgba(0, 0, 0, 0.8)",
    borderRadius: Border.br_sm,
    flex: 1,
    alignSelf: "stretch",
  },
  framePressable: {
    justifyContent: "center",
    flex: 1,
  },
  artboard17731: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    width: "100%",
  },
  artboard1773Container: {
    paddingRight: Padding.p_83xl,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
    alignSelf: "stretch",
  },
  frameWrapper2: {
    backgroundColor: Color.beige,
    shadowRadius: 1.3,
    elevation: 1.3,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  frameWrapper1: {
    width: 252,
    marginLeft: -224,
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: 0,
  },
  frameParent: {
    width: 282,
  },
  artboard17732: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    width: "100%",
  },
  artboard1773Frame: {
    alignItems: "flex-end",
    paddingRight: Padding.p_18xl,
    minWidth: 240,
    minHeight: 150,
    maxHeight: 150,
    width: "100%",
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  getStarted: {
    fontSize: FontSize.regularNormalRegular_size,
    lineHeight: 32,
    fontFamily: FontFamily.soraRegular,
    color: Color.generalLightText,
    textShadowRadius: 1,
    minWidth: 100,
    minHeight: 25,
    maxHeight: 31,
    alignSelf: "stretch",
  },
  creatYourJournal: {
    fontSize: FontSize.size_xl,
    lineHeight: 25,
    fontWeight: "600",
    fontFamily: FontFamily.soraSemiBold,
    color: Color.colorGray_100,
    textShadowRadius: 4,
    minHeight: 50,
    maxWidth: 220,
    maxHeight: 50,
    marginTop: 10,
    minWidth: 191,
    width: "100%",
  },
  getStartedParent: {
    paddingBottom: Padding.p_6xs,
    minHeight: 80,
    maxHeight: 92,
    marginTop: -24,
    maxWidth: 252,
    flex: 1,
    alignItems: "center",
  },
  frameGroup: {
    backgroundColor: Color.sageGreen,
    shadowRadius: 0,
    elevation: 0,
    height: 219,
    paddingHorizontal: Padding.p_12xs,
    minWidth: 230,
    minHeight: 219,
    maxWidth: 250,
    maxHeight: 220,
    paddingVertical: 0,
    alignItems: "center",
  },
  iniitielOne: {
    marginLeft: -219,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
    alignSelf: "stretch",
  },
  frame1TheInatel: {
    width: 330,
    height: 223,
    marginLeft: -240,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  frame2Parent: {
    width:"100%",
    paddingHorizontal: 8,
    minHeight: 220,
    maxHeight: 223,
    marginTop: 32,
    justifyContent: "center",
    flexDirection: "row",
    flex: 1,
    alignSelf: "stretch",
  },
});

export default JournalHome;
