import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import './reset.css';


import Converter from './views/Converter/Converter.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Converter />
  </React.StrictMode>
);
