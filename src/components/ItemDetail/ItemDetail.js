import ItemCount from '../ItemCount/ItemCount';

export const ItemDetail = ({ id, name, img, price, stock, description }) => {
    return (
        <div className='box'>
            <div className='columns media is-mobile'>
                <div className='column media-left'>
                    <figure className='image'>
                        <img src={img} className="image card-img-top" alt={name} />
                    </figure>
                </div>
                <div className='column'>
                    <h3 className="card-text">${name}</h3>
                    <p>{description}</p>
                    <p className="text-primary">Precio efectivo o transferencia:</p>
                    <p className="text-primary">${price}</p>
                    <p className="text-primary">Cantidad Disponible: {stock}</p>
                    <ItemCount initial={1} stock={stock} onAdd={(quantity) => { console.log("Cantidad agregada: ", quantity) }} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;