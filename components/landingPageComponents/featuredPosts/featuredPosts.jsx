import Button from '../../extraPageComponents/button/button';
import Card from '../../extraPageComponents/card/card';
import Heading from '../../extraPageComponents/heading/heading';
import styles from '../../../styles/Home.module.css';
import styles1 from './featuredPosts.module.css';
import ProjectCard from '../../extraPageComponents/projectCard/projectCard';



const FeaturedPosts = ({ items, title, button_text }) => {
    return (
        <div className={styles1.featured_posts}>
            <Heading title={title} />
            <section className={styles.posts}>
                {items.map(card => <ProjectCard key={Math.random()} title={card.title[0].text} content={card.post_content[0].text.substring(0, 100)} id={card.id} link={card.link_text||"Learn More"}
                    image={card.post_image.url} />)}
            </section>
            <Button text={button_text} icon="/button/cross.png" />
        </div>
    );
};

export default FeaturedPosts;