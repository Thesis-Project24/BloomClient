import { View, Text, Button } from "react-native";
import React from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import { addWindow } from "../api/appointements/appointments";
const AvailabilityW = ({ navigation, route }) => {
  const duration = route.params.duration;
  const pause = route.params.pause;
  const [chosenDateStart, setChosenDateStart] = React.useState(new Date());
  const [chosenDateEnd, setChosenDateEnd] = React.useState(new Date());
  const [windows, setWindows] = React.useState([]);
  const [viewEnd, setViewEnd] = React.useState(false);
  const mutation = addWindow();
  // const onChange= ({type},selecteddate)=>{
  //         if(type==="set"){
  //           date= selecteddate
  //         }
  // }

  const test = ({type},date: Date)=> {if(type == "set"){
    const currentDate=date
    console.log(date, "date");
    
  }}
  
  return (
    <View>
       <Button
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
      ></Button>

      {viewEnd ? (
        <View>
        <DateTimePicker
          value={chosenDateEnd}
          onChange={(event)=>{setChosenDateEnd(chosenDateEnd)}}
          mode={"datetime"}
        />
      </View>
      ) : (
        <View>
          <DateTimePicker
            value={chosenDateStart}
            onChange={test} 
            mode={"datetime"}
          />
        </View>
      )}
      <Button
        onPress={() => {
          setWindows([{ duration, pause, chosenDateStart, chosenDateEnd }]);
          mutation.mutate(windows);
        }}
        title="set window"
      ></Button>
    </View>
  );
};

export default AvailabilityW;
