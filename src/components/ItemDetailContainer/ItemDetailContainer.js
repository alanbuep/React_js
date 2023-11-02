import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from '../ItemDetail/ItemDetail';
import { Container } from "react-bootstrap";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

export const ItemDetailContainer = () => {

    const [product,setProducts] = useState(null);
    const [loading,setLoading] = useState(true);

    const {itemId} = useParams();
    // const itemIdAsNumber = parseInt(itemId, 10);
    
    useEffect(()=>{

        setLoading(true);

        const docRef = doc(db,'listaProductos',itemId);

        getDoc(docRef)
        .then(response =>{
            const data = response.data();
            const productAdapted = {id:response.id, ...data};
            console.log("Producto cargado:", productAdapted);
            setProducts(productAdapted)
        })
        .catch(error=>{
            console.error(error);
        })
        .finally(()=>{
            setLoading(false)
        })
    },[itemId])

    return (
        <Container>
            <ItemDetail {...product}/>
        </Container>
    )
}

export default ItemDetailContainer;