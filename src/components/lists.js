import React from 'react';
import {
    Route
}
from 'react-router-dom';

import Home from '../pages/home';
import Playground from '../pages/playground';
import ManageLists from '../pages/manage_lists';
import FarPage from '../pages/far_page';
import DropPage from '../pages/drop_page';

export default class Lists extends React.Component {

    constructor(props) {
        super(props);
        

    }

    render() {
        return (
            <div>
                
                <Route path="/home" component={() => <Home lists={this.state.lists}/>} />  
                <Route path="/playground" component={Playground}/>
                <Route path="/manage_lists" component={() => <ManageLists lists={this.state.lists} />}/>
                <Route path="/drop_page" component={DropPage}/>
            </div>
        );
    }
}
