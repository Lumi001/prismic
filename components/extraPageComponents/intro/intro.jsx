import Link from 'next/link';
import Button from '../button/button';
import styles from './intro.module.css';



const Intro = ({ title, content, link, image1, image2, image3, href, background }) => {
    return (
        <div className={styles.container} style={background ? { background: background } : null}>
            <div className={styles.intro}>
                {/* <button className={styles.buttonleft}>{`<`}</button>
            <button className={styles.buttonright}>{`>`}</button> */}
                <section className={styles.left}>
                    <h1>{title}</h1>
                    <p>{content}</p>
                        <Button text={link} href={href} icon="/introAbout/arrow.png" secondary />
                </section>
                <section className={styles.right}>
                    {image2 ?
                        <section>
                            <img src={image1} alt="" className={styles.img} />
                            <img src={image2} alt="" className={styles.img} />
                        </section>
                        :
                        <img style={{ width: '100%' }} src={image1} alt="" />
                    }
                    {image3 ?
                        <img src={image3} alt="" className={styles.img}/>
                        : null}
                </section>
            </div>
        </div>
    );
};

export default Intro;



