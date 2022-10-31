import { createSlice } from '@reduxjs/toolkit';
export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated',//'checking',//not-authenticated , authenthicated
        uid: null,
        email: null,
        displayName: null,
        errorMenssage: null,
    },
    reducers: {
        login:(state, action)=>{

        },
        logout:()=>{

        },
        checkingCredentials:(state)=>{
            state.status= 'checking'
        }
    }
});


// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;