import styles from './carousel.module.css';

const data = {
  title: `We are in the
  business of 
  sustainability`,
  content: `TCSRN founded in 2006,  is a consulting company that helps organisations to contribute to their societal goals of a philanthropic, activist, or charitable nature by engaging in or supporting volunteering or ethically-oriented practices.`,
  link: 'EXPLORE SITE',
  img: "/carousel/Frame.png"
}
const {title, content,link, img} = data;
const Carousel = () => (
  <div className={styles.carousel}>
    <section className={styles.left}>
    <h1>{title}</h1>
    <p>{content}</p>
    <a href="#">{link}</a>
    </section>
    <section className={styles.right}>
      <img src={img} alt="" />
    </section>
  </div>
)
export default Carousel