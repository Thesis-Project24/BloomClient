import * as React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const ButtonBooking = () => {
  return (
    <View style={[styles.patientButtonWrapper, styles.patientFlexBox]}>
      <TouchableOpacity style={[styles.patientButton, styles.patientFlexBox]}>
        <View style={[styles.stateLayer, styles.patientFlexBox]}>
          <Text style={styles.labelText}>Book Appointment</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  patientFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  labelText: {
    fontSize: FontSize.medium14_size,
    fontWeight: "700",
    fontFamily: FontFamily.headingsH6,
    color: Color.black,
    textAlign: "center",
  },
  stateLayer: {
    flex: 1,
    backgroundColor: Color.sageGreen,
    flexDirection: "row",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_3xs,
    alignSelf: "stretch",
  },
  patientButton: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.orangeRangeOrange90,
    width: 288,
    height: 48,
    maxWidth: 288,
    maxHeight: 50,
    overflow: "hidden",
    alignItems: "center",
  },
  patientButtonWrapper: {
    height: 74,
    paddingHorizontal: Padding.p_32xl,
    paddingVertical: Padding.p_smi,
    maxHeight: 75,
    marginTop: 46,
    overflow: "hidden",
    alignItems: "center",
    alignSelf: "stretch",
  },
});

export default ButtonBooking;