import Prismic from 'prismic-javascript';
import { Client } from '../prismic-configuration';
import Social from '../components/extraPageComponents/social/social'
import '../styles/globals.css';
import React from 'react'
import Navbar from '../components/extraPageComponents/navbar/navbar';
import Footer from '../components/extraPageComponents/footer/footer';
import Modal from '../components/extraPageComponents/modal/modal';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../redux/root-reducer';
import logger from 'redux-logger';

function MyApp({ Component, pageProps, navigation }) {
  const middleware = [logger]
  const store = createStore(rootReducer, applyMiddleware(...middleware))
  return (
    <React.Fragment>
      <Navbar navigation={navigation} />
      <Provider store={store} >
        <Component {...pageProps} />
      </Provider>
      <Social text="CONNECT WITH US" />
      <Footer />
      {/* {console.log(navigation,'navigation')} */}
    </React.Fragment>
  )
}

export default MyApp
MyApp.getInitialProps = async () => {
  const navigation = await Client().query(
    Prismic.Predicates.at("document.type", "navigation")
  )
  // console.log(navigation.results[0].data.body[0], "this is landing")
  let navLinks = {
    1: "/about",
    2: "/academy",
    3: "/events",
    4: "/publication",
    5: "/services",
    6: "/contact",
  }
  let links = []; 
   navigation.results[0].data.body[0].items.forEach(item => {
   links.push(
     { link_text: item.link_text, link_address: navLinks[Number(item.target_page.slice(item.target_page.length - 1))] }
   ) 
  })
  // console.log({ ...navigation.results[0].data.body[0], items: links })

  return {
    navigation: { ...navigation.results[0].data.body[0], items: links }
  }
}