import { View, Text } from "react-native";
import { StyleSheet, TextInput, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Availability = () => {
  const navigation:any= useNavigation()
  const [duration, onChangeDuration] = React.useState("");
  const [pause, onChangePause] = React.useState("");
  return (
    <View >
      <Text>Availibity </Text>
      <View >
        <View>
          <Text> Consultation duration </Text>
          <TextInput
          
            onChangeText={onChangeDuration}
            value={duration}
            placeholder="in minutes"
            keyboardType="numeric"
          />
        </View>
        <View>
          <Text> Break duration </Text>
          <TextInput
            // style={styles.input}
            onChangeText={onChangePause}
            value={pause}
            placeholder="in minutes"
            keyboardType="numeric"
          />
        </View>
      </View>
      <View>
        <Button
          onPress={() => navigation.navigate("AvailabilityW", {
            duration: duration,
            pause: pause,
          })}
          title="add Window"
          color="#841584"
        ></Button>
      </View>
    </View>
  );

  
}

export default Availability;

