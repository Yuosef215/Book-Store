import React from 'react'
import Button from '@mui/material/Button'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

export default function Navbar() {

  const navigate = useNavigate();
  const notify = () => toast("Wow so easy!");
const logout =()=>{
  try {
    const response = axios.get('http://upskilling-egypt.com:3005/api/auth/logout',{headers: {
      Authorization: `Baerer ${localStorage.getItem('accessToken')}`
    }});
    localStorage.removeItem('accessToken');
    navigate('/');
    notify(); 
  } catch (error) {
    console.log(error)
  }
}


  return (
    <>
      <div>Navbar</div>
    </>
  )
}
