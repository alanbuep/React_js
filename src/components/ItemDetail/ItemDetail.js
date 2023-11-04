import { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';

function ItemDetail({ id, name, img, price, stock, description }) {

    const [quantityAdded, setQuantityAdded] = useState(0);

    const { addItem } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);
        console.log(quantity)
        const item = { id, name, price, img };

        addItem(item, quantity);
    }

    return (
        <Container className="mt-4 container-cards">
            <Row>
                <Col>
                    <Image src={img} alt={name} className="img-detail" />
                </Col>
                <Col className='column'>
                    <Card.Title className='text-white'>{name}</Card.Title>
                    <Card.Text className="text-white mt-4">{description}</Card.Text>
                    <Card.Text className="text-white">Precio efectivo o transferencia:</Card.Text>
                    <p className="text-primary">${price}</p>
                    <p className="text-primary">Cantidad Disponible: {stock}</p>
                    <div>
                        {
                            quantityAdded > 0 ? (
                                <Link to='/cart'>
                                    <Button variant="success"> Terminar compra</Button>
                                </Link>
                            ) : (
                                <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                            )
                        }
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ItemDetail;