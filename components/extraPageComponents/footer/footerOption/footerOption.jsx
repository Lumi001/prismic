import Link from 'next/link';
import React from 'react';
import Social from '../../social/social';
import SocialButton from '../../social/socialButton/socialButton';
import styles from './footerOption.module.css';

const FooterOption = ({ text, href, address, last, socials }) => {
    const imgs = [
        "twitter", "facebook", "linkedin"
    ]
    return (
        <div className={styles.option}>
            {
                href ?
                    <Link href={href}>
                        <p className={styles.option_text}>{text}</p>
                    </Link>
                    :
                    !last ?
                        <address className={styles.option_text}>{text}</address>
                        :
                        <>
                            <address>{text}</address>
                            <section className={styles.buttons}>
                                {socials.map(item => (
                                    <Link key={Math.random()} href={item.link_address ? item.link_address.url : "/error"}>
                                        <a target="_blank">
                                            <SocialButton key={Math.random()} img={`/footer/${item.select_social_type ? item.select_social_type.toLowerCase() : ""}.png`} />
                                        </a>
                                    </Link>
                                ))}
                            </section>
                        </>
            }
        </div>
    );
};

export default FooterOption;