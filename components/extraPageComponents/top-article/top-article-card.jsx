import React from "react";

const TopArticleCard = ({number, title, date}) => {
    return (
        <React.Fragment>
        <div className="toparticlecard">
            <h3 className="toparticlecard-number">{number}</h3>
            <div>
            <h3 className="toparticlecard-title">{title}</h3>
            <small>{date}</small>
            </div>
            
        </div>
        <style jsx global>
          {`
        .toparticlecard {
            margin: auto;
            display: flex;
            align-item: flex-end !important;
            width: 90%
        }
        .toparticlecard-number{
            font-size: 48px;
            width: 20%;
            color: #38465E;
        }
        .toparticlecard-title{
            font-size: 30px;
            width: 70%
        }
         h3{
            margin-bottom: 0;   
            }
    `}
    </style>
        </React.Fragment>
    );
};


export default TopArticleCard;