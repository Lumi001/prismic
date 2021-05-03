import React, {useRef} from 'react';
import Button from '../button/button'

const CarouselItem = ({ date, title, location, link, img }) => {
  const video = useRef(null);
  const playCaption = useRef(null);
  function play() {
    video.current.play()  
    playCaption.current.style.display = "none"

  }
  function end() {
    playCaption.current.style.display = "flex"
  }
    return (
        <React.Fragment> 
            <div className="carousel"> 
            <div className='carousel-text'>    
            <p className="date">UPCOMING EVENT</p>
                <h3  className="head">The SERAS Awards 2021</h3>
                <div className="location">
      <div className="locationlogo"><svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.625 32.0938V13.875H40.375V32.0938C40.375 34.2901 39.5025 36.3964 37.9495 37.9495C36.3964 39.5025 34.2901 40.375 32.0938 40.375H8.90625C6.70993 40.375 4.60356 39.5025 3.05052 37.9495C1.49749 36.3964 0.625 34.2901 0.625 32.0938ZM27.1349 21.3215C27.1349 21.9791 27.3962 22.6097 27.8611 23.0747C28.3261 23.5397 28.9568 23.8009 29.6143 23.8009C30.2719 23.8009 30.9026 23.5397 31.3675 23.0747C31.8325 22.6097 32.0938 21.9791 32.0938 21.3215C32.0938 20.6639 31.8325 20.0333 31.3675 19.5683C30.9026 19.1033 30.2719 18.8421 29.6143 18.8421C28.9568 18.8421 28.3261 19.1033 27.8611 19.5683C27.3962 20.0333 27.1349 20.6639 27.1349 21.3215ZM27.1349 29.6028C27.1349 30.2603 27.3962 30.891 27.8611 31.356C28.3261 31.8209 28.9568 32.0822 29.6143 32.0822C30.2719 32.0822 30.9026 31.8209 31.3675 31.356C31.8325 30.891 32.0938 30.2603 32.0938 29.6028C32.0938 28.9452 31.8325 28.3145 31.3675 27.8495C30.9026 27.3846 30.2719 27.1233 29.6143 27.1233C28.9568 27.1233 28.3261 27.3846 27.8611 27.8495C27.3962 28.3145 27.1349 28.9452 27.1349 29.6028ZM18.0189 21.3215C18.0189 21.9791 18.2802 22.6097 18.7451 23.0747C19.2101 23.5397 19.8408 23.8009 20.4983 23.8009C21.1559 23.8009 21.7866 23.5397 22.2515 23.0747C22.7165 22.6097 22.9778 21.9791 22.9778 21.3215C22.9778 20.6639 22.7165 20.0333 22.2515 19.5683C21.7866 19.1033 21.1559 18.8421 20.4983 18.8421C19.8408 18.8421 19.2101 19.1033 18.7451 19.5683C18.2802 20.0333 18.0189 20.6639 18.0189 21.3215ZM18.0189 29.6028C18.0189 30.2603 18.2802 30.891 18.7451 31.356C19.2101 31.8209 19.8408 32.0822 20.4983 32.0822C21.1559 32.0822 21.7866 31.8209 22.2515 31.356C22.7165 30.891 22.9778 30.2603 22.9778 29.6028C22.9778 28.9452 22.7165 28.3145 22.2515 27.8495C21.7866 27.3846 21.1559 27.1233 20.4983 27.1233C19.8408 27.1233 19.2101 27.3846 18.7451 27.8495C18.2802 28.3145 18.0189 28.9452 18.0189 29.6028ZM8.91619 21.3215C8.91619 21.6471 8.98032 21.9695 9.10492 22.2703C9.22952 22.5711 9.41215 22.8445 9.64239 23.0747C9.87262 23.3049 10.146 23.4876 10.4468 23.6122C10.7476 23.7368 11.07 23.8009 11.3956 23.8009C11.7212 23.8009 12.0436 23.7368 12.3444 23.6122C12.6452 23.4876 12.9186 23.3049 13.1488 23.0747C13.379 22.8445 13.5617 22.5711 13.6863 22.2703C13.8109 21.9695 13.875 21.6471 13.875 21.3215C13.875 20.6639 13.6138 20.0333 13.1488 19.5683C12.6838 19.1033 12.0532 18.8421 11.3956 18.8421C10.738 18.8421 10.1074 19.1033 9.64239 19.5683C9.17741 20.0333 8.91619 20.6639 8.91619 21.3215ZM0.625 8.90625C0.625 6.70993 1.49749 4.60356 3.05052 3.05052C4.60356 1.49749 6.70993 0.625 8.90625 0.625H32.0938C34.2901 0.625 36.3964 1.49749 37.9495 3.05052C39.5025 4.60356 40.375 6.70993 40.375 8.90625V10.5625H0.625V8.90625Z" fill="#FFC017"/>
</svg>

</div>
      <div className="locationtext">12:23PM | 01-23-2021</div>
      </div>
                <div className="location">
      <div className="locationlogo"><svg width="40" height="45" viewBox="0 0 40 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M33.4484 33.69C37.0884 30.0481 39.1331 25.1098 39.1331 19.9608C39.1331 14.8118 37.0884 9.87351 33.4484 6.23165C31.6466 4.42866 29.5072 2.99838 27.1525 2.02254C24.7977 1.0467 22.2737 0.544434 19.7248 0.544434C17.1758 0.544434 14.6518 1.0467 12.2971 2.02254C9.9423 2.99838 7.80291 4.42866 6.00113 6.23165C2.36116 9.87351 0.316406 14.8118 0.316406 19.9608C0.316406 25.1098 2.36116 30.0481 6.00113 33.69L10.218 37.8459L15.8821 43.3492L16.2509 43.6763C18.3995 45.4174 21.5463 45.3065 23.5701 43.3492L30.3211 36.7785L33.4484 33.69ZM19.7248 28.2698C17.5189 28.2698 15.4033 27.3936 13.8435 25.8337C12.2837 24.2739 11.4074 22.1584 11.4074 19.9525C11.4074 17.7466 12.2837 15.6311 13.8435 14.0712C15.4033 12.5114 17.5189 11.6352 19.7248 11.6352C21.9307 11.6352 24.0462 12.5114 25.606 14.0712C27.1658 15.6311 28.0421 17.7466 28.0421 19.9525C28.0421 22.1584 27.1658 24.2739 25.606 25.8337C24.0462 27.3936 21.9307 28.2698 19.7248 28.2698Z" fill="#FFC017"/>
</svg>
</div>
      <div className="locationtext">Eko Hotel & Suites, VI</div>
      </div>
      <div className="link-f">
      <Button href={'asdf'} type="fill" key={Math.random()} text={"BOOK TICKET"} />
      <Button href={'asdf'}  key={Math.random()} text={"ABOUT SERAS"} />
   

</div>
      
                </div>
                <div className="video-container">
    <video muted id="vid" onEnded={end} ref={video}>
    <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4#t=3" type="video/mp4" />
    </video>
    <div  ref={playCaption} className="caption" onClick={play} >
      <svg width="46" height="52" viewBox="0 0 46 52" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M44.5 24.268C45.8333 25.0378 45.8333 26.9623 44.5 27.7321L3.25001 51.5478C1.91667 52.3175 0.250001 51.3553 0.250001 49.8157L0.250003 2.1843C0.250004 0.644698 1.91667 -0.317552 3.25 0.452249L44.5 24.268Z" fill="#F0F0F0"/>
</svg>

    </div>
</div>
        </div>    
        
        <style jsx global>
          {`
          .link-f{
            margin-top: 20%;
            display: flex;
          }
          .carousel {
              position: relative;
              margin-top: 15%;
              display: flex;
              align-items: flex-start;
              justify-content: space-between;
              width: 1200px;
              color: #FCFCFC;
              margin: auto;
              align-items: center;
              height:572px;
              z-index: 1000;
          }
          .carousel-text {
            padding: 10px 35px;
            width: 40%;
            height: 494px;
          }
          .carousel-vid {
            width: 52%
          }
          .date {
            font-size: 16px;
            color: #C8962A;
            font-family: Avenir;
            letter-spacing: 0.2em;
        
          }
          .head {
            font-size: 66px;
            letter-spacing: 0.01em;
            margin: 0;
            color: #FCFCFC;
            font-weight: bold;
          }
        .link {
        display: flex;
        margin-top: 10%;
        padding: 7px;
        border-bottom: 1px solid #FCFCFC;
        cursor: pointer;
        }
        .link1 {
        display: flex;
        color: black;
        margin-top: 10%;
        background-color: #F5F5F5;
        padding: 7px;
        border-radius: 5px;
        cursor: pointer;
        }
        .linktext {
        padding-right: 5px;
        font-size: 14px;
        }
        .linklogo {
        }
        .location {
        display: flex;
        align-items: center;
        font-weight: 600;
        font-size: 20px;
        margin-top: 25px;
        }
        .locationtext {
        padding-left: 25px;
        font-size: 24px;
        }
        .locationlogo {
       
        }
        .video-container {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 350px;
          width: 50%;
          position: relative;
          border-radius: 19px;
}

.video-container video {
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  z-index: 0;
  border-radius: 19px !important;
}
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
  border: 4px solid #F0F0F0;
  cursor: pointer;
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