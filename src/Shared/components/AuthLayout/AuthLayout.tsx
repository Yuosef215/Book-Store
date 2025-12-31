import React from 'react'
import {Outlet} from 'react-router-dom'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import logo from '../../../assets/images/backgb.png'
import logo2 from '../../../assets/images/Logo.png'

export default function AuthLayout() {
  const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid size={{xs:12,sm:6, md:6}}>
          <Stack><img className='img-original' src={logo} alt="" /></Stack>
        </Grid>
        <Grid size={{xs:12,sm:6,md:6}} sx={{backgroundColor:'white'}}>
          <Stack sx={{width:'15%',margin:'4rem auto'}}><img src={logo2} alt="" /></Stack>
          <Stack></Stack>
          <Outlet/>
        </Grid>
      </Grid>
    </Box>
    
    </>
  )
}
