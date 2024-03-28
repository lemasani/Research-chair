import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Slide1 from '.././assets/Slide/1.png'
import Slide2 from '.././assets/Slide/2.png'
import Slide3 from '.././assets/Slide/3.png'
import Slide4 from '.././assets/Slide/4.png'

export default function Slider() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
    return (
        <>
      <Carousel activeIndex={index} onSelect={handleSelect} className='carousel' >
        <Carousel.Item className='carousel-item'>
          <img src={Slide1} alt=""/>
         
        </Carousel.Item>
        <Carousel.Item className='carousel-item'>
        <img src={Slide2} alt=""/>
          
        </Carousel.Item>
        <Carousel.Item className='carousel-item'>
            <img src={Slide3} alt=""/>
            
        </Carousel.Item>
        <Carousel.Item className='carousel-item'>
            <img src={Slide4} alt=""/>
           
        </Carousel.Item>
      </Carousel>
        </>
    );
}
