import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import { useFetchOneArticle } from '../../api/articles/Articles';
import { Title } from 'react-native-paper';
import { FontFamily } from '../../GlobalStyles';
import { ScrollView } from 'react-native-gesture-handler';

const ArticleDet = ({route}:any) => {
  const {id,content,title,docLastName,docProfile,doctorName,createdAt} = route.params
  console.log(id,':id');
  
  
  return (
    <ScrollView>
    <View style={styles.bigContainer}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.ident}>
      <Image source={{ uri: docProfile }} style={styles.Profileimage} />
      <View>
      <Text style={styles.name}>{doctorName}{docLastName}</Text>
      <Text style={styles.date} >{createdAt}</Text>
      </View>
      </View>
      <Text style={styles.content}>{content}</Text>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  bigContainer : {
    flex:1,
    alignContent: "center",
    paddingTop: 90,
  },
  title:{
    color:"#729384",
    fontSize:32,
    margin:20,
    fontFamily:FontFamily.tajawalBold,
    fontWeight:'bold'
  },
  image:{
    width:350,
    height:250,
    margin:40
  },
  ident:{
    // flex:1,
    flexDirection:'row',
    margin: 20,
},
date:{
  textDecorationLine:'underline',
  marginTop:5,
},
name:{
    marginTop:5,
    marginLeft:5,
    // textDecorationLine: 'underline',
    color:"#242424",
    fontSize:21,
    fontStyle:'italic'
},
article:{
    marginLeft:15,
    // marginTop:10,
    
},
Profileimage:{
  borderRadius:25,
  height:50,
  width:50
},
content:{
 margin:45,
 fontSize:18
}
})

export default ArticleDet