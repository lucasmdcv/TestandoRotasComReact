import App from './App'; 
import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa a nova API de cliente do ReactDOM
import './index.css'; // Opcional: importa estilos globais


// Seleciona o elemento HTML com o ID 'root' onde o app será renderizado
const root = ReactDOM.createRoot(
  document.getElementById( "root" ) 
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

