import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import PhnApp from './PhnApp';
import reportWebVitals from './reportWebVitals';

const phnRoot = ReactDOM.createRoot(document.getElementById('phnRoot'));

phnRoot.render(
  <React.StrictMode>
    <BrowserRouter>
      <PhnApp />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();