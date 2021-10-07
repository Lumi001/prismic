
import dynamic from 'next/dynamic'
const HoverText = dynamic(
  () => import("../../../extraPageComponents/HoverText/HoverText"),
  {
    ssr: false,
  }
);
import styles from './teamCard.module.css';



const TeamCard = ({ image, title, content, services }) => {
    return (
        <div className={styles.team_card}>
            <img src={image} alt="" />
            <h3 className={services?styles.services_h3:null}>{title}</h3>
            <HoverText
            text={content}
            length={70}
            isP={true}
            />
        </div>
    );
};

export default TeamCard;