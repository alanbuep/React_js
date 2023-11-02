import Item from '../Item/Item';
import { Row, Col } from 'react-bootstrap';

const ItemList = ({ products }) => {
    return (
        <Row>
            {products.map(prod => <Col className='mb-4'><Item key={prod.id} {...prod} /></Col>)}
        </Row>
    )
}

export default ItemList;