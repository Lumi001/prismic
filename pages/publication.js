import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Card from '../components/extraPageComponents/card/card';
import Heading from '../components/extraPageComponents/heading/heading';
import TopArticleList from '../components/extraPageComponents/top-article/top-article-list';
import Searchbar from '../components/extraPageComponents/searchbar/searchbar';
import Prismic from 'prismic-javascript';
import { Client } from '../prismic-configuration';

export default function Publication({new_pub, other_pub, top_3_article}) {

    return (
      <div className={styles.container}>
        <Head>
        <title>TruCSR</title>
        <link rel="icon" href="/favicon.ico"/>
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
          <Heading className="pub_heading_size" title="New Publications" />
        <div className={"one"}>
          <div className="two">
          <Card id="big" key={Math.random()} 
          title={new_pub[0].pub_title[0].text} 
          date={new_pub[0].pub_date} content={new_pub[0].pub_content[0].text} link={new_pub[0].link_text}/>
          </div>
          <div className="three">
            <div className="four">
            <Card key={Math.random()} 
            title={new_pub[1].pub_title[0].text} 
            date={new_pub[1].pub_date} content={new_pub[1].pub_content[0].text} link={new_pub[1].link_text}/>
            </div>
            <div className="five">
            <Card 
            key={Math.random()} 
            title={new_pub[2].pub_title[0].text} 
            date={new_pub[2].pub_date} content={new_pub[2].pub_content[0].text} link={new_pub[2].link_text}/>
            </div>
          </div>
          </div>
        </div>
        

        <div className="column">
        <Heading title="Other Publications" />
        <div className="other">
          {other_pub.map(card => <Card title={other_pub[2].pub_title[0].text} 
            date={other_pub[2].pub_date} content={other_pub[2].pub_content[0].text} link={other_pub[2].link_text}/>)}         
              <TopArticleList top_3_article={top_3_article}/>      
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
        Prismic.Predicates.at("document.type", "publication")
    )

    // console.log(publications)

    return {
        props: {
          new_pub: publications.results[0].data.body[0].items,
          other_pub: publications.results[0].data.body[1].items,
          top_3_article: publications.results[0].data.body[2].items
        }
    }
}