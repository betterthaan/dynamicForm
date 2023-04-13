import React from "react";
import {Nav, Navbar} from 'react-bootstrap';
import { NavLink } from "react-router-dom";


const NavBarMenu = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">DUP</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="me-auto">
                    <NavLink className="show-works-nav" to="/Works">Works</NavLink>
                </Nav>
            </Navbar>
        </div>
    );
};

export default NavBarMenu;