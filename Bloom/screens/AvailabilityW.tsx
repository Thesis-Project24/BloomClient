import { View, Text, Button } from "react-native";
import React from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import { addWindow } from "../api/appointements/appointments";
import { useRoute,useNavigation } from '@react-navigation/native';
const AvailabilityW = ({navigation,route}) => {
  // const navigation=useNavigation()
  // const route=useRoute()
  const {duration,pause} = route.params 
  const [chosenDateStart, setChosenDateStart] = React.useState(new Date());
  const [chosenDateEnd, setChosenDateEnd] = React.useState(new Date());
  const [windows, setWindows] = React.useState([]);
  const [viewEnd, setViewEnd] = React.useState(false);
  const mutation = addWindow();

  const onChange = ({type},date: Date)=> {if(type == "set"){
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
            onChange={(event)=>{setChosenDateEnd(chosenDateEnd)}}
            mode={"datetime"}
          />
        </View>
      )}
      <Button
        onPress={() => {
          // setWindows([{ duration, pause, chosenDateStart, chosenDateEnd }]);
          mutation.mutate(windows);
        }}
        title="set window"
      ></Button>
    </View>
  );
};

export default AvailabilityW;
