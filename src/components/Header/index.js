import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

import logoImage from '../../assets/logo.png'
import cartImage from '../../assets/cart.png'


export default function Header(){
    return(
        <header>
            <div className="logo">
                <img src={logoImage} alt="logo faminto"/>
                <h2><b>FomeZero</b></h2>
            </div>
            <div>
                <ul className="flex items-center">
                    <li><Link to="/">Menu</Link></li>
                    <li className="btn-cart"><Link to="/cart"><img src={cartImage} alt="Carinho"/></Link></li>
                </ul>
            </div>
        </header>
)
}