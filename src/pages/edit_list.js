import React from 'react';
import {FormGroup, FormControl, ControlLabel, Button, ListGroup, ListGroupItem, Checkbox, Glyphicon} from 'react-bootstrap';
import ListsStore from '../stores/lists_store';
import * as ListActions from '../stores/list_actions';

export default class EditList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listItems: ListsStore.getList(this.props.match.params.list),
            item: "",
            bold: false
        };
        this.handleBlur = this.handleBlur.bind(this);
        this.addItem = this.addItem.bind(this);
        this.getListItems = this.getListItems.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleBold = this.handleBold.bind(this);
    }
    
    componentWillMount() {
        ListsStore.on("change", this.getListItems);
    }
    
    componentWillUnmount() {
        ListsStore.removeListener("change", this.getListItems);
    }
    
    getListItems() {
        this.setState( {
            listItems: ListsStore.getList(this.props.match.params.list)
        });
    }
    
    handleBlur(event) {
        this.setState({
            item: event.target.value 
        })
    }
    
    handleBold() {
        this.setState({
            bold: !this.state.bold
        });
    }
    
    handleRemove(event) {
        var list = decodeURIComponent(this.props.match.params.list);
        ListActions.removeItem(list, event.currentTarget.dataset.index);
    }
    
    addItem() {
        ListActions.addItem(this.props.match.params.list, this.state.item, this.state.bold);
        this.setState({
            item: "",
            bold: false
        });
    }
    
    cssGen(bold) {
        var cssClass = {};
        if(bold)
            cssClass.fontWeight = "bold";
        return cssClass;
    }
    
    render() {
        return (
            <div>
                <h1>Edit: {this.props.match.params.list}</h1>
                <FormGroup controlId="formInlineName">
                  <ControlLabel>Item Name:</ControlLabel>
                  <FormControl type="text" placeholder="" value={this.state.item} onChange={this.handleBlur} />
                </FormGroup>
                
                <ControlLabel htmlFor="boldBox">Bold:</ControlLabel>
                <Checkbox id="boldBox" checked={this.state.bold} onChange={this.handleBold} inline></Checkbox>
                
                <Button bsSize="large" bsStyle="success" onClick={this.addItem}>Add Item</Button>
                <h2>List Items</h2>
                <ListGroup>
                    {this.state.listItems.map( (item, index) => (
                        <ListGroupItem style={this.cssGen(item.bold)} key={index} >
                            <Button bsStyle="danger" className="pull-right" onClick={this.handleRemove} data-index={index}><span><Glyphicon glyph="remove" /></span></Button>
                            {item.name}
                        </ListGroupItem>
                    ) )}
                </ListGroup>
            </div>
        );
    }
}