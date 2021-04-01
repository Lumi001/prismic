import Button from '../../extraPageComponents/button/button';
import Card from '../../extraPageComponents/card/card';
import Heading from '../../extraPageComponents/heading/heading';
import styles from '../../../styles/Home.module.css';
import styles1 from './featuredArticles.module.css';



const FeaturedArticles = ({items,title,button_text}) => {
    return (
        <div className={styles1.featured_articles}>
            <Heading title={title} />
            <section className={styles.articles}>
                {items.map(card => <Card key={Math.random()} title={card.title[0].text} tag={card.tag} content={card.article_content[0].text.substring(0,100)}
                />)}
            </section>
            <Button text={button_text} icon="/button/cross.png" />
        </div>
    );
};

export default FeaturedArticles;