// importing redux
const redux = require('redux');

// always call by the redux library and it will need 2-parameter
// 1st -> old state, 2nd -> dispatch action (action to perform)
// reducer function must return new state
const reducerFn = (state = {
    counter: 0
}, action) => {
    console.log(action)
    if (action.type == 'incrementCounter') {
        return {
            counter: state.counter + 1
        };
    }

    if (action.type == 'decrementCounter') {
        return {
            counter: state.counter - 1
        }
    }

    return state;
}


// create a store
// createStore() takes a reducer function
// reducer function will set the initial state
const store = redux.createStore(reducerFn);

// subscription to store
const counterSubscriber = () => {
    // this store.getState() will receive the latest state
    const latestState = store.getState();
    console.log(latestState);
}

// adding subscription, function which will recevice the updated state
store.subscribe(counterSubscriber);

// update the state using dispatch
// we have store.dispatch() to update the state
// take a {} as argument
// this {
//      type: 'updateCounter' // action type - must be unique
// }
store.dispatch({
    type: 'incrementCounter'
})

// executing the Fn
counterSubscriber();
counterSubscriber();

// dispatching an action
store.dispatch({
    type: 'incrementCounter'
})

counterSubscriber();

// dispatching an action
store.dispatch({
    type: 'decrementCounter'
})

counterSubscriber();
