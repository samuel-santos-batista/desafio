import React from 'react'
import { useForm } from 'react-hook-form'
import './style.css'

import foods from '../../assets/foods'

export default function FormClient(){

    const { register, erros, handleSubmit } = useForm();

    const onSubmit = (data) =>{

        let foodsCart, message

        if (localStorage.hasOwnProperty("@foodCart:itens")) {
            
            foodsCart = JSON.parse(localStorage.getItem("@foodCart:itens"))
        }
        const itensPedido = []

        foodsCart.map(foodCart=>{
            foods.map(food=>{
                if(foodCart.id == food.id){
                    itensPedido.push({title: food.title, price: food.price, quantity: foodCart.quantity})
                }
            })
        })
        let pedido = '', total = 0
        itensPedido.map(itemPedido=>{
            let aux 
            aux= `${itemPedido.quantity} X ${itemPedido.title} (R$${itemPedido.price*itemPedido.quantity})`
            pedido = pedido + aux
            total = total + (itemPedido.price*itemPedido.quantity)
        })

        message = `Olá, sou ${data.name}. Desejo realizar o pedido: ${pedido} - total de R$${total.toFixed(2)}. A forma de pagamento é no ${data.payment}. O endereço para entrega: ${data.address} - ${data.number}. O número para contato é ${data.telephone}`
        localStorage.setItem("@foodCart:itens", JSON.stringify([]))
        window.location.href = `https://api.whatsapp.com/send?phone=5538988431292&text=${message}.`
        
    }
    return(
    <>
    <section>      
        <div className="row">
                <h1 id="moto"><span>Eba!!</span> Estamos quase lá. Basta preencher alguns dados. :)</h1>
        </div>
        <div className="form-wrapper">
            <div className="row">
            <form onSubmit={ handleSubmit(onSubmit) } method="get">

                <div className="input inline">
                    <input 
                        ref={register({
                        required:{value:true, message: 'Nome é obrigatorio'},
                        minLength: 1,
                        maxLength: 40,
                        })}
                        type="text" name="name" placeholder="Nome" className="input-name"/>

                    <input 
                        ref={register({
                        required:{value:true, message: 'Telefone é obrigatorio'},
                        minLength: 8,
                        maxLength: 16
                        })}                       
                    type="text" name="telephone" placeholder="Telefone" className="input-telephone"/>
                </div>
                <div className="input inline">
                        <input 
                        ref={register({
                            required:{value:true, message: 'Endereço é obrigatorio'},
                            minLength: 5,
                            maxLength: 100
                            })}                         
                        type="text" name="address" placeholder="Endereço" className="input-address"/>
                        <input 
                        ref={register({
                            required:{value:true, message: 'O número da residência é obrigatorio'},
                            minLength: 1,
                            maxLength: 5
                            })}                        
                        type="text" name="number" placeholder="Número" className="input-number"/>
                </div>

                <div className="payment">
                    <input 
                        ref={register({
                        required: true
                        })}  
                        type="radio" name="payment" id="card" value="cartão"/>
                    <label for="card">
                        <i class="fa fa-credit-card" aria-hidden="true"></i>
                        <span>Cartão</span>
                    </label>
                    <input 
                        ref={register({
                            required: {value: true}
                        })}
                    type="radio" name="payment" id="cash" value="dinheiro"/>
                    <label for="cash">
                        <i class="fa fa-money" aria-hidden="true"></i>		
                        <span>Dinheiro</span>
                    </label>
                </div>
                
                <div className="input inline">
                    <a  href="#" name="submit"  className="btn-submit button">
                        <input type="submit" value="Enviar"  className="btn-submit button"/>
                    </a>
                </div>
            </form>
            </div>
        </div>
    </section>
    </>
);
}

