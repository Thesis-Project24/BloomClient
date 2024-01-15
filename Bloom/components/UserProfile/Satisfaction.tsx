import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
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

interface SatisfactionProps {
  habitsUser: {
    id: number;
    name: string;
    tracker: object;
  };
}
const Satisfaction = ({ habitsUser }: SatisfactionProps) => {
  const [rating, setRating] = useState<number>(0);
  // console.log(Array.isArray( habitsUser.tracker) );

  const days = habitsUser.tracker.map((item) => item.dayOfWeek);
  const ratings = habitsUser.tracker.map((item) => item.rating);

  console.log(ratings, days, habitsUser.id, habitsUser.name, " ratings days ");

  // { satisfaction submisssion } //
  const satisMuttation = useSubmitSatisfaction();
  const handleSatisfactionPress = async (n: number) => {
    try {
      console.log("aand el satisfaction while submitting", habitsUser.id);

      await satisMuttation.mutateAsync({
        userHabitId: habitsUser.id,
        userId: 1,
        rating: n,
      });
    } catch (error) {
      console.error("error submitting satisfaction :", error);
    }
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

        <LineChart
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
        />
      </View>
      <View>
        <Text style={styles.habits}>{habitsUser.name}</Text>
      </View>

      <View style={[styles.rectangleParent, styles.beHappyYoureSpaceBlock]}>
        <TouchableOpacity
          onPress={() => {
            handleSatisfactionPress(5);
          }}
        >
          <View style={styles.frameChildss}>
            <Entypo name="emoji-happy" size={34} color="#729384" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleSatisfactionPress(4);
          }}
        >
          <View style={styles.frameShadowBox}>
            <Entypo name="emoji-flirt" size={34} color="#729384" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleSatisfactionPress(2);
          }}
        >
          <View style={styles.frameShadowBox}>
            <Entypo name="emoji-neutral" size={34} color="#729384" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleSatisfactionPress(1);
          }}
        >
          <View style={styles.frameShadowBox}>
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
