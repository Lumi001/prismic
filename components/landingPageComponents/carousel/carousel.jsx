import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselItem from './carousel-item'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      id= "right"
      className={className}
      style={{ ...style, display: "flex", background: "#313131", width: "80px", height:"50px", alignItems:"center", justifyContent:"center"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      id="left"
      className={className}
      style={{ ...style, zIndex:1000, display: "flex", background: "#313131", width: "80px", height:"50px", alignItems:"center", justifyContent:"center"}}
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
      infinite: true,
      dots: true,
      autoplay: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
      // nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow />,
    };


    const { carousel} = this.props;
    return (
      <React.Fragment>        
      <Slider ref={c => (this.slider = c)} {...settings}>              
            {
    carousel.map((user,i) =>{
    return (     
           <CarouselItem
           title={carousel[i].heading&&carousel[i].heading[0]?carousel[i].heading[0].text:""} 
           content={carousel[i].text&&carousel[i].text[0]?carousel[i].text[0].text:""} 
           link={carousel[i]['link_text']&&carousel[i]['link_text'][0]?carousel[i]['link_text'][0].text:""} 
           href={carousel[i]['link_address']?carousel[i]['link_address'].url:""} 
           image={carousel[i].background_image?carousel[i].background_image.url:""}
           key={Math.random()} 
           />      
    )
})
        }  
              
            </Slider>
        
          <div className="circle-opt">
            <div className="offer-circle" onClick={this.previous}><svg width="13" height="25" viewBox="0 0 13 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id='previous' d="M12 1L2 11.3871L12 24" stroke="#E4E4E4" strokeWidth="2" />
            </svg>
            </div>

            <div className="offer-circle" onClick={this.next}><svg width="13" height="25" viewBox="0 0 13 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id='next' d="M0.999998 24L11 13.6129L1 0.999999" stroke="#E4E4E4" strokeWidth="2" />
            </svg>
            </div>
          </div>
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
    z-index: 1;
  }
  .offer-circle {
    cursor: pointer;
  }
  
  .circle-opt {
    position: absolute;
    top: 45%;
    left: 0;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
    width: 100%
  }
  
  .offer-circle:hover ~ svg{
    fill: black;
  }


  .button__bar {
  display: inline-block;
  vertical-align: middle;
  margin: auto;
  padding: 0;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 40px;
  width: 100%;
  text-align: center;
}

.button__bar li {
  list-style: none;
  cursor: pointer;
  display: inline-block;
  margin: 0 3px;
  padding: 0;
}

.button__bar li button {
  border: none;
  background: #D9D9D9;
  color: transparent;
  cursor: pointer;
  display: block;
  height: 8px;
  width: 25px;
  transition: width 1s;
}

.button__bar li.slick-active button {
  background-color: #313131;
  width: 40px
}

.button__bar li button:hover,
.button__bar li button:focus {
  background: #313131;
  outline: 0;
}
@media only screen and (max-width: 768px) {
  #left, #right{
    display: none !important;
  }
  .offer-circle {
    display: none;
  }
}
`}
        </style>
      </React.Fragment>

    );
  }
}

