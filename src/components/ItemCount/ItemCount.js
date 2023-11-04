import { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

const ItemCount = ({ stock, initial, onAdd }) => {

    const [count, setCount] = useState(initial);

    function increment() {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    function decrement() {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    return (
        <Row>
            <Col className="buttons is-centered">
                <Button onClick={decrement} className="button is-danger is-rounded">-</Button>
            </Col>
            <Col>
                <p className="text-white">Cantidad: {count}</p>
            </Col>
            <Col>
                <Button onClick={increment} className="button is-success is-rounded">+</Button>
            </Col>

            <Button className="button is-primary is-rounded mt-3" onClick={() => onAdd(count)} disabled={!stock}>Agregar al carrito</Button>
        </Row>
    )
}

export default ItemCount;