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
                            <ProjectCard icon={item.icon.url} key={Math.random()} image={item.project_image.url} content={item.project_description[0].text} title={item.project_title[0].text} link={item.link_text} href={item.link_address['url'] || "/"} flip={items.indexOf(item) % 2 !== 0 ? true : false} />
                        )
                    })}
                </section>
            </div>
        </div>
    );
};

export default OurServices;