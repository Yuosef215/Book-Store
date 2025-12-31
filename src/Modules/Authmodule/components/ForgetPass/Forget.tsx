import React from 'react'

export default function Forget() {
  return (
    <>
       <Stack sx={{width:'70%',margin:'auto'}}>
                <Stack className='text'  sx={{margin:'1rem 0'}}>
                  <Typography variant='subtitle1'>welcome Back!</Typography>
                <Typography className='log' variant='subtitle1'>Login to your account</Typography>
                </Stack>
            <form className='bgbg' onSubmit={handleSubmit(onsubmit)} >
                <TextField fullWidth={true} type='email' label='Email' {...register("email", { required: 'this is req' })}></TextField>
              <TextField fullWidth={true} sx={{margin:'1rem 0'}} type='password' label='Password' {...register("password",{required:'this is req'})}></TextField>
              <Button type='submit' fullWidth={true} sx={{background:'#EF6B4A',color:'white'}} variant="contained">Login</Button>
                <Button type="button" onClick={btn} className='btn' fullWidth sx={{ border: '1px solid ', color: '#6251DD', margin: '1rem 0' }} variant="outlined">Register</Button>
                
            </form>
          </Stack> 
    </>
  )
}
