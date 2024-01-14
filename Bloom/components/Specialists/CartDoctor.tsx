import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View,TouchableOpacity } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../../GlobalStyles";
import { useNavigation, ParamListBase } from "@react-navigation/native";
type SectionCard3Type = {
  /** Style props */
  propMarginTop?: number | string;
}; 

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
interface DoctorData {
  id?: number;
  email?: string;
  first_name?: string;
  last_name?: string;
  specialty?: string;
  profile_picture?: string;
  phone_number?: string;
  address?: string[];
  bio?: string;
  rate?: number;
  review?: number;
  gender?: string;
}

const SectionCard3 = ({ propMarginTop, doctor }: { propMarginTop: SectionCard3Type, doctor: DoctorData }) => {
  const navigation: any = useNavigation()






  const frameView1Style = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop?.propMarginTop),
    };
  }, [propMarginTop]);

  return (
    <View style={[styles.frameParent, frameView1Style]}>
      <View style={[styles.frameGroup, styles.frameLayout1]}>
        <View style={[styles.frameContainer, styles.parentFlexBox]}>
        <TouchableOpacity
               onPress={() => {navigation.navigate("DoctorProfile", {
                id: doctor.id
              })
            console.log(doctor.id,"doctor.idddddddddddddddddddddddddd");
          }
          }   >
               <Image
            style={styles.frameChild}
            contentFit="cover"
            source={doctor.profile_picture}
          />
              </TouchableOpacity>
         
          <View style={styles.frameView}>
            <View style={[styles.frameParent1, styles.frameLayout]}>
              {doctor.review && <View style={[styles.frameWrapper, styles.frameLayout]}>
                <View style={styles.parentFlexBox}>
                 
                  <Image
                    style={styles.ionheartSharpIcon}
                    contentFit="cover"
                    source={require("../../assets/ionheartsharp.png")}
                  />

                  <Text style={[styles.text, styles.textTypo]}>{doctor.review}</Text>
                </View>
              </View>}
              <Image
                style={styles.chevronForwardIcon}
                contentFit="cover"
                source={require("../../assets/chevronforward.png")}
              />
            </View>
            <View style={styles.drEmmaMiaParent}>
              <Text
                style={[styles.drEmmaMia, styles.drEmmaMiaLayout]}
                numberOfLines={1}
              >
                Dr.{doctor.first_name} {doctor.last_name}
              </Text>
              <Text
                style={[styles.generalPhysician, styles.wednesdayTypo]}
                numberOfLines={1}
              >
                General {doctor.specialty}
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.frameParent2, styles.parentFrameFlexBox]}>
          <View style={[styles.iontimeOutlineParent, styles.parentFlexBox]}>
            <Image
              style={styles.iontimeOutlineIcon}
              contentFit="cover"
              source={require("../../assets/iontimeoutline3.png")}
            />
            <Text
              style={[styles.wednesday, styles.wednesdaySpaceBlock]}
              numberOfLines={1}
            >
              Wednesday
            </Text>
            <Text style={[styles.oct272022, styles.amTypo]} numberOfLines={1}>
              Oct 27, 2022
            </Text>
          </View>
          <Text style={[styles.am, styles.amTypo]} numberOfLines={1}>
            9:00 - 9:30 am
          </Text>
        </View>
      </View>
      <View style={[styles.frameParent3, styles.frameParent3FlexBox]}>
        <View style={[styles.parent, styles.parentFrameFlexBox]}>
          <Text style={[styles.text1, styles.text1Typo]}>${doctor.rate}</Text>
          <View style={styles.frameItem} />
        </View>
        <TouchableOpacity
          onPress={() => {navigation.navigate("DoctorProfile", {
            id: doctor.id
          })
        console.log(doctor.id,"doctor.idddddddddddddddddddddddddd");
      }
      }

        style={[styles.patientButton, styles.frameParent3FlexBox]}>
        <View style={[styles.stateLayer, styles.parentFlexBox]}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../../assets/calander.png")}
          />
          <Text style={[styles.labelText, styles.wednesdaySpaceBlock]}>
            Book Appointment
          </Text>
        </View>
      </TouchableOpacity>
    </View>
    </View >
  );
};

const styles = StyleSheet.create({
  frameLayout1: {
    maxWidth: 330,
    width: "100%",
  },
  parentFlexBox: {
    flexDirection: "row",
    alignItems: "center",  

  },
  frameLayout: {
    minHeight: 24,
    flex: 1,
  },
  textTypo: {
    color: Color.green,
    fontFamily: FontFamily.medium14,
    fontWeight: "500",
  },
  drEmmaMiaLayout: {
    maxWidth: 230,
    width: "100%",
    flex: 1,
  },
  wednesdayTypo: {
    maxHeight: 16,
    minHeight: 16,
    fontFamily: FontFamily.subtitleBodyCaptionCaption1,
    fontWeight: "600",
    textAlign: "left",
    fontSize: FontSize.regular12_size,
    overflow: "hidden",
  },
  parentFrameFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  wednesdaySpaceBlock: {
    marginLeft: 8,
    flex: 1,
  },
  amTypo: {
    fontFamily: FontFamily.regular12,
    maxHeight: 16,
    minHeight: 16,
    color: Color.black,
    fontSize: FontSize.regular12_size,
    overflow: "hidden",
  },
  frameParent3FlexBox: {
    maxHeight: 50,
    minHeight: 45,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  text1Typo: {
    fontFamily: FontFamily.subtitleBodyCaptionCaption1,
    fontWeight: "600",
    fontSize: FontSize.size_6xll,
    color: Color.black,
    textAlign: "left",
  },
  frameChild: {
    borderRadius: Border.br_38xl,
    width: 80,
    height: 80,
    overflow: "hidden",
  },
  ionheartSharpIcon: {
    width: 13,
    height: 13,
    overflow: "hidden",
  },
  text: {
    marginLeft: 6,
    height: 16,
    width: 18,
    textAlign: "left",
    fontSize: FontSize.regular12_size,
    color: Color.green,
    fontFamily: FontFamily.medium14,
    fontWeight: "500",
  },
  frameWrapper: {

    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorPaleturquoise_400,
    alignItems: "flex-end",
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_9xs,
    minWidth: 54,
    maxWidth: 54,
    maxHeight: 24,
    height: "100%",
    justifyContent: "center",
  },
  chevronForwardIcon: {
    maxWidth: 16,
    maxHeight: 17,
    height: "100%",
    overflow: "hidden",
    flex: 1,
  },
  frameParent1: {
    maxHeight: 26,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  drEmmaMia: {
    minHeight: 22,
    maxHeight: 22,
    color: Color.black,
    fontFamily: FontFamily.subtitleBodyCaptionCaption1,
    fontWeight: "600",
    fontSize: FontSize.size_6xll,
    textAlign: "left",
    overflow: "hidden",
  },
  generalPhysician: {
    color: Color.neutralsGray2,
    marginTop: 2,
    maxWidth: 230,
    width: "100%",
    flex: 1,
  },
  drEmmaMiaParent: {
    minHeight: 40,
    maxHeight: 45,
    marginTop: 4,
    alignSelf: "stretch",
    flex: 1,
  },
  frameView: {
    minWidth: 190,
    minHeight: 68,
    maxHeight: 77,
    marginLeft: 16,
    height: "100%",
    flex: 1,
  },
  frameContainer: {
    minWidth: 300,
    minHeight: 77,
    maxWidth: 340,
    maxHeight: 80,
    width: "100%",
    flex: 1,
  },
  iontimeOutlineIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  wednesday: {
    minWidth: 68,
    maxWidth: 70,
    maxHeight: 16,
    minHeight: 16,
    fontFamily: FontFamily.subtitleBodyCaptionCaption1,
    fontWeight: "600",
    textAlign: "left",
    fontSize: FontSize.regular12_size,
    overflow: "hidden",
    color: Color.black,
    height: "100%",
  },
  oct272022: {
    minWidth: 70,
    maxWidth: 72,
    marginLeft: 8,
    flex: 1,
    textAlign: "left",
    height: "100%",
  },
  iontimeOutlineParent: {
    height: 17,
    minWidth: 185,
    minHeight: 17,
    maxHeight: 19,
    flex: 1,
  },
  am: {
    textAlign: "right",
    minWidth: 81,
    maxWidth: 85,
  },
  frameParent2: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorPaleturquoise_200,
    minWidth: 285,
    minHeight: 33,
    maxWidth: 321,
    maxHeight: 35,
    marginTop: 12,
    padding: Padding.p_5xs,
    width: "100%",
    flex: 1,
  },
  frameGroup: {
    minWidth: 305,
    minHeight: 124,
    maxHeight: 127,
    flex: 1,
  },
  text1: {
    minWidth: 45,
    maxWidth: 55,
    color: Color.black,
    flex: 1,
  },
  frameItem: {
    borderStyle: "solid",
    borderColor: Color.neutralsGray6,
    borderRightWidth: 1,
    width: 1,
    height: 28,
  },
  parent: {
    minWidth: 57,
    minHeight: 27,
    maxWidth: 60,
    maxHeight: 27,
    height: "100%",
    flex: 1,
  },
  vectorIcon: {
    height: 18,
    width: 18,
  },
  labelText: {
    fontSize: FontSize.size_sm,
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    minWidth: 125,
    maxWidth: 126,
    color: Color.green,
    fontFamily: FontFamily.medium14,
    fontWeight: "500",
  },
  stateLayer: {
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_8xs,
    minWidth: 155,
    minHeight: 29,
    maxWidth: 255,
    maxHeight: 32,
    height: "100%",
    justifyContent: "center",
    flex: 1,
  },
  patientButton: {
    borderRadius: Border.br_81xl,
    minWidth: 160,
    maxWidth: 270,
    padding: Padding.p_5xs,
    height: "100%",
    justifyContent: "center",
    overflow: "hidden",
  },
  frameParent3: {
    minWidth: 320,
    maxWidth: 330,
    width: "100%",
  },
  frameParent: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.neutralsWhite,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 358,
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_base,
    paddingBottom: Padding.p_9xs,
    minWidth: 340,
    minHeight: 189,
    maxWidth: 370,
    maxHeight: 200,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default SectionCard3;
