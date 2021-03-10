import styles from './scrollCard.module.css';
import Image from 'next/image';

const ScrollCard = ({date,content,type}) => {
    return (
        <div className={styles.card}>
            <small>{date}</small>
            <section className={styles.bottom}>
            <p>{content}</p>
            <img src={type==="video"?"/scrollCard/video.png":"/scrollCard/article.png"} alt=""/>
            </section>
        </div>
    );
};

export default ScrollCard;