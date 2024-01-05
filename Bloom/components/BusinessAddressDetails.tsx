import  React , {useState , useEffect } from "react";
import { Text, StyleSheet, TextInput, View , KeyboardAvoidingView } from "react-native";
import { FontFamily, FontSize, Color, Padding, Border  } from "../GlobalStyles";
import { useQueryClient } from 'react-query';

const BusinessAddressDetails = ({data , setDoctorData, doctorData }) => {
  const queryClient = useQueryClient();
  const [address,setAddress]= useState([])
  
    const handelAdress = ()=>{
    if (data) {
      setAddress(data[0].address);   
    }
  }

useEffect(() =>{
   handelAdress()
},[])


  return (
    <KeyboardAvoidingView style={styles.textlabelPersonalDetialsParent}>
      <Text style={styles.textlabelPersonalDetials} numberOfLines={1}>
        Business Address Details
      </Text>
      <View style={styles.frameWrapper}>
        <View style={styles.frameParent}>
          <View style={styles.textlabelEmailAddressParent}>
            <Text
              style={[styles.textlabelEmailAddress, styles.textlabelTypo]}
              numberOfLines={1}
            >
              Pincode
            </Text>
            <View style={styles.textlabel450116Wrapper}>
              <TextInput
               onChangeText={(text) => {
                const newAdress = [...address]
                newAdress[0]=text
                setAddress(newAdress)
                 setDoctorData({...doctorData,address:address})
                 console.log(newAdress,"newAdress rakezzz hybaaaaaaa");
                 console.log(address,"hybaa berasmii rakess");
                 
                 
              }}
                style={styles.textlabel450116}
                placeholder={ address[0]||'Pincode'}
                placeholderTextColor="#242424"
              />
            </View>
          </View>
          <View
            style={[styles.textlabelEmailAddressGroup, styles.frameViewFlexBox]}
          >
            <Text
              style={[styles.textlabelEmailAddress, styles.textlabelTypo]}
              numberOfLines={1}
            >
              Address
            </Text>
            <View style={styles.textlabel450116Border}>
              <TextInput
              onChangeText={(text) => {
                const newAdress = [...address]
                newAdress[1]=text
                setAddress(newAdress)
                setDoctorData({...doctorData,address:address })
              }}
              style={styles.textlabel450116}
              placeholder={ address[1]|| 'Address'}
                placeholderTextColor="#242424"
              />
            </View>
          </View>
          <View
            style={[styles.textlabelEmailAddressGroup, styles.frameViewFlexBox]}
          >
            <Text
              style={[styles.textlabelEmailAddress, styles.textlabelTypo]}
              numberOfLines={1}
            >
              City
            </Text>
            <View style={styles.textlabel450116Border}>
              <TextInput
              onChangeText={(text) => {
                const newAdress = [...address]
                newAdress[2]=text
                setAddress(newAdress)
                setDoctorData({...doctorData,address:address })
              }}
              style={styles.textlabel450116}
              placeholder={ address[2]|| 'City'}
                placeholderTextColor="#242424"
              />
            </View>
          </View>
          <View style={styles.frameViewFlexBox}>
            <Text
              style={[styles.textlabelEmailAddress3, styles.textlabelTypo]}
              numberOfLines={1}
            >
              Country
            </Text>
            <View
              style={[
                styles.textlabel450116Wrapper1,
                styles.textlabel450116Border,
              ]}
            >
              <TextInput
              onChangeText={(text) => {
                const newAdress = [...address]
                newAdress[3]=text
                setAddress(newAdress)
                setDoctorData({...doctorData,address:address })
              }}
              style={styles.textlabel450116}
              placeholder={ address[3] || 'Country'}
                placeholderTextColor="#242424"
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.frameChild} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  textlabelTypo: {
    maxHeight: 15,
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_xs,
    overflow: "hidden",
    textAlign: "left",
    color: Color.bleck,
    alignSelf: "stretch",
  },
  frameViewFlexBox: {
    marginTop: 17,
    minHeight: 68,
    alignItems: "center",
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
    backgroundColor: Color.colorGray_300,
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
  },
  textlabelPersonalDetials: {
    fontSize: FontSize.size_base,
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
    borderColor: Color.colorCadetblue,
    backgroundColor: Color.colorGray_300,
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    borderStyle: "solid",
    flex: 1,
    alignSelf: "stretch",
  },
  textlabelEmailAddressParent: {
    minHeight: 68,
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    alignSelf: "stretch",
  },
  textlabelEmailAddressGroup: {
    justifyContent: "space-between",
    marginTop: 17,
  },
  textlabelEmailAddress3: {
    height: 15,
  },
  textlabel450116Wrapper1: {
    marginTop: 5,
  },
  frameParent: {
    minWidth: 210,
    alignItems: "center",
    flex: 1,
    alignSelf: "stretch",
  },
  frameWrapper: {
    height: 386,
    paddingLeft: Padding.p_mini,
    paddingRight: Padding.p_3xs,
    marginTop: 21,
    alignItems: "center",
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
    paddingHorizontal: 0,
    paddingVertical: Padding.p_9xs,
    maxHeight: 480,
    marginTop: 30,
    flex: 1,
    alignSelf: "stretch",
  },
});

export default BusinessAddressDetails;
