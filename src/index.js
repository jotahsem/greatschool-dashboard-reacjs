import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import './assets/boxicons/css/boxicons.min.css'
import './assets/css/grid.css'
import './assets/css/index.css'

import Layout from './components/layout/Layout'

document.title = "Great School - Visão Geral"

ReactDOM.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
