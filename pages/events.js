import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Carousel from '../components/eventsPageComponents/carousel/carousel'
import Heading from '../components/extraPageComponents/heading/heading';
import EventCard from '../components/eventsPageComponents/event-card/event-card'
import Prismic from 'prismic-javascript';
import { Client } from '../prismic-configuration';

export default function Event ({upcomingEvents, recentEvents}) {
    return (
      <div className={styles.container}>
        <Head>
        <title>TruCSR</title>
        <link rel="icon" href="/favicon.ico"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Avenir:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet" />
      </Head>
        <main className={styles.main}>
          <div className="wrapper2">
          <Heading title="Our Events" />
          <h3 className="title">Upcoming Events</h3>
          </div>
          <div className="wrapper1">
          <Carousel/>
          </div>
          <div className="wrapper2">
          <h3 className="title">Recent Events</h3>
          <div className="grid">
          {recentEvents.map( event => <EventCard key={Math.random()} date={event.date} title={event.title} color={event.color}/>)}
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
           width: 95%;
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
            justify-items: start ;
            width: 98%;
          }
          .title {
            font-style: normal;
            font-weight: bold;
            font-size: 36px;
            color: #313131;
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