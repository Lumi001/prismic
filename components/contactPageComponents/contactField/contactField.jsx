import styles from './contactField.module.css';

const ContactField = ({ name, placeholder,onChange }) => {
    return (
        <div className={styles.contact_field}>
            <label htmlFor={name}>{placeholder}</label>
            <input type="text" name={name} required id={name} onChange={onChange}/>
            {/* <h3>{title}</h3>
            {items.map(item=><p>{item}</p>)} */}
        </div>
    );
};

export default ContactField;