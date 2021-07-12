import React from "react";
import { Carousel } from 'react-bootstrap';

const Hero = () => (
  <div>
  <Carousel style={{margin:"20px"}}>
  <Carousel.Item style={{height:'200px'}}>
    <img
      className="d-block w-100"
      src="https://d2kektcjb0ajja.cloudfront.net/images/posts/feature_images/000/000/072/large-1466557422-feature.jpg?1466557422"
      alt="First slide"
    />
 
  </Carousel.Item>
  <Carousel.Item style={{height:'200px'}}>
    <img
      className="d-block w-100"
      src="https://www.cinemasterpieces.com/videos2019/starwarstop2019m.jpg"
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item style={{height:'200px'}}>
    <img
      className="d-block w-100"
      src="https://cdn.shopify.com/s/files/1/0747/3829/products/mHP0170_1024x1024.jpeg?v=1571444283​​​​​​​"
      alt="Third slide"
    />

  
  </Carousel.Item>
</Carousel>
</div>
);

export default Hero;
