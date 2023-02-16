import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import './styles/reset.css'
import './styles/reset-minimal.css'
import './font/vazirmatn.css'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
