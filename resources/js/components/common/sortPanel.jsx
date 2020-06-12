import React, { Component } from 'react';
import Sort from './sort';
import Search from './search';

class SortPanel extends Component {
    sortOptions = [
        {label: 'Price - Low to High', path: 'price', order: 'asc'},
        {label: 'Price - High to Low', path: 'price', order: 'desc'},
        {label: 'Alphabetical', path: 'name', order: 'asc'}
    ]

    render() {
        const { onSort, onSearch, sortColumn, searchFilter, type } = this.props;
        const { sortOptions } = this;
        return (
            <div className="panel panel-info">
                <div className="panel-heading">Search By Product Name</div>
                    <div className="panel-body">
                        <Search type={type} onSearch={onSearch} searchFilter={searchFilter} />
                        <Sort onSort={onSort} sortColumn={sortColumn} sortOptions={sortOptions} />
                    </div>
            </div>
         );
    }
}

export default SortPanel;
