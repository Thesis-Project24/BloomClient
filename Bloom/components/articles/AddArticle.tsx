import { View,KeyboardAvoidingView, Text,ScrollView,TextInput,StyleSheet, Platform,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { createArticle } from '../../api/articles/Articles'
import { FontAwesome } from '@expo/vector-icons'

const AddArticle = () => {
    const [title,setTitle] = useState<string>("")
    const [content,setContent] = useState<string>("")
    const [authorId,setAuthorId]= useState<number>(1)
    const createMutation = createArticle()
    const handleSubmit = ()=>{
        createMutation.mutate(
            {title,content,authorId}
        )
    }
  return (
    
<View style={styles.container}>
      <Text style={styles.header}>Create An Article</Text>

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

      <TouchableOpacity style={styles.button} onPress={handleSubmit }>
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
    flexDirection:'column',
    justifyContent:'space-between'
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 55,
    color: '#333',
    alignSelf:'center',
    
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


export default AddArticle