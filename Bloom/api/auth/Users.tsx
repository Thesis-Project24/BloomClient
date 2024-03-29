import { useMutation } from "react-query";
import axios from "axios";
import { app } from "../../firebase.config";
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signInWithPopup,
    sendEmailVerification,
    signInWithCustomToken,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

interface User {
    id: string;
    email: string;
    username: string;
    fullName: string;
    profile_picture: string;
    phone_number: string;
    age: number;
    mood: number[];
}

export const login = (handelError:any , handelWelcomePage : any) => {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
    const mutation = useMutation({
        mutationFn: async (object: {
            email: string;
            password: string;
            role: string;
        }) => {
            const { email, password, role } = object;
            const auth = getAuth(app);
            await signInWithEmailAndPassword(auth, email, password)
                .then(async () => {
                    const res = await axios.post(
                        `http://${process.env.EXPO_PUBLIC_ipadress}:3000/users/signin/${role}`,
                        object
                    );
                    await AsyncStorage.setItem(
                        "user",
                        JSON.stringify(res.data)
                    );
                    if(res.data.role === "user"){
                        await AsyncStorage.setItem(
                            "userName",
                            JSON.stringify(res.data.username)
                        );
                    }else if(res.data.role === "doctor"){
                        await AsyncStorage.setItem(
                            "userName",
                            JSON.stringify(res.data.first_name)
                        );
                    }
                    
                    handelWelcomePage()
                    res.data.role === "doctor"
                        ? navigation.navigate("DoctorPersonalProfile", {
                              doctor: res.data,
                          })
                        : navigation.navigate("User", { user: res.data });

                        handelError(false)
                })
                .catch((error: any) => {
                    handelError(true)
                    console.log(error);
                });
        },
    });
    return mutation;
};

export const signup = (handelError:any) => {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
    const query = useMutation({
        mutationFn: async (object: {
            email: string;
            password: string;
            username: string;
        }) => {
            try {
                const auth = getAuth(app);
                const { email, password, username } = object;
                await createUserWithEmailAndPassword(auth, email, password)
                    .then((userCred) => {
                        axios.post(
                            `http://${process.env.EXPO_PUBLIC_ipadress}:3000/users/signup`,
                            {
                                email: object.email,
                                username: object.username,
                                id: userCred.user.uid,
                            }
                        );
                        sendEmailVerification(userCred.user);
                    })
                    .then(() => {
                        alert("Verification mail sent");
                        handelError(false)
                    })
                    .catch((error) => {
                        console.log(error);
                        handelError(true)
                    })
                    .finally(() => {
                        if (auth.currentUser) {
                            navigation.navigate("SignIn");
                        }
                    });
            } catch (error) {
                console.log(error);
                handelError(true)
            }
        },
    });
    return query;
};

const deleteuser = () => {
    const query = useMutation({
        mutationFn: async () => {
            const auth = getAuth(app);
            const user = auth.currentUser;
            if (user) {
                user.delete();
            }
            const storeduser = localStorage.getItem("user");
            console.log(storeduser);
            if (storeduser) {
                const parseduser = JSON.parse(storeduser);
                await axios.delete(
                    `http://${process.env.EXPO_PUBLIC_ipadress}:3000/users/${parseduser.data.id}`
                );
                localStorage.removeItem("user");
            }
        },
        onError(err) {
            console.log(err);
        },
    });
    return query;
};
