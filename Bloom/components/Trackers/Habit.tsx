import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";

interface HabitProps {
  habit: {
    id: number;
    name: string;
  };
  onHabitSelect: (habitId: number) => void;
}

const Habit = ({ habit, onHabitSelect }: HabitProps) => {
  const [isPressed, setIsPressed] = useState<boolean>(false);

  const handlePress = () => {
    setIsPressed(!isPressed);
    onHabitSelect(habit.id);
  };

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
