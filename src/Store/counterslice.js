import { configureStore, createSlice  } from '@reduxjs/toolkit';

const  counterslice = createSlice({
    name : 'counter',
    initialState : 0,
    reducers : {
        increment : (state) => state + 1,
        decrement : (state) => state - 1,
        incremnetbyamount : (state,action) =>  state + action.payload,
    },
})


export const {  increment , decrement ,incremnetbyamount  } = counterslice.actions;

export default counterslice.reducer;