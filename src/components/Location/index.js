import React from 'react';
import './location.css';

const Location = () => {
    return (
        <div id='location-box' className='row justify-content-md-center ' >
            <div id='location-content' className='col-md-9 mt-1 ' >
                <div className='row justify-content-sm-center '>
                  <div className='col-md-12 pt-3 pb-4'>

                      {/* <div className='text-center pb-5'>
                        <p style={{fontSize: '2.5em', fontWeight: 'bolder'}}>Location</p>
                      </div> */}

                      {/* <p id='bwhTitle' className='pt-5 text-center' style={{fontSize: '2.5em', fontWeight: 'bolder'}}>Location</p> */}
                    <div id='' className='row d-flex justify-content-around'>
                        <div className='col-md-6 pb-0' dangerouslySetInnerHTML={{ __html: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0737694517807!2d-122.40515104903191!3d37.7883109190541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808581f88dd53a5d%3A0xbb12c6f45b9b4ec!2sMandeep%20Stylist%20Studio!5e0!3m2!1sen!2sus!4v1612222087376!5m2!1sen!2sus' width=100% height=100% frameborder=0 style={{border:'0'}} allowfullscreen= aria-hidden=false tabindex=0 />" }} height='100vh'/> 

                        <div id='' className='col-md-5 text-left pb-0 pl-5'>
                          <div className='p-3' style={{fontSize: '1.4em'}}>
                            <p style={{fontWeight: 'bolder'}}>Address</p>
                            <p style={{fontWeight: 'bold'}}>660 Market St, 2nd Floor<br></br>Suite 209<br></br>San Francisco, CA 94104</p>
                          </div>

                          <table>
                            <thead>
                                <tr>
                                  <th id='thHours' className='pl-3 pb-0'>Hours</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className='pl-3'>Wednesday - Sunday   <span style={{fontWeight: 'bolder'}}>|</span>   11am - 7pm</td>
                                </tr>
                                <tr>
                                  <td className='pl-3 pt-4' style={{fontWeight: 'bolder'}}>Email:</td>
                                </tr>
                                <tr>
                                  <td className='pl-3 '>MandeepStylist@gmail.com</td>
                                </tr>                             
                                </tbody>
                          </table>

                        </div>

                    </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Location;