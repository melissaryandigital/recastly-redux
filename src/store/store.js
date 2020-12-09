import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!





/*
// What file does the initial state go in? Maybe the store creates it on first render?
const initialState = {
  videos: [],
  currentVideo: null
}


// Creating the store by passing in the root reducer
const store = createStore(rootReducer);


// Dispatching the action
// Otherwise known as triggering an event
store.dispatch( *pass in an action object* );



// This is from Redux Essentials documentation
console.log(store.getState());

*/

// Dispatching means sending the action
// (action is the 'what happened' object)
// and passing it into the reducer
// reducer responds with the new state into the store
// this new state gets sent down to the components


// Export the store
export default store;
