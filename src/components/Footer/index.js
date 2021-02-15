import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './footer.css';


const Footer = () => {
    return (
        <>
            <Navbar id='footer' className='row pt-0 pb-0 mx-auto' collapseOnSelect fixed='bottom' expand="lg"  height='50px'>
                <Navbar.Brand className='mx-auto pt-0 pb-0 text-center mt-0 mb-0'>
                    <span href='mailto: mandeepstylist@gmail.com' id='logos' className=' no5' ><i className="mt-0 mb-0 rounded-cricle ml-3 mr-5 far fa-envelope"></i></span>
                    {/* <a href='tel:6195047147'><span id='logos' className=' no4' ><i className="ml-3 mr-3 fas fa-phone-square"></i></span></a> */}
                    <span id='insta' className='rounded-lg text-center m-0 fab fa-instagram' onClick={() => window.open("https://www.instagram.com/mandeepstylist/", "_blank")}><i id='' className="rounded-circle p-0 " aria-hidden="true"></i></span>
                    <span id='logos' className=' no3 text-center m-0' onClick={() => window.open("https://www.yelp.com/biz/mandeep-stylist-san-francisco-3", "_blank")}><i className="ml-5 mr-2 fab fa-yelp"></i></span>
                    <span id='logos' className='no4 text-center m-0' onClick={() => window.open("https://goo.gl/maps/cf89sNBwJBPyhYQG9", "_blank")}><i id='google' className="ml-5 mr-3 fab fa-google"></i></span>
                </Navbar.Brand>
            </Navbar>
        </>
    )
}

export default Footer;