import React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import ListStore from '../stores/lists_store';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.lists = ListStore.lists;
        
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(event) {
        this.props.history.push("view_list/"+event.target.innerHTML);
    } 
    
    render() {
        return (
            <div>
                <h1>Lists</h1>
                <ListGroup>
                    {Object.keys(this.lists).map( (item, index) => (<ListGroupItem key={item} onClick={this.handleClick}>{item}</ListGroupItem>) )}
                </ListGroup>
            </div>
        );
    }
}