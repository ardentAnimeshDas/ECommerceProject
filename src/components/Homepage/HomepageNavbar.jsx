import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const HomepageNavbar = () => {
    return (
        <Navbar bg="light" expand="lg" className="">
            <Container>
                {/* Company Name */}
                <Navbar.Brand as = {Link} to="/" className="me-auto">
                    <img src="logo_me.png" height={100} width={100} alt="Company Logo"/>
                </Navbar.Brand>

                {/* Navbar with 7 buttons and dropdown */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link as={Link} to="/">HOME</Nav.Link>
                        <Nav.Link as={Link} to="/about">ABOUT</Nav.Link>
                        <Nav.Link as={Link} to="/services">SERVICES</Nav.Link>
                        <Nav.Link as={Link} to="/products">PRODUCTS</Nav.Link>
                        <Nav.Link as={Link} to="/contact">CONTACT</Nav.Link>
                        <Nav.Link as={Link} to="/blog">BLOG</Nav.Link>
                        <NavDropdown title={<FontAwesomeIcon/>} id="basic-nav-dropdown">
                            <NavDropdown.Item href="">CART</NavDropdown.Item>
                            <NavDropdown.Item href="">CHECKOUT</NavDropdown.Item>
                            <NavDropdown.Item href="">SINGLE POST</NavDropdown.Item>
                            <NavDropdown.Item href="">SINGLE PRODUCT</NavDropdown.Item>  
                        </NavDropdown>
                    </Nav>

                    {/* Icons */}
                    <Nav>
                        <Button variant="link">
                            <FontAwesomeIcon icon={faSearch} />
                        </Button>
                        <Button variant="link" className="mx-2">
                            <FontAwesomeIcon icon={faUser} />
                        </Button>
                        <Button variant="link">
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default HomepageNavbar;
