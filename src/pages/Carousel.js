import React from 'react';
import { Carousel } from '@sefailyasoz/react-carousel';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './Carousel.css';
import bannerImage from "../assets/Brown and Beige Minimalist Fashion Banner (3).png"
import bannerImage1 from "../assets/Brown and Beige Minimalist Fashion Banner (4).png"
import bannerImage2 from "../assets/Brown and Beige Minimalist Fashion Banner (7).png"
import bannerImage3 from "../assets/Brown and Beige Minimalist Fashion Banner.png"
import bannerImage4 from "../assets/Brown and Beige Minimalist Fashion Banner (5).png"
const CarouselComponent = () => {
  const CarouselData = [
    {
      
      
      image: bannerImage,
    },
    {
     
   
      image: bannerImage1,
    },
    {
    
    
      image: bannerImage2,
    },
    {
   
     
      image: bannerImage3,
    },
    {
      
      
      image: bannerImage4,
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

export default CarouselComponent;
