import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import "./Header.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import { Home } from '../../screens/Home/Index'
import { Manage } from '../../screens/Manage/Manage'
import { ShoppingCart } from '../../screens/ShoppingCart/ShoppingCart'
import { DetalheProduto } from '../../screens/DetalheProduto';
import { Col } from 'react-bootstrap';

export const Header = () => {
    return (
      
      
        
        <>        
         <Navbar bg="dark" variant="dark">
          <Container >
              <Navbar.Brand href="/">EcomSerratec</Navbar.Brand>
              <Nav className="me-auto">
               <li id='pagina-principal'><Nav.Link as={Link} to={"/"}>Página Principal</Nav.Link></li>
               <li><Nav.Link as={Link} to={"/Manage"}>Admin</Nav.Link></li>  
               <Nav className="carrinho">         
               <li><Nav.Link as={Link} to={"/ShoppingCart"}><i className="bi bi-cart4"></i></Nav.Link></li>
               </Nav>
              </Nav>
            </Container>
          </Navbar>
        </>
                
    );
}