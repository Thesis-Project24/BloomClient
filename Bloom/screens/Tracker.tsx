import { View, Text,StyleSheet,ScrollView , Image } from "react-native";
import React from "react";
import Habit from "../components/Trackers/Habit";
import UserHabit from "../components/Trackers/UserHabit";
import { useFetchHabits,useFetchHabitsUser } from "../api/habits/Habits";



const Tracker = () => {
    const { data: habits, isLoading: habitsLoading, isError: habitsError } = useFetchHabits();
    const {data:habitsUser,isLoading: userHabitsLoading, isError: userHabitsError, isSuccess}=useFetchHabitsUser()
    if (habitsLoading || userHabitsLoading) {
      return <Text>Loading...</Text>;
    }
  
    if (habitsError || userHabitsError) {
      return <Text>Error loading habits</Text>;
    }
    if (isSuccess) console.log(habitsUser.userHabits[0].habit.name,"taa user");
  

  return (
    <View >
      
      <Text style={styles.init}> What Habit Do you Want to Track </Text>
      <View style={styles.habitsWrapper}>
      {habits && habits.habits?.map((ele:any) => (
          <Habit key={ele.id} habit={{
            id: ele.id,
            name : ele.name
          }} />
        ))}
      </View>
      <Text>
        My Habbits
      </Text>
       <ScrollView horizontal showsHorizontalScrollIndicator={true}>
       <View style={styles.container}>
        {isSuccess && habitsUser.userHabits?.map((ele:any)=>(
          <UserHabit key={ele.id} habitsUser={{
            id: ele.id,
            name:ele.habit.name
          }}/>
        ))}
        </View>
      </ScrollView> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:"row",
    backgroundColor: "F3F0EA",
    marginTop:50,
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
