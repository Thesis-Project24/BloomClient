import * as React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../../GlobalStyles";

const ButtonConfirmPay = () => {
  return (
    <Pressable style={styles.stateLayer}>
      <Text style={styles.labelText}>{`Confirm & Pay $100.00`}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  labelText: {
    fontSize: FontSize.medium14_size,
    fontWeight: "500",
    fontFamily: FontFamily.medium14,
    color: Color.neutralsWhite,
    textAlign: "center",
  },
  stateLayer: {
    
    width:"100%",
    // maxWidth: 20,
    maxHeight: 48,
    
    alignSelf: "stretch",
    flex: 1,
    backgroundColor: Color.green,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_3xs,
  },
});

export default ButtonConfirmPay;
