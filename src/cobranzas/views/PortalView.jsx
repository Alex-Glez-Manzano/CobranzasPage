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

const options = ['','Regina - 1', 'Regina - 2'];
export const PortalView = () => {
     // optionEstatus
    const [value, setValue] = useState(optionEstatus[0]);
    const [inputValue, setInputValue] = useState('');
    // optionColegio
    const [valueColegio, setValueColegio] = useState(optionEstatus[0]);
    const [inputValueColegio, setInputValueColegio] = useState('');
//   buscar 
const [valueC, setValueC] = useState(options[0]);
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
        <Toolbar>
            <IconButton
              color='inherit'
              edge="start"
              sx={{mr:2, display:{sm: 'none'}}}
            >
                <MenuOutlined />
            </IconButton>
            <Grid container direction='row' justifyContent='space-between' >
              <Typography variant="h6" noWrap component='div'>Portal Cotrep</Typography>
              <IconButton color ='error'>
                <LogoutOutlined/>
              </IconButton>
            </Grid>
        </Toolbar>
      </AppBar>
      {/* cuerpo  */}
      <Grid container direction="column" sx={{ backgroundColor:'white', borderRadius: 3, minHeight:'550px'}}>
        <Grid container justifyContent="center" direction='row' sx={{mt:'10px'}}>
            <Grid container justifyContent="center" direction='row'>
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
                sx={{ width: 150, margin:'5px'}}
                renderInput={(params) => <TextField {...params} color='success' label="N° de colegio" />}
              />
              <Autocomplete
                value={valueC}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                  setInputValue(newInputValue);
                }}
                id="controllable-states-demo"
                options={options}
                sx={{ width: 200, margin:'5px'}}
                renderInput={(params) => <TextField {...params} color='success' label="Nombre del colegio" />}
              />
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
              <TextField label="Dirección de Formato" color="success"  sx={{ margin:'5px'}}/>
             </Grid>
            <Grid container justifyContent="center">
              <form>
              <TableContainer >
          {/* <legend>Modulo de cobranza</legend> */}
              <Table aria-label="simple table">
              <TableHead>
                  <TableRow>
                      <TableCell >Mes del Calendario</TableCell>
                      <TableCell  align="center">Fecha limite de pago N° 1</TableCell>
                      <TableCell align="center">% de interés</TableCell>
                      <TableCell  align="center" >Fecha limite de pago N° 2</TableCell>
                      <TableCell align="center">% de interés</TableCell>
                      <TableCell  align="center" >Fecha limite de pago N° 3</TableCell>
                      <TableCell align="center" >% de interés</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
              <TableRow key='0'>
                      <TableCell align="center">13</TableCell>
                      <TableCell align="center">25/10/2017</TableCell>
                      <TableCell align="center">0%</TableCell>
                      <TableCell align="center">N/A</TableCell>
                      <TableCell align="center">N/A</TableCell>
                      <TableCell align="center">N/A</TableCell>
                      <TableCell align="center">N/A</TableCell>
                  </TableRow>
                  <TableRow key='1'>
                      <TableCell align="center">1</TableCell>
                      <TableCell align="center">10/01/2017</TableCell>
                      <TableCell align="center">0%</TableCell>
                      <TableCell align="center">20/01/2017</TableCell>
                      <TableCell align="center">0%</TableCell>
                      <TableCell align="center">24/01/2017</TableCell>
                      <TableCell align="center">5%</TableCell>
                  </TableRow>
                  <TableRow key='2'>
                      <TableCell align="center">2</TableCell>
                      <TableCell align="center">10/02/2017</TableCell>
                      <TableCell align="center">0%</TableCell>
                      <TableCell align="center">20/02/2017</TableCell>
                      <TableCell align="center">0%</TableCell>
                      <TableCell align="center">24/02/2017</TableCell>
                      <TableCell align="center">5%</TableCell>
                  </TableRow>
                  <TableRow key='3'>
                      <TableCell align="center">3</TableCell>
                      <TableCell align="center">10/03/2017</TableCell>
                      <TableCell align="center">0%</TableCell>
                      <TableCell align="center">20/03/2017</TableCell>
                      <TableCell align="center">0%</TableCell>
                      <TableCell align="center">24/03/2017</TableCell>
                      <TableCell align="center">5%</TableCell>
                  </TableRow>
              </TableBody>
              </Table>
          </TableContainer>
          </form>
            </Grid>
            <Grid container justifyContent="space-around" margin='10px'>
              <Button variant="contained" sx={{margin:'5px', backgroundColor:'black', color:'white'}}>Modificar</Button>
              <Button variant="contained" sx={{margin:'5px', backgroundColor:'black', color:'white'}}>Guardar</Button>
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}