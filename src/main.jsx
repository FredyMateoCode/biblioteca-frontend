/*Este archivo es el punto de entrada principal de tu aplicación React. Aquí es donde se
 inicializa y monta el componente raíz*/
//import { BrowserRouter } from "react-router-dom";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
