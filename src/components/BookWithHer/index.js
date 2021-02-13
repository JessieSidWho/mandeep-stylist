import React, { Component } from 'react';
import './bookWithHer.css';
import * as emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
import Swal from 'sweetalert2';
init("user_4YTMHSdjDPA85Z7J9KVK4");

class BookWithHer extends Component {
    onLeave(origin, destination, direction) {
      console.log("Leaving section " + origin.index);
    }
    afterLoad(origin, destination, direction) {
      console.log("After load: " + destination.index);
    }

    state = {
        name: '',
        hear: '',
        email: '',
        phone: '',
        service: ''
    };

    handleChange = event => {
        event.preventDefault();
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

        let template_params = {
            "name": this.state.name,
            "email": this.state.email,
            "phone": this.state.phone,
            "hear": this.state.hear,
            "service": this.state.service
         }
         
         let service_id = "service_e0fjbdm";
         let template_id = "template_Mandeep_Stylist";
         let user_id = "user_4YTMHSdjDPA85Z7J9KVK4";

         emailjs.send(service_id, template_id, template_params, user_id)
         .then((response) => {
            Swal.fire({
                title: 'SUCCESS!',
                text: 'Mandeep Stylist has received your inquiry and will get back to you within 24 hours.',
                imageUrl: 'https://drive.google.com/uc?id=1aD_WWpfHGzfmYoSht0YV2-eBb0Bvleps',
                imageWidth: 350,
                imageHeight: 300,
                imageAlt: 'Custom image',
                animation: false
              })
            // console.log('SUCCESS!', response.status, response.text);
         }, (err) => {
            Swal.fire('Uh oh . .', 
            'You\'re Inquiry was not sent. If this error keeps occuring, please Email directly at: MandeepStylist@gmail.com', 'error')
            // console.log('FAILED...', err);
         });

        this.setState({ name: '', hear: '', email: '', phone: '', service: '' });
    }


    handleShowForm = event => {
        event.preventDefault();
        this.setState({ showForm: true })
        // console.log(this.showForm);
    }

    render() {
        return (
            <div id='bookWithHer-box' className='row justify-content-around mt-5 pt-5 mb-3' >

                <div id='bookWithHer-content' className='col-lg-10 mb-5' style={{minHeight: '50vh'}}>
                    <p id='bwhTitle' className='pt-5 text-center' style={{fontSize: '2.5em', fontWeight: 'bolder'}}>Book With Her</p>
                    <div className='row justify-content-md-center '>
                        
                        <div id='contactForm' className='col-md-12 m-auto p-auto '>
                              
                            <div>
                              <form>
                                  <div className='row justify-content-sm-center p-1'>
  
                                      <input
                                          className='col-md-5 mr-1 text-dark p-3 pb-5 border-top-0 border-left-0 border-right-0 '
                                          name='name'
                                          type='name'
                                          placeholder='First & Last Name'
                                          onChange={this.handleChange}
                                          value={this.state.name}
                                          required={true} 
                                          autoComplete="nope" 
                                      />
  
                                      <input
                                          className='col-md-5 ml-1 text-dark p-3 pb-5 border-top-0 border-left-0 border-right-0'
                                          name='hear'
                                          type='text'
                                          placeholder='How did you hear about us?'
                                          onChange={this.handleChange}
                                          value={this.state.hear}
                                          required={true}
                                          autoComplete="nope"
                                      />
  
                                  </div>
  
                                  <div className='row justify-content-sm-center p-1'>
  
                                      <input
                                          className='col-md-5 mr-1 text-dark p-3 pb-5 border-top-0 border-left-0 border-right-0'
                                          name='email'
                                          type='email'
                                          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                          placeholder='E-mail'
                                          onChange={this.handleChange}
                                          value={this.state.email}
                                          required={true}
                                          autoComplete="nope"
                                      />
  
                                      <input
                                          className='col-md-5 ml-1 p-3 pb-5 text-dark border-top-0 border-left-0 border-right-0'
                                          name='phone'
                                          type='tel'
                                          placeholder='Phone Number'
                                          onChange={this.handleChange}
                                          value={this.state.phone}
                                          required={true}
                                          autoComplete="nope"
                                      />
                                  </div>
  
                                  <div className='row justify-content-sm-center'>
                                      <textarea
                                          id='inputText'
                                          className='col-md-10 text-dark pt-2 pb-5 border-top-0 border-left-0 border-right-0'
                                          name='service'
                                          type='text'
                                          placeholder='What services are you interested in?'
                                          onChange={this.handleChange}
                                          value={this.state.service}
                                          required={true}
                                          autoComplete="nope"
                                      />
                                  </div>
  
                              </form>
  
                              <div className='row justify-content-md-center '>
                                  <div className='col-md-6 text-center m-4'>
                                      <button
                                          className='btn  btn-outline-secondary rounded-0 '
                                          name='submit'
                                          type='submit'
                                          onClick={this.handleSubmit}
                                      >
                                          Submit
                                      </button>
                                  </div>
                              </div>

                            </div>

                        </div>                        

                    </div> 

                </div>

            </div>
        )
    }
}

export default BookWithHer;