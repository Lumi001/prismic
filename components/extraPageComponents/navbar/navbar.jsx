import Link from 'next/link';
import styles from './navbar.module.css';
import NavbarItem from './navbarItem/navbarItem';

const Navbar = ({ logo, links }) => {
    const toggleRightDropdown = () => {
        if (rightDropdown) {
            return rightDropdownDispatch(false)
        }
        return rightDropdownDispatch(true)
    }
    // const toggleLeftDropdown = () => {
    //     if (leftDropdown) {
    //         return leftDropdownDispatch(false)
    //     }
    //     return leftDropdownDispatch(true)
    // }
    let linksTemp = [
        {
            link: "/",
            text: "Services"
        },
        {
            link: "/",
            text: "About Us"
        },
        {
            link: "/",
            text: "CSR Academy"
        },
        {
            link: "/",
            text: "Publications"
        },
        {
            link: "/",
            text: "Events"
        },
        {
            link: "/",
            text: "CONTACT US"
        },

    ]
    return (
        <div className={styles.navbar}>
            <nav className={styles.left}>
                <Link href="/">
                    <img src="/navbar/logo.png" alt="" />
                </Link>
            </nav>
            <nav className={styles.right}>
                {linksTemp.map(link => {
                    return (
                        <div>
                            {link === linksTemp[linksTemp.length - 1] ? <NavbarItem href={link.link} type="button" key={Math.random()} text={link.text} /> : <NavbarItem key={Math.random()} href={link.link} type="link" text={link.text} />}
                        </div>
                    )
                })}
                <button></button>
                {rightDropdown && <section className={styles.toggle}>
                    <nav className={styles.mobile}>
                        {linksTemp.map(link => {
                            return (
                                <div>
                                    <NavbarItem key={Math.random()} href={link.link} type="link" text={link.text} />
                                </div>
                            )
                        })}

                    </nav>
                </section>}
            </nav>
        </div>
    );
};
export default Navbar;