import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import { Container,Row, Col } from "react-bootstrap";

function Cart() {
    const { cart, clearCart, totalQuantity, totalCost } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/'>Productos</Link>
            </div>
        )
    }

    return (
        <Container className="mt-4 container-cards">
            <Row>
                {cart.map(p => <Col className='mb-4'><CartItem key={p.id} {...p} /></Col>)}
            </Row>
            <h3>Total: ${totalCost}</h3>
            <button onClick={() => clearCart()}>Limpiar Carrito</button>
            <Link to='/checkout'>Checkout</Link>
        </Container>
    )
}

export default Cart;