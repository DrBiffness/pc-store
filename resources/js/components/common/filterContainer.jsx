import React from 'react';
import _ from 'lodash';
import { getFilters } from '../utils/filter';

const FilterBox = ({data}) => {
    const filters = Object.entries(getFilters(data));

    return (
        <div>
            <h5>Filters</h5>
            {filters.map(f => (
                <div key={f[0]}>
                    <h5>{f[0]}</h5>
                    <ul className="list-group">
                        {f[1].map(val => (<li className="list-group-item d-flex justify-content-between align-items-center">
                                {_.isArray(val) ? `$${val[0]}-${val[1]}` : val}
                                <span className="badge badge-primary badge-pill">10</span>
                            </li>)
                        )}
                    </ul>
                </div>
            ))}
            {/* <div>
                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Example

                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Another Example
                        <span className="badge badge-primary badge-pill">5</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Meh
                        <span className="badge badge-primary badge-pill">2</span>
                    </li>
                </ul>
            </div> */}
        </div>
     );
}

export default FilterBox;
