import Button from '../../extraPageComponents/button/button';
import Card from '../../extraPageComponents/card/card';
import Heading from '../../extraPageComponents/heading/heading';
// import styles from '../../../styles/Home.module.css';
import styles from './featuredArticles.module.css';



const FeaturedArticles = ({items,title,button_text}) => {
    return (
        <div className={styles.featured_articles}>
            {/* {console.log(items)} */}
            <Heading title={title} />
            <section className={styles.articles}>
                {items.map(card => <Card key={Math.random()} articleId={card.id} title={card.title[0].text} tag={card.category} content={card.article_content[0].text.substring(0,100)} img={card.article_image.url}
                />)}
            </section>
            {/* <Button text={button_text} icon="/button/cross.png" /> */}
        </div>
    );
};

export default FeaturedArticles;