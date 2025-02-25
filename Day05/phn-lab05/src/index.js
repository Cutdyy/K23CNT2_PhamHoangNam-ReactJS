import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import PhnApp from './PhnApp';

const phnRoot = ReactDOM.createRoot(document.getElementById('phnRoot'));

phnRoot.render(
  <React.StrictMode>
    <PhnApp />
  </React.StrictMode>
);

reportWebVitals();
