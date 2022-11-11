import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles.css"

// Aqui o React toma controle do HTML, ou seja, tudo que tiver dentro do elemento root é por conta do React.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Aqui ele rendereciza o componente App na tela.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);