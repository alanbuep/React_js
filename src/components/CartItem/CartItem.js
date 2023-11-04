import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';

export const CartItem = ({ id, name, img, price, quantity }) => {
    const { removeItem } = useContext(CartContext);

    const handleRemoveItem = () => {
        removeItem(id);
    };

    return (
        <Container>
            <Card>
                <Row>
                <Col>
                    <Card.Img variant="top" src={img} alt={name} className="img-card" />
                </Col>
                <Col>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <p className="text-primary">Precio: ${price}</p>
                            <p className="text-primary">Cantidad: {quantity}</p>
                        </Card.Text>
                        <Button variant="primary" onClick={handleRemoveItem}>Eliminar</Button>
                    </Card.Body>
                </Col>
                </Row>
            </Card>
        </Container>
    );
};

export default CartItem;

