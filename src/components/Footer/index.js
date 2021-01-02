import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './footer.css';


const Footer = () => {
    return (
        <>
            <Navbar id='footer' className='row pt-0 pb-0 mx-auto' collapseOnSelect fixed='bottom' expand="lg"  height='50px'>
                <Navbar.Brand className='mx-auto pt-0 pb-0 text-center mt-0 mb-0'>
                    <a href='mailto: mandeepstylist@gmail.com'><span id='logos' className=' no5' ><i className="mt-0 mb-0 rounded-cricle ml-3 mr-5 far fa-envelope"></i></span></a>
                    {/* <a href='tel:6195047147'><span id='logos' className=' no4' ><i className="ml-3 mr-3 fas fa-phone-square"></i></span></a> */}
                    <span id='logos1' className='rounded-lg no1 text-center m-0' onClick={() => window.open("https://www.instagram.com/mandeepstylist/", "_blank")}><i id='logos11' className="rounded-circle p-0 fab fa-instagram"></i></span>
                    <span id='logos' className=' no3 text-center m-0' onClick={() => window.open("https://www.yelp.com/biz/mandeep-stylist-bay-area", "_blank")}><i className="ml-5 mr-3 fab fa-yelp"></i></span>
                </Navbar.Brand>
            </Navbar>
        </>
    )
}

export default Footer;