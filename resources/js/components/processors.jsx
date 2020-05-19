import React, { Component } from 'react';
import { paginate } from './utils/paginate';
import Pagination from './common/pagination';
import ProductTable from './common/productTable';
import { getProcessors, getType } from './services/itemService';

class Processors extends Component {
    state = {
        items: [],
        pageSize: 4,
        currentPage: 1,
        type: {}
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

    getPagedData = () => {
        const {pageSize, currentPage} = this.state;

        let { items: allItems } = this.state;

        const totalCount = allItems.length;

        const items = paginate(allItems, currentPage, pageSize);
        console.log('Paginate', items);

        return { totalCount, items };
    }

    render() {
        const { pageSize, currentPage, type } = this.state;
        const { totalCount, items } = this.getPagedData();

        return (
                <div className="row">
                    <div className="col">

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
