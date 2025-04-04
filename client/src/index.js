import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SonnerProvider } from 'sonner';

ReactDOM.createRoot(document.getElementById('root')).render(
  <SonnerProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </SonnerProvider>
);