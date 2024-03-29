import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text, ActivityIndicator, Image } from 'react-native';
import PostForum from '../components/forum/PostForum';
import { Ionicons } from '@expo/vector-icons';
import { ParamListBase, useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import axios from 'axios';
import { useQuery } from 'react-query';
import { getAuth } from 'firebase/auth';
import { app } from '../firebase.config';

const fetchForumPosts = () => {
  return useQuery('fetchForum', async () => {
    const response = await axios.get(`http://${process.env.EXPO_PUBLIC_ipadress}:3000/forum/posts/`);
    return response.data;
  }, {
    onError: (error) => {
      console.error(error, "An error occurred");
    },
  });
};

const Community = () => {



  const [data,setData]= React.useState({})
  const [authorId,setAuthorId] = useState(null)
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




  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const { data: posts, isLoading, error,refetch } = fetchForumPosts();

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error fetching posts</Text>;
  }

  return (
    <View>
      <Image
        style={[styles.profileItem, styles.profilePosition]}

        source={require("../assets/vector-1.png")}
      />
      <View style={styles.container}>
        
        <FlatList
          data={posts}
          renderItem={({ item }) => <PostForum refetch={refetch} post={item} id={
            authorId}/>}
          keyExtractor={(item) => item.id.toString()}
          // ListFooterComponent={()=><Ionicons name="add-circle-sharp" size={54} color="#ADD8C4" style={styles.icon} onPress={() => navigation.navigate("CreatePost")} />}
        />
      <Ionicons name="add-circle-sharp" size={54} color="#ADD8C4" style={styles.icon} onPress={() => navigation.navigate("CreatePost",{
        id:authorId,
      })} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height:"95%",
    paddingTop: 20,
    backgroundColor: "#F3F0EA",
    paddingBottom:80
  },
  profilePosition: {
    left: 0,
    position: "relative",
  },
  profileItem: {
    height: 91,
    width: 390,
    top: 0,
    left: 0,
  },
  icon: {
    alignSelf: 'center',
    marginBottom: 140,
  },
});

export default Community;
