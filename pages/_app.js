import Social from '../components/extraPageComponents/social/social'
import '../styles/globals.css';
import React from 'react'
import Navbar from '../components/extraPageComponents/navbar/navbar';
import Footer from '../components/extraPageComponents/footer/footer';

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Navbar />
      <Component {...pageProps} />
      <Social text="CONNECT WITH US" />
      <Footer/>
    </React.Fragment>
  )
}

export default MyApp
export async function getServerSideProps() {
  const landing = await Client().query(
  )
  let empty = {};

  landing.results[0].data.body.map(each => {
    return empty[`${each.slice_type}`] = { items: each.items, primary: each.primary }
  })
  console.log(empty)
  const { card, carousel, connect_with_us, navigation_bar, scrollable_card, footer } = empty;
  return {
    props: {
      card, carousel, connect_with_us, navigation_bar, scrollable_card, footer
    }
  }
}