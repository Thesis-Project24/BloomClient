import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface UserHabitsProps {
  habit: {
    id: number;
    name: string;
  };
}

const UserHabit = ({ habitsUser }) => {
  console.log(habitsUser.name, "page taaa userrrrrrrrrrrrrrrrrrrrrrrr");

  return (
      <View style={Styles.habit}>
        <Text>{habitsUser.name}</Text>
      </View>
  );
};

const Styles = StyleSheet.create({
  habit: {
    margin: 10,
    borderWidth: 1,
    borderColor: "#a78a6e",
    borderStyle: "solid",
    borderRadius: 15,
    padding: 8,
    
  },
  container : {
    flexDirection: "row",
  }
});

export default UserHabit;
