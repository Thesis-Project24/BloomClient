import { View, Text } from "react-native";
import { StyleSheet, TextInput, Button, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color, Padding } from '../../GlobalStyles'
import { AntDesign } from '@expo/vector-icons';


const Availability = () => {
  const navigation: any = useNavigation()
  const [duration, onChangeDuration] = React.useState("");
  const [pause, onChangePause] = React.useState("");
  return (

    <View style={styles.availability}>
      <Image
        style={styles.profileChild}
        contentFit="cover"
        source={require("../../assets/vector-2.png")}
      />
      <View style={[styles.availabilityInner, styles.patientButton1Position]}>
        <View style={styles.frameParent}>
          <View style={[styles.frameWrapper, styles.frameSpaceBlock]}>
            <View style={styles.availabilityWrapper}>
              <Text style={styles.availability1}>Availability</Text>
            </View>
          </View>
          <View style={[styles.frameGroup, styles.frameSpaceBlock]}>
            <View style={styles.frameContainer}>
              <View
                style={[
                  styles.breakDurationParent,
                  styles.durationParentShadowBox,
                ]}
              >
                <Text
                  style={[styles.breakDuration, styles.durationTypo]}
                  numberOfLines={1}
                >
                  Consultation duration
                </Text>
                <View style={[styles.textFieldWrapper, styles.textLayout]}>
                  <View style={[styles.textField1, styles.textPosition]}>
                    <View style={styles.textField2}>
                      <View style={[styles.stateLayer, styles.textPosition]}>
                        <View style={styles.content}>
                          <View style={styles.labelText}>

                            <TextInput
                              style={[styles.labelText1, styles.textTypo]}
                              onChangeText={onChangeDuration}
                              value={duration}
                              placeholder="In Minutes"
                              keyboardType="numeric"
                              // mode="outlined"
                              placeholderTextColor="#ADADAD"
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View
                style={[
                  styles.breakDurationParent,
                  styles.durationParentShadowBox,
                ]}>
                <Text
                  style={[styles.breakDuration, styles.durationTypo]}
                  numberOfLines={1}
                >
                  Break duration
                </Text>
                <View style={[styles.textFieldWrapper, styles.textLayout]}>
                  <View style={[styles.textField1, styles.textPosition]}>
                    <View style={styles.textField2}>
                      <View style={[styles.stateLayer, styles.textPosition]}>
                        <View style={styles.content}>
                          <View style={styles.labelText}>
                            <TextInput
                              style={[styles.labelText1, styles.textTypo]}
                              onChangeText={onChangePause}
                              value={pause}
                              placeholder="In Minutes"
                              keyboardType="numeric"

                              placeholderTextColor="#ADADAD"
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={styles.supportingText}>
                      <Text style={[styles.supportingText1, styles.textTypo]}>
                        Supporting text
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={styles.patientButton}
              onPress={() => navigation.navigate("AvailabilityW", {
                duration: duration,
                pause: pause,
                doctorId: doctorId
              })}
            // title="add Window"
            >
              <View
                style={[styles.patientButton1, styles.patientButton1Position]}
              >
                <View style={styles.stateLayer1}>
                  <AntDesign
                    style={styles.icon}
                    name="pluscircleo"
                    size={20}
                    color="#729384" />

                  <Text style={styles.labelText2}>{`Add Window `}</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  patientButton1Position: {
    // left: 0,
    // top: 0,
    // position: "absolute",
    position: "relative",
    alignItems: "center",
    overflow: "hidden",
  },
  frameSpaceBlock: {

    paddingVertical: 0,
    width: "100%",
    flex: 1,
  },
  durationParentShadowBox: {
    maxHeight: 103,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    paddingVertical: 0,
    alignItems: "center",
    width: "100%",
    flex: 1,
  },
  textLayout: {
    maxHeight: 56,
    maxWidth: 352,
    flex: 1,
  },
  textPosition: {
    // borderBlockColor: "red",
    borderTopRightRadius: Border.br_9xs,
    borderTopLeftRadius: Border.br_9xs,
  },
  durationTypo: {
    maxWidth: 330,
    fontFamily: FontFamily.tajawalMedium,
    fontSize: FontSize.headingsH5_size,
    fontWeight: "500",
    textAlign: "left",
    color: Color.black,
    height: 29,
    width: "100%",
  },
  textTypo: {
    fontFamily: FontFamily.regular12,
    flex: 1,
  },
  availability1: {
    color: Color.green,
    fontSize: FontSize.headingsH4_size,
    fontWeight: "700",
    fontFamily: FontFamily.tajawalBold,
    textAlign: "left",
    // color: Color.black,
    alignSelf: "stretch",
    flex: 1,
  },
  availabilityWrapper: {
    width: 358,
    height: 29,
  },
  frameWrapper: {
    paddingHorizontal: Padding.p_3xs,
    maxHeight: 29,
    maxWidth: 358,
  },
  textField: {
    height: "100%",
    maxHeight: 56,
    maxWidth: 352,
    flex: 1,
  },
  textFieldWrapper: {
    borderRadius: Border.br_mini,
    marginTop: 10,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  consultationDurationParent: {
    paddingHorizontal: Padding.p_5xs,
    maxWidth: 355,
  },
  breakDuration: {
    maxHeight: 29,
    overflow: "hidden",
  },
  labelText1: {
    width: "100%",
    maxWidth: 300,
    // backgroundColor: "red" ,
    fontSize: FontSize.regular16_size,
    maxHeight: 22,
    height: "100%",
  },
  labelText: {
    maxHeight: 25,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
    width: "100%",
    maxWidth: 280,
    paddingRight: 15,
    // backgroundColor: "red",
  },
  content: {
    justifyContent: "center",
    alignSelf: "stretch",
    flex: 1,
  },
  stateLayer: {
    height: 55,
    paddingLeft: Padding.p_base,
    paddingTop: Padding.p_5xs,
    paddingBottom: Padding.p_5xs,
    maxHeight: 55,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  textField2: {
    borderRadius: 15,
    borderStyle: "solid",
    borderColor: Color.green,
    borderWidth: 1,
    alignSelf: "stretch",
    // backgroundColor: "rgba(255, 255, 255, 0.29);",
  },
  supportingText1: {
    fontSize: FontSize.regular12_size,
    color: Color.colorGray_700,
    textAlign: "left",
  },
  supportingText: {
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_9xs,
    display: "none",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  textField1: {
    height: 56,
    flex: 1,
  },
  breakDurationParent: {
    paddingHorizontal: Padding.p_7xs,
    marginTop: 25,
    maxWidth: 358,
  },
  frameContainer: {
    maxHeight: 231,
    maxWidth: 358,
    alignItems: "center",
    width: "100%",
    flex: 1,
  },
  icon: {
    width: 24,
    height: 24,
    overflow: "hidden",
    // backgroundColor: "red",
    alignItems: "center",

  },
  labelText2: {
    fontSize: FontSize.medium14_size,
    fontFamily: FontFamily.medium14,
    color: Color.green,
    textAlign: "center",
    display: "flex",
    maxWidth: 100,
    justifyContent: "center",
    fontWeight: "500",
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  stateLayer1: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  patientButton1: {
    borderRadius: Border.br_81xl,
    width: "100%",
    maxWidth: 352,
    maxHeight: 62,
    minHeight: 40,
    height: "100%",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  patientButton: {
    maxHeight: 32,
    marginTop: 46,
    maxWidth: 358,
    width: "100%",
    flex: 1,
  },
  frameGroup: {
    paddingHorizontal: 5,
    paddingLeft: 18,
    maxHeight: 400,
    height: "100%",
    marginTop: 18,
    maxWidth: 355,
    width: "100%",
    alignItems: "center",
  },
  frameParent: {
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  availabilityInner: {
    width: "100%",
    maxWidth: 350,
    paddingHorizontal: 1,
    paddingTop: 20,
    paddingBottom: 100,
    alignItems: "center",
    minHeight: 500,
    maxHeight: 844,
    height: "100%",
  },
  availability: {
    paddingHorizontal: Padding.p_3xs,
    overflow: "hidden",
    height: "100%",
    minHeight: 600,
    width: "100%",

    // maxWidth:390,
    flex: 1,
    backgroundColor: Color.beige,
  },
  profileChild: {
    bottom: -85,
    left: -262,
    width: 411,
    height: 358,
    position: "absolute",
  },
});

export default Availability;
