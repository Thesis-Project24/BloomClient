import {
  View,
  Text,
  StyleSheet,
  PanResponder,
  Animated,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import { useDeleteHabit } from "../../api/habits/Habits";

interface UserHabitsProps {
  habitsUser: {
    id: number;
    name: string;
  };
  onDrop: (habitId: any) => void;
  onDragStart: () => void;
  onDragEnd: () => void;
}
const UserHabit = ({
  habitsUser,
  onDrop,
  onDragStart,
  onDragEnd,
}: UserHabitsProps & { onDrop: (habitId: any) => void }) => {
  const translateX = new Animated.Value(0);
  const translateY = new Animated.Value(0);
  console.log(habitsUser.id);

  const onGestureEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationX: translateX,
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: false }
  );
  const onHandlerStateChange = async (event: {
    nativeEvent: { oldState: number };
  }) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      Animated.spring(translateX, {
        toValue: 0,
        useNativeDriver: false,
      }).start();
      Animated.spring(translateY, {
        toValue: 0,
        useNativeDriver: false,
      }).start();

      // Check if the user has dragged and dropped onto the bin area
      if (
        // Math.abs(translateX._value) < 50 &&
        Math.abs(translateY._value) < 60
      ) {
        try {
          onDrop(habitsUser.id);
          console.log("Habit deleted successfully");
        } catch (error) {
          console.error("Error deleting habit:", error);
        }
      }
      // onDragEnd();
    }
  };

  return (
    <View>
      <Pressable
        onLongPress={() => onDragStart()}
        onPressOut={() => onDragEnd()}
      >
        <PanGestureHandler
          onGestureEvent={onGestureEvent}
          onHandlerStateChange={onHandlerStateChange}
        >
          <Animated.View
            style={{
              transform: [
                { translateX: translateX },
                { translateY: translateY },
              ],
              ...Styles.habit,
            }}
          >
            <Text>{habitsUser.name}</Text>
          </Animated.View>
        </PanGestureHandler>
      </Pressable>
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
    backgroundColor: "#9FCFBD",
  },
  container: {
    flexDirection: "row",
  },
});

export default UserHabit;
