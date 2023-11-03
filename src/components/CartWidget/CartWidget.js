import cartImg from './assets/shopping-cart.svg';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import { Container, Row, Col } from "react-bootstrap";

function CartWidget() {

    const { totalQuantity } = useContext(CartContext);

    return (
        <Container>
            <Link to='/cart' style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
                <Row>
                    <Col>
                        {totalQuantity}
                    </Col>
                    <Col>
                        <img src={cartImg} alt="cart-widget" />
                    </Col>
                </Row>
            </Link>
        </Container>
    )
}

export default CartWidget;