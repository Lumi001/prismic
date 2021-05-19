import { RichText } from 'prismic-reactjs';
import TeamCard from '../meetTheTeam/teamCard/teamCard';
import styles from './ourStory.module.css';



const OurStory = ({ title, content, image, title2,content2 }) => {
    return (
        <div className={styles.container} >
            <div className={styles.our_story}>
                <section className={styles.left}>
                    <h3>{title}</h3>
                    <p><RichText render={content}/></p>
                </section>
                <section className={styles.right}>
                    {/* <img src={image} alt="" />
                    <h3>{title2}</h3>
                    <p>{content2}</p> */}
                                <TeamCard image={image} content={content2} title={title2}/>
                    
                   </section>
            </div>
        </div>
    );
};

export default OurStory;