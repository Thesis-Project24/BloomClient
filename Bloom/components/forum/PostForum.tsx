import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, TextInput, Alert, RefreshControl } from 'react-native';
import { ParamListBase, useNavigation } from '@react-navigation/core';
import { AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { useMutation, useQuery } from 'react-query';
import axios from 'axios';
import {  createCommentMutation, deleteCommentMutation, deletePostMutation, editCommentMutation, useFetchComments } from '../../api/forum/Forum';

const PostForum = ({refetch, post }:any) => {
refetch(post);

  const { data: comments, isLoading: isLoadingComments } = useFetchComments(post.id);
  const { mutate: deleteComment } = deleteCommentMutation();
  const { mutate: editComment } = editCommentMutation();
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [newComment, setNewComment] = useState('');
  const [voteStatus, setVoteStatus] = useState({ upvoted: false, downvoted: false });
  const [upvoteCount, setUpvoteCount] = useState(post.upvote);
  const [downvoteCount, setDownvoteCount] = useState(post.downvote);
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editedContent, setEditedContent] = useState("");
  
  const isAuthor = post.author.id === 1
  const [posts, setPost] = useState();
  const { mutate: createComment, isLoading: isCommentLoading, isError: isCommentError } = createCommentMutation();
  const { mutate: deletePost } = deletePostMutation();

  const upvoteMutation = useMutation(async (postId) => {
    const response = await axios.put(`http://${process.env.EXPO_PUBLIC_ipadress}:3000/forum/posts/upvote`, { postId });
    return response.data;
  });
  
  const downvoteMutation = useMutation(async (postId) => {
    const response = await axios.put(`http://${process.env.EXPO_PUBLIC_ipadress}:3000/forum/posts/downvote`, { postId });
    return response.data;
  });
  
  const handleUpvote = () => {
    const currentlyUpvoted = voteStatus.upvoted;
    setVoteStatus({ upvoted: !currentlyUpvoted, downvoted: false });
    
    if (!currentlyUpvoted) {
      upvoteMutation.mutate(post.id, {
        onSuccess: (data) => {
          
          setPost({ ...post, upvotes: data.newUpvoteCount });
          refetch();
        }
      });
    } else {
      
    }
  };
  
  const handleDownvote = () => {
    const currentlyDownvoted = voteStatus.downvoted;
    setVoteStatus({ upvoted: false, downvoted: !currentlyDownvoted });
    
    if (!currentlyDownvoted) {
      downvoteMutation.mutate(post.id, {
        onSuccess: (data) => {
          
          setPost({ ...post, downvotes: data.newDownvoteCount });
          refetch();
        }
      });
    } else {
      
    }
  };
  const handleDeleteComment = (commentId:number) => {
    deleteComment(commentId, {
      onSuccess: () => {
       refetch();
      },
      onError: (error) => {
      
        
      }
    });
  };

  const handleEditComment = (commentId:number, newContent:string) => {
    editComment({ commentId, content: newContent }, {
      onSuccess: () => {
       refetch();
      },
      onError: (error) => {
      
      }
    });
  };
  

  
  const startEditing = (comment:any) => {
    setEditingCommentId(comment.id);
    setEditedContent(comment.content);
  };
  
  const submitEdit = (commentId:number) => {
    handleEditComment(commentId, editedContent);
    setEditingCommentId(null);
    setEditedContent("");
    refetch();
  };
  
  
  const cancelEdit = () => {
    setEditingCommentId(null);
    setEditedContent("");
  };
  
  const handleDeletePost = () => {
    if (post.authorId === 1) {
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
  




  const renderCommentOptions = (comment:any) => {
    if (comment.userId === 1) {
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
  
  
  const renderComment = ({ item }:any) => {
    const isEditing = item.id === editingCommentId;
  
    return (
      <View style={styles.commentContainer}>
        <Image source={{ uri: item.User.profile_picture }} style={styles.commentImage} />
        <View style={styles.commentTextContainer}>
          <Text style={styles.commentAuthor}>{item.User.fullName}</Text>
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
  // const postComment=async ()=>{
  //   try {
  //     await axios.post(`http://${process.env.EXPO_PUBLIC_ipadress}:3000/forum/comments/`, { content:"jhbjhcv", postId:4, userId:1 })
  //   console.log("added");
    
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  
  const handleAddComment =  () => {
    if (newComment) {
      const commentData = {
        content: newComment,
        postId: post.id,
        userId: 1, 
      };
      console.log("Sending comment data: ", commentData);
      createComment(commentData, {
        onSuccess: () => {
          setNewComment(''); 
          refetch()
        },
        onError: (error) => {
          console.error('Error adding comment', error);
          
        }
      });
    }
  };
  return (
    
    <TouchableOpacity onPress={() => navigation.navigate("PostDetails",{id: post.id,
      content: post.content,
      title: post.title,
      author: post.author.fullName,
      image: post.author.profile_picture,
      upvotes: upvoteCount,
      downvotes: downvoteCount,
      handleUpvote,
      handleDownvote,
      editComment, 
      deleteComment})}>
      
      <View style={styles.postContainer}>
        <View style={styles.header}>
          <Image
            source={{ uri: post.author.profile_picture }}
            style={styles.profileImage}
            />
          <Text style={styles.authorName}>{post.author.fullName}</Text>
          {post.authorId === 1 && 
            <TouchableOpacity onPress={handleDeletePost} style={styles.deleteIcon}>
              <MaterialIcons name="delete" size={24} color="#729384"/>
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
          <TextInput
            style={styles.commentInput}
            placeholder="Add a comment..."
            value={newComment}
            onChangeText={setNewComment}
          />
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
