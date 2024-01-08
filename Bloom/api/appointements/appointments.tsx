import { useMutation, QueryClientProvider } from 'react-query';
import axios from 'axios';

const addWindow = ()=>{
    const mutation = useMutation({
        mutationFn: async(windows:any[]) => {
          console.log(windows, "in the mutation");
          
          try {
            axios.post(`http://172.29.0.6:3000/appointment/windows`, windows);
          }
          catch(error){
            console.log(error)
          }
        },
      })
      return mutation
}

export {addWindow}