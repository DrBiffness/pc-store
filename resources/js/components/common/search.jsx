import React, { Component } from 'react'

class Search extends Component {

    render() {
        const { type, onSearch, searchFilter } = this.props;
        return (
            <input
                type="text"
                placeholder={`Search ${type.name}...`}
                className="form-control"
                onChange={(e) => onSearch(e.currentTarget.value)}
                value={searchFilter}
                name="Search"
                id="Search"
            />
         );
    }
}

export default Search;
