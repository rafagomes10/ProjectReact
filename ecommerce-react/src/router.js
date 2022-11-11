// 1° Importar quais as paginas que eu quero que ele cuide.
import Login from "./pages/Login";
import Cliente from "./pages/Cliente";
import Dashboard from "./pages/Dashboard";
import Relatorio from "./pages/Relatorio";
import Usuario from "./pages/Usuario";

import Header from "./components/Header"

// 2° Importar o React e tambem os componentes do React Router Dom.
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom"

const Router = () => (
    
    // Serve para informar que estou trabalhando com rotas no navegador
    <BrowserRouter>
    
        {/* O menu fica aqui para funcionar junto com o sistema de roteamento. */}
        <Header/>

        {/* é como se fosse um array, aqui vão ficar minhas rotas. */}
        <Routes>
            <Route exact path="/" element={<Dashboard/>}/> 
            <Route path="/login" element={<Login/>}/> 
            <Route path="/cliente" element={<Cliente/>}/> 
            <Route path="/relatorio" element={<Relatorio/>}/> 
            <Route path="/usuario" element={<Usuario/>}/> 
        </Routes>
    </BrowserRouter>
);

export default Router;