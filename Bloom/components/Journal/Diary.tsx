import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { ParamListBase, useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { Swipeable } from 'react-native-gesture-handler';
import { useDeleteJournal } from '../../api/journal/Journal';

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
        
      }
    });
  };

  const renderRightActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });

    return (
      <Animated.View style={{
        flex: 1,
        transform: [{ translateX: trans }],
        backgroundColor: 'red',
        justifyContent: 'center',
        padding: 20
      }}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Deleting...</Text>
      </Animated.View>
    );
  };

  if (isDeleted) return null; 

  return (
    <Swipeable
      renderRightActions={renderRightActions}
      onSwipeableRightOpen={handleDelete}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate('DiaryDetails', { id: diary.id, title: diary.title, content: diary.content })}
        style={{ alignItems: 'center', flex: 1 }}
      >
        <View style={styles.card}>
          <Text style={styles.title}>{diary.title}</Text>
          <Text style={styles.content} numberOfLines={2}>{diary.content}</Text>
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    paddingLeft: 20,
  },
  content: {
    color: '#666',
    fontSize: 16,
    paddingLeft: 20,
    paddingRight: 20,
    lineHeight: 24,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 15,
    padding: 15,
    width: '90%',
  },
  deleteBox: {
    backgroundColor: '#FF6347',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 1,
    paddingRight: 20,
  },
  deleteText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 20,
  },
});
export default Diary;