import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CarouselItem from "./carousel-item";
import styles from './carousel.module.scss';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", position: "absolute",
      zIndex: "2", marginRight: "37px"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",position: "absolute",
          zIndex: "2", marginLeft: "37px"}}
      onClick={onClick}
    />
  );
}

const SimpleSlider = ({items, date, title, link_text, articleId}) => {
  // console.log(date)
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    pauseOnHover: true
  };

  return (

    <div className={styles.carousel_wrapper}>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index}>
            <CarouselItem
            key={index}
              image={item.patner_img.url}
            />
          </div>
        
        ))}
      </Slider>
      
      <style jsx global>
          {`
.slick-dots {
  display: none !important;
    /* position: relative; */
    /* z-index: 2; */
    margin-bottom: 100px;
}

.slick-next:before {
  display: none !important;
  position: relative;
  z-index: 2;
  content: '→';
  color: black;
  margin-right: 100px;
}
.slick-prev:before {
  display: none !important;
  content: '←';
  color: black;
}

.button__bar li.slick-active button {
    opacity: .75;
    color: #000
}

.slick-slider:hover  .slick-dots{
  display: block !important;
}
.slick-slider:hover  .slick-prev:before{
  display: block !important;
}
.slick-slider:hover  .slick-next:before{
  display: block !important;
}
.slick-slider{
  //width: 450px;
  cursor: pointer;
}
          `}
      </style>
    </div>
  )
}

export default SimpleSlider
