import { useMutation, QueryClientProvider } from 'react-query';
import axios from 'axios';

const addWindow = ()=>{
    const mutation = useMutation({
        mutationFn: async(windows:any[]) => {
          try {
            axios.post(`http://localhost:3000/appointment/windows`,windows)
          }
          catch(error){
            console.log(error)
          }
        },
      })
      return mutation
}

export {addWindow}