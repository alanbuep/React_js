import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';

export const CheckItem = ({ id, name, img, price, quantity }) => {

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
                    </Card.Body>
                </Col>
                </Row>
            </Card>
        </Container>
    );
};

export default CheckItem;