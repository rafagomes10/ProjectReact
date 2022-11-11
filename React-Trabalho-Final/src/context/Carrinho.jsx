import React from 'react'
import { createContext } from 'react'
import { useState, useEffect } from 'react'

export const CartContext = createContext()
export const CartProvider = ({ children }) => {
 
  const [valorTotal, setValorTotal] = useState(0);
  const [cart, setCart] = useState([])


  function finalizarCompra() {
    let soma = 0
    for (let index = 0; index < cart.length; index++) {
      soma = soma + cart[index].valor;
    }
    setValorTotal(soma);
    
    alert("Compra finalizada com sucesso!")
  }

  function addItem(item) {
    

    const aux = cart
    aux.push(item)
    setCart(aux)
    alert("Produto adicionado ao carrinho!");

  }

  function removeItem(id) {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i] === id) {
        cart.splice(i, 1);
      }
    }
    setCart([... cart]);
  }

  return (
    <CartContext.Provider
      value={{ cart, addItem, setCart, removeItem, valorTotal, finalizarCompra }}
    >
      {children}
    </CartContext.Provider>
  );
}