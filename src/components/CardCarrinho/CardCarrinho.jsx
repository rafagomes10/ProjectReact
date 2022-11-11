import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/Carrinho";
import { BotaoRemoverCarrinho } from "../Button/ButtonRemoverCarrinho/ButtonRemoverCarrinho";
import './CardCarrinho.css'
import { CardCarrinhoContainer, CardCarrinho, TopCardCarrinho, TopCardCarrinhoImage, BottomCardCarrinho } from "./StyleCardCarrinho";

export const CarrinhoCards = (props) => {
    
    const [produto, setProduto] = useState([]);

    const { cart, addItem, setCart, removeItem, valorTotal, finalizarCompra  } = useContext(CartContext)

    return (
        <>
            <CardCarrinhoContainer>
                {props.lista.map((produto) => (
                    <CardCarrinho key={produto.id}>
                        <TopCardCarrinho>
                            <TopCardCarrinhoImage src={produto.fotoLink} />
                        </TopCardCarrinho>
                        <BottomCardCarrinho>
                            <span>{produto.nome}</span>
                            <span>R${produto.valor}</span>
                            <BotaoRemoverCarrinho produto={produto} />
                        </BottomCardCarrinho>
                    </CardCarrinho>
                ))}
            </CardCarrinhoContainer>

            <div className="BotaoFinalizar">
                <p>Valor total Produtos: R${valorTotal}</p>
                <button onClick={finalizarCompra}>
                    Finalizar Compra <i className="bi bi-check-lg"></i>
                </button>
            </div>
        </>
    );
};