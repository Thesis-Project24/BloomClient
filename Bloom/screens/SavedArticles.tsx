import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import { useFetchSavedArticles } from "../api/articles/Articles";
import SavedArticle from "../components/articles/SavedArticle";
const SavedArticles = () => {
  const userId = 1;
  const { data, isLoading, isError, isSuccess } = useFetchSavedArticles(userId);
  console.log(data);

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View>
        <Text>Error occurred while fetching saved articles</Text>
      </View>
    );
  }
  if (!data || data.length === 0) {
    return (
      <View>
        <Text>No saved articles found.</Text>
      </View>
    );
  }

  return (
    <View>
      <ScrollView>
        <Image
          style={[styles.profileItem, styles.profilePosition]}
          // contentFit="cover"
          source={require("../../assets/vector-1.png")}
        />
        <Text style={styles.title}>Your Saved Articles</Text>

        {
          data.map((ele: any) => {

           return <SavedArticle
              key={ele.id}
              article={{
                id: ele.id,
                title: ele.article.title,
                content: ele.article.content,
                createdAt: ele.article.createdAt,
              }}
              author={{
                id: ele.article.author.id,
                firstName: ele.article.author.first_name,
                lastName: ele.article.author.last_name,
                profPicture: ele.article.author.profile_picture,
                spec: ele.article.specialty,
              }}
              />;
            })}
      </ScrollView>
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
  profilePosition: {
    left: 0,
    position: "relative",
  },
  profileItem: {
    height: 91,
    width: 390,
    top: 0,
    left: 0,
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
    marginLeft: 20,
  },
});

export default SavedArticles;
