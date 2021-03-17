import styles from './navbarItem.module.css';
import Link from 'next/link'

const NavbarItem = ({ href, text, type }) => {
    return (
        <Link href={href}>
            {type === "link" ?
                <a className={styles.item}>
                    {text}
                </a>
                :
                <button className={styles.button}>
                    <span>{text}</span>
                    <img src="/white-arrow-right.svg" alt="Right white arrow" />
                </button>
            }
        </Link>
    );
};

export default NavbarItem;