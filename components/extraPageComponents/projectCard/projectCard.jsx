import styles from './projectCard.module.css';
import Link from 'next/link'
import Button from '../button/button';
import HoverText from '../HoverText/HoverText';



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
                    <HoverText
                    text={title}
                    length={60}
                    />
                    {isNotShort&&
                    <HoverText
                    text={content}
                    length={100}
                    isP={true}
                    />}
                    <Button secondary href={href??"#"} articleId={id} text={link} isCaseStudy={isCaseStudy} />
                </section>
            </div>
        </div>
    );
};

export default ProjectCard;