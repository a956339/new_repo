import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import "../Banner/Banner.css"
const Banner = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      <div className='hero-Banner'>
        <img src="https://images.pexels.com/photos/163046/welcome-to-our-home-welcome-tablet-an-array-of-163046.jpeg?auto=compress&cs=tinysrgb&w=600" alt=''/>
      </div>
      <div  className='hero-Banner'>
        <img src="https://images.unsplash.com/photo-1669003154471-b72fe01a899d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=''/>
      </div>
      <div  className='hero-Banner'>
        <img src="https://media.istockphoto.com/id/1471521270/photo/a-female-hand-and-a-shopping-cart-icon-concept-of-starting-a-sale-online-shopping-increasing.webp?s=1024x1024&w=is&k=20&c=mPPNMkRW8J3kToKjBoPSPZeyVQlKvjQGB744X2wPVcA=" alt=''/>
      </div>
    </Slider>
  )
}

export default Banner;