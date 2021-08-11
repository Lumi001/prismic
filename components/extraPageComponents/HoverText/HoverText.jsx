import React, { useState } from 'react';
import styles from './HoverText.module.scss';

const HoverText = ({ text, ...rest }) => {
    const [textHover, setTextHover] = useState(false);
    return (
        <section className={styles.hover_text} {...rest}>
            {text.length>=60?
                <h3
                    onMouseOver={() => setTextHover(true)}
                    onMouseOut={() => setTextHover(false)}
                    style={{ cursor: "pointer" }}
                    className={`${textHover && styles.spill_over}`}
                    content={text}
                >

                    {text.slice(0,text.slice(0,60).lastIndexOf(" "))}
                    <span>
                    [...]
                    </span>
                    
                    {/* {textHover && <span>{text}</span>} */}

                </h3>
                :
                <h3>
                    {text}
                </h3>
            }

        </section>
    );
};

export default HoverText;