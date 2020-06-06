import React from 'react';
import _ from 'lodash';
import { getFilters } from '../utils/filter';

const FilterBox = ({ data, currentFilters, onFilterChange, onFilterDelete }) => {
    const filters = Object.entries(getFilters(data));

    return (
        <div>
            <h5>Filters</h5>
            <button
            className='btn btn-secondary btn-lg'
            onClick={() => onFilterDelete()}
            disabled={currentFilters ? false : true}
            >
                Clear All Filters
            </button>
            {filters.map(f => (
                <div key={f[0]} style={{ marginBottom: '10px'}}>
                    <h5>{f[0].toLocaleUpperCase()}</h5>
                    <ul className="list-group">
                        <button
                        className={!currentFilters.hasOwnProperty(f[0]) ?
                            "list-group-item d-flex justify-content-between align-items-center active"
                            : "list-group-item d-flex justify-content-between align-items-center"}
                        key="All"
                        onClick={() => onFilterDelete(f[0])}
                        >
                            All
                        </button>
                        {f[1].map(val => (
                        <button
                        // className="list-group-item d-flex justify-content-between align-items-center"
                        className={JSON.stringify(currentFilters[f[0]]) === JSON.stringify(val) ?
                            "list-group-item d-flex justify-content-between align-items-center active"
                            : "list-group-item d-flex justify-content-between align-items-center"}
                        key={val}
                        onClick={() => onFilterChange({[f[0]]: val})}
                        >
                                {_.isArray(val) ? `$${val[0]}-${val[1]}` : val}
                                <span className="badge badge-primary badge-pill">10</span>
                            </button>)
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
