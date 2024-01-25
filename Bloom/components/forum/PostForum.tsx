import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, TextInput, Alert, RefreshControl } from 'react-native';
import { ParamListBase, useNavigation } from '@react-navigation/core';
import { AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { useMutation, useQuery } from 'react-query';
import Autocomplete from 'react-native-autocomplete-input';
import axios from 'axios';

import { createCommentMutation, deleteCommentMutation, deletePostMutation, editCommentMutation, getUserIdFromUsername, useFetchComments } from '../../api/forum/Forum';

const PostForum = ({ refetch, post,id }: any) => {
  refetch(post);
  const [userSuggestions, setUserSuggestions] = useState([]);
  const [isTagging, setIsTagging] = useState(false);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [newComment, setNewComment] = useState('');
  const [voteStatus, setVoteStatus] = useState({ upvoted: false, downvoted: false });
  const [upvoteCount, setUpvoteCount] = useState(post.upvote);
  const [downvoteCount, setDownvoteCount] = useState(post.downvote);
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editedContent, setEditedContent] = useState("");
  const [posts, setPost] = useState();
  
  //  comments fetcher 
  const { data: comments, isLoading: isLoadingComments, refetch: refetchcomments } = useFetchComments(post.id);
  // comments deletion
  const { mutate: deleteComment } = deleteCommentMutation();
  // comments editor
  const { mutate: editComment } = editCommentMutation();
  // comments creation
  const { mutate: createComment, isLoading: isCommentLoading, isError: isCommentError } = createCommentMutation();
// post deletion
  const { mutate: deletePost } = deletePostMutation();
  //handle up vote changes
  const upvoteMutation = useMutation(async (postId) => {
    const response = await axios.put(`http://${process.env.EXPO_PUBLIC_ipadress}:3000/forum/posts/upvote`, { postId });
    return response.data;
  });
//handle down vote changes
  const downvoteMutation = useMutation(async (postId) => {
    const response = await axios.put(`http://${process.env.EXPO_PUBLIC_ipadress}:3000/forum/posts/downvote`, { postId });
    return response.data;
  });


  ////////////////////////////////input and tag handler////////////////////////////////
  const handleChangeText = (text: string) => {
    setNewComment(text);

    const tagMatch = text.match(/@\w*$/); // Regular expression to match '@' followed by username
    if (tagMatch) {
      setIsTagging(true);
      const searchQuery = tagMatch[0].slice(1); // Remove '@' from the search query
      axios.get(`http://${process.env.EXPO_PUBLIC_ipadress}:3000/forum/posts/searchUsers?q=${searchQuery}`)
        .then((response) => {
          setUserSuggestions(response.data.map((user: any) => user.username));
        })
        .catch((error) => console.error('Error fetching users:', error));
    } else {
      setIsTagging(false);
      setUserSuggestions([]);
    }
  };
//handle up vote changes
  const handleUpvote = () => {
    const currentlyUpvoted = voteStatus.upvoted;
    setVoteStatus({ upvoted: !currentlyUpvoted, downvoted: false });

    if (!currentlyUpvoted) {
      setUpvoteCount(upvoteCount + 1);
      upvoteMutation.mutate(post.id, {
        onSuccess: (data) => {
          // setPost({ ...post, upvotes: data.newUpvoteCount });
          refetch();
        }
      });
    } else {
      setUpvoteCount(upvoteCount - 1);
      downvoteMutation.mutate(post.id, {
        onSuccess: (data) => {
          refetch();
        }
      });
    }
  };
//handle down vote changes
  const handleDownvote = () => {
    const currentlyDownvoted = voteStatus.downvoted;
    setVoteStatus({ upvoted: false, downvoted: !currentlyDownvoted });

    if (!currentlyDownvoted) {
      setDownvoteCount(downvoteCount + 1);
      downvoteMutation.mutate(post.id, {
        onSuccess: (data) => {
          setPost({ ...post, downvotes: data.newDownvoteCount });
          refetch();
        }
      });
    } else {
      setDownvoteCount(downvoteCount - 1);
    }
  };
//handle comments deletion 
  const handleDeleteComment = (commentId: number) => {
    deleteComment(commentId, {
      onSuccess: () => {
        refetchcomments();
      },
      onError: (error) => {


      }
    });
  };

  //handle comments edit
  const handleEditComment = (commentId: number, newContent: string) => {
    editComment({ commentId, content: newContent }, {
      onSuccess: () => {
        refetchcomments();
      },
      onError: (error) => {

      }
    });
  };


  const startEditing = (comment: any) => {
    setEditingCommentId(comment.id);
    setEditedContent(comment.content);
  };


  const submitEdit = (commentId: number) => {
    handleEditComment(commentId, editedContent);
    setEditingCommentId(null);
    setEditedContent("");
    refetchcomments();
  };


  const cancelEdit = () => {
    setEditingCommentId(null);
    setEditedContent("");
  };
////////////////////////////////handle delete post ///////////////////////////////////////////
  const handleDeletePost = () => {
    if (post.authorId === id) {
      Alert.alert(
        "Delete Post",
        "Are you sure you want to delete this post?",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          {
            text: "OK",
            onPress: () => {
              deletePost(post.id, {
                onSuccess: () => {
                  refetch();
                },
                onError: (error) => {
                  console.error('Error deleting post', error)
                }
              });
            }
          }
        ],
        { cancelable: false }
      );
    } else {
      console.error('You do not have permission to delete this post');
    }
  };




// rendering the edit comment component
  const renderCommentOptions = (comment: any) => {
    if (comment.userId === id) {
      return (
        <View style={styles.commentOptionsContainer}>
          <TouchableOpacity onPress={() => startEditing(comment)}>
            <FontAwesome name="pencil" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDeleteComment(comment.id)}>
            <FontAwesome name="trash-o" size={24} color="red" />
          </TouchableOpacity>
        </View>
      );
    }
    return null;
  };

//handle add comment
  const handleAddComment =async () => {
    if (newComment) {
      const tagUsernameMatch = newComment.match(/@\w+/g);
      let tagId = null;

      if (tagUsernameMatch) {
          const tagUsername = tagUsernameMatch[0].slice(1);
          tagId = await getUserIdFromUsername(tagUsername);
      }

      const commentData = {
          content: newComment,
          postId: post.id,
          userId: id,
          tagId: tagId, 
      };
      console.log("Sending comment data: ", commentData);
      createComment(commentData, {
        onSuccess: () => {
          setNewComment('');
          refetchcomments();
        },



        onError: (error) => {
          console.error('Error adding comment', error);

        }
      });
    }
  };

  // comment rendering 
  const renderComment = ({ item }: any) => {
    const isEditing = item.id === editingCommentId;

    return (
      <View style={styles.commentContainer}>
        <Image source={{ uri: item.User.profile_picture }} style={styles.commentImage} />
        <View style={styles.commentTextContainer}>
          <Text style={styles.commentAuthor}>{item.User.first_name}</Text>
          {isEditing ? (
            <TextInput

              value={editedContent}
              onChangeText={setEditedContent}
              autoFocus
            />
          ) : (
            <Text style={styles.commentText}>{item.content}</Text>
          )}
        </View>
        {isEditing ? (
          <View style={styles.commentOptionsContainer}>
            <TouchableOpacity onPress={() => submitEdit(item.id)}>
              <MaterialIcons name="save-alt" size={24} color="#729384" />
            </TouchableOpacity>
            <TouchableOpacity onPress={cancelEdit}>
              <FontAwesome name="times" size={24} color="red" />
            </TouchableOpacity>
          </View>
        ) : (
          renderCommentOptions(item)
        )}
      </View>
    );
  };



  
  return (

    <TouchableOpacity>

      <View style={styles.postContainer}>
        <View style={styles.header}>
          <Image
            source={{ uri: post.author.profile_picture }}
            style={styles.profileImage}
          />
          <Text style={styles.authorName}>{post.author.first_name  }</Text>
          {post.authorId === id &&
            <TouchableOpacity onPress={handleDeletePost} style={styles.deleteIcon}>
              <MaterialIcons name="delete" size={24} color="#729384" />
            </TouchableOpacity>
          }
        </View>
        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.content} numberOfLines={3}>{post.content}</Text>

        <View style={styles.votingContainer}>
          <TouchableOpacity style={styles.voteButton} onPress={handleUpvote}>
            <AntDesign name="arrowup" size={24} color={voteStatus.upvoted ? "#4CAF50" : "black"} />
          </TouchableOpacity>
          <Text style={styles.voteText}>{post.upvote}</Text>

          <TouchableOpacity style={styles.voteButton} onPress={handleDownvote}>
            <AntDesign name="arrowdown" size={24} color={voteStatus.downvoted ? "#F44336" : "black"} />
          </TouchableOpacity>
          <Text style={styles.voteText}>{post.downvote}</Text>
        </View>

        <FlatList
          data={comments}
          renderItem={renderComment}
          keyExtractor={(item) => item.id.toString()}
          ListHeaderComponent={<Text>Comments</Text>}

        />

        <View style={styles.addCommentContainer}>
        <View style={{ flex: 1 }}>
 <TextInput
    style={styles.commentInput}
    placeholder="Add a comment..."
    value={newComment}
    onChangeText={handleChangeText}
 />

 {isTagging && (
    <FlatList
      style={styles.suggestionsList}
      data={userSuggestions}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => {
          setNewComment(newComment + item);
          setIsTagging(false);
        }}>
          <Text style={styles.suggestionItem}>{item}</Text>
        </TouchableOpacity>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
 )}
</View>
          <TouchableOpacity style={styles.enterButton} onPress={handleAddComment}>
            <AntDesign name="enter" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: '#F7F7F7',
    padding: 12,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  suggestionsList: {
   display : 'flex',
  },
  suggestionItem: {
    display : 'flex',
    padding: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    marginRight: 10,
  },
  authorName: {
    fontWeight: '600',
    fontSize: 15,
    color: '#333',
    flex: 1,
  },
  deleteIcon: {
    padding: 8,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#212121',
    marginBottom: 8,
  },
  content: {
    fontSize: 14,
    color: '#424242',
    marginBottom: 12,
  },
  votingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 12,
  },
  voteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  voteText: {
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 5,
  },
  addCommentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
    paddingTop: 8,
  },
  commentInput: {
    flex: 1,
    height: 40,
    fontSize: 14,
    paddingHorizontal: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#BDBDBD',
    marginRight: 8,
    color: '#333',
  },
  enterButton: {

  },
  commentContainer: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 8,
    marginVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  commentImage: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    marginRight: 10,
  },
  commentTextContainer: {
    flex: 1,
  },
  commentAuthor: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#333',
  },
  commentText: {
    fontSize: 13,
    color: '#555',
  },
  commentOptionsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
  },
});


export default PostForum;
