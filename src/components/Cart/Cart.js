import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

function Cart() {
    const { cart, clearCart, totalQuantity, totalCost } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <Container className="mt-4 text-white">
                <Card.Title className="mt-4">No hay items en el carrito</Card.Title>
                <Link to='/'>
                    <Button className="mt-4">Inicio</Button>
                </Link>

            </Container>
        )
    }

    return (
        <Container className="mt-4 container-cards">
            <Row>
                {cart.map(p => <Container className='mb-4'><CartItem key={p.id} {...p} /></Container>)}
            </Row>
            <Row>
                <Col>
                    <Button variant="warning" onClick={() => clearCart()}>Limpiar Carrito</Button>
                </Col>
                <Col>
                    <h3 className="text-white">Total: ${totalCost}</h3>
                </Col>
                <Col>
                    <Link to='/checkout'>
                        <Button variant="success">Checkout</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default Cart;