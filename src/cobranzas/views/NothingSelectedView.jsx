import { LogoutOutlined, MenuOutlined, StarOutline } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"

export const NothingSelectedView = () => {
  return (
    <Grid container>
      <AppBar
        position='fixed'
        sx={{
          width:{sm: `calc(100% - ${180}px)`},
          ml: {sm: `${180}px`}
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
            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
              <Typography variant="h6" noWrap component='div'>Menu</Typography>
              <IconButton color ='error'>
                <LogoutOutlined/>
              </IconButton>
            </Grid>
        </Toolbar>

      </AppBar>
      {/* <Grid
      backgroundColor="black"
      container
      spacing= {0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{minHeight: 'calc(100vh - 110px)', backgroundColor:'secondary.main', borderRadius: 3}}
      
    >
        <Grid item xs={12}>
            <StarOutline sx={{fontSize:100, color:'black'}}/>
        </Grid>
        <Grid item xs={12}>
            <Typography color="black" variant="h5">Selecciona una opción</Typography>
        </Grid>
    </Grid> */}
    </Grid>
  )
}
