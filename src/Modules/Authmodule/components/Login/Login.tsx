import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import {  Link, useNavigate } from 'react-router-dom'

export default function Login() {

  const {register,handleSubmit} = useForm();

  const navigate = useNavigate();
  const navigate2 = useNavigate();

  const onsubmit=async(data:any)=>{
    console.log(data)
    try {
      const respons = await axios.post('https://upskilling-egypt.com:3007/api/auth/login', data);
      localStorage.setItem('Token',respons.data.data.accessToken)
      navigate('/home');
    } catch (error) {
      console.log(error);
      
    }
  }
  const btn = () => {
    navigate2('/register')
  }

  return (
    <>
        <Stack sx={{width:'70%',margin:'auto'}}>
          <Stack className='text'  sx={{margin:'1rem 0'}}>
            <Typography variant='subtitle1'>welcome Back!</Typography>
          <Typography className='log' variant='subtitle1'>Login to your account</Typography>
          </Stack>
      <form className='form' onSubmit={handleSubmit(onsubmit)} >
          <TextField fullWidth={true} type='email' label='Email' {...register("email", { required: 'this is req' })}></TextField>
          <TextField fullWidth={true} sx={{ margin: '0.5rem 0' }} type='password' label='Password' {...register("password", { required: 'this is req' })}></TextField>
          <Typography sx={{margin:'0.5rem 0'}}><Link className='link' to={'forgetpass'}>Forget Pass ?</Link></Typography>
        <Button type='submit' fullWidth={true} sx={{background:'#EF6B4A',color:'white'}} variant="contained">Login</Button>
        <Button type="button" onClick={btn} className='btn' fullWidth sx={{ border: '1px solid ', color: '#6251DD', margin: '1rem 0' }} variant="outlined">Register</Button>
          
      </form>
    </Stack> 
    </>
  )
}
