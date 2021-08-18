import styles from './contactSelect.module.css';

const ContactSelect = ({ name, placeholder,onChange }) => {
    const options =[
        {text:"I'm interested in a career with you"},
        {text:"I'd like to tell you about an opportunity"}
    ]
    return (
        <div className={styles.contact_field}>
            <label htmlFor={name}>{placeholder}</label>
            {/* <input type="text" name={name} required id={name} onChange={onChange}/> */}
            <select name={name} onChange={(e)=>onChange(e.target.value)}>
                {options.map(option=><option>{option.text}</option>)}
            </select>
            {/* <h3>{title}</h3>
            {items.map(item=><p>{item}</p>)} */}
        </div>
    );
};

export default ContactSelect;