import cart from './assets/shopping-cart.svg';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';

function CartWidget() {

    const { totalQuantity } = useContext(CartContext);

    return (
        <div>
            <Link to='/cart' style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
                <img src={cart} alt="cart-widget" />
                {totalQuantity}
            </Link>
        </div>
    )
}

export default CartWidget;