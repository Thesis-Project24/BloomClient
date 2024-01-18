import {
    useMutation,
    useQuery,
    useQueryClient,
    QueryClientProvider,
} from "react-query";
import axios from "axios";

const addWindow = () => {
    const mutation = useMutation({
        mutationFn: async (windows: any[]) => {
            const slots = await axios.post(
                `http://${process.env.EXPO_PUBLIC_ipadress}:3000/appointment/windows/1`,
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

const getWindowsByDate = () => {
    const mutation = useMutation({
        mutationFn: async (date: Date) => {
            const response = await axios.get(
                `http://${process.env.EXPO_PUBLIC_ipadress}:3000/appointment/windows/${date}`
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

//appointement will be added but the status would stay pending (waitlist implenmeting next week)
const bookAppointment = ()=> {
    const mutation = useMutation({
        mutationFn: async (object:{patientId:number,doctorId:number,slotId:number,appDetails:string}) => {
            const response =  await axios.post(
                `http://${process.env.EXPO_PUBLIC_ipadress}:3000/appointemnt/appointments/add`,object
            );
        },
        
    });
    
    return mutation;
}

export { addWindow, getSlotsByWindow, getWindowsByDate, bookAppointment };
