import { useMutation, QueryClientProvider } from 'react-query';
import axios from 'axios';

const addWindow = ()=>{
    const mutation = useMutation({
        mutationFn: async(windows:any[]) => {
          console.log(windows, "in the mutation");
          
          try {
            axios.post(`http://${process.env.EXPO_PUBLIC_ipadress}:3000/appointment/windows`, windows);
          }
          catch(error){
            console.log(error)
          }
        },
      })
      return mutation
}

export {addWindow}