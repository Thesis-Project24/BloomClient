
import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { StyleSheet, Image,Pressable } from "react-native";
import { fetchForumPosts } from '../api/forum/Forum';
import { ForumPost } from '../type';
import ForumPostCard from '../components/forum/ForumPostCard';

const Community = () => {
  const [forums,setForums] = React.useState<ForumPost[]>([])
  const {
    data: forumData,
    isLoading: forumLoading,
    isSuccess: forumSucess,
    isError: forumError, 
  } = fetchForumPosts();
  console.log(forumData, "in page")
  console.log(forumSucess)    
    
  return (
    <View>
    
       <Text style={[styles.textPosition]}>Community</Text>
      {/* {forumData ? (
        {forumData.map(forumPost=> {
          return <View> <Text>{forumPost.content}</Text></View>
        })}
     ):null} */}
     {forumData?<Text> {forumData.map((post)=> {return <ForumPostCard post={post}/> })}</Text> :null }
     
     
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