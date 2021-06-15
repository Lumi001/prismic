import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Card from '../components/extraPageComponents/card/card';
import Card1 from '../components/publicationPageComponents/card/card1';
import TopArticleCard from '../components/publicationPageComponents/top-article/top-article-card';
import Searchbar from '../components/extraPageComponents/searchbar/searchbar';
import Prismic from 'prismic-javascript';
import { Client } from '../prismic-configuration';
import React, { useState, useRef, useEffect } from 'react';

import Heading from '../components/extraPageComponents/heading/heading'
import { connect } from 'react-redux';
import { navbarContentAction } from '../redux/navbar/navbar.actions';



function Publication({pub,new_pub, other_pub, top_3_article,setNavbarColour}) {
  const search = useRef(null);
 
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    setNavbarColour('third')
})
  // console.log(p ub)
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
          {searchTerm == "" ? <h3 className="h3">New Publications</h3> : <h3 className="h3">Search Results...</h3>}        
          <Searchbar ref={search} setChange={(e) => setSearchTerm(e.target.value)} searchTerm={searchTerm}/>
          </div>
          { searchTerm == "" ? 
          (
            <>
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
          />)}            
        }
        ).reverse()}

        </div>
        <div className="three">
          <div className="four">
          </div>
          <div className="five">
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
             />)}            
           }
           )}
             <div className="article">
             <div className="toparticlelist">
             <h3 className="h3-2">Top 3 articles</h3>
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
                </div>     
           </div>
         </div>
        </> 
          )
          
          : 
          
          (    
            <div className='other'>   
              {
             pub.filter((card, i) => {
            if (searchTerm == '') {
              return card
            } else if (card.data.title[0].text.toLowerCase().includes(searchTerm.toLowerCase())) {
              return card
            }
          }).map((card, i) => {
            return(
              <Card1 
                key={Math.random()}   
                title={card.data.title[0].text}
                content={card.data.post_content[0].text}
                img={card.data.post_image.url} 
                date={card.data.pub_date}
                color={card.data.color}
                link_text={card.data.link_text}
                isCaseStudy={true}
                articleId={card.id}
              />
              )
          })
        }
          </div>)
          }
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
          .h3-2{
            font-family: 'Inter';
            font-style: normal;
            font-weight: bold;
            font-size: 36px !important;
            line-height: 152.6%;
            letter-spacing: 0.01em;
            color: #38465E;
            padding-right: 13rem;
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
            margin-top: 34px;
            margin-bottom: 150px
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
  const mapDispatchToProps = dispatch => ({
    setNavbarColour:mode=>dispatch(navbarContentAction(mode)),
  })
  export default connect(null,mapDispatchToProps)(Publication)
  

  export async function getServerSideProps() {
    const publications = await Client().query(
        Prismic.Predicates.at("my.post.destination_page", "Publications & News")
    )

    return {
        props: {
          pub: publications.results,
        }
    }
}