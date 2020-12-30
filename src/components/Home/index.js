import React from 'react';
import './home.css';
import mshoker from '../../images/MSHOKER.jpeg';

const Home = () => {
    return (
        <div id='home-box' className='row' style={{minHeight: '100vh'}}>
            <div id='home-content' className='col-md-12 pt-5' style={{minHeight: '75vh'}}>

                <div id='bio-box' className='row justify-content-md-center p-3 align-items-center'>
                   <div className='col-md-5  '>
                         <img className='' src={mshoker} alt='' width='80%' ></img>
                   </div>

                    <div className='col-md-7  '>
                      <div className='' >
                        <p id='bio' className='text-justify' style={{fontSize: '1.5em', color: 'white'}}> Mandeep [Mun•deep] has been in hair industry since ‘07. Her journey started in Portland, Oregon and cruised its way to New York City where she gained experience with all of the beautiful forms of hair; straight to textured. She specializes in everything from Color-Corrections to Keratins and has very well perfected her cutting styles. Mandeep is easy going, well educated in her craft, and stays up to date with all the new trends so she can best serve all her clients. Her energetic corky personality is well loved, she believes in honest work and considers herself a perfectionist. After collectively working at many high-end salons; Patrick Evan Salon of San Francisco being the last, Mandeep is confident she can be the perfect stylist for you.</p>
                      </div>  
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home;