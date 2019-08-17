import React, { Component } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import pic1 from './../../../images/SalonIG/Pixel.jpg';
// import pic2 from './../../../images/SalonIG/Colors.jpg';
// import pic3 from './../../../images/SalonIG/Magenta.jpg';
// import pic4 from './../../../images/SalonIG/SuperFire.jpg';
import Gallery from 'react-photo-gallery';
import './salon.css';


class Salon extends Component {
    
    render() {
        // const { index, direction } = this.state;
        const photos = [
            {
              src: './../../../images/SalonIG/balayage.jpg',
              width: 4,
              height: 3
            },
            {
              src: '',
              width: 1,
              height: 1
            }
          ];

        return (
            <div className='row justify-content-sm-center pt-2 pb-5' >
                <div className='col-md-12 mt-5' style={{ height: '' }}>
                    <span className='display-3 pt-5 mb-0 pb-0'>Portfolio</span>

                    <Gallery photos={photos} />;

                    {/* <Carousel
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
                                height='30%'d
                                width='30%'
                            />
                        </Carousel.Item> */}

                    {/* <Carousel.Item>
                            <img
                                id='img'
                                className="mb-5 pb-5"
                                src={pic4}
                                alt="Second slide"
                                height='30%'
                                width='30%'
                            />
                        </Carousel.Item> */}

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

                    {/* <Carousel.Item>
                            <img
                                id='img'
                                className="mb-5 pb-5"
                                src={pic3}
                                alt="Forth slide"
                                height='30%'
                                width='30%'
                            />
                        </Carousel.Item>
                    </Carousel> */}
                </div>
            </div>
        );
    }
}

export default Salon;