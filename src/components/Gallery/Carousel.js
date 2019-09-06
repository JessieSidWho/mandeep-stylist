import React from "react";
import { Carousel } from "react-responsive-carousel";
import pic1 from '../../images/SalonIG/balayage.jpg';
import pic2 from '../../images/SalonIG/Fire.jpg';
import pic3 from '../../images/SalonIG/Magenta.jpg';
import pic4 from '../../images/SalonIG/Rainbow.jpg';
// import pic5 from '../../images/g5.jpg';
// import pic6 from '../../images/g6.jpg';
// import pic7 from '../../images/g7.jpg';
// import pic8 from '../../images/g8.jpg';
// import pic9 from '../../images/g9.jpg';
// import pic10 from '../../images/g10.jpg';
// import pic11 from '../../images/g11.jpg';
// import pic12 from '../../images/g12.jpg';
// import pic13 from '../../images/g13.jpg';
// import pic14 from '../../images/g14.jpg';
// import pic15 from '../../images/g15.jpg';

export default () => (
  <Carousel showThumbs={false} showIndicators={false} autoPlay dynamicHeight>
    <div>
      <img src={pic1} alt='' />
      
    </div>
    <div>
      <img src={pic3} alt='' />
      
    </div>
    <div>
      <img src={pic4} alt='' />
      
    </div>
    <div>
      <img src={pic2} alt='' />
      
    </div>
    {/* <div>
      <img src={pic5} alt='' />
      
    </div>
    <div>
      <img src={pic6} alt='' />
      
    </div>
    <div>
      <img src={pic7} alt='' />
      
    </div>
    <div>
      <img src={pic8} alt='' />
      
    </div>
    <div>
      <img src={pic9} alt='' />
      
    </div>
    <div>
      <img src={pic10} alt='' />
      
    </div>
    <div>
      <img src={pic11} alt='' />
      
    </div>
    <div>
      <img src={pic12} alt='' />
      
    </div>
    <div>
      <img src={pic13} alt='' />
      
    </div>
    <div>
      <img src={pic14} alt='' />
      
    </div>
    <div>
      <img src={pic15} alt='' />
      
    </div> */}
  </Carousel>
);
