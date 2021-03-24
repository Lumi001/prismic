import React from 'react';
import CarouselItem from '../carousel/carousel-item'



const Carousel= ({ date, title, location }) => {
    return (
        <React.Fragment> 
        <CarouselItem date="March 28, 2021" title="The 14th Edition
of  SERAS" location="Eko Convention Center, VI" link="RSVP"/>    
        
        <style jsx global>
          {`
          `}
          </style>
        </React.Fragment>
    );
};
export default Carousel