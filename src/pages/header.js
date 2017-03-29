import React from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {Route, Link, NavLink} from 'react-router-dom';

import Home from './home';
import Playground from './playground';
import NewPage from './new_page';
import FarPage from './far_page';
import DropPage from './drop_page';


export default class Header extends React.Component {
    
     constructor(props) {
         super(props);
         props.history.push("/home");
         
         this.handleLogoPress = this.handleLogoPress.bind(this);
         this.handleLink = this.handleLink.bind(this);
        
     }
    
    handleLogoPress() {
        this.props.history.push("/home");
    }
    
    handleLink(path) {
        this.props.history.push(path);
    }
    
    render() {
        return(
            <div id="examples" className="container">
                <Navbar inverse fluid collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand onClick={this.handleLogoPress}>React Bootstrap Examples</Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={2} onClick={()=>this.handleLink("new_page")}>New Page</NavItem>
                            <NavItem eventKey={2} onClick={()=>this.handleLink("playground")}>Playground</NavItem>
                            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                              <MenuItem eventKey={3.1} onClick={()=>this.handleLink("drop_page")}>Drop Down Link</MenuItem>
                              <MenuItem eventKey={3.2}>Another action</MenuItem>
                              <MenuItem eventKey={3.3}>Something else here</MenuItem>
                              <MenuItem divider />
                              <MenuItem eventKey={3.3}>Separated link</MenuItem>
                            </NavDropdown>
                        </Nav>
                        <Nav pullRight>
                            
                            <NavItem eventKey={2} onClick={()=>this.handleLink("far_page")}>Far Page</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Route path="/home" exact component={Home}/>
                <Route path="/playground" component={Playground}/>
                <Route path="/new_page" component={NewPage}/>
                <Route path="/far_page" component={FarPage}/>
                <Route path="/drop_page" component={DropPage}/>
            </div>    
        );
    }
    
}