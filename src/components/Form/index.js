import React, { useState, Component } from 'react';
// import Gallery from "react-photo-gallery";
// import Carousel, { Modal, ModalGateway } from "react-images";
// import { photos } from "../../images/photos";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import B from '../../images/B.jpeg';
import BT from '../../images/BT.jpeg';
import Creative from '../../images/Creative.jpeg';
import Correction from '../../images/Correction.jpeg';
import Keratin from '../../images/Keratin.jpeg';
import './form.css';

class Form extends Component {

    state = {
      showForm: false,
      showBleachTone: false
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
  
  handleBackButton = event => {
      event.preventDefault();

      this.setState({ showForm: false });
  }
  
  
  handleShowForm = event => {
      event.preventDefault();
      this.setState({ showForm: true })
  }


  render(){
    return(
      
        <div id='herWork-box' className='row align-items-center pt-5'>
          <div id='herWork-content' className='col-md-12 pt-5 '>

            {/* Options Buttons */}
            {!this.state.showForm ?
            <div id='options-box' className='row justify-content-md-center pt-5 pb-5'>
              <div className='col-md-8'>


                <button className='btn btn-block button-light border-dark' onClick={this.handleShowForm}>COVID Questionaire</button>


              </div>
            </div>
    
            : null
            }

            {/* Balayage */}
            {this.state.showForm ?
            <div className='row justify-content-md-center'>
              <div className='col-md-12 '>

                <button className='btn btn-block border-dark' onClick={this.handleBackButton}>CLOSE</button>

              </div>
            </div>
            : null
            }
      
          </div>
        </div>  

      
    )
  }
}

export default Form;