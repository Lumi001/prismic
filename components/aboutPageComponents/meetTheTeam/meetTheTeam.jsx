import styles from './meetTheTeam.module.css';
import TeamCard from './teamCard/teamCard';



const MeetTheTeam = ({items,title}) => {
    return (
        <div className={styles.container}>
            <div className={styles.meet_the_team}>
                    <h3 className={styles.title}>{title}</h3>
                    <section>
                        {items.map(item=>{
                            return(
                                <TeamCard image={item.image} content={item.content} title={item.title}/>
                            )
                        })}
                    </section>
            </div>
        </div>        
    );
};

export default MeetTheTeam;