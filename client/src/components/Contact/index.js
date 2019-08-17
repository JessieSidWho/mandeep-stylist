import React, { Component } from 'react';
import './contact.css';

class Contact extends Component {

    render() {
        return (
            <div id="request" className='row justify-content-md-center pb-5 pt-5'>
                <div className='col-md-7 m-3 mt-5'>

                    <form method="" action="" className=" border border-secondary rounded-lg p-5" style={{backgroundColor: `rgba(255,255,255,.9)`}}>
                        <h1 className='text-center'>Contact Me</h1>
                        
                        <p className='text-left'>Name<br></br>
                            <input
                                type='text'
                                className="border border-secondary rounded-sm"
                                id="nameInput"
                                name="name"
                                placeholder="Name"
                                required
                            /></p>
                        <p className='text-left'>E-mail<br></br>
                            <input
                                type='email'
                                className="border border-secondary rounded-sm"
                                id="emailInput"
                                name="email"
                                placeholder="E-mail"
                                required
                            /></p>
                        <p className='text-left'>Phone Number<br></br>
                            <input
                                type='phone'
                                className="border border-secondary rounded-sm"
                                id="phoneInput"
                                name="phone"
                                placeholder="Phone #"
                                required
                            /></p>
                        <p className='text-left'>Services Inquired:<br></br>
                            <input
                                type='number'
                                className="border border-secondary rounded-sm"
                                id="quantityInput"
                                name="quantity"
                                placeholder="Services Inquired"
                                required
                            /></p>
                        <p className='text-left'>Additional Notes:<br></br>
                            <textarea
                                type='text'
                                className="border border-secondary rounded-sm"
                                id="productInput"
                                name="product"
                                placeholder="Additional Notes"
                                required
                            /></p>


                        {/* <div className=" row justify-content-sm-center mt-5"> */}

                            {/* <div className='col-sm-4'>
                                <button className=" border btn btn-block btn-light rounded-sm" onClick={this.handleCancel}>
                                    Cancel
                                </button>
                            </div> */}

                            <div className='col-sm-12'>
                                <button className='mt-4 border btn btn-block btn-dark rounded-sm' type="submit" value="Submit">
                                    Submit
                                </button>
                            </div>

                        {/* </div> */}
                    </form>

                </div>
            </div>
        );
    }
}


export default Contact;