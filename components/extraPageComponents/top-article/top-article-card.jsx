import React from "react";

const TopArticleCard = ({number, title, date}) => {
    return (
        <React.Fragment>
        <div className="toparticlecard">
            <h3 className="toparticlecard-number">{number}</h3>
            <div>
            <h3 className="toparticlecard-title">{title}</h3>
            <small className='date'>{date}</small>
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
            opacity: 0.2;
        }
        .toparticlecard-title{
            font-size: 30px;
            width: 70%;
            color: #38465E;

        }
         h3{
            margin-bottom: 0;   
            }
        .date{
            font-size: 16px;
            padding: 10px 0px;
            font-weight: 600;
            color: #878787;
            }
    `}
    </style>
        </React.Fragment>
    );
};


export default TopArticleCard;