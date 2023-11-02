import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();

    useEffect(() => {

        setLoading(true);

        const collectionRef = categoryId
            ? query(collection(db, 'listaProductos'), where('category', '==', categoryId))
            : collection(db, 'listaProductos');
        
        getDocs(collectionRef)
        .then(response=>{
            const productsAdapted = response.docs.map(doc=>{
                const data = doc.data();
                return {id: doc.id, ...data}
            })
            setProducts(productsAdapted)
        })
        .catch(error =>{
            console.log(error)
        })
        .finally(()=>{
            setLoading(false)
        })

    }, [categoryId])

    return (
        <Container className="mt-4 container-cards">
            <ItemList products={products} />
        </Container>
    )
}

export default ItemListContainer;