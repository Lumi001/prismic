import styles from './contactItem.module.css';
import { RichText } from 'prismic-reactjs'

const ContactItems = ({ items }) => {
    return (
        <div className={styles.contact_item}>
            {
                items.map(item =>
                    <div key={Math.random()}>
                        {/* {console.log(item)} */}
                        <h3>{item.primary&&item.primary.heading?item.primary.heading:""}</h3>
                        {item.items.map(each => <p key={Math.random()}>{Object.values(each)[0]}</p>)}
                    </div>
                )
            }
        </div>
    );
};

export default ContactItems;