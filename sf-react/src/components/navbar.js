import React from "react";
import {
    Nav, Navbar,
} from "react-bootstrap";

const Navigation = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">SFLive</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#venues">Venues</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
};

export default Navigation;