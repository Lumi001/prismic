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

function MyApp({ Component, pageProps, navigation, footer_items }) {

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
      persistReducer(persistConfig, rootReducer),
      applyMiddleware(logger)
    );

    store.__PERSISTOR = persistStore(store);
  } else {
    store = createStore(
      rootReducer,
      applyMiddleware(logger)
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
      <Navbar navigation={navigation} />
      <Provider store={store} >
        <PersistGate loading={null} persistor={store.__PERSISTOR}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
      <Social text="CONNECT WITH US" />
      <Footer footer_items={footer_items} />
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
    const footer = await Client().query(
        Prismic.Predicates.at("document.type", "footer")
    )

    // console.log(footer.results[0].data.body[0])
    
    return {
      navigation: { ...navigation.results[0].data.body[0], items: links },
      footer_items: footer.results[0].data.body
  }
}