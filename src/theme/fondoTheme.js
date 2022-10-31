import {createTheme} from '@mui/material'
import {red} from '@mui/material/colors'
export const fondoTheme = createTheme({
    palette:{
        primary:{
            main: '#fff'
        },
        secondary:{
            main: '#C9E3F9'
        },
        error:{
            main: red.A400
        }
    }
})