import React from 'react';
import ShareButton from './shareButton'


const Share = ({ text }) => {
    const imgs = [
        "linkedin", "twitter", "facebook", "instagram"
    ]
    return (
        <div className="social">
            <h1>{text}</h1>
            <section className="buttons">
                {imgs.map(img=>(
                    <ShareButton key={Math.random()}  img={`/socials/${img}.png`}/>
                ))}
            </section>
             
        <style jsx global>
          {`
          .social{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 50px;
    background: #F5F5F5;
}
.social h1,.social .buttons{
    min-width: 100px;
    margin: 0px 25px ;
}
.social .buttons{
    display: flex;
    flex-direction: column;
}
@media screen and (max-width: 999px) {
    .social{
        padding: 10px;
        display: flex;
        flex-direction: column;
    }
    .social h1{
        font-size: 1.5rem;
        text-align: center;
    }
    .social h1,.social .buttons{
        margin: 5px auto;
    }
}
          
          `}
          </style>
        </div>
    );
};

export default Share;