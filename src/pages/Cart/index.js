import React, { useEffect, useState } from 'react';

import Header from '../../components/Header/';
import EmptyCart from '../../components/EmptyCart'
import Order from '../../components/Order'


export default function Cart(){ 
   const [itens, setItens] = useState(()=>{
      const storagedItens = localStorage.getItem('@foodCart:itens')
  
      if(storagedItens){
          return JSON.parse(storagedItens)
      }
      return []
      
  });
   return (
   <>
      <Header/>
      {itens.length != 0 ? <Order/> : <EmptyCart/>}
   </>
   );
};

