import React from 'react';
import './services.css';

const Services = () => {
    return (
        <div id='services-box' className='row pt-5 ' style={{minHeight: '100vh', minWidth: '100vw'}}>
            <div id='services-content' className='col-md-12 mt-1 pt-3 ' style={{minHeight: '100vh', minWidth: '75vw'}}>
                <div className='row justify-content-sm-center m-3'>
                  <div className='col-md-12 pt-5'>

                      <div className=' '>
                        <p style={{fontSize: '2.5em', fontWeight: 'bolder'}}>Services + Pricing</p>
                      </div>

                    <div className='row justify-content-md-center border'>
                        <table className='col-md-6'>    
                            <div className=" text-left ">
                              <thead>
                                <tr>
                                  <th scope="col "></th>
                                  <th scope="col "></th>
                                  <th scope="col "></th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th></th>
                                  <td>Consultation</td>
                                  <td>Free</td>
                                </tr>
                                  {/* Styling */}
                                <tr>
                                  <th>Styling</th>
                                  <td>BlowOut</td>
                                  <td>$79</td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td>Treatment + BlowOut</td>
                                  <td>$94</td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td>Updo</td>
                                  <td>EFP</td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td>Braid&#40;s&#41;</td>
                                  <td>$49+</td>
                                </tr>
                                  {/* Cuts */}
                                <tr>
                                  <th>Cuts</th>
                                  <td>Hair Cut</td>
                                  <td>$109</td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td>Precision Cut</td>
                                  <td>$129</td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td>Dead End Treament</td>
                                  <td>$109</td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td>Extension Cut</td>
                                  <td>$109+</td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td>Bang Trim</td>
                                  <td>$25</td>
                                </tr>
                                  {/* Hair Texture */}
                                <tr>
                                  <th>Hair Texture</th>
                                  <td>Keratin EXPRESS<br></br>&#40;Formaldehyde Free&#41;</td>
                                  <td>$160</td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td className='pr-5'>Keratin/Brazilian Treatment</td>
                                  <td>$360</td>
                                </tr>
                                  {/* Hair Extension */}
                                <tr>
                                  <th className='pr-5'>Hair Extensions</th>
                                  <td>Microlink: New Installation</td>
                                  <td>EFP + CR</td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td>Microlink: Push-up</td>
                                  <td>EFP + CR</td>
                                </tr>
                              </tbody>
                            </div>
                        </table>

                        <table className='col-md-6 '>
                            <p className='text-left p-0 m-0' style={{fontWeight: 'bolder'}}></p>
                            <p className='text-left p-0 m-0' style={{fontWeight: 'bolder'}}></p>
    
                            <div className=" text-left">
                              <thead>
                                <tr>
                                  <th scope="col "></th>
                                  <th scope="col "></th>
                                  <th scope="col "></th>
                                </tr>
                              </thead>
                              <tbody>
                                  {/* Color */}
                                <tr>
                                  <th></th>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <th >Color</th>
                                  <td >All Over Tint</td>
                                  <td>$129</td>
                                </tr>
                                <tr>
                                  <th className=' pr-5' style={{color: 'white'}}>Extensions</th>
                                  <td className=''>Tint &#40;Root touchup&#41;</td>
                                  <td>$89</td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td>Base Break</td>
                                  <td>$50</td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td className='pr-5'>Face Framing Highlights</td>
                                  <td>$150</td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td>Full Highlight</td>
                                  <td>$250+</td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td>Partial Highlight</td>
                                  <td>$225+</td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td>Toner &#40;Color Gloss&#41;</td>
                                  <td>$95</td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td>Balayage</td>
                                  <td>$250</td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td>Foilyage</td>
                                  <td>EFP</td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td>Color Correction</td>
                                  <td>$150 /hr + CR</td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td>Creative Color</td>
                                  <td>$150 /hr + CR</td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td>Bleach + Tone</td>
                                  <td>EFP</td>
                                </tr>
                                <tr>
                                  <th></th>
                                  <td className='pr-5' style={{color: 'white'}}>Keratin/Brazilian Treatmentaaaaaa</td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <th><br></br></th>
                                  <td></td>
                                  <td></td>
                                </tr>                                                         
                              </tbody>
                                <p className='text-left p-0 m-0' style={{fontWeight: 'bolder'}}>EFP = Email For Pricing</p>
                                <p className='text-left p-0 m-0' style={{fontWeight: 'bolder'}}>CR = Consultation Required</p>
                            </div>
                        </table>
                        <p className='text-justify mt-2 mb-2 p-2 pt-4' style={{fontSize: '1.4em', fontWeight: 'bold'}}>Prices vary depending on your Hair Length and Texture. Please Contact Mandeep for an exact price on your length/type of hair. Some services may require an in-person consultation.</p>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;