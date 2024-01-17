import React , {useState} from "react";  
import { StatusBar, StyleSheet, ScrollView, View, Text } from "react-native";
import DoctoreDeatailss from "../../components/DoctorProfile/DoctorProfileDetailt";
import DoctorBio from "../../components/DoctorProfile/DoctorBio";
import BookAppointment from "../../components/DoctorProfile/BookAppointment";
import ButtonBooking from "../../components/DoctorProfile/ButtonBooking";
import { FontSize , FontFamily, Color, Padding , Border } from "../../GlobalStyles";
import { useQuery , useQueryClient , QueryFunctionContext } from "react-query";
import { useFetchOneDoctor } from "../../api/doctors/Doctors";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from '@react-navigation/native';

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
   id:number
  };
};

type OneDoctorNavigationProp = StackNavigationProp<YourRouteParamList, 'OneDoctor'>;

type OneDoctorRouteProp = RouteProp<YourRouteParamList, 'OneDoctor'>;

type OneDoctorProps = {
  navigation: OneDoctorNavigationProp;
  route: OneDoctorRouteProp;

};


const DoctorProfile = ({ navigation, route }: OneDoctorProps) => {

  
     const [id,setId] = useState(route.params.id)
  const { data, isError, isLoading, isSuccess } = useQuery(['OneDoctor', id], (context: QueryFunctionContext<["OneDoctor", number]>) => {
    // Extract id from context
    const id = context.queryKey[1];  
    // Check if id is defined
    if (id !== undefined) {
      // Call useFetchDocSpecialists with id
      return useFetchOneDoctor(id);
    } 
    });
      console.log(data, "DoctorProfile");
  return (
    <View style={[styles.profileDoctorRaja, styles.textFlexBox]}>
      <View style={[styles.profileDoctorRajaInner, styles.doctorPosition]}>
        <View style={styles.frameParent}>
          {/* <StatusBar
            // style={styles.frameFlexBox}
            barStyle="dark-content"
            translucent={true}
          /> */}
          <ScrollView
            style={[styles.frameGroup, styles.frameFlexBox]}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.frameScrollViewContent}
          >
            {isSuccess && <DoctoreDeatailss data={data} />}
            <View style={[styles.historyParent, styles.frameFlexBox]}>
              {isSuccess && <DoctorBio data={data} />}
              <BookAppointment />
            </View>
          </ScrollView>
        </View>
      </View>
    
    </View>
  );
};

const styles = StyleSheet.create({

  frameScrollViewContent: {
    minHeight: 1561,
    width: "100%",
    height: "100%",
    flexDirection: "column",
    paddingLeft: 8,
    paddingTop: 69,
    paddingRight: 12,
    paddingBottom: 62,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textFlexBox: {
    overflow: "hidden",
    flex: 1,
  },
  doctorPosition: {
    left: 0,
    // position: "absolute",
    alignItems: "center",
  },
  frameFlexBox: {
    width: "100%",
    height: "100%",
    alignSelf: "stretch",
    flex: 1,
  },
  textLayout: {
    marginTop: 8,
    maxWidth: 345,
    textAlign: "left",
    width: "100%",
  },
  historyParent: {
    maxHeight: 682,
    marginTop: 46,
  },
  frameGroup: {
    width: "100%",
    height: "100%",
    maxHeight: 1400,
    marginTop: 49,
  },
  frameParent: {
    maxWidth: 390,
    maxHeight: 1561,
    alignItems: "center",
    width: "100%",
    height: "100%",
    flex: 1,
  },

  profileDoctorRajaInner: {
    top: 10,
    width: "100%",
    alignItems: "center",
    height: "100%",
  },
  doctorBio: {
    fontSize: FontSize.regular16_size,
    fontWeight: "700",
    fontFamily: FontFamily.headingsH6,
    color: Color.charade,
    maxHeight: 30,
    maxWidth: 345,
    textAlign: "left",
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
  drSarahWilliams: {
    fontSize: FontSize.medium14_size,
    fontWeight: "600",
    fontFamily: FontFamily.subtitleBodyCaptionCaption1,
    color: Color.colorGray_800,
    height: 129,
  },
  text: {
    fontSize: FontSize.regular12_size,
    letterSpacing: 0,
    lineHeight: 20,
    fontFamily: FontFamily.soraRegular,
    color: Color.sageGreen,
    maxHeight: 20,
    overflow: "hidden",
    flex: 1,
  },
  doctorBioParent: {
    top: 529,
    width: 390,
    height: 195,
    paddingHorizontal: Padding.p_3xl,
    paddingVertical: 0,
    display: "none",
    alignItems: "center",
  },
  profileDoctorRaja: {
    borderRadius: Border.br_2xl,
    backgroundColor: Color.neutralsWhite,
    height: 1461,
    width: "100%",
  },
});

export default DoctorProfile;
