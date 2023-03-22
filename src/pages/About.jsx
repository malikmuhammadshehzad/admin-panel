import React from 'react'
 
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography';
import Sidebar from '../components/Sidebar';
 

function  About() {
  return (
    <>
        <Box sx={{ display: 'flex' , backgroundColor:'yellow'  }}>
       <Sidebar/>
    <h1>
      About
    </h1>
        </Box>
   
    </>
  )
}

export default About