import React from 'react'

import './style.css'

import Card from '../Card/'

import foods from '../../assets/foods'


export default function Catalog(){
    
    return(
        <section className="catalog">
            <h1>Cardápio</h1>
            <div className="grid">
                { foods.map(food => <Card food={food}/>) }
            </div>
        </section>
)
}