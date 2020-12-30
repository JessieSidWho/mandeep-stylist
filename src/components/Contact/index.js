import React, { Component } from 'react';
import './contact.css';
// import * as emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

class Contact extends Component {

    state = {
        name: '',
        hear: '',
        email: '',
        phone: '',
        service: '',
        showForm: false
    };

    handleChange = event => {
        // Pull the name and value properties off of the event.target (the element which triggered the event)
        const { name, value } = event.target;

        // Set the state for the appropriate input field
        this.setState({
            [name]: value
        });
        // console.log(this.state);
    };

    handleSubmit = event => {
        event.preventDefault();

        // let template_params = {
        //     "name": this.state.name,
        //     "email": this.state.email,
        //     "phone": this.state.phone,
        //     "hear": this.state.hear,
        //     "service": this.state.service
        //  }
         
        //  let service_id = "default_service";
        //  let template_id = "template_pvkoSJSW";
        //  let user_id = "user_8g6W8dwcvNZ7EWVlS7jMg";

        //  emailjs.send(service_id, template_id, template_params, user_id)
        //  .then((response) => {
            Swal.fire({
                title: 'SUCCESS!',
                text: 'Mandeep Stylist has received your Inquery!!',
                imageUrl: 'https://drive.google.com/uc?id=1aD_WWpfHGzfmYoSht0YV2-eBb0Bvleps',
                imageWidth: 350,
                imageHeight: 300,
                imageAlt: 'Custom image',
                animation: false
              })
        //     // console.log('SUCCESS!', response.status, response.text);
        //  }, (err) => {
            // Swal.fire('Uh oh . .', 
            // 'You\'re Inquiry was not sent. If this error keeps occuring, please Email directly at: MandeepStylist@gmail.com', 'error')
        //     // console.log('FAILED...', err);
        //  });

        this.setState({ name: '', hear: '', email: '', phone: '', service: '' });
    }


    handleShowForm = event => {
        event.preventDefault();
        this.setState({ showForm: true })
        console.log(this.showForm);
    }

    render() {
        return (
            <div id='contact-box' className='row justify-content-around ' >

                <div id='contact-content' className='col-lg-7 mt-5 mb-5' style={{minHeight: '100vh'}}>
                    <div className='row mt-5 pl-2 pr-2'>

                        
                        <div id='contactForm' className='col-lg-12 pt-5 mt-5'>
                            <h1 className='p-3 text-white pt-5 mt-5' style={{ fontFamily: 'Comfortaa', fontSize: '50px' }}>Book With Her</h1>
                              
                              {!this.state.showForm ? 
                              <div id='buttons' className=''>
                                <button id="new_client" type='button' className='font-weight-bold btn btn-light btn-lg btn-block mt-5 mb-5' onClick={this.handleShowForm}>New Client</button>
    
                                <button id="existing_client" type='button' className='font-weight-bold btn btn-light btn-lg btn-block mt-5'>Existing Client</button>
                              </div>
                              : null
                              }

                            {/* Contact Form */}
                            {this.state.showForm ?
                            <div>
                              <form>
                                  <div className='row'>
  
                                      <input
                                          className='col-md-6 text-dark border border-secondary pt-1 pb-5'
                                          name='name'
                                          type='name'
                                          placeholder='First & Last Name'
                                          onChange={this.handleChange}
                                          value={this.state.name}
                                          required={true}  
                                      />
  
                                      <input
                                          className='col-md-6 text-dark border border-secondary pt-1 pb-5'
                                          name='hear'
                                          type='text'
                                          placeholder='How did you hear about us?'
                                          onChange={this.handleChange}
                                          value={this.state.hear}
                                          required={true}
                                      />
  
                                  </div>
  
                                  <div className='row '>
  
                                      <input
                                          className='col-md-6 text-dark border border-secondary  pt-1 pb-5'
                                          name='email'
                                          type='email'
                                          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                          placeholder='E-mail'
                                          onChange={this.handleChange}
                                          value={this.state.email}
                                          required={true}
                                      />
  
                                      <input
                                          className='col-md-6 text-dark border border-secondary  pt-1 pb-5'
                                          name='phone'
                                          type='tel'
                                          placeholder='Phone Number'
                                          onChange={this.handleChange}
                                          value={this.state.phone}
                                          required={true}
                                      />
                                  </div>
  
                                  <div className='row '>
                                      <textarea
                                          id='inputText'
                                          className='col-md-12 text-dark border border-secondary  pt-2 pb-5'
                                          name='service'
                                          type='text'
                                          placeholder='How can we be of service to you?'
                                          onChange={this.handleChange}
                                          value={this.state.service}
                                          required={true}
                                      />
                                  </div>
  
                              </form>
  
                              <div className='row justify-content-md-center'>
                                  <div className='col-md-6 text-center m-4'>
                                      <button
                                          className='btn btn-block bg-white rounded-pill'
                                          name='submit'
                                          type='submit'
                                          onClick={this.handleSubmit}
                                      >
                                          Submit
                                      </button>
                                  </div>
                              </div>
                            </div>
                            : null
                            }

                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default Contact;