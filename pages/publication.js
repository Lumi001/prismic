import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Card from '../components/extraPageComponents/card/card';
import Card1 from '../components/publicationPageComponents/card/card1';
import Heading from '../components/extraPageComponents/heading/heading';
import TopArticleList from '../components/extraPageComponents/top-article/top-article-list';
import Searchbar from '../components/extraPageComponents/searchbar/searchbar';
import Prismic from 'prismic-javascript';
import { Client } from '../prismic-configuration';
import React from 'react';

export default function Publication({new_pub, other_pub, top_3_article}) {
    return (
      // <div className={styles.container}>
      <React.Fragment>
        <Head>
        <title>TruCSR</title>
        <link rel="icon" href="/favicon.ico"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Avenir:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet" />
      </Head>


          <div className="container">          
          <h2 className="h2">Publications & News</h2>   

          <div className="column" >
          <div className="publication">
          <h3 className="h3">New Publications</h3>        
          <Searchbar />
          </div>

        <div className={"one"}>
          <div className="two">
            <Card1 
              key={Math.random()} 
              id="big"
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
          <h3 className="h3-1">Other Publications</h3>
          <div className="other">
            {other_pub.map(card => <Card1 key={Math.random()}  articleId='asdf' title={card.pub_title[0].text} 
            date={card.pub_date} content={card.pub_content[0].text} link_text={card.link_text} img={other_pub[2].pub_image.url} color={card.color}/>)}         
            <div className="article"><TopArticleList top_3_article={top_3_article}/></div>     
          </div>
        </div>

              </div>
        <style jsx global>
          {`
          .container {
            display: flex;
            margin: auto;
            flex-direction: column;
            align-content: center;
            justify-content: center;
            padding-top: 50px;
            width: 1200px;
          }
          .container #h2{
            width: 935px;
          }
          .h3{
            font-family: 'Inter';
            font-style: normal;
            font-weight: bold;
            font-size: 28px !important;
            line-height: 152.6%;
            letter-spacing: 0.01em;
            color: #38465E;
          }
          .h2{
            font-family: 'Inter';
            font-style: normal;
            font-weight: bold;
            font-size: 50px !important;
            line-height: 152.6%;
            letter-spacing: 0.01em;
            color: #38465E;
            padding: 0 13px;
          }
          .h3-1{
            font-family: 'Inter';
            font-style: normal;
            font-weight: bold;
            font-size: 28px !important;
            line-height: 152.6%;
            letter-spacing: 0.01em;
            color: #38465E;
          }
          .publication {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            width: 100%;
            align-items: center;
            padding: 0 17px;
          }
          .one {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            width: 100%;
          }
          .other {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }
          .column {
            display: flex;
            flex-direction: column;
            width: 100%
          }

          .three{
            display: flex;
            flex-direction: column;
            margin-left: 17px;
          }
          .article{
            width: 560px
          }
          #big{
            height: 700px;
            width: 642px;
          }
          @media only screen and (max-width: 768px) {
            
}
          `}
          </style>
          </React.Fragment>
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