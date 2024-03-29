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
    })
    return (
        <div className={styles.container}>
            <Head>
                <title>TruCSR - Services</title>
            </Head>
            <main className={styles.main}>
                <Intro background={'#252efe'} title={intro.primary.heading&&intro.primary.heading[0]?intro.primary.heading[0].text:""} content={intro.primary.text&&intro.primary.text[0]?intro.primary.text[0].text:""} link={intro.primary.link_text?intro.primary.link_text:""} image1={intro.primary.image?intro.primary.image.url : '/introAbout/image1.png'} href={intro.primary.link_address?intro.primary.link_address.url:"/404"} />
                <OurServices heading={ourServices&&ourServices.primary&&ourServices.primary.heading&&ourServices.primary.heading[0]?ourServices.primary.heading[0].text:""} items={cards?cards:[]} />
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

    services.results[0].data.body.map(each => {
        return services1[each.slice_type] = { items: each.items, primary: each.primary }
    })
    services = services1;
    const posts = await Client().query(
        Prismic.Predicates.at('my.post.destination_page', 'Services'),{ pageSize : 6 }
    )
    let empty = {}

    // console.table(services)
    // console.log(services.heading___photos___text___link.items[0])
    // console.log(services.our_services2.primary)
    return {
        props: {
            services,
            intro: services.intro,
            ourServices: services.our_services1,
            cards: services.our_services1.items
        }
    }
}