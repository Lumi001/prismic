import Image from 'next/image';
import React from 'react';

const ShareButton = ({img}) => {
    return (
        <React.Fragment>
        <button className="button">
            {
                <img src={img} alt=""/>
            }
        </button>
        <style jsx global>
          {`
          .button {
            width: 44px;
            height: 44px;
            border-radius: 50%;
            padding: 0%;
            border: 0.5px;
            cursor: pointer;
            margin: 0px 0px 0px 20px;
            background: transparent;
}
          `}
          </style>
            </React.Fragment>
    );
};

export default ShareButton;