import TextField from '@mui/material/TextField'
import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';


export default function ForgetPass() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const onsubmit = (data:any) => {
    console.log(data)
    try {
      const respons = axios.post('http://upskilling-egypt.com:3005/api/auth/forgot-password', data)
      navigate('resetpass')
    console.log(respons)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
          <Stack className='text'  sx={{width:'70%'}}>
            <Typography variant='subtitle1'>welcome Back!</Typography>
          <Typography className='log' variant='subtitle1'>Forget Password  !!</Typography>
          </Stack>
      <form className='bgbg' onSubmit={handleSubmit(onsubmit)} >
        <TextField sx={{display:'block',width:'70%',margin:'1rem 0'}} fullWidth={true} type='email' label='Email' {...register("email", { required: 'this is req' })}></TextField>
        <Button type="submit" className='btn' fullWidth sx={{ border: '1px solid ', color: '#6251DD', margin: '1rem 0',width:'70%' }} variant="outlined">Send</Button>
      </form>
    
    </>
  )
}
