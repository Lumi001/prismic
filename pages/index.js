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

export default function Home({  scroll_data , card, carousel, scroll_title_text, scroll_link_text}) {
  // console.log(scroll_data)
  const scroll1 = [
  {
  date: scroll_data[0].date[0],
  title: scroll_data[0].title[0][0].text,
  background_image: scroll_data[0].background_image[0],
  video: scroll_data[0].video[0],
  card_type: scroll_data[0].cardtype[0]
},
{
  date: scroll_data[0].date[1],
  title: scroll_data[0].title[1][0].text,
  background_image: scroll_data[0].background_image[1],
  video: scroll_data[0].video[1],
  card_type: scroll_data[0].cardtype[1]
},
{
  date: scroll_data[0].date[2],
  title: scroll_data[0].title[2][0].text,
  background_image: scroll_data[0].background_image[2],
  video: scroll_data[0].video[2],
  card_type: scroll_data[0].cardtype[2]
},
{
  date: scroll_data[0].date[3],
  title: scroll_data[0].title[3][0].text,
  background_image: scroll_data[0].background_image[3],
  video: scroll_data[0].video[3],
  card_type: scroll_data[0].cardtype[3]
}
]

// console.log(scroll1)

const cards = [ 
  { 
    title: card[0].title[0][0].text,
    image: card[0].image[0].url,
    content: card[0].card_content[0][0].text,
    tag: card[0].tag[0]    
  },
  { 
    title: card[0].title[1][0].text,
    image: card[0].image[1].url,
    content: card[0].card_content[1][0].text,
    tag: card[0].tag[1]    
  },
  { 
    title: card[0].title[2][0].text,
    image: card[0].image[2].url,
    content: card[0].card_content[2][0].text,
    tag: card[0].tag[2]    
  },
  { 
    title: card[0].title[3][0].text,
    image: card[0].image[3].url,
    content: card[0].card_content[3][0].text,
    tag: card[0].tag[3]    
  },
  { 
    title: card[0].title[4][0].text,
    image: card[0].image[4].url,
    content: card[0].card_content[4][0].text,
    tag: card[0].tag[4]    
  },
  { 
    title: card[0].title[5][0].text,
    image: card[0].image[5].url,
    content: card[0].card_content[5][0].text,
    tag: card[0].tag[5]
    
  },
]
  return (
    <div className={styles.container}>
      <Head>
        <title>TruCsr</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Ubuntu:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet" />
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
          {cards.map(card => <Card key={Math.random()} title={card.title.text} tag={card.tag} content={card.content} />)}
        </section>
        <Button text={card[0].button_text} icon="/button/cross.png" />
        <ScrollCardList scroll_card={scroll1} scroll_title_text={scroll_title_text} scroll_link_text={scroll_link_text} />

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

      card: [{
        title: landing.results[0].data.body[2].items.map(card =>
         { return card.title }),
         image:  landing.results[0].data.body[2].items.map(card =>
          { return card.image }),
          card_content:  landing.results[0].data.body[2].items.map(card =>
            { return card.card_content }),
            tag:  landing.results[0].data.body[2].items.map(card =>
              { return card.tag }),
              button_text: landing.results[0].data.body[2].primary.button_text,
                  },
                ],

      

      scroll_data: [{
        title: landing.results[0].data.body[3].items.map(item =>
          { return item.title }),
        date: landing.results[0].data.body[3].items.map(item =>
          { return item.date }),
        background_image: landing.results[0].data.body[3].items.map(item =>
          { return item.background_image }),
          video: landing.results[0].data.body[3].items.map(item =>
            { return item.video }),
         cardtype: landing.results[0].data.body[3].items.map(item =>
            { return item.cardtype }),
          }],
          scroll:  landing.results[0].data.body[3].primary.link_text,
          scroll_title_text: landing.results[0].data.body[3].primary.title[0].text,
          scroll_link_text: landing.results[0].data.body[3].primary.link_text
    }
  }
}