import React from 'react';
import { Provider } from 'mobx-react';
import ReactDOM from 'react-dom';
import FastClick from 'fastclick';
import '@/assets/css/reset.css';
import Router from '@/router';
import * as serviceWorker from './serviceWorker';

// FastClick
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}

console.log('当前环境：', process.env.NODE_ENV)
if (process.env.NODE_ENV !== 'production') {
  const VConsole = require('vconsole/dist/vconsole.min.js')
  new VConsole()
}

ReactDOM.render(
  <Provider>
    <Router />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();