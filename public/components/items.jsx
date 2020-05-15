import React, { Component } from 'react';
import { paginate } from './utils/paginate';
import Pagination from './common/pagination';
import ProductTable from './common/productTable';
import { getProcessors, getType } from './services/itemService';

class Items extends Component {
    state = {
        items: [],
        pageSize: 9,
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

        return { totalCount, items };
    }

    render() {
        const { pageSize, currentPage, items, type } = this.state;
        // const { totalCount, items } = this.getPagedData();

        return (
            <div className="row">
                <div className="col-2">

                </div>
                <div className="col">
                    <ProductTable data={items} type={type} />
                    {/* <Pagination
                        itemsCount={totalCount}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange}
                    /> */}
                </div>
            </div>
         );
        // return 'Processors, yo';
    }
}

export default Items;
