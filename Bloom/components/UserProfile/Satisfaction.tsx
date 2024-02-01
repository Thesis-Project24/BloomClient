import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Alert,

} from "react-native";
import React, { useEffect, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { Border, Color } from "../../GlobalStyles";
import { useSubmitSatisfaction } from "../../api/habits/Habits";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import AsyncStorage from "@react-native-async-storage/async-storage";
interface SatisfactionProps {
  habitsUser: {
    id: number;
    name: string;
    tracker: object;
  };
  reload:()=>{}
}
const Satisfaction = ({ habitsUser,reload }: SatisfactionProps) => {
  useEffect(() => {
    checkIfButtonShouldBeDisabled();
  }, []);
  const [rating, setRating] = useState<number>(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  // console.log(Array.isArray( habitsUser.tracker) );

  const days = habitsUser.tracker.map((item:any) => item.dayOfWeek);
  const ratings = habitsUser.tracker.map((item) => item.rating);

// {Checking if the user submiited or still }

const checkIfButtonShouldBeDisabled = async () => {
  try {
    const lastSubmissionTimestamp = await AsyncStorage.getItem(
      `lastSubmissionTimestamp_${habitsUser.id}`
    );

    if (lastSubmissionTimestamp) {
      const currentTime = new Date().getTime();
      const timeDifference = currentTime - parseInt(lastSubmissionTimestamp);

      // Disable the button if less than 24 hours have passed
      if (timeDifference < 24 * 60 * 60 * 1000) {
        setIsButtonDisabled(true);
      }
    }
  } catch (error) {
    console.error("Error checking button status:", error);
  }
};
// { helper for remainig time }
const calculateTimeRemaining = (lastSubmissionTimestamp) => {
  const nextDayTimestamp = lastSubmissionTimestamp + 24 * 60 * 60 * 1000;

  // Get the current time
  const currentTime = new Date().getTime();

  // Calculate the time difference
  const timeDifference = nextDayTimestamp - currentTime;

  // Convert the time difference to hours
  const hoursDifference = timeDifference / (1000 * 60 * 60);

  return {
    hours: Math.floor(hoursDifference),
  };

  // };
};



  // { satisfaction submisssion } //
  const satisMuttation = useSubmitSatisfaction();
  const handleSatisfactionPress = async (n: number) => {
    try {
       if (!isButtonDisabled) {
         console.log("Submitting satisfaction", habitsUser.id);
         await satisMuttation.mutateAsync({
           userHabitId: habitsUser.id,
           userId: 1,
           rating: n,
         });
         await AsyncStorage.setItem(
           `lastSubmissionTimestamp_${habitsUser.id}`,
           new Date().getTime().toString()
         );
         setIsButtonDisabled(true)
         showSubmissionPopup()
       } else {
         const lastSubmissionTimestamp = await AsyncStorage.getItem(`lastSubmissionTimestamp_${habitsUser.id}`);
         const timeRemaining = calculateTimeRemaining(parseInt(lastSubmissionTimestamp));
   
         Alert.alert(
           "Submission Limit Reached",
           `You have already submitted your satisfaction rating today. Please come back in ${timeRemaining.hours} hours     to submit again.`,
           [{ text: "OK" }]
         );
       }
    } catch (error) {
       console.error("Error submitting satisfaction:", error);
    }
   };
   
  const showSubmissionPopup = () => {
    Alert.alert(
      "Thank you for the submission!",
      "Come back tomorrow to submit again.",
      [{ text: "Okay :)" }]
    );
  };
  return (
    <View style={styles.satisfactionBox}>
      <View>
        <Text style={styles.title}>
          Weekly
          <Text
            style={{
              textDecorationLine: "underline",
              color: "#729384",
              fontStyle: "italic",
            }}
          >
            {habitsUser.name}
          </Text>
          Line Chart
        </Text>

        {ratings.length!==0 &&<LineChart
          data={{
            labels: days,
            datasets: [
              {
                data: ratings,
              },
            ],
          }}
          width={Dimensions.get("window").width} // from react-native
          height={220}
          yAxisInterval={1}
          chartConfig={{
            backgroundColor: "#F3F0EA",
            backgroundGradientFrom: "#729384",
            backgroundGradientTo: "#ADD8C4",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#A78A6E",
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />}
      </View>
      <View>
        <Text style={styles.habits}>{habitsUser.name}</Text>
      </View>

      <View style={[styles.rectangleParent, styles.beHappyYoureSpaceBlock]}>
        <TouchableOpacity
          onPress={() => {
            handleSatisfactionPress(5);
            reload()
          }}
        >
          <View style={[
              styles.frameChildss,
              isButtonDisabled && { backgroundColor: "#E8E8E8" },
            ]}>
            <Entypo name="emoji-happy" size={34} color="#729384" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleSatisfactionPress(4);
            reload()
          }}
        >
          <View style={[styles.frameShadowBox , isButtonDisabled && { backgroundColor: "#E8E8E8" }]}>
            <Entypo name="emoji-flirt" size={34} color="#729384" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleSatisfactionPress(2);
            reload()
          }}
        >
          <View style={[styles.frameShadowBox , isButtonDisabled && { backgroundColor: "#E8E8E8" }]}>
            <Entypo name="emoji-neutral" size={34} color="#729384" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleSatisfactionPress(1);
             reload()
          }}
        >
          <View style={[styles.frameShadowBox , isButtonDisabled && { backgroundColor: "#E8E8E8" }]}>
            <Entypo name="emoji-sad" size={34} color="#729384" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleParent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    margin: 20,
  },
  beHappyYoureSpaceBlock: {
    marginTop: 10,
    alignSelf: "stretch",
  },
  frameChildss: {
    height: 53,
    width: 68,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_lg,
  },
  frameShadowBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    height: 53,
    width: 68,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_lg,
  },

  satisfactionBox: {
    flex: 1,
    alignContent: "center",
    backgroundColor: "F3F0EA",
    justifyContent: "center",
    alignItems: "center",
  },
  habits: {
    marginTop: 25,
    marginBottom: 15,
    fontSize: 18,
    fontStyle: "italic",
  },
});
export default Satisfaction;
