import React , {useState} from "react";
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
type FrameComponent4Type = {
  style?: StyleProp<ViewStyle>;
};

const FrameComponent4 = ({ style }: FrameComponent4Type) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
const [color,setColor] =useState(Color.colorGray_400)
  return (
    <Pressable
      style={[styles.frameParent, style]}
      onPress={() => {
        setColor(Color.green)
        navigation.navigate("Home")
      }}
    >
      <Octicons name="home" size={18} color={color} />
      {/* <Image
        style={[styles.frameIcon, styles.projectsLayout]}
        contentFit="cover"
        source={require("../assets/frame1.png")}
      /> */}
      <Text style={[styles.projects, styles.projectsLayout , {color: color} ]} numberOfLines={1}>
      Home
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  projectsLayout: {
    overflow: "hidden",
    height: "100%",
    flex: 1,
  },
  frameIcon: {
    maxWidth: 20,
    maxHeight: 20,
    minWidth: 20,
    minHeight: 20,
  },
  projects: {
    fontSize: FontSize.size_sm,
    lineHeight: 16,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    textAlign: "left",
    maxWidth: 168,
    maxHeight: 25,
    marginLeft: 12,
  },
  frameParent: {
    alignSelf: "stretch",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorPaleturquoise_200,
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

export default FrameComponent4;
