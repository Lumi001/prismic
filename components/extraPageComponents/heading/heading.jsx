import styles from './heading.module.css';

const Heading = ({title,fontSize}) => (
 <div className={styles.heading}>
    <h2 style={fontSize?{fontSize:fontSize}:null}>{title}</h2>
  </div> 
  )
  
  export default Heading;