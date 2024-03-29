import * as React from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import {
  FontSize,
  FontFamily,
  Color,
  Padding,
  Border,
} from "../../GlobalStyles";
import { useNavigation, ParamListBase } from "@react-navigation/native";


import { NavigationProp } from '@react-navigation/native';

type NavigationPropType = NavigationProp<
 Record<string, object>, // Replace this with your RootStackParamList
 'NavBarEdit' // Replace this with your route name
>;

const SaveUpdateButton = ({ upDateData , refetch , id , data }: { refetch:any , upDateData: any , id:number , data:any }) => {
  
  const navigation = useNavigation<NavigationPropType>();
const navigationn=()=>{
  setTimeout(() => {
    navigation.navigate("DoctorPersonalProfile", {
      doctor:data,
    });
  }, 1000);
}
  
  return (
    <View style={[styles.patientButtonWrapper, styles.patientFlexBox]}>
      <TouchableOpacity
        onPress={() => {

          upDateData(id);
          refetch()
          navigationn()

        }}
        style={[styles.patientButton, styles.patientFlexBox]}
      >
        <View style={[styles.stateLayer, styles.patientFlexBox]}>
          <Text style={styles.labelText}>Save</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  patientFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  labelText: {
    fontSize: FontSize.medium14_size,
    fontWeight: "700",
    fontFamily: FontFamily.headingsH6,
    color: Color.black,
    textAlign: "center",
  },
  stateLayer: {
    flex: 1,
    backgroundColor: Color.sageGreen,
    flexDirection: "row",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_3xs,
    alignSelf: "stretch",
  },
  patientButton: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.orangeRangeOrange90,
    width: 288,
    height: 48,
    maxWidth: 288,
    maxHeight: 50,
    overflow: "hidden",
    alignItems: "center",
  },
  patientButtonWrapper: {
    height: 74,
    paddingHorizontal: Padding.p_32xl,
    paddingVertical: Padding.p_smi,
    maxHeight: 75,
    marginTop: 46,
    overflow: "hidden",
    alignItems: "center",
    alignSelf: "stretch",
  },
});

export default SaveUpdateButton;
