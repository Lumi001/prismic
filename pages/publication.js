import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Card from '../components/extraPageComponents/card/card';
import Card1 from '../components/extraPageComponents/card/card1';
import Heading from '../components/extraPageComponents/heading/heading';
import TopArticleList from '../components/extraPageComponents/top-article/top-article-list';
import Searchbar from '../components/extraPageComponents/searchbar/searchbar';
import Prismic from 'prismic-javascript';
import { Client } from '../prismic-configuration';

export default function Publication({new_pub, other_pub, top_3_article}) {
console.log(other_pub)
    return (
      <div className={styles.container}>
        <Head>
        <title>TruCSR</title>
        <link rel="icon" href="/favicon.ico"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Avenir:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet" />
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
            <Card1 
              key={Math.random()} 
              title={new_pub[0].pub_title[0].text} 
              articleId='asdf'
              date={new_pub[0].pub_date} 
              content={new_pub[0].pub_content[0].text} 
              link_text={new_pub[0].link_text} 
              img={new_pub[0].pub_image.url} 
              color={new_pub[0].color}
            />
          </div>
          <div className="three">
            <div className="four">
              <Card1 
                key={Math.random()} 
                title={new_pub[1].pub_title[0].text} 
                articleId='asdf'
                date={new_pub[1].pub_date} 
                content={new_pub[1].pub_content[0].text} 
                link_text={new_pub[1].link_text} 
                img={new_pub[1].pub_image.url} 
                color={new_pub[1].color}
              />
            </div>
            <div className="five">
              <Card1 
                key={Math.random()} 
                title={new_pub[2].pub_title[0].text} 
                articleId='asdf' 
                date={new_pub[2].pub_date} 
                content={new_pub[2].pub_content[0].text} 
                link_text={new_pub[2].link_text} 
                img={new_pub[2].pub_image.url} 
                color={new_pub[2].color}
              />
            </div>
          </div>
          </div>
        </div>
        

        <div className="column">
        <Heading title="Other Publications" />
        <div className="other">
          {other_pub.map(card => <Card1 key={Math.random()}  articleId='asdf' title={card.pub_title[0].text} 
            date={card.pub_date} content={card.pub_content[0].text} link_text={card.link_text} img={other_pub[2].pub_image.url} color={card.color}/>)}         
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
          #big{
            height: 769px
          }
          @media only screen and (max-width: 768px) {
            .other{
                  grid-template-columns: 100%;
                }
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