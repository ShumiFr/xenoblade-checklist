import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './contexts/ThemeContext';
import './index.css';

// Responsive
const style = document.createElement('style');
style.textContent = `
  @media (max-width: 1040px) { [data-cols] { grid-template-columns: 1fr !important; } }
  @media (max-width: 860px) {
    [data-shell] { flex-direction: column !important; }
    [data-shell] > aside { width: auto !important; border-right: none !important; border-bottom: 1px solid var(--border) !important; position: static !important; height: auto !important; }
  }
`;
document.head.appendChild(style);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);