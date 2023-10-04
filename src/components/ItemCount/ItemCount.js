import { useState } from "react";

const ItemCount = ({stock,initial,onAdd}) => {

    const [count, setCount] = useState(initial);

    function increment() {
        if (count < stock) {
            setCount(count + 1);            
        }
    }
    function decrement() {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return (
        <div>
            <div className='card-content'>
                <div className="buttons is-centered">
                    <button onClick={decrement} className="button is-danger is-rounded">-</button>
                    <p>Cantidad: {count}</p>
                    <button onClick={increment} className="button is-success is-rounded">+</button>
                </div>
                <button className="button is-primary is-rounded" onClick={()=> onAdd(count)} disabled={!stock}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;