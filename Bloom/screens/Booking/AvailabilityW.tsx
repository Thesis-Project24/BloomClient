import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Image } from "expo-image";
import DateTimePicker from "@react-native-community/datetimepicker";
import { addWindow } from "../../api/appointements/appointments";
import {
  FontFamily,
  FontSize,
  Color,
  Padding,
  Border,
} from "../../GlobalStyles";
import NavBarEdit from "../../components/DoctorProfile/NavBarEditDoctor";
import { AntDesign } from '@expo/vector-icons';



const AvailabilityW = ({ navigation, route }: { navigation: string; route: { params: { duration: string; pause: string, doctor: any } }; }) => {
  const doctor = route.params.doctor
  const duration = route.params.duration;
  const pause = route.params.pause;
  const doctorId = route.params.doctor.id
  const [show, setShow] = useState(false)
  // console.log(doctor,doctorId,"AvailabilitWWWWWWWWWWWWWWWWWWWWWWWW");
  const [chosenDateStart, setChosenDateStart] = React.useState(new Date());
  const [chosenDateEnd, setChosenDateEnd] = React.useState(new Date());
  const [viewEnd, setViewEnd] = React.useState(false);
  const [windows, setWindows] = React.useState<
    {
      duration: string;
      pause: string;
      startingTime: Date;
      endingTime: Date;
    }[]
  >([]);
  const [windowsDb, setWindowsDb] = React.useState<{
    windowId: number
    startingTime: string;
    endingTime: string;
  }[]
  >([]);
  const mutation = addWindow(doctorId);
  if (windowsDb) {

    windowsDb.forEach(element => {
      console.log(element, "loop")
    })
  }
  return (
    <>
      <NavBarEdit page={"Availability"} goTo={"Availability"} data={doctor} />

      <View style={styles.availability}>

        <Image
          style={styles.profileChild}
          contentFit="cover"
          source={require("../../assets/vector-2.png")}
        />
<View style={styles.frameGroup} >
        <View style={styles.frameGroupSpaceBlock} >
          <TouchableOpacity
            style={[
              styles.amWrapper,
              styles.amFrameLayout,
            ]}
          >
            <Text
              style={[styles.breakDuration, styles.durationTypo]}
              numberOfLines={1}
            >
              Consultation: {duration}
            </Text>

          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.amWrapper,
              styles.amFrameLayout,
            ]}
          >
            <Text
              style={[styles.breakDuration, styles.durationTypo]}
              numberOfLines={1}
            >
              Break: {pause}
            </Text>

          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => {
            setShow(!show);
          }}
          style={styles.patientButton}>
          <View
            style={[styles.patientButton1, styles.patientButton1Position]}
          >
            <View style={styles.stateLayer1}>
              <AntDesign
                style={styles.icon}
                name="pluscircleo"
                size={20}
                color="#729384" />

              <Text style={[styles.labelText2]}>{`Add Window `}</Text>
            </View>
          </View>
        </TouchableOpacity>
        </View>

        {show && (<>
          <View style={styles.constainer}>

          
          <View style={styles.constainer} >
          <View style={[styles.frameWrapper, styles.frameSpaceBlock]}>
            <View style={styles.availabilityWrapper}>
              <Text style={styles.availability1}>Starting At</Text>
            </View>
          </View>
            <DateTimePicker
            style={{shadowOpacity: 1,
              elevation: 4,
              shadowRadius: 4,
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowColor: "rgba(0, 0, 0, 0.35)",}}
              id="1"
              value={chosenDateStart}
              onChange={(event, selectedDate) => {
                console.log(selectedDate, "selectedDate");
                const currentDate = selectedDate || chosenDateStart;
                setChosenDateStart(currentDate);
              }}
              mode={"datetime"}
            />
          </View>

          <View style={styles.constainer}>
          <View style={[styles.frameWrapper, styles.frameSpaceBlock]}>
            <View style={styles.availabilityWrapper}>
              <Text style={styles.availability1}>Ending At</Text>
            </View>
          </View>
            <DateTimePicker
            style={{
              
              shadowOpacity: 1,
              elevation: 4,
              shadowRadius: 4,
              shadowOffset: {
                width: 0,
                height: 4,
                
              },
              shadowColor: "rgba(0, 0, 0, 0.35)",
            
            }}
              id="2"
              value={chosenDateEnd}
              onChange={(event, selectedDate) => {
                const currentDate = selectedDate || chosenDateEnd;
                setChosenDateEnd(currentDate);
              }}
              mode={"datetime"}
            />
          </View>
          </View>
        </>)}
        {/* )} */}
        {/* <Button
          onPress={() => {
            mutation.mutate([
              {
                doctorId: doctorId,
                duration: Number(duration),
                pause: Number(pause),
                startingTime: chosenDateStart,
                endingTime: chosenDateEnd,
              },
            ]);
            setWindowsDb(mutation.data);
          }}
          title="set window"
        ></Button> */}
        <View style={styles.frameWrapperr}>
              <TouchableOpacity 
               onPress={() => {
                mutation.mutate([
                  {
                    doctorId: doctorId,
                    duration: Number(duration),
                    pause: Number(pause),
                    startingTime: chosenDateStart,
                    endingTime: chosenDateEnd,
                  },
                ]);
                setWindowsDb(mutation.data);
              }}
              style={styles.seeMoreWrapper}>
                <Text style={styles.seeMore} numberOfLines={1}>
                Set The Window
                </Text>
              </TouchableOpacity>
            </View>
        {/* <Button
          onPress={() => {
            setViewEnd(!viewEnd);
          }}
          title="get slots"
        ></Button> */}
        <View>
          {windowsDb ? windowsDb.map(slot => {
            return <View>
              <TouchableOpacity style={[styles.amWrapper, styles.amFrameLayout]}>
                <Text style={[styles.am1, styles.amTypo]}>{slot.startingTime}</Text>
                <Text style={[styles.am1, styles.amTypo]}>{slot.endingTime}</Text>
              </TouchableOpacity>
            </View>
          }) : ""}
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({



  seeMore: {
    fontSize: FontSize.size_lgi,
    color: Color.black,
    maxHeight: 30,
    display: "flex",
    lineHeight: 22,
    justifyContent: "center",
    overflow: "hidden",
    textAlign: "center",
    fontFamily: FontFamily.soraSemiBold,
    fontWeight: "600",
    alignItems: "center",
    flex: 1,
    alignSelf: "stretch",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: Color.brown,
  },

  seeMoreWrapper: {
    borderColor:Color.brown,
     borderStyle: "solid",
     borderWidth: 1,
    borderRadius: Border.br_xs,
    backgroundColor: Color.beige,
    shadowColor: Color.brown,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    minWidth: 140,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    alignSelf: "stretch",
  },

  frameWrapperr: {
    height: 59,
    paddingHorizontal: Padding.p_8xl,
    minWidth: 200,
    paddingVertical: 0,
    alignItems: "center",
    alignSelf: "stretch",
  },

  constainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap:30,
    maxHeight:200,
    

  },

  frameGroupSpaceBlock: {
    // backgroundColor:"red",
    flex: 1,
    // marginRight: 140,
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
    width: "100%",
    height: "100%",
    maxHeight: 100,

  },


  patientButton1Position: {
    // left: 0,
    // top: 0,
    // position: "absolute",
    position: "relative",
    alignItems: "center",
    overflow: "hidden",
  },
  frameSpaceBlock: {

    paddingVertical: 0,
    width: "100%",
    flex: 1,
  },
  durationParentShadowBox: {
    maxHeight: 103,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    paddingVertical: 0,
    alignItems: "center",
    width: "100%",
    flex: 1,
  },
  textLayout: {
    maxHeight: 56,
    maxWidth: 352,
    flex: 1,
  },
  textPosition: {
    // borderBlockColor: "red",
    borderTopRightRadius: Border.br_9xs,
    borderTopLeftRadius: Border.br_9xs,
  },
  durationTypo: {
    color: Color.black,
    maxWidth: 330,
    fontFamily: FontFamily.tajawalMedium,
    fontSize: FontSize.headingsH5_size,
    fontWeight: "500",
    textAlign: "center",
    // color: Color.black,
    height: 40,
    width: "100%",
  },
  textTypo: {
    fontFamily: FontFamily.regular12,
    flex: 1,
  },
  availability1: {
    color: Color.green,
    fontSize: FontSize.headingsH4_size,
    fontWeight: "700",
    fontFamily: FontFamily.tajawalBold,
    textAlign: "left",
    // color: Color.black,
    alignSelf: "stretch",
    flex: 1,
  },
  availabilityWrapper: {
    width: 358,
    height: 29,
  },
  frameWrapper: {
    paddingHorizontal: Padding.p_3xs,
    maxHeight: 29,
    maxWidth: 358,
  },
  textField: {
    height: "100%",
    maxHeight: 56,
    maxWidth: 352,
    flex: 1,
  },
  textFieldWrapper: {
    borderRadius: Border.br_mini,
    marginTop: 10,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  consultationDurationParent: {
    paddingHorizontal: Padding.p_5xs,
    maxWidth: 355,
  },
  breakDuration: {
    maxHeight: 29,
    overflow: "hidden",
  },
  labelText1: {
    width: "100%",
    maxWidth: 300,
    // backgroundColor: "red" ,
    fontSize: FontSize.regular16_size,
    maxHeight: 22,
    height: "100%",
  },
  labelText: {
    maxHeight: 25,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
    width: "100%",
    maxWidth: 280,
    paddingRight: 15,
    // backgroundColor: "red",
  },
  content: {
    justifyContent: "center",
    alignSelf: "stretch",
    flex: 1,
  },
  stateLayer: {
    height: 55,
    paddingLeft: Padding.p_base,
    paddingTop: Padding.p_5xs,
    paddingBottom: Padding.p_5xs,
    maxHeight: 55,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  textField2: {
    borderRadius: 15,
    borderStyle: "solid",
    borderColor: Color.green,
    borderWidth: 1,
    alignSelf: "stretch",
    // backgroundColor: "rgba(255, 255, 255, 0.29);",
  },
  supportingText1: {
    fontSize: FontSize.regular12_size,
    color: Color.colorGray_700,
    textAlign: "left",
  },
  supportingText: {
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_9xs,
    display: "none",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  textField1: {
    height: 56,
    flex: 1,
  },
  breakDurationParent: {
    paddingHorizontal: Padding.p_7xs,
    marginTop: 25,
    maxWidth: 358,
  },
  frameContainer: {
    maxHeight: 231,
    maxWidth: 358,
    alignItems: "center",
    width: "100%",
    flex: 1,
  },
  icon: {
    width: 24,
    height: 24,
    overflow: "hidden",
    // backgroundColor: "red",
    alignItems: "center",

  },
  labelText2: {
    // fontSize: FontSize.medium14_size,
    // fontFamily: FontFamily.medium14,
    color: Color.green,
    maxWidth: 150,
    minHeight:50,
    // fontWeight: "100",
    fontSize: 17,
    // color: Color.black,
    maxHeight: 30,
    display: "flex",
    lineHeight: 22,
    justifyContent: "center",
    overflow: "hidden",
    textAlign: "center",
    fontFamily: FontFamily.soraSemiBold,
    fontWeight: "600",
    alignItems: "center",
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
  stateLayer1: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  patientButton1: {
    borderRadius: Border.br_81xl,
    width: "100%",
    maxWidth: 352,
    maxHeight: 62,
    minHeight: 40,
    height: "100%",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  patientButton: {
    maxHeight: 32,
    marginTop: 20,
    marginBottom: 20,
    maxWidth: 358,
    width: "100%",
    flex: 1,
  },
  frameGroup: {
    // paddingHorizontal: 5,
    // backgroundColor:"red",
    // paddingLeft: 18,
    maxHeight: 200,
    height: "100%",
    marginTop: 18,
    // maxWidth: 355,
    width: "100%",
    alignItems: "center",
    flex:1,
  },
  frameParent: {
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  availabilityInner: {
    width: "100%",
    maxWidth: 350,
    paddingHorizontal: 1,
    paddingTop: 20,
    paddingBottom: 100,
    alignItems: "center",
    minHeight: 500,
    maxHeight: 844,
    height: "100%",
  },
  availability: {
    gap:30,
    paddingHorizontal: Padding.p_3xs,
    overflow: "hidden",
    height: "100%",
    minHeight: 600,
    width: "100%",

    // maxWidth:390,
    flex: 1,
    backgroundColor: Color.beige,
  },
  profileChild: {
    bottom: -85,
    left: -262,
    width: 411,
    height: 358,
    position: "absolute",
  },



  amFrameLayout: {
    borderColor:Color.brown,
     borderStyle: "solid",
     borderWidth: 1,
    borderRadius: Border.br_xs,
    backgroundColor: Color.beige,
    maxWidth: 200,
    width: "100%",
    // marginRight: 10,
    flex: 1,
    // paddingVertical: Padding.p_xs,
    // paddingHorizontal: Padding.p_5xl,
    justifyContent: "center",
    // borderRadius: Border.br_5xs,
    alignItems: "center",
    height: "100%",
    maxHeight: 60,
    minHeight: 55,
    shadowOpacity: 0.5,
    elevation: 30,
    shadowRadius: 4,
    shadowOffset: {
      width: 3,
      height: 4,
    },
    shadowColor: Color.brown,
  },
  am: {
    color: Color.beige,
    fontFamily: FontFamily.medium14,
    fontWeight: "500",
    fontSize: FontSize.medium14_size,
  },

  // amFrameLayout: {
  //   width: 110,
  //   paddingVertical: Padding.p_xs,
  //   paddingHorizontal: Padding.p_5xl,
  //   justifyContent: "center",
  //   borderRadius: Border.br_5xs,
  //   alignItems: "center",
  // },
  amTypo: {
    fontFamily: FontFamily.medium14,
    fontWeight: "500",
    fontSize: FontSize.medium14_size,
    textAlign: "left",
  },
  amWrapper: {
   
  },
  am1: {
    color: Color.neutralsGray5,
  },
  amContainer: {
    marginLeft: 8,
    backgroundColor: Color.green,
  },
})

export default AvailabilityW;
