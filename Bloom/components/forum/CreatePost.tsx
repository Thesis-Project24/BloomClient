import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { createForumPost } from '../../api/forum/Forum'
import { ParamListBase, useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
const CreatePost = ({route}:any) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [authorId, setAuthorId] = useState('');
  const { mutate: createPost, isLoading, isError, error } = createForumPost();
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
const {id}=route.params
console.log(id);

  const handleSubmit = () => {
    if (title && content) {
      const postData = { title, content ,authorId:id};
      console.log("Post Data: ", postData);  
      createPost(postData);
navigation.navigate('Community')
    } else {
      console.log('Error creating forum post'); 
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create a New Post</Text>

      <TextInput
        style={styles.input}
        placeholder="Title ..."
        placeholderTextColor="#888"
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="What's on your mind?"
        placeholderTextColor="#888"
        value={content}
        onChangeText={setContent}
        multiline
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Post</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: 20,
    paddingTop: 100,
    backgroundColor: '#F3F0EA',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 4,
    marginBottom: 10,
    fontSize: 16,
    color: '#333',
  },
  textArea: {
    height: 150,
  },
  button: {
    backgroundColor: '#ADD8C4',
    padding: 15,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  // Add more styling as needed
});

export default CreatePost;
