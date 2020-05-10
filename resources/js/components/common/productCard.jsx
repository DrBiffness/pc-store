import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
    const { name, price, image_url } = props;
    return (
        <div className="card" style="width: 18rem;">
            <img className="card-img-top" src={image_url} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{price}</p>
                <Link to="#" className="btn btn-primary">View item</Link>
            </div>
        </div>
     );
}

export default ProductCard;
