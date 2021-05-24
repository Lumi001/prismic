import styles from './meetTheTeam.module.css';
import TeamCard from './teamCard/teamCard';



const MeetTheTeam = ({items,title}) => {
    return (
        <div className={styles.container}>
            <div className={styles.meet_the_team}>
                    <h3 className={styles.title}>{title?title:""}</h3>
                    <section>
                        {items.map(item=>{
                            return(
                                <TeamCard image={item.image?item.image.url:""} content={item.member_role&&item.member_role[0]?item.member_role[0].text:""} title={item.member_name&&item.member_name[0]?item.member_name[0].text:""}/>
                            )
                        })}
                    </section>
            </div>
        </div>        
    );
};

export default MeetTheTeam;