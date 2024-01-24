import React, { useState, useEffect } from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View, StatusBar, SafeAreaView, ScrollView, TouchableOpacity, Alert } from "react-native";
import PersonalDetails from "../../components/DoctorProfile/PersonalDetails";
import DoctorDetails from "../../components/DoctorProfile/DoctorDetails";
import BusinessAddressDetails from "../../components/DoctorProfile/BusinessAddressDetails";
import { Padding, Color, FontFamily, FontSize, Border } from "../../GlobalStyles";
import Imageprofile from "../../components/DoctorProfile/ImageProfile";
import { useQuery, useQueryClient, QueryFunctionContext } from "react-query";
import SaveUpdateButton from "../../components/DoctorProfile/SaveUpdateButton";
import { Ionicons } from '@expo/vector-icons';
import { useFetchOneDoctor } from "../../api/doctors/Doctors";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from '@react-navigation/native';
import NavBarEdit from "../../components/DoctorProfile/NavBarEditDoctor";
import DrawerScreen from "../SideBar.tsx/DrawerScreen";
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


type YourRouteParamList = {
  OneDoctor: {
    id: number
  };
};

type OneDoctorNavigationProp = StackNavigationProp<YourRouteParamList, 'OneDoctor'>;

type OneDoctorRouteProp = RouteProp<YourRouteParamList, 'OneDoctor'>;

type OneDoctorProps = {
  navigation: OneDoctorNavigationProp;
  route: OneDoctorRouteProp;

};




const EditDoctorProfile = ({ navigation, route }: OneDoctorProps) => {
  const queryClient = useQueryClient();
  const [doctorData, setDoctorData] = useState({});
  const [id, setId] = useState(route.params.id)
  const { data, isError, isLoading, isSuccess, refetch } = useQuery(['OneDoctor', id], (context: QueryFunctionContext<["OneDoctor", number]>) => {
    // Extract id from context
    const id = context.queryKey[1];
    // Check if id is defined
    if (id !== undefined) {
      // Call useFetchDocSpecialists with id
      return useFetchOneDoctor(id);
    }
  });
  // const { data, isError, isLoading, isSuccess ,refetch } = useQuery('OneDoctor', useFetchOneDoctor);
  console.log(data, "data from edit doctors");

  const upDateData = (id: number) => {
    console.log({ id: id, ...data, ...doctorData }, "update data in fnc ");
    fetch(`http://${process.env.EXPO_PUBLIC_ipadress}:3000/doctors/update`, {
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
    <DrawerScreen>
     <NavBarEdit page={"Your Profile"}/>
   
    <ScrollView style={styles.profile}>
      <Image
        style={styles.profileChild}
        contentFit="cover"
        source={require("../../assets/vector-2.png")}
      />
      {/* <Image
        style={[styles.profileItem, styles.profilePosition]}
        contentFit="cover"
        source={require("../../assets/vector-1.png")}
      />

      <View style={styles.vectorParent}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <Ionicons
            style={styles.frameChild}
            name="chevron-back"
            size={35}
            color={Color.black} />
        </TouchableOpacity>


        <Text style={[styles.yourProfile, styles.yourProfileFlexBox]}>
          Your Profile
        </Text>
      </View> */}



      <View style={[styles.profuleWrapper, styles.profilePosition]}>
        <View style={[styles.profule, styles.chatFlexBox]}>
          {/* {isSuccess && ( */}
          <Imageprofile
            data={data}
            setDoctorData={setDoctorData}
            doctorData={doctorData}
          />
          {/* // )} */}

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

              <SaveUpdateButton refetch={refetch} upDateData={upDateData} id={id} />
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
    </DrawerScreen>
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
    // left: 0,
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
    // paddingBottom:50,
    // marginBottom:50,
    height: 91,
    width: "100%",
    // backgroundColor:"red",
    top: 0,
    left: 0,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 10,
      height: 4,
    },

    // position: "absolute",

    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  frameChild: {
    borderRadius: Border.br_10xs,
    width: 30,
    height: 50,
  },
  yourProfile: {
    fontSize: FontSize.size_lg,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.black,
    display: "flex",
    width: 277,
    marginLeft: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  vectorParent: {
    // top: 46,
    // height: 38,
    // marginTop:20,
    alignItems: "flex-end",
    paddingHorizontal: 26,
    paddingVertical: 0,
    flexDirection: "row",
    width: "100%",
    // left: 0,
    // position: "absolute",
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
    // marginTop: 40,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: 12,
    width: "100%",
    height: "100%",
    flexDirection: "row",
    overflow: "hidden",
    // backgroundColor: "red",
  },

  profile: {
    // minHeight:1000,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.beige,
  },
});

export default EditDoctorProfile;
