import styles from './Intro.module.css';



const Intro = ({ title, content, link, image1, image2, image3 }) => {
    return (
        <div className={styles.container}>
            <div className={styles.intro}>
                {/* <button className={styles.buttonleft}>{`<`}</button>
            <button className={styles.buttonright}>{`>`}</button> */}
                <section className={styles.left}>
                    <h1>{title}</h1>
                    <p>{content}</p>
                    <a href="#">{link}</a>
                </section>
                <section className={styles.right}>
                    <section>
                        <img src={image1} alt="" />
                        <img src={image2} alt="" />
                    </section>
                    <img src={image3} alt="" />
                </section>
            </div>
        </div>
    );
};

export default Intro;



