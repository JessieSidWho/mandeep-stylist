import React, { Component } from 'react';
// import Gallery from "react-photo-gallery";
// import Carousel, { Modal, ModalGateway } from "react-images";
// import { photos } from "../../images/photos";
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
import B from '../../images/B.jpeg';
import BT from '../../images/BT.jpeg';
import Creative from '../../images/Creative.jpeg';
import Correction from '../../images/Correction.jpeg';
import Keratin from '../../images/Keratin.jpeg';
import './herWork.css';

class HerWork extends Component {

    state = {
      showBalayage: false,
      showBleachTone: false,
      showCreativeColor: false,
      showColorCorrection: false,
      showKeratin: false
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


      this.setState({ showBalayage: false,
        showBleachTone: false,
        showCreativeColor: false,
        showColorCorrection: false,
        showKeratin: false,
       });
  }
  
  
  handleShowBalayage = event => {
      event.preventDefault();
      this.setState({ showBalayage: true })
  }

  handleShowBleachTone = event => {
    event.preventDefault();
    this.setState({ showBleachTone: true })
  }
  
  handleShowCreativeColor = event => {
    event.preventDefault();
    this.setState({ showCreativeColor: true })
  }
  
  handleShowColorCorrection = event => {
    event.preventDefault();
    this.setState({ showColorCorrection: true })
  }
  
  handleShowKeratin = event => {
    event.preventDefault();
    this.setState({ showKeratin: true })
  }
  
  // const [show, setShow] = useState(false);

  // handleClose = () => setShow(false);
  // handleShow = () => setShow(true);


  render(){
    return(
      
        <div id='herWork-box' className='row align-items-center pt-5'>
          <div id='herWork-content' className='col-md-12 pt-5 ' style={{minHeight: '100vh'}}>

            {/* Options Buttons */}
            {!this.state.showBalayage && !this.state.showBleachTone && !this.state.showColorCorrection && !this.state.showCreativeColor && !this.state.showKeratin ?
            <div id='options-box' className='row justify-content-md-center border pt-5 pb-5'>
              <div className='col-md-8'>

              {/* <Button variant="primary" onClick={handleShow}>
                Launch static backdrop modal
              </Button>
        
              <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  I will not close if you click outside me. Don't even try to press
                  escape key.
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary">Understood</Button>
                </Modal.Footer>
              </Modal> */}

                <div className='row '>
                  <div className='col-sm-4 '>
                    <p style={{fontSize: '1.5em'}}>Balayage</p>
                    <img className='p-2' src={B} alt='' width='68%'></img>
                  </div>

                  <div className='col-sm-4 '>
                    <p style={{fontSize: '1.5em'}}>Bleach + Tone</p>
                    <img className='p-2' src={BT} alt='' width='72%'></img>
                  </div>

                  <div className='col-sm-4 '>
                    <p style={{fontSize: '1.5em'}}>Creative Color</p>
                    <img className='p-2' src={Creative} alt='' width='60%'></img>
                  </div>
                </div>

                <div className='row'>
                  <div className='col-sm-6' >
                    <p style={{fontSize: '1.5em'}}>Color Correction</p>
                    <img className='p-2' src={Correction} alt='' width='70%'></img>
                  </div>

                  <div className='col-sm-6'>
                    <p style={{fontSize: '1.5em'}}>Keratin</p>
                    <img className='p-2' src={Keratin} alt='' width='70%'></img>
                  </div>
                </div>

              </div>
            </div>
    
            : null
            }

            {/* Balayage */}
            {this.state.showBalayage ?
            <div className='row justify-content-md-center border  '>
              <div className='col-md-6 '>

                <h1 className=''>HELLO HELLO</h1>

              </div>
            </div>
            : null
            }

            {/* Bleach + Tone */}
            {this.state.showBleachTone ?
            <div className='row justify-content-md-center border  '>
              <div className='col-md-6 '>

                <h1 className=''>HELLO HELLO</h1>

              </div>
            </div>
            : null
            }

            {/* Color Correction */}
            {this.state.showColorCorrection ?
            <div className='row justify-content-md-center border  '>
              <div className='col-md-6 '>

                <h1 className=''>HELLO HELLO</h1>

              </div>
            </div>
            : null
            }

            {/* Creative Color */}
            {this.state.showCreativeColor ?
            <div className='row justify-content-md-center border  '>
              <div className='col-md-6 '>

                <h1 className=''>HELLO HELLO</h1>

              </div>
            </div>
            : null
            }

            {/* Keratin */}
            {this.state.showKeratin ?
            <div className='row justify-content-md-center border  '>
              <div className='col-md-6 '>

                <h1 className=''>HELLO HELLO</h1>

              </div>
            </div>
            : null
            }
      
          </div>
        </div>  

      
    )
  }
}

export default HerWork;