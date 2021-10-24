import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Card from '../card/card';
import PromotionCard from '../card/promotion-card/promotion-card';
import carouselStyles from './carousel.module.scss';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} ${carouselStyles.slickNext}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <img className="active" src='icons/right-arrow.svg' />
      <img className="disabled" src='icons/right-arrow-disabled.svg' />
    </button>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} ${carouselStyles.slickPrev}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <img className="active" src='icons/left-arrow.svg' />
      <img className="disabled" src='icons/left-arrow-disabled.svg' />
    </button>
  );
}


const SimpleSlider = () => {
    const settings = {
      infinite: false,
      speed: 1000,
      slidesToShow: 5,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
          }
        },
        {
          breakpoint: 768,
          settings: {
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
          }
        },
        {
          breakpoint: 480,
          settings: {
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
          }
        }
      ]
    };
  
  
    return (
  
        <div>
        <Slider {...settings}>
        <div>
          <div className={carouselStyles.cardWrapper}>
            <PromotionCard
              image="img/meats.svg"
              title="Beef Pack"
              description="30g fresh steak rib-eye"
              percentage={20}
              price={2500}
            />
        </div>
        </div>

        <div>
          <div className={carouselStyles.cardWrapper}>
          <PromotionCard
              image="img/meats.svg"
              title="Beef Pack"
              description="30g fresh steak rib-eye"
              percentage={20}
              price={2500}
            />
        </div>
        </div>

        <div>
          <div className={carouselStyles.cardWrapper}>
            <PromotionCard
              image="img/meats.svg"
              title="Beef Pack"
              description="30g fresh steak rib-eye"
              percentage={20}
              price={2500}
            />
        </div>
        </div>

        <div>
          <div className={carouselStyles.cardWrapper}>
            <PromotionCard
              image="img/meats.svg"
              title="Beef Pack"
              description="30g fresh steak rib-eye"
              percentage={20}
              price={2500}
            />
        </div>
        </div>

        <div>
          <div className={carouselStyles.cardWrapper}>
            <PromotionCard
              image="img/meats.svg"
              title="Beef Pack"
              description="30g fresh steak rib-eye"
              percentage={20}
              price={2500}
            />
        </div>
        </div>

          
        </Slider>
       
      </div>
    )
  }
  
  export default SimpleSlider
  