import * as React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  Padding,
  Color,
  Border,
  FontSize,
  FontFamily,
} from "../GlobalStyles";
import { useNavigation } from "@react-navigation/core";
const Home = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text style={[styles.textPosition]}>Ahla bikom ness koll marhbee marhbeee</Text>


      <View style={[styles.frameContainer, styles.frameWrapperShadowBox]}>
        <View style={styles.vectorParent}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Articles" as never)}
          >
            <Image
              style={styles.vectorIcon1}
              resizeMode="cover"
              source={require("../assets/vector1.png")}
            />
            <Text
              style={[styles.reservation, styles.journalFlexBox]}
              numberOfLines={1}
            >
              {" "}
              Articles
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  textPosition: {
    left: -10,
    top: 50,
    textAlign: "center",
    fontWeight: "800",
  },
  frameContainer: {
    // zIndex: 1,
  },
  frameWrapperShadowBox: {
    padding: Padding.p_3xs,
    height: 100,
    width: 120,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.sageGreen,
    borderRadius: Border.br_3xs,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  vectorParent: {
    justifyContent: "center",
    flex: 1,

    alignSelf: "stretch",
    alignItems: "center",
  },
  vectorIcon1: {
    width: 37,
    height: 37,
    marginLeft: 30,
  },
  reservation: {
    lineHeight: 16,
    fontWeight: "700",
    fontFamily: FontFamily.tajawalBold,
  },
  journalFlexBox: {
    marginTop: 10,
    maxHeight: 20,
    display: "flex",
    textAlign: "center",
    color: Color.colorGray_200,
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
    overflow: "hidden",
    justifyContent: "center",
    flex: 1,
    alignSelf: "stretch",
    alignItems: "center",
  },
});
export default Home;

