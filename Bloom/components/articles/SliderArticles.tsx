import React, { useEffect, useRef } from 'react';
import { View, Animated, FlatList, Text, Pressable,TouchableOpacity } from 'react-native';
import images from '../../assets/images/Articles/images';
import SlideImage from './SlideImage';

const SliderArticles = ({disabled}:any) => {
  
 const handlePress = () => {
  if (disabled) {
    return;
  }
};
 const scrollX = useRef(new Animated.Value(0)).current;

 useEffect(() => {
  Animated.loop(
    Animated.timing(scrollX, {
      toValue: images.length - 1,
      duration: 5000,
      useNativeDriver: true,
    })
  ).start();
 }, [images]);

 const renderItem = ({ item }) => {
  const inputRange = Array.from({ length: images.length }, (_, index) => index);
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: images.map((_, index) => -(index * 100)),
  });

  return (
    <Animated.View style={{ transform: [{ translateX }] }}>
      <SlideImage item={item} />
    </Animated.View>
  );
 };

 return (
  <TouchableOpacity onPress={handlePress}>
  <View>
    <Animated.FlatList
      data={images}
      renderItem={renderItem}
      horizontal
      pagingEnabled
      snapToInterval={100}
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: false }
      )}
    />
  </View>
  </TouchableOpacity>
 );
};

export default SliderArticles;
