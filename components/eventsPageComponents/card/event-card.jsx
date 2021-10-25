// import { Link } from 'prismic-reactjs';
import styles from './card.module.css';
import Link from 'next/link';
import Button from "../../../components/eventsPageComponents/button-card/button";
import CarouselC from '../carousel-card/carousel';

const items = [
  "https://i.ibb.co/SNZdSsX/df348c43-2661-481f-bdcc-6169ddbc750a-Rectangle-350.png",
  "https://i.ibb.co/SNZdSsX/df348c43-2661-481f-bdcc-6169ddbc750a-Rectangle-350.png",
  "https://i.ibb.co/SNZdSsX/df348c43-2661-481f-bdcc-6169ddbc750a-Rectangle-350.png"
]



const EventCard = ({articleId, link_text,title,tag,content,img,date,link,id, color}) => {
  // console.log(img)
  
  return (

    <div className={styles.event_card}>
       {/* <Link href="/"> */}
       <CarouselC items= {img}/>
     
         {/* <div id={id} className={styles.img} style={{backgroundColor:`${color}`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat", backgroundImage:`url(${img})`}}> </div> */}
         {/* </Link> */}
     { date ?
      <div className={styles.date}>{date}</div> :
      <small>{tag}</small>
      }
      <h3 >{title}</h3>
      <p>{content}</p>
      {!link_text ? (
      <span>
        ...
        <Link href={`/content/${articleId}`}>
          <a>
            continue reading
            </a>
        </Link>                                                                                    
      </span>
    ) : (
        <Button secondary articleId={articleId} isCaseStudy text={link_text} />
  
      )}
    
  </div>
)}

      export default EventCard
  