import ProjectCard from '../../extraPageComponents/projectCard/projectCard';
import TitleAndSubTitle from '../titleAndSubTitle/titleAndSubTitle';
import styles from './beenUpTo.module.css';



const BeenUpTo = ({heading, subHeading, items}) => {
    return (
        <div className={styles.container}>
            <div>
                <TitleAndSubTitle heading={heading} subHeading={subHeading} />
                    <section>
                        {items.map(item => {
                            return (
                                <ProjectCard key={Math.random()} image={item.post_image.url} content={item.post_content[0].text} title={item.title[0].text} link={item.link_text} href={item.link_address||"/"} flip={items.indexOf(item)%2!==0?true:false} />
                            )
                        })}
                </section>
            </div>
        </div>
    );
};

export default BeenUpTo;