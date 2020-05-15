import React, { Component } from 'react';
import ProductCard from './productCard';
import _ from 'lodash';

class ProductTable extends Component {

    render() {
        const { data, type } = this.props;

    return (
        <div className="row">
            {data.map((item, index) => {
                <div key={item.id} className="col">
                    <ProductCard data={item} type={type} />
                </div>
                // if (_.isInteger(index++ / 3) ) <div className="w-100"></div>
            })}
        </div>
     );
    }
}

export default ProductTable;

