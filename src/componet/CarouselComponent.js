import Carousel from 'react-bootstrap/Carousel';
import React from "react";
import './Style.css'


const CarouselComponent = () => {
  return (
    <Carousel className='carousel'>
      <Carousel.Item>
      <div className="image-container">
        <img
          className="d-block w-100 "
          src="https://lucieernestova.com/wp-content/uploads/2014/05/BLOG-NOV3-580x300.jpg"  alt="First slide"
        />
        </div>
        <Carousel.Caption>
          <button className='text-white'>
          <span id='icon'><i className="fa-solid fa-arrow-down"></i>  </span>
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="image-container">
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?q=10&h=200"
          alt="Second slide"
        />
        </div>
       <Carousel.Caption>
          <button className='text-white'>
          <span id='icon'><i className="fa-solid fa-arrow-down"></i>  </span>
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="image-container">
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/space-background-realistic-starry-night-cosmos-shining-stars-milky-way-stardust-color-galaxy_1258-154643.jpg"
          alt="Third slide"
        />
        </div>
       <Carousel.Caption>
          <button className='text-white'>
          <span id='icon'><i className="fa-solid fa-arrow-down"></i>  </span>
          </button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
