import React, { forwardRef, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border, Padding } from "../../GlobalStyles";
import BottomSeheet, { BottomSheetBackdrop, BottomSheetTextInput, BottomSheetFooter } from "@gorhom/bottom-sheet"
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { Fontisto } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
// import { ParamListBase } from '@react-navigation/native';


type Ref = BottomSheetMethods
type StackParamList = {
  Home: undefined; // Add other routes here
  // ...
};
type Props = {
  handlePasswordReset: (email: string) => Promise<void>;
  handelError:boolean;
  success:boolean;
};

const ForgotPassword = forwardRef<BottomSheetMethods, Props>((props, ref) => {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>()
  const { handlePasswordReset } = props;
  const {handelError} = props
  const [email, setEmail] = useState<string>("");
  const [isEmailEmpty, setIsEmailEmpty] = useState<boolean>(false);
const {success}= props;
  const handleEmailChange = (text: string) => {
    setEmail(text);
    setIsEmailEmpty(text.trim() === ''); // Check if the trimmed text is empty


  };


  const snapPoints = useMemo(() => ["1%","45%", "60%", "70%", "80%", "83%"], [])
  // const ref = useRef<BottomSeheet>(null)
  // const handelOpen = (index: number) => { ref.current?.snapToIndex(index) }


  // useEffect(() => {
  // ref?.current?.close()
  // }, [])    


  const renderBackdrop = useCallback(
    (props: any) => <BottomSheetBackdrop appearsOnIndex={2} disappearsOnIndex={0} {...props} />

    , []);
  const renderFooter = useCallback(
    (props: any) => (
      <BottomSheetFooter {...props} bottomInset={24}>
        <Image
          style={styles.forgotPasswordItem}
          contentFit="cover"
          source={require("../../assets/vector-2.png")}
        />
      </BottomSheetFooter>
    ),
    []
  );
  // useEffect(() => {
    // ref?.current.close()
  //   }, [])
    // ref.current?.close()




  return (
    // <View style={styles.forgotPassword}>
    //   <Text onPress={() => {
    //     handelOpen(0)
    //   }} >ForgotPassword</Text>

    <BottomSeheet

      handleIndicatorStyle={{ backgroundColor: Color.green, width: 100, }}
      backgroundStyle={{ backgroundColor: Color.beige }}
      enablePanDownToClose={true}



      ref={ref}
      backdropComponent={renderBackdrop}
      footerComponent={renderFooter}
      // style={{}} 
      snapPoints={snapPoints}  >
      <View style={styles.forgotPasswordChild} />
      <View style={styles.frameParent}>
        <View style={styles.frameChild} />
        <View style={[styles.frameGroup, styles.frameFlexBox]}>
          <View style={[styles.frameContainer, styles.frameFlexBox]}>
            <View style={styles.forgotPasswordParent}>
              <Text
                style={[styles.forgotPassword1, styles.enterYourEmailFlexBox]}
              >
                Forgot Password
              </Text>
              <Text
                style={[styles.enterYourEmail, styles.enterYourEmailFlexBox]}
              >
                Enter your Email
              </Text>
            </View>
            <View style={[styles.Email]} >
            <View style={[styles.frameWrapper, styles.wrapperFlexBox,
            isEmailEmpty ? {
              borderColor: 'red',
              borderWidth: 1,
              // borderColor: Color.colorCadetblue,
              borderStyle: "solid",
            } : null,
            handelError ? {
              borderColor: 'red',
              borderWidth: 1,
              // borderColor: Color.colorCadetblue,
              borderStyle: "solid",
            } : null
            
            ]}>
              
              <View style={styles.iconsParent}>
                {/* <Image
                  style={styles.icons}
                  contentFit="cover"
                //  source={require("../../assets/icons4.png")}
                /> */}
                <Fontisto  name="email" size={24} color="#c7c7c7" />
                <BottomSheetTextInput
                  onChangeText={handleEmailChange}
                  style={[
                    styles.eMail,

                  ]}
                  placeholder="Email"
                  keyboardType="email-address"
                  // autoCapitalize="sentences"
                  // secureTextEntry={true}
                  placeholderTextColor="#c7c7c7"

                />
                
              </View>
             
            </View>
            <Text
                style={[styles.enterYourEmailL, styles.enterYourEmailFlexBox]}
              >
               { handelError ? `Please Enter a Valid Email Address` : null}
              </Text>
           </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              
              handlePasswordReset(email)
              setTimeout(()=>{
                if(success)navigation.navigate('Success')
              },1000)
              
            }}
            style={[styles.sendACodeWrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.sendACode, styles.sendACodeTypo]}>
              Send a code
            </Text>
          </TouchableOpacity>
        </View>
      </View>

    </BottomSeheet>
    // </View>
  );
})

const styles = StyleSheet.create({
  Email:{
    justifyContent: "flex-start",
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
    // gap:1,
    // backgroundColor:"yellow",
  },


  frameFlexBox: {
    justifyContent: "flex-start",
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
    gap:30
  },
  enterYourEmailFlexBox: {
    textAlign: "left",
    alignSelf: "stretch",
    flex: 1,
  },
  wrapperFlexBox: {
    justifyContent: "center",
    flex: 1,
  },
  sendACodeTypo: {
    color: Color.black,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    fontSize: FontSize.headingsH5_size,
  },
  forgotPasswordChild: {
    marginTop: -422,
    marginLeft: -195,
    top: "50%",
    left: "50%",
    backgroundColor: Color.black,
    opacity: 0.5,
    position: "absolute",
  },
  frameChild: {
    borderRadius: Border.br_xl,
    // backgroundColor: Color.green,
    alignItems: "center",
  },
  forgotPassword1: {
    color: Color.black,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    fontSize: FontSize.headingsH5_size,
  },
  enterYourEmailL:{
    fontSize: FontSize.regular12_size,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: "red",
    // marginTop: 9,
    // backgroundColor:"red",
    maxHeight: 20,
  },
  enterYourEmail: {
    fontSize: FontSize.regular12_size,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorSilver_300,
    marginTop: 10,
    // backgroundColor:"red",
    maxHeight: 30,
  },
  forgotPasswordParent: {
    maxHeight: 55,
    alignSelf: "stretch",
    flex: 1,
  },
  icons: {
    width: 15,
    height: 11,
  },
  eMail: {
    height: "100%",
    fontFamily: FontFamily.latoRegular,
    fontSize: FontSize.size_mini,
    maxHeight: 20,
    marginLeft: 8,
    flex: 1,
  },
  iconsParent: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
    paddingHorizontal:17,
  },
  frameWrapper: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.neutralsWhite,
    paddingLeft: 5,
    // paddingTop: Padding.p_3xs,
    paddingRight: Padding.p_base,
    // paddingBottom: Padding.p_3xs,
    maxHeight: 50,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
  
  },
  frameContainer: {
    maxHeight: 220,
    // backgroundColor:"green"
  },
  sendACode: {
    textAlign: "center",
    width: 113,
    height: 24,
  },
  sendACodeWrapper: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.sageGreen,
    maxWidth: 208,
    maxHeight: 53,
    alignItems: "center",
    width: "100%",
  },
  frameGroup: {
    marginTop: 28,
  },
  frameParent: {
    // top: 485,
    // left: 0,
    // borderTopLeftRadius: Border.br_11xl,
    // borderTopRightRadius: Border.br_11xl,
    // maxWidth: 390,
    maxHeight: 359,
    height: "100%",
    width: "100%",
    paddingLeft: 36,
    paddingTop: Padding.p_5xs,
    paddingRight: Padding.p_5xl,
    paddingBottom: 42,
    alignItems: "center",
    position: "relative",
    backgroundColor: Color.beige,
  },
  forgotPasswordItem: {
    // top: 636,
    bottom: -130,
    left: -280,
    width: 414,
    height: 362,
    position: "absolute",
  },
  forgotPassword: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.green,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",

  },
});

export default ForgotPassword;
