import React, { Fragment } from 'react';        
// import './button.scss';

const Button = ({text, width, height, fontSize, secondary}) => {
    return (
        <Fragment>
            <button className={`btn ${secondary?'secondary':''}`} style={{width:`${width}`, height:`${height}`, fontSize:`${fontSize}`}}>{text}</button>
        </Fragment>
    );
};

export default Button;