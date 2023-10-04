import React, { useState, useEffect } from 'react';
import { getProducts } from '../../asyncMock';
import { getProductsByCategory } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    const {categoryId} = useParams();

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts
        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    },[categoryId])

    return (
        <div>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer;