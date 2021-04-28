import React, {useRef} from 'react';
import Button from "../../extraPageComponents/button/button";
import styles from "./carousel.module.css";

const CarouselItem = ({title, content, link, image }) => {
  const video = useRef(null);
  const playCaption = useRef(null);
  function play () {
    video.current.play()  
    playCaption.current.style.display = "none"

  }
    return ( 
    <React.Fragment> 
    <div className={styles.carousel}>
    <section className={styles.left}>
      <h1>{title}</h1>
      <p>{content}</p>
        <Button text={link} secondary href="#" />
      {/* <a>{link}<span><img src="/carousel/Arrow.png" alt="" /></span></a> */}
      {/* <span>
        </span> */}
    </section>
    <section className={styles.right}>
      <img src={image} alt="" />
    </section>
    </div>
</React.Fragment>
    );
};

export default CarouselItem