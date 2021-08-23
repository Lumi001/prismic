import * as Yup from 'yup';
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const ContactSchema = Yup.object({
    name: Yup.string()
    .min(3, 'must be 3 characters or more')
    .required('Required'),
    company_name: Yup.string()
    .min(3, 'must be 3 characters or more')
    .required('Required'),
    additional_message: Yup.string()
    .min(2, 'Too Short!')
    .max(160, 'Too Long!')
    .required('City is required'),
    email: Yup.string()
    .email('Email is Invalid')
    .required('Required'),
    number: Yup.string()
    .min(10, 'must be a valid phone number')
    .max(11, 'must be a valid phone number')
    .required('Required')
    .matches(phoneRegExp,'must be a valid phone number')    
})
export default ContactSchema;