

import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
// export const  updateUser = () => {
//   const Mutation = useMutation(
//     async ({ age,  phone_number, profile_picture,first_name, last_name }: {  age: number;  phone_number: string;   profile_picture: string ;    first_name: string;   last_name: string}) => {
//       const response = await axios.post(
//         `http://192.168.1.69:3000/users/1`,
//         {
//          age,  phone_number, profile_picture,first_name, last_name
//         }
//       );
//        console.log(response);
//       return response.data;
     
//     }
//   );

//   }



export const UpdateUser = () => {
  return useMutation(
    async ({
      age,
      phone_number,
      profile_picture,
      first_name,
      last_name,
    }: {
      age: number;
      phone_number: string;
      profile_picture: string;
      first_name: string;
      last_name: string;
    }) => {
      try {
        const response = await axios.put(
          `http://${process.env.EXPO_PUBLIC_ipaddress}:3000/users/1`,
          { age, phone_number, profile_picture, first_name, last_name }
        );
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error("Error updating user:", error);
        throw error; // Rethrow the error for React Query to handle
      }
    }
  );
};
