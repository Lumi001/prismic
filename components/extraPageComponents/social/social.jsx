import React from 'react';
import SocialButton from './socialButton/socialButton'
import styles from './social.module.css';

const Social = ({ text }) => {
    const imgs = [
        "linkedin", "twitter", "facebook", "instagram"
    ]
    return (
        <div className={styles.social}>
            <h1>{text}</h1>
            <section className={styles.buttons}>
                {imgs.map(img=>(
                    <SocialButton img={`/socials/${img}.png`}/>
                ))}
            </section>
        </div>
    );
};

export default Social;