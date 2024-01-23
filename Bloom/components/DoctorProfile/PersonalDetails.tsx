import React, { useState, useEffect } from "react";
import { Text, StyleSheet, TextInput, View } from "react-native";
import { Button } from "react-native-paper";
import {
  FontFamily,
  FontSize,
  Color,
  Padding,
  Border,
} from "../../GlobalStyles";
import { useQueryClient, useQuery } from "react-query";

interface DoctorData {
  id?: string;
  email?: string;
  first_name?: string;
  last_name?: string;
  specialty?: string;
  profile_picture?: string;
  phone_number?: string;
  address?: string[];
  bio?: string;
}

type PersonalDetailsProps = {
  data: DoctorData
  setDoctorData: (arg: DoctorData) => void;
  doctorData: DoctorData;
};

const PersonalDetails: React.FC<PersonalDetailsProps> = ({data,setDoctorData,doctorData,}) => {
  const queryClient = useQueryClient();

  // const [password, setPassword] = useState("dd")

  return (
    <View
      style={[
        styles.textlabelPersonalDetialsParent,
        styles.textlabelParentFlexBox,
      ]}
    >
      <Text style={styles.textlabelPersonalDetials} numberOfLines={1}>
        Personal Details
      </Text>
      <View style={styles.frameWrapper}>
        <View style={styles.frameParent}>
          <View
            style={[styles.textlabelEmailAddressParent, styles.textlabelLayout]}
          >
            <Text
              style={[styles.textlabelEmailAddress, styles.textlabelTypo]}
              numberOfLines={1}
            >
              Your Username
            </Text>
            <View style={styles.textlabel450116Wrapper}>
              <TextInput
              numberOfLines={1}
                // editable={true} selectTextOnFocus={true}
                onChangeText={(text) => {
                  setDoctorData({ ...doctorData, first_name: text });
                }}
                style={styles.textlabel450116}
                placeholder={ "Username"}
                multiline={true}
                placeholderTextColor="#ADADAD"
             >
              {data?.first_name}
             </TextInput>
            </View>
          </View>
          <View
            style={[styles.textlabelEmailAddressGroup, styles.textlabelFlexBox]}
          >
            <Text
              style={[styles.textlabelEmailAddress, styles.textlabelTypo]}
              numberOfLines={1}
            >
              Your Last Name
            </Text>
            <View style={styles.textlabel450116Border}>
              <TextInput
                onChangeText={(text) => {
                  setDoctorData({ ...doctorData, last_name: text });
                }}
                style={styles.textlabel450116}
                placeholder={ "Last Name"}
                placeholderTextColor="#ADADAD"
              >
                {data?.last_name}
               </TextInput>
            </View>
          </View>
          <View
            style={[styles.textlabelEmailAddressGroup, styles.textlabelFlexBox]}
          >
            <Text
              style={[styles.textlabelEmailAddress, styles.textlabelTypo]}
              numberOfLines={1}
            >
              Email Address
            </Text>
            <View style={styles.textlabel450116Border}>
              <TextInput
                onChangeText={(text) => {
                  setDoctorData({ ...doctorData, email: text });
                }}
                style={styles.textlabel450116}
                placeholder={data?.email || "Email"}
                multiline={true}
                placeholderTextColor="#ADADAD"
              >
                {data?.email}
               </TextInput>
            </View>
          </View>
          <View style={[styles.frameView, styles.textlabelFlexBox]}>
            <Text
              style={[styles.textlabelEmailAddress3, styles.textlabelTypo]}
              numberOfLines={1}
            >
              Password
            </Text>
            <View
              style={[
                styles.textlabel450116Wrapper1,
                styles.textlabel450116Border,
              ]}
            >
              <TextInput
                onChangeText={(text) => {
                  // setPassword(text)
                }}
                style={styles.textlabel450116}
                placeholder="Password"
                multiline={true}
                placeholderTextColor="#ADADAD"
              >
               </TextInput>
            </View>
          </View>

          <Button
            style={[styles.textlabelPassword, styles.textlabelFlexBox]}
            disabled={false}
            uppercase={false}
            mode="text"
            labelStyle={styles.textlabelPasswordBtn}
          >
            Change Password
          </Button>
        </View>
      </View>
      <View style={styles.frameChild} />
    </View>
  );
};

const styles = StyleSheet.create({
  textlabelPasswordBtn: {
    color: "#729384",
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "PlusJakartaSans-SemiBold",
  },
  textlabelParentFlexBox: {
    alignSelf: "stretch",
    flex: 1,
  },
  textlabelLayout: {
    minHeight: 68,
    alignItems: "center",
  },
  textlabelTypo: {
    maxHeight: 15,
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_xs,
    overflow: "hidden",
    textAlign: "left",
    color: Color.bleck,
    alignSelf: "stretch",
  },
  textlabelFlexBox: {
    marginTop: 17,
    flex: 1,
    alignSelf: "stretch",
  },
  textlabel450116Border: {
    height: 48,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_mid,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Color.colorCadetblue,
    borderStyle: "solid",
    backgroundColor: Color.coloGray_100,
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
  },
  textlabelPersonalDetials: {
    fontSize: FontSize.size_lg,
    maxHeight: 28,
    overflow: "hidden",
    textAlign: "left",
    color: Color.bleck,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    flex: 1,
    alignSelf: "stretch",
  },
  textlabelEmailAddress: {
    flex: 1,
  },
  textlabel450116: {
    fontSize: FontSize.size_smi,
    maxHeight: 20,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    flex: 1,
    alignSelf: "stretch",
  },
  textlabel450116Wrapper: {
    maxHeight: 48,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_mid,
    borderWidth: 1,
    backgroundColor: Color.coloGray_100,
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    borderColor: Color.colorCadetblue,
    borderStyle: "solid",
    flex: 1,
    alignSelf: "stretch",
  },
  textlabelEmailAddressParent: {
    justifyContent: "space-between",
    minHeight: 68,
    flex: 1,
    alignSelf: "stretch",
  },
  textlabelEmailAddressGroup: {
    minHeight: 68,
    alignItems: "center",
    justifyContent: "space-between",
  },
  textlabelEmailAddress3: {
    height: 15,
  },
  textlabel450116Wrapper1: {
    marginTop: 5,
  },
  frameView: {
    minHeight: 68,
    alignItems: "center",
  },
  textlabelPassword: {
    maxHeight: 20,
  },
  frameParent: {
    minWidth: 210,
    alignItems: "center",
    flex: 1,
    alignSelf: "stretch",
  },
  frameWrapper: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingLeft: Padding.p_mini,
    paddingRight: Padding.p_3xs,
    marginTop: 21,
    flex: 1,
    alignSelf: "stretch",
  },
  frameChild: {
    borderWidth: 0.5,
    maxHeight: 1,
    justifyContent: "center",
    borderColor: Color.colorCadetblue,
    borderStyle: "solid",
    alignItems: "center",
    marginTop: 21,
    flex: 1,
    alignSelf: "stretch",
  },
  textlabelPersonalDetialsParent: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_9xs,
    maxHeight: 480,
    flex: 1,
  },
});

export default PersonalDetails;
