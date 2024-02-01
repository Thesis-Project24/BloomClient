import * as React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  Padding,
  Color,
  Border,
  FontSize,
  FontFamily,
} from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/core";
import { AntDesign, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import Reminders from "../../screens/Notification/Reminders";
const ButtonUser = ({handelOpen}:any) => {
  const navigation = useNavigation();
  

  return (
    <>
      {/* <View style={styles.frameParent}>
        <View style={[styles.frameWrapper, styles.frameWrapperShadowBox]}>
          <View style={styles.vectorParent}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Journal" as never)}
            >

              <Image
                style={styles.vectorIcon}
                resizeMode="cover"
                source={require("../../assets/Journal.png")}
              />
              <Text style={[styles.journal, styles.journalFlexBox]}>Journal</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.frameContainer, styles.frameWrapperShadowBox]}>
          <View style={styles.vectorParent}>
            <TouchableOpacity
              onPress={() => navigation.navigate("PageSpecialists" as never)}
            >
              <Image
                style={styles.vectorIcon1}
                resizeMode="cover"
                source={require("../../assets/vector1.png")}
              />
              <Text
                style={[styles.reservation, styles.journalFlexBox]}
                numberOfLines={1}
              >
                {" "}
                Reservation
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.frameView, styles.frameWrapperShadowBox]}>
          <View style={styles.vectorParent}>
            <Image
              style={styles.vectorIcon2}
              resizeMode="cover"
              source={require("../../assets/ppe-santizer-alt-1.png")
              }
            />
            <Text style={[styles.journal, styles.journalFlexBox]}>Reminders</Text>
          </View>
        </View>
        <View style={[styles.frameWrapper1, styles.frameWrapperShadowBox]}>
          <View style={styles.vectorParent}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Tracker" as never)}
            >
              <FontAwesome5
                style={styles.ppeSantizerAlt1Icon}
                name="chart-line"
                size={30}
                color="black"
                justifyContent="center"
              />
              <Image
              style={styles.ppeSantizerAlt1Icon}
              resizeMode="cover"
              // source={require("../assets/vector2.png")}
            />
              <Text style={[styles.journal, styles.journalFlexBox]}>Tracker</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View> */}





      <View style={styles.frameParent}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Journal" as never)}
          style={[styles.frameWrapper, styles.frameWrapperLayout]}
        >
          <View style={styles.psychiatryFlexBox}>
            <AntDesign

              name="book" size={40} color="#242424" />

            <Text style={[styles.psychiatry, styles.psychiatryFlexBox]}>
              Journal
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("PageSpecialists" as never)}

          style={[styles.frameContainer, styles.frameWrapperLayout]}
        >
          <View style={styles.psychiatryFlexBox}>

            <Image
              style={styles.vectorIcon1}
              resizeMode="cover"
              source={require("../../assets/vector1.png")}
            />
            {/* <MaterialCommunityIcons

              name="calendar-clock-outline"
              size={38}
              color="#242424" /> */}

            <Text style={[styles.psychiatry, styles.psychiatryFlexBox]}>
              Reservation
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Tracker" as never)}

          style={[styles.frameView, styles.frameWrapperLayout]}
        >
          <View style={styles.psychiatryFlexBox}>

            <AntDesign name="linechart" size={37} color="#242424" />


            <Text style={[styles.psychiatry, styles.psychiatryFlexBox]}>
              {" "}
              Tracker{" "}
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handelOpen(1)}

          style={[styles.frameWrapper1, styles.frameWrapperLayout]}
        >
          <View style={styles.psychiatryFlexBox}>
            {/* <Image
              style={styles.vectorIcon2}
              resizeMode="cover"
              source={require("../../assets/ppe-santizer-alt-1.png")
              }
            /> */}
            <MaterialCommunityIcons
              // style={styles.frameChild}
              name="pill" size={46} color="#242424" />

            <Text style={[styles.psychiatry, styles.psychiatryFlexBox]}>
              Reminders
            </Text>
          </View>
        </TouchableOpacity>
        {/* <Reminders ref={bottomSheetRef} /> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  frameWrapperLayout: {
    maxWidth: 127,
    minHeight: 111,
    minWidth: 111,
    padding: Padding.p_3xs,
    height: 127,
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
  psychiatryFlexBox: {
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  framePosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  mentalHealthIcon: {
    width: 43,
    height: 43,
    overflow: "hidden",
  },
  psychiatry: {
    fontSize: FontSize.size_sm,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: FontFamily.tajawalBold,
    color: Color.black,
    textAlign: "center",
    display: "flex",
    maxHeight: 20,
    marginTop: 10,
    overflow: "hidden",
  },
  frameWrapper: {
    zIndex: 0,
    width: 127,
    minHeight: 111,
    minWidth: 111,
    padding: Padding.p_3xs,
    height: 127,
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
  },
  artificialIntelligenceIcon: {
    width: 53,
    height: 53,
    overflow: "hidden",
  },
  frameContainer: {
    width: 121,
    zIndex: 1,
    minHeight: 111,
    minWidth: 111,
    padding: Padding.p_3xs,
    height: 127,
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
  },
  psychologyIcon: {
    width: 64,
    height: 64,
    overflow: "hidden",
  },
  frameView: {
    zIndex: 2,
    width: 127,
    minHeight: 111,
    minWidth: 111,
    padding: Padding.p_3xs,
    height: 127,
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
  },
  frameWrapper1: {
    zIndex: 3,
    width: 127,
    minHeight: 111,
    minWidth: 111,
    padding: Padding.p_3xs,
    height: 127,
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
  },
  frameChild: {
    marginTop: -150,
    marginLeft: 0,
    maxWidth: "100%",
    height: 300,
    zIndex: 4,
    overflow: "hidden",
  },
  frameItem: {
    marginTop: 0,
    marginLeft: -85,
    maxHeight: "100%",
    width: 370,
    zIndex: 5,
  },
  frameParent: {
    width: "100%",
    flexWrap: "wrap",
    paddingHorizontal: 35,
    paddingVertical: 40,
    minWidth: 360,
    minHeight: 300,
    maxWidth: 420,
    maxHeight: 350,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
    // backgroundColor: "blue",
    gap: 30,
    marginBottom: 143,
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

  vectorIcon: {
    marginLeft: 10,
    width: 31,
    height: 34,
  },
  journal: {
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: FontFamily.tajawalBold,
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
    // marginLeft: 10,
  },
  reservation: {
    lineHeight: 16,
    fontWeight: "700",
    fontFamily: FontFamily.tajawalBold,
  },

  vectorIcon2: {



    width: 36,
    height: 35,
  },

  ppeSantizerAlt1Icon: {
    width: 30,
    height: 30,
    justifyContent: "center",

    overflow: "hidden",
  },




});

export default ButtonUser;
