import { Link } from 'prismic-reactjs';
import styles from './card.module.css';
import Link2 from 'next/link';
import Button from "../../extraPageComponents/button/button";
import React from 'react';


const Card1 = ({isCaseStudy,title,tag,content,link_text,articleId,img,date,link,id, color}) =>{

return(
  <React.Fragment>
    <div className={styles.card1}>
      <div id={id} className={styles.img} style={{backgroundColor:`${color}`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat", backgroundImage:`url(${img})`, borderRadius: "10px"}}> </div>
     { date ?
      <div className={styles.date}>{date}</div> :
      <small>{tag}</small>
      }
      <h3 >{title}</h3>
      <p>{content}</p>
      {!link_text ? (
      <span>
        ...
        <Link2 href={`/content/${articleId}`}>
          <a>
            continue reading
            </a>
        </Link2>
      </span>
    ) : (
        <Button secondary articleId={articleId} isCaseStudy text={link_text} />
  
      )}
    {/* {link ? (
      <div id={id} className={styles.link}>
        <div className={styles.linktext}>{link} </div>
        <div className={styles.linklogo}>
          <svg
            width="22"
            height="16"
            viewBox="0 0 22 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.7071 8.70711C22.0976 8.31659 22.0976 7.68342 21.7071 7.2929L15.3431 0.928935C14.9526 0.53841 14.3195 0.53841 13.9289 0.928935C13.5384 1.31946 13.5384 1.95262 13.9289 2.34315L19.5858 8L13.9289 13.6569C13.5384 14.0474 13.5384 14.6805 13.9289 15.0711C14.3195 15.4616 14.9526 15.4616 15.3431 15.0711L21.7071 8.70711ZM-1.74846e-07 9L21 9L21 7L1.74846e-07 7L-1.74846e-07 9Z"
              fill="#313131"
            />
          </svg>
        </div>
      </div>
    ) : (
        ""
      )} */}
       </div>
       <style jsx global>
          {`
          #big2{
            height: 700px;
            width: 570px;
              }
              @media only screen and (max-width: 999px) {
                #big2{
                    height: 700px;
                    width: 100%;
              }
              }
          `}
          </style>
 
  </React.Fragment>
)
            }
            ;


      export default Card1
  