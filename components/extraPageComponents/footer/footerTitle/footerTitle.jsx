import React from 'react';
import styles from './footerTitle.module.css';

const FooterTitle = ({text}) => {
    return (
        <div className={styles.title}>
            <h3>{text}</h3>
        </div>
    );
};
export default FooterTitle;