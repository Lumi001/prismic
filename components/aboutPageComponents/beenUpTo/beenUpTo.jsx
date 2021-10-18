import ProjectCard from '../../extraPageComponents/projectCard/projectCard';
import TitleAndSubTitle from '../titleAndSubTitle/titleAndSubTitle';
import styles from './beenUpTo.module.css';



const BeenUpTo = ({heading, subHeading, items}) => {
    return (
        <div className={styles.been_up_to_container}>
            <div>
                <TitleAndSubTitle heading={heading?heading:""} subHeading={subHeading?subHeading:""} align="left" />
                    <section>
                        {items.map(item => {
                            return (
                                <ProjectCard key={Math.random()} image={item.post_image?item.post_image.url:""} content={item.post_content&&item.post_content[0]?item.post_content[0].text:""} title={item.title&&item.title[0]?item.title[0].text:""} link={item.link_text?item.link_text:"VIEW CASE STUDY"} flip={items.indexOf(item)%2!==0?false:false} id={item.id}/>
                            )
                        })}
                </section>
            </div>
        </div>
    );
};

export default BeenUpTo;