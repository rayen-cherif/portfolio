import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// C:\Users\Ahmed\Projects\22-11\portfolio\node_modules\bootstrap\dist\css\bootstrap.min.css
import 'bootstrap/dist/css/bootstrap.min.css'
// C:\Users\Ahmed\Projects\22-11\portfolio\node_modules\bootstrap\dist\js\bootstrap.bundle.min.js
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

