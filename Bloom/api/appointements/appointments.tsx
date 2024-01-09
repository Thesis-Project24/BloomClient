import { useMutation, useQuery, QueryClientProvider } from 'react-query';
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

const getSlots = (windowId:string)=> {
  const query= useQuery(['slots', windowId], async () => {
    const response = await fetch(`http://${process.env.EXPO_PUBLIC_ipadress}:3000/appointment/slots/${windowId}`)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json()
  })
}

export {addWindow,getSlots}