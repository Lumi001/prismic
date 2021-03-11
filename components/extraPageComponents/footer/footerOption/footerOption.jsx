import Link from 'next/link';
import React from 'react';
import Social from '../../social/social';
import SocialButton from '../../social/socialButton/socialButton';
import styles from './footerOption.module.css';

const FooterOption = ({ text, href }) => {
    const imgs = [
        "twitter", "facebook", "linkedin"
    ]
    return (
        <div className={styles.option}>
            {
                href ?
                    <Link href={href}>
                        <p>{text}</p>
                    </Link>
                    :
                    <>
                        <p>{text}</p>
                        <section className={styles.buttons}>
                            {imgs.map(img => (
                                <SocialButton img={`/footer/${img}.png`} />
                            ))}
                        </section>
                    </>
            }
        </div>
    );
};

export default FooterOption;