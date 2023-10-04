import { Link } from "react-router-dom";

export const Item = ({ id, name, img, price, stock }) => {
    return (
        <div>
            <div class="container is-child notification is-primary m-6">
                <div class="card-image container">
                    <figure class="">
                        <img src={img} alt={name} />
                    </figure>
                </div>
                <div className="card-content">
                    <h3 className="card-text">${name}</h3>
                    <p className="text-primary">Precio efectivo o transferencia</p>
                    <p className="text-primary">${price}</p>
                    <p className="text-primary">Cantidad Disponible: {stock}</p>
                    <Link to={`/item/${id}`} className="button is-info">Ver Detalles</Link>
                </div>
            </div>
        </div>
    )
}

export default Item;