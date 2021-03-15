import styles from './scrollCard.module.css';
import Image from 'next/image';

const ScrollCard = ({date,title,type}) => {
    return (
        <div className={styles.card}>
            <h3 >{date}</h3>
            <section className={styles.bottom}>
            <p>{title}</p>
            <img src={type==="video"?"/scrollCard/video.png":"/scrollCard/article.png"} alt=""/>
            </section>
        </div>
    );
};

export default ScrollCard;