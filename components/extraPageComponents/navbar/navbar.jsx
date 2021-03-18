import Link from 'next/link';
import styles from './navbar.module.css';
import NavbarItem from './navbarItem/navbarItem';
import { useEffect, useState } from 'react';

const Navbar = ({ navigation, links }) => {
    const [rightDropdown, setRightDropdown] = useState(false);
    // const [scroll, setScroll] = useState(0);
    // const handleScroll = () => {
    //     setScroll(window.pageYOffset);
    //     console.log(scroll);
    // }
    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // });

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
    let linksTemp = navigation.items

    return (
        <div className={styles.navbar} style={{ background: "transparent" }}>
            <section className={styles.top}>
                <nav className={styles.left}>
                    <Link href="/">
                        <img src={navigation.primary.logo.url} alt="" />
                    </Link>
                </nav>
                <nav className={styles.right}>
                    {linksTemp.map(link => {
                        return (
                            <div className={styles.pc}>
                                {link === linksTemp[linksTemp.length - 1] ? <NavbarItem href={link.link_address.link || "/"} type="button" key={Math.random()} text={link.link_text[0].text} /> : <NavbarItem key={Math.random()} href={link.link_address.link || "/"} type="link" text={link.link_text[0].text} />}
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
                                {link === linksTemp[linksTemp.length - 1] ? <NavbarItem href={link.link_address.link || "/"} type="button" key={Math.random()} text={link.link_text[0].text} /> : <NavbarItem key={Math.random()} href={link.link_address.link || "/"} type="link" text={link.link_text[0].text} />}
                            </div>
                        )
                    })}

                </nav>
            </section>}
        </div >
    );
};
export default Navbar;

