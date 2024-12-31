import React from 'react';
import ReactDOM from 'react-dom'; // Em React 17, use 'react-dom' em vez de 'react-dom/client'
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);