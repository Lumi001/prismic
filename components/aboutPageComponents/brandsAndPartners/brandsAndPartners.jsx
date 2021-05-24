import Link from 'next/link';
import TitleAndSubTitle from '../titleAndSubTitle/titleAndSubTitle';
import styles from './brandsAndPartners.module.css';



const BrandsAndPartners = ({heading, subHeading, items1,items2,link, href}) => {
    return (
        <div className={styles.container}>
            <div className={styles.brands_and_partners}>
                <TitleAndSubTitle heading={heading?heading:""} subHeading={subHeading?subHeading:""} />
                <section className={styles.cards}>
                    <section className={styles.top}>
                        {items1.map(item => {
                            return (
                                <section>
                                <img src={item.partner_image?item.partner_image.url:""} alt=""/>
                                </section>
                            )
                        })}
                    </section>
                    <section className={styles.bottom}>
                        {items2.map(item => {
                            return (
                                <section>
                                <h3>{item.heading&&item.heading[0]?item.heading[0].text:""}</h3>
                                <p>{item.sub_text&&item.sub_text[0]?item.sub_text[0].text:""}</p>
                                </section>
                            )
                        })}
                    </section>
                </section>
                <Link href={href}><a>{link}<span><img src="/button/arrow.png" alt=""/></span></a></Link>
            </div>
        </div>
    );
};

export default BrandsAndPartners;