import React from 'react'
import { Navigate } from 'react-router-dom';

export default function ProtectRouter(props) {
 
      
    if (localStorage.getItem('accessToken')) {
        return props.childern;
    }
    else{
        return <Navigate to={'/'}/>
    }
}   