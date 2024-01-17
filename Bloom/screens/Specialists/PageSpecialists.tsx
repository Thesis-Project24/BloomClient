import * as React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import Specialists from "../../components/Specialists/SpecialistsFilter";
import ImageSpecialists from "../../components/Specialists/ImageSpecialists";
import { FontSize, FontFamily, Color, Padding } from "../../GlobalStyles";
import { useQuery , useQueryClient } from "react-query";
     
const PageSpecialists = () => {


   
  return (
  <>
  <View style={styles.specialists}>
           
      <View style={[styles.specialistsInner, styles.specialistsPosition]}>
        <View style={styles.frameParent}>
          <View style={[styles.specialistsWrapper, styles.specialistsFlexBox]}>
            <Text style={[styles.specialists1, styles.specialistsFlexBox]}>
              Specialists
            </Text>
          </View>
          <View style={styles.frameGroup}>
            <Specialists />
            <ImageSpecialists />
          </View>
        </View>         
      </View>
      
      <Image
        style={styles.specialistsItem}
        contentFit="cover"
        source={require("../../assets/vector-2.png")}
      />
    </View>
  </>
    
  );
};

const styles = StyleSheet.create({
  specialistsPosition: {
    width: "100%",
    left: 0,
    top: 0,
    position: "relative",
  },
  specialistsFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  specialists1: {
    fontSize: FontSize.size_lg,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorBlack,
    textAlign: "center",
    display: "flex",
    width: 277,
    alignSelf: "stretch",
  },
  specialistsWrapper: {
    height: "100%",
    paddingHorizontal: Padding.p_7xl,
    paddingVertical: 0,
    minHeight: 35,
    maxWidth: 410,
    maxHeight: 38,
    flexDirection: "row",
    width: "100%",
    // backgroundColor:"red",
  },
  frameGroup: {
    marginTop: 38,
    alignSelf: "stretch",
    flex: 1,
  },
  frameParent: {

    height: "100%",
    width: "100%",
    minWidth: 345,
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
  },
  specialistsInner: {
    paddingTop: 50,
    paddingBottom: 30,
    flexDirection: "row",
    height: "100%",
  },
  specialistsChild: {
    left: 7,
    top: 6,
    position: "absolute",
    height: 129,
  },
  specialistsItem: {
    top: 636,
    left: -257,
    width: 414,
    height: 362,
    position: "absolute",
  },
  specialists: {
    backgroundColor: Color.beige,
    overflow: "hidden",
    height: "100%",
    width: "100%",
    flex: 1,
  },
});

export default PageSpecialists;
