import React from 'react';
import { Link } from "react-router-dom"
import './Footer.css'

export const Footer = () => {
  return (

<footer className="text-center text-lg-start bg-white text-muted">
    

            <section className="fundo">
                
                
                    <div className="container text-center text-md-start mt-5">

                        <div className="mt-3 row_footer">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 className="text-center text-uppercase fw-bold mb-4">
                                   Ecomserratec
                                </h6>
                                <p>
                                    Loja online com variedades de produtos, que te oferece garantia e qualidade.
                                </p>
                                
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-center text-uppercase fw-bold mb-4">
                                    Produtos
                                </h6>
                                <p>
                                    <Link href="#!" className="text-reset">Escritório</Link>
                                </p>
                                <p>
                                    <Link href="#!" className="text-reset">Informática</Link>
                                </p>
                                <p>
                                    <Link href="#!" className="text-reset">Livraria</Link>
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-center text-uppercase fw-bold mb-4">
                                    Obrigações
                                </h6>
                                <p>
                                <Link to="/" className="text-reset">Recursos</Link>
                                </p>
                                <p>
                                    <Link to="/" className="text-reset">Contato</Link>
                                </p>
                                <p>
                                    <Link href="#!" className="text-reset">Sobre nós</Link>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            
                                <h6 className="text-center text-uppercase fw-bold mb-4"> Contato</h6>
                                <p><i className="fas fa-home me-3 text-secondary"></i> Rua Galvão Bueno, N° 47 - São Paulo</p>
                                <p><i className="fas fa-envelope me-3 text-secondary"></i> ecomserratec@gmail.com</p>
                                <p><i className="fas fa-phone me-3 text-secondary"></i> (11) 9 9657-9172</p>
                            </div>

                        </div>

                    </div>

                <div className="text-center p-4">
                    © 2022 Copyright:
                    <a className="text-reset fw-bold" target="_blank" href="https://www.apache.org/licenses/LICENSE-2.0.html">EcomSerratec.com</a>
                </div>              
                </section>
            </footer>    
  
  )
    
  
};