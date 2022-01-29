import * as redux from 'redux'

const initialState = {
    counter: 0,
    showCounter: true
}

const reducerFn = (state = initialState, action) => {
    if (action.type == 'increment') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }

    if (action.type == 'decrement') {
        return {
            ...state,
            counter: state.counter - 1
        }
    }

    if (action.type == 'incrementBy') {
        return {
            ...state,
            counter: state.counter + action.val
        }
    }

    if (action.type == 'toggle') {
        return {
            ...state,
            showCounter: !state.showCounter
        }
    }

    return state;
};

const store = redux.createStore(reducerFn);

export default store;