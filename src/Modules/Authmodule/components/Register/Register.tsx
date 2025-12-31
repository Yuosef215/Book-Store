import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { type SelectChangeEvent } from '@mui/material/Select'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system'
import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onsubmit = async (data:any) => {
    console.log(data);
    try {
      const response = await axios.post('https://upskilling-egypt.com:3007/api/auth/register', data)
      console.log(response);
    } catch (error) {
      console.log(error)
    }
  }
  const retlogin = () => {
    navigate('/')
  }
  const [age, setAge] = React.useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  }
    return (
      <>
        <Stack sx={{ width: '70%', margin: 'auto' }}>
          <Stack className='text' sx={{ margin: '1rem 0' }}>
            <Typography variant='subtitle1'>Create new acccount</Typography>
            <Typography className='log' variant='subtitle1'>Register</Typography>
          </Stack>
          <form className='register' onSubmit={handleSubmit(onsubmit)} >
            <Stack sx={{ margin: '1rem 0' }} direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextField fullWidth type='text' label='Frist Name' {...register('first_name')}></TextField>
              <TextField fullWidth type='text' label='Last Name'{...register('last_name')}></TextField>
            </Stack>
            <TextField fullWidth={true} type='email' label='Email' {...register("email", { required: 'this is req' })}></TextField>
            <TextField fullWidth={true} sx={{ margin: '1rem 0' }} type='password' label='Password' {...register("password", { required: 'this is req' })}></TextField>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                <Select sx={{margin:'1rem 0'}} {...register('role')} labelId="demo-simple-select-label"id="demo-simple-select"value={age} label="Age" onChange={handleChange}>
                  <MenuItem value={10}>Admin</MenuItem>
                  <MenuItem value={20}>User</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Button type='submit' fullWidth={true} sx={{ background: '#EF6B4A', color: 'white' }} variant="contained">Register</Button>
            <Button type="button" onClick={retlogin} className='btn' fullWidth sx={{ border: '1px solid ', color: '#6251DD', margin: '1rem 0' }} variant="outlined">Login</Button>
          </form>
        </Stack>
      </>
    )
  }
