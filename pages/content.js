import Prismic from 'prismic-javascript';
import { Client } from '../prismic-configuration';
import Head from 'next/head';
import styles from '../styles/Home.module.css'


const Content = ({  }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>TruCSR - About Us</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Avenir:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
            </Head>

            <main className={styles.main}>
                
            </main>
        </div>
    );
};

export default Content;
