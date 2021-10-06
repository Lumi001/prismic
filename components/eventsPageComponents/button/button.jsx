import styles from './button.module.css';
import Link from 'next/link'

const Button = ({ href, text, type, fill }) => {

    return (
        <Link href={href??"#"}>
            {type === "fill" ?
                <button className={styles.button}>
                    <span>{text}</span>
                    <img src="/black-arrow-right.svg" alt="black arrow" />
                </button> :
                <button className={styles.button2}>
                <span>{text}</span>
                <img src="/white-arrow-right.svg" alt=" white arrow" />
            </button>
}

                </Link>
    );
};

export default Button;