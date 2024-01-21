import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, RefreshControl, TouchableOpacity } from 'react-native';
import { getJournals } from '../../api/journal/Journal';
import Diary from '../../components/Journal/Diary';
import { Ionicons } from '@expo/vector-icons';
import { ParamListBase, useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { Image } from "expo-image";
import Nav from '../Nav';
const Journal = () => {
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const { data: Journals, isLoading, isError, isFetched, refetch } = getJournals();

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch().then(() => setRefreshing(false)); // Assuming `refetch` is a function to re-fetch journals
  }, [refetch()]);

  return (
    <>
      <Nav />

      <View style={styles.container}>
        <Image
          style={styles.profileChild}
          contentFit="cover"
          source={require("../../assets/vector-2.png")}
        />
        <ScrollView
          style={styles.content}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <Text style={styles.headingText}>My Journal</Text>
          <View style={styles.card}>
            {Journals?.map((ele: any) => (
              <Diary
                key={ele.id}
                diary={{ content: ele.content, title: ele.title, id: ele.id }}
              // onDiaryDelete={() => (ele.id)} // Pass the onDiaryDelete prop
              />
            ))}
          </View>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("CreateJournal")}
          >
            <Ionicons name="add-circle-sharp" size={54} color="#ADD8C4" />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  profileChild: {
    bottom: -155,
    left: -262,
    width: 411,
    height: 358,
    position: "absolute",
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: "#f3f0ea",

  },
  content: {
    flex: 1,
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  headingText: {
    fontSize: 36,
    margin: 10,
    color: '#242424'
  },
  card: {
    flex: 1,
    gap: 20,


  },
});

export default Journal;
