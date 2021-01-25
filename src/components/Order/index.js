import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import alertify from 'alertifyjs'


import ItemOrder from '../ItemOrder'
import './style.css'

import cartImage from '../../assets/cart-black.png'

import foods from '../../assets/foods'

export default function Cart(){

    const [itens, setItens] = useState(()=>{
        const storagedItens =localStorage.getItem('@foodCart:itens')

        if(storagedItens){
            return JSON.parse(storagedItens)
        }
        return []
        
    });

    function handleRemoveItem(param){ //mudar só o id do item clicado
        if(param != undefined){

            const id = parseInt(param)
            let indice
            let foodsCart = new Array()

            if (localStorage.hasOwnProperty("@foodCart:itens")) {
                foodsCart = JSON.parse(localStorage.getItem("@foodCart:itens"))
            }
        
            /* Adiciona um novo valor no array criado */
            
            indice = foodsCart.indexOf(foodsCart.filter((food) =>  food.id == id)[0],0);
            
            

            if(indice != -1){
                foodsCart[indice].quantity = foodsCart[indice].quantity - 1

                console.log(foodsCart[indice])

                
            }else{
                foodsCart.push({id: id, quantity: 1})
            }
            if(foodsCart[indice].quantity<=0)
            foodsCart.splice(indice, 1)
            
            localStorage.setItem("@foodCart:itens", JSON.stringify(foodsCart))
            const storagedItens = JSON.parse(localStorage.getItem('@foodCart:itens'))

            setItens([...storagedItens])
            alertify.notify('Item adicionado!', 'custom', 2, function(){  console.log('dismissed'); });
  
        }
    }
  
    let indice, total = 0
    itens.map(item=>{
        indice = foods.indexOf(foods.filter((food) =>  food.id == item.id)[0],0);
        if(indice>=0){
            total = total + (item.quantity * foods[indice].price)
        }
    })


    return(
    <section>
        <div className="order">
            <div className="header-order">
                <img src={cartImage} alt="carrinho"/>   
                <h1>Itens adicionados no seu carrinho</h1>
            </div>
            <div className="item-list">
                { itens.map(item => 
                <ItemOrder idFood={item.id} quantity={item.quantity}>
                    <button value={item.id} onClick={e=>handleRemoveItem(e.target.value)} className="remove-to-cart">
                        <span className={item.id} onClick={e=>handleRemoveItem(e.target.className)}>-</span>
                        <span className={item.id} onClick={e=>handleRemoveItem(e.target.className)}>Remover</span>
                    </button>
                </ItemOrder>)
                }
                {itens.length == 0? document.location.reload(): <></>}
            </div>

            <hr/>
            <div className="box-total">
                <div>
                    <span className="txt-total">Total: </span>
                    <span>{total.toFixed(2)}</span>
                </div>
            </div>

            <div>
                <from action="" className="form-client">
                    <div>
                        <button className="btn-primary"><Link to="/user">Fazer Pedido</Link></button>
                    </div>
                </from>
            </div>
        </div>
    </section>      
);
}

