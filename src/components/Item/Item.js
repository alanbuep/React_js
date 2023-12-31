import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Item = ({ id, name, img, price, stock }) => {
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
                    <Link to={`/item/${id}`}><Button variant="primary">Ver Detalles</Button></Link>
                </Card.Body>
            </Card>
        </div >
    )
}

export default Item;