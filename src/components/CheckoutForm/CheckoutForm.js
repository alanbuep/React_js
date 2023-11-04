import { useState } from "react";
import { Form, InputGroup, Container, Button, Row } from "react-bootstrap";

function CheckoutForm({ onConfirm }) {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleConfirm = (event) => {
        event.preventDefault();

        const userData = {
            name, phone, email
        }

        onConfirm(userData);
    }

    return (
        <Container className="mt-4">
            <Form onSubmit={handleConfirm}>
                <Row>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">
                            Nombre
                        </InputGroup.Text>
                        <Form.Control
                            type="text" value={name} onChange={({ target }) => setName(target.value)}
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">
                        Telefono
                        </InputGroup.Text>
                        <Form.Control
                            type="text" value={phone} onChange={({ target }) => setPhone(target.value)}
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">
                        Email
                        </InputGroup.Text>
                        <Form.Control
                            type="email" value={email} onChange={({ target }) => setEmail(target.value)}
                        />
                    </InputGroup>
                </Row>
                <Button type="submit" variant="success">Crear Orden de Compra</Button>
            </Form>
        </Container>
    )
}

export default CheckoutForm;