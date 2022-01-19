import{useState} from 'react';
const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount]=useState(initial);
    function suma(){
        if(count<stock){
            setCount(count+1);
        }

    }
    function resta(){
        if(count>0){
            setCount(count-1);
        }
    }
    return (
        <div>
            <div><span className='menos' onClick={()=>resta()}>-</span>
            <input type='number' value={count} id='numb' readOnly/>
            <span className='mas' onClick={()=>suma()}>+</span></div>
            <button id='addCarrito' onClick={()=>onAdd()}>Agregar Carrito</button>
        </div>
        
    )
}

export default ItemCount
