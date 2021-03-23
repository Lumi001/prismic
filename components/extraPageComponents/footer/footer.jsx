import React from 'react';
import Prismic from 'prismic-javascript';
import { Client } from '../../../prismic-configuration';

import FooterOption from './footerOption/footerOption';
import FooterTitle from './footerTitle/footerTitle';
import styles from './footer.module.css'
// import './footer.scss'
const Footer = (links, footer_items) => {
    console.log(footer_items)

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
            <section>
                {
                    linksTemp.map(link => {
                        return (
                            <div>
                                <FooterTitle text={link.title} key={linksTemp.indexOf(link)} />
                                {
                                    link.links.map(each => {
                                        return <div key={link.links.indexOf(each)}>
                                            <FooterOption address={link.address || false} text={each.text} href={each.href ? each.href : null} />
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

export async function getServerSideProps() {
    const footer = await Client().query(
        Prismic.Predicates.at("document.type", "footer")
    )

    return {
        props: {
          footer_items: footer.results,
         
        }
    }
}