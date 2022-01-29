import * as redux from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import reducers from './reducer';
console.log('reducers', reducers)
const store = configureStore({
    reducer: reducers
});

export default store;