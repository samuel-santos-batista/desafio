import React from 'react'

import './style.css'


import foods from '../../assets/foods'

export default function itemOrder({ idFood, quantity, children}){

    let indice = foods.indexOf(foods.filter((food) =>  food.id == idFood)[0],0);
    let food
    if(indice >= 0){
         food = foods[indice]
    }

    return(
        <>
        <div className="item">
            <img src={food.image} alt="item"/>
            <div className="item-information">
                <h1>{food.title}</h1>
                <span>{food.description}</span>
            </div>
            <span>{quantity}</span>
            <span>{food.price}</span>
            {children}           
        </div>
        </>
    );

}

