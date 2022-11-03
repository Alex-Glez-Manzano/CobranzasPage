import { LogoutOutlined, MenuOutlined, Search } from "@mui/icons-material"
import { AppBar,  Autocomplete, Button, CircularProgress, FormControl, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Toolbar } from "@mui/material"
import { Grid, Typography} from "@mui/material"
import { useState } from "react";
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
const optionEstatus = ['','Activo', 'Inactivo'];
const optionColegio = ['','01', '02'];
const drawerWidth = 180;

export const CobranzasView = () => { // optionEstatus
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
        width: '12ch',
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
        {/* <Toolbar>
            <IconButton
              color='inherit'
              edge="start"
              sx={{mr:2, display:{sm: 'none'}}}
            >
                <MenuOutlined />
            </IconButton>
            <Grid container direction='row' justifyContent='space-between' >
              <Typography variant="h6" noWrap component='div'>Cobranzas</Typography>
              <IconButton color ='error'>
                <LogoutOutlined/>
              </IconButton>
            </Grid>
        </Toolbar> */}
      </AppBar>
      {/* cuerpo  */}
      <Grid container direction="column" sx={{ backgroundColor:'white', borderRadius: 3, minHeight:'550px'}}>
        <Grid container justifyContent="center" direction='row' sx={{mt:'10px'}}>
            <Grid container >
             
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
              <TextField label="Regina - 1" color="success"  sx={{ margin:'5px'}}/>
            </Grid>    
            <Grid container >
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
              <TextField label="Familia" color="success"  sx={{ margin:'5px'}}/>
              <Button variant="contained" sx={{backgroundColor:'black', color:'white', height:'55px'}}>Buscar</Button>
             </Grid>
            <Grid container justifyContent="center" >
              <form >
              <TableContainer >
          {/* <legend>Modulo de cobranza</legend> */}
              <Table aria-label="simple table">
              <TableHead>
                  <TableRow>
                      <TableCell >N° de Documento</TableCell>
                      <TableCell  align="center">Familia</TableCell>
                      <TableCell align="center">Mes</TableCell>
                      <TableCell  align="center" >Monto</TableCell>
                      <TableCell  align="center" >Fecha de vencimiento</TableCell>
                      <TableCell align="center" >Acción</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
              <TableRow key='0'>
                      <TableCell align="center">13</TableCell>
                      <TableCell align="center">099</TableCell>
                      <TableCell align="center">abril</TableCell>
                      <TableCell align="center">1500.36</TableCell>
                      <TableCell align="center">10/01/2017</TableCell>
                      <TableCell align="center"> <Button variant="contained" sx={{backgroundColor:'black', color:'white', height:'30px'}}>Pagar</Button></TableCell>
                      
                  </TableRow>
                  <TableRow key='1'>
                      <TableCell align="center">1</TableCell>
                      <TableCell align="center">1</TableCell>
                      <TableCell align="center">abril</TableCell>
                      <TableCell align="center">1500.36</TableCell>
                      <TableCell align="center">10/01/2017</TableCell>
                      <TableCell align="center"> <Button variant="contained" sx={{backgroundColor:'black', color:'white', height:'30px'}}>Pagar</Button></TableCell>
                      
                  </TableRow>
                  <TableRow key='2'>
                  <TableCell align="center">4</TableCell>
                  <TableCell align="center">199</TableCell>
                      <TableCell align="center">abril</TableCell>
                      <TableCell align="center">1500.36</TableCell>
                      <TableCell align="center">10/01/2017</TableCell>
                      <TableCell align="center"> <Button variant="contained" sx={{backgroundColor:'black', color:'white', height:'30px'}}>Pagar</Button></TableCell>
                      
                  </TableRow>
                  <TableRow key='3'>
                      <TableCell align="center">3</TableCell>
                      <TableCell align="center">089</TableCell>
                      <TableCell align="center">abril</TableCell>
                      <TableCell align="center">1500.36</TableCell>
                      <TableCell align="center">10/01/2017</TableCell>
                      <TableCell align="center"> <Button variant="contained" sx={{backgroundColor:'black', color:'white', height:'30px'}}>Pagar</Button></TableCell>
                      
                  </TableRow>
              </TableBody>
              </Table>
          </TableContainer>
          </form>
            </Grid>
            <Button variant="contained" sx={{backgroundColor:'black', color:'white', height:'55px'}}>Exportar</Button>
            <Button variant="contained" sx={{backgroundColor:'black', color:'white', height:'55px'}}>importar plantilla</Button>
        </Grid>
      </Grid>
    </Grid>
  )
}