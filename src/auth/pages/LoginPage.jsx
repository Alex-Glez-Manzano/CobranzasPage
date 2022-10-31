import { Button, Grid, TextField, Typography } from "@mui/material"
import { useForm } from "../../hooks"
import {useDispatch} from 'react-redux'
import { checkingAuthentication } from "../../store/auth";
export const LoginPage = () => {
  const dispatch = useDispatch();

  const {usuario, password, onInputChange} = useForm({
    usuario:'ale399',
    password: '12345'
  });
  const onSubmit = (event)=>{
    event.preventDefault();
    console.log({usuario, password});
    dispatch(checkingAuthentication());
  }
  return (
    <Grid
      container
      spacing= {0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{minHeight: '100vh', backgroundColor:'primary.main', padding: 4}}
    >
      <Grid 
      item
      className="box-shadow"
      xs={3}
      sx={{
        width:{sm:450},
        backgroundColor:'white',
       padding: 3,
        borderRadius:2}}
      >
        <Typography variant='h5' sx={{mb: 1}}>Login</Typography>
        <form onSubmit={onSubmit}>
          <Grid container>
            <Grid item xs={12} sx={{mt: 2}}>
              <TextField
                label="Usuario"
                type="text"
                placeholder='Matricula de usuario'
                fullWidth
                name="usuario"
                value={usuario}
                onChange={onInputChange}
              />
            </Grid>
            <Grid item xs={12} sx={{mt: 2}}>
              <TextField
                label="Contraseña"
                type="password"
                placeholder='Contraseña'
                fullWidth
                name="password"
                value={password}
                onChange={onInputChange}
              />
            </Grid>
            <Grid container spacing={2} sx={{mb: 2, mt: 1}}
            alignItems="center"
            justifyContent="center">
              <Grid item xs={12} sm={6}>
                <Button type="submit" variant="contained" fullWidth>
                  Iniciar sesión
                </Button>
              </Grid>

            </Grid>
          </Grid>          
        </form>

      </Grid>
    </Grid>
  )
}
