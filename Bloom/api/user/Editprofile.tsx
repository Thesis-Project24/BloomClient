import { Query, useQuery } from "react-query";
import { useMutation } from "react-query";
import axios from "axios";

export const fetchData = (params: number) => {
  console.log(params,'****************************')
    const query = useQuery({
      queryKey: [ params],
      queryFn: async () => {
        try {
          if (params) {
            const response = await fetch(
              `http://${process.env.EXPO_PUBLIC_ipadress}:3000/users/${params}`
              );
              if (!response.ok) {
                throw new Error("Network response was not ok");
              }
              const user = await response.json();
                    return user;
                }
            } catch (error) {
                console.error("Error fetching data: ", error);
                throw error;
            }
        },

        onError: (error) => {
            console.log(error, "An error occurred");
        },
        staleTime:  Infinity
    });

    return query;
};

export const useUpdateUser = (id: number) => {
    const mutation = useMutation({
        mutationFn: async (obj: {
            age: number;
            phone_number: number;
            fullName: string;
            profile_picture: string;
        }) => {
            try {
              console.log("hiiii")
                const response = await axios.put(
                    `http://${process.env.EXPO_PUBLIC_ipadress}:3000/users/update/${id}`,
                    obj
                );
                console.log(response.data);
                return response.data;
            } catch (error) {
                console.error("Error updating user:", error);
                throw error; // Rethrow the error for React Query to handle
            }
        },
    });
    return mutation;
};
