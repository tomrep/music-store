import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'mobx-react';
import { BrowserRouter as Router } from 'react-router-dom';
import { initializeAxios } from './axios';

import { createStore } from './stores/index';

// eslint-disable-next-line
import 'antd/dist/antd.css';
import './assets/css/main.scss';

import App from './App';

const store = createStore();

initializeAxios();
const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider {...store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  rootElement
);
