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
                    text: `LAGOS NIGERIA
                    30, Shakiru Anjorin Street, Road 39, Off
                    Admiralty Way,Lekki Phase 1, Lekki, Lagos,
                    Phone: +234 123 4456`,
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
                                <FooterTitle text={link.title} key={linksTemp.indexOf(link)} />
                                {
                                    link.links.map(each => {
                                        return <div key={link.links.indexOf(each)}>
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