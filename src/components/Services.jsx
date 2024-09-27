import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'

const Services = () => {
  return (
    <Carousel 
      infiniteLoop
      autoPlay
      interval={1000}
      showArrows={true}
      showThumbs={false}
    >
      <div>
        
        <img src={img3} alt="no preview available" />
        <p className="legend">Full Stack</p>
      
      </div>
      <div>
        
        <img src={img4} alt="no preview available" />
        <p className="legend">Peer-to-Peer Support</p>
      
      </div>
      
    </Carousel>
  );
}

export default Services;
