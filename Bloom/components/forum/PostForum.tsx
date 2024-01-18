import { ParamListBase, useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Pressable,Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const PostForum = ({ post }) => {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  return (
    <Pressable onPress={() => navigation.navigate('PostDetails', { post })}>
    <View style={styles.postContainer}>
    <View style={styles.ident}>
        <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png' }}
          
          style={styles.Profileimage}
        />
        <View>
          <Text style={styles.name}>
            {/* {author.doctorName}
            {author.doctorLastName} */}
            amine
          </Text>
          
        </View>
      </View>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.content} numberOfLines={3}>{post.content}</Text>

      <View style={styles.votingContainer} >
        <TouchableOpacity onPress={() => {/* Handle upvote */}}>
          <Text>👍 {post.upvote ?? 0}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {/* Handle downvote */}}>
          <Text>👎 {post.downvote ?? 0}</Text>
        </TouchableOpacity>
        <TextInput style={styles.commentInput} placeholder="Add a comment..." />
      <Button title="Submit Comment" onPress={() => {/* Submit comment logic */}} />
      </View>
    </View>
    </Pressable>
  );
}; 

const styles = StyleSheet.create({
  postContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  commentInput: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 14,
    color: 'gray',
  },
  votingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  ident: {
    flex:1,
    flexDirection: "row",
    margin: 5,
  },
Profileimage: {
    width: 50,
    height: 50,
      // borderRadius:25,
    borderTopRightRadius: 14,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 14,
  
  },
name: {
    marginTop: 5,
    marginLeft: 10,
    // textDecorationLine: 'underline',
    color: "#242424",
    fontSize: 18,
    fontStyle: "italic",
  },
});

export default PostForum;
