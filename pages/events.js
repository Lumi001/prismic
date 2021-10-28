import Head from 'next/head';
import styles from '../styles/Home.module.css';
import EventCard from '../components/eventsPageComponents/card/event-card';
import Carousel from '../components/eventsPageComponents/carousel/carousel-item';
import CarouselC from '../components/eventsPageComponents/carousel-card/carousel';
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
const imgs = Events.map(item=>{        
  return {...item.data.body[0].items}
  })



return (
  <div className={styles.container}>
        <Head>
        <title>TruCSR - Events</title>
      </Head>
        <main className={styles.main}>
          <div className="wrapper1" style={{backgroundImage:`url(${Events[0].data.post_image.url})`}}>
            <div className="overlay"></div>
          <Carousel />
          </div>
          <div className="wrapper2">
          <h3 className="title">Previous Events</h3>
          <div className="grid">
          {Events.map( (event, i) => {
          return(          
          <EventCard
           img={event.data.body[0].items} 
           key={Math.random()}
           date={new Intl.DateTimeFormat('en-GB', { dateStyle: 'full'}).format(new Date(event.first_publication_date))}
          //  date={event.data.pub_date} 
           title={event.data.title[0].text} 
           link_text={event.data.link_text} 
           articleId={event.id}           
          //  link_text={event.data.link_text} 
          />)}
          )
         
          }
           
          {/* {
            items.map((item, i) => 
            // console.log(img)
            <CarouselC items={item.img}
            key={Math.random()}
           date={item.date} 
           title={item.title} 
           link_text={item.link} 
           articleId={item.id} 
            
              //  link_text={event.data.link_text} 
              />)
          } */}
          </div>
        
            </div>
           
        </main>
        
        <style jsx global>
          {`
          .overlay{
            position: absolute;
            z-index: 1;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background-color: #251861;
            opacity: 0.7;
          }
          .wrapper1 {
            text-align: left;
            width: 100%; 
           height: 100%; 
           padding-top: 4%;
           position:relative;
           
          }
          .wrapper2 {
            margin-top: 5%;
           text-align: left;
           width: 1440px;
           margin: auto;
          }
          .grid {
            display: grid;
            grid-template-columns: 40% 40%;
            place-content: space-around
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

      const imgs = Events.results.map(item=>{        
      return {...item.data.body[0].items[0], date: item.first_publication_date}
      })

      // let imgs = Events.results.filter(
      //   (item) => item.data.body[0].slice_type === "patner_list_images"
      // );

   console.log(imgs[0].date)
      // console.log(Events.results[0].data)
      
      return {
        props: {
        Events: Events.results,
        // upcomingEvents: events.results[0].data.body[0].items,
        // recentEvents: events.results[0].data.body[1].items
      }
  }
}