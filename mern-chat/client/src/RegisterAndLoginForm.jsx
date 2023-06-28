import axios from 'axios';
import React, { useContext, useState } from 'react'
import {UserContext} from './UserContext.jsx';


export const RegiserAndLoginForm = () => {
    const [username,setUsername] =useState('');
    const [password,setPassword] =useState('');
    const {setUsername:setLoggedInUsername,setId}=useContext(UserContext);
    const [isLoginOrRegister,setIsLoginOrRegister]=useState('register');

    const register =async(event) => {
    event.preventDefault(); 
    const url=isLoginOrRegister === 'register' ?'register' :'login';
    
    const {data}=  await axios.post(url,{username:username,password:password});
    setLoggedInUsername(username);
    setId(data.id);
    } 

  return (
    <div className='bg-blue-50 h-screen flex items-center'>
     
        <form className='w-64 mx-auto mb-12' onSubmit={register}>
            <input
                 value={username}
                onChange={e=>setUsername(e.target.value)}  
                type="text"
                placeholder='username'
                className='block w-full rounded-sm p-2 mb-2 border'/>
            <input 
                value={password} 
                onChange={e=>setPassword(e.target.value)} 
                type='password' 
                placeholder='password'
                className='block w-full rounded-sm p-2 mb-2 border' />

            <button className='bg-blue-500 text-white w-full rounded-sm p2 block'>{isLoginOrRegister}</button>
           
            <div className='text-center mt-2'>
              {
                isLoginOrRegister==='register' &&(
                    <div>
                        Already have an account? 
                        <button onClick={()=>setIsLoginOrRegister('login')}>
                            Login
                        </button>

                    </div>
                )
              }
              {
                isLoginOrRegister==='login' &&(
                                    <div>
                                        Don't have an account? 
                                        <button onClick={()=>setIsLoginOrRegister('register')}>
                                            Register
                                        </button>
                
                                    </div>
                                )
              }
            </div> 
        </form>
  

    </div>
  )
}
