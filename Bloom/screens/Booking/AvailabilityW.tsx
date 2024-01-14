import { View, Text, Button } from "react-native";
import React from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { addWindow, getSlots } from "../../api/appointements/appointments";
const AvailabilityW = ({ navigation , route }: { navigation: string; route: { params: { duration: string; pause: string } };}) => {
 
  const duration = route.params.duration;
  const pause = route.params.pause;
  const [chosenDateStart, setChosenDateStart] = React.useState(new Date());
  const [chosenDateEnd, setChosenDateEnd] = React.useState(new Date());
  const [initial, setInitial] = React.useState(new Date());
  const [viewEnd, setViewEnd] = React.useState(false);
  const [windows, setWindows] = React.useState<{duration: string; pause: string;startingTime: Date;endingTime: Date;}[]>([]);
  const [windowsDb, setWindowsDb] = React.useState< {id: Number;duration: string;pause: string;startingTime: Date; endingTime: Date;  }[] >([]);
  const mutation = addWindow();
  // const query =  getSlots()

  // const onChange = ({ type }: any, date: Date) => {
  //   if (type == "set") {
  //     const currentDate = date;
  //   }
  // };
  // console.log(windows);
  // console.log(viewEnd);
  console.log(chosenDateEnd, "reloaded");
  
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
    </View>
  );
};

export default AvailabilityW;
