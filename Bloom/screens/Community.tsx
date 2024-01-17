
import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { StyleSheet, Image,Pressable } from "react-native";
import { fetchForumPosts } from '../api/forum/Forum';
import { ForumPost } from '../type';
import ForumPostCard from '../components/forum/ForumPostCard';

const Community = () => {
  // const [forums,setForums] = React.useState<ForumPost[]>([])
  const {
    data: forumData,
    isLoading: forumLoading,
    isSuccess: forumSucess,
    isError: forumError, 
  } = fetchForumPosts();

    
    
  return (
    <View>
    
     {forumData?<Text> {forumData.map((post:any)=> {return <ForumPostCard post={post}/> })}</Text> :null }
     
     
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