import styles from './ourStory.module.css';



const OurStory = ({ title, content, content2, image }) => {
    return (
        <div className={styles.container} >
            <div className={styles.our_story}>
                <section className={styles.left}>
                    <h3>{title}</h3>
                    <p>{content}</p>
                    <p>{content2}</p>
                </section>
                <section className={styles.right}>
                    <img src={image} alt="" />
                   </section>
            </div>
        </div>
    );
};

export default OurStory;