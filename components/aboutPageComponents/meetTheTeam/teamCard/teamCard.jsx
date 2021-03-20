import styles from './teamCard.module.css';



const TeamCard = ({ image, title, content, services }) => {
    return (
        <div className={styles.team_card}>
            <img src={image} alt="" />
            <h3 className={services?styles.services_h3:null}>{title}</h3>
            <p>{content}</p>
        </div>
    );
};

export default TeamCard;