import styles from './projectCard.module.css';
import Link from 'next/link'
import Button from '../button/button';



const ProjectCard = ({ image, title, content, id, link, flip, icon, isCaseStudy,href,isNotShort }) => {
    return (
        <div className={styles.container}>
            <div className={flip ? styles.project_card_flip : styles.project_card}>
                <section className={styles.images}>
                    <img src={image} alt="" className={styles.case  } />
                    <img src="projectCard/backdrop.png" alt="" className={styles.backdrop  } />
                </section>
                <section className={styles.text}>
                    {icon ? <img src={icon} alt="icon" className={styles.icon} /> : null}
                    <h3>{title}</h3>
                    {isNotShort&&<p>{content.length>250?content.substring(0,250):content}</p>}
                    <Button secondary href={href} articleId={id} text={link} isCaseStudy={isCaseStudy} />
                </section>
            </div>
        </div>
    );
};

export default ProjectCard;