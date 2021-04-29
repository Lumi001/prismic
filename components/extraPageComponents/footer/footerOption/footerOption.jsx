import Link from 'next/link';
import React from 'react';
import Social from '../../social/social';
import SocialButton from '../../social/socialButton/socialButton';
import styles from './footerOption.module.css';

const FooterOption = ({ text, href, address, last }) => {
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
                                {imgs.map(img => (
                                    <SocialButton key={Math.random()} img={`/footer/${img}.png`} />
                                ))}
                            </section>
                        </>
            }
        </div>
    );
};

export default FooterOption;