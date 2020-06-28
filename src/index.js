import React from 'react';
import { Provider } from "react-redux";
import ReactDOM from 'react-dom';
import App from './App/App';

// data store for Redux
import store from './data/store';

// CSS
import './css/style.css';

ReactDOM.render(
  <Provider store={ store }>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);