import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily, FontSize, Color , Padding } from "../../GlobalStyles";

const PaymentInfo = () => {
  return (
    <View style={[styles.frameParent, styles.parentFlexBox]}>
      <View style={styles.paymentInfoParent}>
        <Text style={styles.paymentInfo} numberOfLines={1}>
          Payment Info
        </Text>
        <View style={[styles.priceParent, styles.parentLayout]}>
          <Text style={[styles.price, styles.textTypo]}>Price</Text>
          <Text style={[styles.text, styles.textTypo]}>$100.00</Text>
        </View>
        <View style={styles.parentLayout}>
          <Text style={[styles.price, styles.textTypo]}>Tax</Text>
          <Text style={[styles.text1, styles.textTypo]}>$0.00</Text>
        </View>
      </View>
      <View style={[styles.totalParent, styles.parentFlexBox]}>
        <Text style={styles.paymentInfo} numberOfLines={1}>
          Total
        </Text>
        <View style={[styles.totalPriceParent, styles.parentLayout]}>
          <Text style={[styles.price, styles.textTypo]}>Total Price</Text>
          <Text style={[styles.text, styles.textTypo]}>$100.00</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    marginTop: 29,
    flex: 1,
    alignSelf: "stretch",
  },
  parentLayout: {
    paddingHorizontal: 9,
    marginTop: 8,
    flexDirection: "row",
    maxHeight: 22,
    maxWidth: 400,
    minWidth: 200,
    width: "100%",
  },
  textTypo: {
    fontFamily: FontFamily.subtitleBodyCaptionCaption1,
    fontWeight: "600",
    textAlign: "left",
    fontSize: FontSize.regular16_size,
  },
  paymentInfo: {
    // backgroundColor:"blue",
    fontWeight: "700",
    fontFamily: FontFamily.headingsH6,
    overflow: "hidden",
    maxHeight: 22,
    maxWidth: 400,
    minWidth: 200,
    textAlign: "left",
    fontSize: FontSize.regular16_size,
    width: "100%",
    color: Color.neutralsDark,
    flex: 1,
  },


  price: {
    color: Color.neutralsGray2,
    flex: 1,
  },
  text: {
    marginLeft: 8,
    color: Color.neutralsDark,
    fontWeight: "600",
  },
  priceParent: {
    alignItems: "center",
  },
  text1: {
    marginLeft: 38,
    color: Color.neutralsDark,
    fontWeight: "600",
  },
  paymentInfoParent: {
    maxHeight: 82,
    flex: 1,
    alignSelf: "stretch",
  },
  totalPriceParent: {
    flex: 1,
  },
  totalParent: {
    maxHeight: 52,
  },
  frameParent: {
    // backgroundColor:"red",
    maxWidth:410,
    minWidth: 230,
    width: "100%",
    height: "100%",
    maxHeight: 160,
    minHeight: 160,
  },
});

export default PaymentInfo;
