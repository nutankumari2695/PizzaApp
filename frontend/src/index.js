import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { Provider } from 'react-redux';
// import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode  >
     {/* <Provider >  */}
      <App />
     {/* </Provider> */}
  // </React.StrictMode>
);

reportWebVitals();


