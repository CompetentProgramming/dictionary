import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ThemeProvider from "./context/ThemeProvider";
import FontProvider from "./context/FontProvider";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <FontProvider>
          <ThemeProvider>
              <App />
          </ThemeProvider>
      </FontProvider>
  </React.StrictMode>,
)
