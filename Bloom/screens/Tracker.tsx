import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import Habit from "../components/Trackers/Habit";
import { useFetchHabits } from "../api/habits/Habits";
const Tracker = () => {
    
    const { data: habits, isLoading, isError } = useFetchHabits();

    if (isLoading) {
      return <Text>Loading...</Text>;
    }
  
    if (isError) {
      return <Text>Error loading habits</Text>;
    }
    console.log(habits,'habit');
    
  return (
    <View style={styles.container}>
      <Text style={styles.init}> What Habit Do you Want to Track </Text>
      <View style={styles.init}>
      {habits.userHabits.map((habit) => (
          <Habit key={habit.id} habit={habit.habit} />
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
});

export default Tracker;
