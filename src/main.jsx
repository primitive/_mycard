import { createRoot } from 'react-dom/client';
import './index.css';
import App from './IntroCard.jsx';
// don’t need vitals 
// import reportWebVitals from './reportWebVitals.js';

const root = createRoot(document.getElementById('root'));
root.render(<App />);

// reportWebVitals();