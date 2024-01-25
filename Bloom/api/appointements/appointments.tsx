import {
    useMutation,
    useQuery,
    useQueryClient,
    QueryClientProvider,
} from "react-query";
import axios from "axios";

const addWindow = (id:string) => {
    const mutation = useMutation({
        mutationFn: async (windows: any[]) => {
            const slots = await axios.post(
                `http://${process.env.EXPO_PUBLIC_ipadress}:3000/appointment/windows/${id}`,
                windows
            );
            return slots.data;
        },
        onError: (error) => {
            console.log(error);
        },
    });
    return mutation;
};

const getWindowsByDate = (id:string) => {
    const mutation = useMutation({
        mutationFn: async (date: Date) => {
            const response = await axios.get(
                `http://${process.env.EXPO_PUBLIC_ipadress}:3000/appointment/windows/${date}/${id}`
            );
            const data = response.data;
            return data;
        },
    });

    return mutation;
};

//get slots for specific window
const getSlotsByWindow = () => {
    const mutation = useMutation({
        mutationFn: async (windowId: number) => {
            const response = await axios.get(
                `http://${process.env.EXPO_PUBLIC_ipadress}:3000/appointment/slots/${windowId}`
            );
            const data = response.data;
            return data;
        },
    });
    return mutation;
};

//appointement will be added but the status would stay pending
const bookAppointment = ()=> {
    const mutation = useMutation({
        mutationFn: async (object:{patientId:string,doctorId:string,slotId:number,appDetails:string,status:"accepted"}) => {
            const response =  await axios.post(
                `http://${process.env.EXPO_PUBLIC_ipadress}:3000/appointemnt/appointments/add`,object
            );
        },
        
    });
    
    return mutation;
}

/////////////////////////////////add to waitlist///////////////////////////////
const addToWaitlist = (userId:any)=> {
    const mutation = useMutation({
        mutationFn: async (slotId:number) => {
            console.log(userId,slotId,"please")
            const response =  await axios.put(
                `http://${process.env.EXPO_PUBLIC_ipadress}:3000/appointment/slots/waitlist/${slotId}`,{user:userId}
            );
            console.log(response)
        },
    
    });
    
    return mutation;
}

export { addWindow, getSlotsByWindow, getWindowsByDate, bookAppointment,addToWaitlist };
