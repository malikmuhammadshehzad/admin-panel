import React from 'react'
 
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography';
import Sidebar from '../components/Sidebar';
 

function  Setting() {
  return (
    <>
        <Box sx={{ display: 'flex' , backgroundColor:'yellow'  }}>
       <Sidebar/>
    <h1>
      Setting
    </h1>
        </Box>
   
    </>
  )
}

export default Setting