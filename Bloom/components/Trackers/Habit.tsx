import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useAssignHabit } from "../../api/habits/Habits";

interface HabitProps {
  habit: {
    id: number;
    name: string;
  };
}
const Habit = ({ habit }) => {
  const [isPressed, setIsPressed] = useState<boolean>(false);
  const {assignHabit,isAssigning} = useAssignHabit()
  const handlePress = async () => {
    console.log("pressed");
    setIsPressed(!isPressed);
    try {
      await assignHabit(habit.id,1)
      console.log('habit assigned successfully');
    }catch(error){
      console.error("error assigning")
    }
  };
  

  console.log(habit, "page habits");
  console.log(isPressed);
  

  return (
    <View>
      <View>
        <TouchableOpacity
          onPress={handlePress}
          style={[styles.habit, isPressed && styles.habitPressed]}
        >
          <Text>{habit.name}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  habit: {
    borderWidth: 1,
    borderColor: "#a78a6e",
    borderStyle: "solid",
    borderRadius: 15,
    padding: 8,
  },
  habitPressed: {
    backgroundColor: "red",
    color: "F3F0EA",
  },
});

export default Habit;
