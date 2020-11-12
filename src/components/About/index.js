import React from 'react';
// import MainPic from '../../images/graffiti.jpg';
import './about.css';

const About = () => {
    return (
        <div className='row justify-content-md-center' style={{minHeight: '100vh'}}>

            {/* right side */}
            <div id='homeCol' className='col-md-6 text-center'>
                <div className="row  border border-dark " style={{minHeight: '50vh'}}>
                    {/* <img id='mainPic' className='w-100 ' src={MainPic} alt='' /> */}
                </div>

                <div id='yelp' className="row " >
                   <div id='YELP_Logo' className="col-sm-12 align-items-center" ><i class="fab fa-yelp" style={{fontSize: '100px', color: ''}}></i></div>
                </div>
            </div>
            {/* left side */}
            <div id='insta' className='col-md-6 pb-1' >
                <div id='instagram' className="row align-items-center" style={{minHeight: '100vh'}}>
                   <div id='IG_Logo' className="col-md-12" ><i class="fab fa-instagram" style={{fontSize: '100px', color: ''}}></i></div>
                </div>
                
            </div>
            

        </div>
    )
}

export default About;