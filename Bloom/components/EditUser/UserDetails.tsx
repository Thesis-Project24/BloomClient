import React, { useState, useEffect } from "react";
import { Text, StyleSheet, Pressable, View, TextInput } from "react-native";
import { Image } from "expo-image";
import {
  Padding,
  Color,
  Border,
  FontFamily,
  FontSize,
} from "../../GlobalStyles";
// import DropdownComponent from "./Dropdown";
import { useQueryClient } from "react-query";

interface UserData {
  id?: number;
  phone_number?: string;
  profile_picture?: string;
  first_name?: string;
  last_name?: string;
}

type UserDetailsProps = {
  data: UserData;
  setUserData: (arg: UserData) => void; // Replace UserData with the actual type of the argument
  userData: UserData;
  isSuccess: boolean;
};

const UserDetails: React.FC<UserDetailsProps> = ({ isSuccess,data,setUserData,userData,}) => {
  const queryClient = useQueryClient();

  return (
    <View style={styles.textlabelPersonalDetialsParent}>
      <Text style={styles.textlabelPersonalDetials} numberOfLines={1}>
        User Details
      </Text>

      <View style={styles.frameWrapper}>
        <View style={styles.frameParent}>
          <View style={styles.textlabelStateParent}>
            <View style={styles.frameGroup}>
              {/* {isSuccess && (
                // <DropdownComponent
                //   specialtyData={data}
                //   setDoctorData={setUserData}
                //   doctorData={userData}
                // />
              )} */}

              <View
                style={[
                  styles.textlabelEmailAddressParent,
                  styles.textlabelFlexBox,
                ]}
              >
                <Text
                  style={[styles.textlabelEmailAddress, styles.textlabelLayout]}
                  numberOfLines={1}
                >
                  Phone Number
                </Text>
                <View
                  style={[
                    styles.textlabel450116Wrapper,
                    styles.textlabel450116Border,
                  ]}
                >
                  <TextInput
                    onChangeText={(text) => {
                      setUserData({ ...userData, phone_number: text });
                    }}
                    style={[styles.textlabel450116, styles.textlabelLayout]}
                    placeholder={data?.phone_number || "PhoneNumber"}
                    multiline={true}
                    placeholderTextColor="#242424"
                  />
                </View>
              </View>
              <View
                style={[
                  styles.textlabelEmailAddressGroup,
                  styles.textlabelFlexBox,
                ]}
              >
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.frameChild} />
    </View>
  );
};

const styles = StyleSheet.create({
  textlabelLayout: {
    maxHeight: 20,
    flex: 1,
  },
  textlabelFlexBox: {
    marginTop: 17,
    alignItems: "center",
    flex: 1,
    alignSelf: "stretch",
  },
  textlabel450116Border: {
    paddingHorizontal: Padding.p_mid,
    paddingVertical: Padding.p_3xs,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Color.colorCadetblue,
    borderStyle: "solid",
    backgroundColor: Color.coloGray_100,
    borderRadius: Border.br_5xs,
    flex: 1,
    alignSelf: "stretch",
  },
  textlabelTypo4: {
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    alignSelf: "stretch",
  },
  textlabelPersonalDetials: {
    fontSize: FontSize.size_base,
    minHeight: 28,
    maxHeight: 28,
    overflow: "hidden",
    textAlign: "left",
    color: Color.bleck,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    flex: 1,
    alignSelf: "stretch",
  },
  textlabelState: {
    maxHeight: 15,
    color: Color.colorBlack,
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_xs,
    overflow: "hidden",
    textAlign: "left",
    flex: 1,
    alignSelf: "stretch",
  },
  textlabelMadhyaPradesh: {
    height: "100%",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    lineHeight: 14,
    fontSize: FontSize.size_sm,
    maxHeight: 20,
    color: Color.colorBlack,
    overflow: "hidden",
    textAlign: "left",
  },
  viewVector34Icon: {
    borderRadius: Border.br_10xs,
    width: 20,
    height: 10,
    marginLeft: 10,
  },
  textlabelMadhyaPradeshParent: {
    flexDirection: "row",
    paddingRight: Padding.p_xl,
    maxHeight: 48,
    borderWidth: 1,
    borderColor: Color.colorCadetblue,
    borderStyle: "solid",
    backgroundColor: Color.coloGray_100,
    borderRadius: Border.br_3xs,
    paddingLeft: Padding.p_mini,
    alignItems: "center",
    flex: 1,
    alignSelf: "stretch",
  },
  textlabelMadhyaPradesh1: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    lineHeight: 14,
    fontSize: FontSize.size_sm,
    maxHeight: 20,
    color: Color.colorBlack,
    overflow: "hidden",
    textAlign: "left",
    alignSelf: "stretch",
  },
  textlabelMadhyaPradeshWrapper: {
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_3xs,
    justifyContent: "center",
    maxHeight: 48,
    borderWidth: 1,
    borderColor: Color.colorCadetblue,
    borderStyle: "solid",
    backgroundColor: Color.coloGray_100,
    borderRadius: Border.br_3xs,
    flex: 1,
    alignSelf: "stretch",
  },
  frameGroup: {
    minWidth: 195,
    marginTop: 20,
    borderRadius: Border.br_5xs,
    alignItems: "center",
    flex: 1,
    alignSelf: "stretch",
  },
  textlabelStateParent: {
    paddingRight: Padding.p_95xl,
    flex: 1,
    alignSelf: "stretch",
  },

  textlabelEmailAddress: {
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_xs,
    maxHeight: 20,
    overflow: "hidden",
    textAlign: "left",
    color: Color.bleck,
    alignSelf: "stretch",
  },
  textlabel450116: {
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    alignSelf: "stretch",
  },
  textlabel450116Wrapper: {
    maxHeight: 48,
  },
  textlabelEmailAddressParent: {
    justifyContent: "space-between",
    minHeight: 68,
    maxHeight: 85,
  },
  textlabel4501161: {
    fontSize: FontSize.size_3xs,
    flex: 1,
  },
  textlabel450116Container: {
    maxWidth: 400,
    height: "100%",
    maxHeight: 200,
    marginTop: 30,
  },
  textlabelEmailAddressGroup: {
    maxHeight: 220,
  },
  frameParent: {
    minWidth: 210,
    alignItems: "center",
    flex: 1,
    alignSelf: "stretch",
  },
  frameWrapper: {
    paddingRight: Padding.p_3xs,
    marginTop: 21,
    paddingLeft: Padding.p_mini,
    alignItems: "center",
    flex: 1,
    alignSelf: "stretch",
  },
  frameChild: {
    borderColor: Color.colorSilver_100,
    borderWidth: 0.5,
    maxHeight: 1,
    justifyContent: "center",
    borderStyle: "solid",
    marginTop: 21,
    alignItems: "center",
    flex: 1,
    alignSelf: "stretch",
  },
  textlabelPersonalDetialsParent: {
    // height:"100%",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_9xs,
    maxHeight: 515,
    marginTop: 30,
    flex: 1,
    alignSelf: "stretch",
  },
});

export default UserDetails;
