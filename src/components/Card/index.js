import React, { useState, useEffect } from 'react'

import './style.css'


export default function Card({ food }){

    const [itens, setItens] = useState(()=>{
        const storagedItens =localStorage.getItem('@foodCart:itens')

        if(storagedItens){
            return JSON.parse(storagedItens)
        }
        return []
        
    });

    useEffect(()=>{
        localStorage.setItem(
        '@foodCart:itens', 
        JSON.stringify(itens)
        );
    }, [itens]);

    function handleAddItem(param){ //mudar só o id do item clicado
        if(param != undefined){

            const id = parseInt(param)
            let indice
            let foods = new Array()

            if (localStorage.hasOwnProperty("@foodCart:itens")) {
            foods = JSON.parse(localStorage.getItem("@foodCart:itens"))
            }
        
            /* Adiciona um novo valor no array*/
            
            indice = foods.indexOf(foods.filter((food) =>  food.id == id)[0],0);
        
            if(indice != -1){
                foods[indice].quantity = foods[indice].quantity + 1

                console.log(foods[indice])
                
            }else{
                foods.push({id: id, quantity: 1})
            }
            
            localStorage.setItem("@foodCart:itens", JSON.stringify(foods))
            alertify.notify('Item adicionado!', 'custom', 2, function(){  console.log('dismissed'); });
        }        
    }
    return(
            <div className="card">
                <div>
                    <img src={food.image} alt="imagem da comida"/>
                    <div className="food-information">
                        <h2>{food.title}</h2>
                        <span className="size">{food.description}</span>
                        <div>
                            <span className ="price">R${food.price}</span>
                            <button value={food.id} onClick={e =>handleAddItem(e.target.value)} className="add-to-cart">
                                <span className={food.id} onClick={e =>handleAddItem(e.currentTarget.className)}>+</span>
                                <span name={food.id} className={food.id} onClick={e =>handleAddItem(e.currentTarget.className)}>Adicionar</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>       
)
}
