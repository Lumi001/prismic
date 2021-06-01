import React, { useEffect, useState } from 'react';
import { Client } from '../prismic-configuration';
import Prismic from 'prismic-javascript';
import styles from '../styles/Home.module.css'
import Head from 'next/head';
import { navbarContentAction } from '../redux/navbar/navbar.actions';
import { connect } from 'react-redux';
import { RichText } from 'prismic-reactjs';
import ContactItems from '../components/contactPageComponents/contactItem/contactItem';
import ContactField from '../components/contactPageComponents/contactField/contactField';
import Button from '../components/extraPageComponents/button/button';


const Contact = ({ title, items, setNavbarColour }) => {
    useEffect(() => {
        setNavbarColour(true)
    })
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [message, setMessage] = useState("");
    return (
        <div className={styles.container}>
            <Head>
                <title>TruCSR - Contact</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Avenir:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
            </Head>
            <main className={styles.main}>
                <div className={styles.contact}>
                    <section className={styles.left}>
                        <h1>{title}</h1>
                        <ContactItems items={items} />
                    </section>
                    <section className={styles.right}>
                        <ContactField name="name" placeholder="Name" onChange={setName} />
                        <ContactField name="email" placeholder="Email" onChange={setEmail} />
                        <ContactField name="number" placeholder="Mobile Number" onChange={setNumber} />
                        <ContactField name="company_name" placeholder="Company Name" onChange={setCompanyName} />
                        <ContactField name="message" placeholder="Message" onChange={setMessage} />
                        <button type="submit">
                            <Button text="SEND MESSAGE" />
                        </button>
                    </section>
                </div>
            </main>
        </div>
    );
};
const mapDispatchToProps = dispatch => ({
    setNavbarColour: mode => dispatch(navbarContentAction(mode)),
})
export default connect(null, mapDispatchToProps)(Contact);

export async function getServerSideProps() {
    const contactObject = await Client().query(
        Prismic.Predicates.at("document.type", "contact"), { pageSize: 1 }
    )
    const contact= contactObject.results[0].data
    // console.log(contact)
    return {
        props: {
            title:contact.title&&contact.title[0]?contact.title[0].text:"Contact.",
            items:contact.body
        }
    }
}