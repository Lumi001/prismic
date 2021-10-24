import React from 'react';
import styles from "./carousel.module.scss";

const CarouselItem = ({image}) => {

    return ( 
    <> 
        <div className={styles.carousel} style={{backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat", backgroundImage:`url(${image})`}}>
           
        </div>
    </>
    );
};

export default CarouselItem