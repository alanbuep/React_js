import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const CartItem = ({ id, name, img, price, stock }) => {
    const { removeItem } = useContext(CartContext);

    const handleRemoveItem = () => {
        removeItem(id);
    };

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} alt={name} className="img-card" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p className="text-primary">Precio efectivo o transferencia:</p>
                        <p className="text-primary">${price}</p>
                        <p className="text-primary">Cantidad Disponible:</p>
                        <p className="text-primary">{stock}</p>
                    </Card.Text>
                    <Button variant="primary" onClick={handleRemoveItem}>Eliminar</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CartItem;

