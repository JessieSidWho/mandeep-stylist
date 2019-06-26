import React from 'react';
import Logo from './../../images/logo-white.png';

const Header = () => {
    return (
        <div className='row'>
            <div className='col-md-4' >
                <img className='p-0 m-0' src={Logo} alt='logo' style={{ width: '50%', height: 'auto' }} />
            </div>
        </div>
    )
}

export default Header;