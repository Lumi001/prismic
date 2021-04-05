import ProjectCard from '../../extraPageComponents/projectCard/projectCard';
import styles from './ourServices.module.css';
import Heading from '../../extraPageComponents/heading/heading';



const OurServices = ({ heading, items }) => {
    return (
        <div className={styles.container}>
            <div>
                <Heading heading={heading} />
                <section>
                    {items.map(item => {
                        return (
                            <ProjectCard icon={item.icon?item.icon.url:null} key={Math.random()} image={item.post_image.url} content={item.post_content[0].text} title={item.title[0].text} link={item.link_text||"VIEW CASE STUDY"} id={item.id} flip={items.indexOf(item) % 2 !== 0 ? true : false} />
                        )
                    })}
                </section>
            </div>
        </div>
    );
};

export default OurServices;