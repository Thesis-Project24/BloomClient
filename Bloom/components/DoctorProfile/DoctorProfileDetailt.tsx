import * as React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import {
  Padding,
  Color,
  FontFamily,
  FontSize,
  Border,
} from "../../GlobalStyles";

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
type RootStackParamList = {
  EditDoctorProfile: undefined;
  // other screen names
};
const DoctoreDeatailss = ({ data, show }: { data: DoctorData, show: boolean }) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.frameParent, styles.frameParentFlexBox1]}>
      <View style={[styles.frameGroup, styles.frameGroupSpaceBlock]}>
        <View style={[styles.frameContainer, styles.frameParentFlexBox]}>

          {/* edit profile button must be added to user personal profil */}
         { show && <View style= {styles.edit}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("EditDoctorProfile", {
                  id: data.id
                })
              }
              }
              style={[styles.iconsWrapper, styles.parentFlexBox]} >
              <FontAwesome5
                style={styles.icons}
                name="user-edit"
                size={20} color={Color.green} />

            </TouchableOpacity>

          </View> }
          {/* <TouchableOpacity
            onPress={() => {
              navigation.navigate("Profile");
            }}
          >
            <View style={[styles.iconsWrapper, styles.parentFlexBox]}>
              <Image
                style={styles.icons}
                source={require("../../assets/user-1-1.png")}
              />
            </View>
          </TouchableOpacity> */}
          <View style={[styles.doctorInfo, styles.frameParentFlexBox]}>
            <View style={[styles.titleDescription, styles.frameParentFlexBox1]}>
              <Text style={[styles.text, styles.textFlexBox]}>
                Dr. {data.first_name} {data.last_name}
              </Text>
              <Text style={[styles.text1, styles.text1FlexBox]}>
                {data.specialty}, 20 y.e
              </Text>
            </View>
            <View style={[styles.reviews, styles.reviewsFlexBox]}>
              <View style={[styles.vectorWrapper, styles.frameParentFlexBox]}>

                <FontAwesome
                  style={styles.vectorIcon}
                  name="star"
                  size={20}
                  color="#FFD33C" />

              </View>

              <Text style={[styles.kReviews, styles.text1FlexBox]}>
                <Text>
                  <Text style={styles.textTypo}>4.9</Text>
                  <Text style={styles.text1Clr}> (1.7k reviews)</Text>
                </Text>
              </Text>
            </View>
            <View style={[styles.doctorInfoInner, styles.reviewsFlexBox]}>
              <MaterialCommunityIcons
                style={styles.telephone2Icon}
                name="email-fast"
                size={20}
                color="#4F6F52" />
              <Text style={styles.text2}>{data.email}</Text>
              <TouchableOpacity
                style={[styles.telephone2Parent, styles.parentFlexBox]} >

                <Feather
                  style={styles.telephone2Icon}
                  name="phone"
                  size={18}
                  color="#4F6F52"
                />
                <Text style={styles.text3}>+216 {data.phone_number}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={[styles.avatar, styles.groupParentShadowBox]}>
          <Image
            style={styles.avatarChild}
            contentFit="cover"
            source={data.profile_picture}
          />
          <MaterialIcons
            style={styles.avatarItem2}
            name="circle"
            size={34}
            color="white" />
          <MaterialIcons
            style={styles.avatarItem}
            name="circle"
            size={25}
            color="#A1DAD7" />


        </View>
      </View>
      <View style={[styles.frameView, styles.parentFlexBox]}>
        <TouchableOpacity style={styles.frameWrapper}>
          <TouchableOpacity style={[styles.vectorParent, styles.parentFlexBox]}>
            <Feather
              style={styles.vectorIcon1}
              name="phone-call"
              size={18}
              color="white" />
            <Text style={[styles.voiceCall, styles.callTypo]}>Voice Call</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.frameTouchableOpacity, styles.frameShadowBox]}
        >
          <View style={[styles.videoParent, styles.parentFlexBox]}>
            <Ionicons
              style={styles.videoIcon}
              name="videocam"
              size={20}
              color="white" />
            <Text style={[styles.videoCall, styles.callTypo]}>Video Call</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.frameWrapper1, styles.frameShadowBox]}>
          <View style={[styles.vectorGroup, styles.parentFlexBox]}>
            <AntDesign
              style={styles.vectorIcon2}
              name="wechat"
              size={20}
              color="white" />
            <Text style={[styles.videoCall, styles.callTypo]}>Message</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameParentFlexBox1: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  frameGroupSpaceBlock: {
    paddingTop: Padding.p_3xs,
    justifyContent: "flex-end",
  },
  frameParentFlexBox: {
    flex: 1,
    alignSelf: "stretch",
  },
  parentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  textFlexBox: {
    textAlign: "center",
    letterSpacing: 0,
  },
  text1FlexBox: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    alignSelf: "stretch",
  },
  reviewsFlexBox: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  groupParentShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  callTypo: {
    marginLeft: 3,
    maxHeight: 53,
    color: Color.neutralsWhite,
    fontFamily: FontFamily.sFProDisplay,
    lineHeight: 40,
    fontSize: FontSize.size_2xs,
    overflow: "hidden",
    height: "100%",
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontWeight: "600",
    flex: 1,
    alignItems: "center",
  },
  frameShadowBox: {
    marginLeft: 13,
    maxHeight: 38,
    maxWidth: 102,
    height: 38,
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    flex: 1,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    alignItems: "center",
  },
  icons: {
    width: 26,
    height: 26,
  },
  iconsWrapper: {
    width: 355,
    paddingLeft: Padding.p_3xs,
    paddingRight: Padding.p_mid,
    paddingBottom: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
    justifyContent: "flex-end",
  },
  text: {
    fontSize: FontSize.headingsH5_size,
    lineHeight: 22,
    color: Color.charade,
    fontFamily: FontFamily.soraSemiBold,
    fontWeight: "600",
    flex: 1,
    alignSelf: "stretch",
  },
  text1: {
    fontSize: FontSize.medium14_size,
    lineHeight: 24,
    marginTop: 3,
    justifyContent: "center",
    color: Color.manatee,
    fontFamily: FontFamily.soraRegular,
    textAlign: "center",
    letterSpacing: 0,
  },
  titleDescription: {
    height: 49,
    alignItems: "center",
  },
  vectorIcon: {
    width: 20,
    height: 20,
  },
  vectorWrapper: {
    paddingBottom: 30,
    maxWidth: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textTypo: {
    color: Color.charade,
    fontFamily: FontFamily.soraSemiBold,
    fontWeight: "600",
  },
  text1Clr: {
    color: Color.manatee,
    fontFamily: FontFamily.soraRegular,
  },
  kReviews: {
    fontSize: FontSize.regular12_size,
    lineHeight: 14,
    marginLeft: 4,
    textAlign: "left",
  },
  reviews: {
    textAlign: "center",
    // width:"100%",
    width: 139,
    justifyContent: "center",
  },
  telephone2Icon: {
    paddingRight: 23,
    width: 19,
    height: 19,
  },
  text3: {
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.black,
    width: "100%",
    height: "100%",
    maxHeight: 16,
    maxWidth: 85,
    marginLeft: 1,
    textAlign: "left",
  },
  text2: {
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.black,
    width: "100%",
    height: 16,
    maxWidth: 185,
    marginLeft: 2,
    textAlign: "left",
  },
  telephone2Parent: {
    width: "100%",
    maxWidth: 119,
    paddingVertical: Padding.p_12xs,
    maxHeight: 19,
    paddingHorizontal: Padding.p_3xs,
  },
  doctorInfoInner: {
    width: "100%",

    justifyContent: "flex-end",
    marginTop: 12,
  },
  doctorInfo: {
    marginTop: 31,
    alignItems: "center",
  },
  frameContainer: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_smi,
    paddingTop:50,
    zIndex: 0,
    alignItems: "center",
  },
  avatarChild: {
    borderStyle: "solid",
    borderColor: "white",
    borderWidth: 4,
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 40,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    height: "100%",
    position: "absolute",
  },
  avatarItem2: {
    right: -1,
    bottom: -1,
    width: 32,
    height: 32,
    position: "absolute",
  },
  avatarItem: {
    // borderWidth: 5,
    // borderStyle: "solid",
    // borderRadius: 15,
    // borderColor: "white",
    right: -2,
    bottom: -1,
    width: 28,
    height: 28,
    position: "absolute",
  },
  avatar: {
    top: -57,
    left: 127,
    width: 122,
    height: 122,
    zIndex: 1,
    position: "absolute",
  },
  frameGroup: {
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    borderBottomRightRadius: Border.br_8xs,
    borderBottomLeftRadius: Border.br_8xs,
    backgroundColor: Color.neutralsWhite,
    // backgroundColor: Color.beige,
    maxWidth: 360,
    maxHeight: 256,
    height: "100%",
    width: "100%",
    paddingBottom: Padding.p_base,
    paddingHorizontal: Padding.p_3xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    alignItems: "center",
  },
  vectorIcon1: {
    width: 20,
    height: 17,
  },
  voiceCall: {
    maxWidth: 50,
  },
  vectorParent: {
    justifyContent: "center",
    flex: 1,
    alignSelf: "stretch",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  frameWrapper: {
    maxHeight: 38,
    maxWidth: 102,
    height: 38,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.sageGreen,
    justifyContent: "center",
    flex: 1,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    alignItems: "center",
  },
  videoIcon: {
    width: 20,
    height: 20,
  },
  videoCall: {
    maxWidth: 53,
  },
  videoParent: {
    justifyContent: "center",
    flex: 1,
    alignSelf: "stretch",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  frameTouchableOpacity: {
    backgroundColor: Color.green,
  },
  vectorIcon2: {
    width: 22,
    height: 22,
  },
  vectorGroup: {
    justifyContent: "center",
    flex: 1,
    alignSelf: "stretch",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  frameWrapper1: {
    backgroundColor: Color.sageGreen,
    marginLeft: 13,
  },
  frameView: {
    paddingHorizontal: Padding.p_lg,
    paddingVertical: Padding.p_3xs,
    marginTop: 11,
    justifyContent: "center",
    flex: 1,
    alignSelf: "stretch",
  },
  frameParent: {
    height: "100%",
    width: "100%",
    maxHeight: 330,
    alignItems: "center",
  },
  edit:{
    position: "absolute",
    top:22,
    right:2
  }
});

export default DoctoreDeatailss;
