import React from 'react';
import './temp.css';

const Temp = () => {
    return (
        <div id='tempRow' className='row justify-content-md-center p-5'>
            <div id='tempCol' className='col-md-7 m-5 p-5 rounded-lg border border-dark text-white'>
                <h1 className='text-center pt-5'>Welcome to MandeepStylist.com</h1>
                <h3 className='text-center pt-5'>Currently I am Under Construction.</h3>
                <h4 className='text-center pt-5'>For Inquiries, email <strong>MandeepStylist@gmail.com</strong></h4>
                
                <h1 className='text-center pt-5'>
                    <a href='mailto: mandeepstylist@gmail.com'><span id='logos' className=' no5' ><i className="mt-0 mb-0 rounded-cricle ml-3 mr-5 far fa-envelope"></i></span></a>
                    <span id='logos1' className='rounded-lg no1 text-center m-0 pt-3' onClick={() => window.open("https://www.instagram.com/mandeepstylist/", "_blank")}><i id='logos11' className="rounded-circle p-0 fab fa-instagram"></i></span>
                    <span id='logos' className=' no3 text-center m-0' onClick={() => window.open("https://www.yelp.com/biz/mandeep-stylist-bay-area", "_blank")}><i className="ml-5 mr-3 fab fa-yelp"></i></span>  
                </h1>
            </div>
        </div>
    )
}

export default Temp;