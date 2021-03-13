import Link from 'next/link';
import styles from './navbar.module.css';
import NavbarItem from './navbarItem/navbarItem';
import { useState } from 'react';

const Navbar = ({ logo, links }) => {
    const [rightDropdown, setRightDropdown] = useState(false);
    const toggleRightDropdown = () => {
        if (rightDropdown) {
            return setRightDropdown(false)
        }
        return setRightDropdown(true)
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
            <section className={styles.top}>
                <nav className={styles.left}>
                    <Link href="/">
                        <img src={logo} alt="" />
                    </Link>
                </nav>
                <nav className={styles.right}>
                    {linksTemp.map(link => {
                        return (
                            <div className={styles.pc}>
                                {link === linksTemp[linksTemp.length - 1] ? <NavbarItem href={link.link} type="button" key={Math.random()} text={link.text} /> : <NavbarItem key={Math.random()} href={link.link} type="link" text={link.text} />}
                            </div>
                        )
                    })}
                    <img src="/navbar/dropdown.png" onClick={() => toggleRightDropdown()} alt="" />

                </nav>
            </section>
            {rightDropdown && <section className={styles.bottom}>
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
        </div >
    );
};
export default Navbar;