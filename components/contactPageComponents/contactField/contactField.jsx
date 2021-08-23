import styles from './contactField.module.css';
import { ErrorMessage, useField } from 'formik';


export const ContactField = ({ name, placeholder, onChange, type,...rest }) => {
    const [field, meta, helpers] = useField({ name, placeholder,...rest });
    return (
        <div className={styles.contact_field}>
            <label htmlFor={name}>{placeholder}</label>
            {type ?
                <textarea required={true} maxLength={160} className={styles.input} name={name} id={name} cols="30" rows="5" onChange={onChange}></textarea>
                :
                <input aria-required='true' className={styles.input} type="text" name={name} required={true} id={name} onChange={onChange} />
            }
            {/* <h3>{title}</h3>
            {items.map(item=><p>{item}</p>)} */}
            {meta.touched && meta.error &&
                <Hint>
                    <ErrorMessage name={field.name} />
                </Hint>
            }

        </div>
    );
};

export const Hint = ({ text, children, ...rest }) => (
    <div className={styles.hint} {...rest}>
        <img src="/icons/hint.svg" alt="Hint logo" />
        {text && <small>{text}</small>}
        {children && <small>{children}</small>}
    </div>
)