import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
    render() {
        const { id, name, price, image_url } = this.props.data;
    const { type } = this.props;
    return (
        <div className="card" style={{width: '18rem'}} >
            <img className="card-img-top" src={image_url} style={{ width: '200px', height: '200px'}} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text" style={{ fontSize: '25px'}}>${price}</p>
            </div>
            <div className="card-footer">
            <Link to={`/${type.name}/${id}`} className="btn btn-primary">View item</Link>
            </div>
        </div>
     );
    }
}

export default ProductCard;


// <ProductCard data={data} type={type} />
