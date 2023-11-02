import { useContext } from "react";
import { CartContext } from "../../Context/CartContext"; 
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

function Cart(){
    const {cart,clearCart,totalQuantity, total} = useContext(CartContext);

    if(totalQuantity === 0){
        return(
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/'>Productos</Link>
            </div>
        )
    }

    return(
        <div>
            {cart.map(p=> <CartItem key={p.id} {...p} />)}
            <h3>Total: ${total}</h3>
            <button onClick={()=> clearCart()}>Limpiar Carrito</button>
            <Link to='/checkout'>Checkout</Link>
        </div>
    )
}

export default Cart;