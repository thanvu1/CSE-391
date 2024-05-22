import React from 'react';
import ReactDOM from 'react-dom/client'; // Sử dụng react-dom/client cho React 18 trở lên
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
