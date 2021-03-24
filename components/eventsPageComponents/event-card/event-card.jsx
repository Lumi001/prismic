import styles from './event-card.module.css';


const EventCard = ({ date, title, type, link}) => {
    return (
        <div className={styles.card}>
            <h3>{date}</h3>
                <h2>{title}</h2>
            <section className={styles.bottom}>
                <img src={"/scrollCard/article.png"} alt="" />
                <img src={"/scrollCard/video.png"} alt="" />
            </section>
        </div>
    );
};

export default EventCard;