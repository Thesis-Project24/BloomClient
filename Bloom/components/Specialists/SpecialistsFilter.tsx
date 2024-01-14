import React, { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Padding, Color, Border, FontSize, FontFamily } from "../../GlobalStyles";
import { useFetchDocSpecialists } from "../../api/doctors/Doctors";
import { QueryFunctionContext } from 'react-query';
import { useQuery, useQueryClient } from "react-query";
import { useNavigation } from "@react-navigation/core";
const Specialists = () => {
  const navigation: any = useNavigation()
  const [specialty, setSpecialty] = useState<string>("")
  const { data, isError, isLoading, isSuccess, refetch } = useQuery(['DoctorSpecialists', specialty], (context: QueryFunctionContext<["DoctorSpecialists", string]>) => {
    // Extract specialty from context
    const specialty = context.queryKey[1];
    // Check if specialty is defined
    if (specialty !== undefined) {
      return useFetchDocSpecialists(specialty);
    }     

  });
      
   


  return (
    <View style={styles.frameParent}>
      <TouchableOpacity
        onPress={() => {
          refetch();
          setSpecialty("Psychiatry");
          if (isSuccess && specialty) {
            navigation.navigate("DoctorListing", {
              data: data,
              isSuccess: isSuccess,
              refetch: refetch,
              isLoading: isLoading,
              isError: isError,
            });
          }
        }}
        style={[styles.frameWrapper, styles.frameWrapperLayout]}
      >
        <View style={styles.psychiatryFlexBox}>
          <Image
            style={styles.mentalHealthIcon}
            contentFit="cover"
            source={require("../../assets/mental-health.png")}
          />
          <Text style={[styles.psychiatry, styles.psychiatryFlexBox]}>
            Neuropsychiat
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          refetch();
          setSpecialty("Neuropsychiatry");
          navigation.navigate("DoctorListing", {
            data: data,
            isSuccess: isSuccess,
            refetch: refetch,
            isLoading: isLoading,
            isError: isError,
          });
          console.log(data, "Neuropsychiatryyyyyyyyyyyyyyyyyyyy");
        }}
        style={[styles.frameContainer, styles.frameWrapperLayout]}
      >
        <View style={styles.psychiatryFlexBox}>
          <Image
            style={styles.artificialIntelligenceIcon}
            contentFit="cover"
            source={require("../../assets/artificial-intelligence.png")}
          />
          <Text style={[styles.psychiatry, styles.psychiatryFlexBox]}>
            Psychiatry
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setSpecialty("Psychology");
          navigation.navigate("DoctorListing", {
            data: data,
            isSuccess: isSuccess,
            refetch: refetch,
            isLoading: isLoading,
            isError: isError,
          });
          console.log(data, "Psychologyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy");
          refetch();
        }}
        style={[styles.frameView, styles.frameWrapperLayout]}
      >
        <View style={styles.psychiatryFlexBox}>
          <Image
            style={styles.psychologyIcon}
            contentFit="cover"
            source={require("../../assets/psychology.png")}
          />
          <Text style={[styles.psychiatry, styles.psychiatryFlexBox]}>
            {" "}
            Psychology{" "}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setSpecialty("Psychotherapy");
          navigation.navigate("DoctorListing", {
            data: data,
            isSuccess: isSuccess,
            refetch: refetch,
            isLoading: isLoading,
            isError: isError,
          });

          console.log(data, "Psychotherapyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy");
          refetch();
        }}
        style={[styles.frameWrapper1, styles.frameWrapperLayout]}
      >
        <View style={styles.psychiatryFlexBox}>
          <Image
            style={styles.psychologyIcon}
            contentFit="cover"
            source={require("../../assets/therapy.png")}
          />
          <Text style={[styles.psychiatry, styles.psychiatryFlexBox]}>
            Psychotherapy
          </Text>
        </View>
      </TouchableOpacity>

      <Image
        style={[styles.frameChild, styles.framePosition]}
        contentFit="cover"
        // source={require("../../assets/Line 5.png")}
      />
      <Image
        style={[styles.frameItem, styles.framePosition]}
        contentFit="cover"
        // source={require("../../assets/Line 5.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameWrapperLayout: {
    maxWidth: 127,
    minHeight: 111,
    minWidth: 111,
    padding: Padding.p_3xs,
    height: 127,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.sageGreen,
    borderRadius: Border.br_3xs,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  psychiatryFlexBox: {
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  framePosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  mentalHealthIcon: {
    width: 43,
    height: 43,
    overflow: "hidden",
  },
  psychiatry: {
    fontSize: FontSize.size_sm,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: FontFamily.tajawalBold,
    color: Color.black,
    textAlign: "center",
    display: "flex",
    maxHeight: 20,
    marginTop: 10,
    overflow: "hidden",
  },
  frameWrapper: {
    zIndex: 0,
    width: 127,
    minHeight: 111,
    minWidth: 111,
    padding: Padding.p_3xs,
    height: 127,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.sageGreen,
    borderRadius: Border.br_3xs,
  },
  artificialIntelligenceIcon: {
    width: 53,
    height: 53,
    overflow: "hidden",
  },
  frameContainer: {
    width: 121,
    zIndex: 1,
    minHeight: 111,
    minWidth: 111,
    padding: Padding.p_3xs,
    height: 127,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.sageGreen,
    borderRadius: Border.br_3xs,
  },
  psychologyIcon: {
    width: 64,
    height: 64,
    overflow: "hidden",
  },
  frameView: {
    zIndex: 2,
    width: 127,
    minHeight: 111,
    minWidth: 111,
    padding: Padding.p_3xs,
    height: 127,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.sageGreen,
    borderRadius: Border.br_3xs,
  },
  frameWrapper1: {
    zIndex: 3,
    width: 127,
    minHeight: 111,
    minWidth: 111,
    padding: Padding.p_3xs,
    height: 127,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.sageGreen,
    borderRadius: Border.br_3xs,
  },
  frameChild: {
    marginTop: -150,
    marginLeft: 0,
    maxWidth: "100%",
    height: 300,
    zIndex: 4,
    overflow: "hidden",
  },
  frameItem: {
    marginTop: 0,
    marginLeft: -85,
    maxHeight: "100%",
    width: 370,
    zIndex: 5,
  },
  frameParent: {
    width: "100%",
    flexWrap: "wrap",
    paddingHorizontal: 35,
    paddingVertical: 10,
    minWidth: 360,
    minHeight: 300,
    maxWidth: 420,
    maxHeight: 350,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
    // backgroundColor: "blue",
    gap: 30
  },
});

export default Specialists;
