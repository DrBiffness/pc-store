import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Processors from './processors';
import Motherboards from './motherboards';

// import { getTypes } from './services/itemService';

class Index extends Component {
    // state = {
    //     types: []
    // }

    // async componentDidMount() {
    //     const types = await getTypes();
    //     this.setState({ types });
    // }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/processors' component={Processors} />
                    <Route path='/motherboards' component={Motherboards} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Index;

if (document.getElementById('placeholder')) {
    ReactDOM.render(<Index />, document.getElementById('placeholder'));
}
