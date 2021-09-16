import styles from './contactField.module.css';
import { ErrorMessage, useField } from 'formik';


export const ContactField = (props) => {
    const { name, placeholder, isNotRequired, onChange = () => { }, type,...rest } = props;
    const [field, meta, helpers] = useField(props);
    console.log(meta)
    return (
        <div className={styles.contact_field}>
            <label htmlFor={name}>{placeholder}</label>
            {type ?
                <textarea required={!isNotRequired} maxLength={160} className={`${styles.input} ${meta.touched && meta.error&&styles.error}`} name={name} id={name} cols="30" rows="5" {...field} {...props.rest} onChange={(e)=>field.onChange(e)}></textarea>
                :
                <input aria-required='true' className={`${styles.input} ${meta.touched && meta.error&&styles.error}`} type="text" name={name} required={true} id={name} {...field} {...props.rest} onChange={(e)=>field.onChange(e)} />
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