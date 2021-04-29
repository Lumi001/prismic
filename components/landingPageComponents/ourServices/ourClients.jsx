import Heading from '../../extraPageComponents/heading/heading';
import styles from './ourClients.module.css';

const OurClients = ({ heading, items }) => {
    return (
        <section className={styles.container}>
            <Heading title={heading}/>
            <section>
                {items.map(item => {
                    return (
                        <img src={item.partner_image.url} alt="" key={Math.random()} />
                    )
                })}
            </section>
        </section>
    );
};

export default OurClients;