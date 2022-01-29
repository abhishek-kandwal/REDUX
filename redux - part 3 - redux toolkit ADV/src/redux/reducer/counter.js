import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    counter: 0
};

const counterReducer = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
                state.counter = state.counter + 1;
        },
        decrement(state) {
                state.counter = state.counter - 1;
        },
        incrementBy(state, action) {
                state.counter = state.counter + action.payload;
        }
    }
});

export default counterReducer;