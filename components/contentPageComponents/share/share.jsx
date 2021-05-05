import React from 'react';
import ShareButton from './shareButton'


const Share = ({ text, data }) => {
    const {image, title, host} = data


    const socials = [
        {
            image: "linkedin",
            url: `https://www.linkedin.com/shareArticle?url=${host}&title=${title[0].text}`
        },
        {
            image: "twitter",
            url: `https://twitter.com/share?url=${host}&text=${title[0].text}
            `
        },
        {
            image: "facebook",
            url: `https://www.facebook.com/sharer.php?u=${"host"}`
        },
        {
            image: "instagram",
            url: ""
        }
    ]
    return (
        <div className="social">
            {    console.log(title)
}
            <h1>{text}</h1>
            <section className="buttons">
                {socials.map(social => (
                    <ShareButton key={Math.random()} href={social.url} img={`/socials/${social.image}.png`} />
                ))}
            </section>

            <style jsx global>
                {`
          .social{
    display: flex;
    flex-direction: column;
    justify-content: center;
    // padding: 50px;
    background: #F5F5F5;
    width:150px;
    align-items:center;
}
.social h1,.social .buttons{
    // min-width: 100px;
    margin: 0px auto ;
    text-align: center;
}
.social buttons{
    display:flex;
    align-items:center;
    flex-direction: column;
    width: 44px;
    height: 44px;
}
.social h1{
    font-family: Avenir;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 204.6%;
/* or 49px */

letter-spacing: 0.01em;

color: #38465E;


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