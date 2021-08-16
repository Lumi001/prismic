import React, { useState } from 'react';
import styles from './HoverText.module.scss';
import { RichText } from 'prismic-reactjs';

const HoverText = ({ text, length, isP, ...rest }) => {
    const [textHover, setTextHover] = useState(false);
    return (
        <section className={styles.hover_text} {...rest}>
            {text.length>=length?
            !isP?
                <h3
                    onMouseOver={() => setTextHover(true)}
                    onMouseOut={() => setTextHover(false)}
                    style={{ cursor: "pointer" }}
                    className={`${textHover && styles.spill_over}`}
                    content={text}
                >

                    {text.slice(0,text.slice(0,length).lastIndexOf(" "))}
                    <span>
                    {` [...]`}
                    </span>
                    
                    {/* {textHover && <span>{text}</span>} */}

                </h3>
                :
                <p
                    onMouseOver={() => setTextHover(true)}
                    onMouseOut={() => setTextHover(false)}
                    style={{ cursor: "pointer" }}
                    className={`${textHover && styles.spill_over}`}
                    content={text}
                >

                    {text.slice(0,text.slice(0,length).lastIndexOf(" "))}
                    <span>
                    {` [...]`}
                    </span>
                    
                    {/* {textHover && <span>{text}</span>} */}

                </p>

                :
                <h3>
                    {text}
                </h3>
            }

        </section>
    );
};

export default HoverText;