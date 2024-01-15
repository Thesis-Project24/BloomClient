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
      console.log(forum, "in query");
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

export {fetchForumPosts}

