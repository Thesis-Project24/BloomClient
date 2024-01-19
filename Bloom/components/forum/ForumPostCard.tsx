import * as React from "react";
import {
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  TextInput,
  Pressable,
} from "react-native";
import {
  Color,
  FontFamily,
  FontSize,
  Border,
  Padding,
} from "../../GlobalStyles";
import { downvotePost, upvotePost } from "../../api/forum/Forum";
const ForumPostCard = ({ post }) => {
  const [score, setScore] = React.useState(post.upvote - post.downvote);
  const mutationUp = upvotePost();
  const mutationDown = downvotePost();
  return (
    <View style={styles.layout}>
      <Text style={styles.title}> {post.content}</Text>
      <Text> {score}</Text>
      <TouchableOpacity
        onPress={() => {
          mutationUp.mutate(post.id);
          setScore(post.upvote - post.downvote);
        }}
      >
        <Text>upvote</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          mutationDown.mutate(post.id);
          setScore(post.upvote - post.downvote);
        }}
      >
        <Text>downvote</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    width: "100%",
    height: "100%",
  },
  title: {
    color: Color.black,
    fontFamily: FontFamily.tajawalBold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
  },
});

export default ForumPostCard;
