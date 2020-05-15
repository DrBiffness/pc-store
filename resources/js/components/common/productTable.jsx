import React, { Component } from 'react';
import ProductCard from './productCard';
import _ from 'lodash';

class ProductTable extends Component {

    render() {
        const { data, type } = this.props;

    return (
        <div className="row">
            {data.map((item, index) => {
                if (_.isInteger(index++ / 3)) {
                    return (
                        <div key={item.id} className="col-sm-4">
                            <div className="w-100"></div>
                            <ProductCard data={item} type={type} />
                        </div>
                        )
                } else {
                    return (
                        <div key={item.id} className="col-sm-4">
                            <ProductCard data={item} type={type} />
                        </div>
                    )
                }
            })}
        </div>
     );
    }
}

export default ProductTable;

