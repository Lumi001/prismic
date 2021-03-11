import ScrollCard from './scrollCard/scrollCard';
import styles from './scrollCardList.module.css'
// const ScrollCardList = () => {
//     return (
//         <div className={styles.scroll}>
//             <section className={styles.top}>
//                 <h1>Our projects in pictures and videos</h1>
//                 <a href="#">VIEW MORE PROJECTS</a>
//             </section>
//             <section className={styles.bottom}>
//                 <ScrollCard date="DEC 2020" content="Save the Children Initiative powered by Chevron" type="video"/>
//                 <ScrollCard date="DEC 2020" content="Save the Children Initiative powered by Chevron" type="video"/>
//                 <ScrollCard date="DEC 2020" content="Save the Children Initiative powered by Chevron" type="video"/>
//                 <ScrollCard date="DEC 2020" content="Save the Children Initiative powered by Chevron" type="video"/>
//                 <ScrollCard date="DEC 2020" content="Save the Children Initiative powered by Chevron" type="video"/>
//                 <ScrollCard date="DEC 2020" content="Save the Children Initiative powered by Chevron" type="video"/>
//             </section>
//         </div>
//     );
// };

// export default ScrollCardList;


import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class ScrollCardList extends Component {
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
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: false,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
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
      <div className={styles.bottom} style= {{ width: 1300, display: "flex", flexDirection: "column"}}>  
        <Slider ref={c => (this.slider = c)} {...settings}>
          <div key={1}>
          <ScrollCard date="DEC 2020" content="Save the Children Initiative powered by Chevron" type="video"/>          </div>
          <div key={2}>
          <ScrollCard date="DEC 2020" content="Save the Children Initiative powered by Chevron" type="video"/>          </div>
          <div key={3}>
          <ScrollCard date="DEC 2020" content="Save the Children Initiative powered by Chevron" type="video"/>          </div>
          <div key={4}>
          <ScrollCard date="DEC 2020" content="Save the Children Initiative powered by Chevron" type="video"/>          </div>
          <div key={5}>
          <ScrollCard date="DEC 2020" content="Save the Children Initiative powered by Chevron" type="video"/>          </div>
          <div key={6}>
          <ScrollCard date="DEC 2020" content="Save the Children Initiative powered by Chevron" type="video"/>          </div>
        </Slider>

        <div className="circle-opt">
    <div className="offer-circle" ><svg onClick={this.previous} width="13" height="25" viewBox="0 0 13 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id='previous' d="M12 1L2 11.3871L12 24" stroke="#E4E4E4" stroke-width="2"/>
</svg>

</div>

    <div className="offer-circle"><svg onClick={this.next} width="13" height="25" viewBox="0 0 13 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id='next' d="M0.999998 24L11 13.6129L1 0.999999" stroke="#E4E4E4" stroke-width="2"/>
</svg>
</div>
</div>
      </div>
    <style jsx global>
{`
.offer-circle {
    display: flex;
    margin-left: 15px;
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
    justify-content: space-between;
    // padding: 14px 0px 129px 0px;
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

