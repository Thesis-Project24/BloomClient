import { Query, useQuery } from "react-query";
import { useMutation } from "react-query";
import axios from "axios";

export const useUpdateUser = (id: number) => {
    const mutation = useMutation({
        mutationFn: async (obj: {
            age: number;
            phone_number: number;
            fullName: string;
            profile_picture: string;
        }) => {
            try {
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
