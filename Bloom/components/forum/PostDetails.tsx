import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase, useNavigation, useRoute } from "@react-navigation/core";
import { useQuery } from "react-query";
import axios from "axios";

const PostDetails = ({ route }: any) => {
  const { id, content, title, author, image } = route.params;
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const [newComment, setNewComment] = useState("");
  const [voteStatus, setVoteStatus] = useState({
    upvoted: false,
    downvoted: false,
  });

  // const fetchForumcomments = () => {
  //   return useQuery(
  //     "fetchcomment",
  //     async ({ postId }: any) => {
  //       const response = await axios.get(
  //         `http://${process.env.EXPO_PUBLIC_ipadress}:3000/forum/comments/${post.id}`
  //       );
  //       return response.data;
  //     },
  //     {
  //       onError: (error) => {
  //         console.error(error, "An error occurred");
  //       },
  //     }
  //   );
  // };
  //  console.log(post.id);

  // const { data: comments } = fetchForumcomments();

  // Dummy fetch function (replace with actual backend call)
  const handleUpvote = () => {
    // Implement upvote logic here
  };

  const handleDownvote = () => {
    // Implement downvote logic here
  };

  const handleAddComment = () => {
    // Add logic to post the comment to the backend
    setNewComment("");
  };

  // const renderComment = ({ item }) => (
  //   <View style={styles.commentContainer}>
  //     <Image source={{ uri: image }} style={styles.commentImage} />
  //     <View style={styles.commentTextContainer}>
  //       <Text style={styles.commentAuthor}>{item.name}</Text>
  //       <Text style={styles.commentText}>{item.text}</Text>
  //     </View>
  //   </View>
  // );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.postContainer}>
        {/* Post Header */}
        <View style={styles.header}>
          <Image source={{ uri: image }} style={styles.profileImage} />
          <Text style={styles.authorName}>{author}</Text>
        </View>

        {/* Post Title and Content */}
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>

        {/* Voting Section */}
        <View style={styles.votingContainer}>
          <TouchableOpacity style={styles.voteButton} onPress={handleUpvote}>
            <AntDesign
              name="arrowup"
              size={24}
              color={voteStatus.upvoted ? "#4CAF50" : "black"}
            />
            {/* <Text style={styles.voteText}>{post.upvotes}</Text> */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.voteButton} onPress={handleDownvote}>
            <AntDesign
              name="arrowdown"
              size={24}
              color={voteStatus.downvoted ? "#F44336" : "black"}
            />
            {/* <Text style={styles.voteText}>{post.downvotes}</Text> */}
          </TouchableOpacity>
        </View>

        {/* Comments Section */}
        {/* <FlatList
          // data={post.comments}
          renderItem={renderComment}
          keyExtractor={(item) => item.id.toString()}
        /> */}

        {/* Add Comment Section */}
        <View style={styles.addCommentContainer}>
          <TextInput
            style={styles.commentInput}
            placeholder="Add a comment..."
            value={newComment}
            onChangeText={setNewComment}
          />
          <TouchableOpacity
            style={styles.enterButton}
            onPress={handleAddComment}
          >
            <AntDesign name="enter" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  postContainer: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    marginBottom: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  authorName: {
    fontWeight: "bold",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  content: {
    fontSize: 14,
    color: "gray",
    marginBottom: 10,
  },
  votingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 10,
  },
  voteButton: {
    marginHorizontal: 5,
  },
  voteText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  addCommentContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  commentInput: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 20,
    paddingHorizontal: 10,
    flexGrow: 1,
    marginRight: 10,
    height: 50,
  },
  enterButton: {
    // styles for enter button
  },
  commentContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 8,
    borderRadius: 4,
    marginTop: 4,
  },
  commentImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  commentTextContainer: {
    flex: 1,
  },
  commentAuthor: {
    fontWeight: "bold",
  },
  commentText: {
    color: "gray",
  },
  // Add more styling as needed
});

export default PostDetails;
