import { checkingCredentials } from "./"

//acciones que se pueden despachar pero tienen una tarea asincrona
export const checkingAuthentication = (usuario, password)=>{
    return async(dispatch)=>{
        dispatch(checkingCredentials());
    }
}