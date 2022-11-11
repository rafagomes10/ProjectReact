import React, { useState, useEffect, useContext } from 'react'
import { CartContext } from '../../../context/Carrinho' 

export const BotaoRemoverCarrinho = ({ produto }) => {

  const { cart, removeItem } = useContext(CartContext)
  
  console.log(cart);
  return (
    <>
      <button onClick={() => removeItem(produto)}>Remover Item</button>
    </>
  )
}