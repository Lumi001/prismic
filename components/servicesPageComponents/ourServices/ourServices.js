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
                            <ProjectCard icon={item.icon?item.icon.url:null} key={Math.random()} image={item.service_image?item.service_image.url:""} content={item.service_description&&item.service_description[0]?item.service_description[0].text:""} title={item.service_title&&item.service_title[0]?item.service_title[0].text:""} isNotShort href={item.link_address?item.link_address.url:"#"} link={item.link_text?item.link_text:"WORK WITH US"} flip={items.indexOf(item) % 2 !== 0 ? true : false} isNotAPost={true} isCaseStudy={false} />
                        )
                    })}
                </section>
            </div>
        </div>
    );
};

export default OurServices;