import React from 'react';
import Logo from './../../images/logo.png';

const Title = () => {
    return (
        <div className='row '>
            <div className='col-md-8 offset-2 border-bottom border-dark text-center' style={{width: '400px', height: 'auto'}}>
             <img className='p-0 m-0' src={Logo} alt='logo' style={{width: '40vw', height: 'auto'}}/>
            </div>
        </div>
    )
}

export default Title;