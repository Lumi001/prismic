import styles from './socialButton.module.css'
import Image from 'next/image';

const SocialButton = ({img}) => {
    // data
    return (
        <button className={styles.button}>
            {
                <img src={img} alt=""/>
            }
        </button>
    );
};

export default SocialButton;