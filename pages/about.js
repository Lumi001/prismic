import Prismic from 'prismic-javascript';
import { Client } from '../prismic-configuration';
import Head from 'next/head';
import Intro from '../components/extraPageComponents/intro/intro';
import OurStory from '../components/aboutPageComponents/ourStory/ourStory';
import MeetTheTeam from '../components/aboutPageComponents/meetTheTeam/meetTheTeam'
import WhatWeDo from '../components/aboutPageComponents/whatWeDo/whatWeDo'
import styles from '../styles/Home.module.css'
import BeenUpTo from '../components/aboutPageComponents/beenUpTo/beenUpTo';
import BrandsAndPartners from '../components/aboutPageComponents/brandsAndPartners/brandsAndPartners';
// import styles from './About.module.css';

// const intro = {
//     title: `We are a 
//     results-driven
//     company`,
//     content: `Nothing excites us like an opportunity to help our clients make those key decisions that marries their business ideals and sustainability in a way helps them innovate in the areas of new products, ideas and service that keeps them ahead of competition.`,
//     link: 'WORK WITH US',
//     image1: '/introAbout/image1.png',
//     image2: '/introAbout/image2.png',
//     image3: '/introAbout/image3.png',
//     href: "/"
// }
// const ourStory = {
//     title: `Our Story`,
//     content: `The TruContact CSR Nigeria seed was sown long before the founder; Kenneth Egbas would even conceive the dream of starting a company. Life didn’t always hand him a fair deal. From his early days and upon graduation from university he always dreamed of running a business based on the idea that outcomes from his business activities would promote innovation, equitable distribution of resources, justice, reduce wastage and help eradicate poverty in Africa. This gave wings to the dream that became TruContact CSR Nigeria.`,
//     content2: `TCSRN was founded in 2006, and carried out what many have come to acknowledge as trail blazing spadework that led to a rapid growth of what has become a vibrant and viable corporate social responsibility and sustainability industry in Nigeria, and Africa.`,
//     image: '/ourStoryAbout/founder.png',
// }

// const meetTheTeam = {
//     title: `Meet the team`,
//     items: [
//         { image: '/ourStoryAbout/founder.png', title: 'Ken Egbas', content: 'President TruCRS' },
//         { image: '/ourStoryAbout/founder.png', title: 'Ken Egbas', content: 'President TruCRS' },
//         { image: '/ourStoryAbout/founder.png', title: 'Ken Egbas', content: 'President TruCRS' },
//         { image: '/ourStoryAbout/founder.png', title: 'Ken Egbas', content: 'President TruCRS' },
//         { image: '/ourStoryAbout/founder.png', title: 'Ken Egbas', content: 'President TruCRS' },
//         { image: '/ourStoryAbout/founder.png', title: 'Ken Egbas', content: 'President TruCRS' }
//     ]
// }
// const whatWeDo = {
//     heading: `Here’s what we do`,
//     subHeading: `Our Services`,
//     items: [
//         { image: '/whatWeDoAbout/image.png', title: 'Consulting', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non venenatis morbi nisl.' },
//         { image: '/whatWeDoAbout/image.png', title: 'Consulting', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non venenatis morbi nisl.' },
//         { image: '/whatWeDoAbout/image.png', title: 'Consulting', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non venenatis morbi nisl.' },
//         { image: '/whatWeDoAbout/image.png', title: 'Consulting', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non venenatis morbi nisl.' },
//         { image: '/whatWeDoAbout/image.png', title: 'Consulting', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non venenatis morbi nisl.' },
//         { image: '/whatWeDoAbout/image.png', title: 'Consulting', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non venenatis morbi nisl.' },
//     ]
// }
// const beenUpTo = {
//     heading: `What we’ve been up to`,
//     subHeading: `Our Recent Projects`,
//     items: [
//         {
//             image: '/projectCard/background.png', title: `TruCSR offers online counselling services`,
//             content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non venenatis morbi nisl.',
//             link: 'VIEW CASE STUDY',
//             href: '/'
//         },
//         {
//             image: '/projectCard/background.png', title: `TruCSR offers online counselling services`,
//             content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non venenatis morbi nisl.',
//             link: 'VIEW CASE STUDY',
//             href: '/'
//         },
//         {
//             image: '/projectCard/background.png', title: `TruCSR offers online counselling services`,
//             content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non venenatis morbi nisl.',
//             link: 'VIEW CASE STUDY',
//             href: '/'
//         },
//         {
//             image: '/projectCard/background.png', title: `TruCSR offers online counselling services`,
//             content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non venenatis morbi nisl.',
//             link: 'VIEW CASE STUDY',
//             href: '/'
//         }
//     ]
// }
// const brandsAndPartners = {
//     heading: `We work with top brands`,
//     subHeading: `Some of Our Partners & Customers`,
//     link: "WORK WITH US",
//     href: "/",
//     items1: [
//         {
//             image: '/brandsAndPartnersAbout/gtb.png'
//         },
//         {
//             image: '/brandsAndPartnersAbout/gtb.png'
//         },
//         {
//             image: '/brandsAndPartnersAbout/gtb.png'
//         },
//         {
//             image: '/brandsAndPartnersAbout/gtb.png'
//         },
//         {
//             image: '/brandsAndPartnersAbout/gtb.png'
//         }
//     ],
//     items2: [
//         {
//             title: `2006`,
//             content: 'Founded',
//         },
//         {
//             title: `2006`,
//             content: 'Founded',
//         },
//         {
//             title: `2006`,
//             content: 'Founded',
//         },
//         {
//             title: `2006`,
//             content: 'Founded',
//         }
//     ]
// }

const About = ({ about, intro, cards, ourStory, meetTheTeam, whatWeDo, beenUpTo, brandsAndPartners }) => {
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
                {/* {console.log(about)} */}
                <Intro title={intro.primary.heading[0].text} content={intro.primary.text[0].text} link={intro.primary.link_text} image1={intro.items[0].image.url || '/introAbout/image1.png'} image2={intro.items[1].image.url || '/introAbout/image1.png'} image3={intro.items[2].image.url || '/introAbout/image1.png'} href={intro.primary.link_address} />
                <OurStory title={ourStory.primary.heading[0].text} content={ourStory.primary.sub_text[0].text} content2={ourStory.content2} image={ourStory.primary.image.url} />
                <MeetTheTeam title={meetTheTeam.primary.heading[0].text} items={meetTheTeam.items} />
                <WhatWeDo heading={whatWeDo.primary.heading[0].text} subHeading={whatWeDo.primary['sub-heading'][0].text} items={whatWeDo.items} />
                <BeenUpTo heading={beenUpTo.primary.heading[0].text} subHeading={beenUpTo.primary['sub-heading'][0].text} items={cards} />
                <BrandsAndPartners heading={brandsAndPartners.top.primary.heading[0].text} subHeading={brandsAndPartners.top.primary['sub-heading'][0].text} items1={brandsAndPartners.top.items} items2={brandsAndPartners.bottom.items} link={brandsAndPartners.bottom.primary.link_text} href={brandsAndPartners.bottom.primary.link_address['url']} />
            </main>
        </div>
    );
};

export default About;

export async function getServerSideProps() {
    let about = await Client().query(
        Prismic.Predicates.at("document.type", "about_page")
    )

    let about1 = {}

    about.results[0].data.body.map(each => {
        return about1[each.slice_type] = { items: each.items, primary: each.primary }
    })
    about = about1;
    const posts = await Client().query(
        Prismic.Predicates.at('my.post.destination_page', 'Services'),{ pageSize : 4 }
    )
    let empty = {}
    posts.results.map(article => {
        return empty[`${article.uid}`] = { id: article.id, ...article.data }
    })
    // console.log(Object.values(empty))

    // console.table(about.card.primary)
    // console.log(about.heading___photos___text___link.items[0])
    // console.log(about.our_services2.primary)
    return {
        props: {
            about,
            intro: about.carousel,
            ourStory: about.heading___subtext,
            meetTheTeam: about.card,
            whatWeDo: about.our_services,
            beenUpTo: about.our_services1,
            cards: Object.values(empty),
            brandsAndPartners: { top: about.our_services2, bottom: about.heading___photos___text___link }
        }
    }
}