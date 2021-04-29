import React, { useEffect } from 'react';
import Intro from '../components/extraPageComponents/intro/intro';
import OurServices from '../components/servicesPageComponents/ourServices/ourServices';
import { Client } from '../prismic-configuration';
import Prismic from 'prismic-javascript';
import styles from '../styles/Home.module.css'
import Head from 'next/head';
import { navbarContentAction } from '../redux/navbar/navbar.actions';
import { connect } from 'react-redux';


const Services = ({ cards, intro, ourServices,setNavbarColour }) => {
    useEffect(()=>{
        setNavbarColour(false)
    },[])
    return (
        <div className={styles.container}>
            <Head>
                <title>TruCSR - Services</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Avenir:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
            </Head>
            <main className={styles.main}>
                <Intro background={'#252efe'} title={intro.primary.heading[0].text} content={intro.primary.text[0].text} link={intro.primary.link_text} image1={intro.primary.image.url || '/introAbout/image1.png'} href={intro.primary.link_address} />
                <OurServices heading={ourServices.primary.heading[0].text} items={cards} />
            </main>
        </div>
    );
};
const mapDispatchToProps = dispatch => ({
    setNavbarColour:mode=>dispatch(navbarContentAction(mode)),
  })
  export default connect(null, mapDispatchToProps)(Services);

export async function getServerSideProps() {
    let services = await Client().query(
        Prismic.Predicates.at("document.type", "services_page"),{ pageSize : 6 }
    )

    let services1 = {}
    // console.log(services.results[0].data.body)

    // let post = await Client().query(
    //     Prismic.Predicates.at('my.post.featured', true)
    // )

    // let services1 = {}
    // console.log("post", post, "post")

    services.results[0].data.body.map(each => {
        return services1[each.slice_type] = { items: each.items, primary: each.primary }
    })
    services = services1;
    const posts = await Client().query(
        Prismic.Predicates.at('my.post.destination_page', 'Services'),{ pageSize : 6 }
    )
    let empty = {}
    posts.results.map(article => {
        return empty[`${article.uid}`] = { id: article.id, ...article.data }
    })
    // console.log(Object.values(empty))

    // console.table(services.card.primary)
    // console.log(services.heading___photos___text___link.items[0])
    // console.log(services.our_services2.primary)
    return {
        props: {
            services,
            intro: services.intro,
            ourServices: services.our_projects,
            cards: Object.values(empty)
        }
    }
}