import Link from 'next/link';
import styles from './carousel.module.css';

// const data = {
//   title: `We are in the
//   business of 
//   sustainability`,
//   content: `TCSRN founded in 2006,  is a consulting company that helps organisations to contribute to their societal goals of a philanthropic, activist, or charitable nature by engaging in or supporting volunteering or ethically-oriented practices.`,
//   link: 'EXPLORE SITE',
//   img: "/carousel/Frame.png"
// }
// const {title, content,link, img} = data;
const Carousel = ({title, content,link, image}) => (
  <div className={styles.carousel}>
    <button className={styles.buttonleft}>
      <img src="/carousel/chevron-left.svg" alt="Left chevron icon" />
    </button>
    <section className={styles.left}>
    <h1>{title}</h1>
    <p>{content}</p>
    {/* <a>{link}<span><img src="/carousel/Arrow.png" alt=""/></span></a> */}
    <Link href="#">
      <a className={styles.linkWrapper}>
        <span>{link}</span>
        <img src="/black-arrow-right.svg" alt="Right black arrow" />
      </a>
    </Link>
    </section>
    <section className={styles.right}>
      <img src={image} alt="" />
    </section>
    <button className={styles.buttonright}>
      <img src="/carousel/chevron-right.svg" alt="Right chevron icon" />
    </button>
  </div>
)
export default Carousel