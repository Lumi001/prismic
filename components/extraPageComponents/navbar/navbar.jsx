import Link from 'next/link';
import styles from './navbar.module.css';
import NavbarItem from './navbarItem/navbarItem';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';

const Navbar = ({ navigation, links }) => { 
    const [rightDropdown, setRightDropdown] = useState(false);
    const [scroll, setScroll] = useState(0);
    const handleScroll = () => {
        setScroll(window.scrollY);
        console.log(window.scrollY,window.screenY,window.pageYOffset);
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll,{capture:true,passive:true});
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
        <div className={styles.navbar} style={{ background: scroll > 70 ? "white" : "transparent" }}>
            <section className={styles.top}>
                <nav className={styles.left}>
                    <Link href="/">
                        <img src={navigation.primary.logo.url} alt="" />
                    </Link>
                </nav>
                <nav className={styles.right}>
                    {linksTemp.map(link => {
                        return (
                            <div className={styles.pc} key={Math.random()} >
                                {link === linksTemp[linksTemp.length - 1] ? <NavbarItem href={link.link_address} type="button" key={Math.random()} text={link.link_text[0].text} /> : <NavbarItem key={Math.random()} href={link.link_address} type="link" text={link.link_text[0].text} />}
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
    isActive: state.app.modalIsActive,
    modalContent: state.app.modalContent,
    modalType: state.app.type,
    modalHasBeenShown: state.app.modalHasBeenShown,
    timeLastShown: state.app.timeLastShown,
    subscribed: state.app.subscribed,
  
  })
  const mapDispatchToProps = dispatch => ({
    setNavbarColour:mode=>dispatch(navbarContentAction(mode)),
    setModalContent: modal => dispatch(modalStatusAction(modal))
  })
  export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

