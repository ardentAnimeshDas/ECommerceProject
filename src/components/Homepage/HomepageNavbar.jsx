import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faShoppingCart, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';

const HomepageNavbar = () => {
    return (
        <Navbar bg="light" expand="lg" className="py-3">
            <Container>
                {/* Company Name */}
                <Navbar.Brand href="#home" className="me-auto">
                    <h2>CompanyName</h2>
                </Navbar.Brand>

                {/* Navbar with 7 buttons and dropdown */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#" disabled>Home</Nav.Link>
                        <Nav.Link href="#" disabled>About</Nav.Link>
                        <Nav.Link href="#" disabled>Services</Nav.Link>
                        <Nav.Link href="#" disabled>Products</Nav.Link>
                        <Nav.Link href="#" disabled>Contact</Nav.Link>
                        <Nav.Link href="#" disabled>Blog</Nav.Link>
                        <NavDropdown title={<FontAwesomeIcon icon={faCaretDown} />} id="basic-nav-dropdown" disabled>
                            <NavDropdown.Item href="#" disabled>Subitem 1</NavDropdown.Item>
                            <NavDropdown.Item href="#" disabled>Subitem 2</NavDropdown.Item>
                            <NavDropdown.Item href="#" disabled>Subitem 3</NavDropdown.Item>
                            <NavDropdown.Item href="#" disabled>Subitem 4</NavDropdown.Item>
                            <NavDropdown.Item href="#" disabled>Subitem 5</NavDropdown.Item>
                            <NavDropdown.Item href="#" disabled>Subitem 6</NavDropdown.Item>
                            <NavDropdown.Item href="#" disabled>Subitem 7</NavDropdown.Item>
                            <NavDropdown.Item href="#" disabled>Subitem 8</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    {/* Icons */}
                    <Nav>
                        <Button variant="link" disabled>
                            <FontAwesomeIcon icon={faSearch} />
                        </Button>
                        <Button variant="link" disabled className="mx-2">
                            <FontAwesomeIcon icon={faUser} />
                        </Button>
                        <Button variant="link" disabled>
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default HomepageNavbar;
