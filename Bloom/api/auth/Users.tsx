import { useMutation } from "react-query";
import axios from "axios";
import { app } from "../../firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  sendEmailVerification,
  onAuthStateChanged,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";


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
  const query = useMutation({
    mutationFn: async (object: { email: string; password: string }) => {
      const auth = getAuth(app);
      const res: any = await signInWithEmailAndPassword(
        auth,
        object.email,
        object.password
      );
      const db = await axios.post(
        `http://${process.env.EXPO_PUBLIC_ipadress}:3000/users/signin`,
        object
      );
      console.log(db.data.id, 'dataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
      await AsyncStorage.setItem('user', JSON.stringify(db.data));
      const item = await  AsyncStorage.getItem('user');
      console.log(item, "in api");
      
      return db;
    },
  });
  return query;
 };
 

export const signup = () => {
  const query = useMutation({
    mutationFn: async (object: {
      email: string;
      password: string;
      username: string;
      fullName: string;
    }) => {
      try {
        const auth = getAuth(app);
        const res = await createUserWithEmailAndPassword(
          auth,
          object.email,
          object.password
        );
        const db = await axios.post(
          `http://${process.env.EXPO_PUBLIC_ipadress}:3000/users/signup`,
          object
        );
        console.log("Backend Response:", db.data);
        return db.data;
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
