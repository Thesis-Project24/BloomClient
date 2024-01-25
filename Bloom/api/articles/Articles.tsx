import { useMutation, useQuery } from "react-query";
import Toast from "react-native-root-toast";
import axios from "axios";

// {all Articles fetcher } //

export const useFetchArticles = () => {
  return useQuery("Articles", async () => {
    const response = await axios.get(
      `http://${process.env.EXPO_PUBLIC_ipadress}:3000/articles/getArticles`
    );
    const data = response.data.article;
    return data;
  });
};

// {One article fetcher} //
export const useFetchOneArticle = (id: number) => {
  const query = useQuery(["Article", id], async () => {
    const response = await axios.get(
      `http://${process.env.EXPO_PUBLIC_ipadress}:3000/articles/getonearticle`,
      {
        data: {
          id: id,
        },
      }
    );
    return response.data;
  });
  return query;
};

// {Article Creation} //

export const createArticle = () => {
  const mutation = useMutation(
    async ({
      title,
      content,
      authorId,
    }: {
      title: string;
      content: string;
      authorId: string;
    }) => {
      console.log('====================================');
      console.log(authorId);
      console.log('====================================');
      const response = await axios.post(
        `http://${process.env.EXPO_PUBLIC_ipadress}:3000/articles/postArticle`,
        { title, content, authorId }
      );
      return response.data;
    }
  );
  return mutation;
};
// {Article Saving} //

export const useSaveArticle = () => {
  const mutation = useMutation(
    async ({ userId, articleId }: { userId: number; articleId: number }) => {
      const response = await axios.post(
        `http://${process.env.EXPO_PUBLIC_ipadress}:3000/articles/saveArticle`,
        { userId, articleId }
      );

      return response.data;
    }
  );
  return [mutation.mutate, mutation.data, mutation.error];
};

//  {Saved Articles fetcher} //
export const useFetchSavedArticles = (userId: number) => {
  return useQuery({
    queryKey: ["SavedArticles", userId],
    queryFn: async () => {
      const response = await axios.get(
        `http://${process.env.EXPO_PUBLIC_ipadress}:3000/articles/savedArticles`,
        {
          userId,
        }
      );
      const data = response.data;
      return data;
    },
    onError: (err) => {
      console.log(err);
    },
  });
};

// {Search Article}  //
export const useSearchArticles = (keyword: string) => {
  const query = useQuery("Articles", async () => {
    const response = await axios.get(
      `http://${process.env.EXPO_PUBLIC_ipadress}:3000/articles/searchArticle?keyword=`
    );
    return response.data.article;
  });
  return query;
};
//  {Article deletion} //
export const deleteArticle = async (id: number) => {
  const response = await axios.delete(
    `http://${process.env.EXPO_PUBLIC_ipadress}:3000/articles/${id}`
  );
  return response.data;
};
