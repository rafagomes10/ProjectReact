import { useContext, useState } from "react"
import { CartContext } from "../../context/Carrinho"
import { Cards } from "../../components/Cards/Cards";
import { CarrinhoCards } from "../../components/CardCarrinho/CardCarrinho";
// import { ButtonFinalizar } from "../../components/Button/ButtonFinalizar/ButtonFinalizar";
import './ShoppingCart.css'


export const ShoppingCart = () => {

    const { cart } = useContext(CartContext)
    
    return <div>
        {cart.length == 0 ?
         <div className='vazio'>
             <h3>Ops... Seu carrinho está vazio no momento!</h3>
             <i className="bi bi-cart-x-fill"></i>
         </div> : 
         <CarrinhoCards lista={cart} />}
    </div>;
}