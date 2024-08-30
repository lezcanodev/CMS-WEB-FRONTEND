import { configureStore } from '@reduxjs/toolkit'
import seguridad from './stores/seguridad/seguridadSlice'
import { useDispatch } from 'react-redux';

const store = configureStore({
    reducer: {
        seguridad: seguridad
    }
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default store;
