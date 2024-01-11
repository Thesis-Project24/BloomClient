import { View, Text, Button,TouchableOpacity,StyleSheet  } from "react-native";
import React from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { addWindow, getSlots } from "../../api/appointements/appointments";
import {
  FontFamily,
  FontSize,
  Color,
  Padding,
  Border,
} from "../../GlobalStyles";
const AvailabilityW = ({
  navigation,
  route,
}: {
  navigation: string;
  route: { params: { duration: string; pause: string } };
}) => {
  const duration = route.params.duration;
  const pause = route.params.pause;
  const [chosenDateStart, setChosenDateStart] = React.useState(new Date());
  const [chosenDateEnd, setChosenDateEnd] = React.useState(new Date());
  const [initial, setInitial] = React.useState(new Date());
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
    windowId:number
    startingTime: string;
    endingTime: string;
  }[]
>([]);
  const mutation = addWindow();
  console.log(windowsDb,"front")
  if(windowsDb){

    windowsDb.forEach(element=>{
      console.log (element,"loop")
    })
  }
  return (
    <View>
      {/* <Button
        onPress={() => {
          setViewEnd(false);
        }}
        title="starting time"
      ></Button>
      <Button
        onPress={() => {
          setViewEnd(true);
        }}
        title="ending time"
      ></Button> */}
      {/* 
      {viewEnd ? ( */}
      <View>
        <DateTimePicker
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
      {/* ) : ( */}
      <View>
        <DateTimePicker
          id="2"
          value={chosenDateEnd}
          onChange={(event, selectedDate) => {
            const currentDate = selectedDate || chosenDateEnd;
            setChosenDateEnd(currentDate);
          }}
          mode={"datetime"}
        />
      </View>
      {/* )} */}
      <Button
        onPress={() => {
          mutation.mutate([
            {
              doctorId: 1,
              duration: Number(duration),
              pause: Number(pause),
              startingTime: chosenDateStart,
              endingTime: chosenDateEnd,
            },
          ]);
          // console.log(mutation.data,"mutated")
          setWindowsDb(mutation.data);
        }}
        title="set window"
      ></Button>
      <Button
        onPress={() => {
          setViewEnd(!viewEnd);
        }}
        title="get slots"
      ></Button>
    <View>
      {windowsDb ?windowsDb.map(slot=>{
        return <View>
          <TouchableOpacity  style={[styles.amWrapper, styles.amFrameLayout]}>
            <Text style={[styles.am1, styles.amTypo]}>{slot.startingTime}</Text>
            <Text style={[styles.am1, styles.amTypo]}>{slot.endingTime}</Text>
          </TouchableOpacity>
        </View>
      }):""}
    </View>
    </View>
  );
};
const styles = StyleSheet.create({
  amFrameLayout: {
    width: 110,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_5xl,
    justifyContent: "center",
    borderRadius: Border.br_5xs,
    alignItems: "center",
  },
  amTypo: {
    fontFamily: FontFamily.medium14,
    fontWeight: "500",
    fontSize: FontSize.medium14_size,
    textAlign: "left",
  },
  amWrapper: {
    backgroundColor: Color.neutralsGray6,
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
