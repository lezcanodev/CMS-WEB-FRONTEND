import { combineReducers } from '@reduxjs/toolkit';
import { buildCommonSlice } from '../core/baseSlice';
import { seguridadIngresarThunk, seguridadRegistrarseThunk } from './seguridadThunks';


const seguridadIngresar = buildCommonSlice<any>({
    name: 'seguridadIngresar',
    asyncFn: seguridadIngresarThunk
});

const seguridadRegistrarse = buildCommonSlice<any>({
    name: 'seguridadRegistrarse',
    asyncFn: seguridadRegistrarseThunk
})


const seguridad = combineReducers({
    ingresar: seguridadIngresar.reducer,
    registrarse: seguridadRegistrarse
});

export default seguridad;