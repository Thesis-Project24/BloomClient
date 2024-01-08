import React, { useState, useEffect } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import PersonalDetails from "../../components/DoctorProfile/PersonalDetails";
import DoctorDetails from "../../components/DoctorProfile/DoctorDetails";
import BusinessAddressDetails from "../../components/DoctorProfile/BusinessAddressDetails";
import {
  Padding,
  Color,
  FontFamily,
  FontSize,
  Border,
} from "../../GlobalStyles";
import Imageprofile from "../../components/DoctorProfile/ImageProfile";
import { useQuery, useQueryClient } from "react-query";
import SaveUpdateButton from "../../components/DoctorProfile/SaveUpdateButton";

const Profile = () => {
  const queryClient = useQueryClient();
  const [doctorData, setDoctorData] = useState({});

  const fetchData = async () => {
    try {
      const res = await fetch(`http://172.29.0.6:3000/doctors/getOne/1`);
      if (!res.ok) throw new Error(res.statusText);
      const jsonData = await res.json();
      return jsonData;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const { data, isError, isLoading, isSuccess } = useQuery("OneDoc", fetchData);

  const upDateData = () => {
    console.log({ id: 1, ...data, ...doctorData }, "update data in fnc ");
    fetch("http://172.29.0.6:3000/doctors/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: 1, ...data, ...doctorData }),
    })
      .then((res) => {
        console.log(res);
        Alert.alert("Updated Successfully!");
      })
      .catch((err) => {
        Alert.alert("Error Updating Data");
        console.log(err, "error");
        // toast.error("Something went wrong! Please try again.")
      })
      .catch((err) => {
        Alert.alert("Error Updating Data");
        console.log(err, "error");
        // toast.error("Something went wrong! Please try again.")
      });
  };
  return (
    <ScrollView style={styles.profile}>
      <Image
        style={styles.profileChild}
        contentFit="cover"
        source={require("../../assets/vector-2.png")}
      />
      {/* <Image
        style={[styles.profileItem, styles.profilePosition]}
        contentFit="cover"
        source={require("../assets/vector-1.png")}
      /> */}
      {/* <View style={styles.vectorParent}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/vector-3.png")}
        />
        <Text style={[styles.yourProfile, styles.yourProfileFlexBox]}>
          Your Profile
        </Text>
      </View> */}

      <View style={[styles.profuleWrapper, styles.profilePosition]}>
        <View style={[styles.profule, styles.chatFlexBox]}>
          {isSuccess && (
            <Imageprofile
              data={data}
              setDoctorData={setDoctorData}
              doctorData={doctorData}
            />
          )}

          <View style={styles.frameView}>
            <View style={styles.frameParent1}>
              {isSuccess && (
                <PersonalDetails
                  data={data}
                  setDoctorData={setDoctorData}
                  doctorData={doctorData}
                />
              )}
              {isSuccess && (
                <DoctorDetails
                  isSuccess={isSuccess}
                  data={data}
                  setDoctorData={setDoctorData}
                  doctorData={doctorData}
                />
              )}
              {isSuccess && (
                <BusinessAddressDetails
                  data={data}
                  setDoctorData={setDoctorData}
                  doctorData={doctorData}
                />
              )}

              <SaveUpdateButton upDateData={upDateData} />
            </View>
            <Pressable style={styles.buttonSaveprofileSelf}>
              <Text
                style={[
                  styles.textlabelLargeLabelMedium1,
                  styles.yourProfileFlexBox,
                ]}
              >
                Save
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image1: {
    alignItems: "flex-end",
    overflow: "hidden",
    alignSelf: "center",
    position: "relative",
    display: "flex",
    marginTop: 10,
    width: 120,
    maxWidth: "100%",
    flexDirection: "column",
    aspectRatio: "1",
  },

  profilePosition: {
    left: 0,
    position: "relative",
  },
  yourProfileFlexBox: {
    height: "100%",
    textAlign: "center",
    alignSelf: "stretch",
  },
  profileInnerSpaceBlock: {
    padding: Padding.p_3xs,
    alignItems: "center",
  },
  parentFlexBox: {
    maxWidth: 120,
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
    flex: 1,
  },
  chatFlexBox: {
    height: "100%",
    alignSelf: "stretch",
    alignItems: "center",
  },
  chat1Typo: {
    maxHeight: 16,
    color: Color.bleck,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    alignSelf: "stretch",
    overflow: "hidden",
    flex: 1,
  },
  profileChild: {
    bottom: -85,
    left: -262,
    width: 411,
    height: 358,
    position: "absolute",
  },
  profileItem: {
    height: 91,
    width: 390,
    top: 0,
    left: 0,
  },
  frameChild: {
    borderRadius: Border.br_10xs,
    width: 10,
    height: 19,
  },
  yourProfile: {
    fontSize: FontSize.size_lg,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorBlack,
    display: "flex",
    width: 277,
    marginLeft: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  vectorParent: {
    top: 56,
    height: 38,
    alignItems: "flex-end",
    paddingHorizontal: 26,
    paddingVertical: 0,
    flexDirection: "row",
    width: 390,
    left: 0,
    position: "absolute",
  },
  profuleChild: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  frameParent1: {
    minWidth: 360,
    width: "100%",
    height: "100%",
  },
  textlabelLargeLabelMedium1: {
    fontSize: FontSize.size_mini,
    letterSpacing: 0.1,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.plusJakartaSansBold,
    color: Color.colorWhite,
    flex: 1,
  },
  buttonSaveprofileSelf: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorPaleturquoise,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 10,
      height: 4,
    },

    // position: "absolute",

    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: "100%",
    height: 719,
    paddingHorizontal: 32,
    paddingVertical: 14,
    marginTop: 430,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },

  frameView: {
    height: "100%",
    minWidth: 600,
    marginTop: 60,
    alignItems: "center",
  },
  profule: {
    height: "100%",
    alignItems: "center",
    flex: 1,
  },

  // HEDHA TEAABA IMG
  profuleWrapper: {
    top: 40,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: 2,
    width: "100%",

    flexDirection: "row",
    overflow: "hidden",
  },

  profile: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.beige,
  },
});

export default Profile;
