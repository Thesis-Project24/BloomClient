
import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet, Image,Pressable } from "react-native";
const Community = () => {
  return (
    <View>
       <Text style={[styles.textPosition]}>Community</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  textPosition: {
    left: -10,
    top: 50,
    textAlign: "center",
    fontWeight: "800",
  },
});
export default Community