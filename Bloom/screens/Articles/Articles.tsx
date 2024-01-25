import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React, { useState,useEffect } from "react";
import {  useSearchArticles } from "../../api/articles/Articles";
import { FontFamily } from "../../GlobalStyles";
import { ScrollView } from "react-native-gesture-handler";
import SliderArticles from "../../components/articles/SliderArticles";
import Article from "../../components/articles/Article";
import ArticleDet from "../../components/articles/ArticleDet";
import AddArticle from "../../components/articles/AddArticle";
import SavedArticles from "../SavedArticles";
import { SearchBar } from "@rneui/themed";
const Articles = () => {
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const { data, isLoading, isError, isSuccess, refetch } = useSearchArticles(searchKeyword)
  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  useEffect(() => {
    if (searchKeyword) {
      const lowerCaseKeyword = searchKeyword.toLowerCase();
      setFilteredData(
        data.filter((article:any) =>
          article.title.toLowerCase().includes(lowerCaseKeyword) ||
          article.content.toLowerCase().includes(lowerCaseKeyword)
        )
      );
    } else {
      setFilteredData(data);
    }
  }, [searchKeyword, data]);
 
  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (isError) {
    return <Text>Error loading Articles</Text>;
  }
  return (
    <View style={styles.bigContainer}>
      <ScrollView
       showsVerticalScrollIndicator={false}
       showsHorizontalScrollIndicator={false}
      
      >
        <Image
          style={[styles.profileItem, styles.profilePosition]}
          // contentFit="cover"
          source={require("../../assets/vector-1.png")}
        />
        {/* image carrossel  */}
        
        <SliderArticles disabled = {true} />
    
        <SearchBar
         placeholder="Look for your article"
         containerStyle={{ backgroundColor: "#ADD8C4", borderRadius: 30 }}
         inputContainerStyle={{ borderRadius: 25, backgroundColor: "#ADD8C4" }}
         onChangeText={setSearchKeyword}
         value={searchKeyword}
       />
        {filteredData &&
         filteredData.map((ele: any) => {
           return (
             <Article
               key={ele.id}
               article={{
                id: ele.id,
                content: ele.content,
                title: ele.title,
                createdAt: ele.createdAt,
               }}
               author={{
                id: ele.authorId,
                doctorName: ele.author.first_name,
                doctorLastName: ele.author.last_name,
                doctorProfilePicture: ele.author.profile_picture,
               }}
               refetch={refetch}
             />
           );
         })}
         
        {/* <SavedArticles/> */}
        {/* <AddArticle/> */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F0EA",
  },
  Title: {
    fontFamily: FontFamily.tajawalMedium,
    textAlign: "center",
    fontSize: 26,
  },
  images: {
    width: 250,
    height: 200,
  },
  bigContainer: {
    marginTop: 0,
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
});

export default Articles;
