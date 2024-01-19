import { useQuery } from "react-query";
import { useMutation } from "react-query";
import axios  from "axios";



export const fetchData = () => {
  const query = useQuery(
    "fetchUser",
    async () => {
      try {
        const response = await fetch(
          `http://${process.env.EXPO_PUBLIC_ipadress}:3000/users/1`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const user = await response.json();
        console.log(user, "in query");
        return user;
      } catch (error) {
        console.error("Error fetching data: ", error);
        throw error;
      }
    },
    {
      onError: (error) => {
        console.log(error, "An error occurred");
      },
    }
  );

  return query;
};



// export const useUpdateUser = () => {
//   return useMutation(async (userData) => {
//     try {
//       const response = await axios.put(
//         `http://${process.env.EXPO_PUBLIC_ipaddress}:3000/users/1`,
//         userData
//       );
//       console.log(response.data);
//       return response.data;
//     } catch (error) {
//       console.error("Error updating user:", error);
//       throw error;
//     }
//   });
// };

export const useUpdateUser = () => {
  const mutation=  useMutation({
    mutationFn: async(obj:{age:number,phone_number:number,fullName:string,profile_picture:string}) => {
      try {
        
        const response = await axios.put(
          `http://${process.env.EXPO_PUBLIC_ipadress}:3000/users/update/1`,
          obj
        );
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error("Error updating user:", error);
        throw error; // Rethrow the error for React Query to handle
      }
    }
  })
  return mutation
};
