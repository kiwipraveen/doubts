import React, { useContext } from 'react'
import {RegiserAndLoginForm} from './RegisterAndLoginForm'
import { UserContext } from './UserContext'

export const Routes = () => {
    const {username,id}=useContext(UserContext)
  
    if(username){
    return <h1>{username}</h1>
    }  
  

  return (
    <RegiserAndLoginForm/>
  ) 
}
