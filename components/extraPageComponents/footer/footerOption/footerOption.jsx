import Link from 'next/link';
import React from 'react';
import styles from './footerOption.module.css';

const FooterOption = ({ text, href }) => {
    return (
        <div className={styles.option}>
            {
                href?
                <Link href={href}>
                    <p>{text}</p>
                </Link>
                :
                <p>{text}</p>
            }
        </div>
    );
};

export default FooterOption;