import styles from './navbarItem.module.css';
import Link from 'next/link'
import { connect } from 'react-redux';

const NavbarItem = ({ href, text, type,navbarColour }) => {
    return (
        <Link href={href??"#"}>
            {type === "link" ?
                <a className={navbarColour?styles.primary_item:styles.secondary_item}>
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

const mapStateToProps = state => ({
    navbarColour: state.navbar.primary
})
export default connect(mapStateToProps)(NavbarItem);