import React, { useState } from 'react';
import styles from './HoverText.module.scss';
import { RichText } from 'prismic-reactjs';

const HoverText = ({ text, length, isP, ...rest }) => {
    const [textHover, setTextHover] = useState(false);
    const mediaQuery = window.matchMedia('(min-width: 992px)')
    return (
        <section className={styles.hover_text} {...rest}>
            {text.length>=length?
            !isP?
                <h3
                    onMouseOver={() => setTextHover(true)}
                    onMouseOut={() => setTextHover(false)}
                    onTouch={()=>setTextHover(!textHover)}
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
                    onMouseOver={() => mediaQuery.matches&&setTextHover(true)}
                    onMouseOut={() => mediaQuery.matches&&setTextHover(false)}
                    onClick={()=>setTextHover(!textHover)}
                    style={{ cursor: "pointer" }}
                    className={`${textHover && styles.spill_over} ${styles.isP}`}
                    content={mediaQuery.matches && text}
                >

                    {/* {mediaQuery.matches&&text.slice(0,text.slice(0,length).lastIndexOf(" "))} */}
                    {!mediaQuery.matches?!textHover?text.slice(0,text.slice(0,length).lastIndexOf(" ")):text:text.slice(0,text.slice(0,length).lastIndexOf(" "))}
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