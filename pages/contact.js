import React, { useEffect, useState } from 'react';
import { Client } from '../prismic-configuration';
import Prismic from 'prismic-javascript';
import styles from '../styles/Home.module.css'
import Head from 'next/head';
import { navbarContentAction } from '../redux/navbar/navbar.actions';
import { connect } from 'react-redux';
import { RichText } from 'prismic-reactjs';
import { Form, Formik } from 'formik';
import ContactItems from '../components/contactPageComponents/contactItem/contactItem';
import {ContactField} from '../components/contactPageComponents/contactField/contactField';
import Button from '../components/extraPageComponents/button/button';
import ContactSelect from '../components/contactPageComponents/contactSelect/contactSelect';
import ContactSchema from '../validation/contact'
import router from'next/router';

const Contact = ({ title,recipientEmail, items, setNavbarColour }) => {
    useEffect(() => {
        setNavbarColour(true)
    })
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [message, setMessage] = useState("");
    const [additionalMessage, setAdditionalMessage] = useState("");
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
                        <Formik
                            initialValues={{
                                email: '',
                                name: '',
                                companyName: '',
                                additionalMessage: '',
                                number: ''
                            }}
                            onSubmit={()=>{
                                console.log(recipientEmail)
                                fetch(`${router.basePath}/api/sendToEmail`,{
                                    body:JSON.stringify({email:recipientEmail}),
                                    headers:{
                                        'Content-Type':'application/json',
                                    },
                                    method: "Post"
                                })
                                .then(data=>data.json())
                                .then(data=>console.log(data))
                            }}
                            validationSchema={ContactSchema}
                            validateOnBlur
                            validateOnChange
                        >
                            {({ handleSubmit, handleChange, errors, values }) => (
                            <Form onSubmit={handleSubmit}>
                                <ContactField name="name" value={values.name} error={errors.name} placeholder="Name" onChange={handleChange}/>
                                <ContactField name="email" value={values.email} error={errors.email} placeholder="Email" onChange={handleChange}/>
                                <ContactField name="number" value={values.number} error={errors.number} placeholder="Mobile Number" onChange={handleChange}/>
                                <ContactField name="companyName" value={values.companyName} error={errors.companyName} placeholder="Company Name" onChange={handleChange}/>
                                {/* <ContactField name="message" value={values.} error={errors.} placeholder="Message" onChange={handleChange}/>*/}
                                <ContactSelect name="message" placeholder="Message" onChange={handleChange}/>
                                <ContactField isNotRequired={true} type="textarea" name="additionalMessage" value={values.additionalMessage} error={errors.additionalMessage} placeholder="Additional Message" onChange={handleChange}/>
                                    <Button type="submit" onClick={()=>handleSubmit} text="SEND MESSAGE" />
                            </Form>
                            )}
                        </Formik>
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
    const contact = contactObject.results[0].data
    // console.log(contact)
    return {
        props: {
            title: contact.title && contact.title[0] ? contact.title[0].text : "Contact.",
            recipientEmail:contact.email&&contact.email[0]?contact.email[0].text:"",
            items: contact.body
        }
    }
}