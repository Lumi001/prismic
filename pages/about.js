import Head from 'next/head';
import Intro from '../components/aboutPageComponents/intro/intro';
import OurStory from '../components/aboutPageComponents/ourStory/ourStory';
import MeetTheTeam from '../components/aboutPageComponents/meetTheTeam/meetTheTeam'
import WhatWeDo from '../components/aboutPageComponents/whatWeDo/whatWeDo'
import styles from '../styles/Home.module.css'
import BeenUpTo from '../components/aboutPageComponents/beenUpTo/beenUpTo';
import BrandsAndPartners from '../components/aboutPageComponents/brandsAndPartners/brandsAndPartners';
// import styles from './About.module.css';

const intro = {
    title: `We are a 
    results-driven
    company`,
    content: `Nothing excites us like an opportunity to help our clients make those key decisions that marries their business ideals and sustainability in a way helps them innovate in the areas of new products, ideas and service that keeps them ahead of competition.`,
    link: 'WORK WITH US',
    image1: '/introAbout/image1.png',
    image2: '/introAbout/image2.png',
    image3: '/introAbout/image3.png',
    href: "/"
}
const ourStory = {
    title: `Our Story`,
    content: `The TruContact CSR Nigeria seed was sown long before the founder; Kenneth Egbas would even conceive the dream of starting a company. Life didn’t always hand him a fair deal. From his early days and upon graduation from university he always dreamed of running a business based on the idea that outcomes from his business activities would promote innovation, equitable distribution of resources, justice, reduce wastage and help eradicate poverty in Africa. This gave wings to the dream that became TruContact CSR Nigeria.`,
    content2: `TCSRN was founded in 2006, and carried out what many have come to acknowledge as trail blazing spadework that led to a rapid growth of what has become a vibrant and viable corporate social responsibility and sustainability industry in Nigeria, and Africa.`,
    image: '/ourStoryAbout/founder.png',
}

const meetTheTeam = {
    title: `Meet the team`,
    items: [
        { image: '/ourStoryAbout/founder.png', title: 'Ken Egbas', content: 'President TruCRS' },
        { image: '/ourStoryAbout/founder.png', title: 'Ken Egbas', content: 'President TruCRS' },
        { image: '/ourStoryAbout/founder.png', title: 'Ken Egbas', content: 'President TruCRS' },
        { image: '/ourStoryAbout/founder.png', title: 'Ken Egbas', content: 'President TruCRS' },
        { image: '/ourStoryAbout/founder.png', title: 'Ken Egbas', content: 'President TruCRS' },
        { image: '/ourStoryAbout/founder.png', title: 'Ken Egbas', content: 'President TruCRS' }
    ]
}
const whatWeDo = {
    heading: `Here’s what we do`,
    subHeading: `Our Services`,
    items: [
        { image: '/whatWeDoAbout/image.png', title: 'Consulting', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non venenatis morbi nisl.' },
        { image: '/whatWeDoAbout/image.png', title: 'Consulting', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non venenatis morbi nisl.' },
        { image: '/whatWeDoAbout/image.png', title: 'Consulting', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non venenatis morbi nisl.' },
        { image: '/whatWeDoAbout/image.png', title: 'Consulting', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non venenatis morbi nisl.' },
        { image: '/whatWeDoAbout/image.png', title: 'Consulting', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non venenatis morbi nisl.' },
        { image: '/whatWeDoAbout/image.png', title: 'Consulting', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non venenatis morbi nisl.' },
    ]
}
const beenUpTo = {
    heading: `What we’ve been up to`,
    subHeading: `Our Recent Projects`,
    items: [
        {
            image: '/projectCard/background.png', title: `TruCSR offers online counselling services`,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non venenatis morbi nisl.',
            link: 'VIEW CASE STUDY',
            href: '/'
        },
        {
            image: '/projectCard/background.png', title: `TruCSR offers online counselling services`,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non venenatis morbi nisl.',
            link: 'VIEW CASE STUDY',
            href: '/'
        },
        {
            image: '/projectCard/background.png', title: `TruCSR offers online counselling services`,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non venenatis morbi nisl.',
            link: 'VIEW CASE STUDY',
            href: '/'
        },
        {
            image: '/projectCard/background.png', title: `TruCSR offers online counselling services`,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non venenatis morbi nisl.',
            link: 'VIEW CASE STUDY',
            href: '/'
        }
    ]
}
const brandsAndPartners = {
    heading: `We work with top brands`,
    subHeading: `Some of Our Partners & Customers`,
    link: "WORK WITH US",
    href: "/",
    items1: [
        {
            image: '/brandsAndPartnersAbout/gtb.png'
        },
        {
            image: '/brandsAndPartnersAbout/gtb.png'
        },
        {
            image: '/brandsAndPartnersAbout/gtb.png'
        },
        {
            image: '/brandsAndPartnersAbout/gtb.png'
        },
        {
            image: '/brandsAndPartnersAbout/gtb.png'
        }
    ],
    items2: [
        {
            title: `2006`,
            content: 'Founded',
        },
        {
            title: `2006`,
            content: 'Founded',
        },
        {
            title: `2006`,
            content: 'Founded',
        },
        {
            title: `2006`,
            content: 'Founded',
        }
    ]
}

const About = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>TruCSR - About Us</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Ubuntu:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
            </Head>

            <main className={styles.main}>
                <Intro title={intro.title} content={intro.content} link={intro.link} image1={intro.image1} image2={intro.image2} image3={intro.image3} href={intro.href} />
                <OurStory title={ourStory.title} content={ourStory.content} content2={ourStory.content2} image={ourStory.image} />
                <MeetTheTeam title={meetTheTeam.title} items={meetTheTeam.items} />
                <WhatWeDo heading={whatWeDo.heading} subHeading={whatWeDo.subHeading} items={whatWeDo.items} />
                <BeenUpTo heading={beenUpTo.heading} subHeading={beenUpTo.subHeading} items={beenUpTo.items} />
                <BrandsAndPartners heading={brandsAndPartners.heading} subHeading={brandsAndPartners.subHeading} items1={brandsAndPartners.items1} items2={brandsAndPartners.items2} link={brandsAndPartners.link} href={brandsAndPartners.href} />
            </main>
        </div>
    );
};

export default About;