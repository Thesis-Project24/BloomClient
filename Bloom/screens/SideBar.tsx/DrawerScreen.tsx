import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { useDrawerProgress } from '@react-navigation/drawer';

const DrawerScreen = ({ children }: { children: React.ReactNode }) => {
  const progress = useDrawerProgress();

  const animatedStyle = useAnimatedStyle(() => {
    const rotateYValue = interpolate(progress.value, [0, 1], [0, -0.28], 'clamp');

    return {
      transform: [
        { perspective: 1000 }, // This makes the element look like it's in
        { scale: interpolate(progress.value, [0, 1], [1, 0.8], 'clamp') },
        { rotateY: `${rotateYValue}rad` }, // Use template literal to concatenate with 'rad' or "deg"
        {translateX: interpolate(progress.value, [0, 1], [0,0, -60], 'clamp')}
      ],
      borderRadius: 20,
      overflow: 'hidden',
    };
  });

  return (
    <Animated.View style={[styles.projectsLayout, animatedStyle]}>
      {children}
    </Animated.View>
  );
};

export default DrawerScreen;

const styles = StyleSheet.create({
  projectsLayout: {
    overflow: 'hidden',
    height: '100%',
    flex: 1,
  },
});
