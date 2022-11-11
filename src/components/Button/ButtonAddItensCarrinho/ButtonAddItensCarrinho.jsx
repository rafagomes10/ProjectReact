import React, { useState, useEffect, useContext } from 'react'

import './StylesButtonAddItensCarrinho.css'
import { CartContext } from '../../../context/Carrinho'

export const BotaoAdicionarCarrinho = ({ produto }) => {
  const { addItem } = useContext(CartContext)

  return (
      <div>
        <button className="bi bi-bag-check" onClick={() => addItem(produto)} >
          <strong> Adicionar ao Carrinho</strong>
        </button>
      </div>
  );
}
