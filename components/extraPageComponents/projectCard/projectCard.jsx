import styles from './projectCard.module.css';
import Link from 'next/link'
import Button from '../button/button';



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
                    <Button secondary articleId={id} text={link} />
                </section>
            </div>
        </div>
    );
};

export default ProjectCard;