// import React, { useState } from "react";
// import {auth,provider} from '../config/firebase'
// import { signInWithPopup, signOut } from "firebase/auth";
// import Cookies from "universal-cookie";

// const cookies=new Cookies()

// export const Auth =()=>{

//   const [isLogin,setIsLogin]=useState(cookies.get('kiwi'));
//   const [namee,setNamee]=useState(cookies.get('name'));
  

//   const signInWithGoogle=async()=>{
//     try{
//     const result=await signInWithPopup(auth,provider)
//     console.log(result.user.displayName)

//     cookies.set("kiwi",result.user.refreshToken)

//     setNamee(cookies.set('name',result.user.displayName))
//     setIsLogin(true)
//     setNamee(result.user.displayName)
//   }
//     catch(err){
//       console.error(err)
//     }
//   }

//   const signOutFromWebsite=async()=>{
//     await signOut(auth)
//     cookies.remove("kiwi");
//     setIsLogin('');
//     cookies.remove('name');
//     setNamee('')
//   }

//   return(
//     <div>
//       {console.log(isLogin)}
//       {
//         isLogin?
//         <>
//         <h1>Welcome to home page</h1>
//         <h1>{namee}</h1>
//         {console.log(namee)}
//         <div>
//         <button onClick={signOutFromWebsite}>Sign out</button>
//         </div>
//         </>:
//         <>
//         <h1>Sign in with Google</h1>
//         <button onClick={signInWithGoogle}>Sign in</button>
//         </>
//         }
//         </div>
//   )
// }



// import React, { useState } from 'react'
// import {auth,provider} from '../config/firebase'
// import { signInWithPopup, signOut } from 'firebase/auth'
// import  Cookies  from 'universal-cookie';
// const cookies=new Cookies()
// export const Auth = () => {
  
//    const [islogin,setIsLogin]=useState(cookies.get('kiwi'));
//    const [namee,setName]=useState(cookies.get('name'));
  
//     const signInWithGoogle=async()=>{
//       const result=await signInWithPopup(auth,provider)
//       console.log(result.user.displayName);

//     //   cookies.set("auth-token",result.user.refreshToken)
//     //   setIsAuth(true)

//       cookies.set("kiwi",result.user.refreshToken)
   
//       setName(cookies.set('name',result.user.displayName))
//       setIsLogin(true)
//     }

//     const signOutFromWebsite=async()=>{
//      await signOut(auth)
//      cookies.remove("kiwi");
//       setIsLogin(false);
//      cookies.remove('name');
//      setName('');
//     }

//   return (
//     <div>
//         {console.log(islogin)}

//        {
//           islogin?
//           <>
//           <h1>welcome to home page</h1>
//           <h1>{namee}</h1>
//           <div>
//           <button onClick={signOutFromWebsite}>sign out</button>
//          </div>
//           </>:
//           <>
        
//           <h1>sign in with google</h1>
//           <button onClick={signInWithGoogle}>sign in</button>
//           </>


//         }
     
//     </div>
//   )
// }

/***********333333333*************/
//  import React, { useState } from "react";
// import {auth,provider} from '../config/firebase'
// import { signInWithPopup, signOut } from "firebase/auth";
// import Cookies from "universal-cookie";
// import {Room} from './Room'

// const cookies=new Cookies()

// export const Auth = () => {
//   const [isSigned,setIsSigned]=useState(cookies.get('kiwi'))
//   const [fullName,setFullName]=useState(cookies.get('name'))
// //sign in
//   const signInWithGoogle=async()=>{
//     const result=await signInWithPopup(auth,provider)
//     console.log(result.user.displayName)
    
//     cookies.set('kiwi',result.user.refreshToken)

//     setFullName(cookies.set('name',result.user.displayName))
//     setIsSigned(true)
//     setFullName(result.user.displayName)
//   }
//   //signout

// const signOutFromWebsite=async()=>{
//   await signOut(auth)
//   cookies.remove('kiwi')
//   cookies.remove('fullName');
//   setIsSigned('');
//   setFullName('')
// }
//   return (

//     <div>
//       {console.log(isSigned)}
//       {
//         isSigned?
//         <>
//         <Room fullName={fullName}/>
//         <div>
//         <button onClick={signOutFromWebsite}>Sign out</button>
//       </div>
//         </>:
//         <>
//       <h1>Sign in with google</h1>
//       <button onClick={signInWithGoogle}>Sign email</button>
//       </>
//     }
//     </div>
//   )
// }

import React, { useState } from "react";
import {auth,provider} from '../config/firebase'
import { signInWithPopup, signOut } from "firebase/auth";
import {Room} from '../components/Room'
import Cookies from "universal-cookie";

const cookies=new Cookies()

export const Auth = () => {
  const [isLogin,setIsLogin]=useState(cookies.get('kiwi'));
  const [nickName,setNickName]=useState(cookies.get('name'))


  //sign in btn
  const googleSignIn=async()=>{
    const result=await signInWithPopup(auth,provider)
    console.log(result.user.displayName);
    cookies.set('kiwi',result.user.refreshToken);
    setIsLogin(true)
    setNickName(result.user.displayName)
  }

  //sign out
  const googleSignOut=async()=>{
    await signOut(auth)
    cookies.remove('kiwi')
    setIsLogin('')
    cookies.remove('name')
    setNickName('')

  }
  return (
    <div>
      {console.log(isLogin)}
      {
        isLogin?
        <>
        <Room nickName={nickName}/>
        <button onClick={googleSignOut}>Sign out</button>
        </>:
        <>
      <h1>Sign in with Google</h1>
      <button onClick={googleSignIn}>Sign in</button>
      </>
    }
    </div>
  )
}
