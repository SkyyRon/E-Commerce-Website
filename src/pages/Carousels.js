import React from 'react';
import { Carousel } from '@sefailyasoz/react-carousel';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './Carousel.css';


import bannerImage5 from "../assets/ig2.png"
import bannerImage6 from "../assets/ig3.png"
import bannerImage7 from "../assets/ig6.png"
import bannerImage8 from "../assets/Beige and Purple Modern Stylish Fashion E-commerce Instagram Post Templates.png"
import bannerImage9 from "../assets/img.png"
const CarouselC = () => {
  const CarouselData = [
    {
      
      
      image: bannerImage5,
    },
    {
     
   
      image: bannerImage6,
    },
    {
    
    
      image: bannerImage7,
    },
    {
   
     
      image: bannerImage8,
    },
    {
      
      
      image: bannerImage9,
    },
  ];

  return (
    <Carousel
      data={CarouselData}
      autoPlay={true}
      rightItem={<FaArrowRight />}
      leftItem={<FaArrowLeft />}
      animationDuration={100}
      headerTextType="black"
      subTextType="white"
      size="medium"
    />
  );
};

export default CarouselC;
