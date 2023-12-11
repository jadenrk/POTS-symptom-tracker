import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SymptomLogsContextProvider } from './context/SymptomLogsContext';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <SymptomLogsContextProvider>
      <App />
      </SymptomLogsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
