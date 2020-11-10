import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import Logo from '../../images/logoOnlyWhite.png';
import './style.css';


const Title = () => {
    return (
        <>
            <Navbar className='row text-white' collapseOnSelect fixed='top' expand="lg" bg="dark" variant="dark">
                <Navbar.Brand className='p-1 pl-4 ' href="#home" style={{fontFamily: 'Poiret One', fontSize: '50px'}}><span className='mr-5'>@MandeepStylist</span></Navbar.Brand>
                <Navbar.Toggle className='mr-3' aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" style={{marginRight: '30px'}}>
                    <Nav className="pt-3 ml-auto pr-0" >
                        <Nav.Link className='p-1 pl-5' href="#about" style={{fontFamily: 'Josefin Sans', fontSize: '25px'}}>About Me</Nav.Link>
                        <Nav.Link className='p-1 pl-5 ' href="#portfolio" style={{fontFamily: 'Josefin Sans', fontSize: '25px'}}>Portfolio</Nav.Link>
                        <Nav.Link className='p-1 pl-5 ' href="#contact" style={{fontFamily: 'Josefin Sans', fontSize: '25px'}}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Title;