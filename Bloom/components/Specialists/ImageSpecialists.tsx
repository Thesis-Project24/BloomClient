import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Padding } from "../../GlobalStyles";

const ImageSpecialists = () => {
  return (
    <View style={[styles.planDeTravail22x81Wrapper, styles.planFlexBox]}>
      <Image
        style={[styles.planDeTravail22x81, styles.planFlexBox]}
        contentFit="cover"
        source={require("../../assets/plan-de-travail-22x8-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  planFlexBox: {
    flex: 1,
    // width: "100%",
  },
  planDeTravail22x81: {
    // marginTop: 10,
    
    alignSelf: "stretch",
    // maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
    justifyContent: "flex-start" ,
    alignItems: "flex-start",
    // maxHeight: "100%",
  },
  planDeTravail22x81Wrapper: {
    padding: Padding.p_3xs,
    minWidth: 300,
    minHeight: 330,
    maxWidth: 430,
    maxHeight: 354,
    // marginTop: 10,
    height: "100%",
    width: "100%",
    justifyContent: "flex-start" ,
    alignItems: "flex-start",
  },
});

export default ImageSpecialists;
