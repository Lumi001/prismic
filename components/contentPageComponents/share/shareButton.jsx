import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ShareButton = ({ img, href }) => {
    return (
        <React.Fragment>
            <Link href={href}>
                {
                    <img
                        src={img}
                        className="button"
                    />
                }
            </Link>
            {/* <button className="button">
        </button> */}
            <style jsx global>
                {`
          .button {
            width: 44px;
            height: 44px;
            border-radius: 50%;
            padding: 0%;
            border: 0.5px;
            cursor: pointer;
            margin: 25px 0px 25px 20px;
            background: transparent;
}
          `}
            </style>
        </React.Fragment>
    );
};

export default ShareButton;