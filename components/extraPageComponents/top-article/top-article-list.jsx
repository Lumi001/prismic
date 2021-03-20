import React from "react";
import Heading from "../heading/heading";
import TopArticleCard from './top-article-card'

const TopArticleList = ({top_3_article}) => {

    return (
        <React.Fragment>
        <div className="toparticlelist">
            <Heading title="Top 3 articles"/>
        {top_3_article.map((topArticle, i) => <TopArticleCard 
        number={i+1} 
        title={top_3_article[0].article_title[0].text} 
        date={top_3_article[0].article_date[0].text}/>)}
        </div>
        <style jsx global>
          {`
        .toparticlelist {
            background-color: #E5E5E5;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            margin-top: 39px
        }
        }
    `}
    </style>
        </React.Fragment>
    );
};


export default TopArticleList;