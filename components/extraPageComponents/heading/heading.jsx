import styles from './heading.module.css';

const Heading = ({title}) => (
  <div className={styles.heading}>
    <h1>{title}</h1>
  </div>
  )
  
  export default Heading;