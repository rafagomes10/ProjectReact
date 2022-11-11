import { Button, Card, Col, Row } from "react-bootstrap"
import { api } from '../../api';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BodyContainer } from '../../components/BodyContainer/BodyContainer'
import './DetalheProduto.css'

//import { CartContext } from "../../context/Carrinho"
import { BotaoAdicionarCarrinho } from "../../components/Button/ButtonAddItensCarrinho/ButtonAddItensCarrinho";



export const DetalheProduto = () => {
    //const { cart, addItem, removeItem, clearCart } = useContext(CartContext)

    const {id} = useParams();
    console.log(id);

    const [produto, setProduto] = useState([]);

    useEffect(() => {
    api
      .get(`/produto/${id}`)
      .then((response) => setProduto(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

    return (
        <BodyContainer>
            <Row>
                <Col md="8" sm= "12" lg= "8" xl= "6">
                    <div className="esquerda">
                        <img src={produto.fotoLink} />
                    </div>
                </Col>

                <Col md="8" sm= "12" lg= "6" xl= "6">
                    <div className="direita">
                        <h1>{produto.nome}</h1>
                        <p>{produto.descricao}</p>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        
                        <div className="botao">
                            <BotaoAdicionarCarrinho produto={produto}/> 
                            
                        
                        </div>
                    </div>
                </Col>
            </Row>
        </BodyContainer>
        
    )
}