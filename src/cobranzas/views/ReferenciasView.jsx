import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar,  Autocomplete, Button, CircularProgress, FormControl, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Toolbar } from "@mui/material"
import { Grid, Typography} from "@mui/material"

import { useState } from "react";


function createData(number, item, qty, price, banco, fecha) {
    return { number, item, qty, price, banco, fecha };
   }
     
   const rows = [
    createData(1, "Algebra", 500, 500, 'HSBC', '20-08-2022'),
    createData(2, "Español", 200, 200, 'Santander','20-08-2022'),
    createData(3, "Programación", 300, 300, 'BBVA','20-08-2022'),
    createData(4, "Geografía", 200, 200, 'HSBC','20-08-2022'),
    createData(5, "Geometria", 100, 100,'BBVA','20-08-2022')
   ];
   const drawerWidth = 180;
   
   const options = ['Regina - 1', 'Regina - 2'];
export const ReferenciasView = () => {
  const [value, setValue] = useState(options[0]);
  const [inputValue, setInputValue] = useState('');
  
  return (
    
    <Grid container  className="referencias">
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
              <Typography variant="h6" noWrap component='div'>Referencias</Typography>
              <IconButton color ='error'>
                <LogoutOutlined/>
              </IconButton>
            </Grid>
        </Toolbar> */}
      </AppBar>
      {/* cuerpo  */}
      <Grid container direction="column"
      justifyContent="center"  sx={{ backgroundColor:'white', borderRadius: 3}}>
        <Grid container justifyContent="center" direction='row' sx={{mt:'10px'}}>
        <Button
          variant="contained"
          component="label" 
          fullWidth
          sx={{margin:'5px'}}
        >
          Upload File
          <input
            type="file"
            hidden
          />
        </Button>
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
          options={options}
          sx={{ width: 300, margin:'5px'}}
          renderInput={(params) => <TextField {...params} color='success' label="Colegio" />}
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
        </Grid>
        <Grid container justifyContent='center'  sx={{margin:'10px'}}>
            <CircularProgress color="inherit" sx={{width:'900px'}}/>
        </Grid>

          <Grid container justifyContent='center'  >
          <form >
          {/* <FormControl fullWidth >
          <legend>Búsqueda:</legend>
              <Grid  label="Nombre" placeholder='Nombre'>
                  
              <TextField
                  label="Nombre"
                  type="text"
                  width="450px"
                  placeholder='Nombre'
                  sx={{margin: 1}}
              />
              <TextField
              label="Fecha"
              type="text"
              width="450px"
              placeholder='Fecha'
              sx={{margin: 1}}
            />
            <TextField
              label="Banco"
              type="text"
              width="450px"
              placeholder="Banco"
              sx={{margin: 1}}
            />
            
              <Button variant="contained" color="success" sx={{margin: 1, height: '55px'}}>
                Búsqueda
              </Button>
              <Button variant="contained" color="error" sx={{margin: 1, height: '55px'}}>
                Limpiar
              </Button>
              </Grid>
          </FormControl> */}
          <TableContainer >
          <legend>Modulo de cobranza</legend>
              <Table aria-label="simple table">
              <TableHead>
                  <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell align="center">Materia</TableCell>
                      <TableCell align="center">Pago</TableCell>
                      <TableCell align="center">Debe</TableCell>
                      <TableCell align="center">Banco</TableCell>
                      <TableCell align="center">Fecha</TableCell>
                      <TableCell align="center">Acción</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                  {rows.map((row) => (
                  <TableRow key={row.number}>
                      <TableCell component="th" scope="row">
                      {row.number}
                      </TableCell>
                      <TableCell align="center">{row.item}</TableCell>
                      <TableCell align="center">{row.qty}</TableCell>
                      <TableCell align="center">{row.price}</TableCell>
                      <TableCell align="center">{row.banco}</TableCell>
                      <TableCell align="center">{row.fecha}</TableCell>
                      <TableCell align="center"><Button variant="contained">Generar pago</Button></TableCell>
                  </TableRow>
                  ))}
              </TableBody>
              </Table>
          </TableContainer>
          </form>
          </Grid>
      </Grid>
    </Grid>
    
  )
}
