import styles from './button.module.css';


const Button = ({text}) =>(
  <Button className={styles.button}>
    {text}
  </Button>
)
export default Button;