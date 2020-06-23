import { createStore, compose } from 'redux';

import initialState from './initialState';
import reducer from './reducer';

  // set up redux dev tools 
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  // store set up
  const store = createStore(
    reducer,
    initialState,
    composeEnhancers()
  );
  
  export default store;