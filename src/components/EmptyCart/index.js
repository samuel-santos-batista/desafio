import React from 'react'

import './style.css'

import emptyCartImage from '../../assets/empty-cart.png'


export default function EmptyCart(){
    return(
    <section>
        <div className="empty-cart">
            <div>
                <h1>Carrinho Vazio :(</h1>
                <p>Você provavelmente ainda não adicionou uma das nossas opções. 
                Para pedir, vá para a página principal
                </p> 
                <img src={emptyCartImage} alt="carrinho vazio"/>
                <a href="/" className="btn-primary">Voltar</a>
            </div>
        </div>
    </section>      
);
}

