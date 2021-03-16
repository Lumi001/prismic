import ProjectCard from './projectCard/projectCard';
import TitleAndSubTitle from '../titleAndSubTitle/titleAndSubTitle';
import styles from './BeenUpTo.module.css';



const BeenUpTo = ({heading, subHeading, items}) => {
    return (
        <div className={styles.container}>
            <div>
                <TitleAndSubTitle heading={heading} subHeading={subHeading} />
                    <section>
                        {items.map(item => {
                            return (
                                <ProjectCard key={Math.random()} image={item.image} content={item.content} title={item.title} link={item.link} href={item.href} flip={items.indexOf(item)%2!==0?true:false} />
                            )
                        })}
                </section>
            </div>
        </div>
    );
};

export default BeenUpTo;