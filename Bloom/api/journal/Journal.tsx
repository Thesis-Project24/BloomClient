
import { Mutation, useMutation, useQuery } from 'react-query';
import axios from 'axios';




export const createJ = () => {
  const mutation = useMutation(async ({ content, title }: { content: string; title: string }) => {
    const response = await axios.post(`http://${process.env.EXPO_PUBLIC_ipadress}:3000/journals/addpost/1`, { content, title });
    console.log(content, title, "adzksfjvf,bng");
    return response.data;
  });

  return mutation;
};


export const getJournals = () => {
  return useQuery("Journals", async () => {
    const response = await axios.get(`http://${process.env.EXPO_PUBLIC_ipadress}:3000/journals/getall/1`)
    const data = response.data
    return data
  })
}
export const getOneJournal = (id: number) => {
  // console.log(id);

  const query = useQuery(["Journal"], async () => {
    const response = await axios.get(`http://${process.env.EXPO_PUBLIC_ipadress}:3000/journals/getone/1/${id}`)
    // console.log(id, "test journal");
    const data = response.data

    return data
  }
  )
  return query
}


export const usedeleteJournal = () => {
  return useMutation(
    async ({ authorid, id }: { authorid: number, id: number }) => {
      const response = await axios.delete(
        `http://${process.env.EXPO_PUBLIC_ipadress}:3000/journals/remove/1/${id}`,
        { data: { authorid, id } })


      return response.data
    }
  )
}

export const useupdates = () => {
  return useMutation(
    async ({ authorid, id, content, title }: { authorid: number, id: number, title: string, content: string }) => {
      const response = await axios.put(
        `http://${process.env.EXPO_PUBLIC_ipadress}:3000/journals/update/all/1/${id}`,
        { data: { authorid, id, content, title } },)
      return response.data
    }
  )
}
export const useupdate = () => {

  return useMutation(
    async ({ authorid, id, content, title }: { authorid: number, id: number, content: string, title: string }) => {
      const response = await axios.put(`http://${process.env.EXPO_PUBLIC_ipadress}:3000/journals/update/all/1/${id}`, { content, title, id, authorid })
      return response.data
    }
  )
}


export const useDeleteJournal = () => {
  return useMutation(
    async ({ authorid, id }: { authorid: number, id: number }) => {
      console.log(`Attempting to delete journal with id: ${id}`);
      const response = await axios.delete(`http://${process.env.EXPO_PUBLIC_ipadress}:3000/journals/remove/1/${id}`,
        {
          data: { authorid, id },
        });
      console.log('Delete response:', response.data);
      return response.data;
    }, {
      onError: (error) => {
        console.error("Error in useDeleteJournal: ", error);
      }
    }
  );
};
