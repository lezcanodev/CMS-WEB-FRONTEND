import {  ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { BaseState } from './baseState';

function buillCommonCases(asyncFn: any): ((builder: ActionReducerMapBuilder<BaseState<any>>) => void){
    return (builder) => {
        builder
            .addCase(asyncFn.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(asyncFn.pending, (state) => {
                state.loading = true;
            })
            .addCase(asyncFn.rejected, (state) => {
                state.loading = false;
                state.error = null;
            })
    }
}

export function buildCommonSlice<T>({ name, asyncFn}: {name: string, asyncFn: any}){
    const initialState: BaseState<T> = {
        data: null,
        error: null,
        loading: false
    }

    return createSlice({
        name,
        initialState,
        reducers: {},
        extraReducers: buillCommonCases(asyncFn)
    })
}