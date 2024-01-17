import React, { useState } from "react";
// import FrameComponent4 from "./Frame29";
import HomeButton from "../../components/SideBar/HomeButton";
import HomeButton2 from "../../components/SideBar/HomeButton2";
import { TouchableOpacity, StyleSheet, Text, View, Switch } from "react-native";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import { Color, Padding, Border, FontFamily, FontSize } from "../../GlobalStyles";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';




type SideBarType = {
  state?: any;
  navigation?: any;
};

const SideBar = ({ state, navigation }: SideBarType) => {
  const [drawerItemsNormal] = useState([
    <HomeButton2 />,
   
  ]);
  const [drawerItemsActive] = useState([
    <HomeButton />,
   
  ]);
  const [switchToggleSwitchValueState, setSwitchToggleSwitchValueState] =
    useState(true);
  const stateIndex = !state ? 0 : state.index - 1;

  return (
    <SafeAreaView style={styles.sideBar}>
      <View style={[styles.view, styles.viewLayout]}>
        <View style={[styles.inner, styles.frameFlexBox1]}>
          <View style={[styles.frameWrapper, styles.frameFlexBox1]}>
            <View style={styles.frameParent}>
              <View style={styles.frameContainer}>
                <TouchableOpacity
                  style={[styles.frameGroup, styles.frameFlexBox1]}
                  onPress={() => navigation.goBack()}
                >
                  <Ionicons name="chevron-back" size={24} color="black" />
                  {/* <Image
                    style={[styles.frameChild, styles.frameIconLayout]}
                    contentFit="cover"
                    source={require("../assets/frame-427319272.png")}
                  /> */}
                  <Text style={styles.leftTitle}>Back</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.frameView}>
                <View style={styles.frameParent1}>
                  {stateIndex === 0
                    ? drawerItemsActive[0]
                    : drawerItemsNormal[0]}
                  {stateIndex === 1
                    ? drawerItemsActive[0]
                    : drawerItemsNormal[0]}
                </View>
                <View style={[styles.frameItem, styles.frameFlexBox]} />
                <View style={styles.frameFlexBox}>
                  <TouchableOpacity style={styles.iconmenuIconParent}>
                    <Ionicons
                      name="notifications-outline"
                      size={22}
                      color={Color.colorGray_400} />
                    {/* <Image
                      style={[styles.iconmenuIcon, styles.iconsIconLayout]}
                      contentFit="cover"
                      source={require("../assets/iconmenu-icon.png")}
                    /> */}
                    <Text
                      style={[styles.home, styles.homeLayout]}
                      numberOfLines={1}
                    >
                      Notifacation
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.chatParent, styles.chatParentLayout]}
                  >
                    <AntDesign 
                    name="message1" 
                    size={20} 
                    color={Color.colorGray_400} />

                    {/* <Image
                      style={[styles.chatIcon, styles.iconLayout]}
                      contentFit="cover"
                      source={require("../assets/chat.png")}
                    /> */}
                    <Text style={styles.messages} numberOfLines={1}>
                      Messages
                    </Text>
                    <View style={styles.wrapper}>
                      <Text style={styles.text}>2</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.vectorGroup, styles.chatParentLayout]}
                  >
                    <MaterialCommunityIcons
                      // style={styles.iconLayout} 
                      name="calendar-clock-outline"
                      size={22}
                      color={Color.colorGray_400} />
                    {/* <Image
                      style={styles.iconLayout}
                      contentFit="cover"
                      source={require("../assets/vector8.png")}
                    /> */}
                    <Text
                      style={[styles.home, styles.homeLayout]}
                      numberOfLines={1}
                    >
                      History
                    </Text>
                  </TouchableOpacity>
                  {/* <TouchableOpacity
                    style={[styles.vectorGroup, styles.chatParentLayout]}
                  >
                    <Image
                      style={[styles.frameIcon1, styles.iconsIconLayout]}
                      contentFit="cover"
                      source={require("../assets/frame2.png")}
                    />
                    <Text
                      style={[styles.home, styles.homeLayout]}
                      numberOfLines={1}
                    >
                      Community
                    </Text>
                  </TouchableOpacity> */}
                  {/* <TouchableOpacity
                    style={[styles.vectorGroup, styles.chatParentLayout]}
                  >
                    <Image
                      style={styles.ppeSantizerAlt1Icon}
                      contentFit="cover"
                      source={require("../assets/ppe-santizer-alt-1.png")}
                    />
                    <Text style={styles.reminders} numberOfLines={1}>
                      Reminders
                    </Text>
                  </TouchableOpacity> */}
                  
                  <TouchableOpacity
                    style={[styles.chatParent, styles.chatParentLayout]}
                  >
                    {/* <Image
                      style={[styles.frameIcon2, styles.iconsIconLayout]}
                      contentFit="cover"
                      source={require("../assets/frame3.png")}
                    /> */}
                    <Text style={styles.messages} numberOfLines={1}>
                      Stats
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.vectorGroup, styles.chatParentLayout]}
                  >
                    <AntDesign 
                    name="setting" 
                    size={24} 
                    color={Color.colorGray_400} />
                    {/* <Image
                      style={styles.ppeSantizerAlt1Icon}
                      contentFit="cover"
                      source={require("../assets/ppe-santizer-alt-1.png")}
                    /> */}
                    <Text style={styles.reminders} numberOfLines={1}>
                    Setting
                    </Text>
                  </TouchableOpacity>
                  {/* {stateIndex === 1
                    ? drawerItemsActive[1]
                    : drawerItemsNormal[1]} */}
                </View>
              </View>

              <View style={styles.bottom}>
                <TouchableOpacity style={styles.listManu}>
                  <View style={[styles.content, styles.frameFlexBox1]}>
                  <MaterialCommunityIcons name="help-circle-outline" size={22} color={Color.green} />
                    {/* <Image
                      style={[styles.uiIconhelplight, styles.iconLayout1]}
                      contentFit="cover"
                      source={require("../assets/ui-iconhelplight.png")}
                    /> */}
                    <Text style={styles.text1} numberOfLines={1}>
                      Help and Support
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.listManu}>
                  <View style={[styles.content, styles.frameFlexBox1]}>
                  <MaterialIcons name="logout" size={22} color={Color.grayShadesDarkGray} />
                    {/* <Image
                      style={[styles.icons, styles.iconsIconLayout]}
                      contentFit="cover"
                      source={require("../assets/icons1.png")}
                    /> */}
                    <Text
                      style={[styles.text2, styles.textLayout]}
                      numberOfLines={1}
                    >
                      Logout
                    </Text>
                  </View>
                </TouchableOpacity>


                <TouchableOpacity
                  style={[styles.lightdarkControl, styles.listManu1Layout]}
                >
                  <View style={[styles.content, styles.frameFlexBox1]}>
                  <Feather name="sun" size={22} color={Color.grayShadesDarkGray} />
                    {/* <Image
                      style={[styles.icons1, styles.iconsIconLayout]}
                      contentFit="cover"
                      source={require("../assets/icons2.png")}
                    /> */}
                    <Text
                      style={[styles.text3, styles.textLayout]}
                      numberOfLines={1}
                    >
                      Light mode
                    </Text>
                  </View>
                  <Switch
                    style={styles.switchToggle}
                    disabled={false}
                    value={switchToggleSwitchValueState}
                    onValueChange={setSwitchToggleSwitchValueState}
                    thumbColor="#242424"
                    trackColor={{ false: "#939393", true: "#add8c4" }}
                  />
                </TouchableOpacity>
              </View>


            </View>


          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mt8: {
    marginTop: 8,
  },
  mt3: {
    marginTop: 3,
  },
  sideBar: {
    borderTopRightRadius: Border.br_81xl,
    borderBottomRightRadius: Border.br_81xl,
    overflow: "hidden",
    // backgroundColor: "red",
    // backgroundColor: Color.neutralsWhite,
    flex: 1,
  },
  viewLayout: {
    height: "100%",
    width: 265,
  },
  frameFlexBox1: {
    flexDirection: "row",
    alignItems: "center",
  },
  frameIconLayout: {
    height: "100%",
    overflow: "hidden",
    flex: 1,
  },
  parentLayout: {
    maxHeight: 40,
    minHeight: 40,
    minWidth: 140,
    paddingHorizontal: Padding.p_xs,
    borderRadius: Border.br_5xs,
    paddingVertical: Padding.p_3xs,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  homeLayout: {
    marginLeft: 12,
    maxHeight: 18,
    maxWidth: 168,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 16,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    height: "100%",
    overflow: "hidden",
    flex: 1,
  },
  frameFlexBox: {
    marginTop: 23,
    alignSelf: "stretch",
    flex: 1,
  },
  iconsIconLayout: {
    maxWidth: 25,
    maxHeight: 25,
  },
  chatParentLayout: {
    marginTop: 3,
    maxWidth: 228,
    minWidth: 150,
    maxHeight: 40,
    minHeight: 40,
    paddingHorizontal: Padding.p_xs,
    borderRadius: Border.br_5xs,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    // backgroundColor: "red",
    justifyContent: "center",
    flex: 1,
  },
  iconLayout: {
    height: 18,
    width: 18,
  },
  iconLayout1: {
    width: 20,
    height: 20,
  },
  listManu1Layout: {
    marginTop: 2,
    maxHeight: 56,
    borderRadius: Border.br_5xs,
    maxWidth: 218,
    width: "100%",
    flex: 1,
    // backgroundColor:"blue",
  },
  textLayout: {
    lineHeight: 22,
    marginLeft: 10,
    fontFamily: FontFamily.openSansRegular,
    maxHeight: 25,
    textAlign: "left",
    fontSize: 14,
    height: "100%",
    overflow: "hidden",
    flex: 1,
  },
  frameChild: {
    maxWidth: 15,
    maxHeight: 23,
  },
  leftTitle: {
    lineHeight: 23,
    fontFamily: FontFamily.subheadLgSHLgRegular,
    display: "flex",
    marginLeft: 17,
    textAlign: "left",
    fontSize: 16,
    color: Color.black,
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  frameGroup: {
    width: 71,
    alignItems: "center",
  },
  frameContainer: {
    paddingHorizontal: Padding.p_smi,
    paddingVertical: 0,
    maxHeight: 23,
    maxWidth: 218,
    width: "100%",
    flex: 1,
  },
  frameParent1: {
    height: 84,
    alignSelf: "stretch",
  },
  frameItem: {
    borderStyle: "solid",
    borderColor: "#e2e1e7",
    borderTopWidth: 1,
    maxHeight: 1,
  },
  iconmenuIcon: {
    height: 20,
    width: 20,
  },
  home: {
    color: Color.colorGray_400,
    marginLeft: 12,
  },
  iconmenuIconParent: {
    maxWidth: 228,
    minWidth: 150,
    maxHeight: 40,
    minHeight: 40,
    paddingVertical: 5,
    paddingHorizontal: Padding.p_xs,
    borderRadius: Border.br_5xs,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.neutralsWhite,
    flex: 1,
  },
  chatIcon: {
    borderTopLeftRadius: Border.br_4xs,
    borderTopRightRadius: Border.br_4xs,
    borderBottomRightRadius: 2,
    borderBottomLeftRadius: Border.br_4xs,
    maxWidth: 25,
    maxHeight: 25,
  },
  messages: {
    marginLeft: 12,
    maxHeight: 17,
    maxWidth: 168,
    color: Color.colorGray_400,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 16,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    height: "100%",
    overflow: "hidden",
    flex: 1,
  },
  text: {
    fontSize: FontSize.size_3xs,
    letterSpacing: 0,
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.black,
  },
  wrapper: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.sageGreen,
    paddingHorizontal: Padding.p_7xs,
    paddingVertical: Padding.p_9xs,
    maxWidth: 19,
    width: 19,
    marginLeft: 6,
    height: 20,
    maxHeight: 20,
    alignItems: "center",
  },
  chatParent: {
    paddingVertical: Padding.p_4xs,
  },
  vectorGroup: {
    paddingVertical: 5,
    marginTop: 3,
  },
  frameIcon1: {
    height: 20,
    width: 20,
    overflow: "hidden",
  },
  ppeSantizerAlt1Icon: {
    width: 25,
    height: 27,
    overflow: "hidden",
  },
  reminders: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    maxHeight: 17,
    marginLeft: 8,
    maxWidth: 168,
    lineHeight: 16,
    fontSize: FontSize.size_sm,
    color: Color.colorGray_400,
    textAlign: "left",
    height: "100%",
    overflow: "hidden",
    flex: 1,
  },
  frameIcon2: {
    height: 19,
    width: 19,
    overflow: "hidden",
  },
  frameView: {
    paddingLeft: Padding.p_lg,
    paddingRight: Padding.p_5xs,
    maxHeight: 477,
    marginTop: 58,
    alignSelf: "stretch",
    flex: 1,
  },
  uiIconhelplight: {
    borderRadius: Border.br_2xs,
    opacity: 0.8,
    height: 20,
    overflow: "hidden",
  },
  text1: {
    letterSpacing: 0,
    lineHeight: 24,
    maxWidth: 180,
    marginLeft: 10,
    fontFamily: FontFamily.openSansRegular,
    maxHeight: 25,
    textAlign: "left",
    color: Color.black,
    fontSize: 14,
    height: "100%",
    overflow: "hidden",
    flex: 1,
  },
  content: {
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
    height: "100%",
    width: "100%",
    // backgroundColor:"red",
  },
  listManu: {
    maxHeight: 156,
    padding: 10,
    borderRadius: Border.br_5xs,
    maxWidth: 218,
    width: "100%",
    flex: 1,
    // backgroundColor:"blue",
  },
  icons: {
    height: 24,
    overflow: "hidden",
    flex: 1,
  },
  text2: {
    color: Color.grayShadesDarkGray,
    maxWidth: 80,
  },
  listManu1: {
    // padding: 8,
    // marginTop: 2,
  },
  icons1: {
    height: "100%",
    overflow: "hidden",
    flex: 1,
  },
  text3: {
    maxWidth: 85,
    color: Color.black,
    lineHeight: 22,
  },
  switchToggle: {
    width: 56,
    height: 32,
    maxWidth: 56,
    maxHeight: 32,
  },
  lightdarkControl: {
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
    alignItems: "center",
    flexDirection: "row",
  },


  bottom: {
    width: "100%",
    height: 140,
    justifyContent: "flex-end",
    minWidth: 218,
    // minHeight: 100,
    // maxHeight: 100,
    marginTop: 13,
    // maxWidth: 218,
    alignItems: "center",
    // backgroundColor:"blue",
    gap: 11,
  },


  frameParent: {
    paddingHorizontal: Padding.p_4xs,
    paddingVertical: Padding.p_7xl,
    alignSelf: "stretch",
    flex: 1,
  },
  frameWrapper: {
    borderTopRightRadius: 70,
    borderBottomRightRadius: 70,
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
    width:"100%",
  },
  inner: {
    position: "relative",
    // top: 0,
    // left: 0,
    alignItems: "center",
    height: "100%",
    width: 265,
  },
  view: {
    borderTopRightRadius: Border.br_81xl,
    borderBottomRightRadius: Border.br_81xl,
    overflow: "hidden",
    // backgroundColor: Color.neutralsWhite,
    // backgroundColor: "blue",
  },
});

export default SideBar;
