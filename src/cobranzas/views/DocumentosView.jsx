import { LastPage, FirstPage, LogoutOutlined, MenuOutlined, Search } from "@mui/icons-material"
import { AppBar,  Autocomplete, Button, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Toolbar } from "@mui/material"
import { Grid, Typography} from "@mui/material"
import { useState } from "react";
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
const optionEstatus = ['','Activo', 'Inactivo'];
const optionColegio = ['','Regina - 1', 'Regina - 2'];
const drawerWidth = 180;
export const DocumentosView = () => {// optionEstatus
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
      <Toolbar>
          <IconButton
            color='inherit'
            edge="start"
            sx={{mr:2, display:{sm: 'none'}}}
          >
              <MenuOutlined />
          </IconButton>
          <Grid container direction='row' justifyContent='space-between' >
            <Typography variant="h6" noWrap component='div'>Documentos</Typography>
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
            <Toolbar sx={{backgroundColor:'#EAEAEA', borderRadius:'20px' }}>
                <Search >
                    <SearchIconWrapper>
                    <SearchIcon />
                    </SearchIconWrapper >
                    <StyledInputBase 
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search'}}
                    />
                </Search>
            </Toolbar>
            <FirstPage/>
            <KeyboardArrowLeftIcon/>
            <KeyboardArrowRightIcon/>
            <LastPage/>
            <TextField label="Numero de documento" color="success"  sx={{ margin:'5px'}}/>

            <TextField label="Razón Social" color="success"  sx={{width:'300px', margin:'5px'}}/>
            <TextField
              id="date"
              label="Fecha de Creacion"
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
              label="Fecha de Estatus"
              type="date"
              color='success'
              defaultValue="2017-05-24"
              sx={{ width: 220, margin:'5px'}}
              InputLabelProps={{
                shrink: true,
              }}
            />
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
            <TextField label="No. de Familia" color="success"  sx={{ margin:'5px'}}/>
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
            <TextField label="Grado" color="success"  sx={{ margin:'5px'}}/>
            <TextField label="Mensualidad" color="success"  sx={{ margin:'5px'}}/>
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
              renderInput={(params) => <TextField {...params} color='success' label="Agosto" />}
            />
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
              renderInput={(params) => <TextField {...params} color='success' label="Mayo" />}
            />
            <Button variant="contained" sx={{ margin:'5px', backgroundColor:'black', color:'white'}}>Agregar alumno</Button>
            <Button variant="contained" sx={{ margin:'5px', backgroundColor:'black', color:'white'}}>Generar Referencia</Button>
            
          </Grid>    
          
          <Grid container justifyContent="center">
            <form>
            <TableContainer >
        {/* <legend>Modulo de cobranza</legend> */}
            <Table aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Mes</TableCell>
                    <TableCell align="center">Concepto de pago</TableCell>
                    <TableCell align="center">Monto</TableCell>
                    <TableCell align="center">Fecha limite de pago</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow key='1'>
                    <TableCell align="center">Enero</TableCell>
                    <TableCell align="center">19233456789</TableCell>
                    <TableCell align="center">2555.32</TableCell>
                    <TableCell align="center">24/05/2022</TableCell>
                </TableRow>
                <TableRow key='2'>
                    <TableCell align="center">Febrero</TableCell>
                    <TableCell align="center">19233456789</TableCell>
                    <TableCell align="center">2555.32</TableCell>
                    <TableCell align="center">24/05/2022</TableCell>
                </TableRow>
                <TableRow key='3'>
                    <TableCell align="center">Marzo</TableCell>
                    <TableCell align="center">19233456789</TableCell>
                    <TableCell align="center">2555.32</TableCell>
                    <TableCell align="center">24/05/2022</TableCell>
                </TableRow>
            </TableBody>
            </Table>
        </TableContainer>
        </form>
          </Grid>
          <Grid container justifyContent="center" >
          <Button variant="contained" sx={{ margin:'5px', backgroundColor:'black', color:'white'}}>Cancelar</Button>
            <Button variant="contained" sx={{ margin:'5px', backgroundColor:'black', color:'white'}}>Modificar</Button>
            <Button variant="contained" sx={{ margin:'5px', backgroundColor:'black', color:'white'}}>Crear</Button>
          </Grid>
      </Grid>
    </Grid>
  </Grid>
)
}