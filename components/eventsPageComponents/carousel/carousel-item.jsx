import React, {useRef} from 'react';

const CarouselItem = ({ date, title, location, link }) => {
  const video = useRef(null);
  const playCaption = useRef(null);
  function play () {
    video.current.play()  
    playCaption.current.style.display = "none"

  }
    return (
        <React.Fragment> 
            <div className="carousel">   
            <div className='carousel-text'>    
            <p className="date">{date}</p>
                <h3  className="title">{title}</h3>
                <div className="location">
      <div className="locationlogo"><svg width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.9245 17.1854C19.8938 15.2972 21 12.7368 21 10.0671C21 7.39739 19.8938 4.83697 17.9245 2.94873C16.9498 2.01391 15.7923 1.27233 14.5184 0.766376C13.2445 0.260419 11.879 0 10.5 0C9.121 0 7.75552 0.260419 6.48159 0.766376C5.20765 1.27233 4.05023 2.01391 3.07546 2.94873C1.10622 4.83697 0 7.39739 0 10.0671C0 12.7368 1.10622 15.2972 3.07546 17.1854L5.35682 19.3402L8.42113 22.1936L8.62062 22.3632C9.78304 23.2659 11.4854 23.2084 12.5804 22.1936L16.2326 18.7868L17.9245 17.1854ZM10.5 14.3752C9.3066 14.3752 8.16208 13.9208 7.31822 13.1121C6.47436 12.3034 6.00028 11.2065 6.00028 10.0628C6.00028 8.91905 6.47436 7.82217 7.31822 7.01343C8.16208 6.2047 9.3066 5.75036 10.5 5.75036C11.6934 5.75036 12.8379 6.2047 13.6818 7.01343C14.5256 7.82217 14.9997 8.91905 14.9997 10.0628C14.9997 11.2065 14.5256 12.3034 13.6818 13.1121C12.8379 13.9208 11.6934 14.3752 10.5 14.3752Z" fill="#FCFCFC"/>
</svg>
</div>
      <div className="locationtext">{location} </div>
      </div>
                <div className="link">
      <div className="linktext">{link} </div>
      <div className="linklogo"><svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.7071 8.70711C24.0976 8.31659 24.0976 7.68342 23.7071 7.2929L17.3431 0.928935C16.9526 0.538411 16.3195 0.538411 15.9289 0.928935C15.5384 1.31946 15.5384 1.95262 15.9289 2.34315L21.5858 8L15.9289 13.6569C15.5384 14.0474 15.5384 14.6805 15.9289 15.0711C16.3195 15.4616 16.9526 15.4616 17.3431 15.0711L23.7071 8.70711ZM-1.74846e-07 9L23 9L23 7L1.74846e-07 7L-1.74846e-07 9Z" fill="#FCFCFC"/>
</svg>

</div>
      </div>
                </div>
                <div class="video-container">
    <video muted id="vid" ref={video}>
    <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4#t=3" type="video/mp4" />
    </video>
    <div  ref={playCaption} className="caption" onClick={play} >
      <svg width="46" height="52" viewBox="0 0 46 52" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M44.5 24.268C45.8333 25.0378 45.8333 26.9623 44.5 27.7321L3.25001 51.5478C1.91667 52.3175 0.250001 51.3553 0.250001 49.8157L0.250003 2.1843C0.250004 0.644698 1.91667 -0.317552 3.25 0.452249L44.5 24.268Z" fill="#38465E"/>
</svg>

    </div>
</div>
        </div>    
        
        <style jsx global>
          {`
          .carousel {
              display: flex;
              align-items: flex-start;
              justify-content: center;
              width: 85%;
              color: #FCFCFC;
              margin: auto
          }
          .carousel-text {
            background-color: #5E25FE;
            padding: 10px 35px;
            width: 40%;
            height: 494px;
          }
          .carousel-vid {
            width: 52%
          }
          .date {
            font-size: 20px;
          }
          .title {
            font-size: 48px;
            width: 400px
          }
        .link {
        display: flex;
        font-weight: 800;
        font-size: 20px;
        margin-top: 120px;
        }
        .linktext {
        border-bottom: 1px solid #FCFCFC;
        padding-right: 5px;
        font-size: 20px;
        }
        .linklogo {
        margin-top: 4.5px;
        }
        .location {
        display: flex;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        }
        .locationtext {
        padding-left: 5px;
        font-size: 24px;
        }
        .locationlogo {
       
        }
        .video-container {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 494px;
          width: 100%;
          position: relative;
}

.video-container video {
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  z-index: 0;
}

/* Just styling the content of the div, the *magic* in the previous rules */
.video-container .caption {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  z-index: 1;
  border-radius: 50%;
  position: relative;
  background-color: white;
}

@media only screen and (max-width: 768px) {
  .carousel-text {
           display: none
          }
}
          `}
          </style>
        </React.Fragment>
    );
};

export default CarouselItem