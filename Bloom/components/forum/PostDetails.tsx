import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, FlatList, ScrollView, Alert } from 'react-native';
import { AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useMutation, useQuery } from 'react-query';
import axios from 'axios';
import { deleteCommentMutation, editCommentMutation } from '../../api/forum/Forum';

const PostDetails = ({ route }:any) => {
  const { id, content, title, author, image, upvotes, downvotes } = route.params;

  const [upvoteCount, setUpvoteCount] = useState(upvotes);
  const [downvoteCount, setDownvoteCount] = useState(downvotes);
  const [voteStatus, setVoteStatus] = useState({ upvoted: false, downvoted: false });
  const [newComment, setNewComment] = useState('');
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editedContent, setEditedContent] = useState("");
  const { mutate: deleteComment } = deleteCommentMutation();
  const { mutate: editComment } = editCommentMutation();
  const { data: comments, refetch: refetchComments } = useQuery('comments', async () => {
    const response = await axios.get(`http://${process.env.EXPO_PUBLIC_ipadress}:3000/forum/comments/${id}`);
    return response.data;
  });

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
      upvoteMutation.mutate(id, {
        onSuccess: (data) => {
          setUpvoteCount(data.newUpvoteCount);
          setDownvoteCount(data.newDownvoteCount);
        }
      });
    }
  };

  const handleDownvote = () => {
    const currentlyDownvoted = voteStatus.downvoted;
    setVoteStatus({ upvoted: false, downvoted: !currentlyDownvoted });
    if (!currentlyDownvoted) {
      downvoteMutation.mutate(id, {
        onSuccess: (data) => {
          setUpvoteCount(data.newUpvoteCount);
          setDownvoteCount(data.newDownvoteCount);
        }
      });
    }
  };

  const handleAddComment = () => {
    
  };

  const handleDeleteComment = (commentId:number) => {
    deleteComment(commentId, {
      onSuccess: () => {
       refetchComments();
      },
      onError: (error) => {
      
        
      }
    });
  };
  
  const handleEditComment = (commentId:number, newContent:string) => {
    editComment({ commentId, content: newContent }, {
      onSuccess: () => {
       refetchComments();
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
    editComment({ commentId, content: editedContent }, {
      onSuccess: () => {
        setEditingCommentId(null);
        setEditedContent("");
        refetchComments();
      },
      onError: (error) => {
        Alert.alert('Error', 'Failed to edit comment');
      }
    });
  };
  
  const cancelEdit = () => {
    setEditingCommentId(null);
    setEditedContent("");
  };
  const renderComment = ({ item }:any) => {
    const isEditing = item.id === editingCommentId;
    return (
      <View style={styles.commentContainer}>
        <Image source={{ uri: item.User.profile_picture }} style={styles.commentImage} />
        <View style={styles.commentTextContainer}>
          <Text style={styles.commentAuthor}>{item.User.fullName}</Text>
          {isEditing ? (
            <TextInput  value={editedContent} onChangeText={setEditedContent} autoFocus />
          ) : (
            <Text style={styles.commentText}>{item.content}</Text>
          )}
        </View>
        {isEditing ? (
          <View style={styles.commentOptionsContainer}>
            <TouchableOpacity onPress={() => submitEdit(item.id)}>
              <MaterialIcons name="save-alt" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={cancelEdit}>
              <FontAwesome name="times" size={24} color="red" />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.commentOptionsContainer}>
            <TouchableOpacity onPress={() => startEditing(item)}>
              <FontAwesome name="pencil" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDeleteComment(item.id)}>
              <FontAwesome name="trash-o" size={24} color="red" />
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.postContainer}>
        <View style={styles.header}>
          <Image source={{ uri: image }} style={styles.profileImage}/>
          <Text style={styles.authorName}>{author}</Text>
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
        <View style={styles.votingContainer}>
          <TouchableOpacity style={styles.voteButton} onPress={handleUpvote}>
            <AntDesign name="arrowup" size={24} color={voteStatus.upvoted ? "#4CAF50" : "black"} />
            <Text style={styles.voteText}>{upvoteCount}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.voteButton} onPress={handleDownvote}>
            <AntDesign name="arrowdown" size={24} color={voteStatus.downvoted ? "#F44336" : "black"} />
            <Text style={styles.voteText}>{downvoteCount}</Text>
          </TouchableOpacity>
        </View>
        <FlatList data={comments} renderItem={renderComment} keyExtractor={(item) => item.id.toString()} />
        <View style={styles.addCommentContainer}>
          <TextInput style={styles.commentInput} placeholder="Add a comment..." value={newComment} onChangeText={setNewComment} />
          <TouchableOpacity style={styles.enterButton} onPress={handleAddComment}>
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
    backgroundColor: '#F7F7F7', // Matching background color
  },
  postContainer: {
    backgroundColor: '#F8F8F8',
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
    // Define styles as needed
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


export default PostDetails;
