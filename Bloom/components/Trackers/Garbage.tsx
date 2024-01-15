import { View, StyleSheet, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const Garbage = () => {
  const [layout, setLayout] = useState({ x: 0, y: 0 });

  return (
    <View style={Styles.garbageBin}>
      <View
        onLayout={(event) => {
          const { x, y } = event.nativeEvent.layout;
          setLayout({ x, y });
        }}
      ></View>
      <Ionicons name="trash-bin-outline" size={30} color="black" />
    </View>
    //87.5, 0 //
  );
};
const Styles = StyleSheet.create({
  garbageBin: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
});

export default Garbage;
