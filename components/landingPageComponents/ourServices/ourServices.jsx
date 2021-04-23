import Heading from '../../extraPageComponents/heading/heading';
import styles from './ourServices.module.css';

const OurServicesIndex = ({ heading, items }) => {
    return (
        <section className={styles.container}>
            <Heading title={heading}/>
            <section>
                {items.map(item => {
                    return (
                        <img src={item.partner_image.url} alt="" />
                    )
                })}
            </section>
        </section>
    );
};

export default OurServicesIndex;