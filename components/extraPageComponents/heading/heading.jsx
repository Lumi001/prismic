import styles from './heading.module.css';

const Heading = ({title}) => (
  <div className={styles.heading}>
    <h2>{title}</h2>
  </div>
  )
  
  export default Heading;