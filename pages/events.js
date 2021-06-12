import Head from 'next/head';
import styles from '../styles/Home.module.css';
import EventCard from '../components/eventsPageComponents/card/event-card';
import Carousel from '../components/eventsPageComponents/carousel/carousel-item'
import Heading from '../components/extraPageComponents/heading/heading';
import Prismic from 'prismic-javascript';
import { Client } from '../prismic-configuration';
import { useEffect } from 'react';
import { navbarContentAction } from '../redux/navbar/navbar.actions';
import { connect } from 'react-redux';


const Event= ({Events,upcomingEvents, recentEvents,setNavbarColour})=> {
  // console.log(recentEvents)
  useEffect(()=>{
    setNavbarColour(false)
})

return (
  <div className={styles.container}>
        <Head>
        <title>TruCSR</title>
        <link rel="icon" href="/favicon.ico"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Avenir:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet" />
      </Head>
        <main className={styles.main}>
          <div className="wrapper1" style={{backgroundImage:`url(${Events[0].data.post_image.url})`}}>
            <div className="overlay"></div>
          <Carousel />
          </div>
          <div className="wrapper2">
          <h3 className="title">Previous Events</h3>
          <div className="grid">
          {Events.map( event => 
          <EventCard
           img={event.data.post_image.url} 
           key={Math.random()}
           date={event.data.date} 
           title={event.data.title[0].text} 
           link_text={event.data.link_text} 
           articleId={event.id} 
          //  link_text={event.data.link_text} 
          />)}
          </div>
          
          </div>
           
        </main>
        
        <style jsx global>
          {`
          .overlay{
            position: absolute;
            top: 0;
            left: 0;
            height: 627px;
            width: 100%;
            background-color: #251861;
            opacity: 0.7;
          }
          .wrapper1 {
            text-align: left;
            width: 100%; 
           height: 100%; 
           padding-top: 4%;
           
          }
          .wrapper2 {
            margin-top: 5%;
           text-align: left;
           width: 1200px;
           margin: auto;
          }
          .grid {
            display: grid;
            grid-template-columns: 50% 50%;
          }
          .title {
            font-family: Inter;
            font-style: normal;
            font-weight: bold;
            font-size: 48px;
            color: #313131;
            letter-spacing: 0.01em;
            text-align: center;
          }
          @media only screen and (max-width: 768px) {
            .grid {
              grid-template-columns: 100%; 
              justify-items: center;           
            }
          .carousel-text {
            width: 100%;
          }
          .video-container {
            margin-top: 50px;
            width: 90%;
          }
          .wrapper1 {
            width: 100%
          }
        .wrapper2 {
          width: 100%
        }
      }
      `}
          </style>
          </div>
    )
  }
  const mapDispatchToProps = dispatch => ({
    setNavbarColour:mode=>dispatch(navbarContentAction(mode)),
  })
  export default connect(null, mapDispatchToProps)(Event)
  
  export async function getServerSideProps() {
    const Events = await Client().query(
      Prismic.Predicates.at("my.post.destination_page", "Events")
      )
      
      // console.log(Events)
      return {
        props: {
        Events: Events.results,
        // upcomingEvents: events.results[0].data.body[0].items,
        // recentEvents: events.results[0].data.body[1].items
      }
  }
}