import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, RefreshControl, TouchableOpacity } from 'react-native';
import { getJournals } from '../../api/journal/Journal';
import Diary from '../../components/Journal/Diary';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { Image } from "expo-image";
import Nav from '../Nav';
import { getAuth } from 'firebase/auth';
import { app } from '../../firebase.config';
import axios from 'axios';

const Journal = () => {
  const [authorId, setAuthorId] = useState(null);
  const [data, setData] = useState({});
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation<StackNavigationProp<any>>();

  // Fetch journals when authorId is set
  const { data: Journals, isLoading, isError, isFetched, refetch } = getJournals(authorId);

  useEffect(() => {
    const auth = getAuth(app);
    const uid = auth.currentUser?.uid;
    if (uid) {
      setAuthorId(uid);
      axios.get(`http://${process.env.EXPO_PUBLIC_ipadress}:3000/users/${uid}`)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    if (authorId) {
      refetch().then(() => setRefreshing(false));
    } else {
      setRefreshing(false);
    }
  }, [refetch, authorId]);

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
            {Journals?.map((ele) => (
              <Diary
                key={ele.id}
                diary={{ content: ele.content, title: ele.title, id: ele.id, authorId: ele.authorId }}
                onDiaryDelete={() => (ele.id)}
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
};
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
    marginBottom: 140,
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
