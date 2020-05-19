import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
    render() {
        const { id, name, manufacturer, price, image_url } = this.props.data;
        const { type } = this.props;
    return (
        <div className="card align-items-center">
            <img className="card-img-top img-fluid" style={{ 'max-width': '200px', width: '100%'}} src={image_url} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-subtitle">{manufacturer}</h5>
                <h5 className="card-title">{name}</h5>
                <p className="card-text" style={{ fontSize: '25px'}}>${price}</p>
            </div>
            <div className="card-footer">
            <Link to={`/${type.name.toLowerCase()}/${id}`} className="btn btn-primary">View item</Link>
            </div>
        </div>
     );
    }
}

export default ProductCard;


// <ProductCard data={data} type={type} /> style={{width: '18rem'}}
