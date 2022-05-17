import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './reset.css';
import './style.css';

import App from './App';
import Converter from './views/Converter/Converter';
import CurrenciesList from './views/CurrenciesList/CurrenciesList';
import Currency from './views/CurrenciesList/Currency';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Converter />} />
          <Route path='currencies' element={<CurrenciesList />}>
            <Route path=':currencyCode' element={<Currency />} />
          </Route>
          <Route
            path='*'
            element={
              <main style={{ padding: '3rem 0' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  // </React.StrictMode>
);
