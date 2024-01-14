import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
} from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import CartDoctor from "../../components/Specialists/CartDoctor";
import {
  Border,
  FontFamily,
  Padding,
  FontSize,
  Color,
} from "../../GlobalStyles";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { RouteProp } from "@react-navigation/native";
import SearchDoctor from "../../components/Specialists/SearchDoctor";
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
  DoctorListing: {
    specialty: string;
    data: DoctorData[];
    isError: boolean;
    isLoading: boolean;
    isSuccess: boolean;
    refetch: () => void;
  };
};

type DoctorListingNavigationProp = StackNavigationProp<
  YourRouteParamList,
  "DoctorListing"
>;

type DoctorListingRouteProp = RouteProp<YourRouteParamList, "DoctorListing">;

type DoctorListingProps = {
  navigatio: DoctorListingNavigationProp;
  route: DoctorListingRouteProp;
};

const DoctorListing = ({ navigatio, route }: DoctorListingProps) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  console.log(
    route,
    "route from doctorlisting== ======================================================================================================================================================================================================================================================================================================================"
  );

  const [data, setData] = useState<DoctorData[]>(route.params.data);

  console.log(data, "data frpm                   ");

  return (
    <View style={styles.doctorListing}>
      <View style={styles.frameParent}>
        <View style={styles.frameGroup}>
          <View style={[styles.frameContainer, styles.frameLayout3]}>
            <TouchableOpacity
              style={[styles.vectorWrapper, styles.vectorWrapperFlexBox]}
              onPress={() => {
                route.params.refetch();
                navigation.goBack();
                console.log(
                  "refechhhhhhh   hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"
                );
                setData([]);
              }}
            >
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../../assets/GoBack.png")}
              />
            </TouchableOpacity>
            <Text
              style={[styles.findDoctor, styles.text3Typo]}
              numberOfLines={1}
            >
              Find Doctor
            </Text>
          </View>

          <SearchDoctor />
        </View>

        <ScrollView
          style={[styles.frameScrollview, styles.frameLayout1]}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.frameScrollViewContent}
        >
          {route.params.isSuccess &&
            route.params.data.map((doc) => (
              <CartDoctor propMarginTop={{ propMarginTop: 16 }} doctor={doc} />
            ))}

        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "column",
    paddingBottom: 285,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameLayout3: {
    minHeight: 33,
    flex: 1,
  },
  vectorWrapperFlexBox: {
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    alignItems: "center",
  },
  text3Typo: {
    fontFamily: FontFamily.subtitleBodyCaptionCaption1,
    fontWeight: "600",
    textAlign: "left",
  },
  frameLayout1: {
    minWidth: 340,
    flex: 1,
  },

  vectorIcon: {
    width: 15,
    height: 14,
  },
  vectorWrapper: {
    backgroundColor: Color.colorPaleturquoise_300,
    width: 33,
    height: 33,
    padding: Padding.p_9xs,
    justifyContent: "center",
    flexDirection: "row",
  },
  findDoctor: {
    fontSize: FontSize.size_5xl,
    color: Color.darkPurple,
    minWidth: 150,
    maxHeight: 33,
    marginLeft: 24,
    textAlign: "left",
    height: "100%",
    minHeight: 33,
    flex: 1,
    overflow: "hidden",
  },
  frameContainer: {
    maxHeight: 34,
    minWidth: 200,
    flexDirection: "row",
    maxWidth: 370,
    alignItems: "center",
    width: "100%",
  },
  frameGroup: {
    height: "100%",
    minWidth: 330,
    minHeight: 192,
    maxHeight: 230,
    maxWidth: 370,
    width: "100%",
    // backgroundColor: "green",
  },
  frameChild: {
    borderRadius: Border.br_38xl,
    width: 80,
    height: 80,
    overflow: "hidden",
  },
  text2: {
    marginLeft: 6,
    height: 16,
    color: Color.green,
    width: 18,
  },
  ionheartSharpParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  frameWrapper1: {
    backgroundColor: Color.colorPaleturquoise_400,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_9xs,
    minWidth: 54,
    maxWidth: 54,
    alignItems: "flex-end",
    height: "100%",
    borderRadius: Border.br_5xs,
    maxHeight: 24,
    justifyContent: "center",
  },
  chevronForwardIcon: {
    maxWidth: 16,
    maxHeight: 17,
    height: "100%",
    overflow: "hidden",
    flex: 1,
  },
  frameParent5: {
    maxHeight: 26,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  drEmmaMia: {
    minHeight: 22,
    maxHeight: 22,
    color: Color.black,
    fontSize: FontSize.regular16_size,
    overflow: "hidden",
  },
  generalPhysician: {
    color: Color.neutralsGray2,
    marginTop: 2,
    maxWidth: 230,
    textAlign: "left",
    fontFamily: FontFamily.subtitleBodyCaptionCaption1,
    fontWeight: "600",
    width: "100%",
    flex: 1,
  },
  drEmmaMiaParent: {
    minHeight: 40,
    maxHeight: 45,
    marginTop: 4,
    alignSelf: "stretch",
    flex: 1,
  },
  frameParent4: {
    minWidth: 190,
    minHeight: 68,
    maxHeight: 77,
  },
  frameParent3: {
    minWidth: 300,
    minHeight: 77,
    maxWidth: 340,
    alignItems: "center",
  },
  iontimeOutlineIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  wednesday: {
    minWidth: 68,
    maxWidth: 70,
    color: Color.black,
    marginLeft: 8,
    flex: 1,
    textAlign: "left",
    fontFamily: FontFamily.subtitleBodyCaptionCaption1,
    fontWeight: "600",
    height: "100%",
  },
  oct272022: {
    minWidth: 70,
    maxWidth: 72,
    color: Color.black,
    marginLeft: 8,
    flex: 1,
    fontFamily: FontFamily.regular12,
    textAlign: "left",
    height: "100%",
  },
  iontimeOutlineParent: {
    height: 17,
    minWidth: 185,
    minHeight: 17,
    flexDirection: "row",
    alignItems: "center",
  },
  am: {
    textAlign: "right",
    minWidth: 81,
    maxWidth: 85,
    color: Color.black,
    fontFamily: FontFamily.regular12,
  },
  frameParent6: {
    backgroundColor: Color.colorPaleturquoise_200,
    minWidth: 285,
    maxWidth: 321,
    maxHeight: 35,
    marginTop: 12,
    padding: Padding.p_5xs,
    borderRadius: Border.br_9xs,
    minHeight: 33,
    flex: 1,
    width: "100%",
  },
  frameParent2: {
    minWidth: 305,
    minHeight: 124,
    maxHeight: 127,
    flex: 1,
  },
  text3: {
    minWidth: 45,
    maxWidth: 55,
    color: Color.black,
    fontSize: FontSize.regular16_size,
    textAlign: "left",
    flex: 1,
  },
  frameItem: {
    borderColor: Color.neutralsGray6,
    borderRightWidth: 1,
    width: 1,
    height: 28,
    borderStyle: "solid",
  },
  parent: {
    minWidth: 57,
    minHeight: 27,
    maxWidth: 60,
    maxHeight: 27,
    height: "100%",
    flex: 1,
  },
  labelText2: {
    fontSize: FontSize.size_sm,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    minWidth: 122,
    maxWidth: 122,
    textAlign: "center",
    color: Color.green,
    fontFamily: FontFamily.medium14,
    fontWeight: "500",
  },
  stateLayer1: {
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_8xs,
    minWidth: 155,
    minHeight: 29,
    maxWidth: 255,
  },
  patientButton: {
    borderRadius: Border.br_81xl,
    minWidth: 160,
    maxWidth: 270,
    padding: Padding.p_5xs,
    height: "100%",
    justifyContent: "center",
    overflow: "hidden",
  },
  frameParent7: {
    minWidth: 320,
    maxWidth: 330,
    width: "100%",
  },
  frameParent1: {
    borderRadius: Border.br_xs,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 358,
    paddingTop: Padding.p_base,
    minHeight: 189,
    maxHeight: 200,
    marginTop: 16,
    paddingHorizontal: Padding.p_base,
    paddingBottom: Padding.p_9xs,
    alignItems: "center",
    justifyContent: "center",
    maxWidth: 370,
    overflow: "hidden",
    // backgroundColor: Color.neutralsWhite,
    // backgroundColor: "black",
  },
  frameScrollview: {
    borderRadius: 44,
    // borderTopRightRadius: Border.br_9xs,
    // borderTopLeftRadius: Border.br_9xs,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: "100%",
    minHeight: 600,
    height: "100%",
    marginTop: 14,
    alignSelf: "stretch",
    // backgroundColor: "red",
  },

  frameParent: {
    position: "relative",
    // top: 0,
    // left: 0,
    width: "100%",
    paddingHorizontal: Padding.p_mini,
    paddingTop: 59,
    paddingBottom: 71,
    alignItems: "center",
    height: "100%",
    // backgroundColor: "blue",
  },
  doctorListing: {
    overflow: "hidden",
    height: "100%",
    width: "100%",

    flex: 1,
    backgroundColor: Color.neutralsWhite,
    // backgroundColor: "red",
  },
});

export default DoctorListing;
