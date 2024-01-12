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
            // console.log(windows,"mutation")
            const slots = await axios.post(
                `http://${process.env.EXPO_PUBLIC_ipadress}:3000/appointment/windows/1`,
                windows
            );
            console.log(slots.data, "slots in mutation");
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
            // console.log("mutation triggerd----------------------------------------rr",date, "-");
            const response = await axios.get(
                `http://${process.env.EXPO_PUBLIC_ipadress}:3000/appointment/windows/${date}`
            );
            const data = response.data;
            // console.log(data, "mutation");
            return data;
        },
    });

    return mutation;
};

//get slots for specific window(not tested)
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

export { addWindow, getSlotsByWindow, getWindowsByDate };
