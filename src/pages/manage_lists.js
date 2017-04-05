import React from 'react';
import {FormGroup, FormControl, ControlLabel, Button, ButtonToolbar, ListGroup, ListGroupItem, Glyphicon} from 'react-bootstrap';
import ListStore from '../models/lists';

export default class ManageLists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newList: ""
        }
        
        this.lists = ListStore.lists;
        
        this.handleRemove = this.handleRemove.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleRemove(event) {
        //debugger;
        ListStore.removeList( event.currentTarget.getAttribute("data-listItem") );
        this.forceUpdate();
    }
    
    handleAdd(event) {
       ListStore.addList(this.state.newList);
       this.forceUpdate();
    }
    
    handleChange(event) {
        this.setState({
            newList: event.target.value
        });
    }
    
    
    
    render() {
        return (
            <div>
                <h1>Create a new List</h1>
                <FormGroup controlId="formInlineName">
                  <ControlLabel>List Name:</ControlLabel>
                  <FormControl type="text" placeholder="" onChange={this.handleChange} />
                </FormGroup>
                <Button bsSize="large" bsStyle="success" onClick={this.handleAdd}>Create List</Button>
                <h1>My Lists</h1>
                <ListGroup>
                    {Object.keys(this.lists).map( (item, index) => (
                        <ListGroupItem key={item} onClick={this.handleClick}>
                            <ButtonToolbar className="pull-right">
                                <Button bsStyle="info"><span><Glyphicon glyph="list" /></span></Button>
                                <Button bsStyle="danger" onClick={this.handleRemove} data-listItem={item}><span><Glyphicon glyph="remove" /></span></Button>
                            </ButtonToolbar>
                            <h4>{item}</h4>
                        </ListGroupItem>
                    ) )}
                </ListGroup>
            </div>
        );
    }
}