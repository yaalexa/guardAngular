import {createReducer,on} from '@ngrx/store'
import {login} from './action'

export const initialState={
    usuario:"",
    rol:"",
    token:"",
    refresh:"",
    mensaje:""
}

export let authReducer=createReducer(
    initialState,
    on(login,(state,datos)=>({
        ...state,
        usuario:datos.usuario,
        rol:datos.rol,
        token:datos.token,
        refresh:datos.refresh,
        mensaje:datos.mensaje
    }))
)