import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';

const HomepageNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {/* Company Name */}
        <Navbar.Brand as={Link} to="/" className="me-auto">
          <img src="logo_me.png" height={100} width={100} alt="Company Logo" />
        </Navbar.Brand>

        {/* Navbar with 7 buttons and dropdown */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" disabled>HOME</Nav.Link>
            <Nav.Link as={Link} to="/services" disabled>SERVICES</Nav.Link>
            <Nav.Link as={Link} to="/products" disabled>PRODUCTS</Nav.Link>
            <Nav.Link as={Link} to="/watches" disabled>WATCHES</Nav.Link>
            <Nav.Link as={Link} to="/sale" disabled>SALE</Nav.Link>
            <Nav.Link as={Link} to="/blog" disabled>BLOG</Nav.Link>
            <Nav.Link as={Link} to="/pages" disabled>PAGES</Nav.Link>

            <NavDropdown title={<FontAwesomeIcon icon={faShoppingCart} />} id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/cart">CART</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/checkout">CHECKOUT</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/login">LOGIN</NavDropdown.Item>
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
            <Button variant="link" as={Link} to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HomepageNavbar;
