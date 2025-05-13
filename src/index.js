import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './ComingSoon.js';
// don’t need vitals or service workers
// import reportWebVitals from './reportWebVitals.js';

const root = createRoot(document.getElementById('root'));
root.render(<App />);

// reportWebVitals();