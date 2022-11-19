import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './atoms/styles/output.css';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <>
    <App />
    <ToastContainer />
  </>
  // <React.StrictMode>
  // </React.StrictMode>
);
