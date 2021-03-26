import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselItem from '../carousel/carousel-item'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", background: "#E4E4E4", width: "50px", height:"50px", alignItems:"center", justifyContent:"center"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", background: "#E4E4E4", width: "50px", height:"50px", alignItems:"center", justifyContent:"center"}}
      onClick={onClick}
    />
  );
}


export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      infinite: false,
      dots: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1524,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            // dots: true
          }
        },
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            // dots: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            // dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };


    return (
      <React.Fragment>      
        
         
            <Slider ref={c => (this.slider = c)} {...settings}>              
              <div>
                 <CarouselItem date="March 28, 2021" title="The 14th Edition
                 of  SERAS" location="Eko Convention Center, VI" link="RSVP"/> 
                 </div>               
              <div>
                 <CarouselItem date="March 28, 2021" title="The 14th Edition
                 of  SERAS" location="Eko Convention Center, VI" link="RSVP"/> 
                 </div>               
              <div>
                 <CarouselItem date="March 28, 2021" title="The 14th Edition
                 of  SERAS" location="Eko Convention Center, VI" link="RSVP"/> 
                 </div>               
              
            </Slider>
        
          {/* <div className="circle-opt">
            <div className="offer-circle" onClick={this.previous}><svg width="13" height="25" viewBox="0 0 13 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id='previous' d="M12 1L2 11.3871L12 24" stroke="#E4E4E4" strokeWidth="2" />
            </svg>
            </div>

            <div className="offer-circle" onClick={this.next}><svg width="13" height="25" viewBox="0 0 13 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id='next' d="M0.999998 24L11 13.6129L1 0.999999" stroke="#E4E4E4" strokeWidth="2" />
            </svg>
            </div>
          </div> */}
        <style jsx global>
          {`
       
.offer-circle {
    display: flex;
    width: 38px;
    height: 38px;
    justify-content: center;
    align-items: center;
    background-color: #313131;
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.05);
  }
  .offer-circle svg {
    cursor: pointer;
  }
  
  .circle-opt {
    display: flex;
    z-index: 1;
    padding: 14px 0px 129px 0px;
    width: 100%
  }
  
  .circle-opt :hover {
    fill: #0E82F8;
  }
`}
        </style>
      </React.Fragment>

    );
  }
}

