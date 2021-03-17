import Link from 'next/link';
import TitleAndSubTitle from '../titleAndSubTitle/titleAndSubTitle';
import styles from './brandsAndPartners.module.css';



const BrandsAndPartners = ({heading, subHeading, items1,items2,link, href}) => {
    return (
        <div className={styles.container}>
            <div className={styles.brands_and_partners}>
                <TitleAndSubTitle heading={heading} subHeading={subHeading} />
                <section className={styles.cards}>
                    <section className={styles.top}>
                        {items1.map(item => {
                            return (
                                <section>
                                <img src={item.image} alt=""/>
                                </section>
                            )
                        })}
                    </section>
                    <section className={styles.bottom}>
                        {items2.map(item => {
                            return (
                                <section>
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
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