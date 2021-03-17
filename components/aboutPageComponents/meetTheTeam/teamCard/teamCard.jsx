import styles from './teamCard.module.css';



const TeamCard = ({ image, title, content }) => {
    return (
        <div className={styles.team_card}>
            <img src={image} alt="" />
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    );
};

export default TeamCard;