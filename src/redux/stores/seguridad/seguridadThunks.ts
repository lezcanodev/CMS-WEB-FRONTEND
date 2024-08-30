import { createAsyncThunk } from '@reduxjs/toolkit'
import { seguridadApi } from '../../../api'



export const seguridadIngresarThunk = createAsyncThunk(
    'seguridad/ingresar', () => {
        seguridadApi.ingresar();
    }
)


export const seguridadRegistrarseThunk = createAsyncThunk(
    'seguridad/registrarse', () => {
        seguridadApi.registrarse();
    }
)