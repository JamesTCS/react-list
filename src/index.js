var React = require('react');
var ReactDOM = require('react-dom');
import {Button, ButtonToolbar, Navbar, Nav, NavItem, NavDropdown, MenuItem, Grid, Row, Col, Alert, Glyphicon, FormControl, ProgressBar} from 'react-bootstrap';
//var Button = require('react-bootstrap/lib/Button');
//var Navbar = require('react-bootstrap/lib/Navbar');


class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            alertVisible: true,
            status: "danger",
            systemMessage: "This one looks serious! ",
            systemShow: true,
            total: 50,
            amount: 1
        };
        
        this.handleAlertDismiss = this.handleAlertDismiss.bind(this);
        this.handleError = this.handleError.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleSubtract = this.handleSubtract.bind(this);
        this.handleNumberChange = this.handleNumberChange.bind(this);
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        if(this.state.amount == nextState.amount) {
            console.log("State changed and need to render");
            return true;
        }
            
        else {
            console.log("State changed but no need to render");
            return false;
        }
    }
    
    handleAlertDismiss() {
        this.setState({alertVisible: false});
    }
    
    handleError() {
        this.setState({
            status: "success",
            systemMessage: "Everything is fine now",
            systemShow: false
        });
    }
    
    handleNumberChange(e) {
        this.setState({
            amount: parseInt(e.target.value)
        });
    }
    
    handleAdd() {
        var newAmount = this.state.total + this.state.amount;
        this.setState({
            total: newAmount
        });
    }
    
    handleSubtract() { 
        var newAmount = this.state.total - this.state.amount;
        this.setState({
            total: newAmount
        });
    }
    
    render() {
        return (
            <div id="examples" className="container">
            
                <Navbar inverse fluid collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>React Bootstrap Examples</Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="#">Link</NavItem>
                            <NavItem eventKey={2} href="#">Link</NavItem>
                            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                              <MenuItem eventKey={3.1}>Action</MenuItem>
                              <MenuItem eventKey={3.2}>Another action</MenuItem>
                              <MenuItem eventKey={3.3}>Something else here</MenuItem>
                              <MenuItem divider />
                              <MenuItem eventKey={3.3}>Separated link</MenuItem>
                            </NavDropdown>
                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#">Link Right</NavItem>
                            <NavItem eventKey={2} href="#">Link Right</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <h1>React Bootstrap Examples</h1>
                <Grid>
                    <Row>
                        <Col md={4}>
                            <Button bsStyle="danger"><Glyphicon glyph="exclamation-sign" /> Test Button 1</Button>
                        </Col>
                        <Col md={4}>
                            <Button bsStyle="default" bsSize="small">Test Button 2</Button>
                        </Col>
                        <Col md={4}>
                            <Button bsStyle="primary" bsSize="large">Test Button 3</Button>
                        </Col>
                    </Row>
                
                    <Row>
                        <Col md={12}>
                            <ButtonToolbar>
                                {/* Standard button */}
                                <Button>Default</Button>
                            
                                {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
                                <Button bsStyle="primary">Primary</Button>
                            
                                {/* Indicates a successful or positive action */}
                                <Button bsStyle="success">Success</Button>
                            
                                {/* Contextual button for informational alert messages */}
                                <Button bsStyle="info">Info</Button>
                            
                                {/* Indicates caution should be taken with this action */}
                                <Button bsStyle="warning">Warning</Button>
                            
                                {/* Indicates a dangerous or potentially negative action */}
                                <Button bsStyle="danger">Danger</Button>
                            
                                {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
                                <Button bsStyle="link">Link</Button>
                            </ButtonToolbar>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col md={6}>
                            <Alert bsStyle="success">This is a success alert box</Alert>
                        </Col>
                        <Col md={6}>
                            <Alert bsStyle="info"><Glyphicon glyph="info-sign" />Got some useful information here, and a glyphicon!</Alert>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            {this.state.alertVisible && 
                                <Alert bsStyle="warning" onDismiss={this.handleAlertDismiss}>Warning alert box! you can just hide this....</Alert>
                            }
                        </Col>
                        <Col md={6}>
                            <Alert bsStyle={this.state.status}>{this.state.systemMessage} {this.state.systemShow && <Button onClick={this.handleError}>Fix it!</Button>}</Alert>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <ProgressBar striped bsStyle="info" now={this.state.total} />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <h2>Total: {this.state.total}</h2>
                        </Col>
                        <Col md={4}>
                            <form>
                                <FormControl
                                  id="amount"
                                  type="number"
                                  label="Amount"
                                  defaultValue="1"
                                  onChange={this.handleNumberChange}
                                />
                            </form>
                        </Col>
                        <Col md={2}>
                            <Button bsStyle="success" onClick={this.handleAdd}>Add</Button>
                        </Col>
                        <Col md={2}>
                            <Button bsStyle="danger" onClick={this.handleSubtract}>Subtract</Button>
                        </Col>
                    </Row>
                            
                            
                </Grid>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));