import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const SlideImage = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.images} source={item.img} />
    </View>
  );
};

const styles = StyleSheet.create({
  images: {
    flex: 1,
    width: 350,
    height: 300,
    borderRadius: 30,
  },
  container: {
    alignItems: "center",
  },
});
export default SlideImage;
