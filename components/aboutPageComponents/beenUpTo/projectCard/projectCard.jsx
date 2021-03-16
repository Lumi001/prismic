import styles from './projectCard.module.css';
import Link from 'next/link'



const ProjectCard = ({ image, title, content, href, link, flip }) => {
    return (
        <div className={styles.container}>
            <div className={flip?styles.project_card_flip:styles.project_card}>
                <section>
                    <img src={image} alt="" />
                </section>
                <section className={styles.text}>
                    <h3>{title}</h3>
                    <p>{content}</p>
                    <Link href={href}>
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