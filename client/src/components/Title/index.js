import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './style.css';


const Title = () => {
    return (
        <>
            <Navbar className='row text-white' collapseOnSelect fixed='top' expand="lg" bg="dark" variant="dark">
                <Navbar.Brand className='p-1 pl-4' href="#home">Mandeep Stylist</Navbar.Brand>
                <Navbar.Toggle className='mr-3' aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" style={{marginRight: '150px'}}>
                    <Nav className="m-auto border border-white" >
                        <Nav.Link className='p-1 pl-5 pr-5' href="#about">About Me</Nav.Link>
                        <Nav.Link className='p-1 pl-5 pr-5' href="#portfolio">Portfolio</Nav.Link>
                        <Nav.Link className='p-1 pl-5 pr-5' href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Title;