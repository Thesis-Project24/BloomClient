import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useRef, useState } from "react";
import Habit from "../components/Trackers/Habit";
import UserHabit from "../components/Trackers/UserHabit";
import {
  useFetchHabits,
  useFetchHabitsUser,
  useAssignMultiHabits,
  useDeleteHabit,
  useSubmitSatisfaction,
} from "../api/habits/Habits";
import Garbage from "../components/Trackers/Garbage";
import Satisfaction from "../components/UserProfile/Satisfaction";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import NavBarEdit from "../components/DoctorProfile/NavBarEditDoctor";
import { getAuth } from "firebase/auth";
import { app } from "../firebase.config";

const Tracker = () => {
  const auth = getAuth(app)
  const id = auth.currentUser?.uid
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
    refetch: refetchUserHabits,
  } = useFetchHabitsUser(id);
  const { assignMultiHabits, isAssigningMultipleHabits } =
    useAssignMultiHabits();
  // const [submitted, setSubmitted] = useState<boolean>(false);
  const [selectedHabits, setSelectedHabits] = useState<number[]>([]);
  // const [habitsUserr, setHabitUserr] = useState<object>([]);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isDown, setIsDown] = useState<boolean>(false);
  const [submitPressed, setSubmitPressed] = useState<boolean>(false);
  // auto scroll
  const [offset, setOffset] = useState(0);

  const scrollViewRef = useRef<any>();

  const slowlyScrollDown = () => {
    const y = offset + 80;

    scrollViewRef.current.scrollTo({ x: 0, y: -3000, animated: true });
    setOffset(y);
  };
  // {handleing dragging start & end  }
  const handleDragStart = () => {
    setIsDragging(true);
  };
  const handleDragEnd = () => {
    setIsDragging(!isDragging);
  };

  // {handeling the habit Selection} //
  const handleHabitSelect = (habitId: number) => {
    setSelectedHabits((prevSelected) => {
      if (prevSelected.includes(habitId)) {
        return prevSelected.filter((id) => id !== habitId);
      } else {
        return [...prevSelected, habitId];
      }
    });
  };
  // {habit deletion} //
  const deleteHabitMutation = useDeleteHabit();
  const handleDrop = async (habitId: any) => {
    try {
      console.log("habit picked Id :", habitId);
      await deleteHabitMutation.mutateAsync({
        userHabitId: habitId,
        userId: 1,
      });

      console.log("Habit deleted successfully");

      //                :o

      refetchUserHabits();
    } catch (error) {
      console.error("Error deleting habit:", error);
    }
  };
  // {handeling the habit submission}

  const submitSelectedHabits = async () => {
    try {
      await assignMultiHabits(1, selectedHabits);
      refetchUserHabits();
      console.log("Habits assigned successfully");
      setSubmitPressed(true);
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

  return (
    <>
    <NavBarEdit page={"hello"}/>
    <ScrollView 
    style={styles.track}
    showsVerticalScrollIndicator={false}>
      <View>
        <Text style={styles.init}> What Habit Do you Want to Track </Text>
        <View style={styles.habitsWrapper}>
          {habits &&
            habits.habits?.map((ele: any,index:number) => (
              <Habit
                key={ele.id}
                habit={{
                  id: ele.id,
                  name: ele.name,
                }}
                onHabitSelect={handleHabitSelect}
                style={index < 3 ? styles.habitGroup1 : index < 6 ? styles.habitGroup2 : styles.habitGroup3}
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
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={true}
            ref={scrollViewRef}
          >
            <View style={styles.container}>
              {isSuccess &&
                habitsUser.userHabits?.map((ele: any) => (
                  <UserHabit
                    // data = {habitsUser.userHabits}
                    key={ele.id}
                    habitsUser={{
                      id: ele.id,
                      name: ele.habit.name,
                    }}
                    onDrop={handleDrop}
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                  />
                ))}
            </View>
          </ScrollView>
          {isDragging && <Garbage />}
        </View>
      </View>
      <View>
        <View style={styles.drop}>
          <Text style={styles.T1}>My Habits OverAll</Text>
          {isDown && (
            <TouchableOpacity onPress={() => setIsDown(!isDown)}>
              <AntDesign
                name="upcircleo"
                size={24}
                color="black"
                style={styles.arrow}
              />
            </TouchableOpacity>
          )}
          {!isDown && (
            <TouchableOpacity
              onPress={() => {
                slowlyScrollDown;
                setIsDown(true);
              }}
            >
              <AntDesign
                name="downcircleo"
                size={24}
                color="black"
                style={styles.arrow}
              />
            </TouchableOpacity>
          )}
        </View>
        {isDown &&
          habitsUser.userHabits?.map((ele: any) => (
            <Satisfaction
              key={ele.id}
              habitsUser={{
                id: ele.id,
                name: ele.habit.name,
                tracker: ele.tracker,
              }}
              reload={refetchUserHabits}
            />
          ))}
      </View>
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  track:{
    flex: 1,
    backgroundColor:"#F3F0EA",
    // flexDirection: "",

    // marginTop: 10,
  },
  container: {
    flex: 1,
    flexDirection: "row",

    marginTop: 50,
  },
  arrow: {
    marginTop: 32,
    marginLeft: "50%",
  },
  drop: {
    // justifyContent:"center",
    flexDirection: "row",
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
  habitGroup1: {
    borderRadius: 10,
    borderWidth: 2,
    shadowColor: "#729384",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    // ...other styles
  },
  habitGroup2: {
    borderRadius: 10,
    borderWidth: 2,
    shadowColor: "#ADD8C4",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    // ...other styles
  },
  habitGroup3: {
    borderRadius: 10,
    borderWidth: 2,
    shadowColor: "#ADD8C4",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    // ...other styles
  },
});

export default Tracker;
