import Link from 'next/link';
import React, { Fragment } from 'react';
import styles from './button.module.css';
// import './button.scss';

const Button = ({ text, width, height, fontSize, secondary, icon, articleId,href,isCaseStudy }) => {
    return (
        <Fragment>
            {
                !secondary ?
                    <button className={styles.button} style={{ width: `${width}`, height: `${height}`, fontSize: `${fontSize}` }}>
                        {text}
                        {
                            icon ?
                                <span><img src={icon} alt="" /></span>
                                : null
                        }
                    </button> :
                    <button className={styles.secondary_button} style={{ width: `${width}`, height: `${height}`, fontSize: `${fontSize}` }}>
                        <Link href={articleId?isCaseStudy?`/caseStudy/${articleId}`:`/content/${articleId}`:href}>
                            <a className={styles.linkWrapper}>
                                <span>
                                    {text}
                                </span>
                                <img src={!icon?"/black-arrow-right.svg":icon} alt="Right black arrow" />
                            </a>
                        </Link>
                    </button>
            }
        </Fragment>
    );
};

export default Button;