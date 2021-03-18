import Prismic from 'prismic-javascript';
import Social from '../components/extraPageComponents/social/social'
import '../styles/globals.css';
import React from 'react'
import Navbar from '../components/extraPageComponents/navbar/navbar';
import Footer from '../components/extraPageComponents/footer/footer';
import { Client } from '../prismic-configuration';

function MyApp({ Component, pageProps,navigation }) {
  return (
    <React.Fragment>
      <Navbar navigation={navigation} />
      <Component {...pageProps} />
      <Social text="CONNECT WITH US" />
      <Footer />
      {console.log(navigation,'navigation')}
    </React.Fragment>
  )
}

export default MyApp
MyApp.getInitialProps = async () => {
  const navigation = await Client().query(
    Prismic.Predicates.at("document.type", "navigation")
  )
  // console.log(navigation.results[0].data.body[0].items.link_address, "this is landing")

  return {
    navigation:navigation.results[0].data.body[0]
  }
}