import { Mutation, useMutation, useQuery } from "react-query";
import axios from "axios";
import User from "../../screens/UserProfile/User";

export const createJ = (authorId: string) => {
  const mutation = useMutation(
    async ({ content, title }: { content: string; title: string }) => {
      const response = await axios.post(
        `http://${process.env.EXPO_PUBLIC_ipadress}:3000/journals/addpost/${authorId}`,
        { content, title, authorId }
      );
      return response.data;
    }
  );

  return mutation;
};


export const getJournals = (authorId:string) => {
  return useQuery(['Journals', authorId], async () => {
    try {
      const response = await axios.get(
        `http://${process.env.EXPO_PUBLIC_ipadress}:3000/journals/getall/${authorId}`
      );
      return response.data;
    } catch (error) {
      // Handle error here, you can also throw an error or return a default value
      console.error('Error fetching journals:', error);
      throw new Error('Error fetching journals');
    }
  });
};
export const getOneJournal = (id: number, authorId: string) => {
  const query = useQuery(["Journal", id, authorId], async () => {
    const response = await axios.get(
      `http://${process.env.EXPO_PUBLIC_ipadress}:3000/journals/getone/${authorId}/${id}`
    );
    return response.data;
  });

  return query;
};


export const usedeleteJournal = () => {
  return useMutation(
    async ({ authorid, id }: { authorid: string; id: number }) => {
      const response = await axios.delete(
        `http://${process.env.EXPO_PUBLIC_ipadress}:3000/journals/remove/${authorid}/${id}`,
        { data: { authorid, id } }
      );

      return response.data;
    }
  );
};

export const useupdates = () => {
  return useMutation(
    async ({
      authorid,
      id,
      content,
      title,
    }: {
      authorid: string;
      id: number;
      title: string;
      content: string;
    }) => {
      const response = await axios.put(
        `http://${process.env.EXPO_PUBLIC_ipadress}:3000/journals/update/all/${authorid}/${id}`,
        { data: { authorid, id, content, title } }
      );
      return response.data;
    }
  );
};
export const useupdate = () => {
  return useMutation(
    async ({
      authorid,
      id,
      content,
      title,
    }: {
      authorid: string;
      id: number;
      content: string;
      title: string;
    }) => {
      const response = await axios.put(
        `http://${process.env.EXPO_PUBLIC_ipadress}:3000/journals/update/all/${authorid}/${id}`,
        { content, title, id, authorid }
      );
      return response.data;
    }
  );
};

export const useDeleteJournal = () => {
  return useMutation(
    async ({ authorid, id }: { authorid: string; id: number }) => {
      console.log(`Attempting to delete journal with id: ${id}`);
      const response = await axios.delete(
        `http://${process.env.EXPO_PUBLIC_ipadress}:3000/journals/remove/${authorid}/${id}`,
        {
          data: { authorid, id },
        }
      )
      console.log("Delete response:", response.data);
      return response.data;
    },
    {
      onError: (error) => {
        console.error("Error in useDeleteJournal: ", error);
      },
    }
  );
};
