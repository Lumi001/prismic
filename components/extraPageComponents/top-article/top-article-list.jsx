import React from "react";
import Heading from "../heading/heading";
import TopArticleCard from './top-article-card'

const TopArticleList = () => {
    const topArticles = [
        {title: "TruCSR Academy now taking Software dev courses", date: "15 MAR, 2021"},
        {title: "TruCSR Academy now taking Software dev courses", date: "15 MAR, 2021"},
        {title: "TruCSR Academy now taking Software dev courses", date: "15 MAR, 2021"}
    ]
    return (
        <React.Fragment>
        <div className="toparticlelist">
            <Heading title="Top 3 articles"/>
        {topArticles.map((topArticle, i) => <TopArticleCard number={i+1} title={topArticle.title} date={topArticle.date}/>)}
        </div>
        <style jsx global>
          {`
        .toparticlelist {
            background-color: #E5E5E5;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            height: 90%;
            margin-top: 39px
        }
        }
    `}
    </style>
        </React.Fragment>
    );
};


export default TopArticleList;