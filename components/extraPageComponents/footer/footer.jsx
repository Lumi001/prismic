import React from 'react';
import FooterOption from './footerOption/footerOption';
import FooterTitle from './footerTitle/footerTitle';
import styles from './footer.module.css'
// import './footer.scss'
const Footer = (links) => {

    let linksTemp = [
        {
            title: "CUSTOMER SERVICE",
            links: [
                {
                    text: "Footer Text",
                    href: "/"
                },
                {
                    text: "Footer Text",
                    href: "/"
                },
            ]
        },
        {
            title: "CUSTOMER SERVICE",
            links: [
                {
                    text: "Footer Text",
                    href: "/"
                },
                {
                    text: "Footer Text",
                    href: "/"
                },
                {
                    text: "Footer Text",
                    href: "/"
                },
            ]
        },
        {
            title: "CUSTOMER SERVICE",
            links: [
                {
                    text: "Footer Text",
                    href: "/"
                },
                {
                    text: "Footer Text",
                    href: "/"
                },
                {
                    text: "Footer Text",
                    href: "/"
                },
                {
                    text: "Footer Text",
                    href: "/"
                },
            ]
        },
        {
            title: "",
            links: [
                {
                    text: "Footer Text",
                }
            ]
        },
    ]
    return (
        <div className={styles.footer}>
            <section>
                {
                    linksTemp.map(link => {
                        return (
                            <div>
                                <FooterTitle text={link.title} />
                                {
                                    link.links.map(each => {
                                        return <div>
                                            <FooterOption text={each.text} href={each.href ? each.href : null} />
                                        </div>
                                    }


                                    )

                                }
                            </div>
                        )
                    })
                }
            </section>
        </div>
    );
};

export default Footer;