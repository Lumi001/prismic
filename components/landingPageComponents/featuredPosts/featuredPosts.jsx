import Button from '../../extraPageComponents/button/button';
import Card from '../../extraPageComponents/card/card';
import Heading from '../../extraPageComponents/heading/heading';
import styles from '../../../styles/Home.module.css';
import styles1 from './featuredPosts.module.css';
import ProjectCard from '../../extraPageComponents/projectCard/projectCard';



const FeaturedPosts = ({ items, title, button_text }) => {
    return (
        <div className={styles1.featured_posts}>
            <Heading title={title?title:""} />
            <section className={styles1.posts}>
                {items.map(card => <Card key={Math.random()} title={card.title&&card.title[0]?card.title[0].text:""} content={card.post_content&&card.post_content[0]?card.post_content[0].text.substring(0, 100):""} articleId={card.id} link_text={card.link_text||"VIEW CASE STUDY"} isCaseStudy={true}
                    img={card.post_image?card.post_image.url:""} />)}
            </section>
            {/* <Button text={button_text} icon="/button/cross.png" /> */}
        </div>
    );
};

export default FeaturedPosts;