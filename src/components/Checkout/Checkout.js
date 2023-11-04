import { useContext, useState } from "react";
import { query, Timestamp, writeBatch, collection, getDocs, where, documentId, addDoc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { CartContext } from "../../Context/CartContext";
import { Alert, Button, Row, Container } from "react-bootstrap";
import CheckItem from "../CheckItem/CheckItem";
import { Link } from "react-router-dom";

function Checkout() {

    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');

    const { cart, totalCost, clearCart } = useContext(CartContext);

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true);

        try {

            if (!name || !phone || !email || cart.length === 0 || totalCost <= 0) {
                console.error("Algunos campos requeridos no están definidos o tienen valores inválidos.");
                return;
            }
            const objOrder = {
                name: name,
                phone: phone,
                email: email,
                items: cart,
                totalCost: totalCost,
                date: Timestamp.fromDate(new Date())
            }
            const batch = writeBatch(db);

            const outOfStock = [];

            const ids = cart.map(prod => prod.id);

            const productsRef = collection(db, 'listaProductos');

            const productsAddedFormFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)));

            const { docs } = productsAddedFormFirestore;

            docs.forEach(doc => {
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;

                const productsAddedToCart = cart.find((prod) => prod.id === doc.id);
                const prodQuantity = productsAddedToCart?.quantity;

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit();

                const orderRef = collection(db, 'orders');

                const orderAdded = await addDoc(orderRef, objOrder);

                setOrderId(orderAdded.id);
                clearCart();
            } else {
                console.error("Hay productos que estan fuera de stock");
            }
        } catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false);
        }
    }

    if (loading) {
        return <Alert key="info" variant="info" className="mt-4"><h4>Se esta generando su orden</h4></Alert>
    }

    if (orderId) {
        return <Alert key="success" variant="success" className="mt-4">
            <h4><strong>El id de su orden es:</strong> {orderId}</h4>
            <Link to='/'>
                <Button className='mt-4' variant="info"> Volver al Inicio</Button>
            </Link>
        </Alert>
    }

    return (
        <Container>
            <h1 className="text-white">Checkout:</h1>
            <CheckoutForm onConfirm={createOrder} />
            <h3 className="text-white mt-3">Costo Total: ${totalCost}</h3>
            <h3 className="text-white">Productos:</h3>
            <Row>
                {cart.map(p => <Container className='mb-4'><CheckItem key={p.id} {...p} /></Container>)}
            </Row>
            <Link to='/'>
                <Button onClick={clearCart} className='mt-4' variant="danger"> Cancelar Compra</Button>
            </Link>
        </Container >
    )
}

export default Checkout;