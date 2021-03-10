import ScrollCard from './scrollCard/scrollCard';
import styles from './scrollCardList.module.css'
const ScrollCardList = () => {
    return (
        <div className={styles.scroll}>
            <section className={styles.top}>
                <h1>Our projects in pictures and videos</h1>
                <a href="#">VIEW MORE PROJECTS<span><img src="/button/arrow.png" alt=""/></span></a>
            </section>
            <section className={styles.bottom}>
                <ScrollCard date="DEC 2020" content="Save the Children Initiative powered by Chevron" type="video"/>
                <ScrollCard date="DEC 2020" content="Save the Children Initiative powered by Chevron" type="video"/>
                <ScrollCard date="DEC 2020" content="Save the Children Initiative powered by Chevron" type="video"/>
                <ScrollCard date="DEC 2020" content="Save the Children Initiative powered by Chevron" type="video"/>
                <ScrollCard date="DEC 2020" content="Save the Children Initiative powered by Chevron" type="video"/>
                <ScrollCard date="DEC 2020" content="Save the Children Initiative powered by Chevron" type="video"/>
            </section>
        </div>
    );
};

export default ScrollCardList;