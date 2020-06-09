import React, { Component } from 'react';
import { paginate } from './utils/paginate';
import Pagination from './common/pagination';
import ProductTable from './common/productTable';
import { getProcessors, getType } from './services/itemService';
import FilterBox from './common/filterContainer';
import { filter } from './utils/filter';
import SortPanel from './common/sortPanel';

class Processors extends Component {
    state = {
        items: [],
        pageSize: 3,
        currentPage: 1,
        type: {},
        filters: {},
        sortColumn: { label: "Best Match" },
        searchFilter: ""
    }

    async componentDidMount() {
        const { data: items} = await getProcessors();
        const {data: type} = await getType('Processors');
        this.setState({items, type});
        // const { type } = this.props;
        // const functionName = `get${type.charAt(0).toUpperCase()}${type.slice(1)}`;
        // this.setState({ items: await this[functionName](), type });
    }

    handlePageChange = (page) => {
        this.setState({ currentPage: page});
    }

    handleFilterChange = (filter) => {
        // console.log(filter);
        this.setState({ filters: {
            ...this.state.filters,
            ...filter
        }, currentPage: 1 });
    }

    handleFilterDelete = (filter) => {
        const {filters} = this.state;

        if (!filter) {
            this.setState({ filters: {}});
        } else {
            delete filters[filter];
            this.setState({ filters });
        }
    }

    handleSort = (opt) => {
        this.setState({sortColumn: opt});
    }

    handleSearch = (query) => {
        this.setState({
            searchFilter: query.toLowerCase(),
            filters: {},
            currentPage: 1
        })
    }

    getPagedData = () => {
        const {pageSize, currentPage, filters, searchFilter, sortColumn} = this.state;

        let { items: allItems } = this.state;

        if (filters) {
            allItems = filter(allItems, filters);
        }

        if (searchFilter) {
            allItems = allItems.filter(item => item.name.toLowerCase().startsWith(searchFilter));
        }

        const totalCount = allItems.length;

        if (sortColumn.path) {
            allItems = _.orderBy(allItems, [sortColumn.path], [sortColumn.order]);
        }

        const items = paginate(allItems, currentPage, pageSize);

        return { totalCount, items };
    }

    render() {
        const { pageSize, currentPage, type, filters, sortColumn } = this.state;
        const { totalCount, items } = this.getPagedData();

        return (
                <div className="row">
                    <div className="col">
                        <FilterBox
                        data={this.state.items}
                        currentFilters={filters}
                        onFilterChange={this.handleFilterChange}
                        onFilterDelete={this.handleFilterDelete}
                        />
                    </div>
                    <div className="col-8">
                        <SortPanel onSort={this.handleSort} onSearch={this.handleSearch} sortColumn={sortColumn} />
                        <ProductTable data={items} type={type} />
                        <Pagination
                            itemsCount={totalCount}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={this.handlePageChange}
                        />
                    </div>
                    <div className="col">

                    </div>
                </div>

         );
    }
}

export default Processors;
