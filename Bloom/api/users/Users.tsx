import { useMutation } from 'react-query';
import axios from 'axios';
import { app } from '../../firebase.config';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';


interface User {
    id: number
    email: string
    username: string
    first_name: string
    last_name: string
    profile_picture: string
    phone_number: string
    age: number
    mood: number[]
}

export const login =()=>{
const query = useMutation({
  mutationFn: async(object:{email:string,password:string})=>{
    const auth=getAuth(app)
    const res:any =await signInWithEmailAndPassword(auth,object.email,object.password)
    console.log(res)
    const db= await axios.post(`http://localhost:3000/users/signin`,object)
    localStorage.setItem("user",JSON.stringify(res))
    return db
  }
})
return query
}

export const signup=()=>{
  const query = useMutation({
mutationFn:async (object:{email:string,password:string})=>{
  const auth=getAuth(app)
  const res:any = await createUserWithEmailAndPassword(auth,
    object.email,object.password)
    console.log(res);
    const db=await axios.post(`http://localhost:3000/users/signup`,object)
    console.log(db);
    return db
}
  })
  return query 
}