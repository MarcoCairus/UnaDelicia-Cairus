import { useState } from "react"
import ItemCount from "./ItemCount"
function ItemListContainer({greeting}) {
    const [items,setItems]=useState({naame:'Lasagna', stock:6})
    function onAdd(a){
        let valor = document.getElementById('numb').value;
        let carrito = document.getElementById('addCarrito');
        console.log(valor)
        console.log(carrito)
        if(valor===0){
            let newCarrito= carrito.disabled=true;
            return newCarrito;
        }
        else if(valor>0){
            alert('Agregaste al Carrito' + valor);
        }
    }
    return (
        <section>      
            <h2 style={{fontSize:'48px'}}>{greeting}</h2>
            <article className='countCarrito'>
                <div><span>{items.naame}</span></div>
                <ItemCount stock={items.stock} initial={1} onAdd={onAdd}/>
            </article>    
        </section>
    )
}

export default ItemListContainer
