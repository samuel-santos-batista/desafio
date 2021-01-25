import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

import heroImage from '../../assets/hero-pizza.png'


export default function Hero(){
    return(
            <section id="hero">
                <div id="content">
                    <div>
                        <h6><em>Você está com fome?</em></h6>
                        <h1>Não espere!</h1>
                        <button className="btn-primary"><Link to="/cart">Pedir agora</Link></button>
                    </div>
                    <div id="heroImage">
                        <img src={heroImage} alt="logo faminto"/>
                    </div>
                </div>
            </section>
);
}