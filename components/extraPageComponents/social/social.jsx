import React from 'react';
import SocialButton from './socialButton/socialButton'
import styles from './social.module.css';
import Link from 'next/link';

const Social = ({ text,items }) => {
    // const imgs = [
    //     "linkedin", "twitter", "facebook"
    // ]
    return (
        <div className={styles.social}>
            <h1>{text}</h1>
            <section className={styles.buttons}>
                {items.map(item=>(
                    <section>
                    <Link href={item.link_address?item.link_address.url:"/error"}>
                        <a target="_blank">
                    <SocialButton key={Math.random()}  img={`/socials/${item.select_social_type?item.select_social_type.toLowerCase():""}.png`}/>
                        </a>
                    </Link>
                    </section>
                ))}
            </section>
        </div>
    );
};

export default Social;