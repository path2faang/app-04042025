import React from 'react';
import ReactDOM from 'react-dom';
import './styles/tailwind.css';
import App from './App';
import Notification from './components/Notification';

ReactDOM.render(
  <React.StrictMode>
    <Notification />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);