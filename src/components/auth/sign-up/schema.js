import * as Yup from "yup";

export default Yup.object().shape({
    firstName: Yup.string()
        .min(1, 'First name is too short')
        .max(70, 'First name is too long')
        .required('Field is required'),
    lastName: Yup.string()
        .min(1, 'Last name is too short')
        .max(70, 'Last name is too long')
        .required('Field is required'),
    login: Yup.string()
        .min(1, 'Last name is too short')
        .max(70, 'Last name is too long')
        .required('Field is required'),
    email: Yup.string()
        .email('Invalid Email')
        .required('Field is required'),
    password: Yup.string()
        .matches(/[A-Za-z0-9]{2,50}/)
        .required('Field is required'),
    repeatedPassword: Yup.string()
        .required('Passwords does not match')
})