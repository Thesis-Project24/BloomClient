import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import BookingInfo from "../../components/Confirm Appointment/BookingInfo";
import PaymentInfo from "../../components/Confirm Appointment/PaymentInfo";
import ButtonConfirmPay from "../../components/Confirm Appointment/ButtonConfirmPay";
import { Color, FontFamily, FontSize, Border, Padding } from "../../GlobalStyles";

const ConfirmAppointmentOnline = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.confirmAppointmentOnlineSt, styles.frameViewLayout]}>
      <View style={styles.frameParent}>
       
        <View style={styles.frameGroupFlexBox}>
          <View style={styles.frameContainer}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../../assets/frame-2608495.png")}
            />
            <Pressable
              style={styles.back}
              // numberOfLines={1}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.back1}>Back</Text>
            </Pressable>
          </View>
         
         
          <View style={[styles.frameView, styles.frameViewLayout]}>
           
            <View style={[styles.bookingInfoParent, styles.parentLayout]}>
              <Text style={[
               ,
                styles.bookingInfoTypo
                
                ]}>Booking Info</Text>
             
             
              <BookingInfo />
           
           </View>
            





            <View style={[styles.frameParent1, styles.parentLayout]}>
              <View
                style={[
                  styles.selectAppointmentTypeParent,
                  styles.frameGroupFlexBox,
                ]}
              >
                <Text
                  style={[styles.selectAppointmentType, styles.bookingInfoTypo]}
                  numberOfLines={1}
                >
                  Select Appointment Type
                </Text>
                
                
                <View style={[styles.frameWrapper, styles.frameFlexBox]}>
                  <View style={[styles.frameParent2, styles.frameFlexBox]}>
                    <Pressable
                      style={[styles.framePressable, styles.frameShadowBox]}
                    >
                      <View style={styles.parentShadowBox}>
                        <Image
                          style={styles.vectorIcon}
                          contentFit="cover"
                           source={require("../../assets/vector7.png")}
                        />
                        <Text style={[styles.voiceCall, styles.callFlexBox]}>
                          Voice Call
                        </Text>
                      </View>
                    </Pressable>
                    <Pressable
                      style={[styles.frameWrapper1, styles.frameShadowBox]}
                    >
                      <View style={styles.parentShadowBox}>
                        <Image
                          style={styles.videoIcon}
                          contentFit="cover"
                          source={require("../../assets/video.png")}
                        />
                        <Text style={[styles.videoCall, styles.callFlexBox]}>
                          Video Call
                        </Text>
                      </View>
                    </Pressable>
                  </View>
                </View>
              </View>
             
             
             
             
              <PaymentInfo />
              </View>
         
          </View>
          <Pressable style={[styles.patientButton, styles.frameFlexBox]}>
          <ButtonConfirmPay />
        </Pressable>
        </View>


      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameViewLayout: {
    width: "100%",
    flex: 1,
  },
  parentLayout: {
    
    paddingHorizontal: Padding.p_mini,
    maxWidth: 410,
    width: "100%",
    flex: 1,
  },
  frameGroupFlexBox: {
    width: "100%",
    height:"100%",
    alignItems: "center",
    // backgroundColor:"blue",
    alignSelf: "stretch",
    flex: 1,
  },
  bookingInfoTypo: {
    // backgroundColor:"blue",
    color: Color.neutralsDark,
    fontFamily: FontFamily.headingsH6,
    fontWeight: "700",
    fontSize: FontSize.regular16_size,
    textAlign: "left",
    alignSelf: "stretch",
  },
  frameFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  frameShadowBox: {
    maxWidth: 120,
    height: 38,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    justifyContent: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    borderRadius: Border.br_5xs,
    alignItems: "center",
    flex: 1,
  },
  callFlexBox: {
    marginLeft: 3,
    maxHeight: 43,
    display: "flex",
    textAlign: "center",
    color: "#FFF",
    //  backgroundColor:"red",
    fontFamily: FontFamily.sFProDisplay,
    lineHeight: 40,
    fontSize: FontSize.size_2xs,
    justifyContent: "center",
    fontWeight: "600",
    height: "100%",
    alignItems: "center",
    // overflow: "hidden",
    flex: 1,
  },
  frameChild: {
    width: 32,
    height: 32,
    borderRadius: Border.br_5xs,
  },
  back1: {
    fontSize: FontSize.headingsH4_size,
    fontFamily: FontFamily.subtitleBodyCaptionCaption1,
    color: Color.darkPurple,
    width: 302,
    textAlign: "left",
    fontWeight: "600",
    height: "100%",
    maxHeight: 33,
    overflow: "hidden",
  },
  back: {
    marginLeft: 24,
  },
  frameContainer: {
    // backgroundColor:"black",
    paddingLeft:20,
    maxHeight: 33,
    maxWidth: 390,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    flex: 1,
  },
  bookingInfoParent: {
    maxHeight: 210,
    minHeight:100,
    // backgroundColor: Color.sageGreen,
  },
  selectAppointmentType: {
    minWidth: 210,
    maxHeight: 22,
    width: "100%",
    height:"100%",
    overflow: "hidden",
    flex: 1,
    color: Color.neutralsDark,
    fontFamily: FontFamily.headingsH6,
    fontWeight: "700",
    fontSize: FontSize.regular16_size,
    
  },
  vectorIcon: {
    width: 11,
    height: 11,
  },
  voiceCall: {
    maxWidth: 60,
  },
  parentShadowBox: {
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    justifyContent: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  framePressable: {
    backgroundColor: Color.sageGreen,
  },
  videoIcon: {
    width: 14,
    height: 11,
  },
  videoCall: {
    maxWidth: 70,
  },
  frameWrapper1: {
    backgroundColor: Color.green,
    marginLeft: 10,
  },
  frameParent2: {
    paddingHorizontal: Padding.p_mini,
    paddingVertical: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "stretch",
  },
  frameWrapper: {
    borderRadius: Border.br_xs,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 11,
    elevation: 11,
    height: "100%",
    minHeight:50,
    padding: Padding.p_xs,
    minWidth: 230,
    maxHeight: 56,
    marginTop: 8,
    shadowOpacity: 4,
    shadowOffset: {
      width: 10,
      height: 13,
    },
    justifyContent: "center",
    maxWidth: 420,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.neutralsWhite,
  },

  selectAppointmentTypeParent: {
    // backgroundColor: "red",
    maxHeight: 86,
  },
  frameParent1: {
    // backgroundColor: "green",
    maxHeight: 400,
    minHeight:280,
    height: "100%",
    marginTop:49,
    paddingTop:20,
  },











  frameView: {
     borderRadius: Border.br_5xs,
    // backgroundColor: Color.orangeRangeOrange90,
    width:"100%",
    maxWidth: 430,
    maxHeight: 640,
minHeight:500,
    marginTop: 24,
    height:"100%",
    alignItems: "center",
  },









  patientButton: {
    justifyContent: "center",
    width:"100%",
    minWidth:240,
    maxWidth: 340,
    maxHeight: 48,
    borderRadius: Border.br_5xs,
    // alignSelf: "stretch",
    flex: 1,
    overflow: "hidden",
  },










  frameParent: {
    display: "flex",
    // position: "relative",
    top: 10,
    // left: 0,
     
                // backgroundColor: "red",
    width: "100%",
    maxWidth: 420,
    justifyContent: "space-between",
    // paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 90,
    alignItems: "center",
    // height:"100%",
    maxHeight: 944,


    height:844,

  },


  confirmAppointmentOnlineSt: {
    overflow: "hidden",
    height:"100%",
    maxHeight: 944,
    backgroundColor: Color.neutralsWhite,
    // backgroundColor: "blue",
    width: "100%",
    
  },
});

export default ConfirmAppointmentOnline;
