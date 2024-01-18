import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button, TextInput } from 'react-native';


const PostDetails = ({ route }) => {
  // Assuming post data is passed via route.params
  const { post } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.content}>{post.content}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 16,
    marginVertical: 10,
    backgroundColor:'#F3F0EA',
    margin: 10,
  },
  votingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  commentInput: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginVertical: 10,
  },
  
});

export default PostDetails;
