import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import Habit from "../components/Trackers/Habit";
import { useFetchHabits,useFetchHabitsUser } from "../api/habits/Habits";
const Tracker = () => {
    const { data: habits, isLoading, isError } = useFetchHabits();
    if (isLoading) {
      return <Text>Loading...</Text>;
    }
    if (isError) {
      return <Text>Error loading habits</Text>;
    }
    console.log(habits.habits[0],'habit');
    const {data:habitsUser,isLoading : lll,isError : rrr }=useFetchHabitsUser()
    if(lll){
      return <Text>Loading...</Text>
    }
    if(rrr){
      return <Text> Error loading </Text>
    }
  console.log(habitsUser,"taa user");
  

  return (
    <View style={styles.container}>
      <Text style={styles.init}> What Habit Do you Want to Track </Text>
      <View style={styles.habitsWrapper}>
      {habits.habits?.map((ele:any) => (
          <Habit key={ele.id} habit={{
            id: ele.id,
            name : ele.name
          }} />
        ))}
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "F3F0EA",
  },
  init: {
    color: "black",
    fontStyle:"italic",
    width:"auto",
    paddingLeft:41,
    paddingRight:86,
    marginTop: 100,
    // fontFamily:"Tajawal"
    fontSize: 17,
    fontWeight:"semibold"
  },
  habitsWrapper: {
    flexDirection: "row", 
    flexWrap: "wrap", 
    justifyContent: "space-between", 
    marginTop: 100,
    paddingRight:50,
    paddingLeft:50,
    gap:10,
    
  },
});

export default Tracker;
