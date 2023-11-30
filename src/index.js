import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {applyMiddleware, compose} from 'redux'
import { Provider } from 'react-redux';
import {createStore} from 'redux'
import Reducers from './Reducers'
import thunk from 'redux-thunk'

const root = ReactDOM.createRoot(document.getElementById('root'));
const store=createStore(Reducers,compose(applyMiddleware(thunk)))
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);


