import React from 'react';
import Logo from './../../images/logo-white.png';

const Title = () => {
    return (
        <div className='row text-light' style={{fontFamily: 'Comfortaa', fontSize: '20px'}}>

            <div className='col-md-4 text-center' >
                <img className='p-0 m-0' src={Logo} alt='logo' style={{ width: '35vw', height: 'auto' }} />
            </div>

            <div className='col-md-8'>

                <div className='row align-content-md-center text-center h-100'>

                    <div className="col-md-3 ">
                        <a className=" text-light" href="#instagram" style={{}}>Instagram</a>
                    </div>
                    <div className="col-md-3 ">
                        <a className=" text-light" href="#location" style={{}}>About Me</a>
                    </div>
                    <div className="col-md-3 ">
                        <a className=" text-light" href="#request" style={{}}>Inquire</a>
                    </div>
                    <div className="col-md-3 ">
                        <a className=" text-light" href="#request" style={{}}>FAQs</a>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Title;