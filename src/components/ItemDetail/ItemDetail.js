import { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';

function ItemDetail({ id, name, img, price, stock, description }) {

    const [quantityAdded, setQuantityAdded] = useState(0);

    const { addItem } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);

        const item = { id, name, price };

        addItem(item, quantity);
    }

    return (
        <div className='box'>
            <div className='columns media is-mobile'>
                <div className='column media-left'>
                    <figure className='image'>
                        <img src={img} className="image card-img-top" alt={name} />
                    </figure>
                </div>
                <div className='column'>
                    <h3 className="card-text">{name}</h3>
                    <p>{description}</p>
                    <p className="text-primary">Precio efectivo o transferencia:</p>
                    <p className="text-primary">${price}</p>
                    <p className="text-primary">Cantidad Disponible: {stock}</p>
                </div>
                <div>
                    {
                        quantityAdded > 0 ? (
                            <Link to='/cart' className='Option'> Terminar compra</Link>
                        ) : (
                            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;