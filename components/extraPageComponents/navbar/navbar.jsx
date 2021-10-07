import Link from 'next/link';
import styles from './navbar.module.css';
import NavbarItem from './navbarItem/navbarItem';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';

const Navbar = ({ navigation, links, navbarColour }) => {
    const [rightDropdown, setRightDropdown] = useState(false);
    const [scroll, setScroll] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY);
            // console.log(window.scrollY, window.screenY, window.pageYOffset);
        }
        window.addEventListener('scroll', handleScroll, { capture: true, passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    });

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
        <div className={styles.navbar} style={{ background: scroll > 70 ? navbarColour? "white" : "#38465e":"transparent" }}>
        {/* <div className={styles.navbar}> */}
        {/* {console.log(navigation)} */}
            <section className={styles.top}>
                <nav className={styles.left}>
                    <Link href="/">
                        <img src={navbarColour?navbarColour!=="third"?navigation.primary.logo.url:navigation.primary.third_image.url:navigation.primary.secondary_logo.url} alt="" />
                    </Link>
                </nav>
                <nav className={styles.right}>
                    {linksTemp.map(link => {
                        return (
                            <div className={styles.pc} key={Math.random()} >
                                {link === linksTemp[linksTemp.length - 1] ? <NavbarItem href={link.link_address} type="button" key={Math.random()} text={link?.link_text[0]?.text} /> : <NavbarItem key={Math.random()} href={link.link_address} type="link" text={link?.link_text[0]?.text} />}
                            </div>
                        )
                    })}
                    <img src={navbarColour?"/navbar/black-dropdown.png":"/navbar/dropdown.png"} onClick={() => toggleRightDropdown()} alt="" />
                </nav>
            </section>
            {rightDropdown && <section className={styles.bottom}>
                <nav className={styles.mobile}>
                    {linksTemp.map(link => {
                        return (
                            <div key={Math.random()} >
                                {link === linksTemp[linksTemp.length - 1] ? <NavbarItem href={link.link_address} type="button" key={Math.random()} text={link.link_text[0].text} /> : <NavbarItem key={Math.random()} href={link.link_address} type="link" text={link.link_text[0].text} />}
                            </div>
                        )
                    })}

                </nav>
            </section>}
        </div >
    );
};
const mapStateToProps = state => ({
    navbarColour: state.navbar.primary
})
export default connect(mapStateToProps)(Navbar);

