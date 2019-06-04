import React from 'react';
import Logo from './../../images/logo.png';

const Title = () => {
    return (
        <div className='row mb-2' style={{fontFamily: 'Comfortaa', fontSize: '20px'}}>

            <div className='col-md-4 text-center' >
                <img className='p-0 m-0' src={Logo} alt='logo' style={{ width: '35vw', height: 'auto' }} />
            </div>

            <div className='col-md-8 '>

                <div className='row align-content-md-center text-center h-100'>

                    <div className="col-md-3 ">
                        <a className=" text-dark" href="#instagram" style={{}}>Instagram</a>
                    </div>
                    <div className="col-md-3 ">
                        <a className=" text-dark" href="#location" style={{}}>About Me</a>
                    </div>
                    <div className="col-md-3 ">
                        <a className=" text-dark" href="#request" style={{}}>Inquire</a>
                    </div>
                    <div className="col-md-3 ">
                        <a className=" text-dark" href="#request" style={{}}>FAQs</a>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Title;