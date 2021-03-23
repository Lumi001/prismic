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
  const store = createStore(rootReducer,applyMiddleware(...middleware))
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
  // console.log(navigation.results[0].data.body[0].items.link_address, "this is landing")

  return {
    navigation: navigation.results[0].data.body[0]
  }
}