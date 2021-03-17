import Prismic from 'prismic-javascript';
import Social from '../components/extraPageComponents/social/social'
import '../styles/globals.css';
import React from 'react'
import Navbar from '../components/extraPageComponents/navbar/navbar';
import Footer from '../components/extraPageComponents/footer/footer';
import { Client } from '../prismic-configuration';

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Navbar />
      <Component {...pageProps} />
      <Social text="CONNECT WITH US" />
      <Footer />
    </React.Fragment>
  )
}

export default MyApp
MyApp.getInitialProps = async () => {
  const landing = await Client().query(
    Prismic.Predicates.at("document.type", "navigation")
  )
  console.log(landing, "this is landing")

  return {
    props: {
    }
  }
}