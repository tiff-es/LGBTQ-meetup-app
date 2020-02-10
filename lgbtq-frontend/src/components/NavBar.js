import React, {Component} from "react";
import {Toolbar, ButtonGroup, MenuList, GridListTileBar, CardHeader, TableHead} from "@material-ui/core";
import {Route, NavLink, Link,Switch, BrowserRouter as Router} from "react-router-dom";
import Button from "@material-ui/core/button"
import pride from '../assets/img/pride.jpg'
import {Navbar} from "mdbreact";
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/css/navbar.css'
import {NavbarBrand, NavDropdown} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
export default class NavBar extends Component {

    render(){
        return(
            <Navbar id='navbar' className='nav-flex-icons default-color'>

                    <NavbarBrand>
                        <img src={pride} style={{width:75, marginTop: -7}} />
                        LGBTQ+ Meetups!
                    </NavbarBrand>


                <NavLink to="/"><Button className='nav-item'><div className='nav-link'>Home</div></Button></NavLink>
                <NavLink to="/createaccount"><Button className='navbar-btn'><div className='nav-link'>Create Account</div></Button></NavLink>
                <NavLink to="/login"><Button className='navbar-btn'><div className='nav-link'>Login</div></Button></NavLink>
                <NavLink to="/meetups"><Button className='navbar-btn'><div className='nav-link'>Meetups</div></Button></NavLink>
                <NavLink to="/createmeetup"><Button className='navbar-btn'><div className='nav-link'>Create Meetup</div></Button></NavLink>
                <NavLink to='/users'><Button className='navbar-btn'><div className='nav-link'>Users </div> </Button> </NavLink>
            </Navbar>



        )
    }
}