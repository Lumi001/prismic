import Head from 'next/head';
import styles from '../styles/Home.module.css';
import EventCard from '../components/eventsPageComponents/card/event-card';
import Carousel from '../components/eventsPageComponents/carousel/carousel-item'
import Heading from '../components/extraPageComponents/heading/heading';
import Prismic from 'prismic-javascript';
import { Client } from '../prismic-configuration';

export default function Event ({upcomingEvents, recentEvents}) {
  console.log(recentEvents)
    return (
      <div className={styles.container}>
        <Head>
        <title>TruCSR</title>
        <link rel="icon" href="/favicon.ico"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Avenir:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet" />
      </Head>
        <main className={styles.main}>
          <div className="wrapper1">
          <Carousel/>
          </div>
          <div className="wrapper2">
          <h3 className="title">Previous Events</h3>
          <div className="grid">
          {recentEvents.map( event => <EventCard img={event.image.url} key={Math.random()} date={event.date} title={event.title} link={event.link}/>)}
          {/* <EventCard date="March 28, 2021" title="The 10th Edition
          of  SERAS"  />
          <EventCard date="March 28, 2021" title="The 10th Edition
          of  SERAS"  />
          <EventCard date="March 28, 2021" title="The 10th Edition
          of  SERAS"  />
          <EventCard date="March 28, 2021" title="The 10th Edition
          of  SERAS"  /> */}
          </div>
          
          </div>
           
        </main>
        
        <style jsx global>
          {`
          .wrapper1 {
           text-align: left;
           width: 100%;
           background-color: #251861;
           z-index: 1;
           padding-top: 6%
          }
          .wrapper2 {
           margin-top: 5%;
           text-align: left;
           width: 80%;
          }
          .grid {
            display: grid;
            grid-template-columns: 50% 50%;
            grid-gap: 15px 15px;
            justify-items: flex-end ;
            width: 98%;
          }
          .title {
            font-style: normal;
            font-weight: bold;
            font-size: 36px;
            color: #313131;
            text-align: center;
          }
          @media only screen and (max-width: 768px) {
            .grid {
            grid-template-columns: 100%;            
          }
}
          `}
          </style>
          </div>
    )
}

export async function getServerSideProps() {
  const events = await Client().query(
      Prismic.Predicates.at("document.type", "events")
  )
  return {
      props: {
        upcomingEvents: events.results[0].data.body[0].items,
        recentEvents: events.results[0].data.body[1].items
      }
  }
}