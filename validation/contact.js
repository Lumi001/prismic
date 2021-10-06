import * as Yup from 'yup';
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const ContactSchema = Yup.object({
    name: Yup.string()
    .min(3, 'must be 3 characters or more')
    .required('Required'),
    companyName: Yup.string()
    .min(3, 'must be 3 characters or more')
    .required('Required'),
    additionalMessage: Yup.string()
    .min(2, 'Too Short!')
    .max(160, 'Too Long!'),
    email: Yup.string()
    .email('Email is Invalid')
    .required('Required'),
    number: Yup.string()
    .min(7, 'must be a valid phone number')
    .required('Required')
    .matches(phoneRegExp,'must be a valid phone number')    
})
export default ContactSchema;