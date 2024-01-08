import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";
import Habit from "../components/Trackers/Habit";
import UserHabit from "../components/Trackers/UserHabit";
import {
  useFetchHabits,
  useFetchHabitsUser,
  useAssignMultiHabits,
} from "../api/habits/Habits";

const Tracker = () => {

  const {
    data: habits,
    isLoading: habitsLoading,
    isError: habitsError,
    isFetched,
  } = useFetchHabits();
  const {
    data: habitsUser,
    isLoading: userHabitsLoading,
    isError: userHabitsError,
    isSuccess,
    refetch,
  } = useFetchHabitsUser();
  const { assignMultiHabits, isAssigningMultipleHabits } =
    useAssignMultiHabits();
  const [submitted, setSubmitted] = useState(false);
  const [selectedHabits, setSelectedHabits] = useState<number[]>([]);
  isSuccess && console.log(habitsUser, "=============================");
  const handleHabitSelect = (habitId: number) => {
    setSelectedHabits((prevSelected) => {
      if (prevSelected.includes(habitId)) {
        return prevSelected.filter((id) => id !== habitId);
      } else {
        return [...prevSelected, habitId];
      }
    });
  };
  console.log(selectedHabits, "sssssssssssssssssss");

  const submitSelectedHabits = async () => {
    try {
      await assignMultiHabits(1, selectedHabits);
      refetch();
      console.log("Habits assigned successfully");
    } catch (error) {
      console.error("Error assigning habits:", error);
    }
  };

  if (habitsLoading || userHabitsLoading) {
    return <Text>Loading...</Text>;
  }

  if (habitsError || userHabitsError) {
    return <Text>Error loading habits</Text>;
  }

  if (isSuccess) console.log(habitsUser.userHabits[0].habit.name, "taa user");

  return (
    <ScrollView>
      <View>
        <Image
          style={[styles.profileItem, styles.profilePosition]}
          // contentFit="cover"
          source={require("../assets/vector-1.png")}
        />
        <Text style={styles.init}> What Habit Do you Want to Track </Text>
        <View style={styles.habitsWrapper}>
          {habits &&
            habits.habits?.map((ele: any) => (
              <Habit
                key={ele.id}
                habit={{
                  id: ele.id,
                  name: ele.name,
                }}
                onHabitSelect={handleHabitSelect}
              />
            ))}
        </View>
        <View>
          <Pressable
            onPress={submitSelectedHabits}
            disabled={selectedHabits.length === 0 || isAssigningMultipleHabits}
          >
            <Text style={styles.button}>Submit My Habits</Text>
          </Pressable>
        </View>
        <View>
          <Text style={styles.T1}>My Habbits</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={true}>
            <View style={styles.container}>
              {isSuccess &&
                habitsUser.userHabits?.map((ele: any) => (
                  <UserHabit
                    key={ele.id}
                    habitsUser={{
                      id: ele.id,
                      name: ele.habit.name,
                    }}
                  />
                ))}
            </View>
          </ScrollView>
        </View>
      </View>
      <View>
        <Text style={styles.T1}>My Habits Stats</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    
    marginTop: 50,
  },
  init: {
    color: "black",
    fontStyle: "italic",
    width: "auto",
    paddingLeft: 41,
    paddingRight: 86,
    marginTop: 100,
    // fontFamily:"Tajawal"
    fontSize: 17,
    fontWeight: "600",
  },
  T1: {
    paddingLeft: 25,
    marginTop: 30,
    fontSize: 25,
    fontStyle: "italic",
  },
  button: {
    textAlign: "center",
    marginHorizontal: 90,
    borderWidth: 1.5,
    borderColor: "green",
    borderStyle: "solid",
    borderRadius: 15,
    padding: 10,
    marginTop: 50,
    marginBottom: 50,
  },
  habitsWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 100,
    paddingRight: 50,
    paddingLeft: 50,
    gap: 10,
  },
  profileItem: {
    height: 91,
    width: 390,
    top: 0,
    left: 0,
  },
  profilePosition: {
    left: 0,
    position: "relative",
  },
});

export default Tracker;
