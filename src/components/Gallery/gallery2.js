import React from 'react';
import './gallery.css';
import Carousel from "./Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Gallery2 = () => {
    return (
        <div id='gallery' className='row justify-content-md-center'>
            <div className='col-md-6'>
            <Carousel />

            </div>
        </div>
    )
}

export default Gallery2;