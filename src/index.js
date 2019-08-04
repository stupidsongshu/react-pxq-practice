import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
// import App from './App';
import * as serviceWorker from './serviceWorker';
import 'lib-flexible'
import './style/base.css'
import RouterConfig from './router'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <RouterConfig />
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
