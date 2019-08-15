import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pic1 from './../../../images/SalonIG/Pixel.jpg';
// import pic2 from './../../../images/SalonIG/Colors.jpg';
import pic3 from './../../../images/SalonIG/Magenta.jpg';
import pic4 from './../../../images/SalonIG/SuperFire.jpg';
import './salon.css';

class Salon extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            index: 0,
            direction: null,
        };
    }

    handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction,
        });
    }

    render() {
        const { index, direction } = this.state;

        return (
            <div className='row justify-content-sm-center pt-2' >
                <div className='col-md-12 mt-5' style={{height: ''}}>
                    <span className='display-3 pt-5 mb-0 pb-0'>Portfolio</span>
                    <Carousel
                        className=''
                        activeIndex={index}
                        direction={direction}
                        onSelect={this.handleSelect}
                    >
                        <Carousel.Item>
                            <img
                                id='img'
                                className="mb-5 pb-5"
                                src={pic1}
                                alt="First slide"
                                height='30%'
                                width='30%'
                            />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                id='img'
                                className="mb-5 pb-5"
                                src={pic4}
                                alt="Second slide"
                                height='30%'
                                width='30%'
                            />
                        </Carousel.Item>

                        {/* <Carousel.Item>
                            <img
                                id='img'
                                className="mb-5 pb-5"
                                src={pic2}
                                alt="Third slide"
                                height='30%'
                                width='30%'
                            />
                        </Carousel.Item> */}

                        <Carousel.Item>
                            <img
                                id='img'
                                className="mb-5 pb-5"
                                src={pic3}
                                alt="Forth slide"
                                height='30%'
                                width='30%'
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        );
    }
}

export default Salon;