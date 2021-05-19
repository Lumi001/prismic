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
        }
    ]
    return (
        <div className="social">
            {    console.log(title)
}
            <h3>{text}</h3>
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
    background: #fff;
    width:150px;
    align-items:center;
}
.social h3,.social .buttons{
    // min-width: 100px;
    margin: 0px auto ;
    text-align: center;
}
.social .buttons{
    display:flex;
    align-items:center;
    flex-direction: column;
    width: 44px;
}
.social h3{
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
        padding: 0px 10px 0px 0px;
        display: flex;
        flex-direction: column;
        width:fit-content !important;
    }
    .social h3{
        font-size: 18px;
        text-align: center;
    }
    .social h3,.social .buttons{
        width:fit-content !important;
        margin: 5px auto;
    }
}
          
          `}
            </style>
        </div>
    );
};

export default Share;