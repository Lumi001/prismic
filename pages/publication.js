import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Card from '../components/extraPageComponents/card/card';
import Heading from '../components/extraPageComponents/heading/heading';
import TopArticleList from '../components/extraPageComponents/top-article/top-article-list';
import Searchbar from '../components/extraPageComponents/searchbar/searchbar';
import Prismic from 'prismic-javascript';
import { Client } from '../prismic-configuration';

export default function Publication(new_pub) {
  console.log(new_pub)
  const cards = [
    {
      title: "TruCSR Academy now taking Software dev courses",
      tag: "15 MAR, 2021",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin turpis sit ac lobortis volutpat. ",
      link: "READ PUBLICATION"
    },
    {
      title: "TruCSR Academy now taking Software dev courses",
      tag: "15 MAR, 2021",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin turpis sit ac lobortis volutpat. ",
      link: "READ PUBLICATION"
    },
    {
      title: "TruCSR Academy now taking Software dev courses",
      tag: "15 MAR, 2021",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin turpis sit ac lobortis volutpat. ",
      link: "READ PUBLICATION"
    },
    {
      title: "TruCSR Academy now taking Software dev courses",
      tag: "15 MAR, 2021",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin turpis sit ac lobortis volutpat. ",
      link: "READ PUBLICATION"
    },
    {
      title: "TruCSR Academy now taking Software dev courses",
      tag: "15 MAR, 2021",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin turpis sit ac lobortis volutpat. ",
      link: "READ PUBLICATION"
    }
  ]

    return (
      <div className={styles.container}>
        <Head>
        <title>TruCSR</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Ubuntu:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet" />
      </Head>
        <main className={styles.main}>
          <div className="container">
          <div className="publication">
          <Heading title="Publications & News" />
          <Searchbar />
          </div>

          <div className="column" >
          <Heading title="New Publications" />
        <div className={"one"}>
          <div className="two">
          <Card id="big" key={Math.random()} title="TruCSR Academy now taking 
Software dev courses" date="15 MAR, 2021" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis justo cras faucibus ut felis gravida. Sagittis, ipsum sit habitant quam gravida adipiscing vel. Amet, faucibus sollicitudin egestas convallis sit lectus pellentesque. Justo lectus volutpat commodo bibendum. Consectetur morbi donec in lobortis morbi. Quisque nisi, proin morbi a, faucibus. " link="READ PUBLICATION"/>
          </div>
          <div className="three">
            <div className="four">
            <Card key={Math.random()} title="TruCSR Academy now taking 
Software dev courses" date="15 MAR, 2021" link="READ PUBLICATION" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin turpis sit ac lobortis volutpat. "/>
            </div>
            <div className="five">
            <Card key="" title="TruCSR Academy now taking 
Software dev courses" date="15 MAR, 2021" link="READ PUBLICATION" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin turpis sit ac lobortis volutpat. "/>
            </div>
          </div>
          </div>
        </div>
        

        <div className="column">
        <Heading title="Other Publications" />
        <div className="other">
          {cards.map(card => <Card key={Math.random()} title={card.title} date={card.tag} content={card.content} link={card.link}  
              />)}         
              <TopArticleList/>      
              </div>
              </div>
              </div>
        </main>
        <style jsx global>
          {`
          .container {
            width: 80%
          }
          .publication {
            padding-top: 100px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            width: 100%;
            align-items: center
          }
          .one {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }
          .other {
            display: grid;
            grid-template-columns: 50% 50%;
            justify-items: start ;
            width: 100%;
          }
          .column {
            display: flex;
            flex-direction: column
          }

          .three{
            display: flex;
            flex-direction: column
          }
          .two img{
            height: 769px
          }
          `}
          </style>
      </div>
    )
  }
  

  export async function getServerSideProps() {
    const publications = await Client().query(
        Prismic.Predicates.at("document.type", "publication_page")
    )

    // console.log(publications)

    return {
        props: {
          new_pub: publications.results
        }
    }
}