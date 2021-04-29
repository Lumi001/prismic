import React from 'react';
import Prismic from 'prismic-javascript';
import { Client } from '../../../prismic-configuration';

import FooterOption from './footerOption/footerOption';
import FooterTitle from './footerTitle/footerTitle';
import styles from './footer.module.css'
// import './footer.scss'
const Footer = ({ links, footer_items }) => {

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
            address: true,
            links: [
                {
                    text: `LAGOS NIGERIA<br />
                    30, Shakiru Anjorin Street, Road 39, Off<br />
                    Admiralty Way,Lekki Phase 1, Lekki, Lagos,<br />
                    Phone: +234 123 4456`,
                }
            ]
        },
    ]
    return (
        <div className={styles.footer}>
            {/* {console.log(footer_items, "footer")} */}
            <section>
                {
                    footer_items.map(link => {
                        return (
                            <div key={Math.random()}>
                                <FooterTitle text={link.primary.footer_section_title[0]?link.primary.footer_section_title[0].text:null} />
                                {
                                    link.items.map(each => {
                                        // console.log(footer_items.indexOf(link), footer_items.length - 1)
                                        return <div key={Math.random()}>
                                            <FooterOption address={true} text={each.link_text} last={link.items.indexOf(each) === link.items.length - 1} href={footer_items.indexOf(link) !== footer_items.length - 1 ? each.link_address.url ? each.link_address.url : "#" : null} />
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