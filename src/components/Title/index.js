import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Logo from '../../images/logoOnlyWhite.png';
import './title.css';


const Title = () => {
    return (
        <>
            <Navbar id='navbar' className='row pt-0 pb-0' collapseOnSelect fixed='top' expand="lg" bg='black'>
                <Navbar.Brand className='p-1 text-white ' href="#home-box" style={{fontFamily: 'Poiret One', fontSize: '40px'}}><span className=''>@MandeepStylist</span></Navbar.Brand>
                <Navbar.Toggle className='m-0 p-0 pt-2 fas fa-bars text-white' aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" style={{marginRight: '30px', color: 'white'}}>
                    <Nav className="pt-2 ml-auto pr-0" >
                        <Nav.Link className='nav-item active p-1 pl-5 text-white ' target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSe3dy_09kQ-hXH4-hZ3hdIAkFoZw9KPC3hgl_nJKDkpvjZKdg/viewform?usp=sf_link" style={{fontFamily: 'Josefin Sans', fontSize: '25px'}}>COVID Questionnaire</Nav.Link>
                        <Nav.Link className='nav-item active p-1 pl-5 text-white ' href="#services-box" style={{fontFamily: 'Josefin Sans', fontSize: '25px'}}>Services</Nav.Link>
                        <Nav.Link className='nav-item active p-1 pl-5 text-white ' href="#herWork-box" style={{fontFamily: 'Josefin Sans', fontSize: '25px'}}>Her Work</Nav.Link>
                        {/* <NavDropdown className='pt-1 pb-0 pl-5 ' title={<span className='nav-item active text-white'>Her Work</span>} id="basic-nav-dropdown" style={{fontFamily: 'Josefin Sans', fontSize: '25px'}}>
                          <NavDropdown.Item href="#herWork-box">Her Work</NavDropdown.Item>
                          <NavDropdown.Item target="_blank" href="http://instagram.com/mandeepstylist">Instagram</NavDropdown.Item>
                        </NavDropdown> */}
                        <Nav.Link className='nav-item active p-1 pl-5 text-white ' href="#bookWithHer-box" style={{fontFamily: 'Josefin Sans', fontSize: '25px'}}>Book With Her</Nav.Link>
                        <Nav.Link className='nav-item active p-1 pl-5 text-white ' target="_blank" href="http://instagram.com/mandeepstylist" style={{fontFamily: 'Josefin Sans', fontSize: '25px'}}><i className="fab fa-instagram"></i></Nav.Link>
                        <Nav.Link className='nav-item active p-1 pl-5 text-white ' target="_blank" href="https://www.yelp.com/biz/mandeep-stylist-san-francisco-3" style={{fontFamily: 'Josefin Sans', fontSize: '25px'}}><i className="fab fa-yelp"></i></Nav.Link>
                        <Nav.Link className='nav-item active p-1 pl-5 text-white ' target="_blank" href="https://goo.gl/maps/cf89sNBwJBPyhYQG9" style={{fontFamily: 'Josefin Sans', fontSize: '25px'}}><i className="fab fa-google"></i></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Title;