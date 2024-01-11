import { useMutation, useQuery,useQueryClient, QueryClientProvider } from "react-query";
import axios from "axios";

const addWindow = () => {
  const mutation = useMutation({
    mutationFn: async (windows: any[]) => {
        // console.log(windows,"mutation")
        const slots = await axios.post(
          `http://${process.env.EXPO_PUBLIC_ipadress}:3000/appointment/windows/1`,
          windows
        )
        console.log(slots.data, "slots in mutation")
        return slots.data
      
    },
    onError: error=>{
    console.log(error);
    
    }
  });
  return mutation;
};

//get slots for specific window(not tested)
const getSlots = (windowId: string) => {
  const query = useQuery(["slots", windowId], async () => {
    const response = await fetch(
      `http://${process.env.EXPO_PUBLIC_ipadress}:3000/appointment/slots/${windowId}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
  return query
};

export { addWindow, getSlots };
