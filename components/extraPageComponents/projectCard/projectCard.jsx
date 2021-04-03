import styles from './projectCard.module.css';
import Link from 'next/link'



const ProjectCard = ({ image, title, content, id, link, flip, icon }) => {
    return (
        <div className={styles.container}>
            <div className={flip ? styles.project_card_flip : styles.project_card}>
                <section>
                    <img src={image} alt="" />
                </section>
                <section className={styles.text}>
                    {icon ? <img src={icon} alt="icon" /> : null}
                    <h3>{title}</h3>
                    <p>{content}</p>
                    <Link href={`/content/${id}`}>
                        <a>
                            {link}
                        </a>
                    </Link>
                </section>
            </div>
        </div>
    );
};

export default ProjectCard;