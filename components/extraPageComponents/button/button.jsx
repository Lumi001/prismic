import Link from 'next/link';
import React, { Fragment } from 'react';
import styles from './button.module.css';
// import './button.scss';

const Button = ({ text, width, height, fontSize, secondary, icon, articleId,href,isCaseStudy,onClick }) => {
    return (
        <Fragment>
            {
                !secondary ?
                    <button className={styles.button} style={{ width: `${width}`, height: `${height}`, fontSize: `${fontSize}` }} onClick={onClick?()=>onClick():null}>
                        {text}
                        {
                            icon ?
                                <span><img src={icon} alt="" /></span>
                                : null
                        }
                    </button> :
                        <Link href={articleId?isCaseStudy?`/caseStudy/${articleId}`:`/content/${articleId}`:href}>
                            <a className={styles.linkWrapper}>
                    <button className={styles.secondary_button} style={{ width: `${width}`, height: `${height}`, fontSize: `${fontSize}` }}>
                                <span>
                                    {text}
                                </span>
                                <img src={!icon?"/black-arrow-right.svg":icon} alt="Right black arrow" />
                    </button>
                            </a>
                        </Link>
            }
        </Fragment>
    );
};

export default Button;