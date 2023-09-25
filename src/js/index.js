import React from 'react';
import reactDOM from 'react-dom/client';
import App from './App.js'

const root = reactDOM.createRoot(document.getElementById('electronChat'));
root.render(<React.StrictMode><App /></React.StrictMode>)
