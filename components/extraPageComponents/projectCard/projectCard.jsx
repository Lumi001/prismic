import styles from './projectCard.module.css';
import Link from 'next/link'
import Button from '../button/button';



const ProjectCard = ({ image, title, content, id, link, flip, icon, isCaseStudy }) => {
    return (
        <div className={styles.container}>
            <div className={flip ? styles.project_card_flip : styles.project_card}>
                <section className={styles.images}>
                    <img src={image} alt="" className={styles.case  } />
                    <img src="projectCard/backdrop.png" alt="" className={styles.backdrop  } />
                </section>
                <section className={styles.text}>
                    {icon ? <img src={icon} alt="icon" /> : null}
                    <h3>{title}</h3>
                    <p>{content.substring(0,100)}</p>
                    <Button secondary articleId={id} text={link} isCaseStudy={isCaseStudy} />
                </section>
            </div>
        </div>
    );
};

export default ProjectCard;