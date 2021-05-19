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
import { connect } from 'react-redux';
import Modal from '../components/extraPageComponents/modal/modal';
import FeaturedArticles from '../components/landingPageComponents/featuredArticles/featuredArticles';
import FeaturedPosts from '../components/landingPageComponents/featuredPosts/featuredPosts';
import OurClients from '../components/landingPageComponents/ourServices/ourClients';
import { modalStatusAction } from '../redux/app/app.actions';
import { navbarContentAction } from '../redux/navbar/navbar.actions';
import { useEffect } from 'react';
import Cookies from 'universal-cookie';


function Home({ scroll_data, partners, cards, posts, carousel, featuredArticles, featuredPosts, isActive, modalContent, modalType, setModalContent, modalHasBeenShown, timeLastShown, subscribed,setNavbarColour }) {

  // const [modalStatus, setModalStatus] = useState(false)
  useEffect(() => {
    setNavbarColour(true);
    const cookies = new Cookies();
    setModalContent({ modalIsActive: false })
    if (!subscribed) {
      setModalContent({ modalHasBeenShown: false })
      if (!cookies.get('timeLastShown')) {
        if (!modalHasBeenShown) {
          setTimeout(() => {
            var now = Date.now();
            cookies.set('timeLastShown', now, { maxAge: 86400 });
            console.log(cookies.get('timeLastShown'), cookies.get('leggo'))
            setModalContent({ modalIsActive: true, modalHasBeenShown: true })
          }, 25000);
        }
      }
    }
    return function cleanup() {
      setModalContent({ modalIsActive: false })
    }
  }, [])



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
        {console.log(isActive, modalContent, modalType)}
        {/* <h1>Temp</h1> */}
        {/* {console.log(footer)}
        {console.log(navigation_bar)}
        {console.log(card)}
        {console.log(carousel)}
        {console.log(scrollable_card)}
        {console.log(connect_with_us)} */}
        <section className={styles.carousel_main}>
          <Carousel 
          carousel= {carousel} 
          />
        </section>
          <OurClients items={partners.items} heading={partners.primary.heading?partners.primary.heading[0].text:""} />
        <FeaturedPosts items={posts} button_text={featuredPosts.button_text?featuredPosts.button_text:""} title={featuredPosts.heading?featuredPosts.heading[0].text:""} />
        <FeaturedArticles items={cards} button_text={featuredArticles.button_text?featuredArticles.button_text:""} title={featuredArticles.heading?featuredArticles.heading[0].text:""} />
        {/* <ScrollCardList scroll_data={scroll_data} scroll_title_text={scroll_title_text} scroll_link_text={scroll_link_text} />
      */}

        {isActive ?
          <div>
            <Modal />
          </div>
          : null}

        {/* <Modal content={{ link: modalContent, type: modalType }} /> */}
      </main>
    </div>
  )
}
const mapStateToProps = state => ({
  isActive: state.app.modalIsActive,
  modalContent: state.app.modalContent,
  modalType: state.app.type,
  modalHasBeenShown: state.app.modalHasBeenShown,
  timeLastShown: state.app.timeLastShown,
  subscribed: state.app.subscribed,
})
const mapDispatchToProps = dispatch => ({
  setNavbarColour:mode=>dispatch(navbarContentAction(mode)),
  setModalContent: modal => dispatch(modalStatusAction(modal))
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);
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
  const featuredArticlesCards = await Client().query(
    Prismic.Predicates.at('my.article.featured', true), { pageSize: 6 }
  )
  let empty = {}
  featuredArticlesCards.results.map(article => {
    return empty[`${article.uid}`] = { id: article.id, ...article.data }
  })
  const featuredPostsCards = await Client().query(
    Prismic.Predicates.at('my.post.featured', true), { pageSize: 6 }
  )
  let empty1 = {}
  featuredPostsCards.results.map(post => {
    return empty1[`${post.uid}`] = { id: post.id, ...post.data }
  })
  // console.log(landing.results[0].data.body,"body body body")
  // console.log(Object.values(empty)
  // console.log(empty1)
  return {
    props: {
      carousel: landing.results[0].data.body[0].items,
      partners: landing.results[0].data.body[1],
      cards: Object.values(empty),
      posts: Object.values(empty1),
      featuredPosts: landing.results[0].data.body[2].primary,
      featuredArticles: landing.results[0].data.body[3].primary,
    }
  }
}
// scroll_data: landing.results[0].data.body[3].items,

//   scroll: landing.results[0].data.body[3].primary.link_text,
//     scroll_title_text: landing.results[0].data.body[3].primary.title[0].text,

//       scroll_link_text: landing.results[0].data.body[3].primary.link_text