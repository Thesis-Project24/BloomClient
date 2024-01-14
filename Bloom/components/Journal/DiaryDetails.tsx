import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getJournals, getOneJournal, useupdate } from '../../api/journal/Journal';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import { ParamListBase, useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';

const DiaryDetails = ({ navigation, route }: { navigation: string; route: { params: { id: number } } }) => {
  const { id } = route.params
  const { data, isLoading, isError, isFetched } = getOneJournal(id);
  const [content, setContent] = useState<string>(data?.content)
  const [title, setTitle] = useState<string>(data?.title)
  const [write, SetWrite] = useState<Boolean>(true)
  const { mutate, isLoading: isUpdating, isError: isUpdateError } = useupdate();
  const navigations = useNavigation<StackNavigationProp<ParamListBase>>();
  const { data: Journals,  refetch } = getJournals();
  const handleUpdate = () => {
    mutate({ authorid: 1, id, content, title });
     navigations.navigate('Journal')
     refetch()
     
  };



  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setContent(data.content);
    }
  }, [data]);
 

  if (isLoading) {
    return <View><Text>Loading...</Text></View>;
  }

  if (isError) {
    return <View><Text>Error loading journal entry.</Text></View>;
  }

  return (
    <ScrollView
      style={styles.primaryContainer}
      keyboardShouldPersistTaps={'always'}
    >

      <View
        style={styles.inputContainer}
      >

        <TextInput
          style={[styles.input, { fontSize: 45 }]}
          multiline={true}
          numberOfLines={2}
          value={title}
          onChangeText={setTitle}
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
          onChangeText={setContent}
          underlineColorAndroid='transparent'
        />
      </View>



      <FontAwesome
        name='check-circle'
        color='purple'
        size={44}
        style={styles.uploadBtn}
        onPress={handleUpdate}

      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({

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

export default DiaryDetails