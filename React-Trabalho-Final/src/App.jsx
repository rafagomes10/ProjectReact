import React from 'react'
import './App.css'
import { Home } from './screens/Home/Index'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Manage } from './screens/Manage/Manage';
import { ShoppingCart } from './screens/ShoppingCart/ShoppingCart';
import { DetalheProduto } from './screens/DetalheProduto';
import { Footer } from './components/Footer/Footer';  
import { CartProvider } from './context/Carrinho';
import { CreateCliente } from './screens/Manage/Cliente/CadastrarCliente'
import { UpdateCliente } from './screens/Manage/Cliente/AtualizarCliente'
import { DeleteCliente } from './screens/Manage/Cliente/DeletarCliente'
import { CreateFuncionario } from './screens/Manage/Funcionario/CadastrarFuncionario'
import { UpdateFuncionario } from './screens/Manage/Funcionario/AtualizarFuncionario'
import { DeleteFuncionario } from './screens/Manage/Funcionario/DeletarFuncionario'
import { CreateProduto } from './screens/Manage/Produto/CadastrarProduto'
import { UpdateProduto} from './screens/Manage/Produto/AtualizarProduto'
import { DeleteProduto } from './screens/Manage/Produto/DeletarProduto'
import { CreateCategoria } from './screens/Manage/Categoria/CadastrarCategoria'
import { UpdateCategoria } from './screens/Manage/Categoria/AtualizarCategoria'
import { DeleteCategoria } from './screens/Manage/Categoria/DeletarCategoria'

function App() {

  return(
    
    <BrowserRouter>
    <CartProvider>
      <Header/>
      
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Manage" element={<Manage />} />
      <Route path="/ShoppingCart/" element={<ShoppingCart />} />
      <Route path="/DetalheProduto/:id" element={<DetalheProduto />} />
      <Route path="/CadastrarCliente" element={<CreateCliente />} />
      <Route path="/AtualizarCliente" element={<UpdateCliente />} />
      <Route path="/DeletarCliente" element={<DeleteCliente />} />
      <Route path="/CadastrarFuncionario" element={<CreateFuncionario />} />
      <Route path="/AtualizarFuncionario" element={<UpdateFuncionario />} />
      <Route path="/DeletarFuncionario" element={<DeleteFuncionario />} />
      <Route path="/CadastrarProduto" element={<CreateProduto />} />
      <Route path="/AtualizarProduto" element={<UpdateProduto />} />
      <Route path="/DeletarProduto" element={<DeleteProduto />} />
      <Route path="/CadastrarCategoria" element={<CreateCategoria />} />
      <Route path="/AtualizarCategoria" element={<UpdateCategoria />} />
      <Route path="/DeletarCategoria" element={<DeleteCategoria />} />

    </Routes>
    
      <Footer/>
      </CartProvider>
    </BrowserRouter>
  ) 
}

export default App
    

    
  

    

//importar router aqui.