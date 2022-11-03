
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FaceIcon from '@mui/icons-material/Face';
import { AlumnosView,CobranzasView,DocumentosView,PortalView,ReferenciasView } from "../views";
import { Link, NavLink, Route, Routes, useNavigate } from "react-router-dom";

export const SideBar = ({drawerWidth=180}) => {
    const navigate= useNavigate();
  return (
        <Box
        component='nav'
        sx={{width:{sm: drawerWidth}, flexShrink:{sm:0}, display:{xs:'none', sm:'block'}}}
    >
        <Drawer
            variant="permanent"//temporary
            open={true}
            sx={{
                backgroundColor:'red',
                '& .MuiDrawer-paper':{boxSizing: 'border-box', backgroundColor:'#000'}, 
            }}

        >
            <Toolbar sx={{
                backgroundColor: '#150202',
                color: 'white'
            }}>
                <Typography variant="h6" noWrap component='div'>
                    @ Cotrep
                </Typography>
            </Toolbar>
            <Divider sx={{backgroundColor:'white'}}/>
            <Grid container>
            <List sx={{width:{sm: 185}, flexShrink:{sm:0}, color:'white', height:'450px'}}>
                <ListItem>
                    <ListItemButton element={Link} to='/referencias'>
                        <Grid container>
                            <DashboardIcon sx={{color:'white'}}/>&nbsp;
                            <ListItemText primary={'Referencias'}>
                            </ListItemText>
                        </Grid>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <Grid container>
                            <AlignHorizontalLeftIcon sx={{color:'white'}}/>&nbsp;
                            <ListItemText primary={'Documentos'}/>
                        </Grid>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <Grid container>
                            <FilterAltIcon sx={{color:'white'}}/>&nbsp;
                            <ListItemText primary={'Reportes'}/>
                        </Grid>
                    </ListItemButton>
                </ListItem><ListItem>
                    <ListItemButton>
                        <Grid container>
                            <FaceIcon sx={{color:'white'}}/>&nbsp;
                            <ListItemText primary={'Alumnos'}/>
                        </Grid>
                    </ListItemButton>
                </ListItem>
            </List>
            </Grid>
            {/* <Divider sx={{background:'white'}}></Divider> */}
        </Drawer>

    </Box>

  )
}