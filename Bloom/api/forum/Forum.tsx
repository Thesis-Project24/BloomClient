import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClientProvider,
} from "react-query";
import axios from "axios";

const fetchForumPosts = ()=> {
  const query = useQuery('fetchForum', async () => {
    try {
      const response = await axios.get(`http://${process.env.EXPO_PUBLIC_ipadress}:3000/forum/posts/`);

      const forum = response.data
      // console.log(forum, "in query");
      return forum;
    } catch (error) {
      console.error( error);
      throw error;
    }
  }, {
    onError: (error) => {
      console.log(error, "An error occurred");
    },
  });
  return query;
}

const upvotePost=()=>{
  console.log("mutation")
  const mutation= useMutation({
    mutationFn:async(id)=>{
      console.log("mutated")
       const response =axios.put(`http://${process.env.EXPO_PUBLIC_ipadress}:3000/forum/posts/upvote`,{postId:id})
    },
    onError: (error) => {
      console.log(error);
  },
  })
  return mutation
}

const downvotePost=()=>{
  console.log("mutation")
  const mutation= useMutation({
    mutationFn:async(id)=>{
      console.log("mutated")
       const response =axios.put(`http://${process.env.EXPO_PUBLIC_ipadress}:3000/forum/posts/downvote`,{postId:id})
    },
    onError: (error) => {
      console.log(error);
  },
  })
  return mutation
}
const createForumPost = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (postData: { title: string, content: string,authorId:any }) => {
      const response = await axios.post(`http://${process.env.EXPO_PUBLIC_ipadress}:3000/forum/posts/sad`, postData);
      return response.data;
    },
    onSuccess: () => {
      
      queryClient.invalidateQueries('fetchForum');
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return mutation;
};

const createCommentMutation = () => {
  axios.defaults.timeout = 20000;
  const mutationFn = async (commentData:{ content:string, postId:number, userId:number }) => {
    try {
      const response = await axios.post(
        `http://${process.env.EXPO_PUBLIC_ipadress}:3000/forum/comments/`, commentData);
      return response.data;
    } catch (error:any) {
      console.error('Error creating comment', error.message);
      throw error;
    }
  };
  return useMutation(mutationFn);
};





//  const getComment = () => {
//   const mutationFn = async({postId}:any)=>{
//     const response = await axios.get(`http://172.29.0.19:3000/forum/comments/${postId}`,postId)
//     return response.data
//   }
//   return mutationFn;
//  }
const useFetchComments = (postId:number) => {
  return useQuery(['comments', postId], async () => {
    const response = await axios.get(`http://${process.env.EXPO_PUBLIC_ipadress}:3000/forum/comments/${postId}`);
    return response.data;
  }, {
    onError: (error) => {
      console.error('Error fetching comments:', error);
    }
  });
};
const deleteCommentMutation = () => {
  const mutationFn = async (commentId:any) => {
    try {
      const response = await axios.delete(`http://${process.env.EXPO_PUBLIC_ipadress}:3000/forum/comments/${commentId}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting comment', error);
      throw error;
    }
  };
  return useMutation(mutationFn);
};

const editCommentMutation = () => {
  const mutationFn = async ({ commentId, content }:any) => {
    try {
      const response = await axios.put(`http://${process.env.EXPO_PUBLIC_ipadress}:3000/forum/comments/${commentId}`, { content });
      return response.data;
    } catch (error) {
      console.error('Error editing comment', error);
      throw error;
    }
  };
  return useMutation(mutationFn);
};
const deletePostMutation = () => {
  return useMutation(async (postId) => {
    try {
      const response = await axios.delete(`http://${process.env.EXPO_PUBLIC_ipadress}:3000/forum/posts/${postId}`);
      return response.data;
    } catch (error) {
      console.error("Error in deletePostMutation:", error);
      throw error;  // rethrow to ensure the error is propagated
    }
  });
};
const editTagcomment=() => {
  const mutationFn=async({userId,commentId}:any) => {
    try {
      const response =await axios.put(`http://${process.env.EXPO_PUBLIC_ipadress}:3000/forum/comments/${commentId}`,{userId})
      return response.data;
    } catch (error) {
      console.error("Error in tagedit", error);
    }
  }
  return useMutation(mutationFn)
}


export { fetchForumPosts,deletePostMutation, upvotePost, downvotePost, createForumPost, createCommentMutation, useFetchComments, deleteCommentMutation, editCommentMutation };

// const editTagcomment=async (req:Request, res:Response) => {
//   const {userId}=req.body
// try {
//   const comment = await prisma.comment.update({
//       where:{id: Number(req.params.id)},
//       data: { tagId: userId },
//   })
//   res.send(comment)
// } catch (error) {
//   res.send(error)
// }

// }
