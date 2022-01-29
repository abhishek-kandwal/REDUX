import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    showCounter: true
};

const toggleReducer = createSlice({
    name: 'toggle',
    initialState,
    reducers: {
        toggle(state) {
            state.showCounter = !state.showCounter;
        }
    } 
});

export default toggleReducer;