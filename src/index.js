import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/fonts/Poppins-Regular.ttf';
import './assets/fonts/Montserrat-Regular.ttf';
import './assets/fonts/Gilroy-Light.otf';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
