import { createStore, compose, applyMiddleware } from 'redux';

import initialState from './initialState';
import reducer from './reducer';

// middleware to allow axios API calls
import thunk from "redux-thunk";

// local storage
import persistState from "redux-localstorage";

  // set up redux dev tools 
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  // store set up
  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(
      applyMiddleware(thunk), // thunk middleware for API calls
      persistState() // saves state into local storage so that it persists after refresh of the browser
    )
  );
  
  export default store;