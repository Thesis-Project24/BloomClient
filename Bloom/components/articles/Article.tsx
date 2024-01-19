import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Entypo } from "@expo/vector-icons";
import { useSaveArticle,deleteArticle } from "../../api/articles/Articles";
import Toast from "react-native-root-toast";
import { useMutation } from "react-query";
import { Ionicons } from '@expo/vector-icons';
interface ArticleProps {
  article: {
    picture_url: string;
    id: number;
    content: string;
    title: string;
    createdAt: string;
  };
  author: {
    id: number;
    doctorName: string;
    doctorLastName: string;
    doctorProfilePicture: string;
  };

}

const Article = ({ article, author,refetch }: ArticleProps& { refetch: () => void }) => {
  const navigation = useNavigation();
  const [saveArticle] = useSaveArticle();

  const mutation = useMutation(deleteArticle)
  const handleDelete = async () => {
    try {
      await mutation.mutateAsync(article.id);
      refetch()
      
    } catch (error) {
     console.log(error,"Deletion failed");
     
    }
   };
  return (
    <View style={styles.container}>
      <View style={styles.ident}>
      
        <Image
          source={{ uri: author.doctorProfilePicture }}
          style={styles.Profileimage}
        />
        <View>
          <Text style={styles.name}>
            {author.doctorName}
            {author.doctorLastName}
          </Text>
          <Text style={styles.date}>{article.createdAt}</Text>
        </View>
        <Pressable onPress={()=>{
          handleDelete()
        }}>
        <Ionicons style={styles.bin} name="trash-bin-outline" size={24} color="black" />
        </Pressable>
      </View>
      <Text style={styles.title}>{article.title}</Text>
      <View style={styles.articleContainer}>
        <Text style={styles.article} numberOfLines={4}>
          {article.content}
        </Text>
        <View style={styles.CTA}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("AritcleDet", {
                id: article.id,
                content: article.content,
                picture: article.picture_url,
                title: article.title,
                createdAt: article.createdAt,
                doctorName: author.doctorName,
                docLastName: author.doctorLastName,
                docProfile: author.doctorProfilePicture,
              });
            }}
          >
            <Text style={styles.rm}>Read more</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              console.log("test");

              saveArticle({ userId: 1, articleId: article.id });
              Toast.show("Article Saved !", {
                duration: 2000,
              });
            }}
          >
            <Entypo name="bookmark" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Profileimage: {
    width: 50,
    height: 50,
    //   borderRadius:25,
    borderTopRightRadius: 14,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 14,
  },

  ident: {
    // flex:1,
    flexDirection: "row",
    margin: 20,
  },

  name: {
    marginTop: 5,
    marginLeft: 5,
    // textDecorationLine: 'underline',
    color: "#242424",
    fontSize: 18,
    fontStyle: "italic",
  },
  article: {
    marginLeft: 15,
    // marginTop:10,
  },
  container: {
    marginBottom: 25,
    backgroundColor: "#F3F0EA",
    borderRadius: 10,
    width: 350,
    alignSelf: "center",
    height: 390,
  },
  articleContainer: {
    flex: 1,
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
  },
  rm: {
    position: "absolute",
    bottom: 0,
    right: 10,
    textDecorationLine: "underline",
  },
  date: {
    textDecorationLine: "underline",
    marginTop: 5,
  },
  CTA: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    margin: 20,
    bottom: -70,
  },
  title: {
    // // fontFamily:FontFamily.tajawalBold,
    color: "#729384",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    marginRight: 20,
  },
  bin:{
    left : 110
  }
});
export default Article;
