import { useState, useEffect } from "react";
import { getProductsById } from "../../asyncMock";
import { useParams } from "react-router-dom";
import ItemDetail from '../ItemDetail/ItemDetail'

export const ItemDetailContainer = () => {

    const [product,setProducts] = useState(null);

    const {itemId} = useParams();
    const itemIdAsNumber = parseInt(itemId, 10);
    
    useEffect(()=>{
        getProductsById(itemIdAsNumber)
        .then(response =>{
            setProducts(response);
        })
        .catch(error=>{
            console.error(error);
        })
    },[itemIdAsNumber])

    return (
        <div>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer;