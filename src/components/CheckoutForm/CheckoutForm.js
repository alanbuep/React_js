import { useState } from "react";
import { Form, InputGroup, Container, Button, Row } from "react-bootstrap";
import { signOut, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../services/firebase/firebaseConfig";

function CheckoutForm({ onConfirm }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            const userEmail = user.email;
            const userName = user.displayName;
            setLoggedIn(true);
            setName(userName);
            setEmail(userEmail);
        } catch (error) {
            console.error("Error al autenticar con Google", error);
        }
    }

    const handleConfirm = (event) => {
        event.preventDefault();

        if (phone.trim() === "") {
            alert("Número de teléfono requerido");
            return;
        }

        const userData = {
            name,
            phone,
            email
        }

        onConfirm(userData);

        signOut(auth).then(() => {
            setLoggedIn(false);
        }).catch((error) => {
            console.error("Error al desloguear", error);
        });
    }

    return (
        <Container className="mt-4">
            {loggedIn ? (
                <div>
                    <h3 className="text-white mt-4">Nombre: {name}</h3>
                    <h3 className="text-white mt-4">Email: {email}</h3>
                    <Form>
                        <Row>
                            <InputGroup className="mb-3">
                                <InputGroup.Text>Número de Teléfono:</InputGroup.Text>
                                <Form.Control type="text" value={phone} onChange={({ target }) => setPhone(target.value)} />
                            </InputGroup>
                        </Row>
                        <Button className="mt-4" onClick={handleConfirm} onSubmit={handleConfirm} type="submit" variant="success">Crear Orden de Compra</Button>
                    </Form>
                </div>
            ) : (
                <Button className="mt-4" size="lg" onClick={handleGoogle} variant="outline-success">Ingresar Con Google</Button>
            )}
        </Container>
    )
}

export default CheckoutForm;