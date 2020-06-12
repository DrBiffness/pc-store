import React, { Component } from 'react'
import Items from './items';
import { getProcessors, getType } from './services/itemService';

class Processors extends Items {
    async componentDidMount() {
        const { data: items} = await getProcessors();
        const {data: type} = await getType('Processors');
        this.setState({items, type});
    }
}

export default Processors;
