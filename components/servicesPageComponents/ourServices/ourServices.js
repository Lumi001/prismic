import ProjectCard from '../../extraPageComponents/projectCard/projectCard';
import styles from './ourServices.module.css';
import Heading from '../../extraPageComponents/heading/heading';



const OurServices = ({ heading, items }) => {
    return (
        <div className={styles.services_container}>
            <div>
                <Heading title={heading} />
                {console.log(heading)}
                <section className={styles.card_list}>
                    {items.map(item => {
                        return (
                            <ProjectCard icon={item.icon?item.icon.url:null} key={Math.random()} image={item.post_image?item.post_image.url:""} content={item.post_content?item.post_content[0].text:""} title={item.title?item.title[0].text:""} link={item.link_text?item.link_text:"VIEW CASE STUDY"} id={item.id} flip={items.indexOf(item) % 2 !== 0 ? true : false} isCaseStudy={true} />
                        )
                    })}
                </section>
            </div>
        </div>
    );
};

export default OurServices;