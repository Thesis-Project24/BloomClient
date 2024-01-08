import * as React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 

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



const DoctoreDeatailss = (  {data } : {data: DoctorData}) => {
  const navigation:any= useNavigation()


  return (
    <View style={[styles.frameParent, styles.frameParentFlexBox1]}>
      <View style={[styles.frameGroup, styles.frameGroupSpaceBlock]}>
        <View style={[styles.frameContainer, styles.frameParentFlexBox]}>
          <View >
            {/* <Image
              style={styles.icons}
              contentFit="cover"
              // source={ data.profile_picture }
                source={require("../assets/group-group.png")}
              // source={{
              //   uri: 'data:image/png;base64,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',
              // }}
      

            /> */}
            <TouchableOpacity 
             onPress={() => navigation.navigate("Profile")}
            style={[styles.iconsWrapper, styles.parentFlexBox]} >
            <FontAwesome5 
          style={styles.icons}
          name="user-edit" 
          size={20} color={Color.green} />

            </TouchableOpacity>
          
          </View>
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
                {/* <Image
                  style={styles.vectorIcon}
                  contentFit="cover"
                  source={require("../assets/vector8.png")}
                /> */}
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
                style={[styles.telephone2Parent, styles.parentFlexBox]}
              >
                {/* <Image
                  style={styles.telephone2Icon}
                  contentFit="cover"
                  source={ data.profile_picture }
                //   source={require("../assets/telephone-2@3x.png")}
                /> */}
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
            source={ data.profile_picture }
            // source={require("../assets/rectangle-56471.png")}
          />
          <Image
            style={styles.avatarItem}
            contentFit="cover"
            // source={require("../assets/ellipse-714.png")}
          />
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
            {/* <Image
              style={styles.vectorIcon1}
              contentFit="cover"
              source={require("../assets/vector9.png")}
            /> */}
            <Text style={[styles.voiceCall, styles.callTypo]}>Voice Call</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.frameTouchableOpacity, styles.frameShadowBox]}>
          <View style={[styles.videoParent, styles.parentFlexBox]}>
          <Ionicons 
           style={styles.videoIcon}
          name="videocam" 
          size={20} 
          color="white" />
            {/* <Image
              style={styles.videoIcon}
              contentFit="cover"
              // source={require("../assets/video@3x.png")}
            /> */}
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
            {/* <Image
              style={styles.vectorIcon2}
              contentFit="cover"
              // source={require("../assets/vector10.png")}
            /> */}
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
    paddingRight:23,
    width: 19,
    height: 19,
  },
  text3: {
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.black,
    width: "100%",
    height:"100%",
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
    width:"100%",
    height: 16,
    maxWidth: 185,
    marginLeft: 2,
    textAlign: "left",
  },
  telephone2Parent: {
    width:"100%",
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
    borderRadius: 25,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    height: "100%",
    position: "absolute",
  },
  avatarItem: {
    right: -6,
    bottom: -5,
    width: 23,
    height: 23,
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
    width:"100%",
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
    width:"100%",
    maxHeight: 330,
    alignItems: "center",
  },
});

export default DoctoreDeatailss;
