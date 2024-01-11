import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value:0,
}

export const CounterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment : (state) => {
            state.value += 1;
        },
        decremnet: (state) => {
            state.value -= 1;
        }
    }
}) 

export const {increment, decremnet} = CounterSlice.actions;
export default CounterSlice.reducer; 