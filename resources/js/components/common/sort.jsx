import React, { Component } from 'react'

class Sort extends Component {
    render() {
        const { onSort, sortColumn, sortOptions} = this.props;
        return (
            <div className="dropdown">
                            <button className="btn btn-default dropdown-toggle" type="button" id="sortMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                {!sortColumn ? "Best Match" : sortColumn.label}
                                <span className="caret"></span>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="sortMenu">
                                <li key="Best Match"><i style={{ cursor: "pointer" }} onClick={() => onSort({label: "Best Match"})}>Best Match</i></li>
                                {sortOptions.map((opt) => <li key={opt.label}><i style={{ cursor: "pointer" }} onClick={() => onSort(opt)}>{opt.label}</i></li>)}
                            </ul>
                        </div>
         );
    }
}

export default Sort;
