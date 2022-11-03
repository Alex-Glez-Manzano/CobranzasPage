import { Toolbar } from '@mui/material';
import { Box } from '@mui/system'
import React from 'react'
import {  SideBar } from '../components';
import MySideNav from '../components/MySideNav';
//barra lateral de tamaño especifico
const drawerWidth = 180;
export const CobranzasLayout = ({children}) => {
  return (
    <Box sx={{display: 'flex', backgroundColor:'#F5F5F5', height:'100vh'}}>
        {/* navbar  drawerWidth*/}
        {/* <NavBar drawerWidth={drawerWidth}/> */}
        {/* slidebar  drawerWidth*/}
        
      <SideBar drawerWidth={drawerWidth}/>
        {/* <MySideNav/> */}
        <Box 
            component='main'
            sx={{flexGrow:1, p:3}}
        >
        {/* ToolBAR */}
        <Toolbar/>
        {children}
        </Box>
        
    </Box>
  )
}
