import React, { Component } from "react";
import Sidebar from "react-sidebar";
import Tabs from './../Sidebar';
import './navbar.css';
import Logo from './../../images/logo-white.png';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }

    render() {
        return (

            <Sidebar
                id='sidebar'
                sidebar={<div className='p-4 mt-2'>
                    <h3>Mandeep Stylist</h3>
                    <Tabs />
                </div>}
                open={this.state.sidebarOpen}
                onSetOpen={this.onSetSidebarOpen}
                styles={{ sidebar: { background: `linear-gradient(rgba(255,255,255,1), rgba(255,255,255,.4))` } }}
            >

                <div id='burger' className='row p-3 justify-content-md-between' style={{}}>

                    <div className='col-md-4 border border-white text-center' >
                        <img className='p-0 m-0' src={Logo} alt='logo' style={{ width: '75%', height: 'auto' }} />
                    </div>

                    <div className='col-md-4 text-center mt-5 border border-white'>
                        <i className="fas fa-bars border border-white p-1 rounded-lg" style={{ color: 'white', fontSize: '35px' }} onClick={() => this.onSetSidebarOpen(true)}></i>
                    </div>
                </div>

            </Sidebar>

        );
    }
}

export default Navbar;