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
  id: number;
  email: string;
  username: string;
 fullName: string;
  profile_picture: string;
  phone_number: string;
  age: number;
  mood: number[];
}

export const login = () => {
  const mutation = useMutation({
    mutationFn: async (object: { email: string; password: string, role: string  }) => {
      const {email,password,role} = object
      const auth = getAuth(app);
      await signInWithEmailAndPassword(auth,email,password)
      .then(async()=>{
        const res = await axios.post(
        `http://${process.env.EXPO_PUBLIC_ipadress}:3000/users/signin/${role}`,
        object
        );
        AsyncStorage.setItem(res.data.role,JSON.stringify(res.data))
        const item = await AsyncStorage.getItem(role)
        // console.log(item, "*/*/*/*/*/*/*/*/*/*/*/*", AsyncStorage)
      })
      .catch((error:any)=>{
        console.log(error)
      }) 
    },
  });
  return mutation;
 };
 

export const signup = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const query = useMutation({
    mutationFn: async (object: {
      email: string;
      password: string;
      username: string;
    }) => {
      try {
        const auth = getAuth(app);
        const {email,password,username}= object
        await axios.post(
            `http://${process.env.EXPO_PUBLIC_ipadress}:3000/users/signup`,
            {email:object.email,username:object.username}
          );
        await createUserWithEmailAndPassword(auth,email,password)
        .then((credentials:any)=>{
          console.log(credentials.user)
          sendEmailVerification(credentials.user)
        })
        .then(()=>{
          alert("verification mail")
          if(!auth.currentUser?.emailVerified){
            console.log("triggered")
          }
        })
        .then(()=>{
          console.log(auth.currentUser?.emailVerified)
          navigation.navigate("signIn")
        })
        
        
        
        
  
        // const db = await axios.post(
        //   `http://${process.env.EXPO_PUBLIC_ipadress}:3000/users/signup`,
        //   object
        // );
        // console.log("Backend Response:", db.data);
        // return db.data;
      } catch (error) {
        console.error("Signup Error:", error);
        throw error; 
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
        console.log(user);
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
