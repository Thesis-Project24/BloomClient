
import { View, Text } from "react-native";
import React from "react";
import { StyleSheet, Image, Pressable } from "react-native";
const Home = () => {
  return (
    <View>
      <Text style={[styles.textPosition]}>Home</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  textPosition: {
    left: -10,
    top: 50,
    textAlign: "center",
    fontWeight: "800",
    
  },
});
export default Home;

