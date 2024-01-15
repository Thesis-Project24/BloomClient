import * as React from "react";
import {
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    View,
    TextInput,
    Pressable,
} from "react-native";


const ForumPostCard = ({post})=> {
    return (<View><Text> {post.content}</Text>
    <Text> {(post.upvote-post.downvote)}</Text></View>
        
  )
}

export default ForumPostCard