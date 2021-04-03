import * as Yup from "yup";

export default Yup.object().shape({
    login: Yup.string()
        .min(1, 'Last name is too short')
        .max(70, 'Last name is too long')
        .required('Field is required'),
    password: Yup.string()
        .matches(/[A-Za-z0-9]{2,50}/)
        .required('Field is required')
})