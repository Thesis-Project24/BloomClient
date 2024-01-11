import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../../GlobalStyles";

const BookingInfo = () => {
  return (
    <View style={styles.frameWrapper1}>
    <View style={styles.frameWrapper}>
      <View style={styles.frameParent}>
        <View style={[styles.frameGroup, styles.frameFlexBox]}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../../assets/frame-26084961.png")}
          />
          <View style={styles.frameContainer}>
            <View style={styles.drEmmaMiaParent}>
              <Text style={styles.drEmmaMia}>Dr. Emma Mia</Text>
              <Text style={styles.generalPhysician}>General Physician</Text>
            </View>
          </View>
        </View>
        <View style={[styles.frameView, styles.frameFlexBox]}>
          <View style={[styles.iontimeOutlineParent, styles.frameFlexBox]}>
            <Image
              style={styles.iontimeOutlineIcon}
              contentFit="cover"
              source={require("../../assets/iontimeoutline.png")}
            />
            <Text style={[styles.wednesday, styles.wednesdaySpaceBlock]}>
              Wednesday
            </Text>
            <Text style={[styles.oct272022, styles.amTypo]} numberOfLines={1}>
              Oct 27, 2022
            </Text>
          </View>
          <Text style={[styles.am, styles.amTypo]}>9:00 - 9:30 am</Text>
        </View>
      </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  wednesdaySpaceBlock: {
    marginLeft: 6,
    color: Color.black,
  },
  amTypo: {
    fontFamily: FontFamily.regular12,
    textAlign: "center",
    fontSize: FontSize.regular12_size,
    flex: 1,
  },
  frameChild: {
    borderRadius: Border.br_38xl,
    width: 80,
    height: 80,
    overflow: "hidden",
  },
  drEmmaMia: {
    fontSize: FontSize.regular16_size,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.subtitleBodyCaptionCaption1,
    fontWeight: "600",
    alignSelf: "stretch",
  },
  generalPhysician: {
    color: Color.neutralsGray2,
    marginTop: 2,
    fontSize: FontSize.regular12_size,
    textAlign: "left",
    fontFamily: FontFamily.subtitleBodyCaptionCaption1,
    fontWeight: "600",
    alignSelf: "stretch",
  },
  drEmmaMiaParent: {
    alignSelf: "stretch",
  },
  frameContainer: {
    marginLeft: 16,
    flex: 1,
  },
  frameGroup: {
    maxHeight: 80,
    alignSelf: "stretch",
    flex: 1,
  },
  iontimeOutlineIcon: {
    borderRadius: Border.br_7xs,
    width: 12,
    height: 12,
    overflow: "hidden",
  },
  wednesday: {
    maxWidth: 75,
    textAlign: "center",
    marginLeft: 6,
    fontSize: FontSize.regular12_size,
    fontFamily: FontFamily.subtitleBodyCaptionCaption1,
    fontWeight: "600",
    flex: 1,
  },
  oct272022: {
    maxWidth: 85,
    maxHeight: 16,
    marginLeft: 6,
    color: Color.black,
    overflow: "hidden",
  },
  iontimeOutlineParent: {
    width: 190,
  },
  am: {
    color: Color.neutralsDark,
    alignSelf: "stretch",
  },
  frameView: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorPaleturquoise_100,
    justifyContent: "space-between",
    padding: Padding.p_5xs,
    maxHeight: 32,
    marginTop: 12,
    alignSelf: "stretch",
    flex: 1,
  },
  frameParent: {
    // backgroundColor: "white",
    justifyContent: "center",
    maxHeight: 125,
    alignSelf: "stretch",
    flex: 1,
    
  },
  
  frameWrapper: {
    height: "100%",
    
    width: "100%",
    borderRadius: Border.br_xs,
    // backgroundColor: Color.beige,
   
    paddingBottom: Padding.p_base,
    shadowOpacity: 11,
    elevation: 14,
    shadowRadius: 5,
    shadowOffset: {
      width: 4,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    padding: Padding.p_base,
    maxWidth: 380,
    maxHeight: 156,
    minHeight: 110,
    marginTop: 8,
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },



  frameWrapper1: {
    marginTop:12,
    // borderTopLeftRadius: Border.br_xl,
    // borderTopRightRadius: Border.br_xl,
    // borderBottomRightRadius: Border.br_8xs,
    // borderBottomLeftRadius: Border.br_8xs,
    borderRadius: Border.br_xs,
    backgroundColor: "white",
    // backgroundColor: Color.beige,
    maxWidth: 390,
    maxHeight: 180,
    minHeight: 140,
    height: "100%",
    width: "100%",
    // paddingBottom: Padding.p_base,
    // paddingHorizontal: Padding.p_3xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    alignItems: "center",
  }
});

export default BookingInfo;
