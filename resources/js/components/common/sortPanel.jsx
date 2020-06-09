import React, { Component } from 'react';
import Sort from './sort';

class SortPanel extends Component {
    sortOptions = [
        {label: 'Price - Low to High', path: 'price', order: 'asc'},
        {label: 'Price - High to Low', path: 'price', order: 'desc'},
        {label: 'Alphabetical', path: 'name', order: 'asc'}
    ]

    render() {
        const { onSort, sortColumn } = this.props;
        const { sortOptions } = this;
        return (
            <div className="panel panel-info">
                <div className="panel-heading">Search & Sort</div>
                    <div className="panel-body">
                        <Sort onSort={onSort} sortColumn={sortColumn} sortOptions={sortOptions} />
                    </div>
            </div>
         );
    }
}

export default SortPanel;
