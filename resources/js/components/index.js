import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Processors from './processors';
import Motherboards from './motherboards';

class Index extends Component {
    render() {
        return (
            <div className="content">
                <Switch>
                    <Route path="/processors" component={Processors} />
                    <Route path="/motherboards" component={Motherboards} />
                </Switch>
            </div>
        )
    }
}

export default Index;

if (document.getElementById('placeholder')) {
    ReactDOM.render(<BrowserRouter><Index /></BrowserRouter>, document.getElementById('placeholder'));
}
