
import { View, Text, TextInput, ActivityIndicator, KeyboardAvoidingView, Pressable,StyleSheet ,Button } from 'react-native'
import React, { useState } from 'react'
import { auth } from '../firebase.config';
import { login } from '../api/users/Users'
// import {useNavigation} from '@react-navigation/native';

const Login = () => {
  // const navigation = useNavigation()
  const [email,setEmail]=useState<string>('');
  const [password,setPassword]=useState<string>('');
  const [loading,setLoading]=useState<boolean>(false);
  const handle = ()=>{
// navigation.navigate('')
  }
  const Auth=auth
  const mutation = login()
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior='padding'>
      <TextInput style={styles.input}  placeholder='Email' autoCapitalize='none' onChangeText={(text)=>setEmail(text)}>Login</TextInput>
      <TextInput style={styles.input} secureTextEntry={true}  placeholder='password' autoCapitalize='none' onChangeText={(text)=>setPassword(text)}>Login</TextInput>
      {loading?<ActivityIndicator size={'large'} color={"#0000ff"}/>
      :<Pressable>
<Button onPress={()=>mutation.mutate({email : email,password : password})} title='Login'  /> 
<Button title='Create account'   />
      </Pressable>}
      </KeyboardAvoidingView>
    </View>
  )
}

const styles= StyleSheet.create({
  container:{
    marginHorizontal:20,
    flex:1,
    justifyContent: 'center',
  },
  input:{
    marginVertical:4,
    height:50,
    // borderWidht:1,
    // borderRaduis:4,
    padding:10,
    backgroundColor:'#fff'
  }
})
export default Login
