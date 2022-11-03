
import { Divider, Grid } from '@mui/material';
import { display } from '@mui/system';
import {Navigate, Route, Routes} from 'react-router-dom';
import { SideBar } from '../components';
import MySideNav from '../components/MySideNav';

import { CobranzasLayout } from '../layout/CobranzasLayout';
import { AlumnosView,CobranzasView,DocumentosView,PortalView,ReferenciasView} from "../views";



const drawerWidth=180;
export const CobranzasPage = () => {
  return (
    <CobranzasLayout >
      <Routes>
      <Route exact path='/' element={<PortalView />}>
         <Route exact path='/referencias' element={() => <ReferenciasView />} />
        {/* <Route path="/" element={<PortalView/>}/>
        <Route path="/alumnos" element={<AlumnosView/>}/> */}
      </Route> 
      </Routes>
    </CobranzasLayout>

    // 


      // <Routes>
      //   <Route path="*" element={<CobranzasLayout/>}/>
      //   {/* <Route path="/*" element={<Navigate to="/"/>}/> */}
      // </Routes>


    // <CobranzasLayout>
    //   {/* <Typography >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt non impedit eaque officiis in aperiam expedita fugit consequatur placeat, officia minima mollitia omnis quia suscipit debitis sint aliquid, eum tempora!</Typography> */}
    //   <PortalView/>
    //   <Divider sx={{height:'100px', backgroundColor:'red'}}/>
    //   <AlumnosView />
    //   <Divider sx={{height:'100px', backgroundColor:'red'}}/>
    //   <ReferenciasView/>
    //   <Divider sx={{height:'100px', backgroundColor:'red'}}/>
      
    //   <CobranzasView/>
    //   <Divider sx={{height:'100px', backgroundColor:'red'}}/>
    //   <DocumentosView/>
    // </CobranzasLayout>
  )
}
