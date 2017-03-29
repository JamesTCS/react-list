var React = require('react');
var ReactDOM = require('react-dom');
import {BrowserHistory} from 'react-router-dom';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';

import Header from './pages/header';



    
class App extends React.Component {
    
    render() {
        return (
            
            <Router basename="nemesis/react/list/build/">
                <Route path="/" component={Header}/>
            </Router>    

        );
    }
}



ReactDOM.render(<App/>, document.getElementById('app'));