import styles from './card.module.css';

const Card = ({title,tag,content,img}) => (
  <div className={styles.card}>
    <img src={img} alt="" />
    <small>{tag}</small>
    <h3 >{title}</h3>
    <p>{content}</p>
  </div>
  )
  
  export default Card;