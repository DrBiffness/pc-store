import _ from 'lodash';
// const _ = require('lodash');

export function getFilters(items) {
    const reducedObject = _.omit(items[0], ['id', 'name', 'category', 'type', 'description', 'image_url', 'price', 'stock']);
    const keys = _.keys(reducedObject);

    const filters =
        {
            price: [
                [0, 50],
                [50, 100],
                [100, 500],
                [500, 1000],
                [1000, 2000],
                [2000, 5000],
                5000
            ],
            stock: [
                'In Stock',
                'Out of Stock'
            ]
        }
    ;

    keys.forEach(key => {
        const allValues = items.map(item => item[key]);
        const values = _.uniq(allValues);
        if (values.length > 1) {
            // filters.push({ [key]: values});
            filters[key] = values;
        }
    });

    return filters;

}

export function filter(items, filters) {
    if (filters.price) {
        const [start, end] = filters.price;
        items = items.filter(item => +item.price > start && +item.price <= end);
        delete filters.price;
    }

    if (filters.stock) {
        if (filters.stock === 'In Stock') {
            items = items.filter(item => item.stock > 0);
        } else {
            items = items.filter(item => item.stock === 0);
        }
        delete filters.stock;
    }


    for (const [key, value] of Object.entries(filters)) {
        items = items.filter(item => item[key] === value);
    }

    return items;
}


// const items =
//     [
//       {
//         "id": 1,
//         "name": "Ryzen 7 2700x",
//         "manufacturer": "AMD",
//         "category": 1,
//         "type": 1,
//         "price": "289.99",
//         "description": "Experience elite performance in games, content creation, and intense multi-tasking. A beautifully balanced design for serious PC enthusiasts.",
//         "stock": 5,
//         "image_url": "img/ryzen.jpg",
//         "chip_maker": "AMD",
//         "socket": "AM4",
//         "cores": 8,
//         "threads": 16
//       },
//       {
//         "id": 1,
//         "name": "Ryzen 7 2700x",
//         "manufacturer": "AMD",
//         "category": 1,
//         "type": 1,
//         "price": "289.99",
//         "description": "Experience elite performance in games, content creation, and intense multi-tasking. A beautifully balanced design for serious PC enthusiasts.",
//         "stock": 5,
//         "image_url": "img/ryzen.jpg",
//         "chip_maker": "AMD",
//         "socket": "AM5",
//         "cores": 10,
//         "threads": 16
//       },
//       {
//         "id": 1,
//         "name": "Ryzen 7 2700x",
//         "manufacturer": "INTEL",
//         "category": 1,
//         "type": 1,
//         "price": "45.99",
//         "description": "Experience elite performance in games, content creation, and intense multi-tasking. A beautifully balanced design for serious PC enthusiasts.",
//         "stock": 0,
//         "image_url": "img/ryzen.jpg",
//         "chip_maker": "INTEL",
//         "socket": "AM5",
//         "cores": 12,
//         "threads": 16
//       }
//     ];

// console.log(Object.entries(getFilters(items)));
// filter(items, { stock: 'In Stock', socket: 'AM5'});
