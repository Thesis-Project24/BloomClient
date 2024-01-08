import { View, Text, Button } from "react-native";
import React from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { addWindow } from "../../api/appointements/appointments";
import { useRoute, useNavigation } from "@react-navigation/native";
const AvailabilityW = ({
  navigation,
  route,
}: {
  navigation: string;
  route: { params: { duration: string; pause: string } };
}) => {
  const duration = route.params.duration;
  const pause = route.params.pause;
  // console.log(duration)

  const [chosenDateStart, setChosenDateStart] = React.useState(new Date());
  const [chosenDateEnd, setChosenDateEnd] = React.useState(new Date());
  const [windows, setWindows] = React.useState<
    {
      duration: string;
      pause: string;
      chosenDateStart: Date;
      chosenDateEnd: Date;
    }[]
  >([]);
  const [viewEnd, setViewEnd] = React.useState(false);
  const mutation = addWindow();

  const onChange = ({ type }: any, date: Date) => {
    if (type == "set") {
      const currentDate = date;
      console.log(date, "date");
    }
  };
  console.log(windows);
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
          value={chosenDateEnd}
          onChange={(event) => {
            setChosenDateEnd(chosenDateEnd);
          }}
          mode={"datetime"}
        />
      </View>
      {/* ) : ( */}
      <View>
        <DateTimePicker
          value={chosenDateStart}
          onChange={(event) => {
            setChosenDateEnd(chosenDateEnd);
          }}
          mode={"datetime"}
        />
      </View>
      {/* )} */}
      <Button
        onPress={() => {
          // setWindows([{ duration, pause, chosenDateStart, chosenDateEnd }]);
          console.log(
            { duration, pause, chosenDateStart, chosenDateEnd },
            "before mutation"
          );
          mutation.mutate([
            {
              doctorId: 1,
              duration: Number(duration),
              pause: Number(pause),
              startingTime: chosenDateStart,
              endingTime: chosenDateEnd,
            },
          ]);
        }}
        title="set window"
      ></Button>
    </View>
  );
};

export default AvailabilityW;
