import React, { Component } from 'react';

class SortPanel extends Component {
    sortOptions = [
        {label: 'Price - Low to High', path: 'price', order: 'asc'},
        {label: 'Price - High to Low', path: 'price', order: 'desc'},
        {label: 'Alphabetical', path: 'name', order: 'asc'}
    ]

    render() {
        const { onSort, sortColumn } = this.props;
        return (
            <div className="panel panel-info">
                <div className="panel-heading">Search & Sort</div>
                    <div className="panel-body">
                        <div className="dropdown">
                            <button className="btn btn-default dropdown-toggle" type="button" id="sortMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                {!sortColumn ? "Sort" : sortColumn.label}
                                <span className="caret"></span>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="sortMenu">
                                {this.sortOptions.map((opt) => <li key={opt.label}><i style={{ cursor: "pointer" }} onClick={() => onSort(opt)}>{opt.label}</i></li>)}
                            </ul>
                        </div>
                    </div>
            </div>
         );
    }
}

export default SortPanel;
