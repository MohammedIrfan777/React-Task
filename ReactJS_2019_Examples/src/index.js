import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,combineReducers} from 'redux';

import App from './App';
import App1 from './App1';
import App2 from './App2';
//import AppStateObjectRedux from './AppStateObjectRedux';
import MultipleReducer from './MultipleReducer';
//import AppRedux from './AppRedux';
import MainApp from './MainApp';


import store from './store';
import './index.css';
import * as serviceWorker from './serviceWorker';



ReactDOM.render(
  //  <App1></App1>,
   <Provider store = {store}>
    <App2 />
  </Provider> ,
     document.getElementById('root'));


serviceWorker.unregister();
