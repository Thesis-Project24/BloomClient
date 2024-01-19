import React from 'react';
import { View, Text,StyleSheet ,ScrollView,Image} from 'react-native';

interface AuthorProps {
 id: number;
 firstName: string;
 lastName: string;
 profPicture: string;
 spec: string;
}

interface ArticleProps {
 id: number;
 title: string;
 content: string;
 createdAt: string;
}

interface SavedArticleProps {
 article: ArticleProps;
 author: AuthorProps;
}

const SavedArticle: React.FC<SavedArticleProps> = ({ article, author }) => {
  console.log(article.content);
  
 return (
  <ScrollView>
  <View style={styles.bigContainer}>
    <Text style={styles.title}>{article.title}</Text>
    <View style={styles.ident}>
    <Image source={{ uri: author.profPicture }} style={styles.Profileimage} />
    <View>
    <Text style={styles.name}>{author.firstName}{author.lastName}</Text>
    <Text style={styles.date} >{article.createdAt}</Text>
    </View>
    </View>
    <Text style={styles.content}>{article.content}</Text>
  </View>
  </ScrollView>
 );
};

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
      // fontFamily:FontFamily.tajawalBold,
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
export default SavedArticle;
