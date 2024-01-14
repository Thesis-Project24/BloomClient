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
    width: "100%",
  },
  planDeTravail22x81: {
    alignSelf: "stretch",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  planDeTravail22x81Wrapper: {
    padding: Padding.p_3xs,
    minWidth: 300,
    minHeight: 299,
    maxWidth: 430,
    maxHeight: 374,
    marginTop: 10,
  },
});

export default ImageSpecialists;
