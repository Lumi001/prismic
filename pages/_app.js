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
import { persistStore } from 'redux-persist';
// import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import Router from 'next/router'
import Head from 'next/head'
import NProgress from 'nprogress'

Router.events.on('routeChangeStart', (url) => {
  // console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())


function MyApp({ Component, pageProps, navigation, footer_items,socials }) {

  let store;
  const isClient = typeof window !== 'undefined';
  const middleware = [logger]

  if (isClient) {
    const { persistReducer } = require('redux-persist');
    const storage = require('redux-persist/lib/storage').default;

    const persistConfig = {
      key: 'root',
      storage,
      whitelist: ['app'],
    };

    store = createStore(
      persistReducer(persistConfig, rootReducer)
      // ,applyMiddleware(logger)
    );

    store.__PERSISTOR = persistStore(store);
  } else {
    store = createStore(
      rootReducer
      // ,applyMiddleware(logger)
    );
  }
  // return store;

  // const persistConfig = {
  //   key: 'root',
  //   storage,
  //   whitelist:['app']
  // }

  // const persistedReducer = persistReducer(persistConfig, rootReducer)

  // const store = createStore(persistedReducer, applyMiddleware(...middleware))
  // const persistor = persistStore(store);
  return (
    <React.Fragment>
       <Head>
        {/* Import CSS for nprogress */}
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
      </Head>
      <Provider store={store} >
      {/* <Navbar navigation={navigation} /> */}
        <PersistGate loading={null} persistor={store.__PERSISTOR}>
      <Navbar navigation={navigation} />
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
      <Social text="WE ARE SOCIAL" items={socials.items} />
      <Footer footer_items={footer_items} socials={socials.items} />
      {/* {console.log(footer_items)} */}
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
    1: "/services",
    2: "/about",
    3: "/publication",
    4: "/events",
    5: "/contact",
  }
  let links = [];
  navigation.results[0].data.body[0].items.forEach(item => {
    links.push(
      { link_text: item.link_text, link_address: navLinks[Number(item.target_page.slice(item.target_page.length - 1))] }
    )
  })
    const footer = await Client().query(
        Prismic.Predicates.at("document.type", "footer")
    )
    const socials = await Client().query(
        Prismic.Predicates.at("document.type", "socials")
    )

    // console.log(socials.results[0].data.body[0].items[0].link_address)
    // { link_address: [Object], select_social_type: 'Facebook' },
    // { link_address: [Object], select_social_type: 'Twitter' },
    // { link_address: [Object], select_social_type: 'Linkedin' }
    
    return {
      navigation: { ...navigation.results[0].data.body[0], items: links },
      footer_items: footer.results[0].data.body,
      socials: socials.results[0].data.body[0]
  }
}