import React from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
//import {LinkContainer} from 'react-router-bootstrap';
import {Route, Link, NavLink} from 'react-router-dom';

//import Lists from '../components/lists';

import Home from '../pages/home';
import Playground from '../pages/playground';
import ManageLists from '../pages/manage_lists';
import DropPage from '../pages/drop_page';
import ViewList from '../pages/view_list';
import EditList from '../pages/edit_list';




export default class Header extends React.Component {
    
    constructor(props) {
        super(props);
        //props.history.push("/home");
         
        this.handleLogoPress = this.handleLogoPress.bind(this);
        this.handleLink = this.handleLink.bind(this);
        
    }
     
    componentWillMount() {
        this.props.history.push("/home");
    }
    
    handleLogoPress() {
        this.props.history.push("/home");
    }
    
    handleLink(path) {
        this.props.history.push("/"+path);
    }
    
    render() {
        return(
            <div id="examples" className="container">
                <Navbar inverse fluid collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand style={{cursor: "pointer"}} onClick={()=>this.handleLogoPress()}>List Maker</Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={2} onClick={()=>this.handleLink("manage_lists")}>Manage Lists</NavItem>
                            <NavItem eventKey={2} onClick={()=>this.handleLink("far_page")}>Far Page</NavItem>
                            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                              <MenuItem eventKey={3.1} onClick={()=>this.handleLink("drop_page")}>Drop Down Link</MenuItem>
                              <MenuItem eventKey={3.2}>Another action</MenuItem>
                              <MenuItem eventKey={3.3}>Something else here</MenuItem>
                              <MenuItem divider />
                              <MenuItem eventKey={3.3}>Separated link</MenuItem>
                            </NavDropdown>
                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={2} onClick={()=>this.handleLink("playground")}>Playground</NavItem>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                {/*<Route path="/" component={Lists}/> */}
                <Route path="/home" component={Home}/>  
                <Route path="/playground" component={Playground}/>
                <Route path="/manage_lists" component={ManageLists}/>
                <Route path="/drop_page" component={DropPage}/>
                <Route path="/view_list/:list" component={ViewList}/>
                <Route path="/edit_list/:list" component={EditList}/>
            </div>    
        );
    }
    
}