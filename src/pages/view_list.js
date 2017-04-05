import React from 'react';
import {Button, ListGroup, ListGroupItem} from 'react-bootstrap';
import ListsStore from '../models/lists.js';

export default class ViewList extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            listItems: ListsStore.getListItems(this.props.match.params.list)
        }
        
        this.handleBack = this.handleBack.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }
    
    componentWillMount() {
        ListsStore.on("change", () => {
            this.setState( {
                listItems: ListsStore.getListItems(this.props.match.params.list)
            });
        })
    }
    
    handleBack() {
        this.props.history.push("/home");
    }
    
    handleToggle(event) {
        ListsStore.toggleListItem(this.props.match.params.list, event.target.dataset.key);
        //this.forceUpdate();
    }
    
    cssGen(bold, strike) {
        var cssClass = {};
        if(bold)
            cssClass.fontWeight = "bold";
        if(strike)
            cssClass.textDecoration = "line-through";
        return cssClass;
    }
    
    render() {
        return (
            <div>
                <Button onClick={this.handleBack}>Back</Button>
                <h1>{this.props.match.params.list}</h1>
                <ListGroup>
                    {this.state.listItems.map( (item, index) => (<ListGroupItem style={this.cssGen(item.bold, item.strike)} key={index} data-key={index} onClick={this.handleToggle}>{item.name}</ListGroupItem>) )}
                </ListGroup>
            </div>
        );
    }
}