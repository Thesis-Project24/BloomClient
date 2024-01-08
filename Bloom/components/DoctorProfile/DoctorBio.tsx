import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import {
  FontFamily,
  Color,
  FontSize,
  Border,
  Padding,
} from "../../GlobalStyles";
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
}

const DoctorBio = ({ data }: { data: DoctorData }) => {
  return (
    <View style={[styles.history, styles.bioFlexBox]}>
      <View style={styles.bioFlexBox}>
        <Text style={styles.text}>Doctor bio</Text>
        <Text style={[styles.text1, styles.textLayout]} numberOfLines={20}>
          {data?.bio}
          <Text style={[styles.text2, styles.textLayout]} numberOfLines={1}>
            {" Read more"}
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  history: {
    minHeight: 230,
    width: "100%",
    height: "100%",
    borderTopLeftRadius: Border.br_13xl,
    borderTopRightRadius: Border.br_13xl,
    borderBottomRightRadius: Border.br_8xs,
    borderBottomLeftRadius: Border.br_8xs,
    backgroundColor: Color.beige,
    paddingLeft: 20,
    padding: Padding.p_xl,
    maxHeight: 230,
  },
  bioFlexBox: {
    maxHeight: 260,
    alignItems: "center",
    flex: 1,
    width: "100%",
    height: "100%",
    alignSelf: "stretch",
  },
  textLayout: {
    height: "100%",
    marginTop: 4,
    overflow: "hidden",
    fontFamily: FontFamily.soraRegular,
    lineHeight: 20,
    letterSpacing: 0,
    maxWidth: 345,
    textAlign: "left",
    width: "100%",
    flex: 1,
  },
  text: {
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: FontFamily.soraSemiBold,
    color: Color.charade,
    maxWidth: 345,
    textAlign: "left",
    width: "100%",

    fontSize: FontSize.medium14_size,
  },
  text1: {
    color: Color.colorGray_800,
    fontSize: FontSize.medium14_size,
    marginTop: 4,
    overflow: "hidden",
    fontFamily: FontFamily.soraRegular,
    lineHeight: 20,
    letterSpacing: 0,
    height: "100%",
  },
  text2: {
    //  paddingLeft:20,
    fontSize: FontSize.regular12_size,
    color: Color.green,
    maxHeight: 20,
    height: "100%",
  },
});

export default DoctorBio;
