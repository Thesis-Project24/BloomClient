import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { ParamListBase, useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { Swipeable } from 'react-native-gesture-handler';
import { useDeleteJournal } from '../../api/journal/Journal';
import { Ionicons } from '@expo/vector-icons'; // Ensure you have this dependency

interface DiaryProps {
  diary: { content: string, title: string, id: number };
  onDiaryDelete: () => void;
}

const Diary = ({ diary, onDiaryDelete }: DiaryProps) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const { mutate: deleteJournal } = useDeleteJournal();
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = () => {
    deleteJournal({ authorid: 1, id: diary.id }, {
      onSuccess: () => {
        console.log('Deletion successful');
        setIsDeleted(true);
        onDiaryDelete();
      },
      onError: (error) => {
        console.error("Error deleting journal: ", error);
        // Add error handling logic here
      }
    });
  };

  const renderRightActions = (progress:any, dragX:any) => {
    const scale = dragX.interpolate({
      inputRange: [0, 50],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });

    const backgroundColor = dragX.interpolate({
      inputRange: [0, 1],
      outputRange: ['#FF6347', '#FF6347'],
      extrapolate: 'clamp',
    });

    return (
      <Animated.View style={[styles.rightAction, { backgroundColor }]}>
        <Animated.Text style={[styles.actionText, { transform: [{ scale }] }]}>
        </Animated.Text>
      </Animated.View>
    );
  };

  if (isDeleted) return null;

  return (
    <Swipeable renderRightActions={renderRightActions} onSwipeableRightOpen={handleDelete}>
      <View style={styles.card}>
        <TouchableOpacity
          onPress={() => navigation.navigate('DiaryDetails', { id: diary.id, title: diary.title, content: diary.content })}
          style={styles.touchableArea}
        >
          <Text style={styles.title}>{diary.title}</Text>
          <Text style={styles.content} numberOfLines={2}>{diary.content}</Text>
        </TouchableOpacity>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    // marginBottom: 15,
    padding: 15,
    width: '90%',
    alignSelf: 'center',
  },
  touchableArea: {
    alignItems: 'center', 
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#729384',
    marginBottom: 10,

  },
  content: {
    color: '#666',
    fontSize: 16,
    lineHeight: 24,
  },
  rightAction: {
    justifyContent: 'center',
    flex: 1,
    // paddingLeft: 20,
    marginLeft:29,
    height: "100%",
    width: '100%',
  },
  actionText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  deleteBox: {
    backgroundColor: '#FF6347',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 1,
    paddingRight: 20,
  },
  deleteContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deleteText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    paddingLeft: 10,
  },
});
export default Diary;