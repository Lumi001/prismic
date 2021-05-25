import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Card from '../components/extraPageComponents/card/card';
import Card1 from '../components/publicationPageComponents/card/card1';
import TopArticleCard from '../components/publicationPageComponents/top-article/top-article-card';
import Searchbar from '../components/extraPageComponents/searchbar/searchbar';
import Prismic from 'prismic-javascript';
import { Client } from '../prismic-configuration';
import React from 'react';
import Heading from '../components/extraPageComponents/heading/heading'

export default function Publication({pub,new_pub, other_pub, top_3_article}) {
  // console.log(pub)
    return (
      // <div className={styles.container}>
      <React.Fragment>
        <Head>
        <title>TruCSR</title>
        <link rel="icon" href="/favicon.ico"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Avenir:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet" />
      </Head>


          <div className="container">    
          <br/>
          <br/>      
          <h2 className="h2">Publications & News</h2>   

          <div className="column" >
          <div className="publication">
          <h3 className="h3">New Publications</h3>        
          <Searchbar />
          </div>

        <div className={"one"}>
          <div className="other1">
          {  
          pub.map((card, i) =>{
            if(pub.indexOf(card) < 3){ return(
            <Card1 
              key={Math.random()}   
              title={card.data.title[0].text}
              content={card.data.post_content[0].text}
              img={card.data.post_image.url} 
              date={card.data.pub_date}
              color={card.data.color}
              link_text={card.data.link_text} 
              id={`${'big' + i}`}
              isCaseStudy={true}
              articleId={card.id}
              // content={card.post_content[0].text.substring(0, 100)}
            />)}            
          }
          ).reverse()}
            {/* <Card1 
              key={Math.random()} 
              id="big"
              title={new_pub[0].pub_title[0].text} 
              articleId='asdf'
              date={new_pub[0].pub_date} 
              content={new_pub[0].pub_content[0].text} 
              link_text={new_pub[0].link_text} 
              img={new_pub[0].pub_image.url} 
              color={new_pub[0].color}
              articleId={'asdf'} 
              isCaseStudy={true}
            /> */}
          </div>
          <div className="three">
            <div className="four">
              {/* <Card1 
                key={Math.random()} 
                title={new_pub[1].pub_title[0].text} 
                articleId='asdf'
                date={new_pub[1].pub_date} 
                content={new_pub[1].pub_content[0].text} 
                link_text={new_pub[1].link_text} 
                img={new_pub[1].pub_image.url} 
                color={new_pub[1].color}
              /> */}
            </div>
            <div className="five">
              {/* <Card1 
                key={Math.random()} 
                title={new_pub[2].pub_title[0].text} 
                articleId='asdf' 
                date={new_pub[2].pub_date} 
                content={new_pub[2].pub_content[0].text} 
                link_text={new_pub[2].link_text} 
                img={new_pub[2].pub_image.url} 
                color={new_pub[2].color}
              /> */}
            </div>
          </div>
          </div>
        </div>
        
              <br/>
              <br/>
              <br/>
        <div className="column">
          <h3 className="h3-1">Other Publications</h3>
          <div className="other">
          {  
          pub.map(card =>{
            if(pub.indexOf(card) > 2){ return(
            <Card1 
              key={Math.random()}  
              title={card.data.title[0].text} 
              key={Math.random()} 
              content={card.data.post_content[0].text}
              img={card.data.post_image.url} 
              date={card.data.pub_date}
              color={card.data.color}
              link_text={card.data.link_text} 
              isCaseStudy={true}
              articleId={card.id}
              // content={card.post_content[0].text.substring(0, 100)}
            />)}            
          }
          )}
        
            {/* {other_pub.map(card => <Card1 key={Math.random()}  articleId='asdf' title={card.pub_title[0].text}  */}
            {/* date={card.pub_date} content={card.pub_content[0].text} link_text={card.link_text} img={other_pub[2].pub_image.url} color={card.color}/>)}          */}
            <div className="article">
            <div className="toparticlelist">
            <Heading title="Top 3 articles"/>
                {
                pub.map((card, i) => { 
                  if(pub.indexOf(card) < 3)
                { 
                return( <TopArticleCard 
                key={Math.random()} 
                number={i + 1} 
                title={card.data.title[0].text}  
                date={card.data.pub_date}
                />)}})}
        </div>
        {/* <TopArticleList title= {card.data.title[0].text}/> */}
               </div>     
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
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
            width: 100%;
            align-items: center;
            padding: 0 17px;
          }
          .toparticlelist {
            background-color: #E5E5E5;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 94%;
            padding: 15px;
            margin-bottom: 26px
          }
          .other {
            display: grid;
            grid-template-columns: 50% 50%;
          }
          .other1 {
            display: grid;
            grid-template-columns: 55% 45%;
          }
          .column {
            display: flex;
            flex-direction: column;
            width: 100%;
          }
        
          @media only screen and (max-width: 999px) {
            .container{
              width: 90%;
            }
            .one{
              flex-direction: column;
            }
            .other{
              grid-template-columns: 100%;
            }
            .other1{
              grid-template-columns: 100%;
            }
            #big{
              height: 100%;
              width: 100%;
            }
            .h2{
              text-align: center;
              font-size: 2.5rem !important;
            }
            .two{
              width: 100%;
            }
            .three{
              width: 100%;
            }
}
          `}
          </style>
          </React.Fragment>
    )
  } 
  

  export async function getServerSideProps() {
    const publications = await Client().query(
        Prismic.Predicates.at("my.post.destination_page", "Publications & News")
    )

    // console.log(publications.results[0].data)

    return {
        props: {
          pub: publications.results,
          // new_pub: publications.results[0].data.body[0].items,
          // other_pub: publications.results[0].data.body[1].items,
          // top_3_article: publications.results[0].data.body[2].items 
        }
    }
}