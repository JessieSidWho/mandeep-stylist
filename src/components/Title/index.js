import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Logo from '../../images/logoOnlyWhite.png';
import './style.css';


const Title = () => {
    return (
        <>
            <Navbar id='navbar' className='row' collapseOnSelect fixed='top' expand="lg">
                <Navbar.Brand className='p-1  ' href="#home" style={{fontFamily: 'Poiret One', fontSize: '40px'}}><span className=''>@MandeepStylist</span></Navbar.Brand>
                <Navbar.Toggle className='mr-3' aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" style={{marginRight: '30px'}}>
                    <Nav className="pt-3 ml-auto pr-0" >
                        <Nav.Link className='p-1 pl-5 ' href="#about" style={{fontFamily: 'Josefin Sans', fontSize: '25px'}}>About Mandeep</Nav.Link>
                        <NavDropdown className='pt-1 pb-0 pl-5' title="Her Work" id="basic-nav-dropdown" style={{fontFamily: 'Josefin Sans', fontSize: '25px'}}>
                          <NavDropdown.Item href="#herWork">Services</NavDropdown.Item>
                          <NavDropdown.Item target="_blank" href="http://instagram.com/mandeepstylist">Instagram</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className='p-1 pl-5 ' href="#contact" style={{fontFamily: 'Josefin Sans', fontSize: '25px'}}>Book With Her</Nav.Link>
                        <Nav.Link className='p-1 pl-5 ' target="_blank" href="http://instagram.com/mandeepstylist" style={{fontFamily: 'Josefin Sans', fontSize: '25px'}}><i class="fab fa-instagram"></i></Nav.Link>
                        <Nav.Link className='p-1 pl-5 ' target="_blank" href="http://yelp.com" style={{fontFamily: 'Josefin Sans', fontSize: '25px'}}><i class="fab fa-yelp"></i></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Title;