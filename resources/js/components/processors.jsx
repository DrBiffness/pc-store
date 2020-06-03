import React, { Component } from 'react';
import { paginate } from './utils/paginate';
import Pagination from './common/pagination';
import ProductTable from './common/productTable';
import { getProcessors, getType } from './services/itemService';
import FilterBox from './common/filterContainer';
import { filter } from './utils/filter';

class Processors extends Component {
    state = {
        items: [],
        pageSize: 3,
        currentPage: 1,
        type: {},
        filters: {}
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

    getPagedData = () => {
        const {pageSize, currentPage, filters} = this.state;

        let { items: allItems } = this.state;

        if (filters) {
            allItems = filter(allItems, filters);
        }

        const totalCount = allItems.length;

        const items = paginate(allItems, currentPage, pageSize);

        return { totalCount, items };
    }

    render() {
        const { pageSize, currentPage, type, filters } = this.state;
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
