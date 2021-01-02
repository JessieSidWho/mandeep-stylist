import React from 'react';
import './services.css';

const Services = () => {
    return (
        <div id='services-box' className='row pt-5' style={{minHeight: '100vh', minWidth: '100vw'}}>
            <div id='services-content' className='col-md-12 mt-1 mb-5 pt-3 ' style={{minHeight: '100vh', minWidth: '75vw'}}>
                <div className='row justify-content-sm-center m-3'>
                    <table className='col-md-7 '>
                        <p className='text-justify pr-2' style={{fontSize: '1.1em', fontWeight: 'bold'}}>* Prices vary depending on your Hair Length and Texture. Please Contact Mandeep for an exact price on your length/type of hair. Some services may require an in-person consultation.</p>

                        <div className=" text-left ">
                          <thead>
                            <tr>
                              <th scope="col "></th>
                              <th scope="col ">Services</th>
                              <th scope="col ">Pricing</th>
                            </tr>
                          </thead>
                          <tbody>
                              {/* Styling */}
                            <tr>
                              <th>Styling</th>
                              <td>BlowOut</td>
                              <td>$75</td>
                            </tr>
                            <tr>
                              <th></th>
                              <td>Treatment + BlowOut</td>
                              <td></td>
                            </tr>
                            <tr>
                              <th></th>
                              <td>Gloss + BlowOut</td>
                              <td></td>
                            </tr>
                            <tr>
                              <th></th>
                              <td>Updo</td>
                              <td></td>
                            </tr>
                            <tr>
                              <th></th>
                              <td>Braid&#40;s&#41;</td>
                              <td></td>
                            </tr>
                              {/* Cuts */}
                            <tr>
                              <th>Cuts</th>
                              <td>Hair Cut</td>
                              <td></td>
                            </tr>
                            <tr>
                              <th></th>
                              <td>Precision Cut</td>
                              <td></td>
                            </tr>
                            <tr>
                              <th></th>
                              <td>Dead End Treament</td>
                              <td></td>
                            </tr>
                            <tr>
                              <th></th>
                              <td>Extension Cut</td>
                              <td></td>
                            </tr>
                            <tr>
                              <th></th>
                              <td>Bang Trim</td>
                              <td></td>
                            </tr>
                              {/* Color */}
                            <tr>
                              <th>Color</th>
                              <td>All Over Tint</td>
                              <td></td>
                            </tr>
                            <tr>
                              <th></th>
                              <td>Tint &#40;Root touchup&#41;</td>
                              <td></td>
                            </tr>
                            <tr>
                              <th></th>
                              <td>Full Highlight</td>
                              <td></td>
                            </tr>
                            <tr>
                              <th></th>
                              <td>Partial Highlight</td>
                              <td></td>
                            </tr>
                            <tr>
                              <th></th>
                              <td>Toner &#40;Color Gloss&#41;</td>
                              <td></td>
                            </tr>
                            <tr>
                              <th></th>
                              <td>Balage</td>
                              <td></td>
                            </tr>
                            <tr>
                              <th></th>
                              <td>Foilage</td>
                              <td></td>
                            </tr>
                            <tr>
                              <th></th>
                              <td>Color Correction</td>
                              <td></td>
                            </tr>
                            <tr>
                              <th></th>
                              <td>Creative Color</td>
                              <td></td>
                            </tr>
                            <tr>
                              <th></th>
                              <td>Bleach + Tone</td>
                              <td></td>
                            </tr>
                              {/* Hair Texture */}
                            <tr>
                              <th>Hair Texture</th>
                              <td>Keratin Express/Brazilian BlowOut<br></br>&#40;Formaldehyde Free&#41;</td>
                              <td></td>
                            </tr>
                            <tr>
                              <th></th>
                              <td>Keratin/Brazilian Treatment</td>
                              <td></td>
                            </tr>
                              {/* Hair Extension */}
                            <tr>
                              <th>Hair Extensions</th>
                              <td>Microlinks - New Set</td>
                              <td></td>
                            </tr>
                            <tr>
                              <th></th>
                              <td>Microlinks Push-up</td>
                              <td></td>
                            </tr>
                          </tbody>
                        </div>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Services;