import { LogoutOutlined, MenuOutlined, Search } from "@mui/icons-material"
import { AppBar,  Autocomplete, Button, CircularProgress, FormControl, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Toolbar } from "@mui/material"
import { Grid, Typography} from "@mui/material"
import { useState } from "react";
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { SideBar } from "../components";
const optionEstatus = ['','Activo', 'Inactivo'];
const optionColegio = ['','Regina - 1', 'Regina - 2'];
const drawerWidth = 180;
export const AlumnosView = () => {
  // optionEstatus
    const [value, setValue] = useState(optionEstatus[0]);
    const [inputValue, setInputValue] = useState('');
    // optionColegio
    const [valueColegio, setValueColegio] = useState(optionEstatus[0]);
    const [inputValueColegio, setInputValueColegio] = useState('');
//   buscar 

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '22ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  return (
    <Grid container >
      {/* Titulo  */}
      <AppBar
        position='fixed'
        sx={{
          width:{sm: `calc(100% - ${180}px)`},
          ml: {sm: `${drawerWidth}px`}
        }}
    >
        <Toolbar>
            <IconButton
              color='inherit'
              edge="start"
              sx={{mr:2, display:{sm: 'none'}}}
            >
                <MenuOutlined />
            </IconButton>
            <Grid container direction='row' justifyContent='space-between' >
              <Typography variant="h6" noWrap component='div'>Alumnos</Typography>
              <IconButton color ='error'>
                <LogoutOutlined/>
              </IconButton>
            </Grid>
        </Toolbar>
      </AppBar>
      {/* cuerpo  */}
      <Grid container direction="column" sx={{ backgroundColor:'white', borderRadius: 3, minHeight:'550px'}}>
        <Grid container justifyContent="center" direction='row' sx={{mt:'10px'}}>
            <Grid container justifyContent="center">
              <Toolbar sx={{backgroundColor:'#EAEAEA', borderRadius:'20px'}}>
                  <Search>
                  <SearchIconWrapper>
                      <SearchIcon />
                      </SearchIconWrapper >
                      <StyledInputBase
                      placeholder="Buscar Alumno"
                      />
                  </Search>
              </Toolbar>
              <TextField label="Razón Social" color="success"  sx={{width:'300px', margin:'5px'}}/>
            
              <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                  setInputValue(newInputValue);
                }}
                id="controllable-states-demo"
                options={optionEstatus}
                sx={{ width: 300, margin:'5px'}}
                renderInput={(params) => <TextField {...params} color='success' label="Estatus" />}
              />
              <TextField label="RFC" color="success"  sx={{width:'300px', margin:'5px'}}/>
              <TextField label="Código postal" color="success"  sx={{width:'300px', margin:'5px'}}/>
              <TextField label="Régimen" color="success"  sx={{width:'300px', margin:'5px'}}/>
              <TextField label="No. de familia" color="success"  sx={{ margin:'5px', width:'300px'}}/>
              <Autocomplete
                value={valueColegio}
                onChange={(event, newValue) => {
                  setValueColegio(newValue);
                }}
                inputValue={inputValueColegio}
                onInputChange={(event, newInputValue) => {
                  setInputValueColegio(newInputValue);
                }}
                id="controllable-states-demo"
                options={optionColegio}
                sx={{ width: 300, margin:'5px'}}
                renderInput={(params) => <TextField {...params} color='success' label="Colegio" />}
              />
              <TextField label="Nombre del Alumno" color="success"  sx={{width:'300px', margin:'5px'}}/>
              <TextField label="Grado" color="success"  sx={{ margin:'5px', width:'300px'}}/>
              <TextField label="Mensualidad" color="success"  sx={{width:'300px', margin:'5px'}}/>
             </Grid>    
             <Grid container justifyContent={"space-evenly"}>
             <Button variant="contained" sx={{ margin:'5px', backgroundColor:'black', color:'white'}}>Modificar</Button>
              <Button variant="contained" sx={{ margin:'5px', backgroundColor:'black', color:'white'}}>Guardar</Button>
              <Button variant="contained" sx={{ margin:'5px', backgroundColor:'black', color:'white'}}>Agregar</Button> 
            
             </Grid>
            {/* <Grid container justifyContent="center" >
              <TextField
                id="date"
                label="Fecha de Inicio"
                type="date"
                color='success'
                defaultValue="2017-05-24"
                sx={{ width: 220, margin:'5px' }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="date"
                label="Fecha de Final"
                type="date"
                color='success'
                defaultValue="2017-05-24"
                sx={{ width: 220, margin:'5px'}}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField label="No. de Familia" color="success"  sx={{ margin:'5px'}}/>
              <Button variant="contained" sx={{ margin:'5px', backgroundColor:'black', color:'white'}}>Buscar</Button>
              <Button variant="contained" sx={{ margin:'5px', backgroundColor:'black', color:'white'}}>Generar Referencia</Button>
            </Grid> */}
            {/* <Grid container justifyContent="center">
              <form>
              <TableContainer >
              <Table aria-label="simple table">
              <TableHead>
                  <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell align="center">Colegio</TableCell>
                      <TableCell align="center">Nombre del Alumno</TableCell>
                      <TableCell align="center">Mensualidad</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                  <TableRow key='1'>
                      <TableCell align="center">1</TableCell>
                      <TableCell align="center">Regina - 1</TableCell>
                      <TableCell align="center">Alejandro Gonzalez Manzano</TableCell>
                      <TableCell align="center">2555.32</TableCell>
                      <TableCell align="center"><Button variant="contained">Generar pago</Button></TableCell>
                  </TableRow>
              </TableBody>
              </Table>
          </TableContainer>
          </form>
            </Grid> */}
        </Grid>
      </Grid>
    </Grid>
  )
}
