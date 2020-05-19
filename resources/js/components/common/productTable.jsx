import React, { Component } from 'react';
import ProductCard from './productCard';
import _ from 'lodash';

class ProductTable extends Component {

    render() {
        const { data, type } = this.props;

    return (

            <div className="row">
                {data.map((item) => {
                        return (
                            <div key={item.id} className="col-sm-4">
                                <ProductCard data={item} type={type} />
                            </div>
                        )
                    }
                )}
            </div>
     );
    }
}

export default ProductTable;

// <div className="container">
//     <div className="row row-cols-3">
//         <div className="col-sm-4">
//             <div className="card w-auto">
//                 <img className="card-img-top rounded mx-auto d-block" src={image_url} style={{ width: '200px', height: '200px'}} alt="Card image cap" />
//                 <div className="card-body">
//                     <h5 className="card-subtitle">{manufacturer}</h5>
//                     <h5 className="card-title">{name}</h5>
//                     <p className="card-text" style={{ fontSize: '25px'}}>${price}</p>
//                 </div>
//                 <div className="card-footer">
//                 <Link to={`/${type.name.toLowerCase()}/${id}`} className="btn btn-primary">View item</Link>
//                 </div>
//             </div>
//         </div>
//         <div className="col-sm-4">
//             <div className="card w-auto">
//                 <img className="card-img-top rounded mx-auto d-block" src={image_url} style={{ width: '200px', height: '200px'}} alt="Card image cap" />
//                 <div className="card-body">
//                     <h5 className="card-subtitle">{manufacturer}</h5>
//                     <h5 className="card-title">{name}</h5>
//                     <p className="card-text" style={{ fontSize: '25px'}}>${price}</p>
//                 </div>
//                 <div className="card-footer">
//                 <Link to={`/${type.name.toLowerCase()}/${id}`} className="btn btn-primary">View item</Link>
//                 </div>
//             </div>
//         </div>
//         <div className="col-sm-4">
//             <div className="card w-auto">
//                 <img className="card-img-top rounded mx-auto d-block" src={image_url} style={{ width: '200px', height: '200px'}} alt="Card image cap" />
//                 <div className="card-body">
//                     <h5 className="card-subtitle">{manufacturer}</h5>
//                     <h5 className="card-title">{name}</h5>
//                     <p className="card-text" style={{ fontSize: '25px'}}>${price}</p>
//                 </div>
//                 <div className="card-footer">
//                 <Link to={`/${type.name.toLowerCase()}/${id}`} className="btn btn-primary">View item</Link>
//                 </div>
//             </div>
//         </div>
//         <div className="col-sm-4">
//             <div className="card w-auto">
//                 <img className="card-img-top rounded mx-auto d-block" src={image_url} style={{ width: '200px', height: '200px'}} alt="Card image cap" />
//                 <div className="card-body">
//                     <h5 className="card-subtitle">{manufacturer}</h5>
//                     <h5 className="card-title">{name}</h5>
//                     <p className="card-text" style={{ fontSize: '25px'}}>${price}</p>
//                 </div>
//                 <div className="card-footer">
//                 <Link to={`/${type.name.toLowerCase()}/${id}`} className="btn btn-primary">View item</Link>
//                 </div>
//             </div>
//         </div>
//         <div className="col-sm-4">
//             <div className="card w-auto">
//                 <img className="card-img-top rounded mx-auto d-block" src={image_url} style={{ width: '200px', height: '200px'}} alt="Card image cap" />
//                 <div className="card-body">
//                     <h5 className="card-subtitle">{manufacturer}</h5>
//                     <h5 className="card-title">{name}</h5>
//                     <p className="card-text" style={{ fontSize: '25px'}}>${price}</p>
//                 </div>
//                 <div className="card-footer">
//                 <Link to={`/${type.name.toLowerCase()}/${id}`} className="btn btn-primary">View item</Link>
//                 </div>
//             </div>
//         </div>
//         <div className="col-sm-4">
//             <div className="card w-auto">
//                 <img className="card-img-top rounded mx-auto d-block" src={image_url} style={{ width: '200px', height: '200px'}} alt="Card image cap" />
//                 <div className="card-body">
//                     <h5 className="card-subtitle">{manufacturer}</h5>
//                     <h5 className="card-title">{name}</h5>
//                     <p className="card-text" style={{ fontSize: '25px'}}>${price}</p>
//                 </div>
//                 <div className="card-footer">
//                 <Link to={`/${type.name.toLowerCase()}/${id}`} className="btn btn-primary">View item</Link>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>


