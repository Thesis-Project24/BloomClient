import { View,KeyboardAvoidingView, Text,ScrollView,TextInput,StyleSheet, Platform } from 'react-native'
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
    
    <ScrollView
    >
      <View
        style={styles.inputContainer}
      >
        <TextInput
          style={[styles.input, { fontSize: 45 }]}
          multiline={true}
          numberOfLines={2}
          value={title}
          onChangeText={(text) => setTitle(text)}
          placeholder="Title"
        />
      </View>
      <View
        style={styles.inputContainer}
        >
  
        <TextInput
          style={styles.input}
          placeholder="Content"
          multiline={true}
          numberOfLines={10}
          value={content}
          onChangeText={(text) => setContent(text)}
          underlineColorAndroid='transparent'
          />
       

      </View>
      <FontAwesome
        name='check-circle'
        color='purple'
        size={44}
        style={styles.uploadBtn}
        onPress={handleSubmit}
        />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  profileChild: {
    bottom: -155,
    left: -262,
    width: 411,
    height: 358,
    position: "absolute",
  },

  handlewrite: {
    color: 'white',
  },
  headingText: {
    fontSize: 36,
    fontFamily: 'Nunito-Black',
    color: 'rgba(0,0,0,0.7)',
    margin: 10,
  },
  primaryContainer: {
    backgroundColor: '#F3F0EA',
    flex: 1,
    height: "100%",


  },
  btnText: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 18,
    color: 'white',
    textAlign: 'center'
  },
  gradient: {
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textShadowColor: '#fff',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  input: {
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 10,
    textAlignVertical: 'top',
    fontSize: 30
  },
  label: {
    fontSize: 18,
    margin: 10,
    fontFamily: 'Nunito-Regular',
  },
  touchabelBtn: {
    padding: 10,
    backgroundColor: 'lightgray',
    borderRadius: 7,
    shadowColor: 'gray',
    shadowOffset: {
      width: 1,
      height: 2,

      marginHorizontal: 20,
      justifyContent: 'center',
      alignItems: 'center'
    }
  },
  image: {
    width: 50,
    height: 50,
  },
  uploadBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
    color: '#729384',
    shadowOffset: {
      width: 1,
      height: 2
    },
    shadowOpacity: 0.5,
    elevation: 10,
  },
  inputContainer: {
    marginTop: 20,
  }
})

export default AddArticle