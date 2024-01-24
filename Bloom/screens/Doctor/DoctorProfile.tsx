import React , {useState} from "react";  
import { StatusBar, StyleSheet, ScrollView, View, Text ,TouchableOpacity} from "react-native";
import DoctoreDeatailss from "../../components/DoctorProfile/DoctorProfileDetailt";
import DoctorBio from "../../components/DoctorProfile/DoctorBio";
import BookAppointment from "../../components/DoctorProfile/BookAppointment";
import ButtonBooking from "../../components/DoctorProfile/ButtonBooking";
import { FontSize , FontFamily, Color, Padding , Border } from "../../GlobalStyles";
import { useQuery , useQueryClient , QueryFunctionContext } from "react-query";
import { useFetchOneDoctor } from "../../api/doctors/Doctors";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Nav from "../Nav";
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
   id:number
  };
};

type OneDoctorNavigationProp = StackNavigationProp<YourRouteParamList, 'OneDoctor'>;

type OneDoctorRouteProp = RouteProp<YourRouteParamList, 'OneDoctor'>;

type OneDoctorProps = {
  navigation: OneDoctorNavigationProp;
  route: OneDoctorRouteProp;

};


const DoctorProfile = ({ navigation, route }: any) => {

  
  
     const [id,setId] = useState(route.params.id)
  const { data, isError, isLoading, isSuccess } = useQuery(['OneDoctor', id], (context: QueryFunctionContext<["OneDoctor", number]>) => {
    // Extract id from context
    // const id = context.queryKey[id];  
    // Check if id is defined
    if (id !== undefined) {
      // Call useFetchDocSpecialists with id
      return useFetchOneDoctor(id);
    } 
    });
    
  return (
    <DrawerScreen>
      <Nav/>
   
    <ScrollView 
    style={[styles.profileDoctorRaja, styles.textFlexBox]}
    // style={[styles.frameGroup, styles.frameFlexBox]}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.frameScrollViewContent}
    
    
    >
      <View style={[styles.profileDoctorRajaInner, styles.doctorPosition]}>
        <View style={styles.frameParent}>
          <View
            style={[styles.frameGroup, styles.frameFlexBox]}
            // showsVerticalScrollIndicator={false}
            // showsHorizontalScrollIndicator={false}
            // contentContainerStyle={styles.frameScrollViewContent}
          >
            {isSuccess && <DoctoreDeatailss data={data} />}
            
            
            <View style={[styles.historyParent, styles.frameFlexBox]}>
              {isSuccess && <DoctorBio data={data} />}
              <TouchableOpacity 
          style={[styles.frameTouchableOpacity, styles.frameShadowBox]}
          ///////////////////////missing getting the user to this page /////////////////////
          onPress={()=>{navigation.navigate("AddArticle"),{data:data}}}
        >
          <View style={[styles.videoParent, styles.parentFlexBox]}>
            
            <Text style={[styles.videoCall, styles.callTypo]}>Add article</Text>
          </View>
        </TouchableOpacity>
              <BookAppointment doctorId={id} />
            </View>
          </View>
        </View>
      </View>
    
    </ScrollView>
    </DrawerScreen>
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
  frameTouchableOpacity: {
    backgroundColor: Color.green,
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
    marginTop:25,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    alignItems: "center",
  },
  frameParentFlexBox1: {
    alignSelf: "stretch",
    alignItems: "center",
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
  parentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  videoIcon: {
    width: 20,
    height: 20,
  },
  videoCall: {
    maxWidth: 70,
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
});

export default DoctorProfile;
