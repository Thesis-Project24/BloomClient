import { View, Text,Pressable,StyleSheet } from 'react-native'
import React from 'react'

interface HabitProps {
    habit: {
      id: number;
      name: string;
    };
  }
const Habit = ({habit}:HabitProps) => {

console.log(habit);


  return (
    <View>
       <View >
          <Pressable style={styles.happinessWrapper}>
            <Text style={[styles.happiness]}>
            {habit.name}
            </Text>
          </Pressable>
          </View>
    </View>
  )
}

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
    frameView: {
        flexWrap: "wrap",
        marginTop: 26,
        alignSelf: "stretch",
        flexDirection: "column",
        flex: 1,
      },
      happinessWrapper: {
        minWidth: 90,
        maxHeight: 45,
        paddingHorizontal:28,
        borderWidth: 1,
        borderColor:  "#a78a6e",
        borderStyle: "solid",
        borderRadius: 28,
        paddingVertical: 14,
        maxWidth: 120,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
      },
      happiness: {
        color: "#a2a2a2",
        display: "flex",
        letterSpacing: -0.1,
        height: "100%",
        width: 75,
        textAlign: "left",
      },
  });
  
export default Habit