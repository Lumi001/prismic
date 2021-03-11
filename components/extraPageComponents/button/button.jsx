import React, { Fragment } from 'react';
import styles from './button.module.css';
// import './button.scss';

const Button = ({ text, width, height, fontSize, secondary, icon }) => {
    return (
        <Fragment>
            <button className={styles.button} style={{ width: `${width}`, height: `${height}`, fontSize: `${fontSize}` }}>
                {text}
                {
                    icon ?
                        <span><img src={icon} alt="" /></span>
                        : null
                }
            </button>
        </Fragment>
    );
};

export default Button;