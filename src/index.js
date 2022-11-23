/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import 'index.scss';
import 'bootstrap.min.css';
import App from 'App';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "store/store"

axios.defaults.baseURL = 'http://localhost:8181/api';
axios.interceptors.request.use(config=>{
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["x-auth-token"] = token;
  }
  return config;
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='container-fluid App'>
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
  </div>
);
