import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from './../../images/logoOnlyWhite.png';
import './style.css';


const Title = () => {
    return (
        <>
            <Navbar className='row text-white' collapseOnSelect fixed='top' expand="lg" bg="dark" variant="dark">
                <Navbar.Brand className='p-1 pl-4' href="#home" style={{fontFamily: 'Architects Daughter', fontSize: '22px'}}><img className='ml-1 mr-3' src={Logo} alt='logo' style={{height: '35px'}}/>Mandeep Stylist</Navbar.Brand>
                <Navbar.Toggle className='mr-3' aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" style={{marginRight: '150px'}}>
                    <Nav className="m-auto" >
                        <Nav.Link className='p-1 pl-5 pr-5 mr-5' href="#about" style={{fontSize: '16px'}}>About Me</Nav.Link>
                        <Nav.Link className='p-1 pl-5 pr-5 mr-5' href="#portfolio" style={{fontSize: '16px'}}>Portfolio</Nav.Link>
                        <Nav.Link className='p-1 pl-5 pr-5 mr-5' href="#contact" style={{fontSize: '16px'}}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Title;