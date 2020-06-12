import React, { Component } from 'react'
import Items from './items';
import { getMotherboards, getType } from './services/itemService';

class Motherboards extends Items {
    async componentDidMount() {
        const { data: items} = await getMotherboards();
        const {data: type} = await getType('Motherboards');
        this.setState({items, type});
    }
}

export default Motherboards;
