import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
} from "react-native";
import { ParamListBase, useNavigation } from "@react-navigation/core";
import { AntDesign } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import { useMutation, useQuery } from "react-query";
import axios from "axios";
import { createComment } from "../../api/forum/Forum";

const PostForum = ({ refetch, post }: any) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [newComment, setNewComment] = useState("");
  const [voteStatus, setVoteStatus] = useState({
    upvoted: false,
    downvoted: false,
  });
  const [upvoteCount, setUpvoteCount] = useState(post.upvote);
  const [downvoteCount, setDownvoteCount] = useState(post.downvote);
  console.log(post.id);

  const [posts, setPost] = useState();
  const { mutate: createC, isLoading, isError, error } = createComment();

  const upvoteMutation = useMutation(async (postId) => {
    const response = await axios.put(
      `http://${process.env.EXPO_PUBLIC_ipadress}:3000/forum/posts/upvote`,
      { postId }
    );
    return response.data;
  });

  const downvoteMutation = useMutation(async (postId) => {
    const response = await axios.put(
      `http://${process.env.EXPO_PUBLIC_ipadress}:3000/forum/posts/downvote`,
      { postId }
    );
    return response.data;
  });

  const handleUpvote = () => {
    const currentlyUpvoted = voteStatus.upvoted;
    setVoteStatus({ upvoted: !currentlyUpvoted, downvoted: false });

    if (!currentlyUpvoted) {
      upvoteMutation.mutate(post.id, {
        onSuccess: (data) => {
          // Assuming data.newUpvoteCount contains the updated count
          setPost({ ...post, upvotes: data.newUpvoteCount });
          refetch();
        },
      });
    } else {
      // Handle unvoting logic if required
    }
  };

  const handleDownvote = () => {
    const currentlyDownvoted = voteStatus.downvoted;
    setVoteStatus({ upvoted: false, downvoted: !currentlyDownvoted });

    if (!currentlyDownvoted) {
      downvoteMutation.mutate(post.id, {
        onSuccess: (data) => {
          // Assuming data.newDownvoteCount contains the updated count
          setPost({ ...post, downvotes: data.newDownvoteCount });
          refetch();
        },
      });
    } else {
      // Handle unvoting logic if required
    }
  };

  // const renderComment = ({}) => (
  //   <View style={styles.commentContainer}>
  //     <Image source={{ uri: item.photoUrl }} style={styles.commentImage} />
  //     <View style={styles.commentTextContainer}>
  //       <Text style={styles.commentAuthor}>{data.name}</Text>
  //       <Text style={styles.commentText}>{item.text}</Text>
  //     </View>
  //   </View>
  // );

  const handleAddComment = async () => {
    const data = {
      content: "test",
      postId: 2,
      userId: 1,
    };
    try {
      await createC(data);
      console.log("Comment created successfully");
    } catch (error) {
      console.error("Failed to create comment", error);
    }
  };

  // const fetchForumcomments = () => {
  //  return useQuery('fetchcomment', async ({postId}:any) => {
  //    const response = await axios.get(`http://${process.env.EXPO_PUBLIC_ipadress}:3000/forum/comments/${post.id}`);
  //    return response.data;
  //  }, {
  //    onError: (error) => {
  //      console.error(error, "An error occurred");
  //    },
  //  });
  // };
  // const { data: comments } = fetchForumcomments();
  // console.log(comments);

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("PostDetails", {
          id: post.id,
          content: post.content,
          title: post.title,
          author: post.author.username,
          image: post.author.profile_picture,
        })
      }
    >
      <View style={styles.postContainer}>
        <View style={styles.header}>
          <Image
            source={{ uri: post.author.profile_picture }}
            style={styles.profileImage}
          />
          <Text style={styles.authorName}>{post.author.fullName}</Text>
        </View>
        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.content} numberOfLines={3}>
          {post.content}
        </Text>

        <View style={styles.votingContainer}>
          <TouchableOpacity style={styles.voteButton} onPress={handleUpvote}>
            <AntDesign
              name="arrowup"
              size={24}
              color={voteStatus.upvoted ? "#4CAF50" : "black"}
            />
          </TouchableOpacity>
          <Text style={styles.voteText}>{post.upvote}</Text>

          <TouchableOpacity style={styles.voteButton} onPress={handleDownvote}>
            <AntDesign
              name="arrowdown"
              size={24}
              color={voteStatus.downvoted ? "#F44336" : "black"}
            />
          </TouchableOpacity>
          <Text style={styles.voteText}>{post.downvote}</Text>
        </View>

        {/* <FlatList
          data={post.comments}
          renderItem={renderComment}
          keyExtractor={(item) => item.id.toString()}
        /> */}

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
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: "#F3F0EA",
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
    color: "black",
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
    color: "black",
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
});

export default PostForum;
