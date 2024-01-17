import * as React from "react";
import {
  Pressable,
  StyleProp,
  ViewStyle,
  StyleSheet,
  Text,
} from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../../GlobalStyles";
import { Octicons } from '@expo/vector-icons';

type FrameComponent5Type = {
  style?: StyleProp<ViewStyle>;
};

const FrameComponent5 = ({ style }: FrameComponent5Type) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={[styles.vectorParent, style]}
      onPress={() => navigation.navigate("ProfileDoctorRaja")}
    >
      <Octicons name="home" size={18} color={Color.colorGray_400} />
      {/* <Image
        style={[styles.vectorIcon, styles.homeLayout]}
        contentFit="cover"
        source={require("../assets/vector7.png")}
      /> */}
      <Text style={[styles.home, styles.homeLayout]} numberOfLines={1}>
        Home
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  homeLayout: {
    overflow: "hidden",
    height: "100%",
    flex: 1,
  },
  vectorIcon: {
    maxWidth: 16,
    maxHeight: 16,
    minWidth: 16,
    minHeight: 16,
  },
  home: {
    fontSize: FontSize.size_sm,
    lineHeight: 16,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorGray_400,
    textAlign: "left",
    maxWidth: 168,
    maxHeight: 16,
    marginLeft: 12,
  },
  vectorParent: {
    alignSelf: "stretch",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.neutralsWhite,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_3xs,
    minWidth: 140,
    minHeight: 40,
    maxHeight: 40,
    flex: 1,
  },
});

export default FrameComponent5;
