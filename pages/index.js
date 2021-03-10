import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Carousel from '../components/landingPageComponents/carousel/carousel'
import Heading from '../components/extraPageComponents/heading/heading'
import Card from '../components/extraPageComponents/card/card'
import Button from '../components/extraPageComponents/button/button'
import ScrollCardList from '../components/landingPageComponents/scrollCardList/scrollCardList'

export default function Home() {
  const data = [
    {title:"SERAS 13th Edition Recap: A night of glamour",
    tag:"event",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sit..."
  },
    {title:"SERAS 13th Edition Recap: A night of glamour",
    tag:"event",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sit..."
  },
    {title:"SERAS 13th Edition Recap: A night of glamour",
    tag:"event",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sit..."
  },
    {title:"SERAS 13th Edition Recap: A night of glamour",
    tag:"event",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sit..."
  },
    {title:"SERAS 13th Edition Recap: A night of glamour",
    tag:"event",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sit..."
  },
    {title:"SERAS 13th Edition Recap: A night of glamour",
    tag:"event",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sit..."
  },
  ]
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Ubuntu:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet"/>
      </Head>

        <main className={styles.main}>
          {/* <h1>Temp</h1> */}
          <section className={styles.carousel}>
            <Carousel />
          </section>
          <Heading title="Featured Articles" />
          <section className={styles.articles}>
            {data.map(each=><Card key={Math.random()} title={each.title} tag={each.tag} content={each.content} />)}
          </section>
          <Button text="Load More" icon="/button/cross.png"/>
          <ScrollCardList />

        </main>
    </div>
  )
}
