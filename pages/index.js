import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Carousel from '../components/landingPageComponents/carousel/carousel'
import Heading from '../components/extraPageComponents/heading/heading'
import Card from '../components/extraPageComponents/card/card'
import Button from '../components/extraPageComponents/button/button'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <h1>Temp</h1>
          <Carousel/>
          <Heading title="Featured Articles"/>
          <section className={styles.articles}>
            <Card title="Lorem ipsum" tag="event" content="Lorem ipsum"/>
            <Card title="Lorem ipsum" tag="event" content="Lorem ipsum"/>
            <Card title="Lorem ipsum" tag="event" content="Lorem ipsum"/>
            <Card title="Lorem ipsum" tag="event" content="Lorem ipsum"/>
          </section>
          <Button text="Load More"/>
          
      </main>
    </div>
  )
}
