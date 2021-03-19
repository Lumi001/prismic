import Prismic from 'prismic-javascript';
import { Client } from '../prismic-configuration';
import { RichText } from 'prismic-reactjs'
import Link from "next/link"
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Carousel from '../components/landingPageComponents/carousel/carousel'
import Heading from '../components/extraPageComponents/heading/heading'
import Card from '../components/extraPageComponents/card/card'
import Button from '../components/extraPageComponents/button/button'
import ScrollCardList from '../components/landingPageComponents/scrollCardList/scrollCardList'

export default function Home({  scroll_data , cards, carousel, scroll_title_text, scroll_link_text, button_text}) {



  return (
    <div className={styles.container}>
      <Head>
        <title>TruCSR</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Avenir:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
      </Head>

      <main className={styles.main}>
        {/* <h1>Temp</h1> */}
        {/* {console.log(footer)}
        {console.log(navigation_bar)}
        {console.log(card)}
        {console.log(carousel)}
        {console.log(scrollable_card)}
        {console.log(connect_with_us)} */}
        <section className={styles.carousel}>
          <Carousel 
          title={carousel.heading[0].text} content={carousel.text[0].text} link={carousel['link_text'][0].text} image={carousel.background_image.url}
           />
        </section>
        <Heading title="Featured Articles" />
        <section className={styles.articles}>
          {cards.map(card => <Card key={Math.random()} title={card.title[0].text} tag={card.tag} content={card.card_content[0].text}  
              />)} 
        </section>
        <Button text={button_text} icon="/button/cross.png" />
        <ScrollCardList scroll_data={scroll_data} scroll_title_text={scroll_title_text} scroll_link_text={scroll_link_text} />

      </main>
    </div>
  )
}

// export async function getServerSideProps() {
//   const landing = await Client().query(
//     Prismic.Predicates.at("document.type", 'landing_page')
//   )
//   let empty = {};

//   console.log(landing)

//   landing.results[0].data.body.map(each => {
//     return empty[`${each.slice_type}`] = { items: each.items, primary: each.primary }
//   })
//   console.log(empty)
//   const { card, carousel, connect_with_us, navigation_bar, scrollable_card, footer } = empty;
//   return {
//     props: {
//       card, carousel, connect_with_us, navigation_bar, scrollable_card, footer
//     }
//   }
// }

export async function getServerSideProps() {
  const landing = await Client().query(
    Prismic.Predicates.at("document.type", "landing_page")
  )
  
  return {
    props: {
      carousel: landing.results[0].data.body[1].items[0],

      cards: landing.results[0].data.body[2].items,
       
      button_text: landing.results[0].data.body[2].primary.button_text,      

      scroll_data: landing.results[0].data.body[3].items,

      scroll:  landing.results[0].data.body[3].primary.link_text,

      scroll_title_text: landing.results[0].data.body[3].primary.title[0].text,

      scroll_link_text: landing.results[0].data.body[3].primary.link_text
    }
  }
}